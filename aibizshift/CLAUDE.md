# AIBizShift - Guide de developpement

Site vitrine de Guy Salvatore, consultant IA & automatisation pour PME.
Domaine : aibizshift.eu | Deploiement : Coolify (Docker) sur serveur souverain francais.

## Stack

- **Framework:** Next.js 16 (App Router) + Payload CMS 3.81
- **Base de donnees:** PostgreSQL (via @payloadcms/db-postgres)
- **Frontend:** React 19, Tailwind CSS 4, Radix UI
- **Editeur rich text:** Lexical (@payloadcms/richtext-lexical)
- **Tests:** Vitest (integration) + Playwright (e2e)
- **Package manager:** pnpm (v9 ou v10)
- **Node:** ^18.20.2 || >=20.9.0

## Commandes

```bash
pnpm dev                    # Serveur de dev
pnpm build                  # Build production
pnpm start                  # Serveur production
pnpm lint                   # ESLint
pnpm lint:fix               # ESLint avec corrections
pnpm test                   # Tests integration + e2e
pnpm test:int               # Tests integration (Vitest)
pnpm test:e2e               # Tests e2e (Playwright)
pnpm generate:types         # Regenerer payload-types.ts apres changement de schema
pnpm generate:importmap     # Regenerer import map apres ajout/modif de composants
tsc --noEmit                # Valider le TypeScript sans compiler
```

## Conventions de code

- **Indentation:** 2 espaces
- **Quotes:** Single quotes (`'`)
- **Semicolons:** Aucun
- **Trailing commas:** Partout (`all`)
- **Largeur max:** 100 caracteres
- **Fins de ligne:** LF
- **Encodage:** UTF-8

## Structure du projet

```
src/
  app/
    (frontend)/         # Routes publiques du site
      page.tsx          # Homepage (statique)
      services/         # Page Services (statique, 10 offres)
      posts/            # Blog (via Payload CMS)
      search/           # Recherche
      [slug]/           # Pages dynamiques CMS (contact, etc.)
    (payload)/          # Admin Payload + routes API
  blocks/               # Blocs de contenu pour le layout builder
  collections/          # Definitions des collections Payload (Users, Posts, Pages)
  components/           # Composants React reutilisables
    ui/                 # Composants UI (style Shadcn)
    Logo/               # Logo AIBizShift (texte stylise, pas d'image)
    Media/              # Composant media (images + videos)
  heros/                # Variantes de sections hero
  Header/               # Composant global Header (nav via CMS globals)
  Footer/               # Composant global Footer (filtre /admin en prod)
  fields/               # Types de champs Payload personnalises
  endpoints/            # Endpoints API personnalises
  hooks/                # Hooks React personnalises
  access/               # Logique de controle d'acces
  plugins/              # Plugins Payload personnalises
  providers/            # Contextes React (Theme, HeaderTheme)
  utilities/            # Fonctions utilitaires
  payload.config.ts     # Configuration principale Payload
  payload-types.ts      # Types auto-generes (ne pas modifier manuellement)
```

## Deploiement

- **Plateforme:** Coolify (Docker) sur serveur souverain
- **Dockerfile:** A la racine `/Dockerfile` (gere le sous-dossier `aibizshift/`)
- **Mode:** Next.js standalone (`output: 'standalone'` dans next.config.ts)
- **Port:** 3000
- **Domaine:** aibizshift.eu (HTTPS via Let's Encrypt)
- **Variables d'environnement:** Configurees dans Coolify (build + runtime)
  - `DATABASE_URL`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SERVER_URL` (build + runtime)
  - `CRON_SECRET`, `PREVIEW_SECRET` (runtime)

## Pages statiques

Les pages statiques sont dans `src/app/(frontend)/` et n'utilisent pas le layout builder Payload.
Les specs de design sont dans `Doc/Pages Statiques/`.

- **Homepage** (`page.tsx`) — Hero, probleme/solution, 4 services, credibilite, CTA audit
- **Services** (`services/page.tsx`) — 10 offres detaillees, processus en 4 etapes, CTA

## Images statiques

Les images du site sont dans `public/images/`. Pour que Next.js les serve correctement :
- `localPatterns` dans `next.config.ts` doit inclure `/images/**`
- Le Dockerfile copie `public` APRES `standalone` (sinon les images sont ecrasees)

## Regles de securite critiques (Payload CMS)

### 1. Local API bypass le controle d'acces par defaut

```typescript
// MAUVAIS - access control ignore
const posts = await payload.find({ collection: 'posts', user })

// BON - access control applique
const posts = await payload.find({ collection: 'posts', user, overrideAccess: false })
```

### 2. Toujours passer `req` dans les hooks pour la securite des transactions

```typescript
// MAUVAIS - brise l'atomicite de la transaction
const afterChangeHook: CollectionAfterChangeHook = async ({ doc }) => {
  await payload.update({ collection: 'other', id: doc.relatedId, data: { ... } })
}

// BON - maintient le contexte de transaction
const afterChangeHook: CollectionAfterChangeHook = async ({ doc, req }) => {
  await req.payload.update({ collection: 'other', id: doc.relatedId, data: { ... }, req })
}
```

### 3. Utiliser `req.context` pour eviter les boucles infinies dans les hooks

```typescript
const afterChangeHook: CollectionAfterChangeHook = async ({ doc, req }) => {
  if (req.context.skipAfterChange) return doc
  await req.payload.update({
    collection: 'posts',
    id: doc.id,
    data: { ... },
    req,
    context: { skipAfterChange: true },
  })
  return doc
}
```

## Plugins Payload actifs

- `plugin-form-builder` - Constructeur de formulaires
- `plugin-nested-docs` - Documents imbriques
- `plugin-redirects` - Redirections
- `plugin-search` - Recherche
- `plugin-seo` - SEO

## Variables d'environnement

Voir `.env.example` pour la liste des variables requises.

## Documentation Payload CMS detaillee

Voir `AGENTS.md` pour les patterns complets : collections, champs, hooks, access control, queries, composants admin, endpoints, plugins, et bonnes pratiques.
