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
      contact/          # Page Contact (statique, formulaire custom)
      a-propos/         # Page A propos (statique, parcours + differenciateurs)
      portfolio/        # Page Portfolio (statique, 4 projets)
      mentions-legales/ # Mentions legales (statique)
      confidentialite/  # Politique de confidentialite (statique, RGPD + nLPD)
      posts/            # Blog (via Payload CMS)
      search/           # Recherche
      [slug]/           # Pages dynamiques CMS (contact, etc.)
    (payload)/          # Admin Payload + routes API
    api/contact/        # API route formulaire (rate limit + persistance DB)
  blocks/               # Blocs de contenu pour le layout builder
  collections/          # Definitions des collections Payload (Users, Posts, Pages, ContactSubmissions)
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
  jobs/                 # Tasks Payload (purge auto, etc.)
  plugins/              # Plugins Payload personnalises
  providers/            # Contextes React (Theme, HeaderTheme)
  utilities/            # Fonctions utilitaires (rateLimit, getURL, etc.)
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
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` (runtime, Brevo pour le formulaire contact)
- **Email:** SMTP via Brevo (smtp-relay.brevo.com:587) — OVH Zimbra SMTP incompatible avec nodemailer
- **Stockage persistant:** Volume Mount `aibizshift-media` → `/app/public/media` (requis pour que les fichiers media survivent aux redeploiements)
- **Cron Coolify (compliance):** un cron quotidien doit appeler `POST /api/payload-jobs/run` avec `Authorization: Bearer $CRON_SECRET` et body `{"queue":"default"}` pour declencher la task `purgeOldSubmissions` (purge auto des contact-submissions > 24 mois — RGPD Art. 5(1)(e))
- **TODO:** Configurer webhook GitHub → Coolify pour deploiement automatique sur push

## Pages statiques

Les pages statiques sont dans `src/app/(frontend)/` et n'utilisent pas le layout builder Payload.
Les specs de design sont dans `Doc/Pages Statiques/`.

- **Homepage** (`page.tsx`) — Hero, probleme/solution, 4 services, credibilite, CTA audit
- **Services** (`services/page.tsx`) — 10 offres detaillees, processus en 4 etapes, CTA
- **Contact** (`contact/page.tsx`) — Formulaire custom 7 champs + API route `/api/contact` (2 emails via nodemailer)
- **A propos** (`a-propos/page.tsx`) — Parcours, differenciateurs, chiffres cles, formation, CTA
- **Portfolio** (`portfolio/page.tsx`) — 4 projets (OnPulse, AIBizShift, n8n, Audit) avec badges tech
- **Mentions legales** (`mentions-legales/page.tsx`) — Editeur, hebergement, propriete intellectuelle
- **Confidentialite** (`confidentialite/page.tsx`) — RGPD UE + nLPD Suisse : sous-traitants, transferts US (Calendly EU-US/Swiss-US DPF), droits, cookies, mineurs, securite

## Images statiques

Les images du site sont dans `public/images/`. Pour que Next.js les serve correctement :
- `localPatterns` dans `next.config.ts` doit inclure `/images/**`
- Le Dockerfile copie `public` APRES `standalone` (sinon les images sont ecrasees)

## Branding

- **Logo:** Texte stylise "AIBizShift" (composant `src/components/Logo/Logo.tsx`) — pas d'image SVG/PNG. Couleurs : AI ambre `#F59E0B` (fixe), Biz ardoise `#334155` clair / `#94A3B8` sombre, Shift bleu `#3B82F6` (fixe)
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
| `DOC_CONTACT.md` | Doc technique de la page contact (formulaire, API, rate limit, persistance, emails) |
| `DOC_A_PROPOS.md` | Doc technique de la page a propos (parcours, chiffres, formation) |
| `DOC_PORTFOLIO.md` | Doc technique de la page portfolio (4 projets, badges tech) |
| `DOC_MENTIONS_LEGALES.md` | Doc technique des mentions legales (SIRET, hebergeur OVH) |
| `DOC_CONFIDENTIALITE.md` | Doc technique de la politique de confidentialite (RGPD UE + nLPD Suisse) |

Documentation compliance dans `Doc/COMPLIANCE/` :

| Fichier | Description |
|---------|-------------|
| `ROPA.md` | Registre des activites de traitement (Art. 30 RGPD / Art. 12 nLPD) |
| `INCIDENT_RESPONSE.md` | Procedure 72h notification violation (Art. 33-34 RGPD / Art. 24 nLPD) |
| `TIA_CALENDLY.md` | Transfer Impact Assessment Calendly (EDPB Schrems II) |
| `AI_USE_POLICY.md` | Politique d'usage de l'IA (AI Act Art. 4 litteratie + inventaire systemes) |
| `templates/data-subject-request-response.md` | Templates reponses demandes RGPD/nLPD (acces, rectification, effacement, etc.) |

Rapport d'audit a la racine du repo : `COMPLIANCE_REPORT.md` + `COMPLIANCE_REPORT.html`.
| `PROMPT_CLAUDE_CODE_CONTACT.md` | Spec de design page contact |
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
- **SMTP OVH Zimbra inaccessible:** zimbra1.mail.ovh.net ferme les connexions TLS, ssl0.ovh.net rejette les identifiants Zimbra. Solution : utiliser Brevo (smtp-relay.brevo.com:587)
- **Images blog non affichees (cards "No image" + media blocks casses):** Les cards utilisaient `meta.image` (SEO) au lieu de `heroImage`. Fix : fallback `heroImage` dans Card + ajout `/media/**` aux `localPatterns` de next.config.ts
- **Vulnerabilite TLS dans /api/contact (audit 2026-04-17):** `tls.rejectUnauthorized: false` etait un vestige du contournement OVH Zimbra qui n'a plus lieu d'etre. Supprime — Brevo a un certificat valide

## Compliance RGPD / nLPD

### Collection `contact-submissions` (persistance consent)

Toute soumission du formulaire `/contact` est persistee en DB via la collection `ContactSubmissions`
(`src/collections/ContactSubmissions/index.ts`). Champs stockes : nom, email, telephone, entreprise,
sujet, message, et un groupe `consent` contenant :
- `given` (boolean, requis) — preuve consentement RGPD Art. 7(1)
- `givenAt` (date+heure) — horodatage du consentement
- `ipHash` (text readOnly) — SHA-256(`PAYLOAD_SECRET` + IP) tronque 16 chars (pseudonymisation Art. 32)

Acces : `create` ouvert (API publique), `read/update/delete` admin authentifie uniquement.
Visible dans `/admin` sous "Demandes de contact".

### Rate limit (`src/utilities/rateLimit.ts`)

Limiteur en memoire (Map) par IP, configure a 5 requetes / heure / IP sur `/api/contact`.
Returns 429 + headers `X-RateLimit-*` + `Retry-After`. Cleanup auto toutes les 5 min.

### Job de purge auto 24 mois (`src/jobs/purgeOldSubmissions.ts`)

Task Payload `purgeOldSubmissions` qui supprime les `contact-submissions` `createdAt < now - 24 mois`
(max 1000 par run, 2 retries). A declencher via cron Coolify quotidien (cf. section Deploiement).

### Documentation compliance

- `Doc/COMPLIANCE/ROPA.md` — Registre des traitements (4 traitements documentes)
- `Doc/COMPLIANCE/INCIDENT_RESPONSE.md` — Procedure 72h notification violation
- `COMPLIANCE_REPORT.md` (racine repo) — Audit complet RGPD + AI Act + nLPD

### Sous-traitants documentes

| Sous-traitant | Role | Localisation | Garantie transfert |
|---------------|------|--------------|---------------------|
| OVH SAS | Hebergement | 🇫🇷 France (Roubaix) | RGPD natif UE |
| Brevo (Sendinblue) | SMTP | 🇫🇷 France (Paris) | RGPD natif UE |
| Calendly LLC | RDV (lien externe) | 🇺🇸 USA | EU-US DPF + Swiss-US DPF |
| fal.ai | Generation images du site | 🇺🇸 USA | Pas de PII utilisateur traitee |

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
