import { Check } from "lucide-react"
import Button from "../ui/Button"

const points = [
  "Free sample collection at your doorstep",
  "Trained & verified phlebotomists",
  "Safe, hygienic, single-use kits",
  "Digital reports within 24 hours",
]

export default function HomeCollection() {
  return (
    <section className="container-page mt-24">
      <div className="group grid items-center gap-10 overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-gradient-to-br from-brand-blue-light via-white to-brand-teal-light shadow-[0_20px_60px_rgba(15,76,146,0.12)] lg:grid-cols-2">
        <div className="p-8 lg:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-dark">
            Home Sample Collection
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Lab tests from the comfort of your home
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Skip the queue. Book any test or health package and our certified professional will collect your
            sample at a time that suits you.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/tests" variant="primary" size="lg">
              Book a home test
            </Button>
            <Button to="/packages" variant="outline" size="lg">
              View packages
            </Button>
          </div>
        </div>
        <div className="relative h-full min-h-64 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue-dark/20 to-transparent" />
          <img
            src="/images/home-collection.png"
            alt="A certified professional collecting a sample at a patient's home"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
