import { ShieldCheck, Clock3, Wallet, HeartHandshake, Microscope, Headphones } from "lucide-react"
import SectionHeading from "../ui/SectionHeading"

const features = [
  { icon: Microscope, title: "NABL Certified Labs", desc: "Every test is processed in accredited, quality-controlled laboratories." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden charges. See the exact price before you book any service." },
  { icon: Clock3, title: "Fast Reports", desc: "Most reports delivered digitally within 24 hours of collection." },
  { icon: HeartHandshake, title: "Care Coordinators", desc: "Dedicated support for surgery planning, second opinions and follow-ups." },
  { icon: ShieldCheck, title: "Data Privacy", desc: "Your health records are encrypted and shared only with your consent." },
  { icon: Headphones, title: "24x7 Support", desc: "Round-the-clock helpline and WhatsApp support for every patient." },
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
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-light text-brand-green-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white">
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
