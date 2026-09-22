import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import { portfolio, site } from '@/content/data'

export const metadata: Metadata = {
  title: `Portfolio · ${site.name}`,
  description: 'Descubre nuestro portfolio de bodas, eventos y decoraciones en Tenerife. Mobiliario, flores, y wedding styling para celebraciones unicas.',
  alternates: { canonical: `${site.url}/portfolio` },
}

export default function PortfolioPage() {
  return (
    <main>
      <section className="page-hero" aria-label="Portfolio">
        <div className="page-hero-inner">
          <nav className="breadcrumb" aria-label="Ruta">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Portfolio</span>
          </nav>
          <span className="page-hero-tag">Portfolio</span>
          <h1 className="page-hero-title">Nuestro trabajo</h1>
          <p className="page-hero-sub">
            Bodas, eventos y celebraciones en Tenerife. Cada proyecto, una historia distinta.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Galeria de proyectos">
        <div className="wrap--wide">
          <Gallery images={portfolio} />
        </div>
      </section>

      <section className="section--mist section" aria-label="CTA portfolio">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <span className="section-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>Siguiente paso</span>
            <h2 className="headline text-blue" style={{ marginBottom: '1.25rem' }}>
              Tu evento puede ser el proximo
            </h2>
            <p className="body-text" style={{ marginInline: 'auto', marginBottom: '2.5rem', textAlign: 'center' }}>
              Cuéntanos tu vision y creamos algo unico para ti.
            </p>
            <Link href="/contacto" className="btn btn-primary">Pedir informacion</Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
