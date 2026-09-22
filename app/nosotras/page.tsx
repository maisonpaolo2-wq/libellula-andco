import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { about, site } from '@/content/data'

export const metadata: Metadata = {
  title: `Nosotras · ${site.name}`,
  description: 'Conoce el equipo detras de Libellula and Co, estudio de decoracion y alquiler de mobiliario para eventos en Tenerife.',
  alternates: { canonical: `${site.url}/nosotras` },
}

const values = [
  {
    title: 'Detallistas',
    description: 'Nos fijamos en lo que otros pasan por alto. El angulo de una vela, el pliegue de una tela, la altura exacta de un centro de mesa.',
  },
  {
    title: 'Honestas',
    description: 'Presupuesto claro, plazos cumplidos, sin sorpresas. Asi trabajamos desde el primer dia.',
  },
  {
    title: 'Apasionadas',
    description: 'Cada evento es diferente y eso nos entusiasma. Nunca repetimos una formula; siempre buscamos lo que te hace unica a ti.',
  },
]

export default function NosotrasPage() {
  return (
    <main>
      <section className="page-hero" aria-label="Nosotras">
        <div className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Ruta">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Nosotras</span>
          </nav>
          <span className="page-hero-tag">Nosotras</span>
          <h1 className="page-hero-title">Nacimos para hacer bonito</h1>
          <p className="page-hero-sub">
            Detras de cada evento hay un equipo que lo cuida como si fuera suyo.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Sobre Libellula and Co">
        <div className="wrap">
          <div className="nosotras-intro">
            <Reveal>
              <div className="about-photo" style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={about.photo}
                  alt="Equipo Libellula and Co, Tenerife"
                  fill
                  sizes="(max-width: 860px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="about-accent" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <span className="section-tag">Nuestra historia</span>
                <h2 className="headline text-blue" style={{ marginBottom: '1.75rem' }}>
                  {about.title}
                </h2>
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="body-text">{p}</p>
                ))}
                <p className="body-text" style={{ marginTop: '1em' }}>
                  Trabajamos con proveedores locales, apostamos por la calidad sobre la cantidad
                  y nos implicamos en cada proyecto como si fuera nuestra propia boda. Eso es
                  lo que nos diferencia.
                </p>
                <p className="about-signature" style={{ marginTop: '2rem' }}>Libellula and Co</p>
                <a
                  href={`https://instagram.com/${site.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-blue"
                  style={{ marginTop: '2rem', display: 'inline-flex' }}
                >
                  Siguenos en Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="nosotras-values" role="list">
              {values.map(v => (
                <div key={v.title} className="value-item" role="listitem">
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--blue section" aria-label="CTA nosotras">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Trabajemos juntas
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', maxWidth: '44ch', marginInline: 'auto', fontSize: '1rem', fontWeight: 300, lineHeight: 1.65 }}>
              Si has llegado hasta aqui, algo te ha resonado. Escríbenos y vemos si encajamos.
            </p>
            <Link href="/contacto" className="btn btn-gold">Hablemos</Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
