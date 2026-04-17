# Politique d'usage de l'IA — AIBizShift

> **Ref legale** : AI Act UE (Reglement 2024/1689) Art. 4 (litteratie IA, applicable depuis 02.02.2025)
> **Ref complementaire** : nLPD Art. 21 (decisions automatisees) | RGPD Art. 22
> **Derniere revue** : 2026-04-17 | **Prochaine revue** : annuelle ou a chaque nouvelle integration IA
> **Responsable** : Guy Salvatore

---

## 1. Portee

Cette politique documente **toute utilisation d'IA** dans les activites d'AIBizShift :
1. Dans le **site web** aibizshift.eu (front-end / back-end)
2. Dans les **outils internes** utilises par Guy Salvatore
3. Dans les **services vendus** aux clients (audit, consulting, formation, SaaS)

---

## 2. Litteratie IA (Art. 4 AI Act)

**Exigence** : tous les fournisseurs et deployeurs d'IA doivent assurer un niveau suffisant
de litteratie IA de leur personnel et des personnes agissant pour leur compte.

### Etat au 2026-04-17

| Personne | Role | Formation IA |
|----------|------|--------------|
| Guy Salvatore | Fondateur, seul operateur | 35 ans IT, 5+ ans IA/ML, Hackathon n8n 2026, VibeAcademy, expert reconnu |

**Statut** : ✅ conforme nativement compte tenu de l'expertise senior.

### Declencheurs de mise a jour

Cette section doit etre mise a jour a chaque :
- Embauche d'un collaborateur
- Recours a un freelance intervenant sur des livrables IA
- Integration d'un stagiaire
- Rotation de prestataires

Pour chaque nouvelle personne : documenter la formation (interne, certifications externes,
ou auto-formation structuree) avant qu'elle n'opere un systeme IA.

---

## 3. Inventaire des systemes IA utilises

### 3.1 Dans le site aibizshift.eu

| Composant | Utilisation | Classe AI Act | Donnees traitees |
|-----------|-------------|---------------|------------------|
| **Aucun** | Le site ne contient aucun systeme IA embarque (pas de chatbot, pas de generation temps reel, pas de scoring) | N/A | — |

### 3.2 Dans les outils internes (workflows Guy)

| Outil | Fournisseur | Usage | Donnees envoyees | Classe AI Act |
|-------|-------------|-------|------------------|---------------|
| **Claude Code** | Anthropic (USA) | Aide au developpement logiciel | Code source (pas de PII clients) | Risque minimal |
| **ChatGPT / Claude.ai** | OpenAI / Anthropic | Aide redaction, brainstorming | **Anonymise** avant envoi — jamais de PII clients | Risque minimal |
| **fal.ai** | FAL Inc. (USA) | Generation images marketing du site | Prompts textuels descriptifs | Risque minimal |
| **n8n workflows** | Self-hosted | Automatisation interne | Variable selon workflow | A evaluer par cas |

### 3.3 Dans les services vendus aux clients

| Service | IA utilisee | Role Guy | Classe AI Act | Obligations |
|---------|-------------|----------|---------------|-------------|
| **Audit IA site web** | Outil interne base sur LLM (analyse SEO, conversion, copywriting) | **Deployeur** (Art. 3(4)) | Risque limite (Art. 50) si output influence decision client | Informer le client que l'analyse est IA-assistee |
| **Consulting IA** | Conseil, pas de deploiement | Non-deployeur | N/A | Litteratie IA (OK) |
| **Formation IA** | Enseignement, pas de deploiement | Non-deployeur | N/A | Litteratie IA (OK) |
| **SaaS sur mesure** | Variable selon projet | **Fournisseur ou deployeur** selon contrat | A evaluer par projet | Documentation a produire projet par projet |
| **Conciergerie IA locations** | Automatisation communications hoteliers | Deployeur | Risque limite si chatbot visible client (Art. 50) | Informer les voyageurs qu'ils interagissent avec une IA |

---

## 4. Obligations par role

### 4.1 Si Guy agit en tant que DEPLOYEUR (Art. 3(4))

Utilise un systeme IA sous son autorite pour une activite professionnelle.

**Obligations permanentes :**
- ✅ Litteratie IA (Art. 4) — OK
- ✅ Utiliser le systeme conformement aux instructions du fournisseur
- ✅ Exercer un controle humain effectif (Art. 14 pour systemes haut risque)
- ✅ Transparence vis-a-vis des utilisateurs finaux (Art. 50) — chatbot, deepfake, texte genere sur sujet d'interet public

