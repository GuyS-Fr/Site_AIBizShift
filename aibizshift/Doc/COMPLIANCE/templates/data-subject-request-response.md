# Templates — Reponse aux demandes d'exercice de droits

> **Ref legale** : RGPD Art. 12-22 | nLPD Art. 25-29
> **Delai legal de reponse** : 30 jours (1 mois) — extensible 2 mois si complexite (notifier le demandeur)
> **Cout** : gratuit en principe (Art. 12(5) RGPD / Art. 25(6) nLPD)

---

## 0. Procedure interne (a suivre avant de repondre)

### Etape 1 — Verification d'identite

Avant de repondre a toute demande, verifier l'identite du demandeur pour eviter de
divulguer des donnees a un tiers.

**Verification minimale acceptable :**
- L'email du demandeur correspond a l'email present dans la collection `contact-submissions`
- Si doute : demander une piece d'identite (RGPD Art. 12(6))

### Etape 2 — Recherche dans la base

Dans Payload Admin → "Demandes de contact", filtrer par email du demandeur.

```
Admin → Collections → Demandes de contact → Filter: email = <email-demandeur>
```

### Etape 3 — Documenter la demande

Creer une entree dans `aibizshift/Doc/COMPLIANCE/dsr-log.md` (a creer au 1er cas) :

```
## DSR #YYYY-NN

| Champ | Valeur |
|-------|--------|
| Date reception | YYYY-MM-DD |
| Demandeur | Email |
| Type | Acces / Rectification / Effacement / Portabilite / Opposition / Retrait consentement |
| Verification identite | OK / Demandee le YYYY-MM-DD |
| Date reponse | YYYY-MM-DD |
| Action realisee | ... |
| Cloture | YYYY-MM-DD |
```

### Etape 4 — Repondre dans les 30 jours

Utiliser le template adapte ci-dessous.

---

## 1. Template — Droit d'acces (Art. 15 RGPD / Art. 25 nLPD)

```
Objet : Re : Votre demande d'acces a vos donnees personnelles

Madame, Monsieur,

J'ai bien recu votre demande d'acces aux donnees personnelles vous concernant,
recue le [DATE].

Conformement a l'article 15 du RGPD (et a l'article 25 de la nLPD), je vous transmets
ci-dessous l'integralite des donnees que je traite vous concernant :

**1. Categories de donnees traitees**
- Identite : [NOM PRENOM]
- Email : [EMAIL]
- Telephone : [TEL ou "non communique"]
- Entreprise : [SOCIETE ou "non communiquee"]
- Sujet de la demande : [SUJET]
- Message : [MESSAGE]
- Date de soumission : [DATE]

**2. Finalite du traitement**
Reponse a votre demande de contact via le formulaire du site aibizshift.eu.

**3. Base legale**
Votre consentement explicite (article 6.1.a RGPD / article 31 nLPD), donne le
[DATE CONSENTEMENT].

**4. Destinataires**
- Guy Salvatore (responsable du traitement) — usage interne uniquement
- Sous-traitants : OVH (hebergement), Brevo (envoi email)
- Vos donnees ne sont jamais cedees, vendues ou louees a des tiers commerciaux.

**5. Duree de conservation**
24 mois apres notre dernier echange, puis suppression automatique.

**6. Vos autres droits**
- Rectification (article 16 RGPD)
- Effacement (article 17 RGPD)
- Portabilite (article 20 RGPD)
- Opposition (article 21 RGPD)
- Retrait du consentement a tout moment

Pour exercer ces droits : repondez simplement a cet email.

**7. Droit de reclamation**
Vous pouvez introduire une reclamation aupres de :
- CNIL (France/UE) : https://www.cnil.fr
- PFPDT (Suisse) : https://www.edoeb.admin.ch

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

---

## 2. Template — Droit de rectification (Art. 16 RGPD / Art. 32 nLPD)

```
Objet : Re : Votre demande de rectification de donnees

Madame, Monsieur,

J'ai bien recu votre demande de rectification recue le [DATE].

J'ai procede aux modifications suivantes dans nos systemes :

| Champ | Ancienne valeur | Nouvelle valeur |
|-------|-----------------|-----------------|
| [CHAMP] | [AVANT] | [APRES] |

Ces modifications sont effectives depuis le [DATE].

Si vous constatez d'autres erreurs ou inexactitudes, n'hesitez pas a me les
signaler.

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

**Action technique** : dans Payload Admin → Demandes de contact → editer l'enregistrement
correspondant.

---

## 3. Template — Droit a l'effacement (Art. 17 RGPD / Art. 32 nLPD)

