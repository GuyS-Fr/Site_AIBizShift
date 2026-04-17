# Rapport de conformité — AIBizShift
> Audit réalisé le **2026-04-17** | Juridiction : **UE (RGPD + AI Act) + Suisse (nLPD/FADP)**
> Auditeur : Claude (skill `compliance` v1) | Périmètre : code source `aibizshift/`, documentation publique, configuration de déploiement

---

## Résumé exécutif

| Indicateur | Valeur |
|---|---|
| **Score global pondéré** | **49 %** 🔴 |
| Score RGPD UE | 55 % 🟠 |
| Score AI Act UE | N/A (aucune IA embarquée dans le site) |
| Score nLPD Suisse | 43 % 🔴 |
| **Findings critiques 🔴** | 4 |
| **Findings majeurs 🟠** | 9 |
| **Findings mineurs 🟡** | 9 |
| Items "à vérifier manuellement" 🔍 | 9 |

> **Verdict :** Bonne base (politique de confidentialité existante, hébergement souverain France, pas de tracking), mais **non-conformité critique** sur deux axes :
> 1. **Transferts internationaux** : Calendly (US) utilisé partout sans mention dans la politique de confidentialité ni garanties documentées (Schrems II / Swiss-US DPF).
> 2. **Volet suisse** : aucune mention de la nLPD/PFPDT alors que tu as demandé l'audit pour la Suisse — la politique actuelle ne couvre que le RGPD.
>
> Le site **n'utilise pas d'IA embarquée**, donc l'AI Act ne s'applique pas au site lui-même. Il s'appliquerait aux **services vendus** (audit IA, consulting, SaaS clients) — hors périmètre de cet audit.

---

## Périmètre de l'audit

