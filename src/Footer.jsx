import { useReveal } from './hooks.js'

const FOOTER = [
  { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'API', 'Status', 'Community'] },
]

export default function Footer() {
  const ref = useReveal()
  const megaRef = useReveal({ threshold: 0.1 })

  return (
    <>
      <section className="cta" id="cta">
        <div className="container">
          <div className="cta__box reveal" ref={ref}>
            <div className="cta__copy">
              <h2 className="cta__title">
                Put your work
                <br />
                in a better box.
              </h2>
              <p className="cta__lede">Free for 14 days. Grid included, chaos not.</p>
            </div>
            <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
              <label className="sr-only" htmlFor="cta-email">
                Work email
              </label>
              <input id="cta-email" type="email" placeholder="you@company.com" required />
              <button type="submit" className="btn btn--primary">
                Get started →
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#top" className="brand">
              <span className="brand__mark" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="brand__name">BLOK</span>
            </a>
            <p>The boxy workspace for teams that ship.</p>
            <span className="footer__status">
              <span className="pulse" /> All systems operational
            </span>
          </div>

          <div className="footer__cols">
            {FOOTER.map((col) => (
              <div className="footer__col" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#top">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__mega reveal" ref={megaRef} aria-hidden="true">
          {['B', 'L', 'O', 'K'].map((ch, i) => (
            <span key={ch} style={{ '--i': i }}>
              {ch}
            </span>
          ))}
        </div>

        <div className="container footer__base">
          <span>© {new Date().getFullYear()} BLOK Labs, Inc.</span>
          <span>Made of squares.</span>
        </div>
      </footer>
    </>
  )
}
