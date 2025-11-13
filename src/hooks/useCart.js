import { useState } from 'react'

export function useCart(initial = []) {
  const [items, setItems] = useState(initial)

  const add = (item) => setItems((prev) => [...prev, item])
  const removeAt = (index) => setItems((prev) => prev.filter((_, i) => i !== index))
  const clear = () => setItems([])

  return { items, add, removeAt, clear, count: items.length }
}
