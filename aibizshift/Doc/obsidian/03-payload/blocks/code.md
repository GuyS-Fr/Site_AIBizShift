---
title: "Block Code"
tags: [payload/block]
aliases: ["code"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `code`

Source : `src/blocks/Code/config.ts`. Composant : `src/blocks/Code/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `code` |
| `interfaceName` | `CodeBlock` |
| Utilisé dans | [[collections/posts]] (inline dans le richText Lexical) |

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `language` | select | — | `typescript` (défaut), `javascript`, `css`. Trois valeurs uniquement |
| `code` | code | ✅ | Monaco editor intégré Payload |

## Rendu

Le composant utilise `prism-react-renderer` (version 2.3.1) pour la coloration syntaxique côté SSR.

## Limite

Les langages sont restreints à trois valeurs. Pour ajouter Python, SQL, etc., modifier le `select` dans `src/blocks/Code/config.ts` et ajouter les imports Prism correspondants dans `Component.tsx`.

## Liens connexes

- [[collections/posts]]
- [[blocks/banner]]
