import { Link } from "react-router-dom"
import { HeartPulse, FlaskConical, Stethoscope, Scan, Home, Building2 } from "lucide-react"

const services = [
  { icon: HeartPulse, label: "Health Packages", to: "/packages", tint: "bg-brand-blue-light text-brand-blue-dark" },
  { icon: FlaskConical, label: "Lab Tests", to: "/tests", tint: "bg-brand-teal-light text-brand-teal" },
  { icon: Stethoscope, label: "Consult Doctors", to: "/doctors", tint: "bg-brand-green-light text-brand-green-dark" },
  { icon: Scan, label: "Radiology", to: "/radiology", tint: "bg-brand-blue-light text-brand-blue-dark" },
  { icon: Home, label: "Home Collection", to: "/tests", tint: "bg-brand-teal-light text-brand-teal" },
  { icon: Building2, label: "Hospitals", to: "/hospitals", tint: "bg-brand-green-light text-brand-green-dark" },
]

export default function ServiceCategories() {
  return (
    <section className="container-page -mt-10 relative z-10">
      <div className="grid grid-cols-2 gap-2 rounded-[1.5rem] border border-white/70 bg-white/90 p-3 shadow-[0_18px_50px_rgba(15,76,146,0.14)] backdrop-blur sm:grid-cols-3 lg:grid-cols-6">
        {services.map(({ icon: Icon, label, to, tint }) => (
          <Link
            key={label}
            to={to}
            className="group flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-md"
          >
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${tint}`}>
              <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
            </span>
            <span className="text-sm font-semibold text-ink">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
