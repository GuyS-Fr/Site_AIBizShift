# Procedure de reponse aux violations de donnees

> **Reference** : RGPD Art. 33-34 (UE) | nLPD Art. 24 + OPDo Art. 15 (Suisse)
> **Responsable de l'execution** : Guy Salvatore
> **Derniere revue** : 2026-04-17 | **A reviser** : annuel ou apres incident

---

## Definitions

> **Violation de donnees personnelles** (Art. 4(12) RGPD) : violation de la securite entrainant, de maniere accidentelle ou illicite, **destruction**, **perte**, **alteration**, **divulgation non autorisee** ou **acces** a des donnees personnelles.

3 types :
- **Confidentialite** : divulgation/acces non autorise
- **Integrite** : alteration non autorisee
- **Disponibilite** : perte/inaccessibilite

---

## Delais legaux

| Cadre | Notification autorite | Notification personnes |
|-------|----------------------|------------------------|
| **RGPD UE** | **72 heures** apres prise de connaissance (Art. 33) | "Sans retard injustifie" si **risque eleve** (Art. 34) |
| **nLPD Suisse** | "Des que possible" (Art. 24) | Si necessaire pour la protection (Art. 24(2)) |

> **Regle interne AIBizShift** : on applique le delai le plus strict = **72h pour CNIL ET PFPDT**.

---

## Workflow

### Phase 1 — Detection (T+0)

**Sources possibles :**
- Alerte Coolify (downtime, erreur applicative)
- Alerte OVH (intrusion, acces non autorise)
- Alerte Brevo (compromission SMTP, fuite emails)
- Alerte Calendly (compromission compte)
- Signalement utilisateur ou sous-traitant
- Decouverte interne (audit, log review)

**Action immediate** : noter heure de prise de connaissance dans `Doc/COMPLIANCE/breach-log.md`.

### Phase 2 — Confinement (T+0 a T+4h)

1. **Couper l'acces** au systeme compromis (mode maintenance Coolify)
2. **Changer les mots de passe** : Payload admin, OVH, Brevo, Calendly, GitHub, base de donnees
3. **Isoler les sauvegardes** (eviter reinfection)
4. **Geler les logs** pour preservation des preuves

### Phase 3 — Evaluation (T+4h a T+24h)

Remplir la **fiche d'evaluation** :

| Critere | Reponse |
|---------|---------|
| Quoi ? (nature) | _Confidentialite / Integrite / Disponibilite_ |
| Combien ? (volumetrie) | _Nombre de personnes affectees_ |
| Qui ? (categories de personnes) | _Prospects, admin, etc._ |
| Quoi ? (categories de donnees) | _Email, nom, message ; donnees sensibles ?_ |
| Comment ? (cause) | _Intrusion, erreur humaine, defaillance technique_ |
| Quand ? (chronologie) | _Date debut, date detection_ |
| Ou ? (systeme) | _Site web, DB, email, etc._ |
| **Niveau de risque** | _Faible / Modere / Eleve_ |

**Criteres de risque eleve** (=> notification aux personnes) :
- Donnees sensibles compromises (sante, finances, opinions)
- Vol d'identite possible
- Atteinte a la reputation
- Pertes financieres
- Volumetrie significative (> 100 personnes)

### Phase 4 — Notification autorites (T+24h a T+72h)

#### A — CNIL (France/UE) — **OBLIGATOIRE sous 72h**

URL : https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles

Teleservice direct : https://notifications.cnil.fr/notifications/index

**Contenu requis (Art. 33(3))** :
1. Description de la nature (categories et nombre approximatif de personnes/enregistrements)
2. Coordonnees du responsable (Guy Salvatore, contact@aibizshift.eu)
3. Consequences probables
4. Mesures prises ou proposees

> Si toutes les infos ne sont pas dispo a 72h : **notification partielle** + completer ulterieurement (Art. 33(4))

#### B — PFPDT (Suisse) — **OBLIGATOIRE des que possible**

Portail DataReg : https://databreach.edoeb.admin.ch/

**Contenu requis (Art. 24 nLPD + OPDo Art. 15)** :
1. Nature de la violation
2. Categories et nombre approximatif de personnes
3. Consequences pour les personnes
4. Mesures prises ou proposees
5. Personne de contact

