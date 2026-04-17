---
title: "Build"
tags: [config, deploiement]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Build

## Commande

```bash
pnpm build          # next build (NODE_OPTIONS=--no-deprecation)
# postbuild : next-sitemap --config next-sitemap.config.cjs
```

Le script `build` est défini dans `aibizshift/package.json`. Il produit l'arborescence `.next/standalone/` + `.next/static/` exploitée par le [[hebergement|Dockerfile runner]].

## Sortie

| Chemin | Contenu |
|--------|---------|
| `aibizshift/.next/standalone/` | Serveur Node autonome (`server.js`) + dépendances runtime |
| `aibizshift/.next/static/` | Assets versionnés (JS, CSS, images optimisées) |
| `aibizshift/public/` | Assets bruts (logos, images, favicon, media uploads) |
| `aibizshift/robots.txt`, `aibizshift/*sitemap*.xml` | Générés en postbuild par `next-sitemap` |

## Variables consommées au build

| Variable | Rôle |
|----------|------|
| `DATABASE_URL` | Requis car `generateStaticParams` interroge Payload (et donc Postgres) |
| `PAYLOAD_SECRET` | Idem — Payload refuse de démarrer sans |
| `NEXT_PUBLIC_SERVER_URL` | Inline dans les URLs générées (OG, sitemap) |
| `NEXT_PHASE` | Mis automatiquement à `phase-production-build` → désactive `prodMigrations` |

Voir [[variables-environnement]] pour la liste complète.

## Pages pré-rendues

`generateStaticParams` est appelé sur :
- `[slug]` → toutes les pages CMS publiées sauf `home`.
- `posts/[slug]` → tous les posts publiés.
- `posts/page/[pageNumber]` → N pages selon `limit: 12`.

En parallèle, chaque page statique (`homepage`, `services`, `a-propos`, etc.) est compilée en HTML (SSG).

## Commande dev:prod

```bash
pnpm dev:prod   # rm -rf .next && pnpm build && pnpm start
```

Utile pour valider localement que le build passe et que le serveur production démarre correctement.

## Lint & types

Pas activés dans le build par défaut. À lancer séparément :

```bash
pnpm lint
pnpm lint:fix
tsc --noEmit
```

## Liens connexes

- [[hebergement]] — Dockerfile qui consomme `.next/standalone`.
- [[ci-cd]] — GitHub Actions.
- [[next-config]] — `output: 'standalone'`, `turbopack.root`.
