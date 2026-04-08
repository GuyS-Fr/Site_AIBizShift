# Documentation — Formulaire Contact

## Page source

La page `/contact` est geree par Payload CMS via la route dynamique `[slug]/page.tsx`.
Le formulaire est configure dans Payload Admin → Forms → Contact Form.

## Architecture

1. **Frontend** : `src/blocks/Form/Component.tsx` (React, react-hook-form)
2. **Soumission** : POST vers `/api/form-submissions` (API Payload)
3. **Backend** : plugin `@payloadcms/plugin-form-builder` sauvegarde + envoie email
4. **Email** : `@payloadcms/email-nodemailer` via SMTP

## Champs du formulaire

| Champ | Type | Requis |
|-------|------|--------|
| full-name | text | Oui |
| email | email | Oui |
| phone | number | Non |
| message | textarea | Oui |

## Configuration email

### Transport SMTP

Configure dans `src/payload.config.ts` via `nodemailerAdapter()`.

### Variables d'environnement (Coolify, runtime)

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | Serveur SMTP (ex: smtp.example.com) |
| `SMTP_PORT` | Port (465 pour SSL, 587 pour TLS) |
| `SMTP_USER` | Adresse email d'authentification |
| `SMTP_PASS` | Mot de passe SMTP |
| `SMTP_FROM` | Adresse d'expedition (ex: contact@aibizshift.eu) |

### Configuration du formulaire (dans Payload Admin)

Le formulaire envoie un email a chaque soumission :

- **De** : "AIBizShift" <contact@aibizshift.eu>
- **A** : contact@aibizshift.eu (ou l'adresse configuree dans le champ emailTo)
- **Reply-To** : {{email}} (email du visiteur)
- **Sujet** : "Nouveau message de {{full-name}} via AIBizShift"
- **Corps** : Contenu du message avec les variables du formulaire

### Modifier le destinataire

Pour changer l'adresse de reception :
1. Payload Admin → Forms → Contact Form → Emails
2. Modifier le champ **Email To**
3. Sauvegarder

### Variables de template disponibles

- `{{full-name}}` — Nom complet du visiteur
- `{{email}}` — Email du visiteur
- `{{phone}}` — Telephone du visiteur
- `{{message}}` — Message du visiteur
- `{{*}}` — Tous les champs
- `{{*:table}}` — Tous les champs en tableau HTML

## Seed

Le seed (`src/endpoints/seed/contact-form.ts`) configure le formulaire par defaut.
Il ne s'execute qu'au premier seeding. Pour modifier le formulaire existant,
utiliser Payload Admin.

## Notes techniques

- Le build affiche des warnings `ECONNREFUSED` si SMTP_HOST n'est pas configure — c'est normal
- Le plugin form-builder gere automatiquement la collection `form-submissions`
- Les soumissions sont toujours sauvegardees en base, meme si l'email echoue
