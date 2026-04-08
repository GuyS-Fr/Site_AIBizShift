import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — AIBizShift | Consultant IA & Automatisation | Valence, Drôme',
  description:
    'Contactez Guy Salvatore, consultant IA & automatisation pour PME. Audit gratuit, devis personnalisé. Portes-lès-Valence, Drôme — interventions France entière.',
  openGraph: {
    title: 'Contactez AIBizShift — Consultant IA pour PME',
    description: 'Formulaire de contact, prise de RDV, audit gratuit. Réponse sous 24h.',
    url: 'https://aibizshift.eu/contact',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'website',
  },
}

const CALENDLY_URL = 'https://calendly.com/guy-salvatore/30min'

export default function ContactPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-[#0F172A] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Une question, un projet, un besoin d&apos;audit ? Remplissez le formulaire ci-dessous
            ou r&eacute;servez directement un cr&eacute;neau de 30 minutes.
          </p>
        </div>
      </section>

      {/* SECTION 2 — CONTENU */}
      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Colonne gauche — Formulaire */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            {/* Colonne droite — Informations */}
            <div className="md:col-span-2 space-y-8">
              {/* Bloc 1 — Calendly */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm">
                <svg
                  className="w-10 h-10 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-slate-800">
                  Pr&eacute;f&eacute;rez un appel ?
                </h3>
                <p className="text-slate-600 mt-2">
                  R&eacute;servez directement un cr&eacute;neau de 30 minutes. C&apos;est gratuit,
                  sans engagement, et c&apos;est moi qui vous appelle.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all text-sm"
                >
                  R&eacute;server un cr&eacute;neau &rarr;
                </a>
              </div>

              {/* Bloc 2 — Coordonnées */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Coordonn&eacute;es
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-slate-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href="mailto:contact@aibizshift.eu"
                      className="text-slate-600 hover:text-blue-500 transition-colors"
                    >
                      contact@aibizshift.eu
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-slate-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span className="text-slate-600">Portes-l&egrave;s-Valence (Dr&ocirc;me)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-slate-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                    <span className="text-slate-600">Interventions France enti&egrave;re</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/guy-salvatore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.malt.fr/profile/guysalvatore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Malt
                  </a>
                </div>
              </div>

              {/* Bloc 3 — Audit gratuit */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold">Audit gratuit</h3>
                <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                  Mon outil IA analyse votre site web et g&eacute;n&egrave;re un rapport de 236
                  pages : SEO, conversion, copywriting. Gratuit, sans engagement.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                >
                  Demander mon audit &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
