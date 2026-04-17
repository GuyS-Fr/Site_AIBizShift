import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialit\u00e9 \u2014 AIBizShift',
  description:
    'Politique de confidentialit\u00e9 et protection des donn\u00e9es personnelles du site aibizshift.eu \u2014 conforme RGPD (UE) et nLPD (Suisse).',
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
          <p className="text-slate-400 mt-2 text-sm">
            Conforme au RGPD (UE 2016/679) et &agrave; la nLPD/FADP (Suisse, SR 235.1)
          </p>
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
            UE 2016/679) et &agrave; la Loi f&eacute;d&eacute;rale suisse sur la protection des
            donn&eacute;es (nLPD/FADP, SR 235.1, en vigueur depuis le 1<sup>er</sup> septembre 2023).
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
            <li>Horodatage et consentement explicite (case &agrave; cocher)</li>
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
            <li>Vous recontacter dans le cadre d&apos;un &eacute;ventuel projet</li>
          </ul>
          <p className="mt-4">
            Vos donn&eacute;es ne sont jamais vendues, lou&eacute;es ou partag&eacute;es avec des
            tiers &agrave; des fins commerciales. Aucune d&eacute;cision automatis&eacute;e ni
            profilage n&apos;est r&eacute;alis&eacute;.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            4. Base l&eacute;gale
          </h2>
          <p>
            <strong>RGPD (UE)&nbsp;:</strong> le traitement repose sur votre consentement explicite
            (case &agrave; cocher du formulaire de contact) conform&eacute;ment &agrave;
            l&apos;article 6.1.a du RGPD.
          </p>
          <p className="mt-4">
            <strong>nLPD (Suisse)&nbsp;:</strong> le traitement respecte les principes de licit&eacute;,
            bonne foi, proportionnalit&eacute; et finalit&eacute; (Art. 6 nLPD). Votre consentement
            constitue un motif justificatif suppl&eacute;mentaire (Art. 31 nLPD).
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
            6. H&eacute;bergement, sous-traitants et transferts internationaux
          </h2>
          <p>
            Le traitement de vos donn&eacute;es implique les sous-traitants suivants&nbsp;:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Sous-traitant</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Finalit&eacute;</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Localisation</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Garanties</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-slate-200">
                  <td className="px-3 py-2 font-medium">OVH SAS</td>
                  <td className="px-3 py-2">H&eacute;bergement du site et de la base de donn&eacute;es</td>
                  <td className="px-3 py-2">🇫🇷 France (Roubaix)</td>
                  <td className="px-3 py-2">RGPD natif &mdash; UE</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-3 py-2 font-medium">Brevo (Sendinblue SAS)</td>
                  <td className="px-3 py-2">Envoi des emails du formulaire de contact (SMTP)</td>
                  <td className="px-3 py-2">🇫🇷 France (Paris)</td>
                  <td className="px-3 py-2">RGPD natif &mdash; UE</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-3 py-2 font-medium">Calendly LLC</td>
                  <td className="px-3 py-2">
                    Prise de rendez-vous (uniquement si vous cliquez sur un lien Calendly)
                  </td>
                  <td className="px-3 py-2">🇺🇸 &Eacute;tats-Unis</td>
                  <td className="px-3 py-2">
                    EU-US Data Privacy Framework + Swiss-US Data Privacy Framework
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong>Transfert hors UE/Suisse&nbsp;:</strong> lorsque vous cliquez sur un lien
            "R&eacute;server un cr&eacute;neau" vers Calendly, vos donn&eacute;es de prise de
            rendez-vous (nom, email, choix d&apos;horaire) sont transf&eacute;r&eacute;es aux
            &Eacute;tats-Unis. Calendly LLC est certifi&eacute; sous le{' '}
            <a
              href="https://www.dataprivacyframework.gov/list"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Data Privacy Framework
            </a>{' '}
            (EU-US et Swiss-US, ce dernier reconnu par le Conseil f&eacute;d&eacute;ral suisse le
            15 septembre 2024), garantissant un niveau de protection &eacute;quivalent au RGPD et
            &agrave; la nLPD. Vous pouvez choisir de ne pas utiliser Calendly et nous contacter
            directement par email.
          </p>
          <p className="mt-4">
            Les communications sont chiffr&eacute;es via HTTPS (certificat SSL Let&apos;s Encrypt).
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">7. Vos droits</h2>
          <p>
            Conform&eacute;ment au RGPD (UE) et &agrave; la nLPD (Suisse), vous disposez des
            droits suivants&nbsp;:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>
              <strong>Droit d&apos;acc&egrave;s</strong>&nbsp;: obtenir la confirmation que vos
              donn&eacute;es sont trait&eacute;es et en recevoir une copie (RGPD Art. 15&nbsp;;
              nLPD Art. 25)
            </li>
            <li>
              <strong>Droit de rectification</strong>&nbsp;: corriger des donn&eacute;es inexactes ou
              incompl&egrave;tes (RGPD Art. 16&nbsp;; nLPD Art. 32)
            </li>
            <li>
              <strong>Droit &agrave; l&apos;effacement</strong>&nbsp;: demander la suppression de vos
              donn&eacute;es (RGPD Art. 17&nbsp;; nLPD Art. 32)
            </li>
            <li>
              <strong>Droit &agrave; la portabilit&eacute;</strong>&nbsp;: recevoir vos donn&eacute;es
              dans un format structur&eacute; (RGPD Art. 20&nbsp;; nLPD Art. 28)
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong>&nbsp;: vous opposer au traitement de vos
              donn&eacute;es (RGPD Art. 21)
            </li>
            <li>
              <strong>Droit de retrait du consentement</strong>&nbsp;: r&eacute;tractable &agrave;
              tout moment, sans formalit&eacute;
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

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">
            8. R&eacute;clamations aupr&egrave;s des autorit&eacute;s
          </h2>
          <p>
            En cas de litige, vous pouvez adresser une r&eacute;clamation &agrave; l&apos;autorit&eacute;
            de protection des donn&eacute;es comp&eacute;tente&nbsp;:
          </p>
          <p className="mt-4">
            <strong>🇪🇺 Union europ&eacute;enne (France)&nbsp;: CNIL</strong>
            <br />
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
          <p className="mt-4">
            <strong>🇨🇭 Suisse&nbsp;: PFPDT</strong>
            <br />
            Pr&eacute;pos&eacute; f&eacute;d&eacute;ral &agrave; la protection des donn&eacute;es et &agrave;
            la transparence
            <br />
            Feldeggweg 1, 3003 Berne
            <br />
            <a
              href="https://www.edoeb.admin.ch/edoeb/fr/home.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.edoeb.admin.ch
            </a>
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">9. Cookies</h2>
          <p>
            Le site aibizshift.eu n&apos;utilise <strong>aucun cookie de suivi, publicitaire ou
            analytique</strong>. Seuls des cookies et stockages techniques strictement
            n&eacute;cessaires au fonctionnement du site sont utilis&eacute;s, et exempt&eacute;s
            de l&apos;obligation de consentement (Directive ePrivacy Art. 5(3)).
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Nom</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Type</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Finalit&eacute;</th>
                  <th className="text-left px-3 py-2 font-semibold text-slate-700">Dur&eacute;e</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-slate-200">
                  <td className="px-3 py-2 font-mono text-xs">theme-preference</td>
                  <td className="px-3 py-2">localStorage</td>
                  <td className="px-3 py-2">M&eacute;morise votre pr&eacute;f&eacute;rence de th&egrave;me clair/sombre</td>
                  <td className="px-3 py-2">Persistant (jusqu&apos;&agrave; effacement manuel)</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-3 py-2 font-mono text-xs">payload-token</td>
                  <td className="px-3 py-2">Cookie HTTP</td>
                  <td className="px-3 py-2">Authentification de l&apos;administrateur (acc&egrave;s /admin uniquement)</td>
                  <td className="px-3 py-2">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">10. Mineurs</h2>
          <p>
            Le site aibizshift.eu n&apos;est pas destin&eacute; aux personnes de moins de 16 ans.
            Aucune collecte de donn&eacute;es de mineurs n&apos;est intentionnellement
            effectu&eacute;e (RGPD Art. 8). Si vous &ecirc;tes parent ou tuteur et pensez que votre
            enfant nous a transmis des donn&eacute;es, contactez-nous pour suppression imm&eacute;diate.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">11. S&eacute;curit&eacute;</h2>
          <p>
            Nous mettons en &oelig;uvre des mesures techniques et organisationnelles
            appropri&eacute;es pour prot&eacute;ger vos donn&eacute;es (RGPD Art. 32&nbsp;; nLPD
            Art. 8)&nbsp;: chiffrement HTTPS/TLS de toutes les communications, contr&ocirc;les
            d&apos;acc&egrave;s, journalisation, h&eacute;bergement souverain europ&eacute;en.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-10 mb-4">12. Modifications</h2>
          <p>
            La pr&eacute;sente politique peut &ecirc;tre mise &agrave; jour &agrave; tout moment. La
            date de derni&egrave;re modification est indiqu&eacute;e en bas de cette page.
          </p>

          <p className="mt-10 text-sm text-slate-500">
            Derni&egrave;re mise &agrave; jour&nbsp;: 17 avril 2026
          </p>
        </div>
      </section>
    </>
  )
}
