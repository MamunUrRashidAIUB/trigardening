import { Card } from '@/app/components/layout/Cards/Card'
import React from 'react'
import { useProducts } from '@/hooks/useProducts'
import { usePagination } from '@/hooks/usePagination'
import { useCart } from '@/hooks/useCart'

export const Feature = () => {
  const { products } = useProducts('/product.json')
  const { visible: visibleProducts, page, totalPages, nextPage, prevPage } = usePagination(products, 4)
  const { items: cartItems, add, removeAt, clear, count } = useCart()
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
          <Card key={item.id} {...item} onAdd={(it) => add(it)} />
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
                <button onClick={() => removeAt(idx)} className="text-sm text-red-500">Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
