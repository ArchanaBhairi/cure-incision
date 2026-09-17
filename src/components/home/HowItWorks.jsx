import { Search, CalendarCheck, Home, FileText } from "lucide-react"
import SectionHeading from "../ui/SectionHeading"

const steps = [
  { icon: Search, title: "Choose a service", desc: "Pick a health package, lab test or book a doctor consultation online." },
  { icon: CalendarCheck, title: "Book a slot", desc: "Select a convenient date and time for your visit or home collection." },
  { icon: Home, title: "Get care at home", desc: "Our certified professional collects your sample or you visit the partner center." },
  { icon: FileText, title: "View reports online", desc: "Access accurate digital reports on your dashboard, shareable with any doctor." },
]

export default function HowItWorks() {
  return (
    <section className="container-page mt-24">
      <SectionHeading
        eyebrow="Simple Process"
        title="How CureIncision works"
        description="From booking to reports, we make your healthcare journey effortless in four easy steps."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }, index) => (
          <div key={title} className="group relative overflow-hidden rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-teal transition-transform duration-500 group-hover:scale-x-100" />
            <span className="absolute right-5 top-5 text-4xl font-bold text-brand-blue-light">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