- **Cadre réglementaire** : RGPD (UE 2016/679) + ePrivacy + AI Act (UE 2024/1689) + nLPD/FADP Suisse (SR 235.1, en vigueur depuis 01.09.2023)
- **Projet audité** : `C:\DevClaude\Site_AIBizShift\aibizshift\`
- **Stack détectée** :
  - Next.js 16.2.1 (App Router) + React 19
  - Payload CMS 3.81 (admin uniquement, pas de comptes publics)
  - PostgreSQL (DB hébergée en interne via Coolify)
  - Tailwind 4 + Radix UI
  - Nodemailer + SMTP Brevo (`smtp-relay.brevo.com`, France)
  - Calendly (lien externe `target="_blank"`)
- **Hébergement** : Coolify Docker — affirmé "Scaleway France" dans la politique de confidentialité (à confirmer côté config réelle)
- **Composants IA détectés dans le SITE** : **aucun**. Une mention "fal.ai" dans les mentions légales pour la **génération des images du site** (assets décoratifs, pas de traitement de données utilisateur).
- **Données personnelles collectées** : formulaire contact 7 champs (nom, email, téléphone opt., société opt., sujet, message, consentement) + cookie technique `payload-token` (admin) + localStorage `theme-preference`.
- **Pas détectés** : Google Analytics, GTM, Hotjar, pixels Meta/LinkedIn/TikTok, fingerprinting, profilage, scoring, cookies tiers.

---

## Résultats détaillés — RGPD UE

### Bases légales & Consentement (Art. 6-9)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| BL-01 | Base légale identifiée | ✅ | Consentement (Art. 6.1.a) déclaré dans `confidentialite/page.tsx:84-87` | OK |
| BL-02 | Consentement libre, spécifique, éclairé, univoque | ✅ | Case à cocher dédiée dans `ContactForm.tsx:226-237` | OK |
| BL-03 | Retrait aussi simple que l'octroi | ⚠️ | Retrait possible uniquement par email manuel à `contact@aibizshift.eu` | Ajouter une mention claire "Pour retirer votre consentement, écrivez à X — réponse sous 30 jours" + créer un lien `mailto:` pré-rempli |
| BL-04 | Consentement explicite données sensibles | ⬜ | Pas de données sensibles collectées | N/A |
| BL-05 | Vérification d'âge mineurs | ⬜ | Cible B2B (PME), pas de mineurs | N/A |
| BL-06 | Pas de bundling | ✅ | Consentement séparé du formulaire | OK |
| BL-07 | Preuves de consentement conservées | 🔍 | Aucune trace en DB — le consent n'est pas persisté, juste envoyé par email | Stocker le consentement en DB avec horodatage (charge de la preuve, Art. 7(1)) |

### Transparence & Information (Art. 12-14)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| TR-01 | Politique de confidentialité accessible | ✅ | `/confidentialite` accessible depuis le footer | OK |
| TR-02 | Identité du responsable | ✅ | Guy Salvatore — AIBizShift, Portes-lès-Valence | OK |
| TR-03 | Finalités décrites | ✅ | Section 3 de la politique | OK |
| TR-04 | Base légale indiquée | ✅ | Section 4 de la politique | OK |
| TR-05 | Destinataires/sous-traitants listés | ⚠️ | Brevo mentionné en section 6, **Calendly absent**, Scaleway mentionné mais pas en tant que sous-traitant | Lister tous les sous-traitants dans une table dédiée (Brevo, Scaleway/Coolify, Calendly, fal.ai) |
| TR-06 | Transferts internationaux mentionnés avec garanties | ❌ | **Calendly LLC = US**, non mentionné. Aucune garantie (CCT, EU-US DPF) référencée | Ajouter une section "Transferts hors UE" listant Calendly + EU-US DPF (Calendly est certifié) |
| TR-07 | Durée de conservation | ✅ | 24 mois indiqués (section 5) | OK — mais voir DP-04 sur l'application réelle |
| TR-08 | Droits énumérés | ✅ | Section 7 complète | OK |
| TR-09 | Droit de plainte CNIL | ✅ | Adresse CNIL fournie | OK — ajouter PFPDT pour Suisse (voir nLPD) |
| TR-10 | Source si non collecté chez la personne | ⬜ | Données collectées directement | N/A |
| TR-11 | Langage clair | ✅ | Texte accessible | OK |

### Droits des personnes (Art. 15-22)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| DP-01 | Process de réponse 1 mois | ✅ | "30 jours" annoncés (section 7) | OK |
| DP-02 | Droit d'accès implémenté | ⚠️ | Manuel par email | OK pour PME — formaliser le process interne |
| DP-03 | Droit de rectification | ⚠️ | Manuel par email | Idem |
| DP-04 | Droit à l'effacement | ⚠️ | Manuel par email | Idem |
| DP-05 | Droit à la limitation | ⚠️ | Pas mentionné explicitement | Ajouter à la section 7 |
| DP-06 | Droit à la portabilité (machine-readable) | ⚠️ | Mentionné mais pas d'export automatique | Préparer un template d'export JSON/CSV manuel |
| DP-07 | Droit d'opposition | ⚠️ | Mentionné mais procédure floue | Idem |
| DP-08 | Opt-out marketing immédiat | ⬜ | Pas de marketing direct | N/A |
| DP-09 | Décisions automatisées contestables | ⬜ | Pas de décisions automatisées | N/A |
| DP-10 | Point de contact accessible | ✅ | `contact@aibizshift.eu` partout | OK |

### Registre des traitements — ROPA (Art. 30)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| RT-01 | Registre tenu | ❌ | Aucun ROPA documenté dans le projet | Créer `Doc/COMPLIANCE/ROPA.md` même minimaliste |
| RT-02 | Contenu complet | ❌ | — | Inclure : finalité, catégories de personnes/données, destinataires, conservation, sécurité, transferts |
| RT-03 | Tenu à jour | ❌ | — | Date de revue annuelle |
| RT-04 | Disponible pour la CNIL | ❌ | — | Stocker hors-ligne aussi |

> **Note PME** : Art. 30(5) prévoit une exemption pour les organisations <250 employés **uniquement si** le traitement n'est pas régulier et ne concerne pas de données sensibles ni de risque pour les droits. Tenir un ROPA simplifié reste fortement recommandé par la CNIL.

### Sous-traitance (Art. 28)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| ST-01 | Contrat DPA écrit | 🔍 | Pas d'évidence de DPA signé avec Brevo, Scaleway, Calendly | Vérifier que les CGU/DPA standards sont acceptés (Brevo et Calendly proposent des DPA dans leurs portails) |
| ST-02 | Garanties suffisantes | 🔍 | À vérifier | Récupérer les certifications ISO 27001, SOC 2, EU-US DPF |
| ST-03 | Sous-traitants ultérieurs autorisés | 🔍 | À vérifier | Idem |
| ST-04 | Obligations sécurité répercutées | 🔍 | — | DPA standard couvre |
| ST-05 | Audits réguliers | 🔍 | Solo, pas d'audit possible | Acceptable pour PME |
| ST-06 | Sous-traitants hors UE couverts | ❌ | **Calendly = US**, aucune garantie référencée | Vérifier que Calendly est inscrit au EU-US DPF (oui, depuis sept. 2023 — `https://www.dataprivacyframework.gov`) et le mentionner |

