import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Card = ({
  imageUrl, image_url, name, category, type, price, rating, reviews, reviewCount
}) => {
  const src = imageUrl || image_url || '/images/placeholder.jpg';
  const displayType = type || category || '';
  const displayReviews = reviews ?? reviewCount ?? 0;
  const starCount = Math.max(0, Math.round(rating || 0));

  return (
    <div className="bg-[#f6f7e8] rounded-xl shadow p-0 w-64 flex flex-col items-center relative group overflow-hidden">
      {/* Product image at top */}
      <img
        src={src}
        alt={name}
        className="rounded-t-xl w-full h-32 object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-30"
      />

  {/* Main card area (content will blur on hover) */}
  <div className="w-full p-4 pb-3 transition-all duration-300 group-hover:opacity-30 group-hover:blur-[2px]">
        <div className="text-[1rem] font-semibold text-[#40713c]">{name}</div>
        <div className="text-xs text-[#8a9673] mb-2">{displayType}</div>
        <div className="text-[1.2rem] font-semibold text-[#b97732] mb-2">{price}</div>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FontAwesomeIcon
              icon={faStar}
              className={i < starCount ? "text-[#f1b934] mr-1" : "text-[#efd18f] mr-1"}
              key={i}
            />
          ))}
          <span className="text-xs text-[#8a9673] ml-1">({displayReviews})</span>
        </div>
        <button
          className="bg-[#40713c] hover:bg-[#27451c] text-white font-semibold w-full py-2 rounded mb-1 transition-all"
        >
          Add to Cart
        </button>
      </div>

      {/* Hover-only Add to Cart button (no extra border/container) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <button className="bg-[#40713c] hover:bg-[#27451c] text-white font-semibold px-2 py-2 rounded border-0">
          Add to Cart
        </button>
      </div>

      {/* "View Details" on hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
        <button className="w-full py-3 rounded-b-xl font-semibold bg-[#779c65] text-white text-lg shadow">
          View Details
        </button>
      </div>
    </div>
  );
};
