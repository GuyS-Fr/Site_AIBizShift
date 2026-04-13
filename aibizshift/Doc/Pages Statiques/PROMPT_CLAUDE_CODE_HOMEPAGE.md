# PROMPT CLAUDE CODE — Homepage AIBizShift

## Contexte projet

Tu travailles sur un site web professionnel construit avec Payload CMS 3.81 + Next.js 16 + Tailwind CSS.
Le projet est dans le dossier courant. Le site est pour **AIBizShift** (aibizshift.eu), un consultant IA & automatisation basé à Valence (Drôme, France).

## Ce que tu dois faire

Crée le composant homepage complet dans `src/app/(frontend)/page.tsx` (ou le fichier équivalent qui sert la route `/`).
Le composant doit être un Server Component React avec tout le contenu et le design intégrés.
Utilise exclusivement Tailwind CSS pour le styling. Pas de fichiers CSS séparés.
La page doit être **responsive** (mobile-first).
Utilise la police **Inter** (déjà disponible dans le projet via Tailwind).

## Palette de couleurs

- Fond hero + sections sombres : `#0F172A` (bleu nuit)
- Fond sections claires : `#FAFAFA`
- Accent principal (CTA, liens) : `#3B82F6` (bleu)
- Accent secondaire (highlights) : `#F59E0B` (ambre/doré)
- Texte sur fond clair : `#1E293B`
- Texte secondaire : `#64748B`
- Texte sur fond sombre : `#F1F5F9`
- Bordures cards : `#E2E8F0`

## Typographie

- Hero titre : 48-56px bold desktop, 32-36px mobile
- Titres de section : 32-36px semibold
- Sous-titres : 20-24px
- Corps : 16-18px, line-height 1.7
- Badges/petits textes : 14px

## Espacements

- Sections : 80-120px padding vertical
- Largeur max contenu : 1200px centré (max-w-7xl)
- Gap entre cards : 24-32px

## Structure de la page — 6 sections

### SECTION 1 — HERO (fond #0F172A, min-height 80vh)

Layout : texte à gauche, image à droite sur desktop. Empilé sur mobile.

