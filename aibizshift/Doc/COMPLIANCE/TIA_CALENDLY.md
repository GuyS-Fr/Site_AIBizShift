# Transfer Impact Assessment (TIA) — Calendly

> **Base legale** : EDPB Recommendations 01/2020 on measures that supplement transfer tools
> (post-arret Schrems II, CJUE C-311/18, 16.07.2020)
> **Ref RGPD** : Art. 44-49 | **Ref nLPD** : Art. 16-18
> **Date du TIA** : 2026-04-17 | **Prochaine revue** : 2027-04-17
> **Responsable** : Guy Salvatore (AIBizShift)

---

## 1. Contexte du transfert

### 1.1 Donnees transferees

Lorsqu'un visiteur du site aibizshift.eu clique sur un lien "Reserver un creneau" vers Calendly :

| Champ | Obligatoire | Finalite |
|-------|-------------|----------|
| Prenom + Nom | Oui | Identification du prospect |
| Adresse email | Oui | Envoi confirmation + rappel |
| Creneau horaire choisi | Oui | Planification |
| Fuseau horaire | Auto-detecte | Conversion horaire |
| Questions pre-reunion (optionnel) | Non | Contexte de la conversation |

**Volumetrie estimee** : 5 a 20 reservations / mois.

### 1.2 Importateur de donnees

| Champ | Valeur |
|-------|--------|
| Raison sociale | Calendly LLC |
| Adresse | 271 17th St NW, Atlanta, GA 30363, USA |
| Pays | Etats-Unis |
| Statut DPF | **EU-US Data Privacy Framework** (certifie depuis 2023) + **Swiss-US DPF** (depuis 15.09.2024) |
| Lien verification DPF | `https://www.dataprivacyframework.gov/list` (rechercher "Calendly") |
| DPA | `https://calendly.com/dpa` |
| Politique de confidentialite | `https://calendly.com/privacy` |
| Certifications | SOC 2 Type II, ISO 27001, CCPA, HIPAA BAA |

### 1.3 Exportateur de donnees

| Champ | Valeur |
|-------|--------|
| Raison sociale | Smarthome Smartelec (EI) |
| Nom commercial | AIBizShift |
| Representant | Guy Salvatore |
| SIRET | 833 914 989 00029 |
| Pays | France |

### 1.4 Mecanisme de transfert invoque

**Art. 45 RGPD / Art. 16 nLPD** — **Decision d'adequation** via :
- **EU-US Data Privacy Framework** (Commission UE, juillet 2023)
- **Swiss-US Data Privacy Framework** (Conseil federal suisse, septembre 2024)

Le DPF fournit un niveau de protection **essentiellement equivalent** au RGPD et a la nLPD
pour les entreprises certifiees, controle par le Department of Commerce US.

---

## 2. Evaluation des risques — Legislation du pays destinataire

### 2.1 Lois americaines d'acces aux donnees

| Loi | Portee | Applicabilite Calendly | Risque |
|-----|--------|------------------------|--------|
| **FISA 702** | Surveillance ciblee de non-US persons par agences de renseignement | Calendly = "electronic communication service provider" ? **Tres peu probable** — pas un provider de telecom, juste SaaS planning | 🟡 Faible |
| **Executive Order 12333** | Collecte hors US | Hors US pas concerne | 🟢 N/A |
| **CLOUD Act** | Acces extra-territorial aux donnees hebergees chez providers US | Oui en theorie | 🟠 Modere |
| **Patriot Act / NSLs** | National Security Letters | En theorie oui pour tout provider US | 🟡 Faible (usage limite) |
| **ECPA / Stored Communications Act** | Protection communications stockees | **Protege** l'utilisateur — exige mandat | 🟢 Protecteur |

### 2.2 Garanties apportees par le DPF (Executive Order 14086 — octobre 2022)

L'Executive Order 14086 du president Biden a introduit les garanties suivantes qui ont
permis l'adoption du DPF :

- **Proportionnalite** : les activites de renseignement doivent etre "necessaires et
  proportionnees" aux objectifs de securite nationale
- **Limitation** : une liste explicite de finalites legitimes est definie
- **Recours** : creation d'un **Data Protection Review Court (DPRC)** independant
  qui peut ordonner la suppression/correction des donnees
- **Supervision** : role renforce de la Civil Liberties Protection Officer

La CJUE n'a pas (encore) invalide le DPF (contrairement au Privacy Shield en 2020).

### 2.3 Activite de Calendly vs lois

