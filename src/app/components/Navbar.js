// src/components/Navbar.js
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white px-32 py-3 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#ebdad4]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="relative w-44 aspect-[3.88/1]">
          <Image
            src="/images/nav-logo.svg" // place logo in public/images/logo.png
            alt="Mindefy Logo"
            fill
          />
        </div>

        {/* Middle: Nav links */}
        <nav className="flex space-x-8 text-base font-semibold text-[#3B3C4A] items-center">
          <a href="#" className="hover:text-[#2c2178] transition-colors">
            About Us
          </a>
          <span className="hover:text-[#2c2178] transition-colors cursor-pointer">
            Services
          </span>
          <span className="hover:text-[#2c2178] transition-colors cursor-pointer">
            Products
          </span>
          <span className="hover:text-[#2c2178] transition-colors cursor-pointer">
            Projects
          </span>
          <span className="hover:text-[#2c2178] transition-colors cursor-pointer">
            Mindful UX "Design Studio"
          </span>
        </nav>

        {/* Right: Button */}
        <div>
          <button className="px-6 py-2 rounded-full border border-black text-black font-semibold transition-colors">
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
}
