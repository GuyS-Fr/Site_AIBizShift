---
title: "Mettre à jour le contenu"
tags: [workflow]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Mettre à jour le contenu

Cartographie des points d'entrée selon le type de contenu.

## Navigation (Header / Footer)

- Admin → **Globals** → **Header** ou **Footer**.
- Ajouter/retirer un item dans `navItems` (max 6 rows).
- Sauvegarder → hooks `revalidateHeader` / `revalidateFooter` purgent le cache immédiatement.
- Voir [[globals/header]], [[globals/footer]].

## Articles de blog

1. Admin → **Collections** → **Posts** → **Create New**.
2. Remplir `title`, `heroImage`, `content` (éditeur Lexical avec blocks inline [[blocks/banner|Banner]], [[blocks/code|Code]], [[blocks/media-block|MediaBlock]]).
3. Onglet **Meta** : `relatedPosts`, `categories`.
4. Onglet **SEO** : titre / description / image.
5. Sidebar : `publishedAt`, `authors`, `slug`.
6. **Save draft** → **Preview** → **Publish**.
7. Hook `afterChange` `revalidatePost` invalide `/posts/[slug]` et le sitemap.
8. Nouveau post indexé par le plugin search (hook `beforeSync`).

Voir [[collections/posts]], [[blog]].

## Pages CMS

Voir [[creer-une-page]] option A.

## Pages statiques (code)

Modifier le fichier correspondant (ex: `src/app/(frontend)/services/page.tsx`) puis :

```bash
pnpm dev        # preview local
git commit -am "Update services offering"
git push
# rebuild Coolify (manuel pour l'instant)
```

Pages statiques listées dans [[routes]].

## Média (images, vidéos)

- Admin → **Collections** → **Media** → **Upload**.
- Remplir `alt` (important pour l'accessibilité et le SEO).
- Utiliser le focal point si l'image sera recadrée (ex: `og` size).
- Le fichier est stocké sur `/app/public/media` (volume persistant Coolify).
- Voir [[collections/media]], [[hebergement]].

## Redirections

- Admin → **Collections** → **Redirects** (ajoutée par le plugin).
- `from` : ancien chemin (ex: `/ancien-slug`).
- `to` : destination (internal ou custom).
- ⚠️ Rappel du plugin : "You will need to rebuild the website when changing this field." — hook de revalidation déclenché mais pour les pages pré-rendues, un rebuild est parfois nécessaire.
- Voir [[PayloadRedirects]].

## Demandes de contact (lecture seule)

- Admin → **Collections** → **Demandes de contact**.
- Tri par `createdAt` décroissant.
- Purge automatique à 24 mois via la task [[collections/contact-submissions|purgeOldSubmissions]] (cron Coolify quotidien).
- Conformité RGPD — voir [[confidentialite]] et `Doc/COMPLIANCE/ROPA.md`.

## Ne touche jamais directement

- `src/payload-types.ts` — régénéré par `pnpm generate:types`.
- `src/migrations/index.ts` — régénéré par `pnpm payload migrate:create`.
- `public/media/` — uploads gérés par Payload.

## Liens connexes

- [[creer-une-page]]
- [[ajouter-une-collection]]
- [[collections/posts]]
- [[globals/header]], [[globals/footer]]
