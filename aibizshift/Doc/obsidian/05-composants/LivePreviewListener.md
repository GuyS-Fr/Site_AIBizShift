---
title: "LivePreviewListener"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# LivePreviewListener

Source : `src/components/LivePreviewListener/index.tsx`. Composant client (`'use client'`).

## Rôle

Lorsqu'un admin édite une page ou un post en mode draft dans `/admin`, l'iframe de preview doit se mettre à jour à chaque frappe. Ce composant écoute les messages `postMessage` envoyés par `@payloadcms/live-preview-react` et re-render la page.

## Usage

Monté uniquement quand `draftMode().isEnabled === true` dans [[pages-cms|src/app/(frontend)/[slug]/page.tsx]] et dans `src/app/(frontend)/posts/[slug]/page.tsx`.

```tsx
{draft && <LivePreviewListener />}
```

## Breakpoints

Configurés dans [[payload-config]] :
- Mobile 375×667
- Tablet 768×1024
- Desktop 1440×900

## Liens connexes

- [[pages-cms]]
- [[blog]]
- [[AdminBar]]
- [[payload-config]]
