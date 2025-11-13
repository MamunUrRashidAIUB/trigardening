import { useState, useEffect } from 'react'

export function useProducts(url = '/product.json') {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return
        setProducts(data || [])
        setLoading(false)
      })
      .catch((err) => {
        if (!mounted) return
        setError(err)
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [url])

  return { products, setProducts, loading, error }
}
