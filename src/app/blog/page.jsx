"use client"
import React, { useEffect, useState } from 'react'
import { BlogCard } from '../components/layout/Pages/Blog/BlogCard'

export default function BlogPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/blogs.json')
      .then((r) => r.json())
      .then((data) => setPosts(data || []))
      .catch(() => setPosts([]))
  }, [])

  const hero = posts[0]
  const others = posts.slice(1)
  const [visibleCount, setVisibleCount] = useState(4)

  const visiblePosts = others.slice(0, visibleCount)

  function loadMore() {
    setVisibleCount((v) => Math.min(v + 4, others.length))
  }

  return (
    <main className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#263828]">The TriGardening Journal</h2>
          <p className="text-sm text-gray-500">Your slogan goes here</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {hero && (
              <section className="relative rounded-xl overflow-hidden">
                <img src={hero.image_url} alt={hero.title} className="w-full h-60 object-cover rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent rounded-xl" />
                <div className="absolute left-6 bottom-6 text-white max-w-xl">
                  <div className="text-sm text-white/80 mb-2">{hero.category}</div>
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight">{hero.title}</h1>
                  <p className="mt-2 text-sm text-white/90 hidden md:block">{hero.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
                    <div className="inline-flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center" />
                      <span>{hero.author}</span>
                    </div>
                    <div>{new Date(hero.date).toLocaleDateString()}</div>
                  </div>
                </div>
              </section>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visiblePosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>

            {visibleCount < others.length && (
              <div className="flex justify-center mt-6">
                <button onClick={loadMore} className="bg-[#779c65] text-white px-6 py-2 rounded">Load More Articles</button>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-xl p-4 shadow">
              <label className="text-sm font-medium text-gray-600">Search Blog</label>
              <div className="mt-2 relative">
                <input placeholder="Search articles..." className="w-full border rounded px-3 py-2 pr-10" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold text-[#263828] mb-3">Blog Categories</h4>
              <ul className="text-sm text-[#66755a] space-y-3">
                <li className="flex justify-between"><span>Plant Care</span><span className="text-gray-400">12</span></li>
                <li className="flex justify-between"><span>Pest Control</span><span className="text-gray-400">7</span></li>
                <li className="flex justify-between"><span>DIY Gardening</span><span className="text-gray-400">11</span></li>
                <li className="flex justify-between"><span>Seasonal Tips</span><span className="text-gray-400">20</span></li>
                <li className="flex justify-between"><span>Sustainability</span><span className="text-gray-400">4</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold text-[#263828] mb-3">Recent Posts</h4>
              <ul className="space-y-3 text-sm text-[#66755a]">
                {posts.slice(0,3).map(p => (
                  <li key={p.id} className="flex items-center gap-3">
                    <img src={p.image_url} alt={p.title} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <div className="font-medium text-[#2f4d2a]">{p.title}</div>
                      <div className="text-xs text-gray-400">{new Date(p.date).toLocaleDateString()}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
