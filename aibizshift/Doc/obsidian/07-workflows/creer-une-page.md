---
title: "Créer une page"
tags: [workflow, page]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Créer une page

Deux chemins possibles selon le type de page.

## Option A — Page CMS (recommandé pour contenu éditorial)

Rendue par la route dynamique [[pages-cms|/[slug]]]. Ne touche pas au code.

### Procédure

1. Ouvrir `/admin` et se connecter.
2. Collections → **Pages** → **Create New**.
3. Renseigner :
   - `title`
   - `slug` (auto-généré depuis le titre, modifiable)
   - Onglet **Hero** : choisir le type (`none`/`highImpact`/`mediumImpact`/`lowImpact`), ajouter richText + linkGroup + media.
   - Onglet **Content** : ajouter les blocks souhaités — [[blocks/call-to-action|CTA]], [[blocks/content|Content]], [[blocks/media-block|MediaBlock]], [[blocks/archive|Archive]], [[blocks/form|FormBlock]].
   - Onglet **SEO** : `meta.title`, `meta.description`, `meta.image` (utilisés par OpenGraph).
4. **Save draft** puis **Preview** (ouvre `/next/preview?secret=$PREVIEW_SECRET&...` avec live preview).
5. Quand tout est prêt → **Publish**.

### Ce qui se passe côté plateforme

- Hook `beforeChange` `populatePublishedAt` renseigne `publishedAt` si vide.
- Hook `afterChange` `revalidatePage` → `revalidatePath(/${slug})` + `revalidateTag('pages-sitemap')`.
- Le prochain visiteur récupère la page régénérée.
- `generateStaticParams` de `[slug]/page.tsx` prendra en compte la nouvelle page **au prochain build** — entretemps, la page est servie dynamiquement.

### Gestion des versions

- Autosave 100 ms, jusqu'à 50 versions par doc.
- `schedulePublish: true` → on peut programmer une publication à une date future.

## Option B — Page statique (code)

Recommandé pour les pages structurelles non éditables (légales, landing métier en dur). Exemples : [[homepage]], [[services]], [[mentions-legales]].

### Procédure

1. Créer le dossier + fichier :

```
src/app/(frontend)/nouvelle-page/
  page.tsx
```

2. Structure type :

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titre — AIBizShift',
  description: '...',
}

export default function NouvellePage() {
  return <>{/* JSX */}</>
}
```

3. Tester en local : `pnpm dev`, visiter `http://localhost:3000/nouvelle-page`.
4. Si la page doit apparaître dans la navigation, modifier le global [[globals/header]] via Admin → Globals → Header.
5. Commit + push → rebuild Coolify.

## Choisir entre A et B

| Critère | Option A (CMS) | Option B (code) |
|---------|----------------|-----------------|
| Contenu change souvent | ✅ | ❌ |
| Structure complexe, animations, layout custom | ❌ | ✅ |
| Plusieurs rédacteurs non techniques | ✅ | ❌ |
| Besoin de live preview | ✅ | ❌ (rebuild à chaque changement) |
| Pas d'accès à la DB en build | ❌ | ✅ |

## Liens connexes

- [[pages-cms]]
- [[homepage]], [[services]] — exemples d'option B.
- [[collections/pages]]
- [[mettre-a-jour-le-contenu]]
