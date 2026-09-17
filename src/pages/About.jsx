import { Target, Eye, Heart, Award, Users, Sparkles } from "lucide-react"
import PageHero from "../components/PageHero"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip from "../components/TrustStrip"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { siteImages } from "../data/images"

const values = [
  { icon: Heart, title: "Patient First", desc: "Every decision starts with what's best for the patient's health and comfort." },
  { icon: Award, title: "Clinical Excellence", desc: "We partner only with accredited labs, hospitals and verified doctors." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, honest advice and no hidden charges — ever." },
  { icon: Target, title: "Accessibility", desc: "Quality healthcare made affordable and available across 120+ cities." },
]

const milestones = [
  { year: "2018", text: "Founded in Bengaluru with a vision to simplify healthcare access." },
  { year: "2020", text: "Expanded home sample collection to 50+ cities during the pandemic." },
  { year: "2023", text: "Crossed 1 million patients and launched surgery care pathways." },
  { year: "2026", text: "2M+ patients served with 1500+ doctors and 50+ partner hospitals." },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About CureIncision Health Care"
        description="We're on a mission to make quality healthcare simple, transparent and accessible for every family in India."
        breadcrumbs={[{ label: "About Us" }]}
        image={siteImages.aboutTeam}
        imageAlt="Medical team collaborating on patient care"
      />

      <TrustStrip />

      <section className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimateIn direction="left">
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
          </AnimateIn>
          <StaggerGrid className="grid grid-cols-2 gap-4">
            {[
              { value: "2M+", label: "Patients served" },
              { value: "120+", label: "Cities" },
              { value: "1500+", label: "Doctors" },
              { value: "50+", label: "Partner hospitals" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-card border border-line bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg animate-glow-pulse">
                  <p className="text-3xl font-bold text-brand-blue-dark">{s.value}</p>
                  <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <ContentImageSection
        eyebrow="Our mission"
        title="Healthcare that feels human, not overwhelming"
        description="We combine technology with compassionate coordinators so you never feel alone — whether you're booking a routine test or planning major surgery."
        points={[
          "Dedicated care coordinators for surgery and admissions",
          "Transparent pricing before you commit",
          "Digital records you control and share securely",
        ]}
        image={siteImages.surgeryCare}
        imageAlt="Patient receiving compassionate hospital care"
        reverse
        primaryCta={{ to: "/contact", label: "Talk to our team" }}
        secondaryCta={{ to: "/packages", label: "Explore checkups" }}
      />

      <section className="container-page pb-12">
        <AnimateIn className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
            <Sparkles className="h-3.5 w-3.5" />
            Our journey
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink">Milestones that shaped us</h2>
        </AnimateIn>
        <div className="relative mt-10 mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-teal to-brand-green lg:left-1/2" />
          <StaggerGrid className="space-y-8">
            {milestones.map((m, i) => (
              <StaggerItem key={m.year}>
                <div className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="hidden flex-1 lg:block" />
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1 rounded-card border border-line bg-white p-5 shadow-sm lg:max-w-[calc(50%-2rem)]">
                    <p className="text-sm font-bold text-brand-blue-dark">{m.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="container-page pb-12">
        <AnimateIn className="text-center">
          <h2 className="text-3xl font-bold text-ink">Our values</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-soft">Principles that guide every booking, report and consultation on our platform.</p>
        </AnimateIn>
        <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="group h-full rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-lg card-shine gradient-border">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-colors group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="container-page pb-12">
        <AnimateIn>
          <div className="flex flex-col items-center rounded-[2rem] border border-line bg-gradient-to-br from-brand-blue-light to-brand-teal-light p-10 text-center lg:p-14">
            <Users className="h-10 w-10 text-brand-blue-dark" />
            <h2 className="mt-4 text-2xl font-bold text-ink">Join our growing care network</h2>
            <p className="mt-3 max-w-lg text-sm text-ink-soft">
              Doctors, labs and hospitals partner with CureIncision to reach patients who need trusted, transparent care.
            </p>
          </div>
        </AnimateIn>
      </section>

      <CtaBanner />
    </>
  )
}
