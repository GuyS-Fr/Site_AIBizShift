---
title: "RichText"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# RichText

Source : `src/components/RichText/`.

Rendu server-side du AST Lexical vers JSX. Utilisé partout où un champ `richText` existe (Pages hero, Posts content, blocks Content/CTA/Banner, meta.description SEO).

## Props

| Prop | Type | Usage |
|------|------|-------|
| `data` | `SerializedEditorState` | AST Lexical à convertir |
| `enableGutter` | boolean | Ajoute un conteneur max-width |
| `enableProse` | boolean | Classes `prose` de Tailwind typography |
| `className` | string | — |

## Features supportées

Mapping des nœuds Lexical → composants React :

- Heading (h1-h6)
- Paragraph, Text (bold/italic/underline/strikethrough/subscript/superscript)
- List (ordered/unordered)
- Quote, Code inline
- Link (internal / custom)
- Horizontal rule
- Blocks inline via `BlocksFeature` : [[blocks/banner]], [[blocks/code]], [[blocks/media-block]].

## Liens connexes

- [[collections/posts]] — champ `content`.
- [[collections/pages]] — champ `hero.richText` et blocks.
- [[blocks/content]]
