---
title: "Footer"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Footer

Source principale : `src/Footer/Component.tsx`. Utilisé par le layout racine.

## Fichiers

- `src/Footer/config.ts` — config du global Payload. Voir [[globals/footer]].
- `src/Footer/Component.tsx` — RSC qui lit `footer` global.
- `src/Footer/RowLabel.tsx` — row label admin.
- `src/Footer/hooks/revalidateFooter.ts` — `afterChange` → `revalidateTag('global_footer')`.

## Filtre `/admin`

Le composant retire automatiquement le lien `/admin` s'il apparaît dans `navItems`. Double-sécurité : même si un admin ajoute le lien, il ne s'affichera pas publiquement.

## Particularité

La **homepage** (`src/app/(frontend)/page.tsx`) a son propre footer codé en dur (4 colonnes : Navigation / Services / Contact / mentions légales). Toutes les autres pages reposent sur ce composant `<Footer />` + le global Payload.

## Liens connexes

- [[globals/footer]]
- [[Header]]
- [[homepage]] — pourquoi le footer y est dupliqué.
