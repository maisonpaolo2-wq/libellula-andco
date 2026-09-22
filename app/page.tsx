import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { services, process, portfolio, about, site } from '@/content/data'

const MARQUEE_ITEMS = [
  'Alquiler de mobiliario',
  'Decoracion de eventos',
  'Wedding Styling',
  'Bodas en Tenerife',
  'Eventos exclusivos',
  'Menaje seleccionado',
]

function DragonflySVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="80" y1="10" x2="80" y2="70" />
      <circle cx="80" cy="8" r="4" />
      <ellipse cx="80" cy="27" rx="6" ry="4" />
      <path d="M80 24 C54 14, 16 8, 10 26 C16 40, 54 36, 80 30" />
      <path d="M80 24 C106 14, 144 8, 150 26 C144 40, 106 36, 80 30" />
      <path d="M80 34 C52 26, 12 30, 10 44 C16 56, 54 50, 80 42" />
      <path d="M80 34 C108 26, 148 30, 150 44 C144 56, 106 50, 80 42" />
    </svg>
  )
}

export default function Home() {
  return (
    <main>

      {/* ── Hero editorial split ──────────────────────────────── */}
      <section className="hero-split" id="inicio" aria-label="Portada">

        <div className="hero-split-left">
          <DragonflySVG className="hero-dragonfly" />

          <div>
            <p style={{
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: '1.75rem',
            }}>
              Tenerife, Islas Canarias
            </p>
            <h1 className="hero-split-display">
              Cada espacio,<br />una historia
            </h1>
            <p className="hero-split-sub">
              Alquiler de mobiliario, decoracion y wedding styling para eventos
              que se recuerdan toda la vida.
            </p>
            <div className="hero-split-actions">
              <Link href="/contacto" className="btn btn-gold">Pedir informacion</Link>
              <Link href="/portfolio" className="btn btn-outline-white">Ver portfolio</Link>
            </div>
          </div>
        </div>

        <div className="hero-split-right" aria-hidden="true">
          <div className="hero-photo-a">
            <Image
              src="/photos/hero-a.jpg"
              alt="Boda elegante en Tenerife"
              fill
              priority
              sizes="(max-width: 860px) 58vw, 30vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="hero-photo-b">
            <Image
              src="/photos/hero-b.jpg"
              alt="Decoracion floral para boda en Tenerife"
              fill
              sizes="(max-width: 860px) 42vw, 24vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

      </section>

      {/* ── Marquee strip ─────────────────────────────────────── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Intro + stats ─────────────────────────────────────── */}
      <section className="intro-redesign" aria-label="Presentacion">
        <div className="intro-redesign-inner">
          <Reveal>
            <p className="intro-pull">
              Transformamos cualquier espacio en una experiencia{' '}
              <em>que se recuerda</em>.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="stats-row" role="list">
              {[
                { n: '+80', label: 'eventos realizados' },
                { n: '5+',  label: 'anos de experiencia' },
                { n: '100%', label: 'satisfaccion' },
                { n: 'TFS', label: 'con base en Tenerife' },
              ].map(s => (
                <div key={s.label} className="stat-item" role="listitem">
                  <p className="stat-number">{s.n}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ─────────────────────────────────────────── */}
      <section className="section" id="servicios" aria-labelledby="servicios-heading">
        <div className="wrap">
          <Reveal>
            <div className="services-header">
              <span className="section-tag">Servicios</span>
              <h2 className="headline text-blue" id="servicios-heading">Lo que hacemos</h2>
            </div>
          </Reveal>
          <div className="services-list" role="list">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <article className="service-item" role="listitem">
                  <span className="service-number" aria-hidden="true">0{i + 1}</span>
                  <div className="service-body">
                    <h3 className="service-name">{s.name}</h3>
                    <p className="service-desc">{s.description}</p>
                  </div>
                  <Link href="/servicios" className="service-cta">Ver detalle</Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/servicios" className="btn btn-outline-blue">Todos los servicios</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Proceso ───────────────────────────────────────────── */}
      <section className="section--blue section" id="proceso" aria-labelledby="proceso-heading">
        <div className="wrap">
          <Reveal>
            <span className="section-tag" style={{ color: 'rgba(232,201,138,0.7)' }}>Como trabajamos</span>
            <h2 className="headline" id="proceso-heading" style={{ color: '#fff', marginBottom: '0' }}>
              Sin complicaciones,<br />con mucho mimo
            </h2>
          </Reveal>
          <div className="process-grid">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="process-step">
                  <p className="process-num" aria-hidden="true">{step.number}</p>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────────────── */}
      <section className="section--snow section" id="portfolio" aria-labelledby="portfolio-heading">
        <div className="wrap--wide">
          <Reveal>
            <div className="portfolio-header">
              <span className="section-tag">Portfolio</span>
              <h2 className="headline text-blue" id="portfolio-heading">Nuestro trabajo</h2>
            </div>
          </Reveal>
          <Gallery images={portfolio} />
          <Reveal>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/portfolio" className="btn btn-outline-blue">Ver portfolio completo</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Nosotras ──────────────────────────────────────────── */}
      <section className="section" id="nosotras" aria-labelledby="nosotras-heading">
        <div className="wrap">
          <div className="about-grid">
            <Reveal>
              <div className="about-photo">
                <Image
                  src={about.photo}
                  alt="Equipo de Libellula and Co en Tenerife"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="about-accent" aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="about-content">
                <span className="section-tag">Nosotras</span>
                <h2 className="headline text-blue" id="nosotras-heading">{about.title}</h2>
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="body-text">{p}</p>
                ))}
                <p className="about-signature">Libellula and Co</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                  <Link href="/nosotras" className="btn btn-outline-blue">Conocenos mejor</Link>
                  <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-blue">
                    Instagram
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonios ───────────────────────────────────────── */}
      <section className="section--mist section" id="testimonios" aria-labelledby="testimonios-heading">
        <div className="wrap">
          <Reveal>
            <span className="section-tag" style={{ textAlign: 'center', display: 'block', marginBottom: '0.5rem' }}>Testimonios</span>
            <h2 className="headline text-blue" id="testimonios-heading" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Lo que dicen
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ──────────────────────────────────────────── */}
      <section className="section" id="contacto" aria-labelledby="contacto-heading">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-info">
                <span className="section-tag">Contacto</span>
                <h2 className="headline text-blue" id="contacto-heading">
                  Hablemos de tu evento
                </h2>
                <p className="body-text">
                  Cuentanos tu idea, la fecha y el lugar. Te respondemos en menos de 24 horas con un presupuesto personalizado.
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
                    <span className="contact-data-label">Ubicacion</span>
                    <span>{site.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="contact-form-wrap">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  )
}
