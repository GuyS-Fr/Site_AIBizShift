# Documentation — Politique de confidentialite

## Fichier source

`src/app/(frontend)/confidentialite/page.tsx`

## Route

`/confidentialite` — Page statique (Server Component)

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` | Titre H1 centre "Politique de confidentialite" |
| 2 | Contenu | `#FAFAFA` | Prose structuree RGPD, max-w-3xl |

## Rubriques

1. Introduction — Responsable du traitement, references RGPD
2. Donnees collectees — Via formulaire contact uniquement (nom, email, tel, entreprise, message). Aucun cookie de suivi, pas de Google Analytics
3. Finalite du traitement — Reponse contact, confirmation, recontact projet
4. Base legale — Consentement explicite (article 6.1.a RGPD)
5. Duree de conservation — 24 mois apres dernier echange
6. Hebergement et securite — Scaleway France, HTTPS, SMTP Brevo
7. Vos droits — Acces, rectification, effacement, portabilite, opposition. Delai 30 jours. Reclamation CNIL
8. Cookies — Aucun cookie de suivi. Seuls cookies techniques (session, admin)
9. Modifications — Date de derniere modification en bas de page

## Liens externes

- **CNIL :** https://www.cnil.fr (target="_blank")
- **Email :** mailto:contact@aibizshift.eu

## SEO

```
title: Politique de confidentialite — AIBizShift
description: Politique de confidentialite et protection des donnees personnelles du site aibizshift.eu — RGPD.
```

## Notes techniques

- Server Component (pas de "use client")
- Pas d'images — texte structure uniquement
- Mention SMTP Brevo (pas OVH Zimbra) dans la section hebergement
- Derniere mise a jour affichee : avril 2026
