---
title: "PayloadRedirects"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# PayloadRedirects

Source : `src/components/PayloadRedirects/index.tsx`.

Consulte la collection `redirects` (injectée par le plugin `@payloadcms/plugin-redirects`) pour rediriger l'utilisateur si le slug a changé.

## Props

| Prop | Type | Usage |
|------|------|-------|
| `url` | string | URL demandée (ex: `/anciens-services`) |
| `disableNotFound` | boolean | Ne pas déclencher le 404 si pas de match |

## Logique

1. Cherche un document `redirects` où `from === url`.
2. S'il existe → `redirect()` vers le `to` (internal ou custom).
3. Sinon → `notFound()` (sauf si `disableNotFound`).

## Intégration

Utilisé dans [[pages-cms|src/app/(frontend)/[slug]/page.tsx]] :

```tsx
if (!page) return <PayloadRedirects url={url} />
// ...
<PayloadRedirects disableNotFound url={url} />
```

## Admin

Les redirects se gèrent dans Admin → Collections → Redirects. Le hook `revalidateRedirects` purge le cache Next.js à chaque modification.

## Note

Le plugin redirects ajoute une description sur le champ `from` : "You will need to rebuild the website when changing this field." Dit autrement, un changement de `from` ne met à jour le comportement qu'au **prochain build** (les redirects `generateStaticParams` sont pré-rendus).

## Liens connexes

- [[payload-config]]
- [[pages-cms]]
- [[next-config]]
