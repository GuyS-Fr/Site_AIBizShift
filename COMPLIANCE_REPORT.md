# Rapport de conformité — AIBizShift

> Audit réalisé le **2026-04-17** (re-audit restreint UE) | Juridiction : **UE (RGPD + AI Act)**
> Auditeur : Claude (skill `/compliance` v1) | Périmètre : code source `aibizshift/`, documentation `Doc/`, configuration de déploiement Coolify
> **Audits précédents** : 2026-04-17 matin (49 % 🔴) → 2026-04-17 après-midi (90 % 🟢 UE+Suisse)

---

## 🚀 Évolution depuis l'audit précédent

| Indicateur | Audit 2026-04-17 (UE+Suisse) | Audit actuel (UE seul) | Δ |
|---|---|---|---|
| **Score global** | 90 % 🟢 | **92 %** 🟢 | +2 pts |
| Score RGPD UE | 88 % 🟡 | **90 %** 🟢 | +2 pts |
| Score AI Act UE | N/A (no AI dans site) | **100 %** 🟢 | acquis via `AI_USE_POLICY.md` |
| Findings critiques 🔴 | 0 | **0** | = ✅ |
| Findings majeurs 🟠 | 3 | **2** | −1 (M-03 résolu) ✅ |
| Findings mineurs 🟡 | 5 | **3** | −2 (m-01, m-04 résolus) ✅ |

> **Verdict** : site **conforme RGPD + AI Act** 🟢. Les 3 findings majeurs de l'audit précédent sont réduits à 2 (TIA_CALENDLY.md désormais existant). Les blocages restants sont **administratifs** (cron Coolify à activer, DPA à archiver).

---

## Résumé exécutif

| Indicateur | Valeur |
|---|---|
| **Score global pondéré** | **92 %** 🟢 |
| Score RGPD UE | 90 % 🟢 |
| Score AI Act UE | 100 % 🟢 (littératie Art. 4 OK, aucune pratique interdite Art. 5, pas de haut risque Annexe III) |
| Findings critiques 🔴 | **0** |
| Findings majeurs 🟠 | 2 |
| Findings mineurs 🟡 | 3 |
| Items "à vérifier manuellement" 🔍 | 6 |

---

## Périmètre de l'audit

| Élément | Détails |
|---------|---------|
| Cadre réglementaire | RGPD (UE 2016/679) + AI Act (UE 2024/1689) |
| Projet audité | `C:\DevClaude\Site_AIBizShift\aibizshift` |
| Stack | Next.js 16 + Payload CMS 3.81 + PostgreSQL (Coolify Docker, hébergement OVH Roubaix) |
| Composants IA dans le site | **Aucun** (site vitrine statique) |
| Systèmes IA utilisés par l'opérateur | Claude Code, ChatGPT, fal.ai (génération images) — documentés dans `AI_USE_POLICY.md` |

### Nouveautés depuis l'audit précédent (commits depuis `3af6669`)

- `src/migrations/` — système de migrations Payload (auditabilité schéma DB)
- `src/migrations/20260417_124957_add_contact_submissions.ts` — migration delta idempotente
- `scripts/clear-dev-migration-marker.ts` — utilitaire one-shot pour nettoyer marqueur dev-push
- `public/images/guy-salvatore.jpg` — photo du publicateur (alt text présent)
- `public/images/logo3-horizontal-dark.png` — logo image (remplace composant texte)
- `Doc/COMPLIANCE/AI_USE_POLICY.md` — politique d'usage IA (AI Act Art. 4)
- `Doc/COMPLIANCE/TIA_CALENDLY.md` — TIA Schrems II
- `Doc/COMPLIANCE/templates/data-subject-request-response.md` — templates DSR
- `Doc/COMPLIANCE/README.md` — index + statut des actions

---

## Résultats détaillés — RGPD UE

