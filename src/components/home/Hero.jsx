import { Search, ShieldCheck, Home, BadgeCheck, Sparkles } from "lucide-react"
import Button from "../ui/Button"
import { siteImages } from "../../data/images"

const trust = [
  { icon: ShieldCheck, label: "NABL certified labs" },
  { icon: Home, label: "Free home sample pickup" },
  { icon: BadgeCheck, label: "100% accurate reports" },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#eef5ff] via-white to-[#e5f8f3]">
      {/* Top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      {/* Animated orb blobs */}
      <div className="animate-drift absolute -left-32 top-4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="animate-drift absolute -right-24 -bottom-8 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl [animation-delay:-4s]" />
      <div className="animate-drift absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-teal/8 blur-3xl [animation-delay:-8s]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-blue) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-28">
        {/* Left: text */}
        <div className="animate-slide-in-left relative z-10">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-blue/15 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue-dark shadow-[0_8px_30px_rgba(23,102,192,0.10)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            Your complete surgery &amp; care pathway
            <Sparkles className="h-3.5 w-3.5 text-brand-blue/60" />
          </span>

          {/* Headline with gradient */}
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Exceptional care,{" "}
            <span
              className="bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-teal bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: "200% 200%" }}
            >
              made simple.
            </span>
          </h1>

          <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Book full body health checkups, lab tests, doctor consultations and surgeries with trusted hospitals
            across India. Reports online, care at your doorstep.
          </p>

          {/* Search bar */}
          <form
            className="animate-fade-up stagger-3 mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/80 bg-white/95 p-2 shadow-[0_18px_50px_rgba(15,76,146,0.14)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(15,76,146,0.20)] sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="h-5 w-5 text-ink-soft transition-colors duration-200 group-focus-within:text-brand-blue" />
              <input
                type="text"
                placeholder="Search tests, packages, doctors…"
                className="w-full bg-transparent py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft"
                aria-label="Search tests, packages or doctors"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="sm:w-auto shadow-lg shadow-brand-blue/25 hover:-translate-y-0.5 transition-transform duration-200">
              Search
            </Button>
          </form>

          {/* Trust badges */}
          <div className="animate-fade-up stagger-4 mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-ink-soft"
                style={{ animationDelay: `${i * 80 + 300}ms` }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green-light transition-transform duration-300 hover:scale-110">
                  <Icon className="h-4 w-4 text-brand-green-dark" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: image with floating cards */}
        <div className="animate-slide-in-right relative">
          {/* Floating NABL badge */}
          <div className="animate-float-slow absolute -left-5 top-10 z-10 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-light">
                <ShieldCheck className="h-4 w-4 text-brand-blue-dark" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">NABL certified partners</p>
                <p className="mt-0.5 text-[10px] text-ink-soft">Quality you can verify</p>
              </div>
            </div>
          </div>

          {/* Glow halos */}
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-brand-green/25 blur-2xl" />
          <div className="absolute -bottom-8 -right-6 h-48 w-48 rounded-full bg-brand-blue/20 blur-2xl" />

          {/* Main image */}
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_28px_70px_rgba(15,76,146,0.22)] transition-shadow duration-500 hover:shadow-[0_36px_90px_rgba(15,76,146,0.30)]">
            {/* Animated gradient ring */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
            <img
              src={siteImages.heroCare}
              alt="A friendly doctor ready to help patients at CureIncision Health Care"
              className="h-full w-full scale-[1.01] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating patients badge */}
          <div className="animate-float absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl backdrop-blur [animation-delay:-2s]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green-light to-brand-teal-light transition-transform duration-300 hover:scale-110">
              <BadgeCheck className="h-5 w-5 text-brand-green-dark" />
            </div>
            <div>
              <p className="text-sm font-bold text-ink">2M+ patients</p>
              <p className="text-xs text-ink-soft">trust CureIncision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
