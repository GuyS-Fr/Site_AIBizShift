---
title: "Block Archive"
tags: [payload/block]
aliases: ["archive"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `archive`

Source : `src/blocks/ArchiveBlock/config.ts`. Composant : `src/blocks/ArchiveBlock/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `archive` |
| `interfaceName` | `ArchiveBlock` |
| Labels | `Archive` / `Archives` |
| Utilisé dans | [[collections/pages]] (layout) |

## Champs

| Chemin | Type | Défaut | Condition | Détail |
|--------|------|--------|-----------|--------|
| `introContent` | richText | — | — | Lexical : headings h1-h4, FixedToolbar, InlineToolbar |
| `populateBy` | select | `collection` | — | `collection` ou `selection` |
| `relationTo` | select | `posts` | `populateBy === 'collection'` | Seule option disponible : `posts` |
| `categories` | relationship (multi) | — | `populateBy === 'collection'` | Filtre par `categories` |
| `limit` | number | `10` | `populateBy === 'collection'` | Nombre max affiché |
| `selectedDocs` | relationship (multi) | — | `populateBy === 'selection'` | Sélection manuelle de posts |

## Modes de peuplement

- **Collection** : le composant fait `payload.find({ collection: 'posts', where: { categories: { in: [...] } }, limit })`.
- **Selection** : rendu direct de `selectedDocs`.

## Usage type

Page d'accueil ou section de landing qui doit afficher "les 3 derniers articles de la catégorie X" ou "ces 4 cas clients spécifiques".

## Liens connexes

- [[collections/posts]]
- [[collections/categories]]
- [[collections/pages]]
