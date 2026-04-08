# PROMPT CLAUDE CODE — Homepage AIBizShift V3 (corrigé)

## Contexte projet

Tu travailles sur un site web professionnel construit avec Payload CMS 3.81 + Next.js 16 + Tailwind CSS.
Le projet est dans le dossier courant. Le site est pour **AIBizShift** (aibizshift.eu), un consultant IA & automatisation basé à Valence (Drôme, France).
Le consultant s'appelle **Guy Salvatore**.

## Ce que tu dois faire

Crée (ou remplace) le composant homepage complet dans `src/app/(frontend)/page.tsx` (ou le fichier équivalent qui sert la route `/`).
Le composant doit être un Server Component React avec tout le contenu et le design intégrés.
Utilise exclusivement Tailwind CSS pour le styling. Pas de fichiers CSS séparés.
La page doit être **responsive** (mobile-first).
Utilise la police **Inter** (déjà disponible dans le projet via Tailwind).

Les images sont dans le dossier `public/images/`. Utilise le composant `<Image>` de Next.js (import depuis `next/image`) avec des attributs `alt` descriptifs en français.

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

---

## NAVIGATION HEADER

Logo texte "AIBizShift" à gauche.
Liens de navigation à droite : Blog (lien vers /posts), Services (lien vers /services), Contact (lien vers /contact), Search (lien vers /search).
PAS de lien "Admin" visible — le panel admin ne doit JAMAIS apparaître dans la navigation publique.
Style : fond transparent sur le hero, texte blanc.

---

## Structure de la page — 6 sections

### SECTION 1 — HERO

Fond : image `hero-background.png` en background cover, avec un overlay sombre semi-transparent (bg-black/40) pour garantir la lisibilité du texte.
Min-height : 80vh. Centré verticalement.

Layout : 2 colonnes sur desktop (md:grid-cols-2), empilé sur mobile.

**Colonne gauche (texte) :**

Titre H1 (text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight) :
"Transformez votre entreprise avec l'IA — sans jargon, sans complexité"

Sous-titre (text-lg md:text-xl text-slate-300 leading-relaxed mt-6) :
"Consultant IA senior et développeur, j'aide les PME et artisans à automatiser leurs processus, gagner du temps et générer plus de revenus grâce à l'intelligence artificielle."

2 boutons CTA côte à côte (flex flex-wrap gap-4 mt-8) :
- CTA principal : "Réserver mon audit gratuit" → href="https://calendly.com/guy-salvatore/30min" target="_blank" rel="noopener noreferrer"
  Style : bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl
- CTA secondaire : "Découvrir nos services" → href="#services"
  Style : border border-slate-400 text-slate-200 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all

