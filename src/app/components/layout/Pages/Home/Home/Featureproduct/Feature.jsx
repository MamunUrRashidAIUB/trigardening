import { Card } from '@/app/components/layout/Cards/Card'
import React, { useEffect, useState } from 'react'

export const Feature = () => {
const [product,setProduct]=useState([])

useEffect(()=>{
// fetch from the public folder (leading slash ensures absolute path)
fetch('/product.json')
.then(res=>res.json())
.then(data=>setProduct(data))
.catch((err) => console.error('Error loading JSON:', err));
},[])

  return (
    <div className="bg-[rgb(245,245,220)] py-10">
      <p className="text-green-700 text-center text-3xl mb-8">Feature Product</p>
      <div className="flex flex-wrap justify-center gap-6">
        {product.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
