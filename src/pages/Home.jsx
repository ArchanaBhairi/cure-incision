import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Hero from "../components/home/Hero"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { blogImages, siteImages } from "../data/images"
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
        <AnimateIn>
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
        </AnimateIn>
        <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popular.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <HowItWorks />

      {/* Specialties */}
      <section className="container-page mt-24">
        <AnimateIn>
          <SectionHeading
            eyebrow="Expert Care"
            title="Explore our specialties"
            description="Consult top specialists and access surgical care across every major discipline."
          />
        </AnimateIn>
        <StaggerGrid className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {topSpecialties.map(({ id, name, icon: Icon, desc }) => (
            <StaggerItem key={id}>
              <Link
                to="/specialties"
                className="group block h-full rounded-card border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg card-shine"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-light text-brand-blue-dark transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{name}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-soft">{desc}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <AnimateIn className="mt-8 text-center">
          <Button to="/specialties" variant="outline" size="md">
            View all specialties
          </Button>
        </AnimateIn>
      </section>

      <HomeCollection />
      <WhyChooseUs />
      <Testimonials />

      {/* Blog preview */}
      <section className="container-page mt-24">
        <AnimateIn>
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
        </AnimateIn>
        <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-3">
          {recentPosts.map((post) => (
            <StaggerItem key={post.id}>
              <Link
                to="/blog"
                className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={blogImages[post.category] ?? siteImages.wellness}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
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
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <CtaBanner />
    </>
  )
}
