---
title: "Collection users"
tags: [payload/collection, payload/access]
aliases: ["Users"]
created: 2026-04-17
updated: 2026-04-17
---

# Collection `users`

Source : `src/collections/Users/index.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `users` |
| `auth` | `true` (collection d'authentification Payload) |
| `useAsTitle` | `name` |
| Colonnes admin par défaut | `name`, `email` |
| `timestamps` | `true` |

## Access control

| Action | Helper |
|--------|--------|
| admin | `authenticated` |
| create | `authenticated` |
| read | `authenticated` |
| update | `authenticated` |
| delete | `authenticated` |

Aucune lecture publique — c'est ce qui impose le pattern `populatedAuthors` côté [[collections/posts]].

## Champs

Payload injecte automatiquement `email` + `password` (hashé) via `auth: true`. Seul champ custom :

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `name` | text | — | Affiché sur les posts via `populatedAuthors` |

## Connexion admin

- URL : `/admin`
- Première connexion : aucun compte seeded par défaut → créer manuellement via l'UI ou via l'endpoint seed (`/next/seed`).
- JWT signé avec `PAYLOAD_SECRET` (voir [[variables-environnement]]).

## Exemple de document (vue admin, sans `password`)

```json
{
  "id": 1,
  "email": "guy@aibizshift.eu",
  "name": "Guy Salvatore",
  "createdAt": "2026-04-02T12:00:00.000Z",
  "updatedAt": "2026-04-17T10:00:00.000Z"
}
```

## Points d'attention

- Pas de RBAC : n'importe quel utilisateur connecté peut atteindre l'admin et modifier toutes les collections.
- Pas de champ `role` ni de logique fine — à ajouter si plusieurs contributeurs.

## Liens connexes

- [[access-control]]
- [[collections/posts]] — pourquoi on ne lit jamais `users` directement côté public.
- [[payload-config]] — `admin.user: Users.slug`.
