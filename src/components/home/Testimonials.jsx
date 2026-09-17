import { Star, Quote } from "lucide-react"
import SectionHeading from "../ui/SectionHeading"

const testimonials = [
  {
    name: "Ananya Sharma",
    city: "Bengaluru",
    text: "Booked a full body checkup with home collection. The phlebotomist was on time and reports came in a day. So convenient!",
  },
  {
    name: "Rakesh Iyer",
    city: "Chennai",
    text: "The care coordinator helped me plan my father's surgery, compared hospitals and costs. Made a stressful time so much easier.",
  },
  {
    name: "Meera Joshi",
    city: "Mumbai",
    text: "Loved the transparent pricing and the video consultation. My doctor was patient and thorough. Highly recommend CureIncision.",
  },
]

export default function Testimonials() {
  return (
    <section className="relative mt-24 overflow-hidden bg-surface py-20">
      <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Loved by patients across India"
          description="Real experiences from people who trusted CureIncision with their health."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <figure key={t.name} className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
              <Quote className="h-8 w-8 text-brand-blue-light transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-blue/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{t.text}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {t.name[0]}
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
