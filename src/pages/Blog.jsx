import { useState } from "react"
import { Clock, User } from "lucide-react"
import PageHero from "../components/PageHero"
import CtaBanner from "../components/home/CtaBanner"
import AnimateIn, { StaggerGrid, StaggerItem } from "../components/ui/AnimateIn"
import { blogPosts } from "../data/blog"
import { blogImages, siteImages } from "../data/images"

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function Blog() {
  const [category, setCategory] = useState("All")
  const filtered = category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <PageHero
        title="CureIncision Health Blog"
        description="Expert-written articles, guides and tips to help you make informed decisions about your health."
        breadcrumbs={[{ label: "Blog" }]}
        image={siteImages.wellness}
        imageAlt="Healthy lifestyle inspiration"
      />

      <section className="container-page py-12">
        <AnimateIn>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-brand-blue text-white shadow-md"
                    : "border border-line bg-white text-ink-soft hover:border-brand-blue/30 hover:text-brand-blue-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {featured && (
          <AnimateIn className="mt-8" delay={0.05}>
            <article className="group grid gap-0 overflow-hidden rounded-card border border-line bg-white shadow-sm lg:grid-cols-2">
              <div className="relative min-h-64 overflow-hidden">
                <img
                  src={blogImages[featured.category] ?? siteImages.wellness}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-brand-blue/30 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-0 left-0 p-8 text-white lg:hidden">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Featured · {featured.category}</span>
                  <h2 className="mt-4 text-2xl font-bold">{featured.title}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gradient-to-br from-brand-blue to-brand-teal p-8 text-white lg:p-12">
                <span className="hidden w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold lg:inline">Featured · {featured.category}</span>
                <h2 className="mt-5 hidden text-2xl font-bold sm:text-3xl lg:block">{featured.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/80">
                  <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <button className="mt-6 w-fit rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue-dark transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  Read article
                </button>
              </div>
            </article>
          </AnimateIn>
        )}

        <StaggerGrid className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={blogImages[post.category] ?? siteImages.wellness}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-teal shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-brand-blue-dark">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-4 text-xs text-ink-soft">
                    <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{post.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <AnimateIn className="mt-12">
          <div className="rounded-[2rem] border border-line bg-surface p-8 text-center lg:p-12">
            <h2 className="text-2xl font-bold text-ink">Get health tips in your inbox</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">Monthly articles from our doctors — no spam, unsubscribe anytime.</p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email" className="flex-1 rounded-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" />
              <button type="submit" className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark">
                Subscribe
              </button>
            </form>
          </div>
        </AnimateIn>
      </section>

      <CtaBanner />
    </>
  )
}
