import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio \u2014 AIBizShift | Projets IA, Sites Web, Automatisation',
  description:
    "D\u00e9couvrez les projets r\u00e9alis\u00e9s par AIBizShift : plateforme SaaS OnPulse, sites web, workflows d'automatisation, chatbots IA. Valence, Dr\u00f4me.",
}

const CALENDLY_URL = 'https://calendly.com/guy-salvatore/30min'

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
      {children}
    </span>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Ce que je construis</h1>
          <p className="text-lg text-slate-300 leading-relaxed mt-6 max-w-2xl mx-auto">
            Chaque projet est con&ccedil;u, d&eacute;velopp&eacute; et d&eacute;ploy&eacute; par mes
            soins. Pas de sous-traitance, pas de template &mdash; du sur-mesure avec les meilleurs
            outils IA.
          </p>
        </div>
      </section>

      {/* PROJETS */}
      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* PROJET 1 — OnPulse */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm mt-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-slate-700 min-h-[16rem] flex items-center justify-center">
                <span className="text-slate-400 text-sm">Capture OnPulse &agrave; venir</span>
              </div>
              <div className="p-8 md:p-10">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  En d&eacute;veloppement &mdash; 80%
                </span>
                <h2 className="text-2xl font-semibold text-slate-800 mt-4">
                  OnPulse &mdash; Plateforme SaaS &eacute;ducative pour ESATs
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Application web de quiz vid&eacute;o pour l&apos;&eacute;valuation des
                  comp&eacute;tences dans les ESATs (&eacute;tablissements et services d&apos;aide
                  par le travail). Les travailleurs en situation de handicap visionnent des
                  vid&eacute;os m&eacute;tier et r&eacute;pondent &agrave; des quiz adaptatifs. Les
                  moniteurs suivent les progr&egrave;s en temps r&eacute;el via un dashboard.
                </p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Next.js 15</TechBadge>
                    <TechBadge>React 19</TechBadge>
                    <TechBadge>TypeScript</TechBadge>
                    <TechBadge>Prisma</TechBadge>
                    <TechBadge>Supabase</TechBadge>
                    <TechBadge>fal.ai</TechBadge>
                    <TechBadge>Coolify</TechBadge>
                    <TechBadge>Scaleway</TechBadge>
                  </div>
                </div>
                <a
                  href="https://onpulse.aibizshift.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Voir le projet &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* PROJET 2 — AIBizShift.eu */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm mt-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 order-2 md:order-1">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  En ligne
                </span>
                <h2 className="text-2xl font-semibold text-slate-800 mt-4">
                  AIBizShift.eu &mdash; Site vitrine consultant IA
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Mon propre site web, con&ccedil;u et d&eacute;velopp&eacute; en vibecoding avec
                  Claude Code. Design responsive, SEO optimis&eacute;, formulaire de contact avec
                  envoi SMTP, h&eacute;berg&eacute; sur infrastructure souveraine. Le site que vous
                  consultez en ce moment.
                </p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>Next.js 16</TechBadge>
                    <TechBadge>Payload CMS</TechBadge>
                    <TechBadge>Tailwind CSS</TechBadge>
                    <TechBadge>PostgreSQL</TechBadge>
                    <TechBadge>Coolify</TechBadge>
                    <TechBadge>Scaleway</TechBadge>
                  </div>
                </div>
                <span className="inline-block mt-6 text-slate-400">
                  Vous y &ecirc;tes d&eacute;j&agrave;&nbsp;!
                </span>
              </div>
              <div className="bg-slate-700 min-h-[16rem] flex items-center justify-center order-1 md:order-2">
                <span className="text-slate-400 text-sm">Capture du site &agrave; venir</span>
              </div>
            </div>
          </div>

          {/* PROJET 3 — Workflows n8n */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm mt-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-slate-700 min-h-[16rem] flex items-center justify-center">
                <span className="text-slate-400 text-sm">Capture &agrave; venir</span>
              </div>
              <div className="p-8 md:p-10">
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                  En production
                </span>
                <h2 className="text-2xl font-semibold text-slate-800 mt-4">
                  40+ Workflows d&apos;automatisation IA
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Conception et d&eacute;ploiement de workflows intelligents avec n8n&nbsp;: relances
                  clients automatis&eacute;es, scraping de donn&eacute;es, g&eacute;n&eacute;ration
                  de contenu, int&eacute;grations CRM, notifications conditionnelles, pipelines de
                  traitement de donn&eacute;es. Chaque workflow est document&eacute;, test&eacute; et
                  monitor&eacute;.
                </p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>n8n</TechBadge>
                    <TechBadge>Airtable</TechBadge>
                    <TechBadge>Brevo</TechBadge>
                    <TechBadge>OpenAI API</TechBadge>
                    <TechBadge>Supabase</TechBadge>
                    <TechBadge>Webhooks</TechBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJET 4 — Audit Marketing */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm mt-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 order-2 md:order-1">
                <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                  Outil interne
                </span>
                <h2 className="text-2xl font-semibold text-slate-800 mt-4">
                  Audit Marketing IA &mdash; Rapport complet
                </h2>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Outil d&apos;analyse automatis&eacute; qui g&eacute;n&egrave;re un rapport complet
                  sur la pr&eacute;sence digitale d&apos;une entreprise&nbsp;: SEO
                  technique, performance web, copywriting, UX, positionnement concurrentiel,
                  recommandations prioris&eacute;es. Utilis&eacute; comme lead magnet pour
                  l&apos;acquisition de clients.
                </p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-500 uppercase mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge>IA g&eacute;n&eacute;rative</TechBadge>
                    <TechBadge>Web scraping</TechBadge>
                    <TechBadge>PDF</TechBadge>
                    <TechBadge>Automatisation</TechBadge>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden min-h-[16rem] order-1 md:order-2">
                <Image
                  src="/images/audit-report-mockup.png"
                  alt="Aper&ccedil;u du rapport d'audit digital"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Un projet en t&ecirc;te&nbsp;?
          </h2>
          <p className="text-lg text-blue-100 mt-4">
            Que ce soit un site web, une application SaaS, un chatbot ou un workflow
            d&apos;automatisation &mdash; parlons-en.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
            >
              R&eacute;server un appel gratuit &rarr;
            </a>
            <a
              href="/services"
              className="border border-white/50 text-white hover:bg-white/10 font-semibold px-10 py-5 rounded-xl text-lg transition-all"
            >
              Voir nos services &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
