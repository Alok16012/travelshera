"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);
  const related = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3);

  if (!post) {
    return (
      <main><Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center pt-16">
          <p className="text-2xl font-bold text-gray-700 mb-4">Post not found</p>
          <Link href="/blog" className="text-orange-500 flex items-center gap-2 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Parse markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactElement[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) { i++; continue; }

      if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace("## ", "")}</h2>);
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(<p key={i} className="font-bold text-gray-800 mt-3">{line.replace(/\*\*/g, "")}</p>);
      } else if (line.startsWith("- ")) {
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 text-gray-600 my-4 pl-4">
            {items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        );
        continue;
      } else if (/^\d+\./.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
          items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1.5 text-gray-600 my-4 pl-4">
            {items.map((item, j) => <li key={j}>{item}</li>)}
          </ol>
        );
        continue;
      } else if (line.startsWith("| ")) {
        // table - skip for now
        elements.push(<p key={i} className="text-gray-600 leading-relaxed my-2">{line}</p>);
      } else {
        // process inline bold
        const html = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        elements.push(
          <p key={i} className="text-gray-600 leading-relaxed my-3"
            dangerouslySetInnerHTML={{ __html: html }} />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <Link href="/blog" className="absolute top-6 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="max-w-4xl mx-auto">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">{post.category}</span>
              <h1 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-4 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <img src={post.authorImage} alt={post.author} className="w-9 h-9 rounded-full object-cover border-2 border-orange-400" />
                  <span className="text-white font-medium">{post.author}</span>
                </div>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Article */}
          <article className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 max-w-3xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs bg-orange-50 text-orange-600 border border-orange-100 px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose-content">
              {renderContent(post.content)}
            </div>

            {/* Share */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-4">
              <span className="text-gray-600 text-sm font-semibold flex items-center gap-2"><Share2 className="w-4 h-4" />Share:</span>
              <a href="#" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-sky-600 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                Twitter
              </a>
            </div>

            {/* Author card */}
            <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-center gap-4">
              <img src={post.authorImage} alt={post.author} className="w-16 h-16 rounded-full object-cover border-2 border-orange-300 shrink-0" />
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-gray-500 text-sm mt-0.5">Travel writer & adventure enthusiast at JustWravel. Passionate about off-beat destinations and authentic experiences.</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:w-72 shrink-0 space-y-5">
            <div className="sticky top-20 space-y-5">
              {/* CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-center">
                <p className="text-white font-bold text-lg mb-2">Plan Your Next Trip!</p>
                <p className="text-orange-100 text-sm mb-4">Join 50,000+ travellers on our handcrafted group tours.</p>
                <Link href="/trips" className="block bg-white text-orange-600 font-bold py-3 rounded-xl hover:shadow-lg transition text-sm">
                  Browse Trips →
                </Link>
              </div>

              {/* More Articles */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">More Articles</h3>
                <div className="space-y-4">
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="flex gap-3 group">
                      <img src={p.image} alt={p.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                      <div>
                        <p className="text-xs text-orange-500 font-semibold">{p.category}</p>
                        <p className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-orange-500 transition leading-snug mt-0.5">{p.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Ladakh", "Trek Guide", "Budget Travel", "Himachal Pradesh", "Northeast India", "Beaches", "Monsoon"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full cursor-pointer hover:bg-orange-50 hover:text-orange-600 transition">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
