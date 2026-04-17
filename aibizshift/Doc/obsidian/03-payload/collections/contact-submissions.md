---
title: "Collection contact-submissions"
tags: [payload/collection, payload/access]
aliases: ["ContactSubmissions", "Demandes de contact"]
created: 2026-04-17
updated: 2026-04-17
---

# Collection `contact-submissions`

Source : `src/collections/ContactSubmissions/index.ts`.

Collection de journalisation RGPD : toute soumission du formulaire `/contact` y est persistée avec la preuve de consentement. Purge automatique à 24 mois.

## Identité

| Propriété | Valeur |
|-----------|--------|
| Slug | `contact-submissions` |
| Labels | singular `Demande de contact`, plural `Demandes de contact` |
| `useAsTitle` | `name` |
| Colonnes admin par défaut | `name`, `email`, `subject`, `createdAt` |
| Description admin | "Demandes envoyees via le formulaire /contact. Conservation 24 mois (purge automatique)." |
| `timestamps` | `true` |

## Access control

| Action | Helper |
|--------|--------|
| admin | `authenticated` |
| create | **`() => true`** |
| read | `authenticated` |
| update | `authenticated` |
| delete | `authenticated` |

`create` publique est **indispensable** : l'API `/api/contact` doit pouvoir insérer un document sans session admin. La protection se fait dans [[contact|`src/app/api/contact/route.ts`]] (rate limit, honeypot, validation).

## Champs

| Chemin | Type | Requis | Détail |
|--------|------|--------|--------|
| `name` | text | ✅ | — |
| `email` | email | ✅ | `index: true` (recherche admin) |
| `phone` | text | — | — |
| `company` | text | — | — |
| `subject` | text | ✅ | — |
| `message` | textarea | ✅ | — |
| `consent.given` | checkbox | ✅ | Preuve RGPD Art. 7(1) — l'API refuse si `false` |
| `consent.givenAt` | date (dayAndTime) | ✅ | Horodatage serveur au moment du POST |
| `consent.ipHash` | text readOnly | — | SHA-256(`PAYLOAD_SECRET` + IP) tronqué 16 chars — pseudonymisation Art. 32 |

## Hooks

Aucun. Les invariants sont garantis par l'API route.

## Rétention — purge automatique

Task Payload `purgeOldSubmissions` dans `src/jobs/purgeOldSubmissions.ts` :

```typescript
const cutoff = new Date()
cutoff.setMonth(cutoff.getMonth() - 24)

const { docs } = await req.payload.find({
  collection: 'contact-submissions',
  where: { createdAt: { less_than: cutoff.toISOString() } },
  limit: 1000,
  pagination: false,
  req,
})

for (const doc of docs) {
  await req.payload.delete({ collection: 'contact-submissions', id: doc.id, req })
}
```

Déclenchée par un cron Coolify quotidien : `POST /api/payload-jobs/run` avec `Authorization: Bearer $CRON_SECRET` et body `{"queue":"default"}`. Voir [[hebergement]].

## Exemple de document

```json
{
  "id": 7,
  "name": "Alice Dupont",
  "email": "alice@example.com",
  "phone": "+33 6 12 34 56 78",
  "company": "ACME SAS",
  "subject": "Audit de processus",
  "message": "Bonjour, je souhaiterais discuter de ...",
  "consent": {
    "given": true,
    "givenAt": "2026-04-17T14:35:02.000Z",
    "ipHash": "a1b2c3d4e5f60708"
  },
  "createdAt": "2026-04-17T14:35:02.000Z",
  "updatedAt": "2026-04-17T14:35:02.000Z"
}
```

## Conformité

Documenté dans `Doc/COMPLIANCE/ROPA.md` (registre RGPD Art. 30). Voir aussi l'audit `COMPLIANCE_REPORT.md` à la racine du repo.

## Liens connexes

- [[contact]] — page et API.
- [[payload-config]] — déclaration de la task `purgeOldSubmissions`.
- [[access-control]]
- [[hebergement]] — configuration du cron.