### Phase 5 — Notification aux personnes (si risque eleve)

**Conditions de dispense** (Art. 34(3) RGPD) :
- Donnees chiffrees rendues incomprehensibles
- Mesures prises rendant le risque non probable
- Effort disproportionne (=> communication publique acceptable)

**Template d'email aux personnes affectees** :

```
Objet : Information importante concernant vos donnees personnelles

Madame, Monsieur,

Je vous informe qu'une violation de donnees personnelles a affecte le site
aibizshift.eu le [DATE].

Nature de l'incident : [DESCRIPTION]
Donnees concernees : [LISTE]
Consequences possibles : [LISTE]
Mesures prises : [LISTE]

Vous disposez des droits suivants :
- Acces, rectification, effacement de vos donnees
- Reclamation aupres de la CNIL (cnil.fr) ou du PFPDT (edoeb.admin.ch)

Pour toute question : contact@aibizshift.eu

Je vous prie d'accepter mes excuses pour cet incident.

Guy Salvatore — AIBizShift
```

### Phase 6 — Documentation interne

Toute violation, **meme sans notification autorite**, doit etre tracee dans :
`Doc/COMPLIANCE/breach-log.md`

Format :
```
## Incident #YYYY-NN

| Champ | Valeur |
|-------|--------|
| Date detection | YYYY-MM-DD HH:MM TZ |
| Date debut estimee | YYYY-MM-DD |
| Nature | Confidentialite / Integrite / Disponibilite |
| Cause racine | ... |
| Volumetrie | N personnes |
| Donnees compromises | ... |
| Sous-traitants impliques | ... |
| Notification CNIL | Oui/Non/Date/Reference |
| Notification PFPDT | Oui/Non/Date/Reference |
| Notification personnes | Oui/Non/Date |
| Mesures correctives | ... |
| Cloture | YYYY-MM-DD |
| Lecons apprises | ... |
```

### Phase 7 — Post-incident (T+30 jours)

1. **Retrospective** : root cause analysis, gap analysis
2. **Mise a jour ROPA** si nouveau traitement decouvert
3. **Mise a jour mesures de securite** dans le code
4. **Test de la procedure** : simulation a froid annuelle
5. **Formation** : si embauche, integrer ce document dans onboarding

---

## Contacts d'urgence

| Acteur | Coordonnees | Quand |
|--------|-------------|-------|
| **OVH support** | 1007 (FR) ou ovhcloud.com/manager | Intrusion serveur, attaque DDoS |
| **Brevo support** | https://www.brevo.com/contact/ | Compromission SMTP, fuite emails |
| **Calendly security** | security@calendly.com | Compromission compte ou sous-traitant |
| **CNIL** | 01 53 73 22 22 | Information / clarification procedure |
| **PFPDT** | +41 58 462 43 95 | Information / clarification procedure |
| **CERT-FR (ANSSI)** | cert-fr.cossi@ssi.gouv.fr | Incident majeur cyber |

---

## Annexe — Checklist 72h

A utiliser des l'instant ou un incident est suspecte.

```
[ ] T+0    : Heure de prise de connaissance notee dans breach-log.md
[ ] T+1h   : Site en mode maintenance (Coolify)
[ ] T+1h   : Mots de passe critiques rotates (Payload, OVH, Brevo, GH)
[ ] T+4h   : Cause racine identifiee (au moins l'hypothese principale)
[ ] T+8h   : Volumetrie estimee
[ ] T+12h  : Categories de donnees compromises listees
[ ] T+24h  : Niveau de risque determine (Faible/Modere/Eleve)
[ ] T+24h  : Decision : notification autorites necessaire ?
[ ] T+24h  : Decision : notification personnes necessaire ?
[ ] T+48h  : Brouillon notification CNIL + PFPDT prepare
[ ] T+72h  : Notification CNIL envoyee (teleservice)
[ ] T+72h  : Notification PFPDT envoyee (DataReg)
[ ] T+5j   : Notification personnes envoyee (si risque eleve)
[ ] T+7j   : Site remis en ligne avec correctifs
[ ] T+30j  : Retrospective + mise a jour ROPA + procedure
```
