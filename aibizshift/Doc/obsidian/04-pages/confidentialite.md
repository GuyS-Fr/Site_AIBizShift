---
title: "Confidentialité — /confidentialite"
tags: [page, route]
aliases: ["Politique de confidentialite", "RGPD"]
created: 2026-04-17
updated: 2026-04-17
---

# Politique de confidentialité

Source : `src/app/(frontend)/confidentialite/page.tsx`. SSG. Politique combinée **RGPD UE + nLPD Suisse**.

## Contenu (grandes lignes)

- **Responsable de traitement** : Guy Salvatore / AIBizShift.
- **Finalités** : contact commercial, gestion des demandes, envoi du rapport d'audit.
- **Bases légales** : consentement (formulaire contact) + intérêt légitime (prise de RDV).
- **Sous-traitants documentés** :

| Sous-traitant | Rôle | Localisation | Garantie |
|---------------|------|--------------|----------|
| OVH SAS | Hébergement | 🇫🇷 France (Roubaix) | RGPD natif UE |
| Brevo | SMTP | 🇫🇷 France (Paris) | RGPD natif UE |
| Calendly LLC | Prise de RDV | 🇺🇸 USA | EU-US DPF + Swiss-US DPF |
| fal.ai | Génération d'images | 🇺🇸 USA | Pas de PII utilisateur traitée |

- **Transferts hors UE** : Calendly couvert par Data Privacy Framework (EU-US + Swiss-US).
- **Durée de conservation** : formulaire contact → **24 mois** (purge auto — voir [[collections/contact-submissions]]).
- **Droits** : accès, rectification, effacement, limitation, portabilité, opposition (RGPD Art. 15-22 / nLPD Art. 25-28).
- **Cookies** : analyse minimale côté Next.js (pas de tracker tiers).
- **Mineurs** : pas de collecte ciblée.
- **Sécurité** : HTTPS/TLS, hébergement souverain, hash IP dans contact-submissions.

## Spécification détaillée

Doc métier : `aibizshift/Doc/Pages Statiques/DOC_CONFIDENTIALITE.md`.
Registre complet : `Doc/COMPLIANCE/ROPA.md`.
Audit : `COMPLIANCE_REPORT.md` à la racine.

## Liens connexes

- [[collections/contact-submissions]] — où sont stockées les données de contact.
- [[contact]] — point de collecte principal.
- [[mentions-legales]]
