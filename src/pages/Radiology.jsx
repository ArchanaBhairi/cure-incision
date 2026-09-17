import { Scan, Clock, MapPin } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"

const scans = [
  { name: "MRI Scan", price: 4500, mrp: 7000, time: "Same day", desc: "High-resolution imaging for brain, spine and joints." },
  { name: "CT Scan", price: 3200, mrp: 5000, time: "Same day", desc: "Detailed cross-sectional imaging for accurate diagnosis." },
  { name: "Ultrasound", price: 900, mrp: 1600, time: "2 hrs", desc: "Safe, radiation-free imaging for abdomen and pregnancy." },
  { name: "Digital X-Ray", price: 400, mrp: 700, time: "1 hr", desc: "Quick imaging for bones, chest and injuries." },
  { name: "Mammography", price: 1800, mrp: 3000, time: "Same day", desc: "Early breast cancer screening for women 40+." },
  { name: "DEXA Bone Scan", price: 1500, mrp: 2600, time: "2 hrs", desc: "Bone mineral density test for osteoporosis." },
]

export default function Radiology() {
  return (
    <>
      <PageHero
        title="Radiology & Imaging"
        description="Advanced imaging services at accredited diagnostic centers with expert radiologist reports."
        breadcrumbs={[{ label: "Radiology" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scans.map((scan) => {
            const discount = Math.round(((scan.mrp - scan.price) / scan.mrp) * 100)
            return (
              <div
                key={scan.name}
                className="flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
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
            )
          })}
        </div>
      </section>
    </>
  )
}