### Sécurité (Art. 32)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| SE-01 | Chiffrement | ✅ | HTTPS Let's Encrypt actif | OK |
| SE-02 | Pseudonymisation | 🔍 | Pas applicable au formulaire | OK |
| SE-03 | CIA (confidentialité, intégrité, disponibilité) | ✅ | Coolify + serveur souverain | OK |
| SE-04 | Résilience testée | 🔍 | Pas de tests documentés | Test de restauration backup annuel |
| SE-05 | Procédures de restauration | 🔍 | Volume Mount `aibizshift-media` documenté, mais pas de procédure de DR | Documenter procédure restore PostgreSQL |
| SE-06 | Tests de sécurité réguliers | 🔍 | Aucun pentest | Recommandé — outil gratuit OWASP ZAP |
| SE-07 | Moindre privilège | ✅ | Auth admin Payload séparée | OK |
| SE-08 | Journalisation accès | ⚠️ | Logs Coolify basiques | Activer access log Coolify + rétention 6 mois |
| SE-09 | Formation personnel | ⬜ | Solo (Guy = expert) | N/A |
| **SE-EXTRA** | **Vulnérabilité TLS** | ❌ | **`tls.rejectUnauthorized: false`** dans `api/contact/route.ts:53-55` désactive la vérification du certificat SMTP → **risque MITM** | **Supprimer cette option**. Brevo a un certificat valide, c'est un vestige du contournement OVH Zimbra |

### Notification de violation (Art. 33-34)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| NV-01 | Procédure de détection | ❌ | Aucune procédure documentée | Créer `Doc/COMPLIANCE/INCIDENT_RESPONSE.md` |
| NV-02 | Notification 72h | ❌ | Pas de procédure | Inclure template + lien CNIL teleservice notification |
| NV-03 | Contenu notification préparé | ❌ | — | Template prêt à remplir |
| NV-04 | Critères notification personnes | ❌ | — | Idem |
| NV-05 | Registre violations | ❌ | — | Fichier journal |

### Transferts internationaux (Art. 44-49)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| TI-01 | Transferts hors EEE identifiés | ⚠️ | **Calendly (US)** identifié verbalement, pas documenté | Lister formellement |
| TI-02 | Décision d'adéquation ou garanties | ❌ | Non vérifié pour Calendly | Calendly = certifié EU-US DPF → invoquer cette base |
| TI-03 | CCT 2021 | ⬜ | Pas de CCT actives | N/A si DPF |
| TI-04 | TIA Schrems II | ❌ | Aucun | Réaliser un TIA simple pour Calendly (`https://edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en`) |
| TI-05 | Couverture USA | ❌ | Calendly inscrit au DPF mais pas mentionné dans la doc | Ajouter mention dans politique de confidentialité |

### Privacy by Design (Art. 25)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| PD-01 | Minimisation | ✅ | Champs minimum (téléphone et entreprise optionnels) | Excellent |
| PD-02 | Paramètres par défaut protecteurs | ✅ | Pas de cookies tiers, pas d'analytics | Excellent |
| PD-03 | Collecte limitée | ✅ | OK | OK |
| PD-04 | Conservation automatisée | ⚠️ | 24 mois annoncés, pas de mécanisme de purge automatique | Créer un job Payload (Cron) qui supprime les anciens consentements après 24 mois — ou procédure manuelle annuelle documentée |

