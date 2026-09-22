import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { site } from '@/content/data'

export const metadata: Metadata = {
  title: `Contacto · ${site.name}`,
  description: 'Contacta con Libellula and Co para bodas, eventos y decoracion en Tenerife. Respuesta en menos de 24 horas.',
  alternates: { canonical: `${site.url}/contacto` },
}

export default function ContactoPage() {
  return (
    <main>
      <section className="page-hero" aria-label="Contacto">
        <div className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Ruta">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contacto</span>
          </nav>
          <span className="page-hero-tag">Contacto</span>
          <h1 className="page-hero-title">Hablemos de tu evento</h1>
          <p className="page-hero-sub">
            Cuéntanos tu idea. Respondemos en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Formulario de contacto">
        <div className="wrap">
          <div className="contact-page-grid">
            <Reveal>
              <div>
                <span className="section-tag">Escribenos</span>
                <h2 className="headline text-blue" style={{ marginBottom: '1.5rem' }}>
                  Estamos en Tenerife
                </h2>
                <p className="body-text" style={{ marginBottom: '2.5rem' }}>
                  Nos encanta conocer cada proyecto desde el primer momento. Sin compromiso, sin presion.
                  Solo cuéntanos que tienes en mente.
                </p>

                <div className="contact-data">
                  <div className="contact-data-item">
                    <span className="contact-data-label">Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                  <div className="contact-data-item">
                    <span className="contact-data-label">WhatsApp</span>
                    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      +34 660 452 950
                    </a>
                  </div>
                  <div className="contact-data-item">
                    <span className="contact-data-label">Instagram</span>
                    <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
                      @{site.instagram}
                    </a>
                  </div>
                  <div className="contact-data-item">
                    <span className="contact-data-label">Ubicacion</span>
                    <span>{site.location}</span>
                  </div>
                </div>

                <div style={{
                  marginTop: '3rem',
                  padding: '1.5rem',
                  background: 'var(--blue-pale)',
                  borderLeft: '2px solid var(--blue-mid)',
                }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 300, color: 'var(--blue-deep)', lineHeight: 1.65 }}>
                    Respondemos todos los mensajes en menos de 24 horas. Si prefieres hablar directamente,
                    escríbenos por WhatsApp y te llamamos cuando quieras.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
