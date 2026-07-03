import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Agent Vocal IA — Cas concret | AIBizShift',
  description:
    "Comment un agent vocal IA prend de vraies commandes au téléphone : reconnaissance du client, total recalculé depuis la carte, envoi en cuisine en temps réel. Un prototype terrain, le potentiel pour votre métier. Valence, Drôme.",
  openGraph: {
    title: 'Agent Vocal IA — La preuve terrain',
    description:
      "Un agent vocal qui décroche, reconnaît vos habitués et prend la commande en temps réel. Prototype construit en 2 semaines — et ce que ça ouvre pour votre métier.",
    url: 'https://aibizshift.eu/agent-vocal',
    siteName: 'AIBizShift',
    locale: 'fr_FR',
    type: 'article',
  },
}

const CALENDLY_URL = 'https://calendly.com/guy-salvatore/30min'

export default function AgentVocalPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-[#0F172A] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full border border-orange-500/20 mb-6">
            D&eacute;monstrateur terrain &middot; Hackathon juin 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Un agent vocal qui d&eacute;croche et prend la commande. En vrai.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mt-6 max-w-2xl mx-auto">
            En 2 semaines, j&apos;ai construit un d&eacute;monstrateur fonctionnel d&apos;agent vocal
            pour un commerce de restauration rapide, et je l&apos;ai mis &agrave;
            l&apos;&eacute;preuve sur le terrain. Il d&eacute;croche, comprend la commande en
            fran&ccedil;ais, reconna&icirc;t les habitu&eacute;s et l&apos;envoie en cuisine &mdash;
            en temps r&eacute;el. Il n&apos;est pas encore en production&nbsp;: c&apos;est la preuve
            que &ccedil;a marche, avant d&apos;industrialiser. Voici comment &mdash; et ce que
            &ccedil;a ouvre pour votre m&eacute;tier.
          </p>
          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Discuter de mon cas &rarr;
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-14">
          <Image
            src="/images/agent-vocal-hero.png"
            alt="Flux d'un agent vocal : appel entrant, traitement IA en temps réel, commande et fiche client, transmission en cuisine"
            width={1376}
            height={768}
            className="rounded-xl shadow-lg w-full"
            priority
          />
        </div>
      </section>

      {/* SECTION 2 — LE PROBLÈME */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">
            Le t&eacute;l&eacute;phone qui sonne dans le vide
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mt-6">
            Aux heures de pointe, personne n&apos;est libre pour d&eacute;crocher. La ligne est
            occup&eacute;e, l&apos;appel bascule sur la messagerie&hellip; et le client appelle le
            concurrent d&apos;&agrave; c&ocirc;t&eacute;. Chaque appel manqu&eacute; est une commande
            perdue &mdash; et un client qu&apos;on ne reverra peut-&ecirc;tre pas.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mt-4">
            Un agent vocal ne rate jamais un appel. Il r&eacute;pond &agrave; tout le monde, en
            m&ecirc;me temps, 24h/24.
          </p>
        </div>
      </section>

      {/* SECTION 3 — COMMENT ÇA MARCHE */}
      <section className="bg-[#FAFAFA] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
            Comment &ccedil;a marche
          </h2>
          <p className="text-lg text-slate-500 text-center mt-4 max-w-2xl mx-auto">
            De la sonnerie &agrave; la cuisine, en un appel
          </p>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-12 mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-800">Il d&eacute;croche</h3>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        24h/24, m&ecirc;me en plein coup de feu, et m&ecirc;me sur plusieurs appels
                        en m&ecirc;me temps.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-800">Il reconna&icirc;t l&apos;habitu&eacute;</h3>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Nom, pr&eacute;f&eacute;rences, derni&egrave;re commande&nbsp;:
                        &laquo;&nbsp;Rebonjour, comme d&apos;habitude&nbsp;?&nbsp;&raquo;
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-800">Il prend la commande</h3>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Et recalcule le total &agrave; partir de votre carte. Jamais un prix
                        invent&eacute; par l&apos;IA.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-800">Il transmet en temps r&eacute;el</h3>
                      <p className="text-slate-600 mt-1 leading-relaxed">
                        Ticket en cuisine, notification au patron, commande journalis&eacute;e. Le
                        tout sans lever le petit doigt.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <Image
                  src="/images/service-agent-vocal.png"
                  alt="Agent vocal IA : appel téléphonique traité en temps réel, client reconnu et commande transmise"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOUS LE CAPOT */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
            Sous le capot
          </h2>
          <p className="text-lg text-slate-500 text-center mt-4">
            Pour les curieux &mdash; ce qui se passe vraiment pendant l&apos;appel. D&eacute;pliez
            ce qui vous int&eacute;resse.
          </p>

          <div className="space-y-4 mt-12">
            <details className="group bg-[#FAFAFA] rounded-xl border border-[#E2E8F0] p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                <span>Le relais audio en temps r&eacute;el</span>
                <span className="text-blue-500 transition-transform group-open:rotate-180">
                  &#9662;
                </span>
              </summary>
              <p className="text-slate-600 leading-relaxed mt-4">
                L&apos;agent n&apos;est pas un simple aiguilleur. Un serveur d&eacute;di&eacute;
                relaie chaque paquet audio, dans les deux sens, entre la t&eacute;l&eacute;phonie
                cloud et le moteur vocal IA temps r&eacute;el, pendant tout l&apos;appel. C&apos;est
                lui &mdash; et lui seul &mdash; qui ouvre la connexion s&eacute;curis&eacute;e au
                moteur vocal&nbsp;: la voix ne transite jamais en direct par un service tiers non
                ma&icirc;tris&eacute;.
              </p>
            </details>

            <details className="group bg-[#FAFAFA] rounded-xl border border-[#E2E8F0] p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                <span>La reconnaissance client et la logique m&eacute;tier</span>
                <span className="text-blue-500 transition-transform group-open:rotate-180">
                  &#9662;
                </span>
              </summary>
              <p className="text-slate-600 leading-relaxed mt-4">
                Au d&eacute;croch&eacute;, l&apos;agent reconna&icirc;t le client &agrave; son
                num&eacute;ro et charge sa fiche (nom, pr&eacute;f&eacute;rences, derni&egrave;re
                commande) depuis la base clients, puis injecte ce contexte dans la conversation.
                Pendant l&apos;appel, d&egrave;s qu&apos;il a besoin d&apos;un fait &mdash; le prix
                d&apos;un menu, une commande en cours &mdash; le moteur vocal interroge le serveur,
                qui lit ou &eacute;crit dans la base et renvoie la r&eacute;ponse. Point cl&eacute;&nbsp;:
                le prix ne vient jamais de l&apos;IA. Le serveur recalcule lui-m&ecirc;me le total
                depuis la carte.
              </p>
            </details>

            <details className="group bg-[#FAFAFA] rounded-xl border border-[#E2E8F0] p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                <span>Un num&eacute;ro, plusieurs appels en m&ecirc;me temps</span>
                <span className="text-blue-500 transition-transform group-open:rotate-180">
                  &#9662;
                </span>
              </summary>
              <p className="text-slate-600 leading-relaxed mt-4">
                En t&eacute;l&eacute;phonie cloud, le num&eacute;ro est d&eacute;coupl&eacute; de la
                &laquo;&nbsp;ligne&nbsp;&raquo;. Un seul num&eacute;ro encaisse un grand nombre
                d&apos;appels simultan&eacute;s &mdash; chaque appel est un canal logique
                ind&eacute;pendant. Fini le &laquo;&nbsp;1 num&eacute;ro = 1 appel&nbsp;&raquo; du
                cuivre&nbsp;: la vraie limite, c&apos;est la puissance du serveur, pas le nombre de
                lignes.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CE QUE ÇA PROUVE */}
      <section className="bg-[#0F172A] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Pas que le kebab
          </h2>
          <p className="text-lg text-slate-400 text-center mt-4 max-w-2xl mx-auto">
            Le m&ecirc;me moteur s&apos;adapte &agrave; tout m&eacute;tier avec du
            t&eacute;l&eacute;phone entrant &mdash; rout&eacute; par num&eacute;ro.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-white font-semibold">Restauration</div>
                <div className="text-sm text-slate-400 mt-1">Prise de commande, cr&eacute;neau de retrait</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-white font-semibold">Artisan</div>
                <div className="text-sm text-slate-400 mt-1">Prise de rendez-vous, devis, urgences</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-white font-semibold">Cabinet &amp; sant&eacute;</div>
                <div className="text-sm text-slate-400 mt-1">Prise et rappel de rendez-vous</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-white font-semibold">SAV &amp; standard</div>
                <div className="text-sm text-slate-400 mt-1">Qualification, r&eacute;ponses 24/7</div>
              </div>
            </div>
            <div>
              <Image
                src="/images/agent-vocal-metiers.png"
                alt="Un même moteur d'agent vocal au service de plusieurs métiers : restauration, artisan, santé, prise de rendez-vous"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — COMBIEN ÇA COÛTE */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
            Combien &ccedil;a co&ucirc;te
          </h2>
          <p className="text-lg text-slate-500 text-center mt-4 max-w-2xl mx-auto">
            Un mod&egrave;le simple et honn&ecirc;te&nbsp;: vous payez ce que vous consommez.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <div className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-xl p-6 text-center">
              <div className="text-xl font-bold text-slate-800">Sans abonnement</div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Pas de forfait mensuel fixe qui court, m&ecirc;me quand le t&eacute;l&eacute;phone ne
                sonne pas.
              </p>
            </div>
            <div className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-xl p-6 text-center">
              <div className="text-xl font-bold text-slate-800">&Agrave; l&apos;usage</div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                La facture suit le nombre r&eacute;el d&apos;appels. Un mois calme co&ucirc;te moins
                qu&apos;un mois charg&eacute;.
              </p>
            </div>
            <div className="bg-[#FAFAFA] border border-[#E2E8F0] rounded-xl p-6 text-center">
              <div className="text-xl font-bold text-slate-800">Quelques dizaines d&apos;&euro;/mois</div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Selon votre volume d&apos;appels. Un seul num&eacute;ro suffit, m&ecirc;me pour des
                centaines d&apos;appels.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center mt-8 max-w-2xl mx-auto">
            Le co&ucirc;t exact d&eacute;pend de votre volume et de vos besoins &mdash; on
            l&apos;estime ensemble, sans surprise, lors de l&apos;appel d&eacute;couverte.
          </p>
        </div>
      </section>

      {/* SECTION 7 — CTA FINAL */}
      <section className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Votre m&eacute;tier a du t&eacute;l&eacute;phone entrant&nbsp;?
          </h2>
          <p className="text-lg text-blue-100 mt-4">
            Parlons de votre cas. En 30 minutes, on regarde si un agent vocal a du sens chez vous et
            ce qu&apos;il vous ferait gagner.
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
            <a
              href="/services"
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Voir tous les services &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