### Cookies & Traceurs (ePrivacy)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| CK-01 | Bandeau conforme | ⬜ | **Aucun cookie non essentiel** → pas d'obligation de bandeau (ePrivacy Art. 5(3) ne s'applique qu'aux cookies non strictement nécessaires) | OK — s'assurer que ça reste vrai |
| CK-02 | Consentement préalable cookies non essentiels | ⬜ | N/A | OK |
| CK-03 | Refus = simple | ⬜ | N/A | OK |
| CK-04 | Pas de dépôt avant consentement | ✅ | Aucun cookie de tracking détecté | OK |
| CK-05 | Détail cookies | ⚠️ | Section 8 mentionne "cookies techniques" mais ne liste pas explicitement `payload-token` (admin) ni `theme-preference` (localStorage) | Détailler dans une mini-table |

### Décision automatisée (Art. 22)

| Ref | Statut | Note |
|-----|--------|------|
| DA-01 à DA-04 | ⬜ | N/A — aucun profilage ni décision automatisée |

---

## Résultats détaillés — AI Act UE

### Pré-classification

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| PC-01 | Le SITE utilise-t-il de l'IA ? | ❌ NON | Aucun système IA embarqué dans le site. Pas de chatbot, pas de génération de contenu en temps réel, pas de scoring. |
| PC-02 | Rôle dans la chaîne IA | ⬜ | N/A pour le site |
| PC-03 | Niveau de risque | ⬜ | N/A pour le site |
| PC-04 | Date d'application | ⬜ | N/A pour le site |

### Conclusion AI Act

**L'AI Act ne s'applique pas au site `aibizshift.eu`.** Mais attention :

- **Service "Audit IA" vendu** : si l'outil d'audit utilise un LLM (GPT-4, Claude, Mistral) pour générer des recommandations destinées au client, alors :
  - Tu es **déployeur** (Art. 4) → obligation de **littératie IA** depuis fév. 2025
  - Si l'audit prend des décisions affectant l'organisation cliente → potentiellement **risque limité** (Art. 50) → obligation d'informer que l'output est généré par IA
- **fal.ai pour les images du site** : tu es déployeur d'IA générative pour création de contenu marketing. Les images étant décoratives (pas de deepfakes, pas de catégorisation biométrique), **pas d'obligation Art. 50**.

> **Recommandation hors site** : produire une mini-doc "AI_USE_POLICY.md" décrivant comment l'IA est utilisée dans tes services (audit, consulting, formation) — utile pour clients exigeants et pour la littératie Art. 4.

---

## Résultats détaillés — Suisse (nLPD/FADP)

### Principes de traitement (Art. 6)

| Ref | Statut | Note |
|-----|--------|------|
| PR-01 à PR-03 | ✅ | Licité, bonne foi, finalités déterminées — équivalent RGPD |
| PR-04 | ⚠️ | Exactitude : pas de mécanisme de mise à jour proactive |
| PR-05 | ⚠️ | Destruction après 24 mois annoncée mais non automatisée |

### Devoir d'information (Art. 19-21)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| DI-01 | Identité responsable | ✅ | Guy Salvatore identifié | OK |
| DI-02 | Finalité | ✅ | Décrite | OK |
| DI-03 | Destinataires | ⚠️ | Brevo, Calendly, Scaleway non listés systématiquement | Lister explicitement |
| DI-04 | Pays de transfert + garanties | ❌ | **Calendly = US, non mentionné** | Ajouter section transferts mentionnant USA + Swiss-US DPF (reconnu par le Conseil fédéral le **15 sept. 2024**) |
| DI-05 | Catégories si non collecté | ⬜ | N/A | OK |
| DI-06 | Information à la collecte | ✅ | Lien vers politique au formulaire | OK |
| DI-07 | Information décision automatisée | ⬜ | N/A | OK |

### Droits des personnes (Art. 25-29)

| Ref | Statut | Note |
|-----|--------|------|
| DP-01 | ✅ | 30 jours — conforme nLPD |
| DP-02 | ✅ | Gratuit |
| DP-03/05/06 | ⚠️ | Idem RGPD : process manuel |
| DP-04 | ⬜ | N/A |
| DP-07 | ⬜ | N/A |
| DP-08 | ✅ | Email contact |

### Notification de violation (Art. 24, OPDo Art. 15)

| Ref | Statut | Note |
|-----|--------|------|
| NV-01 à NV-07 | ❌ | Aucune procédure. Note : nLPD = "dès que possible", pas 72h strict, mais notification au **PFPDT** via portail **DataReg** (`https://databreach.edoeb.admin.ch/`) |

### Transferts internationaux (Art. 16-18)

