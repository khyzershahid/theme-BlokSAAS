import { useReveal, useParallax } from './hooks.js'
import Tilt from './Tilt.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Drop in your blocks',
    body: 'Import from GitHub, Jira or a CSV. Everything lands on the grid, deduped and sized.',
  },
  {
    n: '02',
    title: 'Line up the sprint',
    body: 'Drag blocks into columns. Capacity, owners and dependencies check themselves.',
  },
  {
    n: '03',
    title: 'Ship and auto-report',
    body: 'Merge a PR, the block flips. Standup metrics update without anyone typing a status.',
  },
]

const QUOTES = [
  {
    quote: 'We deleted three tools the week we moved to BLOK. The grid just answers questions faster.',
    name: 'Maya Okafor',
    role: 'Head of Product, Nomadic',
  },
  {
    quote: 'Standups are four minutes now. Everyone reads the board instead of reciting it.',
    name: 'Dev Raman',
    role: 'Engineering Lead, Ferrite',
  },
  {
    quote: 'It looks opinionated because it is. That opinion is why our roadmap finally holds still.',
    name: 'Lena Fischer',
    role: 'COO, Brightside Labs',
  },
]

export default function Workflow() {
  const headRef = useReveal()
  const stepsRef = useReveal()
  const quoteRef = useReveal()
  const floatRef = useParallax(-55)

  return (
    <section className="section section--alt" id="workflow">
      <div className="container">
        <div className="section__head reveal" ref={headRef}>
          <span className="kicker">Workflow</span>
          <h2 className="section__title">Three moves. Then you ship.</h2>
        </div>

        <ol className="steps reveal" ref={stepsRef}>
          {STEPS.map((s, i) => (
            <li className="step" key={s.n} style={{ '--i': i }}>
              <span className="step__num">{s.n}</span>
              <div className="step__line" aria-hidden="true" />
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="showcase">
          <div className="showcase__float" ref={floatRef} aria-hidden="true">
            <span className="chip chip--a">cycle time ↓ 34%</span>
            <span className="chip chip--b">0 blocked items</span>
          </div>

          <div className="reveal" ref={quoteRef}>
            <div className="quotes">
              {QUOTES.map((q, i) => (
                <Tilt className="quote" key={q.name} max={6} scale={1.015}>
                  <figure className="quote__card">
                    <blockquote>“{q.quote}”</blockquote>
                    <figcaption>
                      <span className="quote__avatar" aria-hidden="true">
                        {q.name
                          .split(' ')
                          .map((p) => p[0])
                          .join('')}
                      </span>
                      <span>
                        <strong>{q.name}</strong>
                        <em>{q.role}</em>
                      </span>
                    </figcaption>
                  </figure>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
