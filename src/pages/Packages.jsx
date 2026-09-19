import { useMemo, useState } from "react"
import { Search, Heart, Shield, PiggyBank } from "lucide-react"
import PageHero from "../components/PageHero"
import PackageCard from "../components/cards/PackageCard"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { packages, packageCategories } from "../data/packages"
import { siteImages } from "../data/images"

const benefits = [
  { icon: Heart, title: "Preventive focus", desc: "Catch issues early with panels tailored by age and risk." },
  { icon: Shield, title: "Doctor-designed", desc: "Packages built by specialists, not generic test bundles." },
  { icon: PiggyBank, title: "Best value", desc: "Bundle pricing saves up to 40% vs. individual tests." },
]

export default function Packages() {
  const [category, setCategory] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return packages.filter((pkg) => {
      const matchCategory = category === "All" || pkg.category === category
      const matchQuery = pkg.name.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
  }, [category, query])

  return (
    <>
      <PageHero
        title="Health Checkup Packages"
        description="Doctor-designed preventive health packages with free home sample collection and fast digital reports."
        breadcrumbs={[{ label: "Health Packages" }]}
        image={siteImages.packages}
        imageAlt="Healthy lifestyle and preventive care"
      />

      <TrustStrip />

      <PageIntro
        title="One visit. Complete picture of your health."
        description="Choose from full-body, cardiac, diabetes, women's health and executive packages — all with transparent pricing."
      />

      <section className="container-page py-8">
        <StaggerGrid className="mb-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="flex gap-4 rounded-card border border-line bg-gradient-to-br from-white to-brand-blue-light/30 p-6 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {packageCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${category === cat
                    ? "bg-brand-blue text-white shadow-md"
                    : "border border-line bg-white text-ink-soft hover:border-brand-blue/30 hover:text-brand-blue-dark"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex w-full items-center gap-2 rounded-full border border-line bg-white px-4 lg:w-72">
            <Search className="h-4 w-4 text-ink-soft" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search packages…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-ink-soft"
              aria-label="Search packages"
            />
          </div>
        </div>

        <AnimateIn className="mt-6">
          <p className="text-sm text-ink-soft">
            Showing <span className="font-semibold text-ink">{filtered.length}</span> package
            {filtered.length !== 1 ? "s" : ""}
          </p>
        </AnimateIn>

        <StaggerGrid className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-12 text-center">
            <p className="text-ink-soft">No packages match your search. Try a different filter.</p>
          </div>
        )}
      </section>

      <ContentImageSection
        eyebrow="Home collection"
        title="Your checkup without the waiting room"
        description="A certified phlebotomist visits at your chosen time with sterile kits. Fasting guidelines and reminders are sent automatically."
        points={["Morning slots from 6 AM", "Live tracking on collection day", "Reports on your phone within 24 hours"]}
        image={siteImages.homeCollection}
        imageAlt="Home sample collection by certified professional"
        reverse
        primaryCta={{ to: "/tests", label: "Book individual tests" }}
      />

      <CtaBanner />
    </>
  )
}
