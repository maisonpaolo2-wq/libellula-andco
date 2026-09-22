import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { services, site } from '@/content/data'

export const metadata: Metadata = {
  title: `Servicios · ${site.name}`,
  description: 'Alquiler de mobiliario y menaje, decoracion de eventos y wedding styling en Tenerife. Descubre todo lo que podemos hacer por tu celebracion.',
  alternates: { canonical: `${site.url}/servicios` },
}

const serviceDetails = [
  {
    id: 'alquiler',
    included: [
      'Sillas rattan, Tiffany y Chiavari',
      'Espejos dorados en distintos tamanos',
      'Pedestales y columnas de marmol',
      'Candelabros y lamparas de cristal',
      'Vajilla, cristaleria y cuberteria',
      'Mesas de distintas formas y medidas',
      'Entrega, montaje y recogida incluidos',
    ],
  },
  {
    id: 'decoracion',
    included: [
      'Arcos florales y estructuras de ceremonia',
      'Doseles con tela y flores',
      'Centros de mesa y composiciones florales',
      'Senalizacion y papeleria decorativa',
      'Iluminacion ambiente (guirnaldas, velas)',
      'Instalaciones personalizadas',
      'Coordinacion con florista y proveedores',
    ],
  },
  {
    id: 'styling',
    included: [
      'Moodboard y definicion de paleta',
      'Seleccion de texturas y materiales',
      'Coordinacion visual de todos los elementos',
      'Direccion de la estetica global del evento',
      'Propuesta de papeleria y detalles',
      'Supervision el dia del evento',
      'Informe fotografico de referencia',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <main>
      <section className="page-hero" aria-label="Servicios">
        <div className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Ruta">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Servicios</span>
          </nav>
          <span className="page-hero-tag">Servicios</span>
          <h1 className="page-hero-title">Lo que hacemos</h1>
          <p className="page-hero-sub">
            Mobiliario de alquiler, decoracion completa y wedding styling. Todo
            lo que necesitas para que tu evento sea exactamente como lo imaginaste.
          </p>
        </div>
      </section>

      <section aria-label="Detalle de servicios">
        <div className="wrap">
          {services.map((s, i) => {
            const detail = serviceDetails.find(d => d.id === s.id)
            return (
              <div key={s.id}>
                <div className="service-detail">
                  <Reveal>
                    <div className="service-detail-photo">
                      <Image
                        src={s.photo}
                        alt={s.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={1}>
                    <div className="service-detail-content">
                      <span className="section-tag">0{i + 1}</span>
                      <h2 className="service-detail-name">{s.name}</h2>
                      <p className="service-detail-desc">{s.description}</p>
                      <p className="service-detail-desc" style={{ marginTop: '0.75rem' }}>{s.detail}</p>
                      {detail && (
                        <ul className="service-detail-list">
                          {detail.included.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      <Link href="/contacto" className="btn btn-primary">
                        Consultar disponibilidad
                      </Link>
                    </div>
                  </Reveal>
                </div>
                {i < services.length - 1 && <hr className="service-divider" />}
              </div>
            )
          })}
        </div>
      </section>

      <section className="section--blue section" aria-label="CTA">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="headline" style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Pide tu presupuesto sin compromiso
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', maxWidth: '44ch', marginInline: 'auto', fontSize: '1rem', fontWeight: 300, lineHeight: 1.65 }}>
              Cuentanos tu evento y te preparamos una propuesta personalizada en menos de 24 horas.
            </p>
            <Link href="/contacto" className="btn btn-gold">Contactar ahora</Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
