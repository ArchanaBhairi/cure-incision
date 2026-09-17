import { CalendarClock, FileText, FlaskConical, Stethoscope, Download, ChevronRight } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"

const stats = [
  { icon: CalendarClock, label: "Upcoming", value: "2 bookings" },
  { icon: FileText, label: "Reports ready", value: "5 reports" },
  { icon: Stethoscope, label: "Consultations", value: "3 done" },
  { icon: FlaskConical, label: "Tests taken", value: "12 total" },
]

const upcoming = [
  { title: "Full Body Advanced Checkup", type: "Home collection", when: "Tomorrow, 7:30 AM", status: "Confirmed" },
  { title: "Video consult · Dr. Arjun Mehta", type: "Cardiology", when: "Mar 18, 5:00 PM", status: "Confirmed" },
]

const reports = [
  { title: "Lipid Profile", date: "Mar 10, 2026", status: "Ready" },
  { title: "Thyroid Profile (T3 T4 TSH)", date: "Mar 8, 2026", status: "Ready" },
  { title: "Complete Blood Count", date: "Feb 28, 2026", status: "Ready" },
]

export default function Dashboard() {
  return (
    <>
      <PageHero
        title="Welcome back, Ananya"
        description="Here's an overview of your bookings, reports and consultations."
        breadcrumbs={[{ label: "Dashboard" }]}
      />

      <section className="container-page py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-card border border-line bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm text-ink-soft">{label}</p>
              <p className="text-xl font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink">Upcoming bookings</h2>
              <Button to="/packages" variant="ghost" size="sm">
                Book more
              </Button>
            </div>
            <ul className="mt-4 space-y-3">
              {upcoming.map((item) => (
                <li key={item.title} className="rounded-2xl border border-line p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-ink-soft">{item.type}</p>
                    </div>
                    <span className="rounded-full bg-brand-green-light px-2.5 py-1 text-xs font-semibold text-brand-green-dark">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-soft">
                    <CalendarClock className="h-3.5 w-3.5" />
                    {item.when}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-line bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink">Recent reports</h2>
              <span className="text-sm text-brand-blue-dark">View all</span>
            </div>
            <ul className="mt-4 divide-y divide-line">
              {reports.map((report) => (
                <li key={report.title} className="flex items-center justify-between gap-2 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal-light text-brand-teal">
                      <FileText className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{report.title}</p>
                      <p className="text-xs text-ink-soft">{report.date}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-brand-blue-dark hover:bg-brand-blue-light">
                    <Download className="h-3.5 w-3.5" />
                    PDF
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-card border border-brand-blue/20 bg-brand-blue-light p-6">
          <div>
            <h3 className="text-lg font-bold text-ink">Need help with a surgery?</h3>
            <p className="text-sm text-ink-soft">Talk to a dedicated care coordinator to plan your procedure.</p>
          </div>
          <Button to="/contact" variant="primary" size="md">
            Get support
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
