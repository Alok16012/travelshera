import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { Clock, Tag } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f172a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Stories & Guides</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">JustWravel Blog</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Travel guides, trek tips, destination spotlights, and stories from our community of 50,000+ travellers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-10">
          <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96">
            <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">{featured.category}</span>
              <h2 className="text-xl sm:text-3xl font-bold text-white mt-2 mb-3 max-w-3xl">{featured.title}</h2>
              <p className="text-gray-300 text-sm max-w-2xl hidden sm:block mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-white/70 text-xs">
                <div className="flex items-center gap-2">
                  <img src={featured.authorImage} alt={featured.author} className="w-7 h-7 rounded-full object-cover" />
                  <span>{featured.author}</span>
                </div>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-8">
          {allCategories.map((cat) => (
            <span key={cat} className="shrink-0 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 cursor-pointer hover:border-orange-400 hover:text-orange-500 transition">
              {cat}
            </span>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">{post.category}</span>
                <h3 className="font-bold text-gray-900 text-base mt-2 mb-2 leading-snug line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" />{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <img src={post.authorImage} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
