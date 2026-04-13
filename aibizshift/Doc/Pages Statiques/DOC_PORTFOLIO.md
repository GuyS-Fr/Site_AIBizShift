# Documentation — Page Portfolio

## Fichier source

`src/app/(frontend)/portfolio/page.tsx`

## Route

`/portfolio` — Page statique (Server Component)

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` | Titre "Ce que je construis" + sous-titre |
| 2 | Projets | `#FAFAFA` | 4 cards larges alternant image gauche/droite |
| 3 | CTA | gradient bleu `#1E40AF` → `#3B82F6` | 2 boutons (Calendly + /services) |

## Projets

| # | Projet | Badge | Layout | Lien |
|---|--------|-------|--------|------|
| 1 | OnPulse — Plateforme SaaS educative pour ESATs | En developpement — 80% (vert) | Image gauche | https://onpulse.aibizshift.eu |
| 2 | AIBizShift.eu — Site vitrine consultant IA | En ligne (bleu) | Image droite | Pas de lien ("Vous y etes deja !") |
| 3 | 40+ Workflows d'automatisation IA (n8n) | En production (emeraude) | Image gauche | Pas de lien |
| 4 | Audit Marketing IA — Rapport 236 pages | Outil interne (violet) | Image droite | Pas de lien |

## Technologies par projet

| Projet | Badges tech |
|--------|-------------|
| OnPulse | Next.js 15, React 19, TypeScript, Prisma, Supabase, fal.ai, Coolify, Scaleway |
| AIBizShift | Next.js 16, Payload CMS, Tailwind CSS, PostgreSQL, Coolify, Scaleway |
| Workflows n8n | n8n, Airtable, Brevo, OpenAI API, Supabase, Webhooks |
| Audit Marketing | IA generative, Web scraping, PDF, Automatisation |

## Images

- Projets 1, 2, 3 : placeholders div gris `bg-slate-700` avec texte "Capture a venir"
- Projet 4 : reutilise `public/images/audit-report-mockup.png`

## Liens externes

- **Calendly :** https://calendly.com/guy-salvatore/30min (target="_blank")
- **OnPulse :** https://onpulse.aibizshift.eu (target="_blank")

## SEO

```
title: Portfolio — AIBizShift | Projets IA, Sites Web, Automatisation
description: Decouvrez les projets realises par AIBizShift : plateforme SaaS OnPulse, sites web...
```

## Notes techniques

- Server Component (pas de "use client")
- Composant local `TechBadge` pour les badges tech (text-xs bg-slate-100 rounded-full)
- Meme style d'alternance gauche/droite que les offres principales de la page Services
