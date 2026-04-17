---
title: "Block MediaBlock (mediaBlock)"
tags: [payload/block]
aliases: ["mediaBlock"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `mediaBlock`

Source : `src/blocks/MediaBlock/config.ts`. Composant : `src/blocks/MediaBlock/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `mediaBlock` |
| `interfaceName` | `MediaBlock` |
| Utilisé dans | [[collections/pages]] (layout) **et** [[collections/posts]] (richText inline via `BlocksFeature`) |

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `media` | upload | ✅ | `relationTo: 'media'` — voir [[collections/media]] |

## Usage type

Insérer une image ou une vidéo à mi-page (dans un post long) ou comme section d'une page CMS. Le composant utilise les `imageSizes` de la collection media pour servir la bonne résolution.

## Liens connexes

- [[collections/media]]
- [[collections/pages]]
- [[collections/posts]]
