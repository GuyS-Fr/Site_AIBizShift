---
title: "AIBizShift — Hub documentation"
tags: [meta, architecture]
aliases: ["Index", "Home"]
created: 2026-04-17
updated: 2026-04-17
---

# AIBizShift — Hub documentation

Vault Obsidian du projet **AIBizShift.eu** — site vitrine de Guy Salvatore, consultant IA & automatisation pour PME. Déployé sur Coolify (serveur souverain français) avec Next.js 16 + Payload CMS 3.81 + PostgreSQL.

## Stack en une ligne

Next.js 16.2.4 (App Router, standalone) · React 19.2.4 · Payload CMS 3.81 · PostgreSQL (drizzle) · Lexical · Tailwind 4 · Docker + Coolify · Vitest + Playwright.

Détails : [[stack-technique]].

## Quickstart local

```bash
git clone https://github.com/GuyS-Fr/Site_AIBizShift
cd Site_AIBizShift/aibizshift
cp .env.example .env          # remplir DATABASE_URL, PAYLOAD_SECRET, etc.
pnpm install
pnpm payload migrate          # applique les migrations sur la DB locale
pnpm dev                      # http://localhost:3000
```

Variables requises : [[variables-environnement]].

## Carte du vault

### Architecture

- [[overview]]
- [[stack-technique]]
- [[flux-de-donnees]]

### Configuration

- [[variables-environnement]]
- [[payload-config]]
- [[next-config]]

### Payload (CMS)

- Hub : [[03-payload/index|Payload]]
- Collections : [[collections/pages]], [[collections/posts]], [[collections/media]], [[collections/categories]], [[collections/users]], [[collections/contact-submissions]]
- Globals : [[globals/header]], [[globals/footer]]
- Blocks : [[blocks/call-to-action]], [[blocks/content]], [[blocks/media-block]], [[blocks/archive]], [[blocks/form]], [[blocks/banner]], [[blocks/code]]
- Sécurité : [[access-control]]

### Pages & routes

- [[routes]] (table)
- Statiques : [[homepage]], [[services]], [[a-propos]], [[portfolio]], [[contact]], [[mentions-legales]], [[confidentialite]]
- Dynamiques : [[pages-cms]], [[blog]], [[search]]
- Admin : [[admin]]

### Composants

- [[ContactForm]], [[Header]], [[Footer]], [[Logo]], [[Media]], [[RichText]], [[Card]], [[CollectionArchive]], [[Pagination]], [[AdminBar]], [[LivePreviewListener]], [[PayloadRedirects]]

### Déploiement

- [[build]]
- [[ci-cd]]
- [[hebergement]]

### Workflows récurrents

- [[ajouter-une-collection]]
- [[creer-une-page]]
- [[mettre-a-jour-le-contenu]]

## Conventions du vault

- **Frontmatter YAML** obligatoire (`title`, `tags`, `aliases`, `created`, `updated`).
- **Wikilinks** uniquement pour la navigation interne : `[[note]]` ou `[[note|libellé]]`.
- Liens externes en markdown standard.
- Taxonomie de tags : `payload/collection|global|block|hook|access`, `page`, `composant`, `route`, `config`, `env`, `ci-cd`, `deploiement`, `workflow`, `architecture`, `meta`.
- Schémas complexes : Mermaid (rendu natif dans Obsidian).
- Assets binaires : `attachments/`.

## Ressources externes

- Repo GitHub : https://github.com/GuyS-Fr/Site_AIBizShift
- Doc Payload officielle : https://payloadcms.com/docs
- Doc Next.js : https://nextjs.org/docs
- Compliance détaillée : `Doc/COMPLIANCE/` (RGPD, nLPD, AI Act)
- Spécifications pages statiques : `Doc/Pages Statiques/`

## Journal

Liste chronologique des notes créées : [[CHANGELOG]].
