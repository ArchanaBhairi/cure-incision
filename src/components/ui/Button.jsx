import { Link } from "react-router-dom"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none active:scale-95"

const variants = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30",
  green:   "bg-brand-green text-white hover:bg-brand-green-dark shadow-md shadow-brand-green/20 hover:shadow-lg hover:shadow-brand-green/30",
  outline: "border border-brand-blue/25 text-brand-blue-dark bg-white hover:bg-brand-blue-light hover:border-brand-blue/50",
  ghost:   "text-brand-blue-dark hover:bg-brand-blue-light",
  white:   "bg-white text-brand-blue-dark hover:bg-brand-blue-light shadow-md hover:shadow-lg",
}

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
}

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  const Tag = as
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
