# PROMPT CLAUDE CODE — Page Services AIBizShift

## Contexte

Tu travailles sur le site AIBizShift (Payload CMS 3.81 + Next.js 16 + Tailwind CSS).
Crée la page Services dans `src/app/(frontend)/services/page.tsx`.
Cette page présente les 10 offres de services de Guy Salvatore, consultant IA & automatisation.
Le ton est orienté **bénéfices client** — pas technique, pas jargon. Les visiteurs sont des dirigeants de PME, artisans, responsables formation.

Reprends exactement la même palette de couleurs, typographie, espacements et composants que la homepage (voir PROMPT_CLAUDE_CODE_HOMEPAGE_V3.md pour référence).

## Meta SEO

```tsx
export const metadata = {
  title: 'Nos Services — AIBizShift | Consulting IA, Sites Web, Formation, Automatisation',
  description: 'Découvrez nos 10 services pour transformer votre entreprise avec l\'IA : consulting, création de sites web, formation, développement SaaS, conciergerie IA, chatbots, marketing automation. Valence, Drôme — France entière.',
  openGraph: {
    title: 'Services AIBizShift — Consultant IA & Automatisation pour PME',
    description: '10 services concrets pour automatiser, former et développer votre entreprise grâce à l\'IA.',
    url: 'https://aibizshift.eu/services',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'website',
  },
}
```

---

## Structure de la page

### SECTION 1 — HERO PAGE SERVICES

