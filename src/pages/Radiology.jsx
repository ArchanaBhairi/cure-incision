import { Scan, Clock, MapPin, Cpu, UserCheck } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"
import CtaBanner from "../components/home/CtaBanner"
import ContentImageSection from "../components/ContentImageSection"
import TrustStrip, { PageIntro } from "../components/TrustStrip"
import { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { siteImages } from "../data/images"

const scans = [
  { name: "MRI Scan", price: 4500, mrp: 7000, time: "Same day", desc: "High-resolution imaging for brain, spine and joints." },
  { name: "CT Scan", price: 3200, mrp: 5000, time: "Same day", desc: "Detailed cross-sectional imaging for accurate diagnosis." },
  { name: "Ultrasound", price: 900, mrp: 1600, time: "2 hrs", desc: "Safe, radiation-free imaging for abdomen and pregnancy." },
  { name: "Digital X-Ray", price: 400, mrp: 700, time: "1 hr", desc: "Quick imaging for bones, chest and injuries." },
  { name: "Mammography", price: 1800, mrp: 3000, time: "Same day", desc: "Early breast cancer screening for women 40+." },
  { name: "DEXA Bone Scan", price: 1500, mrp: 2600, time: "2 hrs", desc: "Bone mineral density test for osteoporosis." },
]

const equipment = [
  { icon: Cpu, title: "Latest scanners", desc: "3T MRI, 128-slice CT and digital radiography systems." },
  { icon: UserCheck, title: "Expert radiologists", desc: "Reports signed by board-certified specialists." },
  { icon: Scan, title: "PACS integration", desc: "High-resolution images shared with your doctor instantly." },
]

export default function Radiology() {
  return (
    <>
      <PageHero
        title="Radiology & Imaging"
        description="Advanced imaging services at accredited diagnostic centers with expert radiologist reports."
        breadcrumbs={[{ label: "Radiology" }]}
        image={siteImages.radiology}
        imageAlt="Medical imaging and radiology equipment"
      />

      <TrustStrip />

      <PageIntro
        title="Precision imaging at transparent prices"
        description="Book MRI, CT, ultrasound and more at partner centers near you — with same-day slots where available."
      />

      <section className="container-page py-8">
        <StaggerGrid className="mb-10 grid gap-6 md:grid-cols-3">
          {equipment.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="rounded-card border border-line bg-gradient-to-br from-brand-teal-light/80 to-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-brand-teal" />
                <h3 className="mt-3 font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scans.map((scan) => {
            const discount = Math.round(((scan.mrp - scan.price) / scan.mrp) * 100)
            return (
              <StaggerItem key={scan.name}>
                <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg card-shine gradient-border">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal-light text-brand-teal">
                    <Scan className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{scan.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{scan.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-soft">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand-blue" />
                      Report {scan.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-green" />
                      At center
                    </span>
                  </div>
                  <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-ink">₹{scan.price}</span>
                        <span className="text-sm text-ink-soft line-through">₹{scan.mrp}</span>
                      </div>
                      <span className="text-xs font-semibold text-brand-green-dark">{discount}% OFF</span>
                    </div>
                    <Button to="/login" variant="primary" size="sm">
                      Book
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGrid>
      </section>

      <ContentImageSection
        eyebrow="Preparation guides"
        title="Know what to expect before your scan"
        description="We send fasting instructions, contrast guidelines and arrival times by SMS — plus reminders to bring prior reports and doctor referrals."
        image={siteImages.labTests}
        imageAlt="Patient preparing for diagnostic scan"
        reverse
        primaryCta={{ to: "/faq", label: "Read FAQs" }}
        secondaryCta={{ to: "/contact", label: "Ask a question" }}
      />

      <CtaBanner />
    </>
  )
}
