# Documentation — Page Services

## Fichier source

`src/app/(frontend)/services/page.tsx`

## Route

`/services` — Page statique (Server Component). Priorite sur la route dynamique `[slug]` de Payload.

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` | Badge, titre, sous-titre, CTA Calendly |
| 2 | Offres principales | `#FAFAFA` | 4 offres detaillees avec images alternees |
| 3 | Offres complementaires | blanc | 6 cards compactes en grille avec icones SVG |
| 4 | Comment ca marche | `#0F172A` | 4 etapes avec cercles numerotes + ligne connectrice |
| 5 | CTA final | gradient bleu `#1E40AF` → `#3B82F6` | 2 boutons (Calendly + audit) |

## Offres principales (section 2)

| # | Offre | Image | Layout | Tarif |
|---|-------|-------|--------|-------|
| 1 | Consulting IA & Automatisation | `service-consulting.png` | Texte gauche, image droite | 500 EUR/jour |
| 2 | Creation & Refonte Sites Web IA | `service-website.png` | Image gauche, texte droite | 1 500 EUR |
| 3 | Formation IA & Automatisation | `service-formation.png` | Texte gauche, image droite | Non affiche |
| 4 | Developpement SaaS sur mesure | `service-saas.png` | Image gauche, texte droite | 5 000 EUR forfait |

Chaque offre inclut : icone SVG, titre, description, liste de livrables (coches vertes), tarif, CTA Calendly.

L'offre 3 (Formation) inclut une mini-grille de 4 modules avec badges de niveau.
Module 4 (Vibecoding) : "2 jours · Claude Code" (Cursor supprime le 2026-04-08).

## Offres complementaires (section 3)

| # | Card | Couleur icone | Tarif |
|---|------|---------------|-------|
| 5 | Conciergerie IA | ambre | Setup 1 000 EUR + 80-150 EUR/mois/bien |
| 6 | Chatbot IA sur mesure | bleu | Setup 800 EUR + 50-100 EUR/mois |
| 7 | Marketing Automation | vert | Setup 1 500 EUR + 100-300 EUR/mois |
| 8 | Domotique Connectee IA | emeraude | Upgrade 300 EUR + 30-80 EUR/mois |
| 9 | Audit de Maturite IA | violet | Forfait 500-800 EUR |
| 10 | LinkedIn Growth Engine | indigo | Setup 1 500 EUR + 500-1 500 EUR/mois |

Chaque card : icone dans un carre colore, titre, description, tarif, lien "En savoir plus".

## Processus (section 4)

1. Appel decouverte (30 min, gratuit)
2. Diagnostic & proposition
3. Implementation
4. Suivi & evolution

Cercles numerotes avec ligne connectrice horizontale sur desktop.

## Images utilisees

Toutes dans `public/images/` (memes que la homepage) :

- `service-consulting.png` (600x400)
- `service-website.png` (600x400)
- `service-formation.png` (600x400)
- `service-saas.png` (600x400)

Les cards complementaires (5-10) utilisent uniquement des icones SVG.

## Liens externes

Tous les CTA pointent vers Calendly : `https://calendly.com/guy-salvatore/30min` (target="_blank")

## SEO

```
title: Nos Services — AIBizShift | Consulting IA, Sites Web, Formation, Automatisation
description: Decouvrez nos 10 services pour transformer votre entreprise avec l'IA...
og:url: https://aibizshift.eu/services
og:locale: fr_FR
```

## Notes techniques

- Server Component (pas de "use client")
- Le footer n'est PAS dans cette page — il est rendu par le layout global `(frontend)/layout.tsx`
- La route `/services` statique a priorite sur la route `[slug]` de Payload CMS
- Le lien "Voir l'audit gratuit" pointe vers `#` (TODO: creer la page audit)
- Le tarif Formation (300 EUR/personne OPCO/CPF) a ete supprime le 2026-04-08
