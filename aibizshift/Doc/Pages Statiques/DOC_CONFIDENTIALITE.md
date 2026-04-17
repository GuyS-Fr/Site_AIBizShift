# Documentation — Politique de confidentialite

## Fichier source

`src/app/(frontend)/confidentialite/page.tsx`

## Route

`/confidentialite` — Page statique (Server Component)

## Cadre reglementaire couvert

- **RGPD UE** (Reglement 2016/679) — pour visiteurs UE
- **nLPD/FADP Suisse** (SR 235.1, en vigueur depuis 01.09.2023) — pour visiteurs suisses
- **Directive ePrivacy** Art. 5(3) — cookies (exempte car cookies techniques uniquement)

## Sections

| # | Section | Fond | Contenu principal |
|---|---------|------|-------------------|
| 1 | Hero | `#0F172A` | Titre H1 + sous-titre "Conforme RGPD + nLPD" |
| 2 | Contenu | `#FAFAFA` | Prose structuree, max-w-3xl, 12 sections |

## Rubriques (12 sections)

1. **Introduction** — Responsable du traitement, references RGPD + nLPD
2. **Donnees collectees** — Via formulaire contact uniquement (nom, email, tel, entreprise, sujet, message, consentement, IP pseudonymisee). Aucun cookie de suivi
3. **Finalite du traitement** — Reponse contact, confirmation, recontact projet. Pas de profilage ni decision automatisee
4. **Base legale** — RGPD : Art. 6.1.a (consentement) | nLPD : Art. 31 (consentement comme motif justificatif)
5. **Duree de conservation** — 24 mois (purge auto via job Payload `purgeOldSubmissions`)
6. **Hebergement, sous-traitants et transferts internationaux** — Tableau de 3 sous-traitants (OVH, Brevo, Calendly) + section transferts US (EU-US DPF + Swiss-US DPF Calendly)
7. **Vos droits** — Acces, rectification, effacement, portabilite, opposition, retrait consentement (avec ref Art. RGPD + nLPD pour chaque)
8. **Reclamations aupres des autorites** — CNIL (FR/UE) + PFPDT (CH)
9. **Cookies** — Tableau detaille (theme-preference localStorage + payload-token cookie admin)
10. **Mineurs** — Site non destine aux <16 ans (Art. 8 RGPD)
11. **Securite** — Mesures techniques et organisationnelles (Art. 32 RGPD + Art. 8 nLPD)
12. **Modifications** — Date de derniere modification

## Sous-traitants documentes (section 6)

| Sous-traitant | Role | Localisation | Garanties |
|---------------|------|--------------|-----------|
| OVH SAS | Hebergement site + DB | 🇫🇷 France (Roubaix) | RGPD natif UE |
| Brevo (Sendinblue SAS) | SMTP transactionnel | 🇫🇷 France (Paris) | RGPD natif UE |
| Calendly LLC | Prise de RDV (lien externe) | 🇺🇸 USA | EU-US DPF + Swiss-US DPF |

## Cookies documentes (section 9)

| Nom | Type | Finalite | Duree |
|-----|------|----------|-------|
| `theme-preference` | localStorage | Preference theme clair/sombre | Persistant |
| `payload-token` | Cookie HTTP | Auth admin (/admin uniquement) | Session |

> **Aucun cookie de suivi, publicitaire ou analytique** — Site exempt de l'obligation de bandeau cookies (ePrivacy Art. 5(3)).

## Liens externes

- **CNIL :** https://www.cnil.fr (target="_blank")
- **PFPDT (Suisse) :** https://www.edoeb.admin.ch/edoeb/fr/home.html (target="_blank")
- **Data Privacy Framework (verification certif Calendly) :** https://www.dataprivacyframework.gov/list (target="_blank")
- **Email :** mailto:contact@aibizshift.eu

## SEO

```
title: Politique de confidentialite — AIBizShift
description: Politique de confidentialite et protection des donnees personnelles du site aibizshift.eu — conforme RGPD (UE) et nLPD (Suisse).
```

## Notes techniques

- Server Component (pas de "use client")
- Pas d'images — texte structure uniquement avec 2 tableaux (sous-traitants + cookies)
- Hebergeur : **OVH** (corrige depuis Scaleway le 2026-04-17)
- Derniere mise a jour affichee : 17 avril 2026

## Historique des modifications

- 2026-04-17 : Refonte majeure post-audit compliance (RGPD + AI Act + nLPD). Ajouts :
  - Sous-titre mentionnant nLPD
  - Section 6 etendue : tableau sous-traitants + transferts US (Calendly)
  - Section 8 dediee aux autorites de plainte (CNIL + PFPDT)
  - Section 9 cookies : tableau detaille (theme-preference + payload-token)
  - Section 10 mineurs (nouvelle, Art. 8 RGPD)
  - Section 11 securite (nouvelle)
  - Hebergeur Scaleway → OVH (M-09)
  - Mention "consentement persiste en DB" et "IP pseudonymisee" (M-06)
  - References articles RGPD ET nLPD pour chaque droit