Fond : bg-[#0F172A]. Padding : py-16 md:py-24. Moins haut que le hero homepage (pas de min-height 80vh).

Layout centré, max-w-4xl mx-auto, text-center.

Petit badge au-dessus du titre (inline-block text-sm bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/20 mb-6) :
"10 services pour transformer votre entreprise"

Titre H1 (text-4xl md:text-5xl font-bold text-white leading-tight) :
"Des solutions IA concrètes, pas des promesses"

Sous-titre (text-lg md:text-xl text-slate-300 leading-relaxed mt-6 max-w-2xl mx-auto) :
"Du diagnostic à l'implémentation, je vous accompagne à chaque étape de votre transformation digitale. Chaque service peut être commandé seul ou combiné avec les autres."

CTA (mt-8) :
"Réserver un appel découverte →" → href="https://calendly.com/guy-salvatore/30min" target="_blank" rel="noopener noreferrer"
Style : bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all

---

### SECTION 2 — OFFRES PRINCIPALES (fond #FAFAFA, py-20 md:py-28)

Titre de section centré (text-3xl md:text-4xl font-semibold text-slate-800) :
"Nos offres principales"

Sous-titre centré (text-lg text-slate-500 mt-4 max-w-2xl mx-auto) :
"Les services les plus demandés par nos clients"

#### OFFRE 1 — Consulting IA & Automatisation

Layout : 2 colonnes (md:grid-cols-2 gap-12 items-center). Image à droite, texte à gauche.
Container : bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-16.

Image : `service-consulting.png` (rounded-xl shadow-lg)

Icône : engrenage SVG (w-12 h-12 text-blue-500 mb-4)

Titre (text-2xl md:text-3xl font-semibold text-slate-800) :
"Consulting IA & Automatisation"

Description (text-lg text-slate-600 leading-relaxed mt-4) :
"Vous perdez du temps sur des tâches répétitives ? Je cartographie vos processus, identifie les gains et mets en place des workflows intelligents qui vous font gagner 10 à 20 heures par semaine. De l'audit initial à la mise en production."

Liste de livrables (mt-6, chaque item avec une coche verte ✓ en text-green-500) :
- "Audit de maturité IA avec scoring et recommandations"
- "Workflows n8n opérationnels (jusqu'à 40+ par projet)"
- "Intégrations API (CRM, facturation, emailing)"
- "Documentation technique et formation à l'utilisation"

Ligne tarif + CTA (flex justify-between items-center mt-8 pt-6 border-t border-slate-200) :
- Tarif (text-slate-500) : "À partir de 500€/jour"
- CTA (text-blue-500 hover:text-blue-700 font-semibold) : "En savoir plus →" → href="https://calendly.com/guy-salvatore/30min" target="_blank"

---

#### OFFRE 2 — Création & Refonte de Sites Web IA

Même layout mais image à gauche, texte à droite (inverser les colonnes, md:flex-row-reverse ou order).
Container : bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-12.

Image : `service-website.png`

Icône : globe SVG (w-12 h-12 text-blue-500 mb-4)

Titre : "Création & Refonte de Sites Web IA"

Description :
"Votre site web ne vous rapporte pas de clients ? Chaque projet démarre par un audit marketing automatisé de 236 pages qui identifie précisément les problèmes. Puis je crée un site moderne, rapide, SEO-optimisé et hébergé en France — pas sur un cloud américain."

Livrables :
- "Audit marketing automatisé complet (236 pages, 14 sections)"
- "Site professionnel avec blog intégré et panel admin"
- "Optimisation SEO on-page et technique"
- "Hébergement souverain RGPD (serveurs français)"

Tarif : "À partir de 1 500€"
CTA : "Demander mon audit gratuit →"

---

#### OFFRE 3 — Formation IA & Automatisation

Image à droite.
Container : bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-12.

Image : `service-formation.png`

Icône : academic cap SVG (w-12 h-12 text-blue-500 mb-4)

Titre : "Formation IA & Automatisation"

Description :
"Pas besoin d'être développeur pour exploiter l'IA. 4 modules progressifs adaptés à tous les profils, du dirigeant qui veut comprendre l'IA au salarié qui veut automatiser ses tâches. Intervention directe ou via votre organisme de formation Qualiopi."

Sous-section : 4 modules dans une mini-grille (grid grid-cols-1 md:grid-cols-2 gap-4 mt-6).
Chaque module dans un mini-card (bg-slate-50 rounded-lg p-4) :

Module 1 :
- Badge (text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded) : "Tous publics"
- Titre (text-sm font-semibold text-slate-800 mt-2) : "Module 1 — Comprendre l'IA"
- Durée (text-xs text-slate-500) : "1/2 journée · Zéro prérequis"

Module 2 :
- Badge : "Intermédiaire"
- Titre : "Module 2 — Automatiser avec l'IA"
- Durée : "1 jour · n8n, Airtable"

Module 3 :
- Badge : "Intermédiaire+"
- Titre : "Module 3 — Créer un agent IA"
- Durée : "1 jour · No-code"

Module 4 :
- Badge (text-xs bg-amber-100 text-amber-700) : "Avancé"
- Titre : "Module 4 — Vibecoding"
- Durée : "2 jours · Claude Code, Cursor"

Tarif : "À partir de 300€/personne · Finançable OPCO/CPF"
CTA : "Demander le programme →"

---

#### OFFRE 4 — Développement SaaS sur mesure

Image à gauche.
Container : bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-12.

Image : `service-saas.png`

Icône : rocket SVG (w-12 h-12 text-blue-500 mb-4)

Titre : "Développement SaaS sur mesure"

Description :
"Vous avez une idée d'application mais pas d'équipe technique ? Je conçois et développe votre produit en mode vibecoding : vous spécifiez fonctionnellement, l'IA implémente sous ma supervision. 35 ans d'expérience AMOA garantissent la qualité de la conception."

Livrables :
- "Spécification fonctionnelle détaillée"
- "Application web complète (frontend + backend + BDD)"
- "Panel d'administration intégré"
- "Déploiement sur infrastructure souveraine"

Tarif : "À partir de 5 000€ · Forfait projet"
CTA : "Discuter de mon projet →"

---

### SECTION 3 — OFFRES COMPLÉMENTAIRES (fond blanc, py-20 md:py-28)

Titre de section centré : "Et aussi..."
Sous-titre : "Des services complémentaires pour aller plus loin"

Grille : grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto.

Chaque card est plus compacte que les offres principales :
Style : bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300

Icône (w-10 h-10 rounded-lg bg-[couleur]/10 flex items-center justify-center mb-4) avec SVG (w-5 h-5) à l'intérieur.

Titre card (text-lg font-semibold text-slate-800)
Description (text-sm text-slate-600 mt-2 leading-relaxed)
Tarif (text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100)
Lien (text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block) : "En savoir plus →"

**Card 5 — Conciergerie IA pour locations saisonnières**
- Icône : clé/maison SVG, couleur ambre (bg-amber-500/10, text-amber-500)
- Titre : "Conciergerie IA"
- Description : "Automatisation complète pour vos locations Airbnb/Booking : agent IA qui répond aux voyageurs 24/7, check-in connecté, pilotage énergétique intelligent. La seule offre qui combine IA et installation domotique."
- Tarif : "Setup dès 1 000€ + 80-150€/mois/bien"

**Card 6 — Agent IA / Chatbot pour votre site**
- Icône : bulle de dialogue SVG, couleur bleu (bg-blue-500/10, text-blue-500)
- Titre : "Chatbot IA sur mesure"
- Description : "Un assistant virtuel sur votre site web qui répond à vos clients 24/7, qualifie vos leads et prend des rendez-vous automatiquement. Entraîné sur vos données, il connaît votre entreprise."
- Tarif : "Setup dès 800€ + 50-100€/mois"

**Card 7 — Marketing Automation**
- Icône : enveloppe/email SVG, couleur vert (bg-green-500/10, text-green-500)
- Titre : "Marketing Automation"
- Description : "Séquences email intelligentes, scoring de leads, relances automatiques. Vos prospects reçoivent le bon message au bon moment, sans que vous leviez le petit doigt."
- Tarif : "Setup dès 1 500€ + 100-300€/mois"

**Card 8 — Domotique Connectée IA**
- Icône : maison connectée SVG, couleur vert (bg-emerald-500/10, text-emerald-500)
- Titre : "Domotique Connectée IA"
- Description : "Votre installation domotique existante devient intelligente : pilotage énergétique prédictif, scénarios adaptés à vos habitudes, dashboard de monitoring temps réel."
- Tarif : "Upgrade dès 300€ + 30-80€/mois"

**Card 9 — Audit de Maturité IA**
- Icône : graphique/chart SVG, couleur violet (bg-purple-500/10, text-purple-500)
- Titre : "Audit de Maturité IA"
- Description : "En une journée, je cartographie vos processus, score votre maturité digitale sur 6 dimensions et vous livre une roadmap IA priorisée avec ROI estimé par action."
- Tarif : "Forfait 500-800€ · Déduit si mission signée"

**Card 10 — LinkedIn Growth Engine IA**
- Icône : signal/trending SVG, couleur indigo (bg-indigo-500/10, text-indigo-500)
- Titre : "LinkedIn Growth Engine"
- Description : "Système complet de croissance LinkedIn : veille et scoring d'influenceurs, génération de posts avec vidéo IA, engagement automatisé, lead magnets, dashboard de pilotage."
- Tarif : "Setup dès 1 500€ + 500-1 500€/mois"

---

### SECTION 4 — COMMENT ÇA MARCHE (fond #0F172A, py-20 md:py-28)

Titre centré (text-white) : "Comment ça marche"
Sous-titre (text-slate-400) : "Un processus simple en 4 étapes"

Layout : 4 étapes en ligne horizontale sur desktop (grid md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto), empilées sur mobile.

Chaque étape :
- Numéro en cercle (w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto)
- Ligne connectrice horizontale entre les cercles sur desktop (hidden sur mobile) — utilise un border-t ou un hr positionné
- Titre étape (text-lg font-semibold text-white mt-4 text-center)
- Description (text-sm text-slate-400 mt-2 text-center)

Étape 1 :
- Numéro : "1"
- Titre : "Appel découverte"
- Description : "30 min pour comprendre vos enjeux, vos outils actuels et vos objectifs. Gratuit, sans engagement."

Étape 2 :
- Numéro : "2"
- Titre : "Diagnostic & proposition"
- Description : "Je vous envoie un audit personnalisé avec une proposition chiffrée et un planning clair."

Étape 3 :
- Numéro : "3"
- Titre : "Implémentation"
- Description : "Je construis, vous validez. Points d'étape réguliers, livraison itérative, zéro surprise."

Étape 4 :
- Numéro : "4"
- Titre : "Suivi & évolution"
- Description : "Formation à l'utilisation, maintenance, et évolutions au fil de vos besoins."

---

### SECTION 5 — CTA FINAL (fond gradient bg-gradient-to-r from-[#1E40AF] to-[#3B82F6], py-16 md:py-24)

Layout centré, max-w-3xl mx-auto, text-center.

Titre (text-3xl md:text-4xl font-bold text-white) :
"Prêt à passer à l'action ?"

Paragraphe (text-lg text-blue-100 mt-4) :
"Réservez votre appel découverte gratuit de 30 minutes. On identifie ensemble le service le plus adapté à votre situation."

2 boutons côte à côte (flex flex-wrap gap-4 justify-center mt-8) :
- "Réserver mon appel gratuit →" → href="https://calendly.com/guy-salvatore/30min" target="_blank" rel="noopener noreferrer"
  Style : bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg
- "Voir l'audit gratuit →" → href="#" {/* TODO: lien vers page audit */}
  Style : border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all

Mention (text-sm text-blue-200 mt-6) :
"Pas de commercial, c'est moi qui vous réponds. Pas de spam, promis."

---

### FOOTER

Identique à celui de la homepage (même composant si possible). Voir PROMPT_CLAUDE_CODE_HOMEPAGE_V3.md.

---

## Consignes techniques

1. Composant Server Component (pas de "use client" sauf nécessité)
2. `<Image>` de Next.js pour toutes les images avec alt descriptif en français
3. Icônes SVG inline — PAS d'emoji
4. Tous les liens Calendly : target="_blank" rel="noopener noreferrer"
5. Scroll smooth pour les ancres internes
6. 100% responsive : mobile 375px, tablette 768px, desktop 1280px
7. Les offres principales (1-4) sont en layout large alternant image gauche/droite
8. Les offres complémentaires (5-10) sont en cards compactes dans une grille
9. Si une image n'existe pas dans public/images/, affiche un placeholder gris
10. Réutilise le footer de la homepage (importe-le comme composant partagé si possible)

## Images utilisées (dans public/images/)

- `service-consulting.png` (600x400)
- `service-website.png` (600x400)
- `service-formation.png` (600x400)
- `service-saas.png` (600x400)

Les cards complémentaires (5-10) n'ont pas d'images — elles utilisent uniquement les icônes SVG colorées.
