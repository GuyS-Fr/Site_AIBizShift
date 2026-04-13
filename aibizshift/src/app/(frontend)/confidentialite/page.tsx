import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialit\u00e9 \u2014 AIBizShift',
  description:
    'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles du site aibizshift.eu \u2014 RGPD.',
}

export default function ConfidentialitePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0F172A] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Politique de confidentialit&eacute;
          </h1>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="max-w-3xl mx-auto px-6 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">1. Introduction</h2>
          <p>
            La pr&eacute;sente politique de confidentialit&eacute; d&eacute;crit comment AIBizShift
            (Guy Salvatore, EI) collecte, utilise et prot&egrave;ge vos donn&eacute;es personnelles
            lorsque vous utilisez le site aibizshift.eu, conform&eacute;ment au R&egrave;glement
            G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD &mdash; R&egrave;glement
            UE 2016/679).
          </p>
          <p className="mt-4">
            <strong>Responsable du traitement&nbsp;:</strong>
            <br />
            Guy Salvatore &mdash; AIBizShift
            <br />
            Email&nbsp;:{' '}
            <a href="mailto:contact@aibizshift.eu" className="text-blue-600 hover:underline">
              contact@aibizshift.eu
            </a>
            <br />
            Adresse&nbsp;: Portes-l&egrave;s-Valence (26800), France
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            2. Donn&eacute;es collect&eacute;es
          </h2>
          <p>
            Nous collectons les donn&eacute;es suivantes uniquement lorsque vous les fournissez
            volontairement via le formulaire de contact&nbsp;:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>Nom et pr&eacute;nom</li>
            <li>Adresse email</li>
            <li>Num&eacute;ro de t&eacute;l&eacute;phone (optionnel)</li>
            <li>Nom de l&apos;entreprise (optionnel)</li>
            <li>Sujet et contenu de votre message</li>
          </ul>
          <p className="mt-4">
            Nous ne collectons aucune donn&eacute;e de navigation, ne d&eacute;posons aucun cookie
            de suivi et n&apos;utilisons aucun outil d&apos;analyse comportementale (pas de Google
            Analytics, pas de pixel Facebook, pas de tracker tiers).
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            3. Finalit&eacute; du traitement
          </h2>
          <p>Vos donn&eacute;es sont utilis&eacute;es exclusivement pour&nbsp;:</p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>R&eacute;pondre &agrave; votre demande de contact</li>
            <li>Vous envoyer un email de confirmation de r&eacute;ception</li>
            <li>
              Vous recontacter dans le cadre d&apos;un &eacute;ventuel projet
            </li>
          </ul>
          <p className="mt-4">
            Vos donn&eacute;es ne sont jamais vendues, lou&eacute;es ou partag&eacute;es avec des
            tiers.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            4. Base l&eacute;gale
          </h2>
          <p>
            Le traitement de vos donn&eacute;es repose sur votre consentement explicite (case
            &agrave; cocher du formulaire de contact) conform&eacute;ment &agrave; l&apos;article
            6.1.a du RGPD.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            5. Dur&eacute;e de conservation
          </h2>
          <p>
            Vos donn&eacute;es de contact sont conserv&eacute;es pendant 24 mois &agrave; compter de
            votre dernier &eacute;change avec nous. Pass&eacute; ce d&eacute;lai, elles sont
            supprim&eacute;es de nos syst&egrave;mes.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            6. H&eacute;bergement et s&eacute;curit&eacute;
          </h2>
          <p>
            Vos donn&eacute;es sont h&eacute;berg&eacute;es en France, sur des serveurs Scaleway
            situ&eacute;s sur le territoire fran&ccedil;ais. Les communications sont chiffr&eacute;es
            via HTTPS (certificat SSL). Les emails sont transmis via le serveur SMTP Brevo
            (smtp-relay.brevo.com), bas&eacute; en France.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">7. Vos droits</h2>
          <p>
            Conform&eacute;ment au RGPD, vous disposez des droits suivants&nbsp;:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>
              <strong>Droit d&apos;acc&egrave;s</strong>&nbsp;: obtenir la confirmation que vos
              donn&eacute;es sont trait&eacute;es et en recevoir une copie
            </li>
            <li>
              <strong>Droit de rectification</strong>&nbsp;: corriger des donn&eacute;es inexactes ou
              incompl&egrave;tes
            </li>
            <li>
              <strong>Droit &agrave; l&apos;effacement</strong>&nbsp;: demander la suppression de vos
              donn&eacute;es
            </li>
            <li>
              <strong>Droit &agrave; la portabilit&eacute;</strong>&nbsp;: recevoir vos donn&eacute;es
              dans un format structur&eacute;
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong>&nbsp;: vous opposer au traitement de vos
              donn&eacute;es
            </li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, contactez-nous &agrave;&nbsp;:{' '}
            <a href="mailto:contact@aibizshift.eu" className="text-blue-600 hover:underline">
              contact@aibizshift.eu
            </a>
          </p>
          <p className="mt-2">
            Nous nous engageons &agrave; r&eacute;pondre dans un d&eacute;lai de 30 jours.
          </p>
          <p className="mt-4">
            En cas de litige, vous pouvez adresser une r&eacute;clamation &agrave; la CNIL&nbsp;:
          </p>
          <p className="mt-2">
            Commission Nationale de l&apos;Informatique et des Libert&eacute;s
            <br />
            3 place de Fontenoy &mdash; TSA 80715
            <br />
            75334 Paris Cedex 07
            <br />
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.cnil.fr
            </a>
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">8. Cookies</h2>
          <p>
            Le site aibizshift.eu n&apos;utilise aucun cookie de suivi, publicitaire ou analytique.
            Seuls des cookies strictement n&eacute;cessaires au fonctionnement technique du site
            peuvent &ecirc;tre d&eacute;pos&eacute;s (session, authentification admin).
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">9. Modifications</h2>
          <p>
            La pr&eacute;sente politique peut &ecirc;tre mise &agrave; jour &agrave; tout moment. La
            date de derni&egrave;re modification est indiqu&eacute;e en bas de cette page.
          </p>

          <p className="mt-10 text-sm text-slate-500">
            Derni&egrave;re mise &agrave; jour&nbsp;: avril 2026
          </p>
        </div>
      </section>
    </>
  )
}
