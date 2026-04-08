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
- **Entrypoint:** `entrypoint.sh` (fixe permissions media, puis lance node via su-exec en tant que nextjs)
- **Domaine:** aibizshift.eu (HTTPS via Let's Encrypt)
- **Repo GitHub:** https://github.com/GuyS-Fr/Site_AIBizShift (public)
- **Variables d'environnement:** Configurees dans Coolify (build + runtime)
  - `DATABASE_URL`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SERVER_URL` (build + runtime)
  - `CRON_SECRET`, `PREVIEW_SECRET` (runtime)
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` (runtime, pour le formulaire contact)
- **Email:** SMTP via `@payloadcms/email-nodemailer` (variables SMTP_* dans Coolify)
- **Stockage persistant:** Volume Mount `aibizshift-media` → `/app/public/media` (requis pour que les fichiers media survivent aux redeploiements)
- **TODO:** Configurer webhook GitHub → Coolify pour deploiement automatique sur push

## Pages statiques

Les pages statiques sont dans `src/app/(frontend)/` et n'utilisent pas le layout builder Payload.
Les specs de design sont dans `Doc/Pages Statiques/`.

- **Homepage** (`page.tsx`) — Hero, probleme/solution, 4 services, credibilite, CTA audit
- **Services** (`services/page.tsx`) — 10 offres detaillees, processus en 4 etapes, CTA
- **Contact** — Page CMS via `[slug]`, formulaire gere par plugin form-builder + email SMTP

## Images statiques

Les images du site sont dans `public/images/`. Pour que Next.js les serve correctement :
- `localPatterns` dans `next.config.ts` doit inclure `/images/**`
- Le Dockerfile copie `public` APRES `standalone` (sinon les images sont ecrasees)

## Branding

- **Logo:** Texte stylise "AIBizShift" (composant `src/components/Logo/Logo.tsx`) — pas d'image SVG/PNG
- **Nom du consultant:** Guy Salvatore (PAS "Guy Music")
- **OpenGraph par defaut:** Configure dans `src/utilities/mergeOpenGraph.ts`
- **Twitter creator:** `@aibizshift` (dans `src/app/(frontend)/layout.tsx`)
- **Payload serverURL:** Configure dans `src/payload.config.ts` (necessaire pour /admin en production)

## Navigation

Le header et le footer globaux sont geres par **Payload CMS Globals** (base de donnees).
Pour modifier les liens de navigation : Admin → Globals → Header / Footer.

Le composant Footer (`src/Footer/Component.tsx`) filtre automatiquement le lien `/admin`.

Le seed (`src/endpoints/seed/index.ts`) configure les nav items par defaut :
- Header : Services, Blog, Contact
- Footer : vide (liens Payload/Admin supprimes)

## Documentation

Toute la documentation est dans `Doc/Pages Statiques/` :

| Fichier | Description |
|---------|-------------|
| `DOC_HOMEPAGE.md` | Doc technique de la homepage (sections, images, liens, SEO) |
| `DOC_SERVICES.md` | Doc technique de la page services (offres, tarifs, processus) |
| `DOC_CONTACT.md` | Doc technique du formulaire contact (SMTP, champs, emails) |
| `PROMPT_CLAUDE_CODE_HOMEPAGE_V3.md` | Spec de design homepage (version courante) |
| `PROMPT_CLAUDE_CODE_SERVICES.md` | Spec de design page services |
| `PROMPT_CLAUDE_CODE_HOMEPAGE.md` | Spec homepage V1 (archive) |
| `PROMPT_CLAUDE_CODE_HOMEPAGE_V2.md` | Spec homepage V2 (archive) |

## Problemes resolus (reference)

- **Images non affichees en prod:** `localPatterns` manquait `/images/**` + Dockerfile copiait `public` avant `standalone`
- **/admin inaccessible en prod:** `serverURL` manquant dans `payload.config.ts`
- **Build echoue:** `sassOptions` duplique dans `next.config.ts`
- **Secrets exposes:** `.gitignore` racine ajoute avant passage en repo public
- **Images media perdues apres redeploiement:** Volume Mount `aibizshift-media` → `/app/public/media` dans Coolify Persistent Storage
- **/admin et routes dynamiques KO en prod:** DATABASE_URL doit utiliser l'URL interne Coolify (hostname Docker), pas l'IP publique du serveur
- **Build Docker echoue sur cp media:** `public/media/` est gitignore, le Dockerfile gere le cas ou le dossier n'existe pas
- **Upload media EACCES en prod:** Le volume mount cree le dossier en root. L'entrypoint fixe les permissions avant de lancer l'app via su-exec en tant que nextjs

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
