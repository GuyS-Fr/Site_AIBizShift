---
title: "Search — /search"
tags: [page, route, payload/collection]
aliases: ["Recherche"]
created: 2026-04-17
updated: 2026-04-17
---

# Search

Source : `src/app/(frontend)/search/page.tsx`. Plugin : `@payloadcms/plugin-search`.

## Fonctionnement

Le plugin génère automatiquement une collection `search` alimentée par un hook `afterChange` sur les `posts` (voir [[payload-config]]) :

```typescript
// src/plugins/index.ts
searchPlugin({
  collections: ['posts'],
  beforeSync: beforeSyncWithSearch,          // src/search/beforeSync.ts
  searchOverrides: {
    fields: ({ defaultFields }) => {
      return [...defaultFields, ...searchFields]  // src/search/fieldOverrides.ts
    },
  },
}),
```

## Fichiers liés

- `src/search/beforeSync.ts` — projette un document `posts` vers un document `search` (titre, slug, categories, image).
- `src/search/fieldOverrides.ts` — ajoute les champs custom aux index search.
- `src/search/Component.tsx` — composant client de la page de recherche.

## Rendu

Le composant serveur récupère les paramètres `?q=...` et interroge la collection `search`. Les résultats sont rendus en liste.

## Limites

- Seules les **posts** sont indexés. Pages CMS et pages statiques ne remontent pas dans les résultats.
- Pas de stemming/synonymes — matching texte brut via `where` Postgres.

## Liens connexes

- [[collections/posts]]
- [[payload-config]]
