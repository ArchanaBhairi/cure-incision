import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Hero from "../components/home/Hero"
import ServiceCategories from "../components/home/ServiceCategories"
import Stats from "../components/home/Stats"
import HowItWorks from "../components/home/HowItWorks"
import HomeCollection from "../components/home/HomeCollection"
import WhyChooseUs from "../components/home/WhyChooseUs"
import Testimonials from "../components/home/Testimonials"
import CtaBanner from "../components/home/CtaBanner"
import SectionHeading from "../components/ui/SectionHeading"
import Button from "../components/ui/Button"
import PackageCard from "../components/cards/PackageCard"
import { packages } from "../data/packages"
import { specialties } from "../data/specialties"
import { blogPosts } from "../data/blog"

export default function Home() {
  const popular = packages.filter((p) => p.popular).slice(0, 3)
  const topSpecialties = specialties.slice(0, 8)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <>
      <Hero />
      <ServiceCategories />
      <Stats />

      {/* Popular packages */}
      <section className="container-page mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Top Rated"
            title="Popular health packages"
            description="Comprehensive, doctor-designed checkups at prices that make preventive care easy."
          />
          <Button to="/packages" variant="ghost" size="sm">
            View all packages
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popular.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      <HowItWorks />

      {/* Specialties */}
      <section className="container-page mt-24">
        <SectionHeading
          eyebrow="Expert Care"
          title="Explore our specialties"
          description="Consult top specialists and access surgical care across every major discipline."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {topSpecialties.map(({ id, name, icon: Icon, desc }) => (
            <Link
              key={id}
              to="/specialties"
              className="group rounded-card border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{name}</h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-soft">{desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/specialties" variant="outline" size="md">
            View all specialties
          </Button>
        </div>
      </section>

      <HomeCollection />
      <WhyChooseUs />
      <Testimonials />

      {/* Blog preview */}
      <section className="container-page mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Health Blog"
            title="Tips & guides from our doctors"
            description="Expert-written articles to help you stay informed and healthy."
          />
          <Button to="/blog" variant="ghost" size="sm">
            Read all articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to="/blog"
              className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-brand-teal-light px-3 py-1 text-xs font-semibold text-brand-teal">
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink transition-colors group-hover:text-brand-blue-dark">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-soft">
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
