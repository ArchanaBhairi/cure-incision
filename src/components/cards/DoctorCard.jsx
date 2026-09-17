import { Star, MapPin, Video, Stethoscope } from "lucide-react"
import Button from "../ui/Button"

function initials(name) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
}

export default function DoctorCard({ doctor }) {
  return (
    <div className="flex flex-col rounded-card border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal text-xl font-bold text-white">
          {initials(doctor.name)}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-ink">{doctor.name}</h3>
          <p className="text-sm font-medium text-brand-blue-dark">{doctor.specialty}</p>
          <p className="text-xs text-ink-soft">{doctor.qualification}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-ink-soft">
        <span className="flex items-center gap-1.5">
          <Stethoscope className="h-3.5 w-3.5 text-brand-blue" />
          {doctor.experience} yrs exp
        </span>
        <span className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {doctor.rating} ({doctor.reviews})
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-brand-green" />
          {doctor.city}
        </span>
        {doctor.mode.includes("Video") && (
          <span className="flex items-center gap-1.5">
            <Video className="h-3.5 w-3.5 text-brand-teal" />
            Video consult
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm text-ink-soft">
          Fee <span className="text-base font-bold text-ink">₹{doctor.fee}</span>
        </span>
        <Button to="/login" variant="green" size="sm">
          Book Appointment
        </Button>
      </div>
    </div>
  )
}
