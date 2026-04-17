---
title: "Ajouter une collection Payload"
tags: [workflow, payload/collection]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Ajouter une collection Payload

Procédure pas-à-pas pour introduire une nouvelle collection dans le CMS.

## 1. Créer le fichier de config

Par convention :
- Collection simple (champs uniquement) → `src/collections/NomCollection.ts`.
- Collection avec hooks ou sous-dossiers → `src/collections/NomCollection/index.ts` + dossier `hooks/`.

Exemple minimal (inspirer de [[collections/categories]]) :

```typescript
// src/collections/Projects.ts
import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
  ],
}
```

Choisir les helpers d'access selon le besoin. Voir [[access-control]].

## 2. Enregistrer dans `payload.config.ts`

```typescript
// src/payload.config.ts
import { Projects } from './collections/Projects'

export default buildConfig({
  // ...
  collections: [Pages, Posts, Media, Categories, Users, ContactSubmissions, Projects],
  // ...
})
```

## 3. Générer les types TypeScript

```bash
pnpm generate:types
```

Met à jour `src/payload-types.ts` (ne jamais l'éditer à la main).

## 4. Créer une migration DB

En dev, `push` est désactivé → aucune migration automatique.

```bash
pnpm payload migrate:create add_projects
# Édite le .ts pour ajouter IF NOT EXISTS si on vise la DB existante
pnpm payload migrate
```

Deux fichiers sont créés dans `src/migrations/` :
- `YYYYMMDD_HHMMSS_add_projects.ts` — delta DDL (up/down).
- `YYYYMMDD_HHMMSS_add_projects.json` — snapshot schema pour la prochaine migration.

En prod, la migration est appliquée automatiquement au redémarrage du conteneur via `prodMigrations`. Voir [[hebergement]].

## 5. Exposer côté front

Si la collection doit être rendue sur le site, créer une route App Router :

```typescript
// src/app/(frontend)/projects/page.tsx
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'projects',
    overrideAccess: false,
  })
  // Rendu...
}
```

> ⚠️ Toujours passer `overrideAccess: false` côté public pour appliquer la matrice d'access.

## 6. (Optionnel) Ajouter un hook de revalidation

Si la collection a un rendu public, ajouter un hook `afterChange` + `afterDelete` qui appelle `revalidatePath` / `revalidateTag`. S'inspirer de `src/collections/Posts/hooks/revalidatePost.ts`.

## 7. Commit

```bash
git add src/collections/Projects.ts src/payload.config.ts src/payload-types.ts src/migrations/*
git commit -m "Add Projects collection with base CRUD"
```

## Checklist

- [ ] Fichier de config créé avec access control approprié.
- [ ] Collection enregistrée dans `payload.config.ts`.
- [ ] `pnpm generate:types` exécuté.
- [ ] Migration créée et testée localement.
- [ ] Route front ajoutée si exposition publique (avec `overrideAccess: false`).
- [ ] Hook de revalidation si contenu cacheable.
- [ ] Doc mise à jour dans `Doc/obsidian/03-payload/collections/`.

## Liens connexes

- [[payload-config]]
- [[access-control]]
- [[collections/categories]] — exemple minimaliste.
- [[hebergement]] — migrations en prod.
