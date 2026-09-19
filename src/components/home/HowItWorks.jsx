import { Search, CalendarCheck, Home, FileText } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "../ui/SectionHeading"

const steps = [
  { icon: Search,        title: "Choose a service",  desc: "Pick a health package, lab test or book a doctor consultation online.",                  color: "from-brand-blue to-brand-blue-dark",    light: "bg-brand-blue-light",    iconColor: "text-brand-blue-dark" },
  { icon: CalendarCheck, title: "Book a slot",        desc: "Select a convenient date and time for your visit or home collection.",                   color: "from-brand-teal to-brand-blue",          light: "bg-brand-teal-light",    iconColor: "text-brand-teal" },
  { icon: Home,          title: "Get care at home",   desc: "Our certified professional collects your sample or you visit the partner center.",        color: "from-brand-green to-brand-teal",         light: "bg-brand-green-light",   iconColor: "text-brand-green-dark" },
  { icon: FileText,      title: "View reports online", desc: "Access accurate digital reports on your dashboard, shareable with any doctor.",         color: "from-brand-green-dark to-brand-green",   light: "bg-brand-green-light",   iconColor: "text-brand-green-dark" },
]

export default function HowItWorks() {
  return (
    <section className="container-page mt-24">
      <SectionHeading
        eyebrow="Simple Process"
        title="How CureIncision works"
        description="From booking to reports, we make your healthcare journey effortless in four easy steps."
      />
      <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Connector line (desktop only) */}
        <div className="absolute top-12 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent lg:block" />

        {steps.map(({ icon: Icon, title, desc, color, light, iconColor }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl card-shine gradient-border"
          >
            {/* Top gradient bar */}
            <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${color} transition-transform duration-500 group-hover:scale-x-100 rounded-t-card`} />

            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-400 group-hover:opacity-[0.04]`} />

            {/* Step number */}
            <span
              className={`absolute right-5 top-5 bg-gradient-to-br ${color} bg-clip-text text-transparent text-4xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-30`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Icon */}
            <span
              className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}
            >
              <Icon className="h-6 w-6" />
              {/* Icon glow */}
              <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50`} />
            </span>

            <h3 className="relative mt-5 text-lg font-bold text-ink transition-colors duration-200 group-hover:text-brand-blue-dark">
              {title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>

            {/* Step connector dot (desktop) */}
            <div className={`absolute -right-3 top-12 z-10 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${color} shadow-md lg:flex ${index === steps.length - 1 ? "!hidden" : ""}`}>
              <span className="h-2 w-2 rounded-full bg-white/80" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