```
Objet : Re : Votre demande d'effacement de donnees

Madame, Monsieur,

J'ai bien recu votre demande d'effacement recue le [DATE].

Conformement a l'article 17 du RGPD (et a l'article 32 de la nLPD), j'ai procede
a la suppression definitive de l'integralite des donnees personnelles vous
concernant dans nos systemes :

- Suppression de l'enregistrement dans la base de donnees : [DATE/HEURE]
- Suppression des emails de notification dans notre boite mail : [DATE/HEURE]

Aucune donnee vous concernant ne subsiste dans nos systemes.

Note : si vous nous recontactez via le formulaire, un nouvel enregistrement sera
cree avec votre consentement.

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

**Action technique** :
1. Payload Admin → Demandes de contact → supprimer l'enregistrement
2. Boite mail `contact@aibizshift.eu` → rechercher l'email du demandeur → supprimer definitivement
3. Si le demandeur a utilise Calendly : pas d'effacement automatique possible cote Calendly,
   indiquer au demandeur de contacter directement Calendly (`https://calendly.com/privacy`)

---

## 4. Template — Droit a la portabilite (Art. 20 RGPD / Art. 28 nLPD)

```
Objet : Re : Votre demande de portabilite de donnees

Madame, Monsieur,

J'ai bien recu votre demande de portabilite recue le [DATE].

Vous trouverez ci-joint un export de vos donnees personnelles au format JSON
(structure, lisible par machine) conformement a l'article 20 du RGPD.

[FICHIER JOINT : portability-export-YYYY-MM-DD.json]

Vous pouvez utiliser ce fichier pour transferer vos donnees vers un autre
responsable de traitement.

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

**Action technique** : dans Payload Admin, exporter l'enregistrement en JSON :

```bash
# Via API Payload (CLI) ou Admin → Export
curl -H "Authorization: Bearer <admin-jwt>" \
     "https://aibizshift.eu/api/contact-submissions?where[email][equals]=<email>" \
     > portability-export-$(date +%Y-%m-%d).json
```

---

## 5. Template — Droit d'opposition (Art. 21 RGPD)

```
Objet : Re : Votre opposition au traitement de vos donnees

Madame, Monsieur,

J'ai bien recu votre opposition au traitement de vos donnees personnelles recue
le [DATE].

Je prends acte de votre opposition. Concretement :
- Aucune relance commerciale ne vous sera adressee
- Vos donnees ne seront utilisees que pour repondre a votre demande initiale
  (si encore d'actualite), puis supprimees

Si vous souhaitez l'effacement immediat de vos donnees, faites-le moi savoir.

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

---

## 6. Template — Retrait de consentement (Art. 7(3) RGPD)

```
Objet : Re : Votre retrait de consentement

Madame, Monsieur,

J'ai bien recu votre retrait de consentement recu le [DATE].

Conformement a l'article 7(3) du RGPD, je traite votre retrait avec la meme facilite
que vous l'avez donne. Vos donnees seront supprimees dans les meilleurs delais
(sous 30 jours maximum).

Note : ce retrait n'affecte pas la liceite du traitement realise jusqu'a present
sur la base de votre consentement.

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

**Action technique** : meme procedure que le droit a l'effacement (section 3 ci-dessus).

---

## 7. Cas particulier — Demande non legitime / abusive

Si la demande est manifestement infondee, excessive ou repetitive (Art. 12(5) RGPD) :

```
Objet : Re : Votre demande

Madame, Monsieur,

J'ai bien recu votre demande recue le [DATE].

Apres examen, je suis dans l'incapacite de donner suite a cette demande pour la
raison suivante : [JUSTIFIER — ex: aucune donnee vous concernant n'est presente
dans nos systemes / demande deja satisfaite le X / demande manifestement abusive].

Vous pouvez introduire une reclamation aupres de :
- CNIL (France/UE) : https://www.cnil.fr
- PFPDT (Suisse) : https://www.edoeb.admin.ch

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

---

## 8. Si delai depassement de 30 jours

Si la demande est complexe et necessite plus de 30 jours, **notifier le demandeur dans
les 30 jours initiaux** (Art. 12(3) RGPD) :

```
Objet : Re : Votre demande — extension du delai de reponse

Madame, Monsieur,

J'ai bien recu votre demande recue le [DATE].

Compte tenu de la complexite de votre demande, je vous informe que le delai de
reponse est etendu de [N] mois supplementaires, soit jusqu'au [DATE LIMITE]
(article 12(3) du RGPD).

Motif : [PRECISER].

Je reviendrai vers vous avec une reponse complete dans ce delai.

Cordialement,

Guy Salvatore
AIBizShift — contact@aibizshift.eu
```

---

## Annexe — Aide-memoire delais

| Demande | Delai legal | Source |
|---------|-------------|--------|
| Acces / rectification / effacement / portabilite / opposition | **30 jours** | RGPD Art. 12(3) / nLPD Art. 25(7) |
| Extension possible | +2 mois max si complexite | RGPD Art. 12(3) |
| Notification de violation aux autorites | 72h | RGPD Art. 33 |
| Notification de violation aux personnes | "Sans retard" si risque eleve | RGPD Art. 34 |
