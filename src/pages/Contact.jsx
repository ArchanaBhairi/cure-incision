import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"

const channels = [
  { icon: Phone, title: "Call us", value: "1800-123-4567", href: "tel:18001234567" },
  { icon: Mail, title: "Email us", value: "care@cureincision.com", href: "mailto:care@cureincision.com" },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat 24x7", href: "https://wa.me/911800123456" },
  { icon: MapPin, title: "Visit us", value: "Health City, Bengaluru", href: "#" },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question or need help booking? Our support team is available around the clock."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href}
              className="rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink-soft">{title}</h3>
              <p className="mt-1 text-base font-bold text-ink">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 mx-auto max-w-2xl rounded-card border border-line bg-surface p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
          {submitted ? (
            <div className="mt-6 rounded-2xl bg-brand-green-light p-6 text-center">
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
      </section>
    </>
  )
}
