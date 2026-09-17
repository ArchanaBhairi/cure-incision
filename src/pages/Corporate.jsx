import { useState } from "react"
import { Users, HeartPulse, FileBarChart, Building2, Check } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { siteImages } from "../data/images"

const benefits = [
  { icon: HeartPulse, title: "Annual Health Checkups", desc: "Preventive screening packages tailored to your workforce demographics." },
  { icon: Users, title: "On-site Camps", desc: "Health camps, vaccination drives and wellness sessions at your office." },
  { icon: FileBarChart, title: "Wellness Analytics", desc: "Aggregated, anonymized health dashboards for HR and leadership." },
  { icon: Building2, title: "Priority Hospital Access", desc: "Fast-tracked admissions and surgeries at our partner hospital network." },
]

const plans = [
  { name: "Starter", employees: "Up to 100 employees", features: ["Basic health checkup", "Digital reports", "Email support"] },
  { name: "Growth", employees: "100 – 500 employees", features: ["Advanced checkup", "On-site camp (2/yr)", "Wellness dashboard", "Priority support"], popular: true },
  { name: "Enterprise", employees: "500+ employees", features: ["Custom packages", "Quarterly camps", "Dedicated coordinator", "24x7 support"] },
]

const logos = ["TechCorp", "HealthFirst", "BuildWell", "FinServe", "EduPlus"]

export default function Corporate() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        title="Corporate Healthcare Solutions"
        description="Keep your teams healthy and productive with tailored corporate wellness programs from CureIncision."
        breadcrumbs={[{ label: "Corporate" }]}
        image={siteImages.corporate}
        imageAlt="Corporate team wellness meeting"
      />

      <TrustStrip />

      <PageIntro
        title="Wellness programs that scale with your company"
        description="From startups to enterprises — flexible plans, on-site camps and actionable health insights for HR teams."
      />

      <section className="container-page py-8">
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg card-shine">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <ContentImageSection
        eyebrow="Employee experience"
        title="Health benefits employees actually use"
        description="Simple booking flows, home collection and digital reports mean higher participation in your wellness programs."
        points={["Single sign-on ready for enterprise HRMS", "Family add-on packages available", "Dedicated account manager"]}
        image={siteImages.wellness}
        imageAlt="Employees participating in wellness activity"
        reverse
      />

      <section className="container-page py-8">
        <AnimateIn className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Trusted by growing teams</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 opacity-70">
            {logos.map((name) => (
              <span key={name} className="rounded-full border border-line bg-white px-5 py-2 text-sm font-bold text-ink-soft">
                {name}
              </span>
            ))}
          </div>
        </AnimateIn>

        <StaggerGrid className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`flex h-full flex-col rounded-card border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular ? "border-brand-blue ring-2 ring-brand-blue/20 animate-glow-pulse" : "border-line"
                }`}
              >
                {plan.popular && (
                  <span className="mb-3 w-fit rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{plan.employees}</p>
                <ul className="mt-5 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-ink">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  to="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="md"
                  className="mt-6 w-full"
                >
                  Request a quote
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="container-page pb-16">
        <AnimateIn>
          <div className="mx-auto max-w-2xl rounded-card border border-line bg-surface p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Talk to our corporate team</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Tell us about your organization and we&apos;ll design a wellness program that fits.
            </p>
            {submitted ? (
              <div className="mt-6 rounded-2xl bg-brand-green-light p-6 text-center animate-scale-up">
                <p className="font-semibold text-brand-green-dark">Thank you! Our team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <input required placeholder="Company name" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
                <input required placeholder="Contact person" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
                <input required type="email" placeholder="Work email" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
                <input required placeholder="No. of employees" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
                <textarea placeholder="Tell us what you need" rows={3} className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue sm:col-span-2" />
                <Button type="submit" variant="primary" size="md" className="sm:col-span-2">
                  Submit enquiry
                </Button>
              </form>
            )}
          </div>
        </AnimateIn>
      </section>

      <CtaBanner />
    </>
  )
}
