---
title: "Admin & API — /admin + /api"
tags: [route, payload/collection]
aliases: ["Admin Payload"]
created: 2026-04-17
updated: 2026-04-17
---

# Admin & API Payload

Routes du groupe `(payload)` — montées par `@payloadcms/next`.

## `/admin/**`

- Fichier : `src/app/(payload)/admin/[[...segments]]/page.tsx`.
- UI React Payload (SSR).
- Authentification : collection [[collections/users]] (`admin.user: 'users'` dans [[payload-config]]).
- Composants custom :
  - `BeforeLogin` — message affiché au-dessus du formulaire de login.
  - `BeforeDashboard` — message "welcome" après login.

## `/api/**` — REST Payload

- Fichier : `src/app/(payload)/api/[...slug]/route.ts`.
- Routes auto-générées pour toutes les collections + globals.

Endpoints notables :

| URL | Méthodes | Rôle |
|-----|----------|------|
| `/api/pages` | GET / POST | Pages (authentifié pour POST) |
| `/api/posts` | GET / POST | Posts |
| `/api/media` | GET / POST | Upload / liste media |
| `/api/media/file/[filename]` | GET | Stream fichier upload |
| `/api/users` | GET / POST | Utilisateurs (create/read authentifié) |
| `/api/users/login` | POST | Login JWT |
| `/api/users/logout` | POST | Logout |
| `/api/contact-submissions` | GET / POST | POST public, GET admin uniquement |
| `/api/globals/header` | GET | Nav header |
| `/api/globals/footer` | GET | Nav footer |
| `/api/payload-jobs/run` | POST | Déclenche les jobs (cron Coolify avec `CRON_SECRET`) |

## `/api/graphql`

- Fichier : `src/app/(payload)/api/graphql/route.ts`.
- Schéma auto-généré à partir des collections/globals.

## `/api/graphql-playground`

- Fichier : `src/app/(payload)/api/graphql-playground/route.ts`.
- Playground GraphiQL (utile pour tests).

## Layout du groupe `(payload)`

- `src/app/(payload)/layout.tsx` — layout minimal qui n'inclut PAS le Header/Footer publics (évite de polluer l'admin).

## Sécurité

- CORS : une seule origine autorisée (`NEXT_PUBLIC_SERVER_URL`). Voir [[payload-config]].
- Auth : cookies JWT signés avec `PAYLOAD_SECRET`.
- Access control par collection : voir [[access-control]].

## Liens connexes

- [[collections/users]] — source de l'auth admin.
- [[payload-config]]
- [[hebergement]] — cron Coolify pour `/api/payload-jobs/run`.
