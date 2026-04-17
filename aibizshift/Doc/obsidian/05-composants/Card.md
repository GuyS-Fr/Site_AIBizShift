---
title: "Card"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Card

Source : `src/components/Card/index.tsx`.

Card générique pour afficher un post dans [[CollectionArchive]].

## Props

| Prop | Type | Usage |
|------|------|-------|
| `doc` | Post | Document avec `title`, `slug`, `categories`, `meta`, `heroImage` |
| `relationTo` | `'posts'` | Collection source (actuellement posts uniquement) |
| `showCategories` | boolean | Affiche les pills catégorie |

## Comportement

- **Image** : priorité `heroImage` → fallback `meta.image`. Correctif appliqué en avril 2026 pour éviter les cards "No image".
- **Hover** : utilise le hook `useClickableCard` (`src/utilities/useClickableCard.ts`) pour rendre toute la carte cliquable sans nester `<a>`.
- **Lien** : `/posts/${slug}`.

## Liens connexes

- [[collections/posts]]
- [[CollectionArchive]]
- [[blog]]
