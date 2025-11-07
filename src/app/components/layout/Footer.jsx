import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-[#416325] text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Logo + Slogan */}
        <div>
          <div className="text-xl font-bold mb-1">TriGardening</div>
          <div className="text-base text-[#deeed0]">Your Slogan goes here</div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-[#deeed0]">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Shippings</a></li>
            <li><a href="#" className="hover:underline">Referral Program</a></li>
          </ul>
        </div>
        {/* Categories */}
        <div>
          <div className="font-semibold mb-2">Categories</div>
          <ul className="space-y-1 text-[#deeed0]">
            <li><a href="#" className="hover:underline">Plants</a></li>
            <li><a href="#" className="hover:underline">Tools</a></li>
            <li><a href="#" className="hover:underline">Fertilizers</a></li>
            <li><a href="#" className="hover:underline">Pesticides</a></li>
          </ul>
        </div>
        {/* Connect With Us */}
        <div>
          <div className="font-semibold mb-2">Connect With Us</div>
          <div className="flex gap-4 mb-2">
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white text-lg">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="text-[#deeed0] text-sm mb-2">support@trigardening.com</div>
          <div className="font-semibold">Call Now</div>
          <div className="text-[#deeed0] text-sm">+8801234567890</div>
        </div>
      </div>
      {/* Divider */}
      <div className="my-6 border-t border-[#8caa68] mx-4"></div>
      {/* Copyright */}
      <div className="text-center text-[#deeed0] text-sm">&copy; 2025 TriGardening. All Rights Reserved</div>
    </footer>
  )
}
