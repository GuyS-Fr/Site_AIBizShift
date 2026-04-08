import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message, consent, website } = body

    // Honeypot anti-spam
    if (website) {
      return NextResponse.json({ success: true })
    }

    // Validation serveur
    if (!name || !email || !subject || !message || !consent) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 },
      )
    }

    // Sanitize
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : ''
    const safeCompany = company ? escapeHtml(company) : ''
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message)

    const port = parseInt(process.env.SMTP_PORT || '465')
    const secure = process.env.SMTP_SECURE === 'false' ? false : port === 465
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email vers Guy
    await transporter.sendMail({
      from: `"AIBizShift Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_FROM || process.env.SMTP_USER,
      replyTo: email,
      subject: `[AIBizShift] ${subject} — ${name}`,
      html: `
        <h2>Nouveau message depuis aibizshift.eu</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Nom</td>
            <td style="padding: 8px 12px;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 8px 12px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
          </tr>
          ${safePhone ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">T&eacute;l&eacute;phone</td><td style="padding: 8px 12px;">${safePhone}</td></tr>` : ''}
          ${safeCompany ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Entreprise</td><td style="padding: 8px 12px;">${safeCompany}</td></tr>` : ''}
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Sujet</td>
            <td style="padding: 8px 12px;">${safeSubject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; white-space: pre-wrap;">${safeMessage}</td>
          </tr>
        </table>
        <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #999;">Envoy&eacute; depuis le formulaire de contact aibizshift.eu</p>
      `,
    })

    // Email de confirmation au visiteur
    await transporter.sendMail({
      from: `"Guy Salvatore — AIBizShift" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: 'Bien reçu ! — AIBizShift',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E293B;">Merci pour votre message, ${safeName} !</h2>
          <p style="color: #555; line-height: 1.6;">
            J'ai bien re&ccedil;u votre demande concernant "<strong>${safeSubject}</strong>".
            Je vous r&eacute;ponds personnellement sous 24 heures (souvent bien plus vite).
          </p>
          <p style="color: #555; line-height: 1.6;">
            En attendant, vous pouvez r&eacute;server directement un cr&eacute;neau de 30 minutes
            si vous pr&eacute;f&eacute;rez &eacute;changer de vive voix :
          </p>
          <p style="margin: 20px 0;">
            <a href="https://calendly.com/guy-salvatore/30min"
               style="background: #3B82F6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              R&eacute;server un appel gratuit
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 13px; color: #999;">
            Guy Salvatore — Consultant IA & Automatisation<br>
            aibizshift.eu &middot; Portes-l&egrave;s-Valence (Dr&ocirc;me)
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 },
    )
  }
}
