---
title: "Access control Payload"
tags: [payload/access, config]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Access control Payload

Trois helpers unifient la politique d'accès sur toutes les collections. Chaque collection les combine dans son objet `access: {}`.

## Helpers

### `authenticated`

```typescript
// src/access/authenticated.ts
export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}
```

Retourne `true` ssi un utilisateur est connecté (cookie Payload JWT valide).

### `authenticatedOrPublished`

```typescript
// src/access/authenticatedOrPublished.ts
export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}
```

Les utilisateurs authentifiés voient tout (drafts compris). Les anonymes ne reçoivent qu'un filtre `_status = 'published'` ajouté à la requête. C'est **le** mécanisme qui rend les drafts invisibles côté public.

### `anyone`

```typescript
// src/access/anyone.ts
export const anyone: Access = () => true
```

Accès public complet. Utilisé pour `media.read` et `categories.read` uniquement.

## Matrice par collection

| Collection | create | read | update | delete | admin |
|------------|--------|------|--------|--------|-------|
| [[collections/pages]] | authenticated | authenticatedOrPublished | authenticated | authenticated | — |
| [[collections/posts]] | authenticated | authenticatedOrPublished | authenticated | authenticated | — |
| [[collections/media]] | authenticated | **anyone** | authenticated | authenticated | — |
| [[collections/categories]] | authenticated | **anyone** | authenticated | authenticated | — |
| [[collections/users]] | authenticated | authenticated | authenticated | authenticated | authenticated |
| [[collections/contact-submissions]] | **`() => true`** | authenticated | authenticated | authenticated | authenticated |

## Globals

| Global | read |
|--------|------|
| [[globals/header]] | `() => true` |
| [[globals/footer]] | `() => true` |

Les globals n'ont pas de write access exposé : seul l'admin Payload peut les modifier via l'UI.

## Jobs

```typescript
// src/payload.config.ts
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

Endpoint `POST /api/payload-jobs/run` accepté si :
- utilisateur authentifié, **ou**
- header `Authorization: Bearer $CRON_SECRET`.

## Points de vigilance

- **`contact-submissions.create = () => true`** — nécessaire pour accepter les formulaires publics. La protection se fait en amont (rate limit + honeypot dans `src/app/api/contact/route.ts`).
- **Local API bypass par défaut** — toute requête `payload.find(...)` sans `overrideAccess: false` ignore la matrice ci-dessus. Rappel dans `CLAUDE.md` du repo.
- **Users.admin: authenticated** — tout user connecté peut atteindre le panneau admin. Pas de rôles RBAC.

## Liens connexes

- [[payload-config]] — câblage dans `buildConfig`.
- [[flux-de-donnees]] — où ces access sont réellement utilisés.
