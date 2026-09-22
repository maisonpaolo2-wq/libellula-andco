import { site, navLinks } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-logo">{site.name}</p>
          <p className="footer-tagline">{site.tagline}</p>
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-instagram"
            style={{ marginTop: '1.5rem', fontSize: '0.85rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            @{site.instagram}
          </a>
        </div>
        <ul className="footer-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span>&copy; {year} {site.name}. Todos los derechos reservados.</span>
        <span>{site.location}</span>
      </div>
    </footer>
  )
}
