---
title: "CHANGELOG"
tags: [meta]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# CHANGELOG — Vault Obsidian AIBizShift

## 2026-04-17 — Initialisation

Création du vault dans `aibizshift/Doc/obsidian/`. 56 notes réparties en 7 sections + un index racine + ce changelog. Un commit par dossier numéroté.

### Root

- [[index|index.md]] — hub principal (pitch, stack, quickstart, table des matières)
- `CHANGELOG.md` — ce fichier
- `prompt_documentation_obsidian.md` — prompt source (préservé)

### 01-architecture (3 notes)

- [[overview]] — schéma Mermaid Next.js + Payload + Postgres + Brevo
- [[stack-technique]] — versions exactes tirées de `package.json`
- [[flux-de-donnees]] — build vs runtime, ISR, revalidation, pipeline contact

### 02-configuration (3 notes)

- [[variables-environnement]] — 13 variables + portée build/runtime
- [[payload-config]] — db, email, editor, plugins, admin, jobs
- [[next-config]] — standalone, images, redirects, turbopack, sitemap

### 03-payload (17 notes)

- [[03-payload/index|index]] — hub navigation Payload
- [[access-control]] — helpers + matrice par collection
- Collections : [[collections/pages]], [[collections/posts]], [[collections/media]], [[collections/categories]], [[collections/users]], [[collections/contact-submissions]]
- Globals : [[globals/header]], [[globals/footer]]
- Blocks : [[blocks/call-to-action]], [[blocks/content]], [[blocks/media-block]], [[blocks/archive]], [[blocks/form]], [[blocks/banner]], [[blocks/code]]

### 04-pages (13 notes)

- [[04-pages/index|index]] — hub pages
- [[routes]] — table synthétique frontend + payload + api
- Statiques : [[homepage]], [[services]], [[a-propos]], [[portfolio]], [[contact]], [[mentions-legales]], [[confidentialite]]
- Dynamiques : [[pages-cms]], [[blog]], [[search]]
- CMS : [[admin]]

### 05-composants (12 notes)

- [[ContactForm]], [[Header]], [[Footer]], [[Logo]], [[Media]], [[RichText]], [[Card]], [[CollectionArchive]], [[Pagination]], [[AdminBar]], [[LivePreviewListener]], [[PayloadRedirects]]

### 06-deploiement (3 notes)

- [[build]] — pnpm build, sortie standalone
- [[ci-cd]] — GitHub Actions `security-audit.yml`
- [[hebergement]] — Dockerfile, entrypoint, Coolify, volume media, cron

### 07-workflows (3 notes)

- [[ajouter-une-collection]]
- [[creer-une-page]] — Option CMS vs code
- [[mettre-a-jour-le-contenu]] — nav, posts, media, redirects, submissions

### Commits associés

Un commit par dossier numéroté :

1. `Doc Obsidian 01-architecture: overview, stack, flux de donnees`
2. `Doc Obsidian 02-configuration: env, payload, next`
3. `Doc Obsidian 03-payload: collections, globals, blocks, access`
4. `Doc Obsidian 04-pages: routes + pages statiques + dynamiques`
5. `Doc Obsidian 05-composants: composants metier`
6. `Doc Obsidian 06-deploiement: build, CI/CD, hebergement`
7. `Doc Obsidian 07-workflows: procedures pas-a-pas`
8. `Doc Obsidian: index racine + CHANGELOG` (à suivre)

## Liens connexes

- [[index]] — point d'entrée du vault.
