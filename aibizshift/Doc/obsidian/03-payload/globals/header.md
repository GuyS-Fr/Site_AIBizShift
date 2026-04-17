---
title: "Global header"
tags: [payload/global, payload/hook]
aliases: ["Header"]
created: 2026-04-17
updated: 2026-04-17
---

# Global `header`

Source : `src/Header/config.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `header` |
| Access | `read: () => true` |

## Champs

| Chemin | Type | Détail |
|--------|------|--------|
| `navItems` | array, `maxRows: 6` | Chaque row contient un champ `link` (voir `src/fields/link.ts`) sans appearances. `initCollapsed: true`. `RowLabel` custom : `@/Header/RowLabel#RowLabel` |

Chaque `link` supporte :
- `type: 'internal' | 'custom'`
- `label`
- `url` (custom) ou `reference` (internal → Pages, Posts)
- `newTab`

## Hooks

| Cycle | Hook | Rôle |
|-------|------|------|
| `afterChange` | `revalidateHeader` (`src/Header/hooks/revalidateHeader.ts`) | `revalidateTag('global_header')` pour purger le cache Next.js |

## Rendu

- Composant serveur : `src/Header/Component.tsx` — lit le global via `getCachedGlobal('header', 1)`.
- Composant client : `src/Header/Component.client.tsx` — animation nav mobile, thème.
- Rendu des items : `src/Header/Nav/index.tsx`.

## Seed par défaut

`src/endpoints/seed/index.ts` initialise Header avec trois liens :

- Services
- Blog
- Contact

## Modifier la nav

Admin → **Globals** → **Header** → `navItems`. Voir [[mettre-a-jour-le-contenu]].

## Liens connexes

- [[globals/footer]]
- [[Header]] — doc composant.
- [[flux-de-donnees]] — cache & revalidation.
