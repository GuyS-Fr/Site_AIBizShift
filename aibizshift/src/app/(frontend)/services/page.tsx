import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nos Services — AIBizShift | Consulting IA, Sites Web, Formation, Automatisation',
  description:
    "Découvrez nos 10 services pour transformer votre entreprise avec l'IA : consulting, création de sites web, formation, développement SaaS, conciergerie IA, chatbots, marketing automation. Valence, Drôme — France entière.",
  openGraph: {
    title: 'Services AIBizShift — Consultant IA & Automatisation pour PME',
    description:
      "10 services concrets pour automatiser, former et développer votre entreprise grâce à l'IA.",
    url: 'https://aibizshift.eu/services',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'website',
  },
}

const CALENDLY_URL = 'https://calendly.com/guy-salvatore/30min'

export default function ServicesPage() {
  return (
    <>
      {/* SECTION 1 — HERO PAGE SERVICES */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/20 mb-6">
            10 services pour transformer votre entreprise
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Des solutions IA concr&egrave;tes, pas des promesses
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-6 max-w-2xl mx-auto">
            Du diagnostic &agrave; l&apos;impl&eacute;mentation, je vous accompagne &agrave; chaque
            &eacute;tape de votre transformation digitale. Chaque service peut &ecirc;tre
            command&eacute; seul ou combin&eacute; avec les autres.
          </p>
          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              R&eacute;server un appel d&eacute;couverte &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OFFRES PRINCIPALES */}
      <section className="bg-[#FAFAFA] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
            Nos offres principales
          </h2>
          <p className="text-lg text-slate-500 text-center mt-4 max-w-2xl mx-auto">
            Les services les plus demand&eacute;s par nos clients
          </p>

          {/* OFFRE 1 — Consulting IA & Automatisation */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  Consulting IA & Automatisation
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mt-4">
                  Vous perdez du temps sur des t&acirc;ches r&eacute;p&eacute;titives ? Je
                  cartographie vos processus, identifie les gains et mets en place des workflows
                  intelligents qui vous font gagner 10 &agrave; 20 heures par semaine. De
                  l&apos;audit initial &agrave; la mise en production.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Audit de maturit&eacute; IA avec scoring et recommandations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Workflows n8n op&eacute;rationnels (jusqu&apos;&agrave; 40+ par projet)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Int&eacute;grations API (CRM, facturation, emailing)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Documentation technique et formation &agrave; l&apos;utilisation
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                  <span className="text-slate-500">&Agrave; partir de 500&euro;/jour</span>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    En savoir plus &rarr;
                  </a>
                </div>
              </div>
              <div>
                <Image
                  src="/images/service-consulting.png"
                  alt="Consulting IA et automatisation des processus d'entreprise"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* OFFRE 2 — Création & Refonte de Sites Web IA */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/service-website.png"
                  alt="Création de sites web propulsés par l'intelligence artificielle"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  Cr&eacute;ation & Refonte de Sites Web IA
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mt-4">
                  Votre site web ne vous rapporte pas de clients ? Chaque projet d&eacute;marre par
                  un audit marketing automatis&eacute; qui identifie
                  pr&eacute;cis&eacute;ment les probl&egrave;mes. Puis je cr&eacute;e un site
                  moderne, rapide, SEO-optimis&eacute; et h&eacute;berg&eacute; en France — pas sur
                  un cloud am&eacute;ricain.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Audit marketing automatis&eacute; complet (14 sections)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Site professionnel avec blog int&eacute;gr&eacute; et panel admin
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Optimisation SEO on-page et technique
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      H&eacute;bergement souverain RGPD (serveurs fran&ccedil;ais)
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                  <span className="text-slate-500">&Agrave; partir de 1 500&euro;</span>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Demander mon audit gratuit &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* OFFRE 3 — Formation IA & Automatisation */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  Formation IA & Automatisation
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mt-4">
                  Pas besoin d&apos;&ecirc;tre d&eacute;veloppeur pour exploiter l&apos;IA. 4
                  modules progressifs adapt&eacute;s &agrave; tous les profils, du dirigeant qui veut
                  comprendre l&apos;IA au salari&eacute; qui veut automatiser ses t&acirc;ches.
                  Intervention directe ou via votre organisme de formation Qualiopi.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      Tous publics
                    </span>
                    <div className="text-sm font-semibold text-slate-800 mt-2">
                      Module 1 — Comprendre l&apos;IA
                    </div>
                    <div className="text-xs text-slate-500">1/2 journ&eacute;e &middot; Z&eacute;ro pr&eacute;requis</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      Interm&eacute;diaire
                    </span>
                    <div className="text-sm font-semibold text-slate-800 mt-2">
                      Module 2 — Automatiser avec l&apos;IA
                    </div>
                    <div className="text-xs text-slate-500">1 jour &middot; n8n, Airtable</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                      Interm&eacute;diaire+
                    </span>
                    <div className="text-sm font-semibold text-slate-800 mt-2">
                      Module 3 — Cr&eacute;er un agent IA
                    </div>
                    <div className="text-xs text-slate-500">1 jour &middot; No-code</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                      Avanc&eacute;
                    </span>
                    <div className="text-sm font-semibold text-slate-800 mt-2">
                      Module 4 — Vibecoding
                    </div>
                    <div className="text-xs text-slate-500">2 jours &middot; Claude Code</div>
                  </div>
                </div>
                <div className="flex justify-end items-center mt-8 pt-6 border-t border-slate-200">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Demander le programme &rarr;
                  </a>
                </div>
              </div>
              <div>
                <Image
                  src="/images/service-formation.png"
                  alt="Formation à l'intelligence artificielle et à l'automatisation"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* OFFRE 4 — Développement SaaS sur mesure */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/service-saas.png"
                  alt="Développement d'applications SaaS sur mesure"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  D&eacute;veloppement SaaS sur mesure
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mt-4">
                  Vous avez une id&eacute;e d&apos;application mais pas d&apos;&eacute;quipe
                  technique ? Je con&ccedil;ois et d&eacute;veloppe votre produit en mode vibecoding
                  : vous sp&eacute;cifiez fonctionnellement, l&apos;IA impl&eacute;mente sous ma
                  supervision. 35 ans d&apos;exp&eacute;rience AMOA garantissent la qualit&eacute;
                  de la conception.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Sp&eacute;cification fonctionnelle d&eacute;taill&eacute;e
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Application web compl&egrave;te (frontend + backend + BDD)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      Panel d&apos;administration int&eacute;gr&eacute;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">&#10003;</span>
                    <span className="text-slate-600">
                      D&eacute;ploiement sur infrastructure souveraine
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                  <span className="text-slate-500">
                    &Agrave; partir de 5 000&euro; &middot; Forfait projet
                  </span>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    Discuter de mon projet &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OFFRES COMPLÉMENTAIRES */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
            Et aussi...
          </h2>
          <p className="text-lg text-slate-500 text-center mt-4 max-w-2xl mx-auto">
            Des services compl&eacute;mentaires pour aller plus loin
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Card 5 — Conciergerie IA */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Conciergerie IA</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Automatisation compl&egrave;te pour vos locations Airbnb/Booking : agent IA qui
                r&eacute;pond aux voyageurs 24/7, check-in connect&eacute;, pilotage
                &eacute;nerg&eacute;tique intelligent. La seule offre qui combine IA et installation
                domotique.
              </p>
              <div className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100">
                Setup d&egrave;s 1 000&euro; + 80-150&euro;/mois/bien
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
              >
                En savoir plus &rarr;
              </a>
            </div>

            {/* Card 6 — Chatbot IA */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Chatbot IA sur mesure</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Un assistant virtuel sur votre site web qui r&eacute;pond &agrave; vos clients 24/7,
                qualifie vos leads et prend des rendez-vous automatiquement. Entra&icirc;n&eacute;
                sur vos donn&eacute;es, il conna&icirc;t votre entreprise.
              </p>
              <div className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100">
                Setup d&egrave;s 800&euro; + 50-100&euro;/mois
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
              >
                En savoir plus &rarr;
              </a>
            </div>

            {/* Card 7 — Marketing Automation */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-green-500"
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
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Marketing Automation</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                S&eacute;quences email intelligentes, scoring de leads, relances automatiques. Vos
                prospects re&ccedil;oivent le bon message au bon moment, sans que vous leviez le
                petit doigt.
              </p>
              <div className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100">
                Setup d&egrave;s 1 500&euro; + 100-300&euro;/mois
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
              >
                En savoir plus &rarr;
              </a>
            </div>

            {/* Card 8 — Domotique Connectée IA */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Domotique Connect&eacute;e IA</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Votre installation domotique existante devient intelligente : pilotage
                &eacute;nerg&eacute;tique pr&eacute;dictif, sc&eacute;narios adapt&eacute;s
                &agrave; vos habitudes, dashboard de monitoring temps r&eacute;el.
              </p>
              <div className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100">
                Upgrade d&egrave;s 300&euro; + 30-80&euro;/mois
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
              >
                En savoir plus &rarr;
              </a>
            </div>

            {/* Card 9 — Audit de Maturité IA */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Audit de Maturit&eacute; IA</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                En une journ&eacute;e, je cartographie vos processus, score votre maturit&eacute;
                digitale sur 6 dimensions et vous livre une roadmap IA prioris&eacute;e avec ROI
                estim&eacute; par action.
              </p>
              <div className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100">
                Forfait 500-800&euro; &middot; D&eacute;duit si mission sign&eacute;e
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
              >
                En savoir plus &rarr;
              </a>
            </div>

            {/* Card 10 — LinkedIn Growth Engine */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">LinkedIn Growth Engine</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Syst&egrave;me complet de croissance LinkedIn : veille et scoring
                d&apos;influenceurs, g&eacute;n&eacute;ration de posts avec vid&eacute;o IA,
                engagement automatis&eacute;, lead magnets, dashboard de pilotage.
              </p>
              <div className="text-sm text-slate-400 mt-4 pt-4 border-t border-slate-100">
                Setup d&egrave;s 1 500&euro; + 500-1 500&euro;/mois
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-2 inline-block"
              >
                En savoir plus &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMMENT ÇA MARCHE */}
      <section className="bg-[#0F172A] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Comment &ccedil;a marche
          </h2>
          <p className="text-lg text-slate-400 text-center mt-4 max-w-2xl mx-auto">
            Un processus simple en 4 &eacute;tapes
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
            {/* Ligne connectrice desktop */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-slate-600" />

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto relative z-10">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">Appel d&eacute;couverte</h3>
              <p className="text-sm text-slate-400 mt-2">
                30 min pour comprendre vos enjeux, vos outils actuels et vos objectifs. Gratuit,
                sans engagement.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto relative z-10">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">
                Diagnostic & proposition
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Je vous envoie un audit personnalis&eacute; avec une proposition chiffr&eacute;e et
                un planning clair.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto relative z-10">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">Impl&eacute;mentation</h3>
              <p className="text-sm text-slate-400 mt-2">
                Je construis, vous validez. Points d&apos;&eacute;tape r&eacute;guliers, livraison
                it&eacute;rative, z&eacute;ro surprise.
              </p>
            </div>

            <div className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto relative z-10">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">
                Suivi & &eacute;volution
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Formation &agrave; l&apos;utilisation, maintenance, et &eacute;volutions au fil de
                vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA FINAL */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pr&ecirc;t &agrave; passer &agrave; l&apos;action ?
          </h2>
          <p className="text-lg text-blue-100 mt-4">
            R&eacute;servez votre appel d&eacute;couverte gratuit de 30 minutes. On identifie
            ensemble le service le plus adapt&eacute; &agrave; votre situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
            >
              R&eacute;server mon appel gratuit &rarr;
            </a>
            {/* TODO: lien vers page audit */}
            <a
              href="#"
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Voir l&apos;audit gratuit &rarr;
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Pas de commercial, c&apos;est moi qui vous r&eacute;ponds. Pas de spam, promis.
          </p>
        </div>
      </section>
    </>
  )
}
