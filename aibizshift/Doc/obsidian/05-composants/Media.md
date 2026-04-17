---
title: "Media"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Media

Source : `src/components/Media/`.

Composant multimodal qui rend un upload Payload (image, vidéo, PDF) en fonction de son `mimeType`.

## Fichiers

- `src/components/Media/index.tsx` — dispatcher.
- `src/components/Media/ImageMedia/index.tsx` — `<Image>` Next.js avec sélection automatique de l'image size adaptée.
- `src/components/Media/VideoMedia/index.tsx` — `<video>` natif.

## Props principales

| Prop | Type | Usage |
|------|------|-------|
| `resource` | Media upload | Document complet depuis [[collections/media]] |
| `size` | image size | `thumbnail`, `square`, `small`, `medium`, `large`, `xlarge`, `og` |
| `fill` | boolean | `object-cover` |
| `priority` | boolean | LCP important |
| `className` | string | Styling additionnel |

## Comportement

- Si `resource.mimeType` commence par `image/` → `<ImageMedia>`.
- Sinon → `<VideoMedia>`.
- Utilise les `imageSizes` définies dans [[collections/media]].

## Liens connexes

- [[collections/media]] — source des uploads.
- [[blocks/media-block]] — consommateur principal.
