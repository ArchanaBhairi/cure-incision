import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ease = [0.22, 1, 0.36, 1]

const offsets = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  none: { x: 0, y: 0 },
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as = "div",
  duration = 0.65,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: "0px 0px -40px 0px" })
  const Component = motion[as] ?? motion.div
  const { x, y } = offsets[direction] ?? offsets.up

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Component>
  )
}

export function StaggerGrid({ children, className = "", stagger = 0.08 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06, rootMargin: "0px 0px -32px 0px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
