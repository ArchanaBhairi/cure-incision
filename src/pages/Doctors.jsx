import { useMemo, useState } from "react"
import { Search, Video, MapPin, Star } from "lucide-react"
import PageHero from "../components/PageHero"
import DoctorCard from "../components/cards/DoctorCard"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { doctors, doctorSpecialties, doctorCities } from "../data/doctors"
import { siteImages } from "../data/images"

const consultModes = [
  { icon: Video, title: "Video consult", desc: "Speak from home with secure, HD video calls." },
  { icon: MapPin, title: "In-clinic visit", desc: "Book slots at partner hospitals near you." },
  { icon: Star, title: "Verified profiles", desc: "Credentials checked; ratings from real patients." },
]

export default function Doctors() {
  const [specialty, setSpecialty] = useState("All")
  const [city, setCity] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return doctors.filter((doc) => {
      const matchSpecialty = specialty === "All" || doc.specialty === specialty
      const matchCity = city === "All" || doc.city === city
      const matchQuery = doc.name.toLowerCase().includes(query.toLowerCase())
      return matchSpecialty && matchCity && matchQuery
    })
  }, [specialty, city, query])

  return (
    <>
      <PageHero
        title="Consult Top Doctors"
        description="Book in-clinic or video consultations with experienced, verified specialists across India."
        breadcrumbs={[{ label: "Doctors" }]}
        image={siteImages.doctorConsult}
        imageAlt="Doctor consulting with a patient"
      />

      <TrustStrip />

      <PageIntro
        title="Specialists you can trust"
        description="Filter by specialty and city, compare experience and fees, and book a slot in minutes."
      />

      <section className="container-page py-8">
        <StaggerGrid className="mb-8 grid gap-4 sm:grid-cols-3">
          {consultModes.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="rounded-card border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <Icon className="h-6 w-6 text-brand-blue-dark" />
                <h3 className="mt-3 font-bold text-ink">{title}</h3>
                <p className="mt-1 text-xs text-ink-soft">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <AnimateIn>
          <div className="grid gap-4 rounded-card border border-line bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-2 rounded-full border border-line px-4 lg:col-span-2">
              <Search className="h-4 w-4 text-ink-soft" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search doctors by name…"
                className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-ink-soft"
                aria-label="Search doctors"
              />
            </div>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="rounded-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand-blue"
              aria-label="Filter by specialty"
            >
              {doctorSpecialties.map((s) => (
                <option key={s} value={s}>
                  {s === "All" ? "All specialties" : s}
                </option>
              ))}
            </select>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-brand-blue"
              aria-label="Filter by city"
            >
              {doctorCities.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All cities" : c}
                </option>
              ))}
            </select>
          </div>
        </AnimateIn>

        <StaggerGrid className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doctor) => (
            <StaggerItem key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-12 text-center">
            <p className="text-ink-soft">No doctors match your filters. Try widening your search.</p>
          </div>
        )}
      </section>

      <ContentImageSection
        eyebrow="Second opinions"
        title="Not sure which specialist you need?"
        description="Our care coordinators can review your reports and recommend the right doctor or hospital pathway — at no extra cost."
        image={siteImages.aboutTeam}
        imageAlt="Medical team discussion"
        primaryCta={{ to: "/contact", label: "Get guidance" }}
        secondaryCta={{ to: "/specialties", label: "Browse specialties" }}
        reverse
      />

      <CtaBanner />
    </>
  )
}