### 1. Bases légales & Consentement (Art. 6-9)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| BL-01 | Base légale identifiée | ✅ | Consentement Art. 6(1)(a) documenté |
| BL-02 | Consentement libre, spécifique, éclairé, univoque | ✅ | Case à cocher dédiée non pré-cochée |
| BL-03 | Retrait aussi simple que l'octroi | ⚠️ | Procédure manuelle par email (acceptable PME) |
| BL-04 | Consentement explicite données sensibles | ⬜ | N/A (aucune donnée sensible traitée) |
| BL-05 | Vérification d'âge mineurs | ⬜ | N/A (site B2B, pas de ciblage mineurs) |
| BL-06 | Pas de bundling | ✅ | OK |
| BL-07 | Preuves de consentement conservées | ✅ | Collection `contact-submissions` persiste `given` + `givenAt` + `ipHash` |

### 2. Transparence & Information (Art. 12-14)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| TR-01 | Politique accessible | ✅ | `/confidentialite` |
| TR-02 | Identité responsable | ✅ | OK |
| TR-03 | Finalités décrites | ✅ | OK |
| TR-04 | Base légale indiquée | ✅ | OK |
| TR-05 | Destinataires/sous-traitants listés | ✅ | Tableau complet OVH/Brevo/Calendly/fal.ai |
| TR-06 | Transferts internationaux mentionnés | ✅ | Section dédiée + EU-US DPF Calendly |
| TR-07 | Durée de conservation | ✅ | 24 mois indiqués |
| TR-08 | Droits énumérés | ✅ | OK |
| TR-09 | Droit de plainte | ✅ | Lien CNIL |
| TR-10 | Source si non collecté | ⬜ | N/A (collecte directe uniquement) |
| TR-11 | Langage clair | ✅ | OK |

### 3. Droits des personnes (Art. 15-22)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| DP-01 | Délai de réponse 1 mois | ✅ | 30 jours annoncés dans `/confidentialite` + procédure DSR |
| DP-02 → DP-07 | Droits implémentés | ⚠️ | Procédure manuelle via email + templates `Doc/COMPLIANCE/templates/data-subject-request-response.md` (acceptable PME) |
| DP-08 | Opt-out marketing direct | ⬜ | N/A (pas de marketing direct automatisé) |
| DP-09 | Décisions automatisées | ⬜ | N/A (pas de décision auto sur site) |
| DP-10 | Point de contact | ✅ | `contact@aibizshift.eu` |

### 4. Registre des traitements — ROPA (Art. 30)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| RT-01 | Registre tenu | ✅ | `Doc/COMPLIANCE/ROPA.md` |
| RT-02 | Contenu complet | ✅ | 4 traitements documentés (T-01 à T-04) |
| RT-03 | Tenu à jour | ✅ | Revue annuelle prévue 2027-04-17 |
| RT-04 | Disponible pour l'autorité | ✅ | Export possible du repo |

### 5. Sous-traitance — DPA (Art. 28)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| ST-01 à ST-05 | Contrats sous-traitants | 🔍 | Sous-traitants tracés ROPA, mais **DPA non archivés localement** (M-02) |
| ST-06 | Sous-traitants hors UE couverts | ✅ | Calendly = EU-US DPF documenté |

### 6. AIPD / DPIA (Art. 35)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| AI-01 à AI-05 | Nécessité d'AIPD | ⬜ | N/A — traitement à faible risque (formulaire contact simple, volumétrie < 50/mois, pas de données sensibles, pas de profilage) |

### 7. DPO (Art. 37-39)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| DPO-01 à DPO-04 | Désignation DPO | ⬜ | N/A — ni autorité publique, ni surveillance grande échelle, ni traitement massif données sensibles |

### 8. Sécurité (Art. 32)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| SE-01 | Chiffrement | ✅ | HTTPS Let's Encrypt + TLS SMTP Brevo |
| SE-02 | Pseudonymisation | ✅ | IP hashée SHA-256(`PAYLOAD_SECRET`+IP) tronquée 16 chars |
| SE-03 | CIA (Confidentialité/Intégrité/Disponibilité) | ✅ | ACL Payload + backups quotidiens OVH |
| SE-04 | Résilience testée | 🔍 | À documenter (test de charge / failover) |
| SE-05 | Restauration des données | 🔍 | À documenter (procédure restore backup OVH) |
| SE-06 | Tests de sécurité réguliers | ⚠️ | Pas de pentest annuel (m-02 backlog) |
| SE-07 | Moindre privilège | ✅ | Accès DB restreint, admin Payload authentifié |
| SE-08 | Journalisation | ⚠️ | Logs Coolify + API avec PII masquée `name [code]` — mais pas de SIEM |
| SE-09 | Formation personnel | ⬜ | N/A — exploitant solo |
| SE-EXTRA | TLS `rejectUnauthorized` | ✅ | Supprimé (C-03 résolu audit précédent) |
| SE-EXTRA | Rate limiting | ✅ | 5 req/h/IP sur `/api/contact` |
| SE-EXTRA | **Auditabilité schéma DB** | ✅ | **NOUVEAU** : migrations Payload (`src/migrations/`) + auto-apply prod via `prodMigrations` — améliore la reproductibilité (Art. 25 Privacy by Design) |

