import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"
import CtaBanner from "../components/home/CtaBanner"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { siteImages } from "../data/images"

const channels = [
  { icon: Phone, title: "Call us", value: "1800-123-4567", href: "tel:18001234567" },
  { icon: Mail, title: "Email us", value: "care@cureincision.com", href: "mailto:care@cureincision.com" },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat 24x7", href: "https://wa.me/911800123456" },
  { icon: MapPin, title: "Visit us", value: "Health City, Bengaluru", href: "#" },
]

const hours = [
  { day: "Mon – Sat", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "9:00 AM – 6:00 PM" },
  { day: "Emergency line", time: "24x7" },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question or need help booking? Our support team is available around the clock."
        breadcrumbs={[{ label: "Contact" }]}
        image={siteImages.contactOffice}
        imageAlt="CureIncision support office"
      />

      <section className="container-page py-12">
        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, value, href }) => (
            <StaggerItem key={title}>
              <a
                href={href}
                className="block rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/20 hover:shadow-lg card-shine"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink-soft">{title}</h3>
                <p className="mt-1 text-base font-bold text-ink">{value}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <AnimateIn className="lg:col-span-3" direction="left">
            <div className="overflow-hidden rounded-card border border-line shadow-sm">
              <img
                src={siteImages.contactOffice}
                alt="Our office location"
                className="h-48 w-full object-cover lg:h-full lg:min-h-[320px]"
                loading="lazy"
              />
            </div>
          </AnimateIn>
          <AnimateIn className="lg:col-span-2" direction="right" delay={0.1}>
            <div className="rounded-card border border-line bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-teal" />
                <h2 className="text-lg font-bold text-ink">Support hours</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex justify-between border-b border-line pb-3 text-sm last:border-0">
                    <span className="font-medium text-ink">{day}</span>
                    <span className="text-ink-soft">{time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                For urgent surgery coordination, call our 24x7 care line anytime.
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn className="mt-10 mx-auto max-w-2xl" delay={0.15}>
          <div className="rounded-card border border-line bg-surface p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
            {submitted ? (
              <div className="mt-6 rounded-2xl bg-brand-green-light p-6 text-center animate-scale-up">
                <p className="font-semibold text-brand-green-dark">
                  Thanks for reaching out! We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <input required placeholder="Full name" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
                <input required type="tel" placeholder="Phone number" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
                <input required type="email" placeholder="Email address" className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue sm:col-span-2" />
                <textarea required placeholder="How can we help you?" rows={4} className="rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue sm:col-span-2" />
                <Button type="submit" variant="primary" size="md" className="sm:col-span-2">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </AnimateIn>
      </section>

      <CtaBanner />
    </>
  )
}
