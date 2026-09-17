import { PhoneCall, CalendarCheck, ArrowRight } from "lucide-react"
import Button from "../ui/Button"

export default function CtaBanner() {
  return (
    <section className="container-page mt-24 mb-8">
      <div className="relative overflow-hidden rounded-[2rem] px-8 py-14 text-center shadow-2xl lg:px-16 lg:py-20">
        {/* Animated mesh gradient background */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: "linear-gradient(135deg, #0f4c92 0%, #1766c0 30%, #0fb6a8 65%, #2f8f3e 100%)",
            backgroundSize: "300% 300%",
          }}
        />

        {/* Subtle noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* Animated orbs */}
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-teal/30 blur-3xl animate-drift" />
        <div className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-brand-green/25 blur-3xl animate-drift [animation-delay:-5s]" />
        <div className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-white/8 blur-2xl animate-drift [animation-delay:-9s]" />

        {/* Pulsing ring */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 [animation:pulse_4s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6 [animation:pulse_5s_ease-in-out_infinite_0.7s]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            24x7 Care Available
          </span>

          <h2 className="text-3xl font-bold text-white sm:text-5xl leading-tight">
            Ready to take charge of{" "}
            <span className="relative inline-block">
              your health?
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/80">
            Book a health checkup, consult a specialist, or talk to a care coordinator about your surgery. We are
            here for you 24x7.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              to="/packages"
              variant="green"
              size="lg"
              className="group shadow-xl shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-1 transition-all duration-300"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a checkup
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              href="tel:18001234567"
              variant="white"
              size="lg"
              className="group shadow-xl shadow-black/10 hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 border border-white/30"
            >
              <PhoneCall className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Call 1800-123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
