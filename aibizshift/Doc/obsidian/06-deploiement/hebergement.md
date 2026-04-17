---
title: "Hébergement"
tags: [deploiement, config]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Hébergement

## Plateforme

- **Coolify** (self-hosted) sur serveur souverain (Scaleway, France).
- Domaine : **aibizshift.eu** (HTTPS Let's Encrypt).
- Orchestration : Docker.

## Dockerfile (racine)

Source : `/Dockerfile`. Multi-stage, image de base `node:22.17.0-alpine`.

```dockerfile
FROM node:22.17.0-alpine AS base

# Stage deps
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY aibizshift/package.json aibizshift/pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Stage builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY aibizshift/ .
ARG DATABASE_URL
ARG PAYLOAD_SECRET
ARG NEXT_PUBLIC_SERVER_URL
ENV DATABASE_URL=$DATABASE_URL
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
RUN corepack enable pnpm && pnpm run build

# Stage runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache su-exec
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next && chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
EXPOSE 3000
ENV PORT=3000
CMD ["/app/entrypoint.sh"]
```

- Image finale : `base` (Alpine) + standalone + static + public.
- Utilisateur `nextjs:nodejs` (uid 1001:1001) — le switch est fait par `entrypoint.sh`, pas dans le Dockerfile.

## Entrypoint

```bash
# /entrypoint.sh
#!/bin/sh
mkdir -p /app/public/media
chown nextjs:nodejs /app/public/media
export HOSTNAME="0.0.0.0"
exec su-exec nextjs node server.js
```

Pourquoi ce fichier :
- Le volume mount `aibizshift-media` est monté **root** par Docker → les uploads échouaient en `EACCES`.
- L'entrypoint démarre en root le temps de fixer les permissions puis drop vers `nextjs`.

## Coolify

### Variables d'environnement

À configurer dans le panneau Coolify, côté build + runtime :

- `DATABASE_URL` — URL interne Coolify Postgres (pas l'IP publique du serveur).
- `PAYLOAD_SECRET`
- `NEXT_PUBLIC_SERVER_URL` = `https://aibizshift.eu`

Runtime uniquement :

- `CRON_SECRET`
- `PREVIEW_SECRET`
- `SMTP_HOST=smtp-relay.brevo.com`
- `SMTP_PORT=587`
- `SMTP_USER`, `SMTP_PASS`
- `SMTP_FROM=contact@aibizshift.eu`

Voir [[variables-environnement]].

### Volume persistant

| Volume | Montage | Rôle |
|--------|---------|------|
| `aibizshift-media` | `/app/public/media` | Uploads Payload. Requis pour que les fichiers survivent aux redéploiements |

### Base de données

- **PostgreSQL** managé par Coolify (container voisin).
- Utiliser l'URL **interne** Docker (hostname réseau) dans `DATABASE_URL`, **pas** l'IP publique — sinon `/admin` et les routes dynamiques cassent en prod.

### Cron Coolify

Cron quotidien qui appelle la task de purge RGPD :

```bash
curl -X POST https://aibizshift.eu/api/payload-jobs/run \
  -H "Authorization: Bearer $CRON_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"queue":"default"}'
```

Déclenche [[collections/contact-submissions|purgeOldSubmissions]] qui supprime les submissions `createdAt < now - 24 mois`.

## Migrations Payload en prod

- `prodMigrations` dans [[payload-config]] → auto-appliquées au démarrage du conteneur.
- Garde-fou : `NEXT_PHASE === 'phase-production-build'` les désactive pendant le build Docker.
- Migrations versionnées dans `src/migrations/` — **toute modification de schéma passe par `pnpm payload migrate:create`**.

## Problèmes résolus historiquement

- Images `/images/**` manquantes en prod → ajouter à `localPatterns` + copier `public` **après** `standalone` dans le Dockerfile.
- `/admin` inaccessible → `serverURL` manquait dans `payload.config.ts`.
- Upload EACCES → volume créé root par Docker, corrigé par `entrypoint.sh`.
- OVH Zimbra SMTP → migré vers Brevo (TLS incompatible).

Historique complet dans le fichier `CLAUDE.md` à la racine du sous-projet (section "Problèmes résolus").

## Liens connexes

- [[build]]
- [[variables-environnement]]
- [[ci-cd]]
- [[collections/contact-submissions]]
