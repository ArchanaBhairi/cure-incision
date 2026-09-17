import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import PageHero from "../components/PageHero"
import TestCard from "../components/cards/TestCard"
import { tests, testCategories } from "../data/tests"

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
      />

      <section className="container-page py-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {testCategories.map((cat) => (
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
              placeholder="Search tests…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-ink-soft"
              aria-label="Search tests"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-12 text-center">
            <p className="text-ink-soft">No tests match your search. Try a different filter.</p>
          </div>
        )}
      </section>
    </>
  )
}
