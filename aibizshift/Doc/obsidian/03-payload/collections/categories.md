---
title: "Collection categories"
tags: [payload/collection]
aliases: ["Categories"]
created: 2026-04-17
updated: 2026-04-17
---

# Collection `categories`

Source : `src/collections/Categories.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `categories` |
| `useAsTitle` | `title` |
| Nested docs | oui (via plugin `@payloadcms/plugin-nested-docs`, voir [[payload-config]]) |

## Access control

| Action | Helper |
|--------|--------|
| create | `authenticated` |
| read | **`anyone`** |
| update | `authenticated` |
| delete | `authenticated` |

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `title` | text | ✅ | Nom affiché |
| `slug` | slug | — | `slugField({ position: undefined })` — pas dans la sidebar |

## Plugin nested-docs

```typescript
// src/plugins/index.ts
nestedDocsPlugin({
  collections: ['categories'],
  generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
}),
```

Permet une arborescence `parent -> enfant -> petit-enfant`. `generateURL` produit `/slug-parent/slug-enfant` pour les breadcrumbs.

## Usage dans le projet

- [[collections/posts]] — field `categories` multi (onglet Meta).
- [[blocks/archive]] — filtre `categories` pour n'afficher qu'une sous-liste de posts.

## Liens connexes

- [[payload-config]]
- [[collections/posts]]