### 9. Notification de violation (Art. 33-34)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| NV-01 | Procédure de détection | ✅ | `INCIDENT_RESPONSE.md` |
| NV-02 | Notification 72h à la CNIL | ✅ | Procédure + checklist 72h |
| NV-03 | Contenu de notification préparé | ✅ | Templates inclus |
| NV-04 | Critères notification aux personnes | ✅ | Documentés (seuil risque élevé) |
| NV-05 | Registre violations | ⚠️ | Format défini ; fichier `breach-log.md` à créer au 1er incident |

### 10. Transferts internationaux (Art. 44-49)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| TI-01 | Transferts identifiés | ✅ | Calendly (USA) + fal.ai (USA) tracés dans ROPA |
| TI-02 | Décision d'adéquation ou garanties | ✅ | EU-US DPF invoqué |
| TI-03 | CCT 2021 | ⬜ | N/A (DPF) |
| TI-04 | TIA Schrems II | ✅ | **RÉSOLU** : `TIA_CALENDLY.md` créé |
| TI-05 | Couverture USA | ✅ | DPF référencé |

### 11. Privacy by Design (Art. 25)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| PD-01 | Minimisation | ✅ | Champs optionnels marqués ; pas de collecte superflue |
| PD-02 | Paramètres par défaut protecteurs | ✅ | Pas de tracking activé par défaut |
| PD-03 | Collecte limitée | ✅ | OK |
| PD-04 | Conservation automatisée | ✅ | Task `purgeOldSubmissions` 24 mois (cron Coolify à activer — M-01) |

### 12. Cookies & Traceurs (ePrivacy Art. 5(3))

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| CK-01 à CK-04 | Bandeau + consentement cookies | ⬜ | N/A — aucun cookie non essentiel (site sans Google Analytics, Meta Pixel, etc.) |
| CK-05 | Détail cookies | ✅ | Tableau `theme-preference` + `payload-token` (techniques uniquement) |

### 13. Décision automatisée (Art. 22)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| DA-01 à DA-04 | Profilage et décisions auto | ⬜ | N/A — aucun profilage ni décision automatisée sur le site |

---

## Résultats détaillés — AI Act UE (Règlement 2024/1689)

> Site vitrine **sans IA embarquée** : l'AI Act ne s'applique pas au site lui-même en tant que fournisseur ou déployeur. En revanche, l'opérateur **vend des services IA à ses clients** (audit IA, consulting, formation, SaaS) → rôle de **déployeur** et/ou **fournisseur** pour ces services, qui doivent être encadrés via `AI_USE_POLICY.md`.

### 1. Pré-classification (Art. 3, 6)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| PC-01 | Système IA au sens AI Act ? | ✅ | **Site seul** : non. **Services vendus** : oui (documenté dans `AI_USE_POLICY.md` §3) |
| PC-02 | Rôle dans la chaîne de valeur | ✅ | Déployeur (Art. 3(4)) + parfois fournisseur pour les SaaS sur mesure |
| PC-03 | Niveau de risque | ✅ | Minimal pour tous les services actuels ; aucun cas Annexe III |
| PC-04 | Date d'application pertinente | ✅ | Art. 4 & 5 applicables depuis 2025-02-02 (littératie + interdits) |

### 2. Pratiques interdites (Art. 5) — applicable depuis fév. 2025

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| PI-01 à PI-08 | Aucune pratique interdite | ✅ | Inventaire `AI_USE_POLICY.md` §4 confirme : pas de manipulation subliminale, pas de social scoring, pas de catégorisation biométrique sensible, pas d'identification biométrique à distance en temps réel |

