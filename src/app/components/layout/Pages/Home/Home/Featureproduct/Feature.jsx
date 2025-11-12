import { Card } from '@/app/components/layout/Cards/Card'
import React, { useEffect, useState } from 'react'

export const Feature = () => {
  const [product, setProduct] = useState([])
  const [page, setPage] = useState(0)
  const pageSize = 4
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // fetch from the public folder (leading slash ensures absolute path)
    fetch('/product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch((err) => console.error('Error loading JSON:', err));
  }, [])

  const totalPages = Math.ceil(product.length / pageSize)

  const nextPage = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1))
  }
  const prevPage = () => {
    setPage((p) => Math.max(0, p - 1))
  }

  const visibleProducts = product.slice(page * pageSize, page * pageSize + pageSize)

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item])
  }

  const removeCartItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-[rgb(245,245,220)] py-10">
      <p className="text-green-700 text-center text-3xl mb-8">Feature Product</p>

      {/* Product list with side arrows (no page label) */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={prevPage}
          disabled={page === 0}
          aria-label="Previous"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow z-40 disabled:opacity-40"
        >
          ◀
        </button>

        <div className="flex flex-wrap justify-center gap-6">
          {visibleProducts.map((item) => (
            <Card key={item.id} {...item} onAdd={handleAddToCart} />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextPage}
          disabled={page >= totalPages - 1}
          aria-label="Next"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow z-40 disabled:opacity-40"
        >
          ▶
        </button>
      </div>

      {/* Simple cart panel - shows when items are added */}
      {cartItems.length > 0 && (
        <div className="fixed right-6 bottom-6 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <div className="font-semibold">Cart ({cartItems.length})</div>
            <button onClick={() => setCartItems([])} className="text-sm text-red-500">Clear</button>
          </div>
          <div className="space-y-2 max-h-56 overflow-auto">
            {cartItems.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={it.src} alt={it.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{it.name}</div>
                  <div className="text-xs text-gray-500">{it.price}</div>
                </div>
                <button onClick={() => removeCartItem(idx)} className="text-sm text-red-500">Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
