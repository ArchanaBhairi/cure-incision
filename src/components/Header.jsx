import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, Phone, UserRound, ChevronDown } from "lucide-react"
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
        `relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 group ${
          isActive
            ? "bg-brand-blue-light text-brand-blue-dark"
            : "text-ink-soft hover:text-brand-blue-dark hover:bg-brand-blue-light/50"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {/* animated underline dot */}
          <span
            className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-blue transition-all duration-300 ${
              isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60"
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_4px_24px_rgba(15,76,146,0.10)]"
          : "border-b border-line bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        } bg-gradient-to-r from-brand-blue-dark via-[#1a5db0] to-brand-blue-dark text-white`}
      >
        <div className="container-page flex flex-wrap items-center justify-between gap-2 py-1.5 text-xs">
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 animate-pulse" />
            24x7 Helpline: 1800-123-4567
          </span>
          <span className="hidden sm:block text-white/80">
            Trusted by 2M+ patients across 120+ cities
          </span>
        </div>
      </div>

      <div className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>
        {/* Logo shrinks slightly on scroll */}
        <div className={`transition-transform duration-300 ${scrolled ? "scale-95" : "scale-100"}`}>
          <Logo />
        </div>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost" size="sm" className="group">
            <UserRound className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            Login
          </Button>
          <Button
            to="/packages"
            variant="green"
            size="sm"
            className="relative overflow-hidden shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 animate-shimmer opacity-0 hover:opacity-100" />
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-all duration-200 hover:border-brand-blue/40 hover:bg-brand-blue-light hover:text-brand-blue-dark active:scale-95 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`transition-all duration-300 ${open ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}>
            <Menu className="h-5 w-5" />
          </span>
          <span className={`transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}>
            <X className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        className={`overflow-hidden border-t border-line bg-white/95 backdrop-blur-xl transition-all duration-400 ease-in-out xl:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {nav.map((item, i) => (
            <div
              key={item.to}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <NavItem {...item} onClick={() => setOpen(false)} />
            </div>
          ))}
          <div className="mt-3 flex gap-2 animate-fade-up stagger-6">
            <Button to="/login" variant="outline" size="sm" className="flex-1" onClick={() => setOpen(false)}>
              Login
            </Button>
            <Button to="/packages" variant="green" size="sm" className="flex-1" onClick={() => setOpen(false)}>
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
