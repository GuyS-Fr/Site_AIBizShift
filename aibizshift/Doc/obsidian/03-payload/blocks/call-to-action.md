---
title: "Block CallToAction (cta)"
tags: [payload/block]
aliases: ["CTA", "cta"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `cta`

Source : `src/blocks/CallToAction/config.ts`. Composant rendu : `src/blocks/CallToAction/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `cta` |
| `interfaceName` | `CallToActionBlock` |
| Labels | `Call to Action` / `Calls to Action` |
| Utilisé dans | [[collections/pages]] (champ `layout`) |

## Champs

| Chemin | Type | Détail |
|--------|------|--------|
| `richText` | richText (Lexical) | Features : root + `HeadingFeature` h1-h4 + `FixedToolbar` + `InlineToolbar` |
| `links` | linkGroup | Appearances autorisées : `default`, `outline`. `maxRows: 2` |

## Usage type

Bloc d'appel à l'action en fin de section : titre, sous-titre, 1-2 boutons. Les boutons peuvent être `internal` (référence vers une page/post) ou `custom` (URL libre).

## Liens connexes

- [[collections/pages]]
- [[blocks/content]]
