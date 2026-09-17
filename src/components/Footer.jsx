import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowUpRight } from "lucide-react"
import Logo from "./Logo"

const columns = [
  {
    title: "Services",
    links: [
      { label: "Health Packages", to: "/packages" },
      { label: "Diagnostic Tests", to: "/tests" },
      { label: "Doctor Consultation", to: "/doctors" },
      { label: "Radiology & Imaging", to: "/radiology" },
      { label: "Home Sample Collection", to: "/tests" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Corporate Healthcare", to: "/corporate" },
      { label: "Partner Hospitals", to: "/hospitals" },
      { label: "Health Blog", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Login / Register", to: "/login" },
      { label: "Patient Dashboard", to: "/dashboard" },
      { label: "Specialties", to: "/specialties" },
      { label: "Refund Policy", to: "/faq" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-brand-blue-dark text-white/80">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent" />

      {/* Background blobs */}
      <div className="absolute -left-32 -top-20 h-64 w-64 rounded-full bg-brand-teal/8 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-brand-green/6 blur-3xl pointer-events-none" />

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-3 inline-flex shadow-sm transition-transform duration-300 hover:scale-105">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            CureIncision Health Care Pvt. Ltd. is a trusted healthcare marketplace connecting patients with
            hospitals, diagnostic centers and doctors for a seamless surgery and care pathway.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            {[
              { icon: Phone, label: "1800-123-4567", href: "tel:18001234567" },
              { icon: Mail, label: "care@cureincision.com", href: "mailto:care@cureincision.com" },
              { icon: MapPin, label: "Health City, Bengaluru, India", href: null },
              { icon: MessageCircle, label: "WhatsApp Support", href: "https://wa.me/911800123456" },
            ].map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2.5 transition-all duration-200 hover:text-white hover:translate-x-1"
                >
                  <Icon className="h-4 w-4 text-brand-green transition-transform duration-200 group-hover:scale-110" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-60 -translate-y-0.5" />
                </a>
              ) : (
                <span key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-brand-green" />
                  {label}
                </span>
              )
            )}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <span className="h-px w-0 bg-brand-teal transition-all duration-200 group-hover:w-3 mr-0 group-hover:mr-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} CureIncision Health Care Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-green" />
            HIPAA-inspired data handling · SSL secured
          </p>
        </div>
      </div>
    </footer>
  )
}
