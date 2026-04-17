---
title: "Block Content"
tags: [payload/block]
aliases: ["content"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `content`

Source : `src/blocks/Content/config.ts`. Composant : `src/blocks/Content/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `content` |
| `interfaceName` | `ContentBlock` |
| Utilisé dans | [[collections/pages]] |

## Champs

Un tableau `columns` (`initCollapsed: true`) dont chaque row contient :

| Chemin | Type | Détail |
|--------|------|--------|
| `size` | select | `oneThird` (défaut), `half`, `twoThirds`, `full` |
| `richText` | richText (Lexical) | Features : root + `HeadingFeature` h2-h4 + `FixedToolbar` + `InlineToolbar` |
| `enableLink` | checkbox | — |
| `link` | group | Champ `link` standard, conditionnel sur `enableLink === true` |

## Usage type

Mise en page en colonnes (1/3, 1/2, 2/3, pleine largeur) avec texte riche + lien optionnel par colonne. Le composant côté front dispose les colonnes en grid selon `size`.

## Liens connexes

- [[collections/pages]]
- [[blocks/call-to-action]]
- [[blocks/media-block]]
