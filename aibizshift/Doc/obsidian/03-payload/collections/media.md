---
title: "Collection media"
tags: [payload/collection]
aliases: ["Media"]
created: 2026-04-17
updated: 2026-04-17
---

# Collection `media`

Source : `src/collections/Media.ts`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `media` |
| `folders` | `true` (organisation hiérarchique) |
| Upload | oui, `staticDir: '../../public/media'` relatif au fichier |
| `adminThumbnail` | `thumbnail` (image size dédié) |
| `focalPoint` | `true` |

## Access control

| Action | Helper |
|--------|--------|
| create | `authenticated` |
| read | **`anyone`** |
| update | `authenticated` |
| delete | `authenticated` |

Lecture publique nécessaire pour servir les fichiers depuis `/api/media/file/**` ou `/media/**`. Voir [[next-config]] (`images.localPatterns`).

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `alt` | text | — | Commentaire inline indique `required: true` est désactivé. À garder en tête pour l'accessibilité |
| `caption` | richText | — | Lexical avec `FixedToolbar` + `InlineToolbar` uniquement |

## Tailles générées (image sizes)

| Nom | width | height | crop |
|-----|-------|--------|------|
| `thumbnail` | 300 | auto | — |
| `square` | 500 | 500 | — |
| `small` | 600 | auto | — |
| `medium` | 900 | auto | — |
| `large` | 1400 | auto | — |
| `xlarge` | 1920 | auto | — |
| `og` | 1200 | 630 | `center` |

Tout upload déclenche Sharp pour produire les 7 variantes + l'original. Le `focalPoint` est respecté pour `square` et `og`.

## Storage

- **Dev** : `aibizshift/public/media/` (gitignore).
- **Prod** : volume Docker `aibizshift-media` monté sur `/app/public/media`. Voir [[hebergement]].
- Les fichiers sont servis par Next.js via `next/image` (patterns `/media/**` et `/api/media/file/**`).

## Exemple de document

```json
{
  "id": 42,
  "alt": "Logo AIBizShift",
  "filename": "logo3-horizontal-dark.png",
  "mimeType": "image/png",
  "filesize": 18432,
  "width": 748,
  "height": 300,
  "focalX": 50,
  "focalY": 50,
  "sizes": {
    "thumbnail": { "url": "/media/logo3-horizontal-dark-300x120.png", "width": 300, "height": 120 },
    "og": { "url": "/media/logo3-horizontal-dark-1200x630.png", "width": 1200, "height": 630 }
  },
  "url": "/media/logo3-horizontal-dark.png"
}
```

## Liens connexes

- [[next-config]] — `localPatterns` et patterns d'images.
- [[hebergement]] — volume persistant.
- [[collections/pages]], [[collections/posts]] — consommateurs principaux.
