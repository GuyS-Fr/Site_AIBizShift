# Documentation — Page Contact

## Fichiers source

- `src/app/(frontend)/contact/page.tsx` — Page (Server Component)
- `src/components/ContactForm.tsx` — Formulaire (Client Component "use client")
- `src/app/api/contact/route.ts` — API route envoi email + persistance DB
- `src/utilities/rateLimit.ts` — Rate limiter en memoire
- `src/collections/ContactSubmissions/index.ts` — Collection Payload (persistance + consent)
- `src/jobs/purgeOldSubmissions.ts` — Task Payload de purge auto 24 mois

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

### Anti-spam (defense en profondeur)

1. **Honeypot** : champ cache `website` — si rempli, l'API retourne succes sans rien faire
2. **Rate limit** : 5 requetes max/IP/heure (cf. section API)

## API Route (`/api/contact`)

### Methode

POST avec body JSON contenant tous les champs du formulaire.

### Pipeline de traitement

1. **Rate limit** : verification 5 req/IP/h via `rateLimit()`. Si depasse → 429 + `Retry-After`
2. **Honeypot** : verification champ `website`
3. **Validation serveur** (champs requis, format email)
4. **Sanitization HTML** (escapeHtml) pour prevenir XSS dans les emails
5. **Persistance DB** (collection `contact-submissions`) avec consentement + horodatage + IP pseudonymisee SHA-256
6. **Envoi de 2 emails** via nodemailer :
   - **Email notification** vers SMTP_FROM : tableau HTML avec toutes les donnees, reply-to visiteur
   - **Email confirmation** au visiteur : remerciement + lien Calendly + mention transfert US

### Headers de reponse

| Header | Valeur |
|--------|--------|
| `X-RateLimit-Limit` | 5 |
| `X-RateLimit-Remaining` | nombre restant |
| `X-RateLimit-Reset` | timestamp Unix de reset |
| `Retry-After` (si 429) | secondes avant retry |

### Variables d'environnement (Coolify, runtime)

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | Serveur SMTP (smtp-relay.brevo.com) |
| `SMTP_PORT` | Port (587 STARTTLS recommande) |
| `SMTP_SECURE` | `true` (SSL, port 465) ou `false` (STARTTLS, port 587). Si absent, auto-detecte selon le port |
| `SMTP_USER` | Adresse email d'authentification |
| `SMTP_PASS` | Mot de passe SMTP |
| `SMTP_FROM` | Adresse d'expedition et de reception |
| `PAYLOAD_SECRET` | Utilise comme sel pour le hash IP (pseudonymisation) |

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

> **Securite** : `tls.rejectUnauthorized: false` a ete supprime le 2026-04-17 (vestige du contournement OVH Zimbra qui n'a plus lieu d'etre — Brevo a un certificat valide). Audit M-C03 resolu.

## Collection Payload `contact-submissions`

> Schema DB trace par migration : `src/migrations/20260417_124957_add_contact_submissions.ts`. Auto-appliquee au demarrage du conteneur en prod (voir section "Migrations Payload" dans `CLAUDE.md`).

| Champ | Type | Notes |
|-------|------|-------|
| `name` | text | Requis |
| `email` | email | Requis, indexe |
| `phone` | text | Optionnel |
| `company` | text | Optionnel |
| `subject` | text | Requis |
| `message` | textarea | Requis |
| `consent.given` | checkbox | Requis (preuve consentement) |
| `consent.givenAt` | date+heure | Horodatage du consentement |
| `consent.ipHash` | text readOnly | SHA-256(`PAYLOAD_SECRET` + IP) tronque 16 chars — pseudonymisation Art. 32 RGPD |
| `createdAt` / `updatedAt` | timestamps | Automatiques |

### Acces (ACL Payload)

| Operation | Regle |
|-----------|-------|
| `create` | Ouvert (API publique uniquement) |
| `read` / `update` / `delete` | Authentifie (admin Payload uniquement) |
| `admin` | Authentifie |

### Visibilite admin

Visible dans `/admin` sous "Demandes de contact". Colonnes affichees : Nom, Email, Sujet, Date.

## Job de purge automatique

`src/jobs/purgeOldSubmissions.ts` — Task Payload `purgeOldSubmissions`

- **Action** : supprime les soumissions `createdAt < now - 24 mois` (max 1000 par run)
- **Retries** : 2
- **Output** : `{ deleted: number, cutoff: ISO string }`

### Declenchement

A configurer dans **Coolify** comme cron quotidien :

```bash
curl -X POST https://aibizshift.eu/api/payload-jobs/run \
  -H "Authorization: Bearer $CRON_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"queue": "default"}'
```

> Le `CRON_SECRET` est deja configure dans les variables Coolify.

## Colonne droite — Informations

3 blocs :

| Bloc | Contenu |
|------|---------|
| Calendly | Titre, description, CTA "Reserver un creneau" |
| Coordonnees | Email, localisation, interventions, liens LinkedIn/Malt |
| Audit gratuit | Description audit complet, CTA gradient bleu/ambre |

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
- L'API route est independante de Payload pour l'envoi d'email — elle utilise nodemailer directement
- L'API route utilise `getPayload({ config })` pour la persistance en DB
- Le transport SMTP Payload (`@payloadcms/email-nodemailer` dans payload.config.ts) est separe
- Les erreurs SMTP/DB sont loggees sans PII (`name [code]` uniquement) — Art. 32 RGPD

## Conformite RGPD / nLPD

L'option "Audit gratuit de mon site web" du selecteur de sujet declenche un service
qui utilise des outils IA (LLM) cote backoffice. Voir la politique d'usage IA :
[`Doc/COMPLIANCE/AI_USE_POLICY.md`](../../Doc/COMPLIANCE/AI_USE_POLICY.md) — section 3.3
"Services vendus aux clients".

Les demandes recues via ce formulaire sont tracees dans la collection Payload
`contact-submissions` (voir section "Collection Payload" ci-dessus). Pour repondre
aux demandes d'exercice de droits RGPD/nLPD, utiliser les templates dans
[`Doc/COMPLIANCE/templates/data-subject-request-response.md`](../../Doc/COMPLIANCE/templates/data-subject-request-response.md).

## Historique des modifications

- 2026-04-17 : Hardening compliance post-audit
  - Rate limit 5/h/IP ajoute (M-01)
  - Persistance DB consent + IP pseudonymisee (M-06)
  - Job de purge auto 24 mois (M-02)
  - Suppression `tls.rejectUnauthorized: false` (C-03)
  - Logs `console.error` masques (m-03)
  - Note transfert US Calendly dans email confirmation (m-07)
  - Templates DSR + AI_USE_POLICY references depuis cette doc
  - Schema `contact-submissions` trace via migration Payload (`src/migrations/`) avec auto-apply prod via `prodMigrations`
