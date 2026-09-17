import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import PageHero from "../components/PageHero"
import PackageCard from "../components/cards/PackageCard"
import { packages, packageCategories } from "../data/packages"

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
      />

      <section className="container-page py-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {packageCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-brand-blue text-white"
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

        <p className="mt-6 text-sm text-ink-soft">
          Showing <span className="font-semibold text-ink">{filtered.length}</span> package
          {filtered.length !== 1 ? "s" : ""}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-12 text-center">
            <p className="text-ink-soft">No packages match your search. Try a different filter.</p>
          </div>
        )}
      </section>
    </>
  )
}
