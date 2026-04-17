---
title: "Payload — Hub"
tags: [payload/collection, payload/global, payload/block]
aliases: []
created: 2026-04-17
updated: 2026-04-17
---

# Payload — Hub

Point d'entrée pour tout ce qui concerne Payload CMS dans le projet. Configuration globale : [[payload-config]].

## Collections

- [[collections/pages]] — pages CMS avec layout builder (hero + blocks)
- [[collections/posts]] — blog avec éditeur Lexical + blocks inline
- [[collections/media]] — assets image/vidéo uploadés, 7 tailles générées
- [[collections/categories]] — taxonomie des posts, nested docs
- [[collections/users]] — comptes admin (JWT)
- [[collections/contact-submissions]] — demandes du formulaire `/contact` (RGPD)

## Globals

- [[globals/header]] — navigation principale (max 6 liens)
- [[globals/footer]] — pied de page (max 6 liens, filtre `/admin`)

## Blocks (layout builder / richText)

Blocks de **Pages** (`layout`) :

- [[blocks/call-to-action]]
- [[blocks/content]]
- [[blocks/media-block]]
- [[blocks/archive]]
- [[blocks/form]]

Blocks de **Posts** (inline dans le richText Lexical) :

- [[blocks/banner]]
- [[blocks/code]]
- [[blocks/media-block]] (partagé avec Pages)

## Accès & sécurité

- [[access-control]] — helpers `authenticated`, `authenticatedOrPublished`, `anyone`.

## Voir aussi

- [[payload-config]] — configuration racine et plugins.
- [[flux-de-donnees]] — comment les données remontent jusqu'aux pages.
