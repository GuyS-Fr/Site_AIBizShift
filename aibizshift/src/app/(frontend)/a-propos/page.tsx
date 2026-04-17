import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '\u00c0 propos \u2014 Guy Salvatore | AIBizShift \u2014 Consultant IA & Automatisation',
  description:
    "D\u00e9couvrez le parcours de Guy Salvatore : 35 ans chez Orange/France Telecom, architecte SI, consultant CRM international, aujourd'hui consultant IA & d\u00e9veloppeur pour PME. Valence, Dr\u00f4me.",
}

const CALENDLY_URL = 'https://calendly.com/guy-salvatore/30min'

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                De Orange &agrave; l&apos;IA&nbsp;: 35 ans &agrave; r&eacute;soudre des
                probl&egrave;mes complexes
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mt-6">
                Je suis Guy Salvatore. Consultant IA, d&eacute;veloppeur et formateur. Apr&egrave;s
                35 ans chez Orange, je mets mon exp&eacute;rience au service des PME qui veulent
                grandir avec l&apos;intelligence artificielle.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative h-80 w-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/guy-salvatore.jpg"
                  alt="Guy Salvatore, consultant IA et automatisation"
                  fill
                  sizes="256px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — MON PARCOURS */}
      <section className="bg-[#FAFAFA] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-8">
            Un parcours atypique
          </h2>
          <div className="text-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              Ma carri&egrave;re commence en 1983 chez France Telecom, avant m&ecirc;me
              qu&apos;Internet n&apos;existe. Pendant 35 ans, j&apos;&eacute;volue dans
              l&apos;univers des syst&egrave;mes d&apos;information, du CRM et de la transformation
              digitale. D&apos;abord technicien, puis analyste fonctionnel, architecte SI, et enfin
              consultant AMOA senior.
            </p>
            <p>
              Ces d&eacute;cennies m&apos;ont emmen&eacute; en &Eacute;thiopie pour d&eacute;ployer
              un r&eacute;seau t&eacute;l&eacute;com national, en C&ocirc;te d&apos;Ivoire pour
              accompagner la transformation digitale d&apos;Orange, en Suisse pour des projets CRM
              complexes. J&apos;ai appris &agrave; traduire les besoins m&eacute;tier en solutions
              techniques &mdash; et surtout &agrave; les faire fonctionner dans la vraie vie.
            </p>
            <p>
              En 2018, je quitte Orange pour me lancer en ind&eacute;pendant. D&apos;abord dans la
              domotique et l&apos;&eacute;lectricit&eacute; intelligente (Delta Dore, Jeedom,
              Zigbee), puis dans l&apos;IA et l&apos;automatisation &agrave; partir de 2025. Un
              virage naturel&nbsp;: l&apos;IA, c&apos;est exactement ce que je faisais depuis 35 ans
              &mdash; analyser des processus, identifier les inefficacit&eacute;s, et construire des
              solutions &mdash; mais avec des outils dix fois plus puissants.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CE QUI ME DIFFÉRENCIE */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center mb-16">
            Pourquoi travailler avec moi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bloc 1 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-500"
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
              <h3 className="text-lg font-semibold text-slate-800 mt-5">
                Je comprends votre m&eacute;tier
              </h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Je ne suis pas un d&eacute;veloppeur qui a d&eacute;couvert le business. Je suis un
                professionnel du business qui a appris &agrave; coder. Quand vous me parlez de vos
                processus, je comprends imm&eacute;diatement les enjeux &mdash; parce que j&apos;ai
                v&eacute;cu les m&ecirc;mes dans des organisations de 100&nbsp;000 personnes.
              </p>
            </div>

            {/* Bloc 2 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-500"
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
              <h3 className="text-lg font-semibold text-slate-800 mt-5">
                Je construis, je ne d&eacute;l&egrave;gue pas
              </h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Pas de sous-traitance, pas d&apos;&eacute;quipe offshore. Je con&ccedil;ois et
                d&eacute;veloppe moi-m&ecirc;me chaque solution en vibecoding &mdash; une
                m&eacute;thode o&ugrave; je sp&eacute;cifie fonctionnellement et l&apos;IA
                impl&eacute;mente sous ma supervision. Le r&eacute;sultat&nbsp;: la qualit&eacute;
                d&apos;un senior, la vitesse d&apos;une &eacute;quipe.
              </p>
            </div>

            {/* Bloc 3 */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-amber-500"
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
              <h3 className="text-lg font-semibold text-slate-800 mt-5">
                Tout reste en France
              </h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Vos donn&eacute;es, votre h&eacute;bergement, vos solutions &mdash; tout est sur des
                serveurs fran&ccedil;ais, conformes RGPD. Pas de d&eacute;pendance aux GAFAM, pas de
                cloud am&eacute;ricain. C&apos;est un choix &eacute;thique autant que technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CHIFFRES */}
      <section className="bg-[#0F172A] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-16">
            En quelques chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-400">35</div>
              <div className="text-sm text-slate-400 mt-1">ann&eacute;es d&apos;exp&eacute;rience IT</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">3</div>
              <div className="text-sm text-slate-400 mt-1">continents, 5+ pays</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">40+</div>
              <div className="text-sm text-slate-400 mt-1">workflows IA d&eacute;ploy&eacute;s</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">10</div>
              <div className="text-sm text-slate-400 mt-1">services propos&eacute;s</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">1</div>
              <div className="text-sm text-slate-400 mt-1">plateforme SaaS (OnPulse)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">100%</div>
              <div className="text-sm text-slate-400 mt-1">souverain RGPD</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FORMATION */}
      <section className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-800 mb-8">Formation</h2>
          <div className="text-lg text-slate-700 leading-relaxed space-y-4">
            <p>
              <strong>Telecom ParisTech</strong> (2011) &mdash; Management des SI et des
              t&eacute;l&eacute;coms
            </p>
            <p>
              <strong>CNAM Paris</strong> (1995) &mdash; Informatique et syst&egrave;mes
              d&apos;information
            </p>
            <p className="mt-6 text-slate-600">
              Participant Hackathon n8n 2026 (projet ENGAGE)
              <br />
              Vibecoding &mdash; VibeAcademy, programme intensif 8 semaines (2026)
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Envie d&apos;en discuter&nbsp;?
          </h2>
          <p className="text-lg text-blue-100 mt-4">
            R&eacute;servez un appel de 30 minutes. C&apos;est gratuit, sans engagement, et
            c&apos;est moi qui vous r&eacute;ponds.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            R&eacute;server un appel &rarr;
          </a>
        </div>
      </section>
    </>
  )
}
