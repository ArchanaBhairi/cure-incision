import { Check } from "lucide-react"
import AnimateIn from "./ui/AnimateIn"
import Button from "./ui/Button"

export default function ContentImageSection({
  eyebrow,
  title,
  description,
  points = [],
  image,
  imageAlt,
  reverse = false,
  primaryCta,
  secondaryCta,
  className = "",
}) {
  return (
    <section className={`container-page py-12 lg:py-16 ${className}`}>
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${reverse ? "lg:[direction:rtl]" : ""}`}
      >
        <AnimateIn direction={reverse ? "right" : "left"} className={reverse ? "lg:[direction:ltr]" : ""}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-dark">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
          )}
          {points.length > 0 && (
            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Button to={primaryCta.to} href={primaryCta.href} variant="primary" size="md">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} href={secondaryCta.href} variant="outline" size="md">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </AnimateIn>

        <AnimateIn direction={reverse ? "left" : "right"} delay={0.1} className={reverse ? "lg:[direction:ltr]" : ""}>
          <div className="group relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-blue/20 via-brand-teal/15 to-brand-green/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />
            <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-white shadow-[0_24px_60px_rgba(15,76,146,0.18)]">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/30 via-transparent to-transparent" />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
