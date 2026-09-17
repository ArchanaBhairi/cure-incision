import { Link } from "react-router-dom"
import { ArrowRight, Stethoscope } from "lucide-react"
import PageHero from "../components/PageHero"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { specialties } from "../data/specialties"
import { siteImages } from "../data/images"

export default function Specialties() {
  return (
    <>
      <PageHero
        title="Medical Specialties"
        description="From routine consultations to complex surgeries, access expert care across every major medical discipline."
        breadcrumbs={[{ label: "Specialties" }]}
        image={siteImages.surgeryCare}
        imageAlt="Surgical and specialty medical care"
      />

      <TrustStrip />

      <PageIntro
        title="End-to-end care for every specialty"
        description="Explore procedures, compare hospitals and connect with verified specialists — all through one platform."
      />

      <section className="container-page py-8">
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ id, name, icon: Icon, desc, procedures }) => (
            <StaggerItem key={id}>
              <div className="group flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl card-shine gradient-border">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{desc}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-xs font-semibold text-brand-green-dark">{procedures}+ procedures</span>
                  <Link
                    to="/doctors"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-dark transition-all group-hover:gap-2"
                  >
                    Find doctors
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <ContentImageSection
        eyebrow="Surgery pathway"
        title="From diagnosis to recovery — we coordinate it all"
        description="Dedicated care managers help with hospital selection, insurance paperwork, pre-op tests and post-discharge follow-ups."
        points={[
          "Transparent cost estimates upfront",
          "Partner hospitals with JCI / NABH accreditation",
          "Rehab and follow-up consults included in select packages",
        ]}
        image={siteImages.hospital}
        imageAlt="Modern hospital facility"
        primaryCta={{ to: "/hospitals", label: "View hospitals" }}
        secondaryCta={{ to: "/contact", label: "Speak to coordinator" }}
      />

      <section className="container-page pb-12">
        <div className="flex flex-col items-center rounded-[2rem] border border-brand-blue/15 bg-brand-blue-light/50 p-10 text-center">
          <Stethoscope className="h-10 w-10 text-brand-blue-dark animate-float" />
          <h2 className="mt-4 text-2xl font-bold text-ink">Need a specialty not listed?</h2>
          <p className="mt-2 max-w-md text-sm text-ink-soft">Our network grows weekly. Contact us and we&apos;ll connect you with the right expert.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-blue-dark hover:-translate-y-0.5">
            Contact support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
