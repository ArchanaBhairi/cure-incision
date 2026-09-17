import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function PageHero({ title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-brand-blue-light via-white to-brand-teal-light">
      {/* Animated blobs */}
      <div className="absolute -left-20 -top-10 h-72 w-72 rounded-full bg-brand-blue/8 blur-3xl animate-drift pointer-events-none" />
      <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-teal/10 blur-3xl animate-drift pointer-events-none [animation-delay:-5s]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--color-brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-blue) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-page relative py-12 lg:py-16 animate-fade-up">
        {/* Breadcrumbs */}
        <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-ink-soft" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand-blue-dark transition-colors duration-200">
            Home
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-ink-soft/50" />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-brand-blue-dark transition-colors duration-200">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="max-w-3xl text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft animate-fade-up stagger-2">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
