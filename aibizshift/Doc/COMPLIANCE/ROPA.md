# Registre des activites de traitement (ROPA)

> **Reference** : RGPD Art. 30 (UE) | nLPD Art. 12 (Suisse)
> **Responsable** : Guy Salvatore (AIBizShift / Smarthome Smartelec)
> **Contact DPO/Conseiller** : contact@aibizshift.eu (pas de DPO obligatoire — solo PME)
> **Derniere revue** : 2026-04-17 | **Prochaine revue** : 2027-04-17

---

## Coordonnees du responsable

| Champ | Valeur |
|-------|--------|
| Raison sociale | Smarthome Smartelec (EI) |
| Nom commercial | AIBizShift |
| Representant | Guy Salvatore |
| Adresse | Portes-les-Valence (26800), France |
| SIRET | 833 914 989 00029 |
| Code APE | 6201Z (Programmation informatique) |
| Email | contact@aibizshift.eu |
| Conseiller a la protection des donnees | Non designe (volontaire en nLPD, non obligatoire en RGPD pour cette activite) |

---

## Traitement T-01 — Formulaire de contact site web

| Champ | Valeur |
|-------|--------|
| **Identifiant** | T-01 |
| **Date de creation** | 2026-04-17 |
| **Statut** | Actif |
| **Finalite principale** | Repondre aux demandes des prospects/visiteurs du site aibizshift.eu |
| **Finalites secondaires** | Suivi commercial (devis, RDV) ; statistique des sujets de demande (anonymisee) |
| **Base legale RGPD** | Art. 6.1.a — Consentement explicite (case a cocher) |
| **Motif justificatif nLPD** | Art. 31 — Consentement (en complement des principes Art. 6) |
| **Personnes concernees** | Prospects B2B, dirigeants/responsables PME, organismes de formation |
| **Categories de donnees** | Identite (nom, prenom), coordonnees (email, telephone optionnel), donnees professionnelles (entreprise optionnel), contenu de demande (sujet, message), preuve consentement (timestamp + IP pseudonymisee SHA-256) |
| **Donnees sensibles** | Aucune |
| **Donnees de mineurs** | Non collectees intentionnellement (Art. 8 RGPD) |
| **Source** | Formulaire `/contact` du site aibizshift.eu (collecte directe) |
| **Destinataires internes** | Guy Salvatore uniquement |
| **Sous-traitants** | OVH SAS (hebergement DB), Brevo/Sendinblue (envoi emails SMTP) |
| **Transferts hors UE/CH** | Aucun pour ce traitement (la prise de RDV optionnelle via Calendly = traitement separe T-02) |
| **Duree de conservation** | 24 mois apres dernier echange ; purge automatique via Payload job `purgeOldSubmissions` |
| **Mesures de securite techniques** | HTTPS/TLS Let's Encrypt, hash IP SHA-256+sel, escaping XSS, validation server-side, rate limit 5/h/IP, honeypot anti-spam, persistance DB PostgreSQL avec ACL, sauvegarde quotidienne |
| **Mesures de securite organisationnelles** | Acces admin Payload restreint a Guy Salvatore, mot de passe fort, MAJ regulieres dependances |
| **Droits exercables** | Acces, rectification, effacement, portabilite, retrait consentement (sous 30 jours) via contact@aibizshift.eu |
| **Volumetrie estimee** | ~10-50 demandes/mois |

---

## Traitement T-02 — Prise de rendez-vous via Calendly