**Colonne droite (image) :**
Image `hero-illustration.png` (réseau neuronal + icônes dorées d'entreprises).
Style : rounded-2xl shadow-2xl, hidden sur mobile (hidden md:block).

**Bandeau de chiffres clés** en dessous (mt-12) :
Container : bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10
Layout : grid grid-cols-2 md:grid-cols-4 gap-6 text-center

4 métriques :
- Valeur "35 ans" (text-2xl md:text-3xl font-bold text-amber-400) + label "d'expertise IT" (text-sm text-slate-400 mt-1)
- Valeur "n8n Hackathon" (text-xl font-bold text-amber-400) + label "2026" (text-sm text-slate-400 mt-1)
- Valeur "40+" (text-2xl md:text-3xl font-bold text-amber-400) + label "workflows IA déployés" (text-sm text-slate-400 mt-1)
- Valeur "100%" (text-2xl md:text-3xl font-bold text-amber-400) + label "souverain RGPD" (text-sm text-slate-400 mt-1)

---

### SECTION 2 — PROBLÈME / SOLUTION

Fond : bg-[#FAFAFA]. Padding : py-20 md:py-28.

Layout : 2 colonnes sur desktop (md:grid-cols-2 gap-16 items-center). Max-w-6xl mx-auto.

**Colonne gauche (texte) :**

Titre (text-3xl md:text-4xl font-semibold text-slate-800 leading-tight) :
"Vos concurrents adoptent l'IA. Et vous ?"

Paragraphe 1 (text-lg text-slate-600 leading-relaxed mt-6) :
"Pendant que vous passez des heures sur des tâches répétitives — relances clients, devis, reporting, réponses emails — vos concurrents automatisent. Le problème n'est pas le manque de volonté. C'est le manque de temps, de compétences techniques, et de confiance dans des solutions opaques hébergées aux États-Unis."

Paragraphe 2 (text-lg text-slate-600 leading-relaxed mt-4) :
"C'est exactement là que j'interviens : je traduis vos besoins métier en solutions IA concrètes, déployées sur une infrastructure souveraine, avec un accompagnement humain de A à Z."

**Colonne droite (image) :**
Image `before-after.png` (illustration avant/après automatisation).
Style : rounded-xl shadow-lg w-full

---

### SECTION 3 — SERVICES id="services"

Fond : blanc. Padding : py-20 md:py-28.

Titre centré (text-3xl md:text-4xl font-semibold text-slate-800 text-center) :
"Ce que je peux faire pour vous"

Sous-titre centré (text-lg text-slate-500 text-center mt-4 max-w-2xl mx-auto) :
"Des solutions concrètes, adaptées à votre taille et à vos ambitions"

Grille : grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto.

**Chaque card :**
Style container : bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group

Image en haut de la card : hauteur fixe h-48, object-cover, w-full. Léger zoom au hover (group-hover:scale-105 transition-transform duration-500).

Contenu sous l'image : p-8

Icône SVG inline (w-10 h-10, couleur #3B82F6) au-dessus du titre. PAS d'emoji — utilise des SVG simples :
- Card 1 : engrenage/cog
- Card 2 : globe
- Card 3 : academic cap / graduation
- Card 4 : rocket / fusée

Titre card (text-xl font-semibold text-slate-800 mt-4)
Description card (text-slate-600 mt-3 leading-relaxed)
Badge en bas (inline-block text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mt-4)

**Card 1 :**
- Image : `service-consulting.png`
- Icône : engrenage SVG
- Titre : "Consulting IA & Automatisation"
- Description : "Audit de vos processus, identification des gains, et mise en place de workflows intelligents qui vous font gagner 10 à 20 heures par semaine."
- Badge : "Idéal pour : PME qui veulent automatiser sans recruter"

**Card 2 :**
- Image : `service-website.png`
- Icône : globe SVG
- Titre : "Création de sites web IA"
- Description : "Sites vitrines premium propulsés par l'IA : design engageant, SEO optimisé, hébergement souverain. Chaque projet démarre par un audit marketing automatisé de votre présence en ligne."
- Badge : "Idéal pour : Artisans, commerces et professions libérales"

**Card 3 :**
- Image : `service-formation.png`
- Icône : academic cap SVG
- Titre : "Formation IA & Automatisation"
- Description : "4 modules progressifs pour tous les profils : de la découverte de l'IA au vibecoding. En direct ou via des organismes de formation certifiés Qualiopi."
- Badge : "Idéal pour : Dirigeants, salariés, indépendants, reconversions"

**Card 4 :**
- Image : `service-saas.png`
- Icône : rocket SVG
- Titre : "Développement SaaS sur mesure"
- Description : "Conception et développement d'applications web complètes en mode vibecoding. Vous spécifiez, l'IA implémente sous ma supervision experte."
- Badge : "Idéal pour : Startups, PME innovantes, porteurs de projet"

Lien centré sous la grille (mt-12 text-center) :
"Voir tous nos services →" → href="/services"
(text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors)

---

### SECTION 4 — PREUVE SOCIALE / CRÉDIBILITÉ

Fond : bg-[#0F172A]. Padding : py-20 md:py-28.

Titre centré (text-3xl md:text-4xl font-semibold text-white text-center) :
"Un parcours qui fait la différence"

Sous-titre centré (text-lg text-slate-400 text-center mt-4 max-w-2xl mx-auto) :
"Pas un consultant IA de plus — un professionnel qui construit ce qu'il recommande"

Grille : grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto.

**Chaque card :**
Style : bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300

Icône en haut : cercle w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center, avec icône SVG w-6 h-6 text-amber-400 à l'intérieur.

Titre (text-lg font-semibold text-white mt-5)
Description (text-slate-300 mt-3 leading-relaxed)

**Card 1 :**
- Icône : briefcase/valise SVG
- Titre : "Expertise terrain"
- Description : "35 ans chez Orange/France Telecom : architecte SI, consultant CRM, missions internationales (Éthiopie, Côte d'Ivoire, Suisse). Je parle le langage des entreprises parce que j'en viens."

**Card 2 :**
- Icône : code/terminal SVG
- Titre : "Builder, pas théoricien"
- Description : "Je ne fais pas que conseiller, je construis. OnPulse, ma plateforme SaaS éducative, est développée avec la même stack que je propose à mes clients : Next.js, TypeScript, infrastructure souveraine."

**Card 3 :**
- Icône : shield/bouclier SVG
- Titre : "Souveraineté numérique"
- Description : "Toutes les solutions sont hébergées en France, sur des serveurs européens, conformes RGPD. Pas de cloud américain, pas de dépendance à des plateformes tierces."

---

### SECTION 5 — AUDIT GRATUIT CTA id="audit"

Fond : gradient bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]. Padding : py-20 md:py-28.

Layout : 2 colonnes sur desktop (md:grid-cols-2 gap-12 items-center). Max-w-6xl mx-auto.

**Colonne gauche (texte) :**

Titre (text-3xl md:text-4xl font-bold text-white leading-tight) :
"Votre site web perd des clients. Je peux vous le prouver."

Paragraphe (text-lg text-blue-100 leading-relaxed mt-6) :
"En 15 minutes, mon outil d'analyse IA génère un rapport complet de 236 pages sur votre présence digitale : SEO, conversion, copywriting, positionnement concurrentiel. Vous recevez la synthèse avec des recommandations actionnables — gratuitement, sans engagement."

Bouton CTA (inline-block mt-8) :
"Demander mon audit gratuit →" → href="https://calendly.com/guy-salvatore/30min" target="_blank" rel="noopener noreferrer"
Style : bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl

3 badges sous le bouton (flex flex-wrap gap-6 mt-6 text-sm text-blue-200) :
"✓ Gratuit" · "✓ Sans engagement" · "✓ Résultats en 24h"

**Colonne droite (image) :**
Image `audit-report-mockup.png` (mockup du rapport d'audit 236 pages).
Style : rounded-xl shadow-2xl w-full max-w-md mx-auto, légère rotation (-rotate-2) pour un effet dynamique.

---

### SECTION 6 — FOOTER

Fond : bg-[#0F172A]. Border-top : border-t border-slate-800. Padding : py-16.

PAS de lien vers /admin — le panel admin ne doit JAMAIS apparaître dans le footer public.

Layout : grid md:grid-cols-4 gap-12 max-w-6xl mx-auto px-6. Sur mobile : grid-cols-1.

**Colonne 1 (marque) :**
- "AIBizShift" (text-2xl font-bold text-white)
- "Guy Salvatore" (text-slate-400 mt-2)
- "Consultant IA & Automatisation" (text-slate-400)
- "Portes-lès-Valence (Drôme)" (text-slate-500 mt-4 text-sm)
- "Interventions France entière" (text-slate-500 text-sm)

**Colonne 2 (navigation) :**
- Titre : "Navigation" (text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4)
- Liens (text-slate-400 hover:text-white transition-colors, espacement mt-2 entre chaque) :
  - Services → /services
  - Formations → /formations {/* TODO: créer la page */}
  - Portfolio → /portfolio {/* TODO: créer la page */}
  - Blog → /posts
  - À propos → /a-propos {/* TODO: créer la page */}

**Colonne 3 (services) :**
- Titre : "Services" (même style)
- Liens (tous vers /services pour l'instant) :
  - Consulting IA
  - Sites web
  - Formation
  - SaaS sur mesure
  - Conciergerie IA

**Colonne 4 (contact) :**
- Titre : "Contact" (même style)
- "contact@aibizshift.eu" → mailto:contact@aibizshift.eu (text-slate-400 hover:text-white)
- "LinkedIn →" → https://www.linkedin.com/in/guy-salvatore/ (target="_blank" rel="noopener noreferrer", text-slate-400 hover:text-white mt-2)
- "Malt →" → https://www.malt.fr/profile/guysalvatore (target="_blank" rel="noopener noreferrer", text-slate-400 hover:text-white mt-2)
- Bouton : "Audit gratuit →" → https://calendly.com/guy-salvatore/30min (target="_blank" rel="noopener noreferrer", mt-4 inline-block text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition)

**Barre copyright en bas :**
Border-top : border-t border-slate-800 mt-12 pt-8.
Flex justify-between items-center (empilé centré sur mobile).

Gauche : "© 2026 AIBizShift — Hébergé en France" (text-sm text-slate-500)
Droite : liens "Mentions légales" · "Politique de confidentialité" (text-sm text-slate-500 hover:text-slate-300)
{/* TODO: créer les pages mentions légales et politique de confidentialité */}

---

## Consignes techniques importantes

1. Utilise le composant `<Image>` de Next.js (import depuis `next/image`) pour toutes les images. Spécifie width, height, et un alt descriptif en français.
2. Utilise des icônes SVG inline simples pour les cards — PAS d'emoji. Crée les SVG directement dans le JSX.
3. Pour l'image hero en fond, utilise un `<div>` avec position relative, l'image en position absolute avec fill et object-cover, et un overlay div en absolute avec bg-black/40.
4. Ajoute `scroll-smooth` sur le container principal ou le html pour le smooth scrolling des ancres (#services, #audit).
5. La page doit être 100% responsive : mobile (375px), tablette (768px), desktop (1280px).
6. Le composant doit être un Server Component (pas de "use client") sauf si tu as besoin d'interactivité.
7. Vérifie le routing existant du template Payload avant de modifier — ne casse pas les routes /admin, /api, etc.
8. Tous les liens externes (Calendly, LinkedIn, Malt) doivent avoir target="_blank" rel="noopener noreferrer".
9. Le lien vers /admin ne doit JAMAIS apparaître dans la navigation publique ni dans le footer.
10. Si une image n'existe pas encore dans public/images/, utilise un placeholder avec un div coloré bg-slate-700 avec "Image à venir" centré.

## Meta SEO

```tsx
export const metadata = {
  title: 'AIBizShift — Consultant IA & Automatisation pour PME | Valence, Drôme',
  description: 'Guy Salvatore, consultant IA senior. J\'aide les PME et artisans à automatiser leurs processus, créer des sites web performants et se former à l\'IA. Audit gratuit 236 pages. Valence, Drôme — France entière.',
  openGraph: {
    title: 'AIBizShift — Consultant IA & Automatisation pour PME',
    description: 'Automatisez vos processus, gagnez du temps, générez plus de revenus grâce à l\'IA. Audit gratuit 236 pages.',
    url: 'https://aibizshift.eu',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'website',
  },
}
```

## Images disponibles dans public/images/

1. `hero-background.png` (1920x1080) — fond du hero
2. `hero-illustration.png` (800x800) — illustration réseau neuronal + entreprises, colonne droite hero
3. `before-after.png` (1200x600) — illustration avant/après automatisation, section 2
4. `service-consulting.png` (600x400) — image card consulting, section 3
5. `service-website.png` (600x400) — image card sites web, section 3
6. `service-formation.png` (600x400) — image card formation, section 3
7. `service-saas.png` (600x400) — image card SaaS, section 3
8. `audit-report-mockup.png` (800x600) — mockup rapport audit, section 5

Si une image n'existe pas, affiche un placeholder div gris avec "Image à venir".

## Changements par rapport à la V2 (IMPORTANT)

- Le nom est "Guy Salvatore" (PAS "Guy Music") — partout dans la page
- Lien LinkedIn : https://www.linkedin.com/in/guy-salvatore/
- Lien Malt : https://www.malt.fr/profile/guysalvatore
- Le lien "Voir tous nos services →" pointe vers /services (PAS #services)
- Le lien /admin ne doit JAMAIS apparaître dans la page publique
- "Posts" est renommé "Blog" dans la navigation
- Tous les liens externes ont target="_blank" rel="noopener noreferrer"
- Les liens TODO sont commentés pour les pages pas encore créées
