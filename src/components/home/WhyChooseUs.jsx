import { ShieldCheck, Clock3, Wallet, HeartHandshake, Microscope, Headphones } from "lucide-react"
import SectionHeading from "../ui/SectionHeading"

const features = [
  { icon: Microscope,    title: "NABL Certified Labs",   desc: "Every test is processed in accredited, quality-controlled laboratories.",                color: "bg-brand-blue-light",    iconColor: "text-brand-blue-dark",    hoverColor: "from-brand-blue to-brand-blue-dark",   accent: "#1766c0" },
  { icon: Wallet,        title: "Transparent Pricing",   desc: "No hidden charges. See the exact price before you book any service.",                   color: "bg-brand-green-light",   iconColor: "text-brand-green-dark",   hoverColor: "from-brand-green to-brand-teal",        accent: "#46b555" },
  { icon: Clock3,        title: "Fast Reports",          desc: "Most reports delivered digitally within 24 hours of collection.",                       color: "bg-brand-teal-light",    iconColor: "text-brand-teal",         hoverColor: "from-brand-teal to-brand-blue",         accent: "#0fb6a8" },
  { icon: HeartHandshake,title: "Care Coordinators",     desc: "Dedicated support for surgery planning, second opinions and follow-ups.",                color: "bg-brand-blue-light",    iconColor: "text-brand-blue-dark",    hoverColor: "from-brand-blue-dark to-brand-blue",    accent: "#0f4c92" },
  { icon: ShieldCheck,   title: "Data Privacy",          desc: "Your health records are encrypted and shared only with your consent.",                   color: "bg-brand-green-light",   iconColor: "text-brand-green-dark",   hoverColor: "from-brand-green-dark to-brand-green",  accent: "#2f8f3e" },
  { icon: Headphones,    title: "24x7 Support",          desc: "Round-the-clock helpline and WhatsApp support for every patient.",                       color: "bg-brand-teal-light",    iconColor: "text-brand-teal",         hoverColor: "from-brand-teal to-brand-green",        accent: "#0fb6a8" },
]

export default function WhyChooseUs() {
  return (
    <section className="container-page mt-24">
      <SectionHeading
        eyebrow="Why CureIncision"
        title="Healthcare you can trust"
        description="We combine clinical quality with a delightful, transparent experience at every step."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc, color, iconColor, hoverColor, accent }, i) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl card-shine gradient-border animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${hoverColor} opacity-0 transition-opacity duration-400 group-hover:opacity-[0.04]`} />

            {/* Animated corner accent */}
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30 opacity-0"
              style={{ background: accent }}
            />

            {/* Icon */}
            <span
              className={`relative flex h-13 w-13 items-center justify-center rounded-2xl ${color} ${iconColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              style={{ "--icon-shadow": `0 8px 24px ${accent}30` }}
            >
              <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
              {/* Glow */}
              <span
                className="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: accent }}
              />
            </span>

            <h3 className="relative mt-5 text-lg font-bold text-ink transition-colors duration-200 group-hover:text-brand-blue-dark">
              {title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>

            {/* Bottom gradient bar */}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${hoverColor} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`} />
          </div>
        ))}
      </div>
    </section>
  )
}
