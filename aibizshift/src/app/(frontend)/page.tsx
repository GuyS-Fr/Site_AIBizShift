import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AIBizShift — Consultant IA & Automatisation pour PME | Valence, Drôme',
  description:
    "Consultant IA senior, j'aide les PME et artisans à automatiser leurs processus, créer des sites web performants et se former à l'IA. Audit gratuit. Valence, Drôme — France entière.",
  openGraph: {
    title: 'AIBizShift — Consultant IA & Automatisation pour PME',
    description:
      "Automatisez vos processus, gagnez du temps, générez plus de revenus grâce à l'IA. Audit gratuit 236 pages.",
    url: 'https://aibizshift.eu',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'website',
  },
}

const CALENDLY_URL = 'https://calendly.com/guy-salvatore/30min'

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="Arrière-plan technologique représentant l'intelligence artificielle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0F172A]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transformez votre entreprise avec l&apos;IA — sans jargon, sans complexité
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-6">
                Consultant IA senior et développeur, j&apos;aide les PME et artisans à automatiser
                leurs processus, gagner du temps et générer plus de revenus grâce à
                l&apos;intelligence artificielle.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Réserver mon audit gratuit
                </a>
                <a
                  href="#services"
                  className="border border-slate-400 text-slate-200 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Découvrir nos services
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src="/images/hero-illustration.png"
                alt="Illustration réseau neuronal avec icônes d'entreprises connectées"
                width={800}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-amber-400">35 ans</div>
                <div className="text-sm text-slate-400 mt-1">d&apos;expertise IT</div>
              </div>
              <div>
                <div className="text-xl font-bold text-amber-400">n8n Hackathon</div>
                <div className="text-sm text-slate-400 mt-1">2026</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-amber-400">40+</div>
                <div className="text-sm text-slate-400 mt-1">workflows IA déployés</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-amber-400">100%</div>
                <div className="text-sm text-slate-400 mt-1">souverain RGPD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLÈME / SOLUTION */}
      <section className="bg-[#FAFAFA] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
                Vos concurrents adoptent l&apos;IA. Et vous ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mt-6">
                Pendant que vous passez des heures sur des tâches répétitives — relances clients,
                devis, reporting, réponses emails — vos concurrents automatisent. Le problème
                n&apos;est pas le manque de volonté. C&apos;est le manque de temps, de compétences
                techniques, et de confiance dans des solutions opaques hébergées aux États-Unis.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                C&apos;est exactement là que j&apos;interviens : je traduis vos besoins métier en
                solutions IA concrètes, déployées sur une infrastructure souveraine, avec un
                accompagnement humain de A à Z.
              </p>
            </div>
            <div>
              <Image
                src="/images/before-after.png"
                alt="Illustration avant et après l'automatisation des processus métier"
                width={1200}
                height={600}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section id="services" className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
            Ce que je peux faire pour vous
          </h2>
          <p className="text-lg text-slate-500 text-center mt-4 max-w-2xl mx-auto">
            Des solutions concrètes, adaptées à votre taille et à vos ambitions
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Card 1 — Consulting */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/images/service-consulting.png"
                  alt="Consulting IA et automatisation des processus d'entreprise"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <svg
                  className="w-10 h-10 text-blue-500"
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
                <h3 className="text-xl font-semibold text-slate-800 mt-4">
                  Consulting IA & Automatisation
                </h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Audit de vos processus, identification des gains, et mise en place de workflows
                  intelligents qui vous font gagner 10 à 20 heures par semaine.
                </p>
                <span className="inline-block text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mt-4">
                  Idéal pour : PME qui veulent automatiser sans recruter
                </span>
              </div>
            </div>

            {/* Card 2 — Sites web */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/images/service-website.png"
                  alt="Création de sites web propulsés par l'intelligence artificielle"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <svg
                  className="w-10 h-10 text-blue-500"
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
                <h3 className="text-xl font-semibold text-slate-800 mt-4">
                  Création de sites web IA
                </h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Sites vitrines premium propulsés par l&apos;IA : design engageant, SEO optimisé,
                  hébergement souverain. Chaque projet démarre par un audit marketing automatisé de
                  votre présence en ligne.
                </p>
                <span className="inline-block text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mt-4">
                  Idéal pour : Artisans, commerces et professions libérales
                </span>
              </div>
            </div>

            {/* Card 3 — Formation */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/images/service-formation.png"
                  alt="Formation à l'intelligence artificielle et à l'automatisation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <svg
                  className="w-10 h-10 text-blue-500"
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
                <h3 className="text-xl font-semibold text-slate-800 mt-4">
                  Formation IA & Automatisation
                </h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  4 modules progressifs pour tous les profils : de la découverte de l&apos;IA au
                  vibecoding. En direct ou via des organismes de formation certifiés Qualiopi.
                </p>
                <span className="inline-block text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mt-4">
                  Idéal pour : Dirigeants, salariés, indépendants, reconversions
                </span>
              </div>
            </div>

            {/* Card 4 — SaaS */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/images/service-saas.png"
                  alt="Développement d'applications SaaS sur mesure"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <svg
                  className="w-10 h-10 text-blue-500"
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
                <h3 className="text-xl font-semibold text-slate-800 mt-4">
                  Développement SaaS sur mesure
                </h3>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Conception et développement d&apos;applications web complètes en mode vibecoding.
                  Vous spécifiez, l&apos;IA implémente sous ma supervision experte.
                </p>
                <span className="inline-block text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mt-4">
                  Idéal pour : Startups, PME innovantes, porteurs de projet
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/services"
              className="text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors"
            >
              Voir tous nos services &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PREUVE SOCIALE / CRÉDIBILITÉ */}
      <section className="bg-[#0F172A] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Un parcours qui fait la différence
          </h2>
          <p className="text-lg text-slate-400 text-center mt-4 max-w-2xl mx-auto">
            Pas un consultant IA de plus — un professionnel qui construit ce qu&apos;il recommande
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 — Expertise terrain */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mt-5">Expertise terrain</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                35 ans chez Orange/France Telecom : architecte SI, consultant CRM, missions
                internationales (Éthiopie, Côte d&apos;Ivoire, Suisse). Je parle le langage des
                entreprises parce que j&apos;en viens.
              </p>
            </div>

            {/* Card 2 — Builder */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mt-5">Builder, pas théoricien</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                Je ne fais pas que conseiller, je construis. OnPulse, ma plateforme SaaS éducative,
                est développée avec la même stack que je propose à mes clients : Next.js, TypeScript,
                infrastructure souveraine.
              </p>
            </div>

            {/* Card 3 — Souveraineté */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mt-5">Souveraineté numérique</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">
                Toutes les solutions sont hébergées en France, sur des serveurs européens, conformes
                RGPD. Pas de cloud américain, pas de dépendance à des plateformes tierces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — AUDIT GRATUIT CTA */}
      <section id="audit" className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Votre site web perd des clients. Je peux vous le prouver.
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mt-6">
                En 15 minutes, mon outil d&apos;analyse IA génère un rapport complet de 236 pages
                sur votre présence digitale : SEO, conversion, copywriting, positionnement
                concurrentiel. Vous recevez la synthèse avec des recommandations actionnables —
                gratuitement, sans engagement.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Demander mon audit gratuit &rarr;
              </a>
              <div className="flex flex-wrap gap-6 mt-6 text-sm text-blue-200">
                <span>&#10003; Gratuit</span>
                <span>&#10003; Sans engagement</span>
                <span>&#10003; Résultats en 24h</span>
              </div>
            </div>
            <div>
              <Image
                src="/images/audit-report-mockup.png"
                alt="Aperçu du rapport d'audit digital de 236 pages généré par IA"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto -rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FOOTER */}
      <footer className="bg-[#0F172A] border-t border-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-bold text-white">AIBizShift</div>
              <div className="text-slate-400 mt-2">Guy Salvatore</div>
              <div className="text-slate-400">Consultant IA & Automatisation</div>
              <div className="text-slate-500 mt-4 text-sm">Portes-lès-Valence (Drôme)</div>
              <div className="text-slate-500 text-sm">Interventions France entière</div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Navigation
              </div>
              <nav className="flex flex-col gap-2">
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
                {/* TODO: remplacer # par la vraie URL quand la page Formations sera créée */}
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Formations
                </a>
                {/* TODO: remplacer # par la vraie URL quand la page Portfolio sera créée */}
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </a>
                <a href="/posts" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
                {/* TODO: remplacer # par la vraie URL quand la page À propos sera créée */}
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  À propos
                </a>
              </nav>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Services
              </div>
              <nav className="flex flex-col gap-2">
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Consulting IA
                </a>
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Sites web
                </a>
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Formation
                </a>
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  SaaS sur mesure
                </a>
                <a href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Conciergerie IA
                </a>
              </nav>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Contact
              </div>
              <a
                href="mailto:contact@aibizshift.eu"
                className="text-slate-400 hover:text-white transition-colors"
              >
                contact@aibizshift.eu
              </a>
              <a
                href="https://www.linkedin.com/in/guy-salvatore/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white mt-2 transition-colors"
              >
                LinkedIn &rarr;
              </a>
              <a
                href="https://www.malt.fr/profile/guysalvatore"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white mt-2 transition-colors"
              >
                Malt &rarr;
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                Audit gratuit &rarr;
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              &copy; 2026 AIBizShift — Hébergé en France
            </div>
            <div className="flex gap-6">
              {/* TODO: remplacer # par la vraie URL quand la page Mentions légales sera créée */}
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Mentions légales
              </a>
              {/* TODO: remplacer # par la vraie URL quand la page Politique de confidentialité sera créée */}
              <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
