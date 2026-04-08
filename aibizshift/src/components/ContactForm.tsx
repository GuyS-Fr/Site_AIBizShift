'use client'

import React, { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const SUBJECTS = [
  'Audit gratuit de mon site web',
  'Consulting IA & Automatisation',
  'Création ou refonte de site web',
  'Formation IA',
  'Développement SaaS sur mesure',
  'Conciergerie IA locations',
  'Autre demande',
]

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (form: HTMLFormElement): boolean => {
    const data = new FormData(form)
    const newErrors: Record<string, string> = {}

    if (!data.get('name')) newErrors.name = 'Ce champ est obligatoire'
    const email = data.get('email') as string
    if (!email) {
      newErrors.email = 'Ce champ est obligatoire'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Adresse email invalide'
    }
    if (!data.get('subject')) newErrors.subject = 'Veuillez choisir un sujet'
    if (!data.get('message')) newErrors.message = 'Ce champ est obligatoire'
    if (!data.get('consent')) newErrors.consent = 'Vous devez accepter pour envoyer le formulaire'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!validate(form)) return

    setFormState('loading')
    setErrorMessage('')

    const data = new FormData(form)
    const body = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      company: data.get('company'),
      subject: data.get('subject'),
      message: data.get('message'),
      consent: data.get('consent') === 'on',
      website: data.get('website'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Erreur lors de l'envoi")
      }

      setFormState('success')
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer ou m\'écrire directement à contact@aibizshift.eu',
      )
      setFormState('error')
    }
  }

  const resetForm = () => {
    setFormState('idle')
    setErrorMessage('')
    setErrors({})
  }

  if (formState === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-semibold text-green-800 mt-4">Message envoy&eacute; !</h3>
        <p className="text-green-700 mt-2">
          Merci pour votre message. Je vous r&eacute;ponds sous 24 heures.
        </p>
        <button
          onClick={resetForm}
          className="text-blue-500 hover:text-blue-700 font-semibold mt-4"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Envoyez-moi un message</h2>

      {formState === 'error' && errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-1.5 block">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom et prénom"
            className={inputClass}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-1.5 block">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="votre@email.com"
            className={inputClass}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-1.5 block">
            T&eacute;l&eacute;phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-1.5 block">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Nom de votre entreprise"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-semibold text-slate-700 mb-1.5 block">
            Sujet *
          </label>
          <select id="subject" name="subject" defaultValue="" className={`${inputClass} appearance-none`}>
            <option value="" disabled>
              Choisir un sujet...
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-1.5 block">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Décrivez votre projet ou votre besoin..."
            className={inputClass}
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-600">
              J&apos;accepte que mes donn&eacute;es soient utilis&eacute;es pour traiter ma demande.
              Elles ne seront jamais partag&eacute;es avec des tiers.
            </span>
          </label>
          {errors.consent && <p className="text-sm text-red-500 mt-1">{errors.consent}</p>}
        </div>

        <button
          type="submit"
          disabled={formState === 'loading'}
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all mt-6 ${
            formState === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {formState === 'loading' ? 'Envoi en cours...' : 'Envoyer mon message'}
        </button>
      </form>
    </div>
  )
}
