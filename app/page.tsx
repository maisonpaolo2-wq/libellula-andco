import Image from 'next/image'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { services, process, portfolio, about, site } from '@/content/data'

export default function Home() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero" id="inicio" aria-label="Portada">
        <div className="hero-bg">
          <Image
            src="/photos/hero.jpg"
            alt="Boda elegante en Tenerife con decoracion de Libellula and Co"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content wrap--wide">
          <h1 className="display">
            Cada espacio,<br />una historia
          </h1>
          <p className="hero-sub">
            Alquiler de mobiliario, decoracion y wedding styling en Tenerife.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-gold">Pedir informacion</a>
            <a href="#portfolio" className="btn btn-outline-white">Ver portfolio</a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ── Intro strip ───────────────────────────────────────── */}
      <section className="intro" aria-label="Presentacion">
        <div className="intro-inner">
          <p className="intro-text">
            Transformamos espacios en experiencias que se recuerdan toda la vida.
          </p>
          <div className="intro-divider" aria-hidden="true" />
          <span className="intro-location">Tenerife, Islas Canarias</span>
        </div>
      </section>

      {/* ── Servicios ─────────────────────────────────────────── */}
      <section className="section" id="servicios" aria-labelledby="servicios-heading">
        <div className="wrap">
          <Reveal>
            <div className="services-header">
              <span className="section-tag">Servicios</span>
              <h2 className="headline text-blue">Lo que hacemos</h2>
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
                  <a href="#contacto" className="service-cta">Consultar</a>
                </article>
              </Reveal>
            ))}
          </div>
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
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-blue mt-lg" style={{ display: 'inline-flex', marginTop: '2rem' }}>
                  Ver Instagram
                </a>
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
                  Cuentanos tu idea, la fecha y el lugar. Te respondemos en menos de 24 horas con presupuesto personalizado.
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
                  <div className="contact-data-item">
                    <span className="contact-data-label">Instagram</span>
                    <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
                      @{site.instagram}
                    </a>
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
