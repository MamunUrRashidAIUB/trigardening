"use client"
import React from 'react'

export const Filter = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#2f4d2a]">Filter Products</h3>

      <div>
        <div className="text-sm font-medium text-[#6f7f63] mb-2">Category</div>
        <div className="flex flex-col gap-2 text-sm text-[#66755a]">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" />
            Indoor Plants (32)
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" />
            Outdoor Plants (16)
          </label>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium text-[#6f7f63] mb-2">Price Range</div>
        <div className="text-sm text-[#66755a]">৳ 0 - ৳ 10,000+</div>
        <input type="range" min="0" max="10000" className="w-full mt-2" />
      </div>

      <div>
        <div className="text-sm font-medium text-[#6f7f63] mb-2">Size</div>
        <div className="flex flex-col gap-2 text-sm text-[#66755a]">
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Small (20)</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Medium (27)</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Large (10)</label>
        </div>
      </div>

      <div>
        <div className="text-sm font-medium text-[#6f7f63] mb-2">Light Requirements</div>
        <div className="flex flex-col gap-2 text-sm text-[#66755a]">
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Low Light (8)</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Medium Light (16)</label>
          <label className="inline-flex items-center gap-2"><input type="checkbox" /> Bright Light (15)</label>
        </div>
      </div>

      <button className="w-full bg-[#779c65] text-white py-2 rounded font-semibold">Apply Filters</button>
    </div>
  )
}