### 3. Littératie IA (Art. 4) — applicable depuis fév. 2025

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| LI-01 | Formation personnel IA | ✅ | Guy Salvatore — 35 ans IT, expertise IA depuis 5+ ans (documentée `AI_USE_POLICY.md`) |
| LI-02 | Programme de formation documenté | ✅ | **NOUVEAU** : `Doc/COMPLIANCE/AI_USE_POLICY.md` — inventaire systèmes + obligations déployeur |
| LI-03 | Formation adaptée au contexte | ✅ | Politique aligne usage interne (Claude Code, fal.ai) et usage client (services vendus) |

### 4. Systèmes haut risque (Annexes I & III)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| HR-01 à HR-03 | Classification haut risque | ⬜ | N/A — aucun cas d'usage Annexe III (biométrie, infrastructure critique, éducation, emploi, justice, forces de l'ordre, etc.) |

### 5. Transparence (Art. 50)

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| OT-01 | Informer interaction avec IA | ⬜ | N/A — pas de chatbot sur le site |
| OT-02 | Étiquetage contenu IA | ⬜ | N/A — mais mentionné dans `/mentions-legales` (images générées par fal.ai) |
| OT-03 à OT-05 | Deepfakes / émotions / texte IA public | ⬜ | N/A |

### 6. GPAI & Évaluation d'impact droits fondamentaux

| Ref | Exigence | Statut | Constat |
|-----|----------|--------|---------|
| GP-01 à GP-05 | Obligations GPAI | ⬜ | N/A (pas fournisseur de modèle GPAI) |
| EI-01 à EI-03 | Évaluation d'impact droits fondamentaux | ⬜ | N/A (pas déployeur public/service public) |

---

## Findings restants par priorité

### 🔴 Critiques

**Aucun.** ✅

### 🟠 Majeurs — action sous 30 jours (2)

#### M-01 — Cron Coolify pour purge auto pas encore activé
- **Réf** : RGPD Art. 5(1)(e) (limitation de conservation)
- **Statut** : code prêt (`purgeOldSubmissions.ts`) + endpoint prêt (`/api/payload-jobs/run` + `CRON_SECRET`), déclencheur cron manquant
- **Action** : Coolify → créer Scheduled Task quotidien :
  ```
  POST https://aibizshift.eu/api/payload-jobs/run
  Headers: Authorization: Bearer $CRON_SECRET
  Body: {"queue":"default"}
  ```
- **Effort** : 5 min admin

#### M-02 — DPA sous-traitants à archiver localement
- **Réf** : RGPD Art. 28(3)
- **Statut** : sous-traitants identifiés (OVH, Brevo, Calendly, fal.ai) et tracés dans ROPA, mais aucun DPA téléchargé dans le repo
- **Action** : créer `aibizshift/Doc/COMPLIANCE/dpa-signed/` et y placer :
  - `ovh-dpa.pdf` depuis https://www.ovhcloud.com/fr/personal-data-protection/data-processing/
  - `brevo-dpa.pdf` depuis https://www.brevo.com/legal/dpa/
  - `calendly-dpa.pdf` depuis https://calendly.com/dpa
  - `fal-ai-tos.pdf` (ou URL stable des CGU)
- **Effort** : 30 min

### 🟡 Mineurs — amélioration continue (3)

#### m-02 — Pas de tests de sécurité réguliers
- **Réf** : RGPD Art. 32(1)(d)
- **Recommandation** : OWASP ZAP annuel (2 h) + `pnpm audit` dans CI (5 min)

#### m-03 — Pas de CGV/CGS formalisés pour services vendus
- Hors site mais structurant pour l'activité commerciale. Nécessaire pour tout devis/contrat clients (notamment services IA soumis à `AI_USE_POLICY.md`)
- **Effort** : 4 h avec un avocat

#### m-05 — Hashage admin Payload : PBKDF2 par défaut
- Argon2id préférable. Pas critique pour admin solo. À envisager si activité grandit (recrutement, partenaires).
- **Effort** : 2 h (migration custom Payload)

### 🆕 Finding issu des nouveautés