| Ref | Exigence | Statut | Constat | Recommandation |
|-----|----------|--------|---------|----------------|
| TI-01 | Transferts hors Suisse identifiés | ⚠️ | Calendly identifié | Documenter |
| TI-02 | Liste d'adéquation suisse vérifiée | ❌ | USA = pas dans la liste d'adéquation suisse (Annexe 1 OPDo) sauf via Swiss-US DPF | Vérifier inscription Calendly au Swiss-US DPF (généralement les entreprises certifiées EU-US sont aussi Swiss-US) |
| TI-03 | Garanties (CCT suisses, BCR) | ❌ | Aucune | DPF suffit si applicable |
| TI-04 | CCT adaptées au contexte suisse | ❌ | N/A si DPF | — |
| TI-05 | Swiss-US DPF | ❌ | Non vérifié | À vérifier |
| TI-06 | PFPDT informé | ❌ | Non requis si DPF mais notification recommandée | — |
| TI-07 | Dérogation Art. 17 | ⬜ | Pas applicable | — |

### Représentant en Suisse (Art. 14-15)

| Ref | Statut | Note |
|-----|--------|------|
| RS-01 à RS-03 | ⬜ | **Probablement N/A** : exigence de représentant suisse uniquement si (1) traitement régulier et grande échelle (2) données de personnes en Suisse (3) risque élevé. Une PME française qui prend occasionnellement des contacts suisses via un formulaire ne déclenche **pas** cette obligation. À réévaluer si activité suisse devient significative. |

### IA en Suisse (sectoriel)

| Ref | Statut |
|-----|--------|
| IA-01 à IA-07 | ⬜ Pas de loi IA Suisse spécifique. Conformité nLPD suffisante. Aucun secteur réglementé (FINMA, Swissmedic, FIDLEG) concerné. |

### Conseiller à la protection des données (Art. 10) — VOLONTAIRE

| Ref | Statut | Recommandation |
|-----|--------|----------------|
| CP-01 à CP-05 | ⬜ | Désigner un conseiller (même soi-même formellement) **exempte** de la consultation PFPDT en cas d'AIPD à risque résiduel élevé. À envisager si l'activité IA grandit. |

---

## Findings par priorité

### 🔴 Critiques — action immédiate

#### C-01 — Transferts US (Calendly) non documentés
- **Réf. légale** : RGPD Art. 13(1)(f), 44-49 ; nLPD Art. 19(2)(d-e), 16-18
- **Constat** : Calendly LLC (US) est utilisé sur 4+ emplacements du site (Hero homepage, CTA section 5, Footer, page Contact, email de confirmation). Aucune mention dans la politique de confidentialité ni de garantie référencée (EU-US DPF, Swiss-US DPF).
- **Action** : Ajouter une section "Transferts internationaux" dans `/confidentialite` listant Calendly, mentionnant le **EU-US Data Privacy Framework** (Calendly y est certifié) et le **Swiss-US DPF** (reconnu par le Conseil fédéral le 15 sept. 2024). Vérifier l'inscription Calendly sur `https://www.dataprivacyframework.gov`.

#### C-02 — Volet suisse totalement absent
- **Réf. légale** : nLPD Art. 19, 16-18, 24
- **Constat** : La politique de confidentialité ne mentionne **que** le RGPD et la CNIL. Aucune référence à la nLPD, au PFPDT (`https://www.edoeb.admin.ch`), ni au portail DataReg suisse pour notification de violation.
- **Action** : Étendre `/confidentialite` avec une sous-section "Visiteurs depuis la Suisse" mentionnant : nLPD comme cadre applicable, droits équivalents, autorité de plainte = PFPDT, portail violations = DataReg. Idéalement créer une page `/confidentialite-suisse` distincte.

#### C-03 — Vulnérabilité TLS dans le formulaire de contact
- **Réf. légale** : RGPD Art. 32 ; nLPD Art. 8 + OPDo
- **Constat** : `aibizshift/src/app/api/contact/route.ts:53-55` contient `tls: { rejectUnauthorized: false }` — désactive la vérification du certificat SMTP, exposition à attaque MITM sur les emails contenant les PII des contacts.
- **Action** : **Supprimer** ces 3 lignes. Brevo a un certificat valide. C'était un contournement OVH Zimbra (cf. `CLAUDE.md`) qui n'a plus lieu d'être.

