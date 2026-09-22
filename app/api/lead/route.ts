import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
  const body = await req.json()
  const { name, email, phone, eventType, date, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Nombre y email son obligatorios' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Libellula and Co <noreply@libellulaandco.com>',
    to: ['info@libellulaandco.com'],
    replyTo: email,
    subject: `Nueva consulta de ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone || 'No indicado'}`,
      `Tipo de evento: ${eventType || 'No indicado'}`,
      `Fecha: ${date || 'No indicada'}`,
      `Mensaje:\n${message || 'Sin mensaje'}`,
    ].join('\n'),
  })

  if (error) {
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
