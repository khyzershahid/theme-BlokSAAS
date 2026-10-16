import { useState } from 'react'
import { useScrolled, useTheme } from './hooks.js'

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Nav() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" aria-label="BLOK home">
          <span className="brand__mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="brand__name">BLOK</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className="btn btn--sm nav__cta-mobile" onClick={() => setOpen(false)}>
            Start free
          </a>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
              <i />
            </span>
            <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
              <i />
            </span>
          </button>
          <a href="#pricing" className="nav__signin">
            Sign in
          </a>
          <a href="#cta" className="btn btn--primary btn--sm">
            Start free
          </a>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
