---
title: "Blog — /posts"
tags: [page, route, payload/collection]
aliases: ["Posts", "Blog"]
created: 2026-04-17
updated: 2026-04-17
---

# Blog

Trois routes liées à la collection [[collections/posts]].

## `/posts` — archive

Source : `src/app/(frontend)/posts/page.tsx`.

- `export const dynamic = 'force-static'`
- `export const revalidate = 600` (ISR 10 min)
- `payload.find({ collection: 'posts', depth: 2, limit: 12, overrideAccess: false, select: { title, slug, categories, heroImage, meta } })`.
- Rendu : `<CollectionArchive posts={...} />` + `<PageRange />` + `<Pagination />`.
- Titre (`generateMetadata`) : `"Payload Website Template Posts"` — **générique, à personnaliser**.

## `/posts/page/[pageNumber]`

Source : `src/app/(frontend)/posts/page/[pageNumber]/page.tsx`.

- `generateStaticParams` pré-rend les N pages nécessaires.
- Même ISR (600 s).

## `/posts/[slug]` — détail

Source : `src/app/(frontend)/posts/[slug]/page.tsx`.

- `generateStaticParams` sur tous les `posts.slug` publiés.
- Rendu : `<PostHero />` (titre, auteurs, date, image) + `<RichText />` (Lexical AST) + `<RelatedPosts />`.
- `generateMetadata` via `generateMeta({ doc })`.
- Revalidation déclenchée par le hook `revalidatePost` de la collection.

## Blocks inline dans le richText

Le champ `content` de Posts embarque trois blocks via `BlocksFeature` :

- [[blocks/banner]]
- [[blocks/code]]
- [[blocks/media-block]]

## Liens connexes

- [[collections/posts]]
- [[collections/categories]]
- [[flux-de-donnees]]
- [[search]]
