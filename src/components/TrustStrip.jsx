import { ShieldCheck, Clock, Home, BadgeCheck } from "lucide-react"
import AnimateIn, { StaggerGrid, StaggerItem } from "./ui/AnimateIn"

const defaultItems = [
  { icon: ShieldCheck, label: "NABL certified labs", desc: "Quality-assured diagnostics" },
  { icon: Home, label: "Free home collection", desc: "Across 120+ cities" },
  { icon: Clock, label: "Reports in 24 hrs", desc: "Digital & shareable" },
  { icon: BadgeCheck, label: "Verified doctors", desc: "1500+ specialists" },
]

export default function TrustStrip({ items = defaultItems, className = "" }) {
  return (
    <section className={`border-y border-line bg-surface/80 ${className}`}>
      <div className="container-page py-8">
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, desc }) => (
            <StaggerItem key={label}>
              <div className="flex items-start gap-4 rounded-2xl border border-line/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md card-shine">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{label}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}

export function PageIntro({ title, description }) {
  return (
    <AnimateIn className="container-page -mt-2 pb-4 pt-2 text-center">
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">{description}</p>
    </AnimateIn>
  )
}
