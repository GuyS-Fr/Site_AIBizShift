---
title: "Homepage — /"
tags: [page, route]
aliases: ["Accueil"]
created: 2026-04-17
updated: 2026-04-17
---

# Homepage

Source : `src/app/(frontend)/page.tsx`. Rendu **SSG** — contenu codé en dur, pas de dépendance CMS (hors Header / Footer globaux).

## Métadonnées

- `title` : `AIBizShift — Consultant IA & Automatisation pour PME | Valence, Drôme`
- `description` : pitch produit + mention "Audit gratuit. Valence, Drôme — France entière."
- OpenGraph : `url: https://aibizshift.eu`, `siteName: AIBizShift`, `locale: fr_FR`

## Structure (6 sections)

### 1 — Hero

- **Background** : `/images/hero-background.png` + overlay `#0F172A/80`.
- **Illustration** : `/images/hero-illustration.png` (réseau neuronal, 800x800).
- **Titre** : "Transformez votre entreprise avec l'IA — sans jargon, sans complexité"
- **Pitch** : positionnement consultant IA pour PME et artisans.
- **CTAs** : "Réserver mon audit gratuit" (Calendly) + "Découvrir nos services" (ancre `#services`).
- **Bandeau crédibilité** : 4 chiffres — 35 ans expertise IT, n8n Hackathon 2026, 40+ workflows déployés, 100% souverain RGPD.

### 2 — Problème / Solution

- **Visuel** : `/images/before-after.png`.
- **Angle** : adoption IA par les concurrents, manque de temps/compétences, méfiance cloud US.
- **Positionnement** : traduction besoins métier → solutions souveraines avec accompagnement.

### 3 — Services (ancre `#services`)

4 cartes (résumé, redirection vers [[services]]) :

1. **Consulting IA & Automatisation** — pour PME qui veulent automatiser sans recruter.
2. **Création de sites web IA** — pour artisans, commerces, professions libérales.
3. **Formation IA & Automatisation** — dirigeants, salariés, indépendants, reconversions.
4. **Développement SaaS sur mesure** — startups, PME innovantes, porteurs de projet.

Lien : "Voir tous nos services →" vers `/services`.

### 4 — Preuve sociale / Crédibilité

Fond sombre `#0F172A`. 3 cartes :

- **Expertise terrain** — 35 ans chez Orange/France Telecom (Éthiopie, Côte d'Ivoire, Suisse).
- **Builder, pas théoricien** — OnPulse (SaaS), même stack que celle proposée aux clients.
- **Souveraineté numérique** — hébergement France, conforme RGPD.

### 5 — CTA Audit gratuit (ancre `#audit`)

- **Visuel** : `/images/audit-report-mockup.png`.
- **Promesse** : rapport IA en 15 min (SEO, conversion, copywriting, concurrents).
- **CTA** : lien vers `/contact`.
- **Réassurance** : Gratuit · Sans engagement · Résultats en 24h.

### 6 — Footer custom

> ⚠️ Le footer du site est **codé en dur** dans la homepage (et **non** via le global Payload `footer`). Voir point d'attention [[globals/footer]]. Les autres pages utilisent elles le composant `<Footer />` branché sur Payload.

Colonnes :
- **Navigation** : Services, Formations (TODO, lien `#`), Portfolio, Blog, À propos.
- **Services** : Consulting IA, Sites web, Formation, SaaS sur mesure, Conciergerie IA.
- **Contact** : `contact@aibizshift.eu`, LinkedIn, Malt, CTA Audit gratuit.
- Mentions légales, Politique de confidentialité, copyright 2026.

## Liens sortants clés

- Calendly `https://calendly.com/guy-salvatore/30min` (constante `CALENDLY_URL`).
- `/services`, `/portfolio`, `/a-propos`, `/posts`, `/contact`, `/mentions-legales`, `/confidentialite`.
- LinkedIn `https://www.linkedin.com/in/guy-salvatore/`
- Malt `https://www.malt.fr/profile/guysalvatore`

## Images requises (dans `public/images/`)

- `hero-background.png`
- `hero-illustration.png`
- `before-after.png`
- `service-consulting.png`
- `service-website.png`
- `service-formation.png`
- `service-saas.png`
- `audit-report-mockup.png`

## TODO identifiés en code

- Ligne 479 : `<a href="#">Formations</a>` — remplacer `#` par la vraie URL quand la page Formations existera.

## Liens connexes

- [[services]]
- [[a-propos]]
- [[portfolio]]
- [[contact]]
- [[globals/footer]] — pourquoi ce footer est en dur ici.
