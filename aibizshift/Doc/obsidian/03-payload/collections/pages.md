---
title: "Collection pages"
tags: [payload/collection, payload/block]
aliases: ["Pages"]
created: 2026-04-17
updated: 2026-04-17
---

# Collection `pages`

Source : `src/collections/Pages/index.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `pages` |
| `useAsTitle` | `title` |
| Colonnes admin par défaut | `title`, `slug`, `updatedAt` |
| `defaultPopulate` | `{ title: true, slug: true }` |
| Versions | `drafts: { autosave: { interval: 100 }, schedulePublish: true }`, `maxPerDoc: 50` |
| Live preview | Breakpoints mobile/tablet/desktop (voir [[payload-config]]) |

## Access control

| Action | Helper |
|--------|--------|
| create | `authenticated` |
| read | `authenticatedOrPublished` |
| update | `authenticated` |
| delete | `authenticated` |

Voir [[access-control]].

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `title` | text | ✅ | Titre administratif |
| `hero` | group | — | Voir `src/heros/config.ts` (type `none`/`highImpact`/`mediumImpact`/`lowImpact`, richText, linkGroup, media) |
| `layout` | blocks | ✅ | Blocks autorisés : [[blocks/call-to-action|CallToAction]], [[blocks/content|Content]], [[blocks/media-block|MediaBlock]], [[blocks/archive|Archive]], [[blocks/form|FormBlock]]. `initCollapsed: true` |
| `meta.title` | text | — | SEO plugin (`hasGenerateFn`) |
| `meta.description` | textarea | — | SEO plugin |
| `meta.image` | upload | — | SEO plugin, `relationTo: 'media'` |
| `publishedAt` | date | — | Position sidebar. Peuplé auto par `populatePublishedAt` si status passe à published |
| `slug` | slug | — | Champ built-in de Payload (`slugField()` de `payload`) |

Le champ `layout` utilise l'onglet **Content** ; `hero` a son propre onglet ; `meta` a l'onglet **SEO** (généré par `@payloadcms/plugin-seo/fields`).

## Hooks

| Cycle | Hook | Rôle |
|-------|------|------|
| `beforeChange` | `populatePublishedAt` (`src/hooks/populatePublishedAt.ts`) | Définit `publishedAt = now` si absent au moment de la publication |
| `afterChange` | `revalidatePage` (`src/collections/Pages/hooks/revalidatePage.ts`) | `revalidatePath(/${slug})` + `revalidateTag('pages-sitemap')` |
| `afterDelete` | `revalidateDelete` (`src/collections/Pages/hooks/revalidatePage.ts`) | Idem à la suppression |

## Relations sortantes

- `meta.image` → `media` ([[collections/media]])
- `hero.media` → `media`
- Via [[blocks/archive|Archive]] : `categories` (multi), `selectedDocs` (`posts`)
- Via [[blocks/form|FormBlock]] : relation `forms` (collection créée par le plugin form-builder)

## Exemple minimal de document

```json
{
  "id": 1,
  "title": "Home",
  "slug": "home",
  "_status": "published",
  "hero": {
    "type": "highImpact",
    "richText": { /* Lexical AST */ },
    "linkGroup": [ { "link": { "type": "internal", "reference": { "relationTo": "pages", "value": 2 } } } ],
    "media": 42
  },
  "layout": [
    { "blockType": "cta", "richText": { /* ... */ }, "links": [ /* ... */ ] },
    { "blockType": "content", "columns": [ { "size": "half", "richText": { /* ... */ } } ] }
  ],
  "meta": { "title": "AIBizShift", "description": "...", "image": 12 },
  "publishedAt": "2026-04-17T10:00:00.000Z",
  "updatedAt": "2026-04-17T10:00:00.000Z"
}
```

## Rendu front

Pages dynamiques `[slug]` — voir [[routes]]. Le composant `RenderHero` dispatche vers `HighImpact`/`MediumImpact`/`LowImpact`/`None` ; `RenderBlocks` dispatche vers le composant de chaque block.

## Liens connexes

- [[payload-config]] — enregistrement dans `buildConfig`.
- [[flux-de-donnees]] — ISR et revalidation.
- [[creer-une-page]] — procédure pas-à-pas pour ajouter une page.
