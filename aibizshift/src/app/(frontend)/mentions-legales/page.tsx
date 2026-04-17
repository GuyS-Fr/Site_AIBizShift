import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions l\u00e9gales \u2014 AIBizShift',
  description:
    'Mentions l\u00e9gales du site aibizshift.eu \u2014 Guy Salvatore, consultant IA & automatisation, Portes-l\u00e8s-Valence, Dr\u00f4me.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0F172A] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Mentions l&eacute;gales</h1>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="max-w-3xl mx-auto px-6 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            1. &Eacute;diteur du site
          </h2>
          <p>Le site aibizshift.eu est &eacute;dit&eacute; par&nbsp;:</p>
          <p className="mt-4">
            <strong>Guy Salvatore</strong>
            <br />
            Entrepreneur individuel &mdash; Smarthome Smartelec
            <br />
            Nom commercial&nbsp;: AIBizShift
            <br />
            Adresse&nbsp;: Portes-l&egrave;s-Valence (26800), France
            <br />
            Email&nbsp;:{' '}
            <a href="mailto:contact@aibizshift.eu" className="text-blue-600 hover:underline">
              contact@aibizshift.eu
            </a>
            <br />
            SIRET&nbsp;: 833 914 989 00029
            <br />
            Code APE&nbsp;: 6201Z &mdash; Programmation informatique
          </p>
          <p className="mt-4">Directeur de la publication&nbsp;: Guy Salvatore</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">2. H&eacute;bergement</h2>
          <p>Le site est h&eacute;berg&eacute; par&nbsp;:</p>
          <p className="mt-4">
            <strong>OVH SAS</strong>
            <br />
            2 rue Kellermann
            <br />
            59100 Roubaix, France
            <br />
            <a
              href="https://www.ovhcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.ovhcloud.com
            </a>
          </p>
          <p className="mt-4">
            Les donn&eacute;es sont h&eacute;berg&eacute;es exclusivement en France, sur des
            serveurs situ&eacute;s sur le territoire fran&ccedil;ais, conform&eacute;ment au
            R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD).
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            3. Propri&eacute;t&eacute; intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu du site aibizshift.eu (textes, images, graphismes, logo,
            ic&ocirc;nes, logiciels) est la propri&eacute;t&eacute; exclusive de Guy Salvatore /
            AIBizShift, sauf mention contraire.
          </p>
          <p className="mt-4">
            Toute reproduction, repr&eacute;sentation, modification, publication, adaptation de tout
            ou partie des &eacute;l&eacute;ments du site, quel que soit le moyen ou le
            proc&eacute;d&eacute; utilis&eacute;, est interdite sauf autorisation &eacute;crite
            pr&eacute;alable.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            4. Liens hypertextes
          </h2>
          <p>
            Le site aibizshift.eu peut contenir des liens vers d&apos;autres sites internet.
            AIBizShift ne dispose d&apos;aucun contr&ocirc;le sur le contenu de ces sites et
            d&eacute;cline toute responsabilit&eacute; quant &agrave; leur contenu.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            5. Limitation de responsabilit&eacute;
          </h2>
          <p>
            Les informations publi&eacute;es sur aibizshift.eu sont fournies &agrave; titre
            indicatif et sont susceptibles d&apos;&ecirc;tre modifi&eacute;es &agrave; tout moment.
            AIBizShift ne saurait &ecirc;tre tenu responsable des erreurs, d&apos;une absence de
            disponibilit&eacute; des informations ou de la pr&eacute;sence de virus sur le site.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            6. Droit applicable
          </h2>
          <p>
            Les pr&eacute;sentes mentions l&eacute;gales sont r&eacute;gies par le droit
            fran&ccedil;ais. En cas de litige, les tribunaux de Valence (Dr&ocirc;me) seront seuls
            comp&eacute;tents.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">7. Cr&eacute;dits</h2>
          <p>
            Design et d&eacute;veloppement&nbsp;: Guy Salvatore / AIBizShift
            <br />
            Images&nbsp;: g&eacute;n&eacute;r&eacute;es par intelligence artificielle (fal.ai)
            <br />
            Ic&ocirc;nes&nbsp;: SVG custom
          </p>

          <p className="mt-10 text-sm text-slate-500">
            Derni&egrave;re mise &agrave; jour&nbsp;: 17 avril 2026
          </p>
        </div>
      </section>
    </>
  )
}
