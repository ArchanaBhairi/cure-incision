import { motion } from "framer-motion"
import Button from "../components/ui/Button"
import { siteImages } from "../data/images"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={siteImages.wellness} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

      <div className="container-page relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <motion.p
          className="text-7xl font-bold text-gradient-blue"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          404
        </motion.p>
        <motion.h1
          className="mt-4 text-3xl font-bold text-ink"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Page not found
        </motion.h1>
        <motion.p
          className="mt-3 max-w-md text-ink-soft"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Button to="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button to="/packages" variant="outline" size="lg">
            Browse packages
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
