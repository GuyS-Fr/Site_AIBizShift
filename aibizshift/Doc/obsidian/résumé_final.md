---
title: "Résumé final — Génération du vault Obsidian"
tags: [meta]
aliases: ["Resume final", "Synthese"]
created: 2026-04-17
updated: 2026-04-17
---

# Résumé final — Génération du vault Obsidian AIBizShift

Document de synthèse produit à l'issue de la documentation technique du projet AIBizShift (Next.js 16 + Payload CMS 3.81). Point d'entrée du vault : [[index]].

## Chiffres

- **56 notes** créées dans `aibizshift/Doc/obsidian/`
- **8 commits** (un par dossier numéroté + un commit final index + CHANGELOG)
- **7 sections** structurées : 01-architecture, 02-configuration, 03-payload, 04-pages, 05-composants, 06-deploiement, 07-workflows
- **0 fichier inventé** — chaque référence vérifiée dans le code avant écriture

### Répartition par dossier

| Dossier | Notes | Contenu |
|---------|-------|---------|
| 01-architecture | 3 | [[overview]], [[stack-technique]], [[flux-de-donnees]] |
| 02-configuration | 3 | [[variables-environnement]], [[payload-config]], [[next-config]] |
| 03-payload | 17 | index + access + 6 collections + 2 globals + 7 blocks |
| 04-pages | 13 | index + routes + 7 statiques + 3 dynamiques + admin |
| 05-composants | 12 | ContactForm, Header, Footer, Logo, Media, RichText, Card, CollectionArchive, Pagination, AdminBar, LivePreviewListener, PayloadRedirects |
| 06-deploiement | 3 | [[build]], [[ci-cd]], [[hebergement]] |
| 07-workflows | 3 | [[ajouter-une-collection]], [[creer-une-page]], [[mettre-a-jour-le-contenu]] |
| Racine | 2 | [[index]], [[CHANGELOG]] |

## Points d'attention détectés dans le code

1. **`aibizshift/Dockerfile`** — doublon du `Dockerfile` racine, seul celui de la racine est utilisé par Coolify. À supprimer.
2. **`aibizshift/docker-compose.yml`** — référence encore MongoDB (template legacy) alors que la prod tourne sur PostgreSQL. Obsolète.
3. **`aibizshift/.env.example`** — cite `mongodb://...` en premier alors que l'adapter est Postgres. À mettre à jour.
4. **`plugin-seo.generateTitle`** (`src/plugins/index.ts:17`) — renvoie encore `"| Payload Website Template"`. À personnaliser en `"| AIBizShift"`.
5. **`/posts` title** (`src/app/(frontend)/posts/page.tsx:62`) — `"Payload Website Template Posts"` laissé tel quel.
6. **TODOs dans les pages statiques** : `page.tsx:479` (lien Formations → `#`) et `services/page.tsx:715` (CTA audit → `#`).
7. **Footer custom hardcodé dans la homepage** (`page.tsx:456-569`) au lieu d'utiliser le composant global Payload. Les autres pages utilisent bien `<Footer />`.
8. **Pas de `middleware.ts` ni `instrumentation.ts`** — pas de logique globale ni d'observabilité hors console.
9. **Rate limit mémoire** (`src/utilities/rateLimit.ts`) — non persistant entre redéploiements. Anti-spam basique uniquement.
10. **Pas de RBAC sur `users`** — tout utilisateur authentifié a accès à tout l'admin (`access.admin: authenticated`). Suffisant aujourd'hui (1 admin) mais à prévoir si contributeurs multiples.

## Sections à compléter manuellement

1. **[[mentions-legales]]** — structure documentée mais pas le SIRET ni les coordonnées officielles (à lire dans `Doc/Pages Statiques/DOC_MENTIONS_LEGALES.md` ou dans le code en prod).
2. **[[confidentialite]]** — résumé fait, la liste exacte des cookies et durées varie avec la config réelle.
3. **`attachments/`** — aucune capture ajoutée. OnPulse, blog, admin Payload à illustrer.
4. **Contacts Coolify/OVH** — volontairement non documentés ici (sensibles).

## Suggestions d'améliorations code (bonus)

- **Unifier les transports SMTP** : `src/app/api/contact/route.ts:98-108` recrée un transport nodemailer à la main alors que Payload en a déjà un configuré dans `payload.config.ts`. Utiliser `payload.sendEmail(...)` réduirait la duplication et bénéficierait des options du plugin (retries).
- **Extraire `CALENDLY_URL`** : redéfini dans chaque page statique. Centraliser dans `src/config/links.ts`.
- **Activer `alt` obligatoire** sur `media` (`src/collections/Media.ts:30`, actuellement commenté) — accessibilité.
- **Remplacer le footer hardcodé** de la homepage par le composant `<Footer />` + enrichir le global Payload pour porter les 4 colonnes actuelles.
- **Sitemap** : `next-sitemap.config.cjs` exclut `'/*'`, ce qui neutralise pratiquement le sitemap statique. Revoir les patterns si on veut couvrir autre chose que pages + posts.
- **Ajouter un job `pnpm build`** dans la CI en plus de `pnpm audit`, pour détecter tôt les régressions (env manquantes, types cassés).
- **Activer Playwright dans la CI** — la config gère déjà le flag `CI`.

## Journal des commits

1. `Doc Obsidian 01-architecture: overview, stack, flux de donnees`
2. `Doc Obsidian 02-configuration: env, payload, next`
3. `Doc Obsidian 03-payload: collections, globals, blocks, access`
4. `Doc Obsidian 04-pages: routes + pages statiques + dynamiques`
5. `Doc Obsidian 05-composants: composants metier`
6. `Doc Obsidian 06-deploiement: build, CI/CD, hebergement`
7. `Doc Obsidian 07-workflows: procedures pas-a-pas`
8. `Doc Obsidian: index racine + CHANGELOG`

## Liens connexes

- [[index]] — hub du vault.
- [[CHANGELOG]] — inventaire détaillé des notes.
