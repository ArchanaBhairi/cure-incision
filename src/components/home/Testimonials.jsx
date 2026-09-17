import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import SectionHeading from "../ui/SectionHeading"

const testimonials = [
  {
    name: "Ananya Sharma",
    city: "Bengaluru",
    avatar: "AS",
    color: "from-brand-blue to-brand-teal",
    text: "Booked a full body checkup with home collection. The phlebotomist was on time and reports came in a day. So convenient!",
  },
  {
    name: "Rakesh Iyer",
    city: "Chennai",
    avatar: "RI",
    color: "from-brand-green to-brand-teal",
    text: "The care coordinator helped me plan my father's surgery, compared hospitals and costs. Made a stressful time so much easier.",
  },
  {
    name: "Meera Joshi",
    city: "Mumbai",
    avatar: "MJ",
    color: "from-brand-teal to-brand-blue-dark",
    text: "Loved the transparent pricing and the video consultation. My doctor was patient and thorough. Highly recommend CureIncision.",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(null)

  return (
    <section className="relative mt-24 overflow-hidden bg-surface py-20">
      {/* Background blobs */}
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-brand-blue/6 blur-3xl animate-drift" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl animate-drift [animation-delay:-6s]" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/6 blur-3xl" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Loved by patients across India"
          description="Real experiences from people who trusted CureIncision with their health."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <figure
              key={t.name}
              className="group relative flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent card-shine gradient-border animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Gradient top accent */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-card bg-gradient-to-r ${t.color} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`} />

              {/* Quote icon */}
              <Quote
                className={`h-8 w-8 transition-all duration-400 ${
                  active === index
                    ? "text-brand-blue/30 scale-125 rotate-6"
                    : "text-brand-blue-light"
                }`}
              />

              {/* Stars */}
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400 transition-transform duration-200"
                    style={{ transitionDelay: `${i * 50}ms`, transform: active === index ? `scale(${1.1 + i * 0.02})` : "scale(1)" }}
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                {t.text}
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  {t.avatar}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-ink-soft">{t.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