Image hero : utilise le fichier `/media/hero-aibizshift.png` (s'il existe dans les médias Payload) ou un placeholder avec un fond bleu nuit. L'image montre un réseau neuronal bleu avec des icônes dorées d'entreprises.

Titre H1 :
"Transformez votre entreprise avec l'IA — sans jargon, sans complexité"

Sous-titre (text-lg, text-slate-300) :
"Consultant IA senior et développeur, j'aide les PME et artisans à automatiser leurs processus, gagner du temps et générer plus de revenus grâce à l'intelligence artificielle."

2 boutons CTA côte à côte :
- CTA principal (fond bleu #3B82F6, texte blanc, rounded-lg, px-8 py-4, font-semibold) : "Réserver mon audit gratuit" → lien vers #audit
- CTA secondaire (border slate-400, texte slate-200, hover bg-white/10) : "Découvrir nos services" → lien vers #services

Bandeau de chiffres clés en dessous des CTA (flex horizontal desktop, grid 2x2 mobile) :
- "35 ans" + "d'expertise IT"
- "n8n Hackathon" + "2026"
- "40+" + "workflows IA déployés"  
- "100%" + "infrastructure souveraine RGPD"

Chaque chiffre en text-2xl font-bold text-amber-400, le label en text-sm text-slate-400.

---

### SECTION 2 — PROBLÈME / SOLUTION (fond #FAFAFA, padding 80-100px vertical)

Titre de section centré : "Vos concurrents adoptent l'IA. Et vous ?"
(text-3xl font-semibold text-slate-800)

2 paragraphes max-w-3xl mx-auto text-center text-slate-600 text-lg leading-relaxed :

Paragraphe 1 : "Pendant que vous passez des heures sur des tâches répétitives — relances clients, devis, reporting, réponses emails — vos concurrents automatisent. Le problème n'est pas le manque de volonté. C'est le manque de temps, de compétences techniques, et de confiance dans des solutions opaques hébergées aux États-Unis."

Paragraphe 2 : "C'est exactement là que j'interviens : je traduis vos besoins métier en solutions IA concrètes, déployées sur une infrastructure souveraine, avec un accompagnement humain de A à Z."

---

### SECTION 3 — SERVICES (fond blanc, padding 80-100px vertical) id="services"

Titre de section centré : "Ce que je peux faire pour vous"

Grille de 4 cards (grid md:grid-cols-2 gap-8, max-w-5xl mx-auto).
Chaque card : fond blanc, border 1px #E2E8F0, rounded-xl, p-8, hover:shadow-lg hover:-translate-y-1 transition.

Card 1 — icône 🤖 ou svg engrenage
- Titre card (text-xl font-semibold text-slate-800) : "Consulting IA & Automatisation"
- Description (text-slate-600) : "Audit de vos processus, identification des gains, et mise en place de workflows intelligents qui vous font gagner 10 à 20 heures par semaine."
- Badge en bas (text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full) : "Idéal pour : PME qui veulent automatiser sans recruter"

Card 2 — icône 🌐 ou svg globe
- Titre : "Création de sites web IA"
- Description : "Sites vitrines premium propulsés par l'IA : design engageant, SEO optimisé, hébergement souverain. Chaque projet démarre par un audit marketing automatisé de votre présence en ligne."
- Badge : "Idéal pour : Artisans, commerces et professions libérales"

Card 3 — icône 🎓 ou svg graduation cap
- Titre : "Formation IA & Automatisation"
- Description : "4 modules progressifs pour tous les profils : de la découverte de l'IA au vibecoding. En direct ou via des organismes de formation certifiés Qualiopi."
- Badge : "Idéal pour : Dirigeants, salariés, indépendants, reconversions"

Card 4 — icône 🚀 ou svg rocket
- Titre : "Développement SaaS sur mesure"
- Description : "Conception et développement d'applications web complètes en mode vibecoding. Vous spécifiez, l'IA implémente sous ma supervision experte."
- Badge : "Idéal pour : Startups, PME innovantes, porteurs de projet"

Bouton centré sous la grille : "Voir tous nos services →" (text-blue-500 hover:text-blue-700 font-semibold)

---

### SECTION 4 — PREUVE SOCIALE / CRÉDIBILITÉ (fond #0F172A, padding 80-100px vertical)

Titre de section centré (text-white) : "Un parcours qui fait la différence"

Grille de 3 cards (grid md:grid-cols-3 gap-8, max-w-5xl mx-auto).
Chaque card : bg-white/5 backdrop-blur, border border-white/10, rounded-xl, p-8.

Card 1 — icône ambre
- Titre (text-lg font-semibold text-white) : "Expertise terrain"
- Description (text-slate-300) : "35 ans chez Orange/France Telecom : architecte SI, consultant CRM, missions internationales. Je parle le langage des entreprises parce que j'en viens."

Card 2 — icône ambre
- Titre : "Builder, pas théoricien"
- Description : "Je ne fais pas que conseiller, je construis. OnPulse, ma plateforme SaaS éducative, est développée avec la même stack que je propose à mes clients."

Card 3 — icône ambre
- Titre : "Souveraineté numérique"
- Description : "Toutes les solutions sont hébergées en France, sur des serveurs européens, conformes RGPD. Pas de cloud américain, pas de dépendance à des plateformes tierces."

---

### SECTION 5 — AUDIT GRATUIT CTA (fond gradient from #1E40AF to #3B82F6, padding 80px vertical) id="audit"

Layout centré, max-w-3xl mx-auto, text-center.

Titre (text-3xl md:text-4xl font-bold text-white) :
"Votre site web perd des clients. Je peux vous le prouver."

Paragraphe (text-lg text-blue-100 mt-6) :
"En 15 minutes, mon outil d'analyse IA génère un rapport complet sur votre présence digitale : SEO, conversion, copywriting, positionnement concurrentiel. Vous recevez la synthèse avec des recommandations actionnables — gratuitement, sans engagement."

Bouton CTA (bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg mt-8 inline-block) :
"Demander mon audit gratuit →"

3 badges sous le bouton (flex gap-6 justify-center mt-6 text-sm text-blue-200) :
"✓ Gratuit" · "✓ Sans engagement" · "✓ Résultats en 24h"

---

### SECTION 6 — FOOTER (fond #0F172A, border-t border-slate-800, padding 48px vertical)

Layout : grid md:grid-cols-3 gap-12 max-w-5xl mx-auto.

Colonne 1 :
- Nom : "AIBizShift" (text-xl font-bold text-white)
- "Guy Music — Consultant IA & Automatisation" (text-slate-400)
- "Portes-lès-Valence (Drôme)" (text-slate-500)
- "Interventions France entière" (text-slate-500)

Colonne 2 — Navigation :
- Titre : "Navigation" (text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4)
- Liens (text-slate-400 hover:text-white) : Services, Formations, Blog, À propos, Contact

Colonne 3 — Contact :
- Titre : "Contact" (même style)
- "contact@aibizshift.eu" (text-slate-400)
- Liens vers LinkedIn et Malt (text-slate-400 hover:text-white)

Barre copyright en bas (border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500) :
"© 2026 AIBizShift — Hébergé en France 🇫🇷 · Mentions légales · Politique de confidentialité"

---

## Consignes techniques importantes

1. N'utilise PAS d'emoji dans le rendu — utilise des icônes SVG inline simples (Lucide icons ou des SVG custom) pour les cards de services et de crédibilité
2. Utilise des icônes SVG simples : par exemple un engrenage pour consulting, un globe pour sites web, un chapeau de diplômé pour formation, une fusée pour SaaS
3. Pour les icônes de la section crédibilité, utilise des icônes en ambre/doré (#F59E0B)
4. Assure-toi que la page est 100% responsive
5. Ajoute des attributs alt sur toutes les images
6. Ajoute les meta tags SEO (title, description) via le metadata export de Next.js
7. Le composant doit être un Server Component (pas de "use client" sauf si nécessaire)
8. N'écrase pas les autres routes — vérifie le routing existant du template Payload avant de modifier

## Meta SEO

```tsx
export const metadata = {
  title: 'AIBizShift — Consultant IA & Automatisation pour PME | Valence, Drôme',
  description: 'Consultant IA senior, j\'aide les PME et artisans à automatiser leurs processus, créer des sites web performants et se former à l\'IA. Audit gratuit. Valence, Drôme — France entière.',
}
```