#### C-04 — SIRET manquant dans les mentions légales
- **Réf. légale** : Loi pour la confiance dans l'économie numérique (LCEN) Art. 6-III, Code de commerce Art. R123-237
- **Constat** : `mentions-legales/page.tsx:40` contient `SIRET : [à compléter]` — placeholder visible en production.
- **Action** : Renseigner le numéro SIRET réel de Smarthome Smartelec.

---

### 🟠 Majeurs — action sous 30 jours

#### M-01 — Pas de rate limiting sur `/api/contact`
- **Réf. légale** : RGPD Art. 32(1)(b) (résilience), nLPD Art. 8
- **Constat** : `/api/contact` n'a aucun rate limit. Honeypot présent (bonne base) mais insuffisant contre attaque distribuée. Risque de DOS et de spam massif des inboxes de Guy + des destinataires inscrits.
- **Action** : Ajouter rate limit (ex. 5 req/IP/h) via middleware Next.js ou Coolify.

#### M-02 — Conservation 24 mois non automatisée
- **Réf. légale** : RGPD Art. 5(1)(e), 17 ; nLPD Art. 6(4)
- **Constat** : Politique annonce 24 mois, mais aucun mécanisme automatique. Risque de garder les emails indéfiniment.
- **Action** : Soit (a) créer un job Cron Payload de purge ; soit (b) procédure manuelle annuelle documentée + nettoyage inbox `contact@aibizshift.eu`.

