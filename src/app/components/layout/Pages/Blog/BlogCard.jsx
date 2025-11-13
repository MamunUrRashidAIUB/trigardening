import React from 'react'

export const BlogCard = ({ post }) => {
  if (!post) return null
  return (
    <article className="bg-white rounded-xl shadow overflow-hidden w-full">
      <div className="h-44 w-full overflow-hidden rounded-t-xl">
        <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="text-xs text-[#2f8a3a] font-medium mb-2">Post Type</div>
        <h3 className="text-lg font-semibold text-[#263828] mb-2">{post.title}</h3>
        <p className="text-sm text-[#666] mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-[#8a9673]">
          <div>{post.author} · {new Date(post.date).toLocaleDateString()}</div>
          <div className="text-gray-400">{post.readTime}</div>
        </div>
      </div>
    </article>
  )
}
