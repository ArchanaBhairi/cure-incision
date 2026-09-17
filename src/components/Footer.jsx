import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react"
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
    <footer className="mt-24 border-t border-line bg-brand-blue-dark text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-3 inline-flex">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            CureIncision Health Care Pvt. Ltd. is a trusted healthcare marketplace connecting patients with
            hospitals, diagnostic centers and doctors for a seamless surgery and care pathway.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a href="tel:18001234567" className="flex items-center gap-2.5 hover:text-white">
              <Phone className="h-4 w-4 text-brand-green" /> 1800-123-4567
            </a>
            <a href="mailto:care@cureincision.com" className="flex items-center gap-2.5 hover:text-white">
              <Mail className="h-4 w-4 text-brand-green" /> care@cureincision.com
            </a>
            <span className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-brand-green" /> Health City, Bengaluru, India
            </span>
            <a
              href="https://wa.me/911800123456"
              className="flex items-center gap-2.5 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-brand-green" /> WhatsApp Support
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition-colors hover:text-white">
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
