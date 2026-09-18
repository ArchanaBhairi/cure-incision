import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, Phone, UserRound, Sparkles, ChevronRight, Shield, Clock } from "lucide-react"
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

const tickers = [
  { icon: Phone,    text: "24×7 Helpline: 1800-123-4567" },
  { icon: Shield,   text: "NABH Accredited Labs across 120+ cities" },
  { icon: Sparkles, text: "Trusted by 2M+ patients — Book in 60 seconds" },
  { icon: Clock,    text: "Reports delivered in 6–8 hours" },
]

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 group ${
          isActive
            ? "text-brand-blue-dark"
            : "text-ink-soft hover:text-brand-blue-dark"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* pill bg */}
          <span
            className={`absolute inset-0 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-brand-blue-light opacity-100"
                : "bg-brand-blue-light opacity-0 group-hover:opacity-60"
            }`}
          />
          <span className="relative z-10">{label}</span>
          {/* active underline dot */}
          <span
            className={`absolute -bottom-px left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-blue transition-all duration-300 ${
              isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-50"
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Header() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [tickerIdx, setTickerIdx]     = useState(0)
  const [tickerVisible, setTickerVisible] = useState(true)
  const tickerTimer = useRef(null)

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ticker rotation */
  useEffect(() => {
    tickerTimer.current = setInterval(() => {
      setTickerVisible(false)
      setTimeout(() => {
        setTickerIdx((i) => (i + 1) % tickers.length)
        setTickerVisible(true)
      }, 380)
    }, 3600)
    return () => clearInterval(tickerTimer.current)
  }, [])

  const TickerIcon = tickers[tickerIdx].icon

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(15,76,146,0.12)] border-b border-white/60"
          : "bg-white/95 backdrop-blur-sm border-b border-line"
      }`}
    >
      {/* ── Top announcement bar ────────────────────────── */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
        style={{
          background: "linear-gradient(90deg, #0f4c92 0%, #1766c0 45%, #0fb6a8 100%)",
        }}
      >
        <div className="container-page flex items-center justify-between gap-4 py-2 text-xs font-medium text-white">
          <span
            className={`flex items-center gap-2 transition-all duration-300 ${
              tickerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <TickerIcon className="h-3.5 w-3.5 shrink-0 opacity-90" />
            {tickers[tickerIdx].text}
          </span>
          <a
            href="tel:18001234567"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-0.5 hover:bg-white/20 transition-colors duration-200"
          >
            <Phone className="h-3 w-3" />
            Call Now
            <ChevronRight className="h-3 w-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* ── Main nav row ────────────────────────────────── */}
      <div
        className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-2.5"
        }`}
      >
        {/* Logo */}
        <div className={`transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}>
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost" size="sm" className="group gap-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-light transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white">
              <UserRound className="h-3.5 w-3.5" />
            </span>
            <span className="text-ink-soft group-hover:text-brand-blue-dark transition-colors duration-200">Login</span>
          </Button>

          <Button
            to="/packages"
            variant="green"
            size="sm"
            className="relative overflow-hidden gap-2 shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            Book Now
            <span className="pointer-events-none absolute inset-0 animate-shimmer" />
          </Button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-200 hover:border-brand-blue/40 hover:bg-brand-blue-light hover:text-brand-blue-dark active:scale-95 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`absolute transition-all duration-300 ${open ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"}`}>
            <Menu className="h-5 w-5" />
          </span>
          <span className={`absolute transition-all duration-300 ${open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"}`}>
            <X className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* ── Gradient accent line ─────────────────────────── */}
      <div
        className={`h-[2px] transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
        style={{
          background: "linear-gradient(90deg, transparent 0%, #1766c0 30%, #0fb6a8 60%, #46b555 85%, transparent 100%)",
        }}
      />

      {/* ── Mobile drawer ───────────────────────────────── */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${
          open ? "max-h-[580px] opacity-100" : "max-h-0 opacity-0"
        } border-t border-line bg-white/98 backdrop-blur-2xl`}
      >
        <nav className="container-page flex flex-col gap-1 pb-6 pt-4" aria-label="Mobile navigation">
          {nav.map((item, i) => (
            <div key={item.to} className="animate-fade-up" style={{ animationDelay: `${i * 35}ms` }}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                      : "text-ink hover:bg-brand-blue-light hover:text-brand-blue-dark"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isActive ? "opacity-100 translate-x-0.5" : "opacity-30"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </div>
          ))}

          {/* CTA row */}
          <div className="mt-4 grid grid-cols-2 gap-2 animate-fade-up stagger-6 border-t border-line pt-4">
            <Button to="/login" variant="outline" size="sm" className="w-full" onClick={() => setOpen(false)}>
              <UserRound className="h-4 w-4" />
              Login
            </Button>
            <Button to="/packages" variant="green" size="sm" className="relative w-full overflow-hidden" onClick={() => setOpen(false)}>
              <Sparkles className="h-4 w-4" />
              Book Now
              <span className="pointer-events-none absolute inset-0 animate-shimmer" />
            </Button>
          </div>

          {/* Quick-call strip */}
          <a
            href="tel:18001234567"
            className="mt-2 flex animate-fade-up stagger-6 items-center justify-center gap-2 rounded-xl border border-brand-blue/20 bg-brand-blue-light py-2.5 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue/10"
          >
            <Phone className="h-4 w-4" />
            1800-123-4567 · Free Helpline
          </a>
        </nav>
      </div>
    </header>
  )
}
