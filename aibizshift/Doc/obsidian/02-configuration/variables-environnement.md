---
title: "Variables d'environnement"
tags: [config, env, deploiement]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Variables d'environnement

Inventaire exhaustif basé sur `aibizshift/.env.example` et sur un grep `process.env.` dans `src/`, `next.config.ts`, `next-sitemap.config.cjs`, `redirects.ts` et le `Dockerfile`.

## Obligatoires (build + runtime)

| Variable | Rôle | Exemple | Utilisée dans |
|----------|------|---------|---------------|
| `DATABASE_URL` | Connexion PostgreSQL | `postgresql://user:pwd@db:5432/aibizshift` | `src/payload.config.ts`, `Dockerfile` (ARG) |
| `PAYLOAD_SECRET` | Chiffrement JWT + sel du hash IP contact | >=32 chars aléatoires | `src/payload.config.ts`, `src/app/api/contact/route.ts` |
| `NEXT_PUBLIC_SERVER_URL` | URL publique (CORS, OG, sitemap) | `https://aibizshift.eu` | `next.config.ts`, `src/utilities/getURL.ts`, `next-sitemap.config.cjs` |

## Runtime uniquement

| Variable | Rôle | Exemple | Utilisée dans |
|----------|------|---------|---------------|
| `CRON_SECRET` | Auth `Authorization: Bearer` sur `POST /api/payload-jobs/run` | Aléatoire 32+ chars | `src/payload.config.ts` (`jobs.access.run`) |
| `PREVIEW_SECRET` | Signe les liens de preview Payload | Aléatoire 32+ chars | `src/utilities/generatePreviewPath.ts`, routes `next/preview` |
| `SMTP_HOST` | Hôte SMTP Brevo | `smtp-relay.brevo.com` | `src/payload.config.ts` (email adapter) |
| `SMTP_PORT` | Port SMTP | `587` (STARTTLS) ou `465` (TLS) | `src/payload.config.ts` |
| `SMTP_USER` | Identifiant SMTP Brevo | Clé utilisateur Brevo | `src/payload.config.ts`, `src/app/api/contact/route.ts` |
| `SMTP_PASS` | Mot de passe SMTP Brevo | Clé API SMTP Brevo | `src/payload.config.ts`, `src/app/api/contact/route.ts` |
| `SMTP_FROM` | Expéditeur par défaut | `contact@aibizshift.eu` | `src/payload.config.ts` (défaut) |

> ⚠️ `SMTP_SECURE` n'est **pas** lu directement : la config déduit `secure: false` quand `SMTP_PORT === 587`, sinon `secure: true` (`src/payload.config.ts:82`). Documenter une variable serait trompeur.

## Injectées par l'environnement Next.js / Vercel

| Variable | Origine | Effet |
|----------|---------|-------|
| `NODE_ENV` | Runtime Node / Dockerfile (`ENV NODE_ENV=production`) | Active `prodMigrations` sur Postgres |
| `NEXT_PHASE` | Next.js au build | Vaut `phase-production-build` → désactive les migrations le temps du build |
| `VERCEL_PROJECT_PRODUCTION_URL` | Fallback si `NEXT_PUBLIC_SERVER_URL` absent | `next.config.ts`, `next-sitemap.config.cjs` |
| `__NEXT_PRIVATE_ORIGIN` | Fallback interne Next.js | `next.config.ts:13` |
| `CI` | CI Playwright | Active les retries Playwright |

## Valeurs par défaut de l'exemple

`aibizshift/.env.example` cite encore `mongodb://127.0.0.1/your-database-name` en premier. C'est un **vestige du template Payload** : la config actuelle ne supporte que PostgreSQL (`postgresAdapter` hardcodé dans `src/payload.config.ts:65`). Retirer ou commenter cette ligne la prochaine fois qu'on régénère le template.

## Où sont configurées les variables en production

- **Coolify** : panneau Environment Variables (build args + runtime env). Voir [[hebergement]].
- **Volume Docker** `aibizshift-media` → `/app/public/media` : non exprimé comme variable, configuré côté Coolify (Persistent Storage).

## Liens connexes

- [[payload-config]] — comment chaque variable est consommée côté Payload.
- [[next-config]] — consommation côté Next.
- [[hebergement]] — où les variables sont positionnées.
- [[ci-cd]] — ce que le workflow GitHub Actions attend (aucun secret runtime nécessaire).
