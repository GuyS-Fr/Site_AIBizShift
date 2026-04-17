---
title: "Table des routes"
tags: [route, page]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Table des routes

Consolidée depuis `src/app/` (App Router Next.js 16).

## Groupe `(frontend)` — public

| URL | Fichier | Rendu | Note |
|-----|---------|-------|------|
| `/` | `src/app/(frontend)/page.tsx` | SSG | [[homepage]] — 6 sections en dur |
| `/services` | `src/app/(frontend)/services/page.tsx` | SSG | [[services]] — 10 offres |
| `/a-propos` | `src/app/(frontend)/a-propos/page.tsx` | SSG | [[a-propos]] — parcours |
| `/portfolio` | `src/app/(frontend)/portfolio/page.tsx` | SSG | [[portfolio]] — 4 projets |
| `/contact` | `src/app/(frontend)/contact/page.tsx` | SSG | [[contact]] — formulaire |
| `/mentions-legales` | `src/app/(frontend)/mentions-legales/page.tsx` | SSG | [[mentions-legales]] |
| `/confidentialite` | `src/app/(frontend)/confidentialite/page.tsx` | SSG | [[confidentialite]] |
| `/posts` | `src/app/(frontend)/posts/page.tsx` | SSG + ISR `revalidate: 600` | [[blog]] — archive |
| `/posts/page/[pageNumber]` | `src/app/(frontend)/posts/page/[pageNumber]/page.tsx` | SSG + ISR 600s | Pagination |
| `/posts/[slug]` | `src/app/(frontend)/posts/[slug]/page.tsx` | SSG via `generateStaticParams` | Détail post |
| `/[slug]` | `src/app/(frontend)/[slug]/page.tsx` | SSG via `generateStaticParams` | [[pages-cms]] — layout builder |
| `/search` | `src/app/(frontend)/search/page.tsx` | SSG | [[search]] |
| `/pages-sitemap.xml` | `src/app/(frontend)/(sitemaps)/pages-sitemap.xml/route.ts` | dynamique | XML pour crawlers |
| `/posts-sitemap.xml` | `src/app/(frontend)/(sitemaps)/posts-sitemap.xml/route.ts` | dynamique | XML pour crawlers |
| `/next/preview` | `src/app/(frontend)/next/preview/route.ts` | API | Active draft mode |
| `/next/exit-preview` | `src/app/(frontend)/next/exit-preview/route.ts` | API | Désactive draft mode |
| `/next/seed` | `src/app/(frontend)/next/seed/route.ts` | API POST | Seed initial DB |
| `/not-found` | `src/app/(frontend)/not-found.tsx` | — | 404 personnalisée |

## Groupe `(payload)` — CMS & API

| URL | Fichier | Rôle |
|-----|---------|------|
| `/admin/**` | `src/app/(payload)/admin/[[...segments]]/page.tsx` | UI admin Payload |
| `/api/**` | `src/app/(payload)/api/[...slug]/route.ts` | REST Payload (`/api/pages`, `/api/posts`, `/api/media`, `/api/users`, `/api/contact-submissions`, `/api/payload-jobs/run`, etc.) |
| `/api/graphql` | `src/app/(payload)/api/graphql/route.ts` | GraphQL endpoint |
| `/api/graphql-playground` | `src/app/(payload)/api/graphql-playground/route.ts` | Playground UI |

## API métier

| URL | Fichier | Méthode | Rôle |
|-----|---------|---------|------|
| `/api/contact` | `src/app/api/contact/route.ts` | POST | Formulaire contact avec rate limit + persistance + mail Brevo. Voir [[contact]] |

## Layout racine

- `src/app/(frontend)/layout.tsx` — html `lang="fr"`, fonts Geist, Providers (Theme + HeaderTheme), Header + Footer + AdminBar. OpenGraph + Twitter creator `@aibizshift`.

## Middleware

Aucun `middleware.ts`. Le draft mode passe par les routes API `next/preview` et `next/exit-preview`.

## Liens connexes

- [[next-config]] — redirects, images.
- [[flux-de-donnees]] — ISR et revalidation.
- [[hebergement]] — configuration Docker/Coolify.
