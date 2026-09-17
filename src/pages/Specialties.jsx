import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import { specialties } from "../data/specialties"

export default function Specialties() {
  return (
    <>
      <PageHero
        title="Medical Specialties"
        description="From routine consultations to complex surgeries, access expert care across every major medical discipline."
        breadcrumbs={[{ label: "Specialties" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ id, name, icon: Icon, desc, procedures }) => (
            <div
              key={id}
              className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs font-semibold text-brand-green-dark">{procedures}+ procedures</span>
                <Link
                  to="/doctors"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-dark hover:gap-2 transition-all"
                >
                  Find doctors
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
