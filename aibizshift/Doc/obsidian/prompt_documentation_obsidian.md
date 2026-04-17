Prompt Claude Code — Documentation Obsidian pour AI Biz Shift
Copie-colle ce prompt dans Claude Code, à la racine du projet.

Contexte
Tu es chargé de produire la documentation technique complète du projet AI Biz Shift, un site web basé sur Payload CMS couplé à des pages statiques. Cette documentation sera importée dans Obsidian comme vault.

Mission
Analyser l'intégralité du code source et produire une documentation structurée, fidèle au code réel, dans le dossier doc/obsidian/. Procède par phases et ne passe à la suivante qu'après avoir validé la précédente.

Phase 1 — Exploration (ne rien écrire encore)
Lis package.json, payload.config.ts (ou .js), le README existant et la structure racine du projet
Identifie les versions exactes de Payload, Next.js (ou du framework utilisé) et de la DB
Recense :
toutes les collections Payload
tous les globals
tous les blocks et custom fields
toutes les pages statiques, layouts et routes
les hooks, access control et utilitaires partagés
toutes les variables d'environnement (grep -r "process.env" src/)
Repère les fichiers CI/CD (.github/workflows/, vercel.json, Dockerfile…)
Fais-moi un résumé de ce que tu as trouvé avant d'écrire la moindre note. J'en profite pour valider ou corriger.

Phase 2 — Création de la structure
Crée l'arborescence suivante dans doc/obsidian/ :

doc/obsidian/
├── index.md                          # hub principal du vault
├── 01-architecture/
│   ├── overview.md
│   ├── stack-technique.md
│   └── flux-de-donnees.md
├── 02-configuration/
│   ├── variables-environnement.md
│   ├── payload-config.md
│   └── next-config.md
├── 03-payload/
│   ├── index.md
│   ├── collections/                  # une note par collection
│   ├── globals/                      # une note par global
│   ├── blocks/                       # une note par block
│   └── access-control.md
├── 04-pages/
│   ├── index.md
│   ├── routes.md
│   └── [une note par page ou section]
├── 05-composants/
│   └── [notes pour les composants métier clés]
├── 06-deploiement/
│   ├── build.md
│   ├── ci-cd.md
│   └── hebergement.md
├── 07-workflows/
│   ├── ajouter-une-collection.md
│   ├── creer-une-page.md
│   └── mettre-a-jour-le-contenu.md
└── attachments/                      # images, diagrammes
Phase 3 — Conventions Obsidian (à appliquer partout)
Frontmatter YAML obligatoire en tête de chaque note
---
title: "Titre lisible de la note"
tags: [categorie/sous-categorie, autre-tag]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---
Liens internes
Uniquement des wikilinks : [[nom-du-fichier]] ou [[nom-du-fichier|libellé affiché]]
Jamais de liens markdown [texte](chemin.md) pour la navigation interne
Les liens externes (npm, GitHub, docs officielles) restent en markdown standard
Taxonomie de tags
Payload : payload/collection, payload/global, payload/block, payload/hook, payload/access
Front : page, composant, route
Infra : config, env, ci-cd, deploiement
Méta : workflow, architecture
Images et diagrammes
Tout va dans attachments/
Référence avec ![[nom-fichier.png]]
Pour les schémas d'architecture et les flux, privilégie Mermaid dans des blocs ```mermaid (rendu natif dans Obsidian)
Phase 4 — Contenu attendu par section
index.md — hub principal
Pitch du projet en 3 lignes
Stack en liste
Liens wikilink vers toutes les sections principales
Quickstart : cloner, installer, lancer en local
Liste des workflows les plus courants
01-architecture/
overview.md : schéma Mermaid de l'architecture globale (Payload ↔ DB ↔ pages ↔ assets) + texte explicatif
stack-technique.md : versions exactes tirées de package.json, dépendances majeures, raisons des choix visibles dans le code
flux-de-donnees.md : comment les données passent de Payload aux pages rendues (build time vs runtime, cache, revalidation)
02-configuration/
variables-environnement.md : tableau listant chaque var (nom, rôle, exemple, obligatoire oui/non, utilisée dans)
payload-config.md : structure de payload.config.ts, chaque option expliquée, adapters, plugins
next-config.md (ou équivalent) : options spécifiques, redirects, images, i18n
03-payload/ — une note par collection
Pour chaque collection, fournir :

Slug, labels admin, options
Tableau complet des champs : nom, type, required, validation, valeur par défaut, description
Hooks (beforeChange, afterRead, etc.) avec explication de leur rôle et lien vers le fichier source
Access control (create, read, update, delete) documenté
Relations vers d'autres collections → utilise [[collections/nom-collection]]
Exemple de document JSON représentatif
Extrait de code de la définition, avec le chemin en commentaire : // src/collections/Posts.ts
Même logique pour les globals et les blocks.

04-pages/
routes.md : table de toutes les routes du site
Une note par page ou section importante avec : URL, fichier source, collections Payload consommées (wikilinks), composants clés, mode de rendu (SSG/ISR/SSR)
05-composants/
Focus sur les composants métier et réutilisables majeurs
Props, usage, emplacement
Inutile de documenter chaque micro-composant UI
06-deploiement/
Commande build, étapes, artefacts
Pipeline CI/CD à partir des fichiers réels (.github/workflows/, etc.)
Environnements (dev, staging, prod) et leurs variables spécifiques
07-workflows/
Procédures pas-à-pas pour les tâches récurrentes
Chaque workflow renvoie aux collections/pages concernées via wikilinks
Ex. : « Ajouter une collection » → créer le fichier, l'enregistrer dans payload.config, migrer la DB, régénérer les types
Phase 5 — Règles générales non négociables
Fidélité au code : tout ce que tu documentes doit exister réellement. Si un doute, inspecte le fichier. Ne jamais inventer un champ, un hook ou une route.
Exemples concrets : inclus de vrais extraits de code avec le chemin source en commentaire.
Concision : une note = un sujet. Si une note dépasse ~400 lignes, découpe-la.
Maillage : chaque note contient au minimum 2 wikilinks vers des notes connexes.
Langue : rédige en français.
Pas de doublon : si une info existe déjà ailleurs, fais un wikilink plutôt que de la recopier.
Commits : commite par section (un commit par dossier numéroté) pour que je puisse relire progressivement.
Livrable final
À la racine de doc/obsidian/, ajoute un CHANGELOG.md listant toutes les notes créées, puis donne-moi un résumé en chat avec :

Nombre total de notes générées
Points d'attention ou incohérences détectées dans le code
Sections où tu as manqué d'info et qui mériteraient d'être complétées manuellement par moi
Suggestions d'améliorations du code identifiées au passage (bonus)
Démarrage
Commence par la Phase 1 uniquement et attends ma validation avant de créer la moindre note.