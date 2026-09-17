import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function PageHero({ title, description, breadcrumbs = [], image, imageAlt }) {
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

      <div className={`container-page relative py-12 lg:py-16 ${image ? "grid items-center gap-10 lg:grid-cols-2 lg:py-20" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
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
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
        </motion.div>

        {image && (
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="animate-float-slow absolute -left-6 top-8 z-10 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-xs font-bold text-ink">Trusted care network</p>
              <p className="text-[10px] text-ink-soft">Labs · Doctors · Hospitals</p>
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem] border-[5px] border-white shadow-[0_20px_50px_rgba(15,76,146,0.2)]">
              <img src={image} alt={imageAlt ?? title} className="aspect-[5/4] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
