import { createHash } from 'crypto'
import configPromise from '@payload-config'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getPayload } from 'payload'

import { getClientIp, rateLimit } from '@/utilities/rateLimit'

const RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 }
const IP_HASH_SALT = process.env.PAYLOAD_SECRET || 'aibizshift-fallback-salt'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function hashIp(ip: string): string {
  return createHash('sha256').update(`${IP_HASH_SALT}:${ip}`).digest('hex').slice(0, 16)
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`contact:${ip}`, RATE_LIMIT)
    if (!rl.allowed) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rl.resetAt - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': RATE_LIMIT.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(rl.resetAt / 1000).toString(),
          },
        },
      )
    }

    const body = await request.json()
    const { name, email, phone, company, subject, message, consent, website } = body

    if (website) {
      return NextResponse.json({ success: true })
    }

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

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : ''
    const safeCompany = company ? escapeHtml(company) : ''
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message)

    const now = new Date()
    try {
      const payload = await getPayload({ config: configPromise })
      await payload.create({
        collection: 'contact-submissions',
        data: {
          name,
          email,
          phone: phone || undefined,
          company: company || undefined,
          subject,
          message,
          consent: {
            given: true,
            givenAt: now.toISOString(),
            ipHash: hashIp(ip),
          },
        },
      })
    } catch (persistError) {
      const code =
        persistError instanceof Error && 'code' in persistError ? persistError.code : 'UNKNOWN'
      console.error(`Contact submission persist error: [${code}]`)
    }

    const port = parseInt(process.env.SMTP_PORT || '465')
    const secure = process.env.SMTP_SECURE === 'false' ? false : port === 465
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

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
        <p style="font-size: 12px; color: #999;">Envoy&eacute; depuis le formulaire de contact aibizshift.eu &middot; Consentement RGPD enregistr&eacute; &agrave; ${now.toISOString()}</p>
      `,
    })

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
          <p style="font-size: 12px; color: #888; line-height: 1.5;">
            <em>Note&nbsp;: la prise de rendez-vous utilise Calendly (h&eacute;berg&eacute; aux &Eacute;tats-Unis,
            certifi&eacute; EU-US et Swiss-US Data Privacy Framework). Voir notre
            <a href="https://aibizshift.eu/confidentialite" style="color: #3B82F6;">politique de confidentialit&eacute;</a>.</em>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 13px; color: #999;">
            Guy Salvatore — Consultant IA & Automatisation<br>
            aibizshift.eu &middot; Portes-l&egrave;s-Valence (Dr&ocirc;me)
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT.limit.toString(),
          'X-RateLimit-Remaining': rl.remaining.toString(),
          'X-RateLimit-Reset': Math.ceil(rl.resetAt / 1000).toString(),
        },
      },
    )
  } catch (error) {
    const errorCode = error instanceof Error && 'code' in error ? error.code : 'UNKNOWN'
    const errorName = error instanceof Error ? error.name : 'Error'
    console.error(`Contact form error: ${errorName} [${errorCode}]`)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 },
    )
  }
}
