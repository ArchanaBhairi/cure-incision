import { useMemo, useState } from "react"
import { Star, BedDouble, BadgeCheck, MapPin, Building2, Shield } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { hospitals, hospitalCities } from "../data/hospitals"
import { siteImages } from "../data/images"

export default function Hospitals() {
  const [city, setCity] = useState("All")

  const filtered = useMemo(
    () => hospitals.filter((h) => city === "All" || h.city === city),
    [city],
  )

  return (
    <>
      <PageHero
        title="Partner Hospitals"
        description="Accredited, quality-assured hospitals in our network for surgeries, admissions and specialist care."
        breadcrumbs={[{ label: "Hospitals" }]}
        image={siteImages.hospital}
        imageAlt="Partner hospital building and care facility"
      />

      <TrustStrip
        items={[
          { icon: Shield, label: "Accredited partners", desc: "NABH / JCI where applicable" },
          { icon: BedDouble, label: "5000+ beds", desc: "Across major metros" },
          { icon: BadgeCheck, label: "Fixed packages", desc: "Transparent surgery pricing" },
          { icon: MapPin, label: "Pan-India", desc: "Filter by your city" },
        ]}
      />

      <PageIntro
        title="Hospitals chosen for outcomes, not just location"
        description="Every partner is vetted for clinical quality, infection control and patient experience before joining our network."
      />

      <section className="container-page py-8">
        <AnimateIn>
          <div className="flex flex-wrap gap-2">
            {hospitalCities.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCity(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  city === c
                    ? "bg-brand-blue text-white shadow-md"
                    : "border border-line bg-white text-ink-soft hover:border-brand-blue/30 hover:text-brand-blue-dark"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </AnimateIn>

        <StaggerGrid className="mt-8 grid gap-6 lg:grid-cols-2">
          {filtered.map((h) => (
            <StaggerItem key={h.id} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm transition-all duration-300 hover:shadow-xl sm:flex-row lg:h-64">
                <div className="relative h-40 shrink-0 sm:h-auto sm:w-44">
                  <img
                    src={h.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/40 to-transparent sm:bg-gradient-to-t" />
                  <span className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-brand-blue-dark shadow-md sm:hidden">
                    <Building2 className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-ink">{h.name}</h3>
                    <span className="flex items-center gap-1 text-sm font-medium text-ink-soft">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      {h.rating}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-soft">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-green" />
                      {h.city}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-3.5 w-3.5 text-brand-blue" />
                      {h.beds} beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BadgeCheck className="h-3.5 w-3.5 text-brand-teal" />
                      {h.accreditation}
                    </span>
                    <span>Est. {h.established}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {h.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Button to="/contact" variant="outline" size="sm" className="mt-4 w-fit">
                    Enquire now
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <ContentImageSection
        eyebrow="Care coordination"
        title="We handle the logistics so you can focus on healing"
        description="From admission dates to discharge summaries, your coordinator stays with you through the entire hospital stay."
        image={siteImages.surgeryCare}
        imageAlt="Patient care in hospital setting"
        reverse
        primaryCta={{ to: "/contact", label: "Plan my surgery" }}
      />

      <CtaBanner />
    </>
  )
}
