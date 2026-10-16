import { useReveal, useParallax } from './hooks.js'
import Tilt from './Tilt.jsx'

const WORDS = ['Plan.', 'Build.', 'Ship.']

export default function Hero() {
  const copyRef = useReveal()
  const artRef = useParallax(70)
  const decoRef = useParallax(-40)

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy reveal" ref={copyRef}>
          <span className="eyebrow">
            <span className="eyebrow__dot" /> v2.4 — now with live blocks
          </span>

          <h1 className="hero__title">
            {WORDS.map((w, i) => (
              <span className="hero__word" key={w} style={{ '--i': i }}>
                {w}
              </span>
            ))}
          </h1>

          <p className="hero__lede">
            BLOK is the boxy, no-nonsense workspace where product teams turn messy roadmaps into
            shipped software. One grid. Zero chaos.
          </p>

          <div className="hero__cta">
            <a href="#cta" className="btn btn--primary">
              Start free <span aria-hidden="true">→</span>
            </a>
            <a href="#features" className="btn btn--ghost">
              See features
            </a>
          </div>

          <ul className="hero__proof">
            <li>14-day trial</li>
            <li>No card required</li>
            <li>Cancel anytime</li>
          </ul>
        </div>

        <div className="hero__art">
          <div className="hero__deco" ref={decoRef} aria-hidden="true" />
          <div ref={artRef} className="hero__artInner">
            <Tilt className="hero__panel" max={7} scale={1.015}>
              <div className="panel">
              <div className="panel__bar">
                <span className="panel__dot" />
                <span className="panel__dot" />
                <span className="panel__dot" />
                <span className="panel__path">blok.app / sprint-24</span>
              </div>
              <div className="panel__body">
                <div className="panel__side">
                  <span className="skel skel--sm" />
                  <span className="skel skel--md" />
                  <span className="skel skel--sm" />
                  <span className="skel skel--lg" />
                </div>
                <div className="panel__main">
                  <div className="board">
                    {['Backlog', 'Building', 'Review', 'Shipped'].map((col, i) => (
                      <div className="board__col" key={col} style={{ '--d': `${i * 120}ms` }}>
                        <span className="board__label">{col}</span>
                        <span className="card-mini" style={{ '--w': '100%' }} />
                        <span className="card-mini card-mini--accent" style={{ '--w': '78%' }} />
                        <span className="card-mini" style={{ '--w': '88%' }} />
                      </div>
                    ))}
                  </div>
                  <div className="panel__stats">
                    <div className="stat">
                      <span className="stat__num">86%</span>
                      <span className="stat__lbl">on track</span>
                    </div>
                    <div className="stat">
                      <span className="stat__num">12</span>
                      <span className="stat__lbl">in review</span>
                    </div>
                    <div className="stat">
                      <span className="stat__num">3d</span>
                      <span className="stat__lbl">to release</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Tilt>

            <div className="hero__badge hero__badge--1" aria-hidden="true">
              <span className="pulse" /> 6 teammates online
            </div>
            <div className="hero__badge hero__badge--2" aria-hidden="true">
              ⚡ deploy passed in 41s
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
