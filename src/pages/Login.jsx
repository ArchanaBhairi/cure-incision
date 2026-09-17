import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShieldCheck, Home, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "../components/Logo"
import Button from "../components/ui/Button"
import { siteImages } from "../data/images"

const perks = [
  { icon: Home, text: "Free home sample collection" },
  { icon: Clock, text: "Fast digital reports" },
  { icon: ShieldCheck, text: "Secure & private records" },
]

export default function Login() {
  const [mode, setMode] = useState("login")
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl animate-drift pointer-events-none" />
      <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-teal/10 blur-3xl animate-drift pointer-events-none [animation-delay:-5s]" />

      <div className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="relative hidden overflow-hidden rounded-card shadow-2xl lg:block"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={siteImages.dashboard} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="relative bg-gradient-to-br from-brand-blue/95 to-brand-teal/90 p-12 text-white">
            <h2 className="text-3xl font-bold">Your health, all in one place</h2>
            <p className="mt-4 text-white/85">
              Book checkups, consult doctors and track reports — sign in to manage your entire care journey.
            </p>
            <ul className="mt-8 space-y-4">
              {perks.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-md rounded-card border border-line bg-white p-8 shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 overflow-hidden rounded-2xl lg:hidden">
            <img src={siteImages.heroCare} alt="" className="h-32 w-full object-cover" />
          </div>
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="mt-6 flex rounded-full border border-line bg-surface p-1">
            {["login", "register"].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`flex-1 rounded-full py-2 text-sm font-semibold capitalize transition-all duration-200 ${
                  mode === m ? "bg-brand-blue text-white shadow-md" : "text-ink-soft"
                }`}
              >
                {m === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              navigate("/dashboard")
            }}
          >
            {mode === "register" && (
              <input required placeholder="Full name" className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue" />
            )}
            <input required type="tel" placeholder="Mobile number" className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-brand-blue" />
            {mode === "register" && (
              <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-brand-blue" />
            )}
            <input required type="password" placeholder="Password" className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-brand-blue" />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              {mode === "login" ? "Login to your account" : "Create account"}
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-ink-soft">
            By continuing you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
