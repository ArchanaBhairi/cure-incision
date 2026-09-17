import { useParams } from "react-router-dom"
import { Star, Home, Clock, FlaskConical, Check, Droplet, Users, ShieldCheck } from "lucide-react"
import PageHero from "../components/PageHero"
import Button from "../components/ui/Button"
import PackageCard from "../components/cards/PackageCard"
import { packages } from "../data/packages"

export default function PackageDetail() {
  const { id } = useParams()
  const pkg = packages.find((p) => p.id === id)

  if (!pkg) {
    return (
      <>
        <PageHero title="Package not found" breadcrumbs={[{ label: "Health Packages", to: "/packages" }]} />
        <div className="container-page py-16 text-center">
          <p className="text-ink-soft">We couldn&apos;t find that package.</p>
          <Button to="/packages" variant="primary" size="md" className="mt-6">
            Back to packages
          </Button>
        </div>
      </>
    )
  }

  const discount = Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100)
  const related = packages.filter((p) => p.id !== pkg.id).slice(0, 3)

  const meta = [
    { icon: FlaskConical, label: `${pkg.tests} tests included` },
    { icon: Users, label: `Recommended for ${pkg.forWhom}` },
    { icon: Droplet, label: pkg.fasting },
    { icon: Clock, label: `Reports in ${pkg.reportTime}` },
  ]

  return (
    <>
      <PageHero
        title={pkg.name}
        description={pkg.description}
        breadcrumbs={[{ label: "Health Packages", to: "/packages" }, { label: pkg.name }]}
      />

      <section className="container-page grid gap-8 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-4 rounded-card border border-line bg-white p-6 shadow-sm">
            <span className="flex items-center gap-1.5 text-sm font-medium text-ink-soft">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {pkg.rating} · {pkg.reviews} reviews
            </span>
            {pkg.homeCollection && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-ink-soft">
                <Home className="h-4 w-4 text-brand-green" />
                Free home collection
              </span>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {meta.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue-dark">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-card border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-ink">What&apos;s included</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-card border border-line bg-white p-6 shadow-sm">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-ink">₹{pkg.price}</span>
              <span className="text-base text-ink-soft line-through">₹{pkg.mrp}</span>
            </div>
            <span className="mt-1 inline-block rounded-full bg-brand-green-light px-2.5 py-1 text-xs font-semibold text-brand-green-dark">
              {discount}% OFF · Save ₹{pkg.mrp - pkg.price}
            </span>

            <Button to="/login" variant="green" size="lg" className="mt-6 w-full">
              Book this package
            </Button>
            <Button href="tel:18001234567" variant="outline" size="md" className="mt-3 w-full">
              Talk to an expert
            </Button>

            <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs text-ink-soft">
              <ShieldCheck className="h-4 w-4 text-brand-green-dark" />
              NABL certified labs · 100% accurate reports
            </div>
          </div>
        </aside>
      </section>

      <section className="container-page pb-12">
        <h2 className="text-2xl font-bold text-ink">You may also like</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
      </section>
    </>
  )
}
