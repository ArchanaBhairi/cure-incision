import { Link } from "react-router-dom"
import { Star, Home, Clock, FlaskConical, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Button from "../ui/Button"

export default function PackageCard({ pkg }) {
  const discount = Math.round(((pkg.mrp - pkg.price) / pkg.mrp) * 100)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col rounded-card border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-light px-2.5 py-1 text-xs font-semibold text-brand-blue-dark">
          <FlaskConical className="h-3.5 w-3.5" />
          {pkg.tests} Tests
        </span>
        {pkg.popular && (
          <span className="rounded-full bg-brand-green-light px-2.5 py-1 text-xs font-semibold text-brand-green-dark">
            Popular
          </span>
        )}
      </div>

      <Link to={`/packages/${pkg.id}`}>
        <h3 className="mt-4 text-lg font-bold text-ink transition-colors group-hover:text-brand-blue-dark">
          {pkg.name}
        </h3>
      </Link>
      <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{pkg.description}</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-soft">
        <span className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {pkg.rating} ({pkg.reviews})
        </span>
        {pkg.homeCollection && (
          <span className="flex items-center gap-1.5">
            <Home className="h-3.5 w-3.5 text-brand-green" />
            Home Collection
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-brand-blue" />
          Report in {pkg.reportTime}
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ink">₹{pkg.price}</span>
            <span className="text-sm text-ink-soft line-through">₹{pkg.mrp}</span>
          </div>
          <span className="text-xs font-semibold text-brand-green-dark">{discount}% OFF</span>
        </div>
        <Button to={`/packages/${pkg.id}`} variant="primary" size="sm">
          Book
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
