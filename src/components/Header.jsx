import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, Phone, UserRound } from "lucide-react"
import Logo from "./Logo"
import Button from "./ui/Button"

const nav = [
  { label: "Home", to: "/" },
  { label: "Health Packages", to: "/packages" },
  { label: "Diagnostic Tests", to: "/tests" },
  { label: "Doctors", to: "/doctors" },
  { label: "Specialties", to: "/specialties" },
  { label: "Hospitals", to: "/hospitals" },
  { label: "Corporate", to: "/corporate" },
  { label: "Blog", to: "/blog" },
]

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          isActive ? "bg-brand-blue-light text-brand-blue-dark" : "text-ink-soft hover:text-brand-blue-dark"
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="bg-brand-blue-dark text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-1.5 text-xs">
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            24x7 Helpline: 1800-123-4567
          </span>
          <span className="hidden sm:block text-white/80">
            Trusted by 2M+ patients across 120+ cities
          </span>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost" size="sm">
            <UserRound className="h-4 w-4" />
            Login
          </Button>
          <Button to="/packages" variant="green" size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavItem key={item.to} {...item} onClick={() => setOpen(false)} />
            ))}
            <div className="mt-3 flex gap-2">
              <Button to="/login" variant="outline" size="sm" className="flex-1" onClick={() => setOpen(false)}>
                Login
              </Button>
              <Button to="/packages" variant="green" size="sm" className="flex-1" onClick={() => setOpen(false)}>
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
