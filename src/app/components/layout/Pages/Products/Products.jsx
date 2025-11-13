"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { Card } from '../../Cards/Card'
import { Filter } from './Filter/Filter'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('popular')

  useEffect(() => {
    let mounted = true
    fetch('/product.json')
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setProducts(data || [])
      })
      .catch(() => {
        if (mounted) setProducts([])
      })
    return () => { mounted = false }
  }, [])

  const filtered = useMemo(() => {
    let list = products
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q))
    }

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'popular') list = [...list].sort((a, b) => (b.reviews || 0) - (a.reviews || 0))

    return list
  }, [products, query, sort])

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto">
        {/* breadcrumb + header */}
        <div className="mb-4">
          <div className="text-sm text-[#8a9673]">Home &gt; Products &gt; Plants</div>
        </div>

        <div className="flex gap-6">
          {/* left: filters */}
          <aside className="w-64">
            <div className="bg-white rounded-lg p-4 shadow">
              <Filter />
            </div>
          </aside>

          {/* right: products */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#2f4d2a]">Plants</h2>
                <div className="text-sm text-[#8a9673]">Showing {filtered.length} of {products.length} products</div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products"
                  className="border rounded px-3 py-2 text-sm w-56"
                />
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded px-3 py-2 text-sm">
                  <option value="popular">Sort By: Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.id} className="flex justify-center">
                  <Card
                    image_url={p.image_url}
                    name={p.name}
                    category={p.category}
                    price={`৳ ${p.price}`}
                    rating={p.rating}
                    reviews={p.reviews}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-[#779c65] text-white px-6 py-2 rounded">Load More Products</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
