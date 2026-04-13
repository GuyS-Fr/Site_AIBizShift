# Documentation — Page Contact

## Fichiers source

- `src/app/(frontend)/contact/page.tsx` — Page (Server Component)
- `src/components/ContactForm.tsx` — Formulaire (Client Component "use client")
- `src/app/api/contact/route.ts` — API route envoi email

## Route

`/contact` — Page statique. Priorite sur la route dynamique `[slug]` de Payload.

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` | Titre "Parlons de votre projet", sous-titre |
| 2 | Contenu | `#FAFAFA` | 2 colonnes : formulaire (3/5) + infos (2/5) |

## Formulaire (colonne gauche)

### Champs

| Champ | Type | Requis | name |
|-------|------|--------|------|
| Nom complet | text | Oui | name |
| Email | email | Oui | email |
| Telephone | tel | Non | phone |
| Entreprise | text | Non | company |
| Sujet | select (7 options) | Oui | subject |
| Message | textarea (5 rows) | Oui | message |
| Consentement RGPD | checkbox | Oui | consent |
| Honeypot (cache) | text hidden | - | website |

### Options du sujet

1. Audit gratuit de mon site web
2. Consulting IA & Automatisation
3. Creation ou refonte de site web
4. Formation IA
5. Developpement SaaS sur mesure
6. Conciergerie IA locations
7. Autre demande

### Etats du formulaire

- **idle** : formulaire vide
- **loading** : bouton desactive "Envoi en cours..."
- **success** : message de confirmation vert, bouton reset
- **error** : message d'erreur rouge

### Validation client

- Champs obligatoires (name, email, subject, message, consent)
- Format email regex
- Consentement RGPD coche
- Erreurs affichees sous chaque champ

### Anti-spam

Champ honeypot cache "website" — si rempli, l'API retourne succes sans envoyer d'email.

## API Route (`/api/contact`)

### Methode

POST avec body JSON contenant tous les champs du formulaire.

### Traitement

1. Verification honeypot
2. Validation serveur (champs requis, format email)
3. Sanitization HTML (escapeHtml) pour prevenir XSS dans les emails
4. Envoi de 2 emails via nodemailer :
   - **Email notification** vers SMTP_FROM : tableau HTML avec toutes les donnees, reply-to visiteur
   - **Email confirmation** au visiteur : message de remerciement + lien Calendly

### Variables d'environnement (Coolify, runtime)

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | Serveur SMTP |
| `SMTP_PORT` | Port (587 recommande pour TLS, 465 pour SSL) |
| `SMTP_SECURE` | `true` (SSL, port 465) ou `false` (STARTTLS, port 587). Si absent, auto-detecte selon le port |
| `SMTP_USER` | Adresse email d'authentification |
| `SMTP_PASS` | Mot de passe SMTP |
| `SMTP_FROM` | Adresse d'expedition et de reception |

### Configuration SMTP — Brevo (recommande)

OVH Zimbra SMTP ne fonctionne PAS avec nodemailer (connexions fermees, TLS incompatible).
Utiliser **Brevo** (ex-Sendinblue) : gratuit jusqu'a 300 emails/jour, fiable.

| Variable | Valeur |
|----------|--------|
| `SMTP_HOST` | `smtp-relay.brevo.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | (login Brevo) |
| `SMTP_PASS` | (cle SMTP Brevo) |
| `SMTP_FROM` | `contact@aibizshift.eu` |

Important : verifier le domaine `aibizshift.eu` dans Brevo (Settings → Senders & IPs → Domains)
pour eviter que les emails partent en spam.

Le webmail OVH Zimbra reste sur `https://zimbra1.mail.ovh.net/` pour la reception.

## Colonne droite — Informations

3 blocs :

| Bloc | Contenu |
|------|---------|
| Calendly | Titre, description, CTA "Reserver un creneau" |
| Coordonnees | Email, localisation, interventions, liens LinkedIn/Malt |
| Audit gratuit | Description audit 236 pages, CTA gradient bleu/ambre |

## Liens externes

- **Calendly** : `https://calendly.com/guy-salvatore/30min` (target="_blank")
- **LinkedIn** : `https://www.linkedin.com/in/guy-salvatore/` (target="_blank")
- **Malt** : `https://www.malt.fr/profile/guysalvatore` (target="_blank")
- **Email** : `mailto:contact@aibizshift.eu`

## SEO

```
title: Contact — AIBizShift | Consultant IA & Automatisation | Valence, Drome
description: Contactez Guy Salvatore, consultant IA & automatisation pour PME...
og:url: https://aibizshift.eu/contact
og:locale: fr_FR
```

## Notes techniques

- Le formulaire est un Client Component importe dans la page Server Component
- L'ancienne page contact CMS (via `[slug]`) est remplacee par cette page statique
- L'API route est independante de Payload — elle utilise nodemailer directement
- Le transport SMTP Payload (`@payloadcms/email-nodemailer` dans payload.config.ts) est separe
