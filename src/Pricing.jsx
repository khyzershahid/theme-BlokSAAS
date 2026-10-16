import { useState } from 'react'
import { useReveal } from './hooks.js'
import Tilt from './Tilt.jsx'

const PLANS = [
  {
    name: 'Solo',
    monthly: 0,
    yearly: 0,
    blurb: 'For one builder and a side project.',
    features: ['1 workspace', 'Unlimited blocks', 'GitHub hooks', 'Community support'],
    cta: 'Start free',
    accent: false,
  },
  {
    name: 'Team',
    monthly: 12,
    yearly: 9,
    blurb: 'For product squads shipping weekly.',
    features: [
      'Everything in Solo',
      'Live cursors & threads',
      'Automated reports',
      'SSO + audit log',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    accent: true,
  },
  {
    name: 'Scale',
    monthly: 29,
    yearly: 24,
    blurb: 'For orgs running many blocks.',
    features: ['Everything in Team', 'Unlimited spaces', 'SCIM provisioning', 'Custom SLA', 'Dedicated CSM'],
    cta: 'Talk to sales',
    accent: false,
  },
]

export default function Pricing() {
  const headRef = useReveal()
  const gridRef = useReveal()
  const [yearly, setYearly] = useState(true)

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head reveal" ref={headRef}>
          <span className="kicker">Pricing</span>
          <h2 className="section__title">Square prices. No rounding up.</h2>
          <p className="section__lede">Flat per seat, billed however you like.</p>

          <div className="toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={`toggle__opt ${!yearly ? 'is-active' : ''}`}
              onClick={() => setYearly(false)}
              aria-pressed={!yearly}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`toggle__opt ${yearly ? 'is-active' : ''}`}
              onClick={() => setYearly(true)}
              aria-pressed={yearly}
            >
              Yearly <span className="toggle__save">−25%</span>
            </button>
          </div>
        </div>

        <div className="plans reveal" ref={gridRef}>
          {PLANS.map((p) => (
            <Tilt
              className={`plan ${p.accent ? 'plan--accent' : ''}`}
              key={p.name}
              max={6}
              scale={1.015}
            >
              <div className="plan__inner">
                <div className="plan__head">
                  <h3 className="plan__name">{p.name}</h3>
                  {p.accent && <span className="plan__flag">Most popular</span>}
                </div>
                <p className="plan__blurb">{p.blurb}</p>
                <div className="plan__price">
                  <span className="plan__currency">$</span>
                  <span className="plan__amount" key={`${p.name}-${yearly}`}>
                    {yearly ? p.yearly : p.monthly}
                  </span>
                  <span className="plan__per">/ user / mo</span>
                </div>
                <ul className="plan__features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span aria-hidden="true">■</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`btn plan__cta ${p.accent ? 'btn--dark' : ''}`}>
                  {p.cta}
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}
