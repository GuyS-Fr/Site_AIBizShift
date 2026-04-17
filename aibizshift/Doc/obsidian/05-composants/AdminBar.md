---
title: "AdminBar"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# AdminBar

Source : `src/components/AdminBar/index.tsx`.

Barre d'admin flottante affichée quand l'utilisateur est authentifié Payload (cookie JWT) ou en draft mode.

## Props

| Prop | Type | Usage |
|------|------|-------|
| `adminBarProps` | `{ preview: boolean }` | Active l'indication "Draft" |

## Dépendance

`@payloadcms/admin-bar` 3.81.0 — composant React prêt à l'emploi.

## Rendu

Monté dans le layout racine [[layout-frontend|src/app/(frontend)/layout.tsx]] :

```tsx
const { isEnabled } = await draftMode()
<AdminBar adminBarProps={{ preview: isEnabled }} />
```

La barre propose : retour à l'admin, éditer le document courant, quitter le preview.

## Liens connexes

- [[LivePreviewListener]]
- [[admin]]
