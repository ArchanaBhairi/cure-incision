import { useMemo, useState } from "react"
import { Star, BedDouble, BadgeCheck, MapPin, Building2 } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"
import { hospitals, hospitalCities } from "../data/hospitals"

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
      />

      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          {hospitalCities.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCity(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                city === c
                  ? "bg-brand-blue text-white"
                  : "border border-line bg-white text-ink-soft hover:border-brand-blue/30 hover:text-brand-blue-dark"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filtered.map((h) => (
            <div
              key={h.id}
              className="flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:shadow-lg sm:flex-row sm:items-start sm:gap-5"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark">
                <Building2 className="h-8 w-8" />
              </span>
              <div className="mt-4 flex-1 sm:mt-0">
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
                <Button to="/contact" variant="outline" size="sm" className="mt-4">
                  Enquire now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
