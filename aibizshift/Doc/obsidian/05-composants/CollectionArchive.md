---
title: "CollectionArchive"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# CollectionArchive

Source : `src/components/CollectionArchive/index.tsx`.

Liste paginée de posts utilisée par :
- [[blog]] — route `/posts` et `/posts/page/[pageNumber]`.
- [[blocks/archive]] — block CMS.

## Props

| Prop | Type | Usage |
|------|------|-------|
| `posts` | `Post[]` | Liste à afficher |

## Rendu

- Grille responsive `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Chaque élément = [[Card]].

## Liens connexes

- [[Card]]
- [[Pagination]]
- [[PageRange]]
