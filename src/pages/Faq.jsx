import { useState } from "react"
import { ChevronDown } from "lucide-react"
import PageHero from "../components/PageHero"

const faqs = [
  { q: "How do I book a health checkup or test?", a: "Browse our packages or tests, select the one you need, choose a home collection or center visit, pick a time slot, and confirm your booking. You'll get a confirmation on SMS and email." },
  { q: "Is home sample collection really free?", a: "Yes. Home sample collection is free for all lab tests and health packages. A certified phlebotomist visits your home at your chosen time with sterile, single-use kits." },
  { q: "When will I receive my reports?", a: "Most reports are delivered digitally within 6 to 24 hours depending on the test. You can view and download them anytime from your patient dashboard." },
  { q: "Are the labs certified?", a: "All tests are processed at NABL-certified, quality-controlled laboratories to ensure accuracy and reliability." },
  { q: "Can I consult a doctor online?", a: "Yes. Many of our doctors offer video consultations. Simply choose a doctor who offers video consults and book an available slot." },
  { q: "How does the surgery care pathway work?", a: "Our care coordinators help you compare hospitals and costs, schedule pre-op tests, plan admission and support your recovery — all in one place." },
  { q: "What is your refund policy?", a: "If you cancel before sample collection or your appointment, you're eligible for a full refund. Refunds are processed to the original payment method within 5-7 business days." },
  { q: "Is my health data secure?", a: "Absolutely. Your records are encrypted and shared only with your explicit consent, following strict data-privacy practices." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-line bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>}
    </div>
  )
}

export default function Faq() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Everything you need to know about booking tests, consultations and surgeries with CureIncision."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="container-page py-12">
        <div className="mx-auto grid max-w-3xl gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </section>
    </>
  )
}
