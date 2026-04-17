---
title: "Stack technique"
tags: [architecture, config]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Stack technique

Versions tirées de `aibizshift/package.json` (18 avril 2026, alignées sur Payload 3.81.0).

## Runtime

| Composant | Version | Rôle |
|-----------|---------|------|
| Node.js | ^18.20.2 \|\| >=20.9.0 | Runtime serveur (image Docker Node 22.17.0-alpine) |
| pnpm | ^9 \|\| ^10 | Package manager (frozen lockfile en CI/CD) |
| TypeScript | 5.7.3 | Typage + `noEmit` pour validation |

## Framework

| Composant | Version | Notes |
|-----------|---------|-------|
| Next.js | 16.2.4 | App Router, `output: 'standalone'`, Turbopack root configuré |
| React | 19.2.4 | Server Components par défaut |
| React DOM | 19.2.4 | |

## CMS

| Package | Version |
|---------|---------|
| `payload` | 3.81.0 |
| `@payloadcms/next` | 3.81.0 |
| `@payloadcms/db-postgres` | 3.81.0 |
| `@payloadcms/email-nodemailer` | 3.81.0 |
| `@payloadcms/richtext-lexical` | 3.81.0 |
| `@payloadcms/ui` | 3.81.0 |
| `@payloadcms/admin-bar` | 3.81.0 |
| `@payloadcms/live-preview-react` | 3.81.0 |

## Plugins Payload (tous en 3.81.0)

- `@payloadcms/plugin-form-builder`
- `@payloadcms/plugin-nested-docs`
- `@payloadcms/plugin-redirects`
- `@payloadcms/plugin-search`
- `@payloadcms/plugin-seo`

Voir [[payload-config]] pour leur câblage exact.

## Base de données

- **PostgreSQL** via `@payloadcms/db-postgres` (drizzle-orm pinned `>=0.45.2 <0.46.0` via `pnpm.overrides` pour contourner GHSA-gpj5-g38j-94v9).
- `push: false` → tout changement de schéma passe par une migration dans `src/migrations/`.
- `prodMigrations` auto-appliqué au démarrage en production (sauf phase `phase-production-build`).

## UI & styling

| Package | Version |
|---------|---------|
| Tailwind CSS | 4.1.18 |
| `@tailwindcss/postcss` | 4.1.18 |
| `@tailwindcss/typography` | 0.5.19 |
| `tailwind-merge` | 3.4.0 |
| `class-variance-authority` | 0.7.0 |
| `clsx` | 2.1.1 |
| `@radix-ui/react-checkbox` | 1.0.4 |
| `@radix-ui/react-label` | 2.0.2 |
| `@radix-ui/react-select` | 2.0.0 |
| `@radix-ui/react-slot` | 1.0.2 |
| `lucide-react` | 0.563.0 |
| `geist` | 1.3.0 |

## Utilitaires & intégrations

| Package | Version | Rôle |
|---------|---------|------|
| `sharp` | 0.34.2 | Traitement d'image Payload |
| `nodemailer` | 8.0.5 | SMTP Brevo pour `/api/contact` |
| `graphql` | 16.8.2 | GraphQL endpoint Payload |
| `next-sitemap` | 4.2.3 | Postbuild `robots.txt` + sitemaps |
| `prism-react-renderer` | 2.3.1 | Coloration syntaxique block `Code` |
| `react-hook-form` | 7.71.1 | Formulaires (FormBlock) |
| `dotenv` | 16.4.7 | Chargement local des variables |
| `cross-env` | 7.0.3 | Scripts multi-plateformes |

## Tests

| Package | Version | Rôle |
|---------|---------|------|
| `vitest` | 4.0.18 | Tests d'intégration |
| `@playwright/test` | 1.58.2 | Tests end-to-end |
| `@testing-library/react` | 16.3.0 | Assertions composants |
| `jsdom` | 28.0.0 | Env DOM Vitest |

## Lint & format

- `eslint` 9.16.0 + `eslint-config-next` 16.2.1
- `prettier` 3.4.2 (single quote, no semi, trailing comma all, width 100)

## Raisons des choix visibles dans le code

- **PostgreSQL plutôt que MongoDB** — l'`.env.example` mentionne encore MongoDB et un `docker-compose.yml` legacy subsiste (voir [[overview]] pour les points d'attention), mais `src/payload.config.ts:65` n'instancie que `postgresAdapter`. Le seul adapter réellement utilisé est Postgres.
- **Turbopack activé** (`next.config.ts:59`) pour accélérer le dev, root explicite pour éviter les ambiguïtés.
- **`reactStrictMode: true`** — détection stricte en dev.
- **`output: 'standalone'`** — indispensable au Dockerfile multi-stage, voir [[build]].
- **`pnpm.overrides` drizzle-orm** — correctif sécurité sans attendre la release Payload.

## Liens connexes

- [[overview]] — schéma d'architecture.
- [[variables-environnement]] — variables consommées par cette stack.
- [[ci-cd]] — audit de sécurité automatisé sur ces versions.
