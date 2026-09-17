import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 2000000, suffix: "+", label: "Patients served" },
  { value: 120, suffix: "+", label: "Cities covered" },
  { value: 1500, suffix: "+", label: "Partner doctors" },
  { value: 98, suffix: "%", label: "Satisfaction rate" },
]

function StatCounter({ value, suffix, label, index }) {
  const counterRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const element = counterRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return undefined

    const duration = 1800
    const startTime = performance.now()
    let animationFrame

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3
      setDisplayValue(Math.round(value * easedProgress))

      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, value])

  return (
    <div
      ref={counterRef}
      className="bg-white p-6 text-center transition-transform duration-300 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <p className="text-3xl font-bold tabular-nums text-brand-blue-dark sm:text-4xl">
        {displayValue.toLocaleString("en-IN")}{suffix}
      </p>
      <p className="mt-1 text-sm text-ink-soft">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="container-page mt-16" aria-label="CureIncision impact statistics">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line shadow-sm lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCounter key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </section>
  )
}
