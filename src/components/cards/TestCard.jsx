import { Clock, Home, ListChecks } from "lucide-react"
import Button from "../ui/Button"

export default function TestCard({ test }) {
  const discount = Math.round(((test.mrp - test.price) / test.mrp) * 100)
  return (
    <div className="flex flex-col rounded-card border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-teal-light px-2.5 py-1 text-xs font-semibold text-brand-teal">
        {test.category}
      </span>
      <h3 className="mt-3 text-base font-bold text-ink">{test.name}</h3>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-soft">
        <span className="flex items-center gap-1.5">
          <ListChecks className="h-3.5 w-3.5 text-brand-blue" />
          {test.parameters} parameter{test.parameters > 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-brand-blue" />
          {test.reportTime}
        </span>
        {test.homeCollection && (
          <span className="flex items-center gap-1.5">
            <Home className="h-3.5 w-3.5 text-brand-green" />
            Home Collection
          </span>
        )}
      </div>

      <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-ink">₹{test.price}</span>
            <span className="text-sm text-ink-soft line-through">₹{test.mrp}</span>
          </div>
          <span className="text-xs font-semibold text-brand-green-dark">{discount}% OFF</span>
        </div>
        <Button to="/login" variant="outline" size="sm">
          Add
        </Button>
      </div>
    </div>
  )
}
