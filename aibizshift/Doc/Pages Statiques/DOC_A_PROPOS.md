# Documentation — Page A propos

## Fichier source

`src/app/(frontend)/a-propos/page.tsx`

## Route

`/a-propos` — Page statique (Server Component)

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` | 2 colonnes : titre "De Orange a l'IA : 35 ans a resoudre des problemes complexes" + sous-titre a gauche, photo de Guy Salvatore a droite |
| 2 | Parcours | `#FAFAFA` | Storytelling en prose (France Telecom, international, independant) |
| 3 | Differenciation | blanc | 3 cards avec icones ambre (metier, builder, souverainete) |
| 4 | Chiffres | `#0F172A` | Grid 2x3 metriques ambre (35 ans, 3 continents, 40+ workflows, etc.) |
| 5 | Formation | `#FAFAFA` | Telecom ParisTech, CNAM, Hackathon n8n, VibeAcademy |
| 6 | CTA | gradient bleu `#1E40AF` → `#3B82F6` | Bouton Calendly |

## Chiffres cles (section 4)

| Chiffre | Label |
|---------|-------|
| 35 | annees d'experience IT |
| 3 | continents, 5+ pays |
| 40+ | workflows IA deployes |
| 10 | services proposes |
| 1 | plateforme SaaS (OnPulse) |
| 100% | souverain RGPD |

## Differenciation (section 3)

| Bloc | Icone | Titre |
|------|-------|-------|
| 1 | briefcase ambre | Je comprends votre metier |
| 2 | code ambre | Je construis, je ne delegue pas |
| 3 | shield ambre | Tout reste en France |

## Image

- Photo hero : `public/images/guy-salvatore.jpg` affichee via `next/image` en mode `fill` dans un conteneur `relative h-80 w-64 rounded-2xl overflow-hidden` avec `object-cover`
- Attribut `priority` (image above-the-fold pour LCP)
- Visible uniquement en md+ (classe `hidden md:flex` sur le wrapper)

## Liens externes

- **Calendly :** https://calendly.com/guy-salvatore/30min (target="_blank")

## SEO

```
title: A propos — Guy Salvatore | AIBizShift — Consultant IA & Automatisation
description: Decouvrez le parcours de Guy Salvatore : 35 ans chez Orange/France Telecom...
```

## Notes techniques

- Server Component (pas de "use client")
- Meme style de cards que la section credibilite de la homepage
- Photo placeholder a remplacer par une vraie photo
