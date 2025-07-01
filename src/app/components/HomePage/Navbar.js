"use client";

import { useState } from "react";
import ServicesDrop from "./ServicesDrop";
import Link from "next/link";
import ProductsDropdown from "./ProductsDropdown";
import { ProjectDropdown } from "./ProjectDropdown";
import Image from "next/image";

export default function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all mobile dropdowns when main menu closes
    if (isMobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileProductsOpen(false);
      setMobileProjectsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#ebdad4] px-4 sm:px-6 lg:px-16 py-4 sticky top-0 z-20 shadow">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="relative w-28 sm:w-36 lg:w-44 aspect-[3.88/1] cursor-pointer">
            <Image
              src="/images/nav-logo.svg"
              alt="Mindefy Logo"
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Hamburger menu toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl font-bold cursor-pointer z-30"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-baseline space-x-4 lg:space-x-6 font-semibold text-sm lg:text-base text-[#3B3C4A]">
          <a href="#" className="hover:text-[#2c2178] whitespace-nowrap">
            About Us
          </a>

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2 whitespace-nowrap">
              Services
              <Image
                src="/images/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={10}
                className="object-contain"
              />
            </p>

            {/* Services Dropdown with hover bridge */}
            {showServicesDropdown && (
              <>
                {/* Invisible hover bridge */}
                <div className="fixed left-0 top-[4rem] w-full h-[5rem] z-30"></div>

                {/* Actual dropdown positioned responsively */}
                <div className="fixed left-0 top-[4.5rem] w-full flex justify-center z-40">
                  <div className="w-full max-w-7xl px-4">
                    <ServicesDrop />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Products with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2 whitespace-nowrap">
              Products
              <Image
                src="/images/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={10}
                className="object-contain"
              />
            </p>

            {/* Products Dropdown */}
            {showProductsDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[3rem] z-40">
                <ProductsDropdown />
              </div>
            )}
          </div>

          {/* Projects with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowProjectsDropdown(true)}
            onMouseLeave={() => setShowProjectsDropdown(false)}
          >
            <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2 whitespace-nowrap">
              Projects
              <Image
                src="/images/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={10}
                className="object-contain"
              />
            </p>

            {/* Projects Dropdown */}
            {showProjectsDropdown && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[3rem] z-40">
                <ProjectDropdown />
              </div>
            )}
          </div>

          <span className="hover:text-[#2c2178] cursor-pointer whitespace-nowrap hidden lg:block">
            Mindful UX "Design Studio"
          </span>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-3 lg:px-5 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white text-sm lg:text-base whitespace-nowrap">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <div className="flex flex-col gap-4 mt-4 text-sm font-medium text-[#3B3C4A] bg-white rounded-lg shadow-lg p-4">
          <a href="#" className="hover:text-[#2c2178] py-2">
            About Us
          </a>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left"
            >
              Services
              <Image
                src="/images/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={10}
                className={`object-contain transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-2 space-y-2 text-xs">
                <div className="space-y-1">
                  <p className="font-semibold text-[#332771]">Modern Application Development</p>
                  <Link href="/web-application-development" className="block hover:text-red-600">Web Application Development</Link>
                  <Link href="/android-app-development" className="block hover:text-red-600">Android App Development</Link>
                  <Link href="/ios-app-development" className="block hover:text-red-600">iOS App Development</Link>
                  <Link href="/hybrid-app-development" className="block hover:text-red-600">Hybrid App Development</Link>
                  <Link href="/mean-mern-stack-development" className="block hover:text-red-600">MEAN/MERN Stack Development</Link>
                  <Link href="/low-code-development" className="block hover:text-red-600">Low-Code Development</Link>
                  <Link href="/mvp-development" className="block hover:text-red-600">MVP Development</Link>
                  <Link href="/agile-rapid-development" className="block hover:text-red-600">Agile Rapid Development</Link>
                </div>
                <div className="space-y-1 pt-2">
                  <p className="font-semibold text-[#332771]">Digital Transformation</p>
                  <Link href="/digital-transformation" className="block hover:text-red-600">Digital Transformation</Link>
                  <Link href="/enterprise-solutions" className="block hover:text-red-600">Enterprise Solutions</Link>
                  <Link href="/ecommerce-marketplace" className="block hover:text-red-600">E-commerce & Marketplace</Link>
                  <Link href="/crm-solutions" className="block hover:text-red-600">CRM Solutions</Link>
                  <Link href="/white-label-solutions" className="block hover:text-red-600">White Label Solutions</Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Products Dropdown */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left"
            >
              Products
              <Image
                src="/images/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={10}
                className={`object-contain transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 mt-2">
                <Link href="/your-hour" className="block hover:text-red-600 text-xs">
                  YourHour
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Projects Dropdown */}
          <div>
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left"
            >
              Projects
              <Image
                src="/images/dropdown-icon.png"
                alt="Dropdown"
                width={10}
                height={10}
                className={`object-contain transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileProjectsOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <Link href="/your-hour" className="block hover:text-red-600 text-xs">EarlyFoods</Link>
                <Link href="/your-hour" className="block hover:text-red-600 text-xs">JEGO</Link>
                <Link href="/your-hour" className="block hover:text-red-600 text-xs">SoliStack</Link>
                <Link href="/your-hour" className="block hover:text-red-600 text-xs">GreenBill</Link>
                <Link href="/your-hour" className="block hover:text-red-600 text-xs">MachOne</Link>
              </div>
            )}
          </div>

          <span className="hover:text-[#2c2178] cursor-pointer py-2">
            Mindful UX "Design Studio"
          </span>
          
          <button className="mt-2 px-4 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