Calendly est un service de planification. Les donnees qu'il traite sont :
- Nom, email, creneaux horaires
- **Pas de** contenu de communications (pas de SMS, pas d'appels, pas de messages)
- **Pas de** donnees de localisation GPS
- **Pas de** donnees sensibles (sante, finances, opinions)

> **Conclusion 2.3** : l'exposition de Calendly aux lois d'acces gouvernemental US est **theorique** mais de **faible interet** pour les agences de renseignement compte tenu de la nature des donnees.

---

## 3. Evaluation du risque effectif — Donnees transferees

### 3.1 Sensibilite des donnees

| Categorie | Donnees | Sensibilite |
|-----------|---------|-------------|
| Identite | Prenom + Nom | 🟡 Basse |
| Contact | Email professionnel | 🟡 Basse |
| Comportementale | Horaire choisi | 🟢 Minimale |
| Special Art. 9 | Aucune | 🟢 N/A |

### 3.2 Impact d'une violation

**Scenario :** fuite des donnees de reservation Calendly d'un prospect AIBizShift.

- **Atteinte a la vie privee** : faible (donnees professionnelles deja sur LinkedIn, email pro)
- **Risque de reidentification** : moyen (combinaison nom + email + fait de prospecter un consultant IA)
- **Impact economique** : negligeable pour le prospect
- **Risque reputationnel** : negligeable

> **Conclusion 3.2** : **risque residuel faible** meme en cas d'acces gouvernemental US.

---

## 4. Mesures supplementaires

Conformement aux recommandations EDPB, on identifie les mesures suivantes :

### 4.1 Mesures techniques

| Mesure | Statut | Responsable |
|--------|--------|-------------|
| Chiffrement en transit (TLS 1.3) | ✅ Applique par Calendly | Calendly |
| Chiffrement au repos | ✅ AES-256 | Calendly |
| Pseudonymisation | ⬜ Non applicable (nom/email necessaires a la finalite) | — |
| End-to-end encryption | ⬜ Non applicable au cas d'usage | — |

### 4.2 Mesures organisationnelles

| Mesure | Statut |
|--------|--------|
| Information transparente des personnes (Art. 13 RGPD + 19 nLPD) | ✅ Section 6 de `/confidentialite` |
| Consentement explicite (click volontaire sur lien externe) | ✅ Le visiteur choisit de cliquer sur le lien Calendly |
| Possibilite d'alternative (email direct) | ✅ `contact@aibizshift.eu` propose comme alternative |
| Retention courte chez Calendly | ✅ Parametrable (12 mois par defaut) |
| Revue annuelle du DPF | ✅ Dans ce TIA + ROPA |

### 4.3 Mesures contractuelles

| Mesure | Statut |
|--------|--------|
| DPA Calendly accepte (terms of service) | ✅ Implicite a l'usage, a archiver dans `dpa-signed/` |
| Notification en cas d'acces gouvernemental | ✅ Clause standard DPA Calendly |
| Audit rights | 🟡 Limite pour PME — acceptable via certifications tierces (SOC 2, ISO 27001) |

---

## 5. Analyse finale et decision

### 5.1 Matrice de decision

| Critere | Evaluation |
|---------|------------|
| Base juridique du transfert | Decision d'adequation (DPF) — la plus forte possible Art. 45 |
| Risque juridique US | Faible pour ce cas d'usage (donnees non-sensibles, Calendly peu expose a FISA 702) |
| Risque technique | Faible (chiffrement transit + repos, certifications) |
| Impact potentiel sur les personnes | Negligeable |
| Alternatives europeennes disponibles | Oui (Cal.com, YouCanBook.me auto-hosted) — mais non obligatoire compte tenu du DPF |
| Transparence | Elevee (info dans politique + email confirmation) |

### 5.2 Decision

**Le transfert est JURIDIQUEMENT VALIDE** sur la base de la decision d'adequation EU-US DPF
(et Swiss-US DPF pour les visiteurs suisses).

Aucune mesure supplementaire n'est **obligatoire** au-dela de celles deja en place.

### 5.3 Recommandations de veille

- **Surveillance mensuelle** : verifier que Calendly reste sur la liste DPF active
  (`https://www.dataprivacyframework.gov/list`)
- **Surveillance annuelle** : actualite jurisprudentielle (nouveau Schrems ?)
- **Alternative de secours** : evaluer **Cal.com** (self-hosted FR) comme plan B si le DPF
  etait invalide

---

## 6. Revue

| Date | Reviseur | Modifications | Prochaine revue |
|------|----------|---------------|-----------------|
| 2026-04-17 | Guy Salvatore | Redaction initiale | 2027-04-17 |

---

## Annexe — References

- [EDPB Recommendations 01/2020](https://edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en)
- [EU-US Data Privacy Framework](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/eu-us-data-privacy-framework_en)
- [Arret Schrems II (C-311/18)](https://curia.europa.eu/juris/liste.jsf?num=C-311/18)
- [Executive Order 14086](https://www.whitehouse.gov/briefing-room/presidential-actions/2022/10/07/executive-order-on-enhancing-safeguards-for-united-states-signals-intelligence-activities/)
- [Swiss-US DPF (PFPDT)](https://www.edoeb.admin.ch/edoeb/fr/home/protection-des-donnees/Internet_und_Computer/swiss-us-data-privacy-framework.html)
- [Calendly DPA](https://calendly.com/dpa)
- [Calendly Privacy](https://calendly.com/privacy)