**Actions concretes :**
- Lors de la livraison d'un rapport d'audit : indiquer **"Ce rapport a ete genere avec
  l'assistance d'outils IA et revu par Guy Salvatore"**
- Pour un chatbot deploye chez un client : affichage obligatoire "Vous discutez avec une IA"
- Pour des images generees sur site client : pas d'obligation systematique si decoratif, mais
  documenter dans le DPA projet

### 4.2 Si Guy agit en tant que FOURNISSEUR (Art. 3(3))

Developpe un systeme IA et le met sur le marche sous son nom.

**Exemple** : un SaaS AIBizShift avec IA embarquee vendu a des clients.

**Obligations additionnelles :**
- ⬜ Si **risque limite** (Art. 50) : obligations de transparence
- ⬜ Si **haut risque** (Annexe III) : documentation technique (Art. 11), systeme de gestion
  des risques (Art. 9), gouvernance des donnees (Art. 10), journalisation (Art. 12),
  transparence (Art. 13), controle humain (Art. 14), exactitude/robustesse (Art. 15),
  marquage CE (Art. 48), enregistrement base UE (Art. 49)

**Actions concretes :**
- Chaque nouveau SaaS IA : realiser une **pre-classification** AI Act en debut de projet
- Produire une documentation technique conforme Annexe IV si haut risque
- Integrer les obligations AI Act dans le devis (facturer l'effort conformite)

---

## 5. Pratiques interdites (Art. 5 AI Act) — applicable depuis 02.02.2025

AIBizShift **ne developpe, ne deploie et ne conseille jamais** les usages suivants :

- ❌ Techniques subliminales manipulatrices
- ❌ Exploitation de vulnerabilites (age, handicap, situation socio-economique)
- ❌ Notation sociale
- ❌ Evaluation de risque criminel individuel par profilage seul
- ❌ Scraping facial non cible
- ❌ Reconnaissance d'emotions au travail ou a l'ecole
- ❌ Categorisation biometrique sur caracteristiques sensibles
- ❌ Identification biometrique a distance en temps reel (sauf exceptions legales)

> **Clause contractuelle standard** : tout projet client impliquant l'une de ces pratiques
> sera refuse, meme si juridiquement possible dans le pays cible.

---

## 6. Gouvernance des donnees d'entrainement (Art. 10)

AIBizShift **ne developpe pas ses propres modeles de fondation**. Les LLM utilises
(Claude, GPT) sont fournis par des tiers (Anthropic, OpenAI) qui assurent leur propre
gouvernance des donnees d'entrainement.

### Regles pour les donnees envoyees aux LLM dans les projets clients

| Cas | Regle |
|-----|-------|
| PII (nom, email, adresse, telephone) | **Anonymiser / pseudonymiser** avant envoi |
| Donnees financieres | **Ne jamais envoyer** |
| Donnees de sante | **Interdiction totale** sauf mandat explicite + contrat ad hoc |
| Donnees commerciales sensibles client | **Anonymiser** ou utiliser API avec no-training (OpenAI Enterprise, Anthropic zero-retention) |
| Code source proprietaire client | Utiliser API avec no-training + serveur UE si possible |

---

## 7. Controle humain (Art. 14)

Tout output IA livre a un client ou publie sous la marque AIBizShift est **revu par Guy
Salvatore** avant livraison. Pas de publication / livraison automatique IA-only sans revue.

---

## 8. Droits des personnes affectees (RGPD Art. 22 / nLPD Art. 21)

### Decisions automatisees

AIBizShift ne prend **aucune decision purement automatisee** affectant significativement
une personne (pas de scoring credit, pas de filtrage CV, pas de tarification individuelle
par IA).

### Profilage

**Aucun** profilage a risque eleve au sens Art. 5(f-g) nLPD n'est realise.

Si cette situation change (ex. outil interne de scoring prospects) : **realiser une AIPD**
(Art. 35 RGPD / Art. 22 nLPD) avant deploiement.

---

## 9. Signalement d'incidents graves (Art. 73 AI Act)

Si un systeme IA deploye chez un client ou dans un produit AIBizShift cause :
- Un deces
- Un prejudice grave a la sante
- Une atteinte significative a un droit fondamental
- Un incident majeur lie a une infrastructure critique

**Obligation** : signaler a l'autorite competente (dans chaque Etat membre UE concerne)
sous **15 jours maximum** apres prise de connaissance.

Template et procedure : voir `INCIDENT_RESPONSE.md` (adapter pour incidents IA).

---

## 10. Revue annuelle

| Date | Reviseur | Modifications | Prochaine revue |
|------|----------|---------------|-----------------|
| 2026-04-17 | Guy Salvatore | Creation initiale | 2027-04-17 |
