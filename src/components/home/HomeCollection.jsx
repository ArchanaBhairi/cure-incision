import { Check, Sparkles } from "lucide-react"
import Button from "../ui/Button"
import { siteImages } from "../../data/images"

const points = [
  "Free sample collection at your doorstep",
  "Trained & verified phlebotomists",
  "Safe, hygienic, single-use kits",
  "Digital reports within 24 hours",
]

export default function HomeCollection() {
  return (
    <section className="container-page mt-24">
      <div className="group grid items-center gap-0 overflow-hidden rounded-[2rem] border border-brand-blue/10 shadow-[0_24px_70px_rgba(15,76,146,0.14)] transition-shadow duration-500 hover:shadow-[0_32px_90px_rgba(15,76,146,0.20)] lg:grid-cols-2">
        {/* Left content */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-blue-light via-white to-brand-teal-light p-8 lg:p-12">
          {/* Decorative blobs */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl animate-drift" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-brand-teal/15 blur-2xl animate-drift [animation-delay:-6s]" />

          <span className="relative inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-dark shadow-sm border border-brand-blue/10">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            Home Sample Collection
          </span>

          <h2 className="relative mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Lab tests from the{" "}
            <span className="bg-gradient-to-r from-brand-blue-dark to-brand-teal bg-clip-text text-transparent">
              comfort of your home
            </span>
          </h2>

          <p className="relative mt-4 text-base leading-relaxed text-ink-soft">
            Skip the queue. Book any test or health package and our certified professional will collect your
            sample at a time that suits you.
          </p>

          <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm font-medium text-ink animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-teal text-white shadow-sm transition-transform duration-300 hover:scale-110">
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <Button
              to="/tests"
              variant="primary"
              size="lg"
              className="group shadow-lg shadow-brand-blue/25 hover:-translate-y-0.5 hover:shadow-brand-blue/40 transition-all duration-200"
            >
              Book a home test
            </Button>
            <Button
              to="/packages"
              variant="outline"
              size="lg"
              className="hover:-translate-y-0.5 transition-transform duration-200"
            >
              View packages
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative h-full min-h-72 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue-dark/25 via-transparent to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-blue-light/20 to-transparent lg:block hidden" />
          <img
            src={siteImages.homeCollection}
            alt="A certified professional collecting a sample at a patient's home"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Floating badge over image */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur animate-float">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-teal text-white">
              <Check className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-ink">Same day booking</p>
              <p className="text-[10px] text-ink-soft">available now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