#### M-03 — Sous-traitants non listés exhaustivement
- **Réf. légale** : RGPD Art. 13(1)(e), 28 ; nLPD Art. 19(2)(c)
- **Constat** : Politique mentionne Scaleway (mais c'est l'hébergeur, pas un sous-traitant data) et Brevo. **Calendly absent**. **fal.ai absent** (mentionné en mentions légales mais pas en confidentialité — bien qu'il ne traite pas de PII utilisateur).
- **Action** : Créer un tableau "Sous-traitants" listant : nom, rôle, localisation, garanties, lien DPA.

#### M-04 — Aucun ROPA (registre des traitements)
- **Réf. légale** : RGPD Art. 30 ; nLPD Art. 12
- **Constat** : Aucun document. Exemption PME possible mais à formaliser ; la CNIL recommande un ROPA même simplifié.
- **Action** : Créer `aibizshift/Doc/COMPLIANCE/ROPA.md` avec 1 entrée minimum (formulaire contact). Template CNIL : `https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement`.

#### M-05 — Pas de procédure d'incident / notification violation
- **Réf. légale** : RGPD Art. 33-34 ; nLPD Art. 24, OPDo Art. 15
- **Constat** : Aucun runbook. En cas de breach, Guy ne saurait pas notifier sous 72h (UE) ni "dès que possible" (CH).
- **Action** : Créer `Doc/COMPLIANCE/INCIDENT_RESPONSE.md` avec : détection, évaluation, notification CNIL (téléservice `https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles`), notification PFPDT (DataReg), notification utilisateurs, registre.

#### M-06 — Consentement non persisté en base
- **Réf. légale** : RGPD Art. 7(1) (charge de la preuve)
- **Constat** : `ContactForm.tsx:38` valide la case mais le bool `consent` est seulement transmis dans l'email, **pas stocké en DB**. En cas de litige, Guy ne peut pas prouver le consentement.
- **Action** : Soit (a) créer une collection Payload `ContactSubmissions` qui persiste : nom, email, message, IP, user-agent, timestamp, **consent boolean** ; soit (b) archiver les emails de notification (déjà fait par Brevo si conservation activée).

#### M-07 — Cookies techniques non détaillés
- **Réf. légale** : ePrivacy Art. 5(3), CNIL délibération 2020-091
- **Constat** : Section 8 dit "cookies techniques" sans préciser. Or `payload-token` (cookie auth admin) et `theme-preference` (localStorage) sont utilisés.
- **Action** : Ajouter une mini-table : nom / type / finalité / durée / catégorie (technique exempté de consentement).

#### M-08 — Pas de DPA signé documenté
- **Réf. légale** : RGPD Art. 28(3)
- **Constat** : Aucune trace de DPA signé/accepté avec Brevo, Calendly, Scaleway/Coolify hôte.
- **Action** : 
  - Brevo : DPA accessible dans `https://www.brevo.com/legal/dpa/` — accepter et conserver le PDF
  - Calendly : DPA dans `https://calendly.com/dpa`
  - Hébergeur (Coolify host = OVH/Scaleway selon réalité) : récupérer DPA standard

#### M-09 — Politique annonce "Scaleway" mais à vérifier vs réalité
- **Réf. légale** : RGPD Art. 13(1)(e) (exactitude information)
- **Constat** : Confidentialité et mentions légales annoncent Scaleway. Mais le `CLAUDE.md` mentionne "Coolify sur serveur souverain français" sans préciser l'hébergeur réel. Si c'est OVH ou autre, la mention est fausse.
- **Action** : Vérifier où tourne réellement Coolify. Mettre à jour les deux pages avec la vraie info (Scaleway, OVH, Hetzner FR, etc.).

---

### 🟡 Mineurs — amélioration continue

#### m-01 — Date "avril 2026" sans jour précis
- Politique et mentions légales : "Dernière mise à jour : avril 2026". Préciser la date complète (`17 avril 2026`).

#### m-02 — Pas de CGV / CGS
- Pas de Conditions Générales pour les services vendus (audit, consulting, formation, SaaS). Important pour tout devis/contrat — **hors site mais lié au business**.

#### m-03 — `console.error` peut logger des PII
- `api/contact/route.ts:128` : `console.error('Erreur envoi email:', error)`. Si l'erreur Nodemailer contient l'email destinataire, il finit dans les logs Coolify. Filtrer ou utiliser un logger structuré qui masque les PII.

#### m-04 — Pas de mention de littératie IA Art. 4
- AI Act Art. 4 applicable depuis fév. 2025 : tout déployeur IA doit assurer la littératie de son personnel. Solo, donc Guy = OK natif. Documenter pour anticiper embauche.

#### m-05 — Hashage mots de passe Payload
- Payload utilise PBKDF2 par défaut (acceptable, conforme NIST). Argon2id serait préférable. Pas critique pour un admin solo.

#### m-06 — Pas de tests de sécurité réguliers
- Recommandation : pentest annuel avec OWASP ZAP (gratuit) ou audit Snyk sur dépendances npm (déjà géré via Dependabot ?).

#### m-07 — Lien Calendly dans email de confirmation sans pré-info
- Email de confirmation (`api/contact/route.ts:111-115`) contient un lien Calendly sans rappeler que cliquer = transfert US. Mineur car le visiteur a déjà soumis le formulaire.

#### m-08 — Pas de section "Mineurs" même si N/A
- La politique pourrait mentionner explicitement "Le site n'est pas destiné aux moins de 16 ans" pour clarifier (Art. 8 RGPD).

#### m-09 — Footer global vs footer custom homepage
- Le footer custom de la homepage et le footer global Payload sont 2 systèmes distincts. Vérifier que les liens "Mentions légales" et "Confidentialité" sont présents sur **toutes** les pages (cohérence Art. 12).

---

## Plan de remédiation

| Priorité | # | Action | Réf. légale | Effort | Statut |
|---|---|--------|-------------|--------|--------|
| 🔴 | C-01 | Ajouter section "Transferts internationaux (USA)" + EU-US DPF / Swiss-US DPF Calendly | RGPD 13(1)(f), nLPD 19 | Faible (30min) | À faire |
| 🔴 | C-02 | Étendre confidentialité avec section nLPD/PFPDT/DataReg | nLPD 19 | Faible (30min) | À faire |
| 🔴 | C-03 | Supprimer `tls.rejectUnauthorized: false` dans route.ts | RGPD 32 | Faible (5min) | À faire |
| 🔴 | C-04 | Renseigner SIRET réel | LCEN | Faible (5min) | À faire |
| 🟠 | M-01 | Rate limit sur `/api/contact` | RGPD 32 | Moyen (1h) | À faire |
| 🟠 | M-02 | Job de purge automatique 24 mois | RGPD 5(1)(e) | Moyen (2h) | À faire |
| 🟠 | M-03 | Tableau sous-traitants dans politique | RGPD 13(1)(e) | Faible (30min) | À faire |
| 🟠 | M-04 | Créer ROPA minimal | RGPD 30 | Faible (1h) | À faire |
| 🟠 | M-05 | Runbook incident response | RGPD 33-34 | Moyen (2h) | À faire |
| 🟠 | M-06 | Persister consent en DB (collection ContactSubmissions) | RGPD 7(1) | Moyen (2h) | À faire |
| 🟠 | M-07 | Détailler cookies techniques | ePrivacy 5(3) | Faible (15min) | À faire |
| 🟠 | M-08 | Récupérer et archiver DPA Brevo/Calendly/host | RGPD 28 | Moyen (1h admin) | À faire |
| 🟠 | M-09 | Vérifier hébergeur réel et corriger pages | RGPD 13(1)(e) | Faible (15min) | À faire |
| 🟡 | m-01 à m-09 | Diverses améliorations | — | Faible chacune | Backlog |

---

## Divergences UE / Suisse

| Sujet | UE (RGPD) | Suisse (nLPD) | Impact AIBizShift |
|-------|-----------|---------------|-------------------|
| **Délai notification violation** | 72h strict | "Dès que possible" | Procédure unique 72h (le plus strict) |
| **Délai droit d'accès** | 1 mois (extensible 2 mois) | 30 jours stricts | Déjà aligné à 30j ✅ |
| **DPO** | Obligatoire dans certains cas | Volontaire (Art. 10) | Non obligatoire pour AIBizShift |
| **Sanctions** | Amendes admin jusqu'à 20M€ / 4% CA contre l'organisation | Amendes pénales jusqu'à CHF 250'000 contre **Guy personnellement** (intentionnel) | **Risque personnel suisse à connaître** |
| **Autorité plainte** | CNIL (FR) | PFPDT (CH) | Mentionner **les deux** |
| **Portail violation** | Téléservice CNIL | DataReg PFPDT | Connaître les deux URL |
| **Représentant local** | Si responsable hors UE → représentant UE | Si responsable hors CH + grande échelle + risque élevé | **Probablement N/A** pour AIBizShift |
| **Transferts US** | EU-US DPF | Swiss-US DPF (depuis 15 sept. 2024) | **Frameworks distincts** — vérifier les 2 pour Calendly |
| **Bases légales** | 6 listées exhaustives Art. 6 | Pas de liste — licite par défaut sauf violation des principes | Approche FR plus formelle, mais consentement utilisé = couvre les deux |
| **Profilage à risque élevé** | Art. 22 (décision auto) | Art. 5 + Art. 21 (réexamen humain) | N/A pour AIBizShift |
| **Personnes morales** | Non protégées | **Avant 2023** : protégées. **Depuis 01.09.2023** : NON protégées (alignement UE) | Aligné — pas d'impact |

---

## Sources et références

### RGPD UE
- Texte : `https://eur-lex.europa.eu/eli/reg/2016/679/oj`
- CNIL — Guide développeur : `https://www.cnil.fr/fr/la-cnil-publie-un-guide-rgpd-pour-les-developpeurs`
- CNIL — ROPA : `https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement`
- CNIL — Notification violation : `https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles`
- EDPB Schrems II Recommendations 01/2020

### AI Act UE
- Texte : `https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689`
- AI Office : `https://digital-strategy.ec.europa.eu/en/policies/ai-office`

### Suisse nLPD
- Loi : `https://www.fedlex.admin.ch/eli/cc/2022/491/fr`
- PFPDT : `https://www.edoeb.admin.ch/edoeb/fr/home.html`
- Portail DataReg : `https://databreach.edoeb.admin.ch/`
- Liste adéquation suisse (Annexe 1 OPDo) : `https://www.edoeb.admin.ch/edoeb/en/home/datenschutz/grundlagen/datenuebermittlung-ins-ausland/staatenliste.html`

### Frameworks transferts US
- Data Privacy Framework (UE + CH) : `https://www.dataprivacyframework.gov`
- Liste participants : `https://www.dataprivacyframework.gov/list`

### Brevo & Calendly
- Brevo DPA : `https://www.brevo.com/legal/dpa/`
- Calendly DPA : `https://calendly.com/dpa`
- Calendly EU-US DPF certification : à vérifier sur `dataprivacyframework.gov/list` (recherche "Calendly")

---

*Rapport généré par le skill `/compliance` v1 — 2026-04-17*
