---
title: "Header"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Header

Source principale : `src/Header/Component.tsx` (React Server Component). Utilisé par le layout racine [[layout-frontend|src/app/(frontend)/layout.tsx]].

## Fichiers

- `src/Header/config.ts` — config du global Payload. Voir [[globals/header]].
- `src/Header/Component.tsx` — RSC qui lit le global via `getCachedGlobal('header', 1)`.
- `src/Header/Component.client.tsx` — interactions client (menu mobile, theme switcher).
- `src/Header/Nav/index.tsx` — rendu de la liste `navItems`.
- `src/Header/hooks/revalidateHeader.ts` — hook Payload `afterChange` → `revalidateTag('global_header')`.
- `src/Header/RowLabel.tsx` — label de ligne custom pour l'admin (affiche l'URL du lien).

## Données

Lues depuis le global Payload `header` :

```typescript
{
  navItems: [
    { link: { type: 'internal' | 'custom', label, url?, reference? } }
    // max 6
  ]
}
```

## Branding intégré

Le logo vient du composant [[Logo]] — image `public/images/logo3-horizontal-dark.png` rendue via `next/image`, taille `h-20 w-auto` (80 px de haut).

## Seed par défaut

Le seed (`src/endpoints/seed/index.ts`) initialise 3 items : Services, Blog, Contact. Modification ultérieure dans Admin → Globals → Header.

## Liens connexes

- [[globals/header]] — config Payload.
- [[Footer]]
- [[Logo]]
