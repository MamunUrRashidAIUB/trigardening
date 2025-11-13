import { useState, useMemo, useEffect } from 'react'

export function usePagination(items = [], pageSize = 4) {
  const [page, setPage] = useState(0)

  const totalPages = Math.max(1, Math.ceil((items?.length || 0) / pageSize))

  // Keep page within bounds when items change
  useEffect(() => {
    setPage((p) => Math.max(0, Math.min(p, totalPages - 1)))
  }, [totalPages])

  const visible = useMemo(() => {
    if (!items) return []
    const start = page * pageSize
    return items.slice(start, start + pageSize)
  }, [items, page, pageSize])

  const nextPage = () => setPage((p) => Math.min(totalPages - 1, p + 1))
  const prevPage = () => setPage((p) => Math.max(0, p - 1))

  return { page, setPage, totalPages, visible, nextPage, prevPage }
}
