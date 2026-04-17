---
title: "Global footer"
tags: [payload/global, payload/hook]
aliases: ["Footer"]
created: 2026-04-17
updated: 2026-04-17
---

# Global `footer`

Source : `src/Footer/config.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `footer` |
| Access | `read: () => true` |

## Champs

| Chemin | Type | Détail |
|--------|------|--------|
| `navItems` | array, `maxRows: 6` | Field `link` sans appearances. `initCollapsed: true`. RowLabel custom : `@/Footer/RowLabel#RowLabel` |

## Hooks

| Cycle | Hook | Rôle |
|-------|------|------|
| `afterChange` | `revalidateFooter` (`src/Footer/hooks/revalidateFooter.ts`) | `revalidateTag('global_footer')` |

## Rendu

- Composant : `src/Footer/Component.tsx`.
- **Filtre automatique** : le lien pointant vers `/admin` (ajouté par Payload dans certains seeds) est retiré en production. Sécurité + UX — l'admin n'apparaît pas dans le pied de page public.

## Seed par défaut

`src/endpoints/seed/index.ts` laisse `navItems` vide (les liens Payload/Admin du template de base ont été supprimés volontairement).

## Liens connexes

- [[globals/header]]
- [[Footer]] — doc composant.
- [[flux-de-donnees]]
