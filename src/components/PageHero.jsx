import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function PageHero({ title, description, breadcrumbs = [] }) {
  return (
    <section className="border-b border-line bg-gradient-to-br from-brand-blue-light via-white to-brand-teal-light">
      <div className="container-page py-12 lg:py-16">
        <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-ink-soft" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-blue-dark">
            Home
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-brand-blue-dark">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="max-w-3xl text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">{description}</p>}
      </div>
    </section>
  )
}
