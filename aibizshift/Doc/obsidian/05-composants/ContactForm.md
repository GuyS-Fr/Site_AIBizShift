---
title: "ContactForm"
tags: [composant]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# ContactForm

Source : `src/components/ContactForm.tsx` (~252 lignes). Composant client (`'use client'`). Utilisé par [[contact]].

## Props

Aucune — composant autonome.

## État interne

```typescript
type FormState = 'idle' | 'loading' | 'success' | 'error'

const [formState, setFormState] = useState<FormState>('idle')
const [errorMessage, setErrorMessage] = useState('')
const [errors, setErrors] = useState<Record<string, string>>({})
```

## Champs du formulaire

| name | type | requis | Note |
|------|------|--------|------|
| `name` | text | ✅ | — |
| `email` | email | ✅ | regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| `phone` | tel | — | — |
| `company` | text | — | — |
| `subject` | select | ✅ | 7 valeurs : Audit gratuit, Consulting, Site web, Formation, SaaS, Conciergerie, Autre |
| `message` | textarea | ✅ | — |
| `consent` | checkbox | ✅ | Consentement RGPD |
| `website` | text (hidden) | — | **Honeypot** — doit rester vide |

## Soumission

- `POST /api/contact` avec body JSON.
- Voir [[contact]] pour le pipeline côté serveur (rate limit, persistance, mails Brevo).
- État `loading` → bouton désactivé.
- État `success` → remplace le formulaire par un message de remerciement + CTA Calendly.
- État `error` → bandeau rouge avec `errorMessage`.

## Sujets prédéfinis (`SUBJECTS`)

```typescript
const SUBJECTS = [
  'Audit gratuit de mon site web',
  'Consulting IA & Automatisation',
  'Création ou refonte de site web',
  'Formation IA',
  'Développement SaaS sur mesure',
  'Conciergerie IA locations',
  'Autre demande',
]
```

## Styling

- `inputClass` : `w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`.
- Bouton submit `bg-blue-500` → `bg-blue-600` au hover.

## Liens connexes

- [[contact]] — page d'accueil du composant.
- [[collections/contact-submissions]] — où les données atterrissent.
