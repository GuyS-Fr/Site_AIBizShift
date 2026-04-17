---
title: "Configuration Payload"
tags: [config, payload/collection, payload/global]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Configuration Payload

Fichier source : `src/payload.config.ts`. Exporté via `buildConfig({ ... })` consommé par `@payloadcms/next`.

## Serveur

- `serverURL: process.env.NEXT_PUBLIC_SERVER_URL || ''` — requis pour que `/admin` fonctionne en production, pour le CORS et pour les URL de preview.
- `cors: [getServerSideURL()].filter(Boolean)` — une seule origine autorisée, dérivée de la même variable. Voir [[variables-environnement]].
- `secret: process.env.PAYLOAD_SECRET` — JWT + utilisé comme sel dans le hash IP du formulaire de contact.

## Base de données

```typescript
// src/payload.config.ts
db: postgresAdapter({
  pool: { connectionString: process.env.DATABASE_URL || '' },
  prodMigrations:
    process.env.NEXT_PHASE === 'phase-production-build' ? undefined : migrations,
  push: false,
}),
```

- Adapter : `@payloadcms/db-postgres` 3.81.0.
- `push: false` — pas de sync automatique en dev ; obligation de générer une migration pour chaque changement de schéma.
- `prodMigrations` — appliqué automatiquement au démarrage en prod, **sauf** pendant `next build` où `NEXT_PHASE === 'phase-production-build'` le désactive.
- Registre : `src/migrations/index.ts` (auto-généré par `pnpm payload migrate:create`).

## Email

```typescript
// src/payload.config.ts
email: nodemailerAdapter({
  defaultFromAddress: process.env.SMTP_FROM || 'contact@aibizshift.eu',
  defaultFromName: 'AIBizShift',
  transportOptions: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 587 ? false : true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  },
}),
```

- Provider : **Brevo** (`smtp-relay.brevo.com`). OVH Zimbra avait été essayé puis abandonné (TLS rejecté).
- `secure` déduit du port : 587 → STARTTLS, sinon TLS direct.

## Éditeur global

```typescript
editor: defaultLexical,
```

Défini dans `src/fields/defaultLexical.ts` — features héritées par toutes les autres occurrences Lexical. Les blocks ajoutent leurs propres features au besoin (`FixedToolbarFeature`, `HeadingFeature`, etc.).

## Collections enregistrées

```typescript
collections: [Pages, Posts, Media, Categories, Users, ContactSubmissions],
```

Une note par collection dans [[03-payload/index|03-payload]] :
- [[collections/pages]]
- [[collections/posts]]
- [[collections/media]]
- [[collections/categories]]
- [[collections/users]]
- [[collections/contact-submissions]]

## Globals enregistrés

```typescript
globals: [Header, Footer],
```

Voir [[globals/header]] et [[globals/footer]].

## Plugins

```typescript
plugins,
```

Exportés depuis `src/plugins/index.ts`. Ordre et configurations :

1. **redirectsPlugin** — `collections: ['pages', 'posts']`, hook `afterChange: [revalidateRedirects]`, note admin ajoutée sur le champ `from` ("You will need to rebuild the website when changing this field").
2. **nestedDocsPlugin** — `collections: ['categories']`, `generateURL` concatène les slugs parents.
3. **seoPlugin** — `generateTitle` (suffixe "| Payload Website Template"), `generateURL` basé sur `getServerSideURL() + /${slug}`. *(Note : le suffixe est resté générique, voir point d'attention ci-dessous.)*
4. **formBuilderPlugin** — `fields: { payment: false }`, override Lexical du champ `confirmationMessage` (ajoute FixedToolbar + headings h1-h4).
5. **searchPlugin** — `collections: ['posts']`, `beforeSync: beforeSyncWithSearch`, `searchOverrides.fields` enrichis par `searchFields` (`src/search/fieldOverrides.ts`).

## Admin

```typescript
admin: {
  components: {
    beforeLogin: ['@/components/BeforeLogin'],
    beforeDashboard: ['@/components/BeforeDashboard'],
  },
  importMap: { baseDir: path.resolve(dirname) },
  user: Users.slug,
  livePreview: { breakpoints: [ mobile 375x667, tablet 768x1024, desktop 1440x900 ] },
},
```

- `user: Users.slug` — la collection d'authentification admin est `users`.
- Import map régénéré avec `pnpm generate:importmap` quand on ajoute ou modifie un composant custom admin.

## Sharp & TypeScript

- `sharp` fourni pour le pipeline image de `media` (resizes, focal point).
- `typescript.outputFile: path.resolve(dirname, 'payload-types.ts')` — régénérer avec `pnpm generate:types` après toute modif de schéma. **Ne jamais éditer `src/payload-types.ts` à la main.**

## Jobs

```typescript
jobs: {
  access: {
    run: ({ req }) => {
      if (req.user) return true
      const secret = process.env.CRON_SECRET
      if (!secret) return false
      return req.headers.get('authorization') === `Bearer ${secret}`
    },
  },
  tasks: [purgeOldSubmissions],
},
```

- Task unique : `purgeOldSubmissions` (`src/jobs/purgeOldSubmissions.ts`). Supprime les `contact-submissions` `createdAt < now - 24 mois`, 1000 max par run, 2 retries.
- Déclenchement : `POST /api/payload-jobs/run` avec `Authorization: Bearer $CRON_SECRET` et body `{ "queue": "default" }`. Cron Coolify quotidien.

## Points d'attention

- **Titre SEO générique** : `generateTitle` renvoie `"| Payload Website Template"` — à personnaliser (ex. `"| AIBizShift"`).
- **Pas de multi-locale** : `localization` n'est pas activé, tout le contenu est en français unique.
- **Pas de middleware** : aucune protection CSRF/CORS supplémentaire hors `cors`.

## Liens connexes

- [[variables-environnement]]
- [[next-config]]
- [[collections/contact-submissions]] — cible principale de la task jobs.
- [[ci-cd]] — workflow qui valide les versions Payload.
