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

        {/* Trust/Stat Pills to fill empty space */}
        <div className="mt-8 flex flex-wrap gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 rounded-full border border-brand-blue/15 bg-white/60 px-4 py-2 text-sm shadow-[0_4px_20px_rgba(23,102,192,0.06)] backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green-light">
              <svg className="h-3.5 w-3.5 text-brand-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="font-semibold text-ink">Verified Professionals</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 rounded-full border border-brand-blue/15 bg-white/60 px-4 py-2 text-sm shadow-[0_4px_20px_rgba(23,102,192,0.06)] backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue-light">
              <svg className="h-3.5 w-3.5 text-brand-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="font-semibold text-ink">24/7 Support</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 rounded-full border border-brand-blue/15 bg-white/60 px-4 py-2 text-sm shadow-[0_4px_20px_rgba(23,102,192,0.06)] backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal-light">
              <svg className="h-3.5 w-3.5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <span className="font-semibold text-ink">100% Secure</span>
          </motion.div>
        </div>
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
              <img src={image} alt={imageAlt ?? title} className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
