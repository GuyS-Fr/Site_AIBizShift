---
title: "Pagination"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Pagination

Source : `src/components/Pagination/index.tsx`. `PageRange` dans `src/components/PageRange/index.tsx`.

## Pagination

| Prop | Type | Usage |
|------|------|-------|
| `page` | number | Page courante |
| `totalPages` | number | Nombre total |
| `className` | string | — |

Génère les liens `/posts/page/[n]`. Affiche précédent / pages / suivant.

## PageRange

Affiche `"Showing X - Y of Z"` au-dessus de la liste (collection, currentPage, limit, totalDocs).

## Liens connexes

- [[blog]]
- [[CollectionArchive]]
