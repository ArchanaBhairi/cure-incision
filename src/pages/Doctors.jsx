import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import PageHero from "../components/PageHero"
import DoctorCard from "../components/cards/DoctorCard"
import { doctors, doctorSpecialties, doctorCities } from "../data/doctors"

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
      />

      <section className="container-page py-12">
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-12 text-center">
            <p className="text-ink-soft">No doctors match your filters. Try widening your search.</p>
          </div>
        )}
      </section>
    </>
  )
}
