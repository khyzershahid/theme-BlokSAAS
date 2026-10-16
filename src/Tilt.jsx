import { useRef } from 'react'

/**
 * Wrapper that applies a 3D tilt transform following the pointer.
 * Keep the inner content flat and light for a smooth result.
 */
export default function Tilt({
  children,
  max = 10,
  scale = 1.02,
  perspective = 900,
  className = '',
  glow = true,
  ...rest
}) {
  const ref = useRef(null)
  const frame = useRef(0)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - py) * max * 2
    const ry = (px - 0.5) * max * 2
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`)
      el.style.setProperty('--tz', `${scale}`)
    })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
      el.style.setProperty('--tz', '1')
    })
  }

  return (
    <div
      ref={ref}
      className={`tilt ${glow ? 'tilt-glow' : ''} ${className}`}
      style={{ '--perspective': `${perspective}px` }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </div>
  )
}
