import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <Link to="/" className="inline-flex shrink-0" aria-label="CureIncision Health Care home">
      <img
        src="/cure-incision.png"
        alt="CureIncision Health Care"
        className="block h-20 w-20 object-contain"
      />
    </Link>
  )
}
