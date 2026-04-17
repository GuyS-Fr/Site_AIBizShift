# Documentation compliance — AIBizShift

> Cadres reglementaires couverts : **RGPD** (UE 2016/679) + **AI Act** (UE 2024/1689) + **nLPD/FADP** (Suisse, SR 235.1)
> **Score conformite** au 2026-04-17 : **90 %** 🟢 (voir `../../../COMPLIANCE_REPORT.md` a la racine du repo)
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

Au 2026-04-17 (post-audit "/compliance") :

### ✅ Resolu (15 fixes)

Tous les findings critiques + majeurs en code/doc resolus. Voir `COMPLIANCE_REPORT.md`.

### 🟠 En cours (3 actions admin)

- **M-01** : Activer cron Coolify quotidien pour la task `purgeOldSubmissions` (5 min)
- **M-02** : Telecharger les 3 DPA OVH/Brevo/Calendly dans `dpa-signed/` (30 min)
- **M-03** : ✅ TIA_CALENDLY.md cree

### 🟡 Backlog (4 mineurs)

- **m-02** : Pentest annuel OWASP ZAP
- **m-03** : CGV/CGS pour services vendus
- **m-04** : ✅ AI_USE_POLICY.md cree
- **m-05** : Migration Argon2id (faible priorite solo)

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
