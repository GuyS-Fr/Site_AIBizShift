import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: {
    singular: 'Demande de contact',
    plural: 'Demandes de contact',
  },
  access: {
    admin: authenticated,
    create: () => true,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'subject', 'createdAt'],
    useAsTitle: 'name',
    description:
      'Demandes envoyees via le formulaire /contact. Conservation 24 mois (purge automatique).',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      index: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      type: 'group',
      name: 'consent',
      label: 'Consentement RGPD',
      fields: [
        {
          name: 'given',
          type: 'checkbox',
          required: true,
          label: 'Consentement explicite donne',
        },
        {
          name: 'givenAt',
          type: 'date',
          required: true,
          admin: {
            date: { pickerAppearance: 'dayAndTime' },
          },
        },
        {
          name: 'ipHash',
          type: 'text',
          label: 'IP pseudonymisee (SHA-256 + sel)',
          admin: {
            description:
              'Hash de l adresse IP pour traçabilite sans stockage de PII brute (RGPD Art. 32).',
            readOnly: true,
          },
        },
      ],
    },
  ],
  timestamps: true,
}
