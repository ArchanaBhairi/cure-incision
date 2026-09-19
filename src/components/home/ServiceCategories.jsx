import { Link } from "react-router-dom"
import { HeartPulse, FlaskConical, Stethoscope, Scan, Home, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  { icon: HeartPulse,   label: "Health Packages",  to: "/packages",  tint: "bg-brand-blue-light text-brand-blue-dark",  shadow: "shadow-brand-blue/20",   ring: "group-hover:ring-brand-blue/30" },
  { icon: FlaskConical, label: "Lab Tests",         to: "/tests",     tint: "bg-brand-teal-light text-brand-teal",        shadow: "shadow-brand-teal/20",   ring: "group-hover:ring-brand-teal/30" },
  { icon: Stethoscope,  label: "Consult Doctors",   to: "/doctors",   tint: "bg-brand-green-light text-brand-green-dark", shadow: "shadow-brand-green/20",  ring: "group-hover:ring-brand-green/30" },
  { icon: Scan,         label: "Radiology",         to: "/radiology", tint: "bg-brand-blue-light text-brand-blue-dark",  shadow: "shadow-brand-blue/20",   ring: "group-hover:ring-brand-blue/30" },
  { icon: Home,         label: "Home Collection",   to: "/tests",     tint: "bg-brand-teal-light text-brand-teal",        shadow: "shadow-brand-teal/20",   ring: "group-hover:ring-brand-teal/30" },
  { icon: Building2,    label: "Hospitals",         to: "/hospitals", tint: "bg-brand-green-light text-brand-green-dark", shadow: "shadow-brand-green/20",  ring: "group-hover:ring-brand-green/30" },
]

export default function ServiceCategories() {
  return (
    <section className="container-page -mt-10 relative z-10">
      <div className="grid grid-cols-2 gap-2 rounded-[1.75rem] border border-white/70 bg-white/90 p-3 shadow-[0_24px_60px_rgba(15,76,146,0.16)] backdrop-blur-xl sm:grid-cols-3 lg:grid-cols-6">
        {services.map(({ icon: Icon, label, to, tint, shadow, ring }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="h-full"
          >
            <Link
              to={to}
              className="group relative flex h-full flex-col items-center gap-3 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-surface hover:shadow-lg card-shine"
            >
            {/* Icon container with ring on hover */}
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ring-2 ring-transparent ${tint} ${shadow} ${ring}`}
            >
              <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            </span>
            <span className="text-sm font-semibold text-ink transition-colors duration-200 group-hover:text-brand-blue-dark">
              {label}
            </span>
            {/* Bottom indicator line */}
            <span className="absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-blue/40 transition-all duration-300 group-hover:w-8" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
