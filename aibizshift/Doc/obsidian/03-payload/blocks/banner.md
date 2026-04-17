---
title: "Block Banner"
tags: [payload/block]
aliases: ["banner"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `banner`

Source : `src/blocks/Banner/config.ts`. Composant : `src/blocks/Banner/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `banner` |
| `interfaceName` | `BannerBlock` |
| Utilisé dans | [[collections/posts]] (inline dans le richText Lexical via `BlocksFeature`) |

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `style` | select | ✅ | `info` (défaut), `warning`, `error`, `success` |
| `content` | richText | ✅ | Lexical avec `FixedToolbar` + `InlineToolbar` uniquement (pas de headings) |

## Usage type

Encart contextualisé à mi-article : note d'information, avertissement, correction, mention d'une mise à jour.

## Liens connexes

- [[collections/posts]]
- [[blocks/code]]
