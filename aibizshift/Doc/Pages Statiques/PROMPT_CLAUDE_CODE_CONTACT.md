# PROMPT CLAUDE CODE — Page Contact AIBizShift

## Contexte

Tu travailles sur le site AIBizShift (Payload CMS 3.81 + Next.js 16 + Tailwind CSS).
Crée la page Contact avec un formulaire fonctionnel qui envoie un email via SMTP OVH.
Le consultant s'appelle **Guy Salvatore**, basé à Portes-lès-Valence (Drôme).

Reprends exactement la même palette de couleurs, typographie, espacements et footer que la homepage.

## Fichiers à créer / modifier

1. `src/app/(frontend)/contact/page.tsx` — la page Contact
2. `src/app/api/contact/route.ts` — l'API route pour envoyer l'email
3. Ajouter les variables SMTP dans `.env` si elles n'existent pas

## Variables d'environnement (.env)

Vérifie que ces variables existent dans `.env`, sinon ajoute-les :

```
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_USER=contact@aibizshift.eu
SMTP_PASS=mot_de_passe_a_renseigner
EMAIL_FROM=contact@aibizshift.eu
EMAIL_TO=contact@aibizshift.eu
```

## Dépendance

Installe nodemailer si pas déjà présent :

```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

---

## Meta SEO

```tsx
export const metadata = {
  title: 'Contact — AIBizShift | Consultant IA & Automatisation | Valence, Drôme',
  description: 'Contactez Guy Salvatore, consultant IA & automatisation pour PME. Audit gratuit, devis personnalisé. Portes-lès-Valence, Drôme — interventions France entière.',
  openGraph: {
    title: 'Contactez AIBizShift — Consultant IA pour PME',
    description: 'Formulaire de contact, prise de RDV, audit gratuit. Réponse sous 24h.',
    url: 'https://aibizshift.eu/contact',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'website',
  },
}
```

---

## Structure de la page Contact

### SECTION 1 — HERO CONTACT

Fond : bg-[#0F172A]. Padding : py-16 md:py-20. Compact (pas de min-height).

Layout centré, max-w-4xl mx-auto, text-center.

Titre H1 (text-4xl md:text-5xl font-bold text-white) :
"Parlons de votre projet"

Sous-titre (text-lg text-slate-300 mt-4 max-w-2xl mx-auto) :
"Une question, un projet, un besoin d'audit ? Remplissez le formulaire ci-dessous ou réservez directement un créneau de 30 minutes."

---

### SECTION 2 — CONTENU PRINCIPAL (fond #FAFAFA, py-16 md:py-24)

Layout : 2 colonnes sur desktop (md:grid-cols-5 gap-12), empilé sur mobile. Max-w-6xl mx-auto px-6.

#### Colonne gauche — Formulaire (md:col-span-3)

Le formulaire est un Client Component (nécessite "use client" pour gérer le state).
Crée un composant séparé `src/components/ContactForm.tsx` en "use client".

Container du formulaire : bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm

Titre formulaire (text-2xl font-semibold text-slate-800 mb-6) :
"Envoyez-moi un message"

**Champs du formulaire :**

Chaque champ a un label (text-sm font-semibold text-slate-700 mb-1.5 block) et un input stylisé.
Style des inputs : w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition

1. **Nom complet** (obligatoire)
   - Label : "Nom complet *"
   - Input type text, placeholder "Votre nom et prénom"
   - name="name"

2. **Email** (obligatoire)
   - Label : "Email *"
   - Input type email, placeholder "votre@email.com"
   - name="email"

3. **Téléphone** (optionnel)
   - Label : "Téléphone"
   - Input type tel, placeholder "06 12 34 56 78"
   - name="phone"

4. **Entreprise** (optionnel)
   - Label : "Entreprise"
   - Input type text, placeholder "Nom de votre entreprise"
   - name="company"

5. **Sujet** (obligatoire)
   - Label : "Sujet *"
   - Select dropdown avec les options :
     - "Choisir un sujet..." (disabled, selected par défaut)
     - "Audit gratuit de mon site web"
     - "Consulting IA & Automatisation"
     - "Création ou refonte de site web"
     - "Formation IA"
     - "Développement SaaS sur mesure"
     - "Conciergerie IA locations"
     - "Autre demande"
   - Style select : même style que les inputs + appearance-none avec une flèche CSS custom
   - name="subject"

6. **Message** (obligatoire)
   - Label : "Message *"
   - Textarea, 5 rows, placeholder "Décrivez votre projet ou votre besoin..."
   - name="message"

7. **Consentement RGPD** (obligatoire)
   - Checkbox + label (text-sm text-slate-600) :
     "J'accepte que mes données soient utilisées pour traiter ma demande. Elles ne seront jamais partagées avec des tiers."
   - name="consent"

**Bouton d'envoi :**
Style : w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all mt-6
Texte par défaut : "Envoyer mon message"
Texte pendant l'envoi : "Envoi en cours..." (disabled, opacity-50, cursor-not-allowed)

**Gestion des états :**
- État initial : formulaire vide
- État loading : bouton désactivé avec "Envoi en cours..."
- État succès : le formulaire disparaît et affiche un message de confirmation dans un container bg-green-50 border border-green-200 rounded-xl p-8 text-center :
  - Icône : coche verte SVG (w-16 h-16 text-green-500 mx-auto)
  - Titre : "Message envoyé !" (text-2xl font-semibold text-green-800 mt-4)
  - Texte : "Merci pour votre message. Je vous réponds sous 24 heures." (text-green-700 mt-2)
  - Bouton : "Envoyer un autre message" (text-blue-500 hover:text-blue-700 font-semibold mt-4) qui reset le formulaire
- État erreur : message d'erreur dans un container bg-red-50 border border-red-200 rounded-lg p-4 mb-4 :
  - Texte : "Une erreur est survenue. Veuillez réessayer ou m'écrire directement à contact@aibizshift.eu" (text-red-700 text-sm)

**Validation côté client :**
- Vérifie que les champs obligatoires sont remplis avant l'envoi
- Vérifie que l'email a un format valide
- Vérifie que le consentement est coché
- Affiche les erreurs sous chaque champ en text-sm text-red-500 mt-1

**Appel API :**
Le formulaire envoie un POST vers `/api/contact` avec le body JSON contenant tous les champs.

---

#### Colonne droite — Informations de contact (md:col-span-2)

Container : espace vertical entre les blocs (space-y-8)

**Bloc 1 — RDV Calendly**
Container : bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm
Icône : calendrier SVG (w-10 h-10 text-blue-500 mb-4)
Titre (text-xl font-semibold text-slate-800) : "Préférez un appel ?"
Description (text-slate-600 mt-2) : "Réservez directement un créneau de 30 minutes. C'est gratuit, sans engagement, et c'est moi qui vous appelle."
CTA (mt-4 inline-block) : "Réserver un créneau →" → href="https://calendly.com/guy-salvatore/30min" target="_blank" rel="noopener noreferrer"
Style CTA : bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all text-sm

**Bloc 2 — Coordonnées**
Container : bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm
Titre (text-xl font-semibold text-slate-800 mb-4) : "Coordonnées"

Liste d'infos (space-y-4), chaque ligne avec icône SVG (w-5 h-5 text-slate-400 flex-shrink-0) + texte :
- Icône email + "contact@aibizshift.eu" (text-slate-600, lien mailto:)
- Icône localisation + "Portes-lès-Valence (Drôme)" (text-slate-600)
- Icône globe + "Interventions France entière" (text-slate-600)

Liens réseaux (mt-6 pt-4 border-t border-slate-100 flex gap-4) :
- "LinkedIn" → https://www.linkedin.com/in/guy-salvatore/ (target="_blank")
- "Malt" → https://www.malt.fr/profile/guysalvatore (target="_blank")
Style liens : text-sm text-blue-500 hover:text-blue-700 font-semibold

**Bloc 3 — Audit gratuit**
Container : bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white
Titre (text-xl font-semibold) : "Audit gratuit"
Description (text-blue-100 text-sm mt-2 leading-relaxed) : "Mon outil IA analyse votre site web et génère un rapport complet : SEO, conversion, copywriting. Gratuit, sans engagement."
CTA (mt-4 inline-block) : "Demander mon audit →" → href="https://calendly.com/guy-salvatore/30min" target="_blank" rel="noopener noreferrer"
Style : bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all text-sm

---

### FOOTER

Identique à la homepage. Réutilise le même composant Footer.

---

## API Route — src/app/api/contact/route.ts

Crée l'API route qui traite les soumissions du formulaire :

```typescript
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message, consent } = body

    // Validation serveur
    if (!name || !email || !subject || !message || !consent) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      )
    }

    // Validation format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    // Configuration SMTP OVH
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email vers Guy
    await transporter.sendMail({
      from: `"AIBizShift Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[AIBizShift] ${subject} — ${name}`,
      html: `
        <h2>Nouveau message depuis aibizshift.eu</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Nom</td>
            <td style="padding: 8px 12px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Téléphone</td><td style="padding: 8px 12px;">${phone}</td></tr>` : ''}
          ${company ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Entreprise</td><td style="padding: 8px 12px;">${company}</td></tr>` : ''}
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Sujet</td>
            <td style="padding: 8px 12px;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #999;">Envoyé depuis le formulaire de contact aibizshift.eu</p>
      `,
    })

    // Email de confirmation au visiteur
    await transporter.sendMail({
      from: `"Guy Salvatore — AIBizShift" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Bien reçu ! — AIBizShift',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E293B;">Merci pour votre message, ${name} !</h2>
          <p style="color: #555; line-height: 1.6;">
            J'ai bien reçu votre demande concernant "<strong>${subject}</strong>".
            Je vous réponds personnellement sous 24 heures (souvent bien plus vite).
          </p>
          <p style="color: #555; line-height: 1.6;">
            En attendant, vous pouvez réserver directement un créneau de 30 minutes
            si vous préférez échanger de vive voix :
          </p>
          <p style="margin: 20px 0;">
            <a href="https://calendly.com/guy-salvatore/30min"
               style="background: #3B82F6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Réserver un appel gratuit
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 13px; color: #999;">
            Guy Salvatore — Consultant IA & Automatisation<br>
            aibizshift.eu · Portes-lès-Valence (Drôme)
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
```

## Consignes techniques

1. Le formulaire est un Client Component ("use client") importé dans la page Server Component
2. L'API route gère la validation côté serveur et l'envoi de 2 emails (vers Guy + confirmation visiteur)
3. Protection basique anti-spam : vérifier que le formulaire n'est pas soumis trop rapidement (ajoute un champ hidden honeypot nommé "website" — si rempli, rejette silencieusement)
4. Tous les liens externes : target="_blank" rel="noopener noreferrer"
5. Le formulaire reset après envoi réussi
6. 100% responsive
7. Les icônes sont des SVG inline, pas d'emoji
8. Sanitize les inputs côté serveur avant de les insérer dans le HTML de l'email (éviter l'injection XSS)
