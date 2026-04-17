---
title: "Block FormBlock"
tags: [payload/block]
aliases: ["formBlock"]
created: 2026-04-17
updated: 2026-04-17
---

# Block `formBlock`

Source : `src/blocks/Form/config.ts`. Composant : `src/blocks/Form/Component.tsx`.

## Identité

| Propriété | Valeur |
|-----------|--------|
| `slug` | `formBlock` |
| `interfaceName` | `FormBlock` |
| GraphQL singular | `FormBlock` |
| Labels | `Form Block` / `Form Blocks` |
| Utilisé dans | [[collections/pages]] |

## Champs

| Chemin | Type | Requis | Condition | Détail |
|--------|------|--------|-----------|--------|
| `form` | relationship | ✅ | — | `relationTo: 'forms'` (collection injectée par `plugin-form-builder`) |
| `enableIntro` | checkbox | — | — | Active le contenu d'intro |
| `introContent` | richText | — | `enableIntro === true` | Headings h1-h4, FixedToolbar, InlineToolbar |

## Plugin form-builder

Dans [[payload-config]] :

```typescript
formBuilderPlugin({
  fields: { payment: false },
  formOverrides: {
    fields: ({ defaultFields }) => {
      // override Lexical du champ confirmationMessage
    },
  },
}),
```

- Le field `payment` est désactivé (pas de paiement en ligne).
- Le `confirmationMessage` hérite d'un éditeur Lexical avec `FixedToolbar` + `HeadingFeature` h1-h4.

Le plugin ajoute les collections `forms` et `form-submissions` à l'admin.

## Différence avec `/contact`

La page [[contact]] n'utilise **pas** ce block : elle embarque un formulaire custom `<ContactForm />` avec rate limit et pipeline RGPD dédié. `formBlock` est destiné à d'éventuels formulaires secondaires pilotés entièrement depuis l'admin.

## Liens connexes

- [[payload-config]] — configuration du plugin.
- [[collections/pages]]
- [[contact]]
