'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', date: '', message: '',
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(v => ({ ...v, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="form-status ok">
        Gracias por escribirnos. Te respondemos en menos de 24 horas.
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" required value={form.name} onChange={set('name')} placeholder="Tu nombre" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="tu@email.com" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Telefono</label>
          <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+34 600 000 000" />
        </div>
        <div className="form-field">
          <label htmlFor="date">Fecha del evento</label>
          <input id="date" type="date" value={form.date} onChange={set('date')} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="eventType">Tipo de evento</label>
        <select id="eventType" value={form.eventType} onChange={set('eventType')}>
          <option value="">Selecciona una opcion</option>
          <option value="boda">Boda</option>
          <option value="evento-corporativo">Evento corporativo</option>
          <option value="celebracion-privada">Celebracion privada</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="message">Cuentanos mas</label>
        <textarea id="message" value={form.message} onChange={set('message')} placeholder="Describenos tu evento, fecha aproximada, lugar..." />
      </div>
      {status === 'error' && (
        <div className="form-status error">
          Ha ocurrido un error. Puedes escribirnos directamente a info@libellulaandco.com.
        </div>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ marginTop: '0.5rem' }}>
        {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  )
}
