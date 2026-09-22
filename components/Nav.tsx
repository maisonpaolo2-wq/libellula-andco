'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { navLinks, site } from '@/content/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`} role="navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={close}>
            {site.name}
          </Link>
          <ul className="nav-links">
            {navLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <span className="nav-lang" aria-hidden="true">EN</span>
            </li>
          </ul>
          <button
            className={`nav-hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-mobile-overlay${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
        onClick={e => { if (e.target === e.currentTarget) close() }}
      >
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={close}>
            {l.label}
          </Link>
        ))}
        <p className="nav-mobile-contact">{site.email}</p>
      </div>
    </>
  )
}
