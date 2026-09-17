import { useState } from "react"
import { ChevronDown, HelpCircle, BookOpen } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import CtaBanner from "../components/home/CtaBanner"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { siteImages } from "../data/images"

const faqs = [
  { q: "How do I book a health checkup or test?", a: "Browse our packages or tests, select the one you need, choose a home collection or center visit, pick a time slot, and confirm your booking. You'll get a confirmation on SMS and email.", category: "Booking" },
  { q: "Is home sample collection really free?", a: "Yes. Home sample collection is free for all lab tests and health packages. A certified phlebotomist visits your home at your chosen time with sterile, single-use kits.", category: "Booking" },
  { q: "When will I receive my reports?", a: "Most reports are delivered digitally within 6 to 24 hours depending on the test. You can view and download them anytime from your patient dashboard.", category: "Reports" },
  { q: "Are the labs certified?", a: "All tests are processed at NABL-certified, quality-controlled laboratories to ensure accuracy and reliability.", category: "Reports" },
  { q: "Can I consult a doctor online?", a: "Yes. Many of our doctors offer video consultations. Simply choose a doctor who offers video consults and book an available slot.", category: "Doctors" },
  { q: "How does the surgery care pathway work?", a: "Our care coordinators help you compare hospitals and costs, schedule pre-op tests, plan admission and support your recovery — all in one place.", category: "Surgery" },
  { q: "What is your refund policy?", a: "If you cancel before sample collection or your appointment, you're eligible for a full refund. Refunds are processed to the original payment method within 5-7 business days.", category: "Booking" },
  { q: "Is my health data secure?", a: "Absolutely. Your records are encrypted and shared only with your explicit consent, following strict data-privacy practices.", category: "Reports" },
]

const topicFilters = ["All", "Booking", "Reports", "Doctors", "Surgery"]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [topic, setTopic] = useState("All")
  const filtered = topic === "All" ? faqs : faqs.filter((f) => f.category === topic)

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Everything you need to know about booking tests, consultations and surgeries with CureIncision."
        breadcrumbs={[{ label: "FAQ" }]}
        image={siteImages.dashboard}
        imageAlt="Patient using health dashboard"
      />

      <section className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <AnimateIn direction="left" className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-card border border-line shadow-sm">
                <img src={siteImages.doctorConsult} alt="" className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <HelpCircle className="h-8 w-8 text-brand-blue" />
                  <h2 className="mt-3 text-lg font-bold text-ink">Still have questions?</h2>
                  <p className="mt-2 text-sm text-ink-soft">Our support team responds within minutes on chat and within 2 hours on email.</p>
                  <Link to="/contact" className="mt-4 inline-flex text-sm font-semibold text-brand-blue-dark hover:underline">
                    Contact support →
                  </Link>
                </div>
              </div>
              <div className="rounded-card border border-line bg-brand-green-light/50 p-6">
                <BookOpen className="h-6 w-6 text-brand-green-dark" />
                <p className="mt-3 text-sm font-semibold text-ink">Browse by topic</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topicFilters.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        topic === t ? "bg-brand-blue text-white" : "bg-white text-ink-soft hover:text-brand-blue-dark"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          <div className="lg:col-span-2">
            <StaggerGrid className="grid gap-4">
              {filtered.map((faq) => (
                <StaggerItem key={faq.q}>
                  <FaqItem q={faq.q} a={faq.a} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
