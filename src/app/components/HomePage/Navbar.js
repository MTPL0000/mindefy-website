"use client";

import { useState } from "react";
import ServicesDrop from "./ServicesDrop";
import Link from "next/link";

export default function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#ebdad4] px-6 md:px-16 py-4 sticky top-0 z-20 shadow">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <Link href="/">
          <div className="relative w-36 md:w-44 aspect-[3.88/1] cursor-pointer">
            <img
              src="/images/nav-logo.svg"
              alt="Mindefy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Hamburger menu toggle (checkbox hack) */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden text-2xl font-bold cursor-pointer"
        >
          ☰
        </label>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-sm md:text-base text-[#3B3C4A]">
          <a href="#" className="hover:text-[#2c2178]">
            About Us
          </a>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <p className="hover:text-[#2c2178] h-12 mt-1.5  cursor-pointer py-2">
              Services
              <select>
                <option></option>
              </select>
            </p>

            {/* Services Dropdown with hover bridge */}
            {showServicesDropdown && (
              <>
                {/* Invisible hover bridge that spans full width */}
                <div className="fixed left-0 top-[4rem] w-full h-[5rem] z-30"></div>

                {/* Actual dropdown positioned from left edge */}
                <div className="fixed left-0 top-[4.5rem] w-full flex justify-start  z-40">
                  <ServicesDrop />
                </div>
              </>
            )}
          </div>

          <span className="hover:text-[#2c2178] cursor-pointer">Products</span>
          <span className="hover:text-[#2c2178] cursor-pointer">Projects</span>
          <span className="hover:text-[#2c2178] cursor-pointer">
            Mindful UX "Design Studio"
          </span>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="peer-checked:flex hidden md:hidden flex-col gap-4 mt-4 text-sm font-medium text-[#3B3C4A]">
        <a href="#" className="hover:text-[#2c2178]">
          About Us
        </a>

        {/* Mobile Services (no hover, could add click toggle if needed) */}
        <span className="hover:text-[#2c2178] cursor-pointer">Services</span>

        <span className="hover:text-[#2c2178] cursor-pointer">Products</span>
        <span className="hover:text-[#2c2178] cursor-pointer">Projects</span>
        <span className="hover:text-[#2c2178] cursor-pointer">
          Mindful UX "Design Studio"
        </span>
        <button className="mt-2 px-4 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white">
          Let's Talk
        </button>
      </div>
    </nav>
  );
}
