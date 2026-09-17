export default function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left"
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-ink-soft">{description}</p>}
    </div>
  )
}
