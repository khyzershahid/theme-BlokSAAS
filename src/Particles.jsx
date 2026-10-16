import { useEffect, useMemo, useRef } from 'react'

/** Deterministic PRNG so the particle field never reshuffles between renders. */
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const COUNT = 34

export default function Particles() {
  const ref = useRef(null)

  const particles = useMemo(() => {
    const rand = mulberry32(20261016)
    return Array.from({ length: COUNT }, (_, i) => {
      const big = rand() > 0.62
      const colorRoll = rand()
      return {
        id: i,
        left: rand() * 100,
        top: (i / COUNT) * 100 + rand() * 2.4,
        size: big ? 15 + rand() * 9 : 7 + rand() * 7,
        speed: [0.06, 0.13, 0.22][i % 3],
        outline: big,
        color:
          colorRoll > 0.9 ? 'accent' : colorRoll > 0.8 ? 'blue' : colorRoll > 0.66 ? 'lime' : 'ink',
        dur: 6 + rand() * 7,
        del: -rand() * 8,
        op: 0.2 + rand() * 0.3,
      }
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      el.style.setProperty('--sy', `${window.scrollY}px`)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="particles" ref={ref} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle particle--${p.color} ${p.outline ? 'particle--outline' : ''}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.op,
            '--speed': p.speed,
            '--dur': `${p.dur}s`,
            '--del': `${p.del}s`,
          }}
        />
      ))}
    </div>
  )
}
