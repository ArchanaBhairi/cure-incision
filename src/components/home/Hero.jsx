import { Search, ShieldCheck, Home, BadgeCheck } from "lucide-react"
import Button from "../ui/Button"

const trust = [
  { icon: ShieldCheck, label: "NABL certified labs" },
  { icon: Home, label: "Free home sample pickup" },
  { icon: BadgeCheck, label: "100% accurate reports" },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#eef5ff] via-white to-[#e5f8f3]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      <div className="animate-drift absolute -left-24 top-12 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="animate-drift absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl [animation-delay:-4s]" />
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue-dark shadow-[0_8px_30px_rgba(23,102,192,0.08)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            Your complete surgery & care pathway
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Exceptional care, <span className="bg-gradient-to-r from-brand-blue-dark to-brand-teal bg-clip-text text-transparent">made simple.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Book full body health checkups, lab tests, doctor consultations and surgeries with trusted hospitals
            across India. Reports online, care at your doorstep.
          </p>

          <form
            className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/80 bg-white/95 p-2 shadow-[0_18px_50px_rgba(15,76,146,0.14)] backdrop-blur sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="h-5 w-5 text-ink-soft" />
              <input
                type="text"
                placeholder="Search tests, packages, doctors…"
                className="w-full bg-transparent py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft"
                aria-label="Search tests, packages or doctors"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="sm:w-auto">
              Search
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <Icon className="h-4.5 w-4.5 text-brand-green-dark" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="animate-float absolute -left-5 top-10 z-10 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-xs font-semibold text-ink">NABL certified partners</p>
            <p className="mt-1 text-xs text-ink-soft">Quality you can verify</p>
          </div>
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-brand-green/20 blur-2xl" />
          <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-brand-blue/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-[0_28px_70px_rgba(15,76,146,0.22)]">
            <img
              src="/images/hero-care.png"
              alt="A friendly doctor ready to help patients at CureIncision Health Care"
              className="h-full w-full scale-[1.01] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="animate-float absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl backdrop-blur [animation-delay:-2s]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-light">
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
