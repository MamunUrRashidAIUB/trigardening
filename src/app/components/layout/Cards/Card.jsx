import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ imageUrl, image_url, name, category, type, price, rating, reviews, reviewCount }) => {
  // Support both camelCase props and snake_case from JSON
  const src = imageUrl || image_url || '/images/placeholder.jpg';
  const displayType = type || category || '';
  const displayReviews = reviews ?? reviewCount ?? 0;
  // Ensure rating is an integer for star rendering
  const starCount = Math.max(0, Math.round(rating || 0));

  return (
    <div className="bg-[#f6f7e8] rounded-xl shadow p-3 w-64 flex flex-col">
      <img
        src={src}
        alt={name}
        className="rounded-lg w-full h-32 object-cover mb-3"
      />
      <div className="px-2 mb-2">
        <div className="text-[1rem] font-semibold text-[#40713c]">{name}</div>
        <div className="text-xs text-[#8a9673]">{displayType}</div>
      </div>
      <div className="px-2 mb-2">
        <div className="text-[1.2rem] font-semibold text-[#b97732]">
          {price}
        </div>
      </div>
      <div className="flex items-center px-2 mb-2">
        {Array.from({ length: starCount }).map((_, i) => (
          <FontAwesomeIcon icon={faStar} className="text-[#f1b934] mr-1" key={i} />
        ))}
        <span className="text-xs text-[#8a9673] ml-1">({displayReviews})</span>
      </div>
      <button className="bg-[#40713c] hover:bg-[#27451c] text-white mt-2 py-2 px-4 rounded-lg font-semibold">
        Add to Cart
      </button>
    </div>
  );
};
