# Documentation — Homepage

## Fichier source

`src/app/(frontend)/page.tsx`

## Route

`/` — Page statique (Server Component, pas de layout builder Payload)

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` avec image background | Titre, sous-titre, 2 CTA (Calendly + ancre), bandeau chiffres cles |
| 2 | Probleme / Solution | `#FAFAFA` | 2 colonnes texte + image `before-after.png` |
| 3 | Services | blanc | 4 cards avec images (consulting, website, formation, SaaS) |
| 4 | Credibilite | `#0F172A` | 3 cards (expertise, builder, souverainete) avec icones SVG |
| 5 | CTA Audit | gradient bleu `#1E40AF` → `#3B82F6` | Titre, description audit 236 pages, CTA Calendly, image mockup |
| 6 | Footer | `#0F172A` | 4 colonnes : marque, navigation, services, contact |

## Images utilisees

Toutes dans `public/images/` :

- `hero-background.png` — Fond hero (cover, avec overlay `bg-[#0F172A]/80`)
- `hero-illustration.png` — Illustration reseau neuronal (800x800, hidden mobile)
- `before-after.png` — Avant/apres automatisation (1200x600)
- `service-consulting.png` — Card consulting (600x400)
- `service-website.png` — Card sites web (600x400)
- `service-formation.png` — Card formation (600x400)
- `service-saas.png` — Card SaaS (600x400)
- `audit-report-mockup.png` — Mockup rapport audit (800x600, rotation -2deg)

## Liens externes

- **Calendly** : `https://calendly.com/guy-salvatore/30min` (target="_blank")
- **LinkedIn** : `https://www.linkedin.com/in/guy-salvatore/` (target="_blank")
- **Malt** : `https://www.malt.fr/profile/guysalvatore` (target="_blank")

## Liens internes (footer)

| Lien | Destination | Statut |
|------|-------------|--------|
| Services | `/services` | Actif |
| Blog | `/posts` | Actif |
| Consulting IA, Sites web, Formation, SaaS, Conciergerie | `/services` | Actif |
| Formations | `#` | TODO — page a creer |
| Portfolio | `#` | TODO — page a creer |
| A propos | `#` | TODO — page a creer |
| Mentions legales | `#` | TODO — page a creer |
| Politique de confidentialite | `#` | TODO — page a creer |

## SEO

```
title: AIBizShift — Consultant IA & Automatisation pour PME | Valence, Drome
description: Consultant IA senior, j'aide les PME et artisans a automatiser...
og:url: https://aibizshift.eu
og:locale: fr_FR
```

## Notes techniques

- Server Component (pas de "use client")
- Le footer est integre directement dans la page (pas le composant Footer global de Payload)
- Les images utilisent `<Image>` de Next.js avec `localPatterns` configure pour `/images/**`
- La section hero utilise `fill` + `object-cover` pour le background
- "Guy Music" a ete corrige en "Guy Salvatore" le 2026-04-08