| Champ | Valeur |
|-------|--------|
| **Identifiant** | T-02 |
| **Date de creation** | 2026-04-17 |
| **Statut** | Actif (lien externe, pas d'embed) |
| **Finalite** | Permettre aux prospects de reserver un creneau de 30 min |
| **Base legale RGPD** | Art. 6.1.a — Consentement (action volontaire de cliquer sur lien externe) |
| **Motif justificatif nLPD** | Art. 31 — Consentement |
| **Personnes concernees** | Memes que T-01 |
| **Categories de donnees** | Nom, email, choix d'horaire, fuseau horaire |
| **Sous-traitant principal** | Calendly LLC (USA) |
| **Adresse Calendly** | 271 17th St NW, Atlanta, GA 30363, USA |
| **DPA Calendly** | https://calendly.com/dpa |
| **Transfert hors UE/CH** | Oui — Etats-Unis |
| **Garanties transfert** | EU-US Data Privacy Framework + Swiss-US Data Privacy Framework (verification annuelle sur https://www.dataprivacyframework.gov/list) |
| **TIA Schrems II** | Voir `Doc/COMPLIANCE/TIA_CALENDLY.md` (a creer) |
| **Duree de conservation** | Geree par Calendly (12 mois par defaut, parametrable) |
| **Mesures de securite** | Calendly = certifie SOC 2 Type II, ISO 27001, GDPR-compliant |
| **Volumetrie estimee** | ~5-20 reservations/mois |

---

## Traitement T-03 — Authentification administrateur

| Champ | Valeur |
|-------|--------|
| **Identifiant** | T-03 |
| **Statut** | Actif |
| **Finalite** | Acces a l'interface d'administration Payload CMS pour edition du site/blog |
| **Base legale RGPD** | Art. 6.1.b — Execution d'un contrat (acces utilisateur a son outil) ou 6.1.f — Interet legitime |
| **Personnes concernees** | Administrateurs (actuellement Guy Salvatore uniquement) |
| **Categories de donnees** | Email, mot de passe hashe (PBKDF2), prenom, role |
| **Sous-traitant** | OVH (DB PostgreSQL) |
| **Transfert hors UE** | Aucun |
| **Duree de conservation** | Tant que le compte est actif + 1 an apres desactivation |
| **Mesures de securite** | Hash PBKDF2 avec sel, cookie session JWT, HTTPS uniquement, acces /admin restreint |

---

## Traitement T-04 — Logs d'acces serveur

| Champ | Valeur |
|-------|--------|
| **Identifiant** | T-04 |
| **Statut** | Actif (Coolify + reverse proxy) |
| **Finalite** | Securite, debogage, detection d'incidents (Art. 32 RGPD) |
| **Base legale RGPD** | Art. 6.1.f — Interet legitime (securite) |
| **Categories de donnees** | IP, user-agent, URL, timestamp, status HTTP |
| **Duree de conservation** | 6 mois maximum (recommandation CNIL) |
| **Sous-traitant** | OVH (logs hebergeur) |
| **Mesures de securite** | Acces restreint a Guy Salvatore via Coolify SSH/dashboard |

---

## Conformite — Sous-traitants (Art. 28 RGPD)

| Sous-traitant | Role | DPA | Localisation | Garantie transfert |
|---------------|------|-----|--------------|-------------------|
| OVH SAS | Hebergement | https://www.ovhcloud.com/fr/personal-data-protection/data-processing/ | France (Roubaix) | RGPD natif |
| Brevo (Sendinblue SAS) | SMTP transactionnel | https://www.brevo.com/legal/dpa/ | France (Paris) | RGPD natif |
| Calendly LLC | Prise de RDV | https://calendly.com/dpa | USA | EU-US DPF + Swiss-US DPF |
| fal.ai (FAL Inc.) | Generation d'images du site (assets) | https://fal.ai/legal/dpa | USA | Pas de PII utilisateur traitee — N/A pour les visiteurs |

> **Action a faire** : telecharger et archiver les DPA signes/acceptes dans `Doc/COMPLIANCE/dpa-signed/`.

---

## AIPD (Art. 35 RGPD / Art. 22 nLPD)

| Traitement | Necessite AIPD ? | Justification |
|------------|------------------|---------------|
| T-01 | Non | Pas de risque eleve : pas de profilage, pas de donnees sensibles, faible volumetrie, finalite limitee |
| T-02 | Non | Idem, sous-traitant certifie DPF |
| T-03 | Non | Acces interne, faible volumetrie |
| T-04 | Non | Logs techniques, retention courte |

> Si l'activite evolue (ex. ajout d'un chatbot IA, d'un outil de scoring prospects, d'une newsletter avec segmentation), reevaluer la necessite d'AIPD.

---

## Revue annuelle

| Date | Reviseur | Modifications | Prochaine revue |
|------|----------|---------------|-----------------|
| 2026-04-17 | Guy Salvatore | Creation initiale du registre | 2027-04-17 |
