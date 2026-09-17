import { useState } from "react"
import { Clock, User } from "lucide-react"
import PageHero from "../components/PageHero"
import { blogPosts } from "../data/blog"

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
      />

      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-brand-blue text-white"
                  : "border border-line bg-white text-ink-soft hover:border-brand-blue/30 hover:text-brand-blue-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured && (
          <article className="mt-8 grid gap-6 overflow-hidden rounded-card border border-line bg-white shadow-sm lg:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-blue to-brand-teal p-8 text-white lg:p-12">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Featured · {featured.category}</span>
              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{featured.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85">{featured.excerpt}</p>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-soft">
                <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{featured.author}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Read our in-depth guide covering everything you need to know, written and reviewed by qualified
                medical professionals at CureIncision.
              </p>
              <button className="mt-6 w-fit rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark">
                Read article
              </button>
            </div>
          </article>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-brand-teal-light px-3 py-1 text-xs font-semibold text-brand-teal">
                {post.category}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink transition-colors group-hover:text-brand-blue-dark">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-4 text-xs text-ink-soft">
                <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{post.author}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
