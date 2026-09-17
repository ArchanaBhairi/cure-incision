import { PhoneCall, CalendarCheck } from "lucide-react"
import Button from "../ui/Button"

export default function CtaBanner() {
  return (
    <section className="container-page mt-24">
      <div className="relative overflow-hidden rounded-card bg-brand-blue-dark px-8 py-12 text-center shadow-lg lg:px-16 lg:py-16">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-brand-green/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-white/10 [animation-duration:4s]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to take charge of your health?</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Book a health checkup, consult a specialist, or talk to a care coordinator about your surgery. We are
            here for you 24x7.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/packages" variant="green" size="lg">
              <CalendarCheck className="h-5 w-5" />
              Book a checkup
            </Button>
            <Button href="tel:18001234567" variant="white" size="lg">
              <PhoneCall className="h-5 w-5" />
              Call 1800-123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