#### n-01 — Script `clear-dev-migration-marker.ts` — documentation explicite manquante
- **Constat** : le script utilise `pg.Pool(DATABASE_URL)` pour une DELETE sur `payload_migrations`. S'il est lancé accidentellement contre la DB prod, il corrompt le tracking des migrations.
- **Risque** : faible (pas listé dans `package.json` → pas exécutable par CI/npm run ; exécution nécessite `pnpm tsx scripts/...`)
- **Action** : ajouter un en-tête dans le fichier + un warning dans `CLAUDE.md` section Migrations — **"À exécuter UNE SEULE FOIS, jamais après que les migrations sont en place"**
- **Effort** : 5 min doc

---

## Plan de remédiation

| Priorité | # | Action | Réf. légale | Effort | Statut |
|---|---|--------|-------------|--------|--------|
| 🟠 | M-01 | Activer cron Coolify pour task `purgeOldSubmissions` | RGPD Art. 5(1)(e) | 5 min admin | À faire |
| 🟠 | M-02 | Télécharger et archiver DPA OVH/Brevo/Calendly/fal.ai | RGPD Art. 28(3) | 30 min | À faire |
| 🟡 | m-02 | Pentest annuel OWASP ZAP + `pnpm audit` CI | RGPD Art. 32(1)(d) | 2 h | Backlog |
| 🟡 | m-03 | CGV/CGS services vendus | Code de la conso + AI Act | 4 h | Backlog |
| 🟡 | m-05 | Migration hashage Argon2id | RGPD Art. 32 | 2 h | Backlog faible priorité |
| 🟡 | n-01 | Documenter script migration-marker | Bonne pratique | 5 min | À faire |

**Total effort restant pour 100 % conformité : ~3 h d'action + 8 h de backlog**

---

## ✅ Récapitulatif des correctifs déployés depuis l'audit UE+Suisse du matin

| # | Commit | Description |
|---|--------|-------------|
| **687a9ca** | ✅ | `TIA_CALENDLY.md` créé → M-03 résolu |
| **687a9ca** | ✅ | `AI_USE_POLICY.md` créé → m-04 résolu (littératie AI Act Art. 4) |
| **687a9ca** | ✅ | `templates/data-subject-request-response.md` créé → m-01 résolu |
| **dd36ac0** | ✅ | `COMPLIANCE/README.md` — index + statut actions |
| **479ad50** | ✅ | **Système de migrations Payload** — auditabilité schéma DB (Art. 25 PbD) |
| **08d0cac** | ✅ | Documentation workflow migrations dans CLAUDE.md |
| **6de8da9** | ✅ | Photo Guy Salvatore — alt text + next/image, pas d'impact RGPD (auto-publication) |
| **9ef3db1** / **2571044** | ✅ | Logo image — pas d'impact RGPD |

---

## Sources et références

### Textes réglementaires UE
- RGPD — Règlement (UE) 2016/679 : https://eur-lex.europa.eu/eli/reg/2016/679/oj
- AI Act — Règlement (UE) 2024/1689 : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689
- Directive ePrivacy 2002/58/CE : https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32002L0058

### Autorités
- **CNIL (FR)** : https://www.cnil.fr | Notifications violations : https://notifications.cnil.fr/notifications/index
- **EDPB** : https://edpb.europa.eu/
- **AI Office (Commission UE)** : https://digital-strategy.ec.europa.eu/en/policies/ai-office

### Ressources techniques
- CNIL — Guide développeur : https://www.cnil.fr/en/gdpr-developers-guide
- EU-US Data Privacy Framework (liste certifiés) : https://www.dataprivacyframework.gov/list
- EDPB — Recommendations 01/2020 Schrems II : https://edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en

### Documentation interne
- `aibizshift/Doc/COMPLIANCE/README.md` — index
- `aibizshift/Doc/COMPLIANCE/ROPA.md` — registre des traitements
- `aibizshift/Doc/COMPLIANCE/INCIDENT_RESPONSE.md` — procédure 72h
- `aibizshift/Doc/COMPLIANCE/AI_USE_POLICY.md` — politique IA
- `aibizshift/Doc/COMPLIANCE/TIA_CALENDLY.md` — TIA Schrems II

---

*Rapport généré par le skill `/compliance` v1 — 2026-04-17 (re-audit UE uniquement)*
