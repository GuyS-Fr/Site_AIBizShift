---
title: "Collection posts"
tags: [payload/collection, payload/hook]
aliases: ["Posts"]
created: 2026-04-17
updated: 2026-04-17
---

# Collection `posts`

Source : `src/collections/Posts/index.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `posts` |
| `useAsTitle` | `title` |
| Colonnes admin par défaut | `title`, `slug`, `updatedAt` |
| `defaultPopulate` | `title`, `slug`, `categories`, `meta.image`, `meta.description` |
| Versions | drafts autosave 100ms, schedulePublish, `maxPerDoc: 50` |
| Live preview | oui (breakpoints hérités de [[payload-config]]) |

## Access control

| Action | Helper |
|--------|--------|
| create | `authenticated` |
| read | `authenticatedOrPublished` |
| update | `authenticated` |
| delete | `authenticated` |

## Champs

### Onglet **Content**

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `heroImage` | upload | — | `relationTo: 'media'` |
| `content` | richText (Lexical) | ✅ | Features : root, `HeadingFeature` h1-h4, `BlocksFeature([Banner, Code, MediaBlock])`, `FixedToolbar`, `InlineToolbar`, `HorizontalRule` |

### Onglet **Meta**

| Chemin | Type | Détail |
|--------|------|--------|
| `relatedPosts` | relationship | `hasMany: true`, `relationTo: 'posts'`, filterOptions exclut l'id courant |
| `categories` | relationship | `hasMany: true`, `relationTo: 'categories'` |

### Onglet **SEO**

Même pattern que Pages (champs générés par `@payloadcms/plugin-seo/fields`). Voir [[collections/pages]].

### Sidebar

| Chemin | Type | Détail |
|--------|------|--------|
| `publishedAt` | date | `pickerAppearance: 'dayAndTime'`. Hook inline : si `_status === 'published'` et vide → `new Date()` |
| `authors` | relationship | `hasMany: true`, `relationTo: 'users'` |
| `populatedAuthors` | array readOnly | Peuplé par `populateAuthors` (sous-champs `id`, `name`). `access.update: () => false`. `admin.disabled: true`. Exposé publiquement, pas le document `users` brut |
| `slug` | slug | via `slugField()` |

## Hooks

| Cycle | Hook | Rôle |
|-------|------|------|
| `afterRead` | `populateAuthors` (`src/collections/Posts/hooks/populateAuthors.ts`) | Enrichit `populatedAuthors` depuis `authors` en ne retenant que `id` et `name` — privacy by design |
| `afterChange` | `revalidatePost` | `revalidatePath(/posts/${slug})` + tag sitemap |
| `afterDelete` | `revalidateDelete` | Idem |

## Pourquoi `populatedAuthors` existe

Le champ `authors` pointe vers `users` dont `read: authenticated`. Un visiteur public ne peut pas récupérer `users.email` ou `users.name`. Le hook `populateAuthors` extrait uniquement `id` et `name` dans un champ dédié lisible publiquement. Résultat : on affiche l'auteur sans exposer la collection `users`.

## Relations sortantes

- `heroImage`, `meta.image` → `media` ([[collections/media]])
- `relatedPosts` → `posts` (auto-référence filtrée)
- `categories` → `categories` ([[collections/categories]])
- `authors` → `users` ([[collections/users]])

## Rendu front

- Archive : `/posts` et `/posts/page/[pageNumber]` (ISR 600s).
- Détail : `/posts/[slug]` (SSG). Composant `PostHero` + `RichText` + `RelatedPosts`.
- Voir [[routes]] pour la liste complète.

## Liens connexes

- [[blocks/banner]], [[blocks/code]], [[blocks/media-block]] — inline dans le richText.
- [[collections/categories]]
- [[flux-de-donnees]] — ISR et live preview.
