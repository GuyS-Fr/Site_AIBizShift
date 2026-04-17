# Documentation compliance — AIBizShift

> Cadres reglementaires couverts : **RGPD** (UE 2016/679) + **AI Act** (UE 2024/1689) + **nLPD/FADP** (Suisse, SR 235.1)
> **Score conformite** au 2026-04-17 (re-audit UE) : **92 %** 🟢 — RGPD UE 90 %, AI Act UE 100 % (voir `../../../COMPLIANCE_REPORT.md`)
> **Responsable** : Guy Salvatore — contact@aibizshift.eu

---

## 📂 Contenu de ce dossier

| Fichier | Type | Quand l'utiliser |
|---------|------|-------------------|
| [`ROPA.md`](./ROPA.md) | Registre | Pour repondre a un controle CNIL/PFPDT, lors de l'ajout d'un nouveau traitement, revue annuelle |
| [`INCIDENT_RESPONSE.md`](./INCIDENT_RESPONSE.md) | Procedure | **Des qu'une violation est suspectee** — checklist 72h + templates notification |
| [`TIA_CALENDLY.md`](./TIA_CALENDLY.md) | Analyse | Reference pour le transfert US Calendly — a actualiser annuellement |
| [`AI_USE_POLICY.md`](./AI_USE_POLICY.md) | Politique | A consulter avant integration nouvelle IA + a presenter aux clients exigeants |
| [`templates/data-subject-request-response.md`](./templates/data-subject-request-response.md) | Templates | Quand une personne exerce un droit RGPD/nLPD (acces, effacement, portabilite, etc.) |

---

## 🗂 Documents externes a archiver

A telecharger et placer dans `dpa-signed/` (a creer) :

- [ ] **OVH DPA** : https://www.ovhcloud.com/fr/personal-data-protection/data-processing/
- [ ] **Brevo DPA** : https://www.brevo.com/legal/dpa/
- [ ] **Calendly DPA** : https://calendly.com/dpa

A creer au premier incident :
- [ ] `breach-log.md` — registre des violations (format defini dans INCIDENT_RESPONSE.md)
- [ ] `dsr-log.md` — registre des demandes d'exercice de droits (format defini dans templates/)

---

## 📅 Calendrier de revue

| Document | Frequence | Prochaine revue |
|----------|-----------|-----------------|
| ROPA.md | Annuel ou a chaque nouveau traitement | 2027-04-17 |
| TIA_CALENDLY.md | Annuel + veille jurisprudence Schrems | 2027-04-17 |
| AI_USE_POLICY.md | Annuel ou a chaque embauche / nouvelle integration IA | 2027-04-17 |
| INCIDENT_RESPONSE.md | Annuel + apres chaque incident | 2027-04-17 |
| Templates DSR | Au besoin, a chaque evolution legale | 2027-04-17 |

---

## 🚦 Statut des actions de remediation

Au 2026-04-17 (re-audit UE `/compliance`) :

### ✅ Resolu (19 fixes)

Tous les findings critiques + majeurs en code/doc resolus + correctifs securite + CI. Voir `COMPLIANCE_REPORT.md`.

Ajouts depuis l'audit UE+Suisse du matin :
- **M-03** : ✅ TIA_CALENDLY.md cree
- **m-01** : ✅ Templates DSR crees (`templates/data-subject-request-response.md`)
- **m-04** : ✅ AI_USE_POLICY.md cree (AI Act Art. 4 litteratie)
- **n-01** : ✅ Script `clear-dev-migration-marker.ts` documente (en-tete warning one-shot)
- **m-02 (CI)** : ✅ `.github/workflows/security-audit.yml` — `pnpm audit` automatise (PR + hebdo)
- **Vulns high** : ✅ Next.js 16.2.4 + drizzle-orm override >=0.45.2 (GHSA-q4gf-8mx6-v5v3 + GHSA-gpj5-g38j-94v9 patches)

### 🟠 En cours (2 actions admin)

- **M-01** : Activer cron Coolify quotidien pour la task `purgeOldSubmissions` (5 min)
- **M-02** : Telecharger les DPA OVH/Brevo/Calendly/fal.ai dans `dpa-signed/` (30 min)

### 🟡 Backlog (3 mineurs)

- **m-02 (pentest)** : Pentest annuel OWASP ZAP (complement au `pnpm audit` CI)
- **m-03** : CGV/CGS pour services vendus (avec avocat)
- **m-05** : Migration hashage Argon2id (faible priorite solo)

---

## 🔗 Liens utiles

### Autorites

- **CNIL (FR/UE)** : https://www.cnil.fr | Notification violation : https://notifications.cnil.fr/notifications/index
- **PFPDT (CH)** : https://www.edoeb.admin.ch | Portail violations : https://databreach.edoeb.admin.ch/
- **EDPB (UE)** : https://edpb.europa.eu/

### Ressources

- **Data Privacy Framework** (EU-US et Swiss-US) : https://www.dataprivacyframework.gov/list
- **CNIL — Guide developpeur** : https://www.cnil.fr/fr/la-cnil-publie-un-guide-rgpd-pour-les-developpeurs
- **CNIL — Modele ROPA** : https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement
- **AI Act texte** : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1689
- **nLPD texte FR** : https://www.fedlex.admin.ch/eli/cc/2022/491/fr
