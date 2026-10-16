import { useReveal, useCountUp } from './hooks.js'
import Tilt from './Tilt.jsx'

const FEATURES = [
  {
    icon: '▦',
    title: 'Block grid',
    body: 'Every task is a block. Snap work into a rigid grid that stays readable at 10 or 1,000 items.',
    tag: 'Core',
  },
  {
    icon: '⌘',
    title: 'Command palette',
    body: 'Jump to anything — issues, docs, deploys — without lifting your hands from the keyboard.',
    tag: 'Speed',
  },
  {
    icon: '◈',
    title: 'Live cursors',
    body: 'See teammates move through the board in real time, with comments that stick to the block.',
    tag: 'Collab',
  },
  {
    icon: '⟳',
    title: 'CI hooks',
    body: 'Link blocks to pull requests and watch status flip automatically as checks land.',
    tag: 'Dev',
  },
  {
    icon: '▤',
    title: 'Reports that fit',
    body: 'Burndown, cycle time and load — rendered in square little charts you can paste anywhere.',
    tag: 'Insight',
  },
  {
    icon: '▣',
    title: 'Granular access',
    body: 'Space-level permissions, SSO and audit logs. Box the org chart however you like.',
    tag: 'Security',
  },
]

function Stat({ value, suffix, label }) {
  const [ref, n] = useCountUp(value)
  return (
    <div className="metric" ref={ref}>
      <span className="metric__num">
        {n}
        {suffix}
      </span>
      <span className="metric__lbl">{label}</span>
    </div>
  )
}

export default function Features() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head reveal" ref={headRef}>
          <span className="kicker">Features</span>
          <h2 className="section__title">
            Built from squares.
            <br />
            Nothing round about it.
          </h2>
          <p className="section__lede">
            Six sharp edges of BLOK. Hover anything to feel it lift.
          </p>
        </div>

        <div className="features reveal" ref={gridRef}>
          {FEATURES.map((f, i) => (
            <Tilt className="feature" key={f.title} max={9} scale={1.02}>
              <div className="feature__inner" style={{ '--i': i }}>
                <div className="feature__top">
                  <span className="feature__icon" aria-hidden="true">
                    {f.icon}
                  </span>
                  <span className="feature__tag">{f.tag}</span>
                </div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
                <span className="feature__arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </Tilt>
          ))}
        </div>

        <div className="metrics reveal">
          <Stat value={12} suffix="k+" label="teams on BLOK" />
          <Stat value={99} suffix="%" label="uptime, 12 months" />
          <Stat value={41} suffix="s" label="median deploy" />
          <Stat value={6} suffix="ms" label="block render" />
        </div>
      </div>
    </section>
  )
}
