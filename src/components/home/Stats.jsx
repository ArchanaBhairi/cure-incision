import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 2000000, suffix: "+", label: "Patients served",   gradient: "from-brand-blue to-brand-blue-dark" },
  { value: 120,     suffix: "+", label: "Cities covered",    gradient: "from-brand-teal to-brand-blue" },
  { value: 1500,    suffix: "+", label: "Partner doctors",   gradient: "from-brand-green to-brand-teal" },
  { value: 98,      suffix: "%", label: "Satisfaction rate", gradient: "from-brand-green-dark to-brand-green" },
]

function StatCounter({ value, suffix, label, index, gradient }) {
  const counterRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const element = counterRef.current
    if (!element) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHasStarted(true); observer.disconnect() } },
      { threshold: 0.35 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return undefined
    const duration = 2000
    const startTime = performance.now()
    let animationFrame
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 4
      setDisplayValue(Math.round(value * easedProgress))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, value])

  return (
    <div
      ref={counterRef}
      className="group relative flex flex-col items-center justify-center bg-white p-6 text-center transition-all duration-400 hover:-translate-y-1.5 hover:z-10"
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      {/* Glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-400 group-hover:opacity-[0.06]`} />

      {/* Top accent bar */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-3/4 rounded-full`} />

      <p className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent text-3xl font-bold tabular-nums sm:text-4xl transition-transform duration-300 group-hover:scale-110`}>
        {displayValue.toLocaleString("en-IN")}{suffix}
      </p>
      <p className="mt-1.5 text-sm font-medium text-ink-soft">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="container-page mt-16" aria-label="CureIncision impact statistics">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line shadow-[0_8px_32px_rgba(15,76,146,0.08)] lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCounter key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </section>
  )
}
