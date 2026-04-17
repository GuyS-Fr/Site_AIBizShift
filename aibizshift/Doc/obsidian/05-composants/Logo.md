---
title: "Logo"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Logo

Source : `src/components/Logo/Logo.tsx`.

## Props

| Prop | Type | Défaut |
|------|------|--------|
| `loading` | `'lazy' \| 'eager'` | `'lazy'` |
| `priority` | `'high' \| 'low' \| 'auto'` | — |
| `className` | `string` | `''` |

## Asset

- Source : `public/images/logo3-horizontal-dark.png` (748×300).
- Le fichier est en **fond sombre** inclus dans le PNG → se fond avec `bg-black` (Header) et `bg-card` (Footer en thème dark).
- Rendu via `next/image` avec `h-20 w-auto` (80 px de haut affiché).

## Rendu

```tsx
<Image
  src="/images/logo3-horizontal-dark.png"
  alt="AIBizShift"
  width={748}
  height={300}
  className={cn('h-20 w-auto', className)}
  loading={loading}
  priority={priority === 'high'}
/>
```

## Contrainte Next.js

- `images.localPatterns` de `next.config.ts` inclut `/images/**` — sinon `next/image` rejette le chemin. Voir [[next-config]].
- Dockerfile copie `public` **après** `.next/standalone` pour éviter l'écrasement.

## Liens connexes

- [[Header]]
- [[Footer]]
- [[next-config]]
