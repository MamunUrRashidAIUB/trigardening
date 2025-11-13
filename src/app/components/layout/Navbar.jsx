// components/Navbar.js
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="bg-[#345718] py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-white inline-flex items-center justify-center text-[#458c25] mr-2">
              🍀
            </span>
            TriGardening
          </span>
        </div>

        {/* Menu Links */}
        <div className="flex gap-7">
          <Link href="/" className="text-white font-semibold hover:underline">Home</Link>
          <Link href="/products" className="text-white hover:underline">Products</Link>
          <Link href="/blog" className="text-white hover:underline">Blogs</Link>
          <Link href="/plant-clinic" className="text-white hover:underline">Plant Clinic</Link>
          <button
            aria-label="Call TriGardening"
            className="inline-flex items-center gap-2 bg-[#c5731f] text-white rounded-lg px-4 py-2 font-semibold shadow-md hover:bg-[#e0871f] whitespace-nowrap"
          >
            <FontAwesomeIcon icon={faPhone} size="sm" className="text-white self-center" />
            <span className="leading-none text-sm">Call Now</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Call Now Button */}
       
          {/* Search Box */}
          <div className="flex items-center bg-[#324d21] rounded-full px-6 py-2 ml-2">
            <input
              type="text"
              placeholder="Search plants, tools"
              className="bg-transparent border-none outline-none text-white text-sm w-32 placeholder:text-gray-200"
            />
            <FontAwesomeIcon icon={faSearch} className="text-white ml-2" />
          </div>
          {/* Cart Icon */}
          <div className="relative ml-2">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white text-lg" />
            <span className="absolute -top-2 -right-2 bg-[#ffbe58] text-white text-xs px-2 py-0.5 rounded-full">2</span>
          </div>
          {/* User Icon */}
          <FontAwesomeIcon icon={faUser} className="text-white text-lg ml-2" />
        </div>
      </div>
    </nav>
  )
}
