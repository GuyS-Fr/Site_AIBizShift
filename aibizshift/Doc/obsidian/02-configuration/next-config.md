---
title: "Configuration Next.js"
tags: [config, deploiement]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Configuration Next.js

Fichier source : `next.config.ts`. Exporté via `withPayload(nextConfig, { devBundleServerPackages: false })`.

## Mode standalone

```typescript
output: 'standalone',
```

- Obligatoire pour le `Dockerfile` multi-stage qui copie `.next/standalone` et `.next/static` dans l'image runner. Voir [[build]].

## Images

```typescript
images: {
  localPatterns: [
    { pathname: '/api/media/file/**' },
    { pathname: '/media/**' },
    { pathname: '/images/**' },
  ],
  qualities: [100],
  remotePatterns: [ /* dérivé de NEXT_PUBLIC_SERVER_URL */ ],
},
```

- `localPatterns` autorise trois chemins servis localement :
  - `/api/media/file/**` — fichiers servis par Payload (stream signé).
  - `/media/**` — assets uploadés depuis l'admin (volume Docker).
  - `/images/**` — assets statiques codés en dur (`public/images/`), dont le logo.
- `remotePatterns` est construit à partir de l'URL publique pour permettre aux `<Image>` de pointer vers le même domaine en https.
- `qualities: [100]` — qualité unique autorisée côté `<Image quality={100} />` ; toute autre valeur serait rejetée par Next 16.

## Redirects

```typescript
redirects,
```

Importé depuis `aibizshift/redirects.ts`. Redirige les navigateurs IE (user-agent matching `(.*Trident.*)`) vers `/ie-incompatible.html`, sauf eux-mêmes pour éviter la boucle.

## Turbopack

```typescript
turbopack: {
  root: path.resolve(dirname),
},
```

Root explicite pour éviter les faux positifs quand le repo racine est différent du dossier `aibizshift/`. Voir [[build]] pour la structure monorepo.

## Webpack (legacy)

```typescript
webpack: (webpackConfig) => {
  webpackConfig.resolve.extensionAlias = {
    '.cjs': ['.cts', '.cjs'],
    '.js': ['.ts', '.tsx', '.js', '.jsx'],
    '.mjs': ['.mts', '.mjs'],
  }
  return webpackConfig
},
```

Alias d'extension conservés pour les commandes qui passent encore par Webpack (ex. `pnpm payload generate:importmap`).

## Sass

```typescript
sassOptions: {
  silenceDeprecations: ['legacy-js-api'],
  includePaths: [
    path.resolve(dirname, 'node_modules/@payloadcms/ui/dist/scss'),
    path.resolve(dirname, 'node_modules'),
  ],
},
```

- Silence les warnings `legacy-js-api` émis par les SCSS Payload UI.
- Permet aux feuilles Payload UI de résoudre leurs imports relatifs.

## React strict

`reactStrictMode: true` — double-rendu en dev pour détecter les effets non idempotents.

## Sitemap (postbuild)

Non dans `next.config.ts` mais dans `next-sitemap.config.cjs` :

```javascript
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/posts-sitemap.xml', '/pages-sitemap.xml', '/*', '/posts/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: '/admin/*' }],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/posts-sitemap.xml`,
    ],
  },
}
```

- Exclut les pages dynamiques du sitemap statique (gérées par les routes `(sitemaps)/`).
- `robots.txt` interdit `/admin/*`.
- Exécuté en `postbuild` via `pnpm build && next-sitemap`.

## Liens connexes

- [[variables-environnement]] — `NEXT_PUBLIC_SERVER_URL`, `VERCEL_PROJECT_PRODUCTION_URL`.
- [[payload-config]] — configuration côté CMS.
- [[build]] — ce que la config permet au Dockerfile.
- [[routes]] — table des routes servies par cette config.
