import { useMemo, useState } from "react"
import { Search, FlaskConical, Truck, FileCheck } from "lucide-react"
import PageHero from "../components/PageHero"
import TestCard from "../components/cards/TestCard"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { tests, testCategories } from "../data/tests"
import { siteImages } from "../data/images"

const processSteps = [
  { icon: Search, title: "Search & select", desc: "Find the test you need by name or category." },
  { icon: Truck, title: "Schedule pickup", desc: "Choose home collection or visit a partner center." },
  { icon: FlaskConical, title: "Lab processing", desc: "Samples handled at NABL-certified facilities." },
  { icon: FileCheck, title: "Digital reports", desc: "View results on your dashboard within hours." },
]

export default function Tests() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return tests.filter((test) => {
      const matchCategory = category === "All" || test.category === category
      const matchQuery = test.name.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
  }, [category, query])

  return (
    <>
      <PageHero
        title="Book Diagnostic Lab Tests"
        description="Individual pathology and diagnostic tests with free home sample collection and quick, accurate reports."
        breadcrumbs={[{ label: "Diagnostic Tests" }]}
        image={siteImages.labTests}
        imageAlt="Modern diagnostic laboratory equipment"
      />

      <TrustStrip />

      <PageIntro
        title="Accurate diagnostics, delivered conveniently"
        description="From routine blood work to specialized panels — book online, collect at home, and receive clinician-ready reports."
      />

      <section className="container-page py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {testCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/25"
                    : "border border-line bg-white text-ink-soft hover:border-brand-blue/30 hover:text-brand-blue-dark hover:-translate-y-0.5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex w-full items-center gap-2 rounded-full border border-line bg-white px-4 shadow-sm transition-shadow focus-within:shadow-md lg:w-72">
            <Search className="h-4 w-4 text-ink-soft" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tests…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-ink-soft"
              aria-label="Search tests"
            />
          </div>
        </div>

        <StaggerGrid className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((test) => (
            <StaggerItem key={test.id}>
              <TestCard test={test} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-12 text-center animate-fade-up">
            <p className="text-ink-soft">No tests match your search. Try a different filter.</p>
          </div>
        )}
      </section>

      <section className="container-page pb-12">
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="rounded-card border border-line bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal-light text-brand-teal">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <ContentImageSection
        eyebrow="Popular choice"
        title="Save more with health packages"
        description="Combine multiple tests into doctor-designed packages and get better value than booking tests individually."
        points={["Up to 40% savings vs. à la carte tests", "Single home visit for all samples", "Comprehensive PDF report with trends"]}
        image={siteImages.wellness}
        imageAlt="Patient reviewing health report with clinician"
        primaryCta={{ to: "/packages", label: "Browse packages" }}
      />

      <CtaBanner />
    </>
  )
}
