---
title: "Pages CMS — /[slug]"
tags: [page, route, payload/collection]
aliases: ["Pages dynamiques"]
created: 2026-04-17
updated: 2026-04-17
---

# Pages CMS — `/[slug]`

Source : `src/app/(frontend)/[slug]/page.tsx`. Route dynamique qui résout toute page CMS non captée par une route statique (services, a-propos, etc.).

## Flux de résolution

```typescript
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })
  return pages.docs
    ?.filter((doc) => doc.slug !== 'home')
    .map(({ slug }) => ({ slug }))
}
```

- Tous les slugs publiés **sauf** `home` sont pré-rendus.
- Le fallback `slug === 'home'` retombe sur `homeStatic` (`src/endpoints/seed/home-static.ts`) si la page n'existe pas en DB.

## Rendu

```typescript
const page = await queryPageBySlug({ slug: decodedSlug })
const { hero, layout } = page
return (
  <article className="pt-16 pb-24">
    <PageClient />
    <PayloadRedirects disableNotFound url={url} />
    {draft && <LivePreviewListener />}
    <RenderHero {...hero} />
    <RenderBlocks blocks={layout} />
  </article>
)
```

- `decodeURIComponent(slug)` — supporte les slugs avec caractères spéciaux.
- `PayloadRedirects` — consulte la collection `redirects` (plugin) pour rediriger si un slug a changé.
- `queryPageBySlug` est wrappé dans `cache()` de React (dédoublonne les appels `page.tsx` + `generateMetadata`).

## Draft mode

- `draftMode()` de `next/headers` détermine si le visiteur vient de `/next/preview?...&secret=$PREVIEW_SECRET`.
- Si draft : `overrideAccess: true` et `LivePreviewListener` monté.

## `generateMetadata`

Utilise `generateMeta({ doc: page })` (`src/utilities/generateMeta.ts`) qui concatène :
- `meta.title` ou fallback `title`
- `meta.description`
- `meta.image` ou `og` size

## Composants sollicités

- [[RenderHero|src/heros/RenderHero.tsx]] — dispatch vers HighImpact, MediumImpact, LowImpact ou None.
- `src/blocks/RenderBlocks.tsx` — dispatch vers le composant de chaque block `layout`.
- [[LivePreviewListener]]
- [[PayloadRedirects]]

## Liens connexes

- [[collections/pages]]
- [[flux-de-donnees]] — revalidation.
- [[blocks/call-to-action]], [[blocks/content]], [[blocks/media-block]], [[blocks/archive]], [[blocks/form]].
