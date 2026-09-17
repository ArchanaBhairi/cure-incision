import { Target, Eye, Heart, Award } from "lucide-react"
import PageHero from "../components/PageHero"
import CtaBanner from "../components/home/CtaBanner"

const values = [
  { icon: Heart, title: "Patient First", desc: "Every decision starts with what's best for the patient's health and comfort." },
  { icon: Award, title: "Clinical Excellence", desc: "We partner only with accredited labs, hospitals and verified doctors." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, honest advice and no hidden charges — ever." },
  { icon: Target, title: "Accessibility", desc: "Quality healthcare made affordable and available across 120+ cities." },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About CureIncision Health Care"
        description="We're on a mission to make quality healthcare simple, transparent and accessible for every family in India."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-dark">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold text-ink">Guiding you through your entire care pathway</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              CureIncision Health Care started with a simple belief: navigating healthcare shouldn&apos;t be
              confusing or stressful. From your first lab test to a complex surgery and recovery, we bring
              everything into one trusted platform.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Today we connect over 2 million patients with certified labs, top doctors and accredited hospitals —
              backed by dedicated care coordinators who guide you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2M+", label: "Patients served" },
              { value: "120+", label: "Cities" },
              { value: "1500+", label: "Doctors" },
              { value: "50+", label: "Partner hospitals" },
            ].map((s) => (
              <div key={s.label} className="rounded-card border border-line bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-blue-dark">{s.value}</p>
                <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <h2 className="text-center text-3xl font-bold text-ink">Our values</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-card border border-line bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
