import Button from "../components/ui/Button"

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-bold text-brand-blue-light">404</p>
      <h1 className="mt-4 text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/" variant="primary" size="lg">
          Back to home
        </Button>
        <Button to="/packages" variant="outline" size="lg">
          Browse packages
        </Button>
      </div>
    </section>
  )
}
