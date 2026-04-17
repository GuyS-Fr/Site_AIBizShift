---
title: "Portfolio — /portfolio"
tags: [page, route]
aliases: ["Portfolio"]
created: 2026-04-17
updated: 2026-04-17
---

# Portfolio

Source : `src/app/(frontend)/portfolio/page.tsx`. SSG. 4 projets avec badges tech.

## Métadonnées

- `title` : `Portfolio — AIBizShift | Projets IA, Sites Web, Automatisation`
- `description` : plateforme SaaS OnPulse, sites web, workflows, chatbots IA.

## Structure

### Hero

- **Titre** : "Ce que je construis"
- **Pitch** : "Chaque projet est conçu, développé et déployé par mes soins. Pas de sous-traitance, pas de template — du sur-mesure avec les meilleurs outils IA."

### Projet 1 — OnPulse

- **Statut** : En développement — **80%**.
- **Description** : plateforme SaaS éducative de quiz vidéo pour ESATs (établissements et services d'aide par le travail). Les travailleurs en situation de handicap visionnent des vidéos métier et répondent à des quiz adaptatifs ; les moniteurs suivent les progrès via un dashboard.
- **Tech** : Next.js 15, React 19, TypeScript, Prisma, Supabase, fal.ai, Coolify, Scaleway.
- **Lien** : `https://onpulse.aibizshift.eu`.

### Projet 2 — AIBizShift.eu

- **Statut** : En ligne.
- **Description** : ce site lui-même, conçu en vibecoding avec Claude Code. Design responsive, SEO, formulaire SMTP, hébergement souverain.
- **Tech** : Next.js 16, Payload CMS, Tailwind CSS, PostgreSQL, Coolify, Scaleway.

### Projet 3 — 40+ Workflows d'automatisation IA

- **Statut** : En production.
- **Description** : workflows n8n (relances clients, scraping, génération de contenu, intégrations CRM, notifications, pipelines de données). Chaque workflow est documenté, testé, monitoré.
- **Tech** : n8n, Airtable, Brevo, OpenAI API, Supabase, Webhooks.

### Projet 4 — Audit Marketing IA

- **Statut** : Outil interne.
- **Description** : générateur de rapport sur la présence digitale (SEO technique, performance web, copywriting, UX, concurrence, recommandations). Utilisé comme lead magnet.
- **Tech** : IA générative, Web scraping, PDF, Automatisation.

### CTA final

- "Réserver un appel gratuit" (Calendly).
- "Voir nos services" → `/services`.

## Images requises

- `audit-report-mockup.png` (présent, partagé avec la homepage)
- Captures OnPulse, AIBizShift, n8n — encore à produire (placeholders "Capture X à venir").

## Composants

- `TechBadge` (local au fichier) — petit pill `text-xs bg-slate-100`.

## Liens connexes

- [[services]] — services illustrés par ces projets.
- [[a-propos]] — parcours et chiffres cohérents.
- [[contact]]
