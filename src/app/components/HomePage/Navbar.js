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

  // Close mobile menu when any option is clicked
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
    setMobileProjectsOpen(false);
  };

  // Close all desktop dropdowns when any dropdown item is clicked
  const handleDesktopDropdownItemClick = () => {
    setShowServicesDropdown(false);
    setShowProductsDropdown(false);
    setShowProjectsDropdown(false);
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    // Close mobile menu first
    handleMobileMenuItemClick();
    
    // Function to calculate and scroll to contact section with retry logic
    const performScroll = (attempt = 1) => {
      const contactSection = document.getElementById("contact");
      
      if (!contactSection) {
        console.warn("Contact section not found on current page");
        return;
      }

      // Wait for any ongoing layout changes to complete
      requestAnimationFrame(() => {
        // Force layout recalculation
        void contactSection.offsetHeight;
        
        // Get current positions
        const rect = contactSection.getBoundingClientRect();
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calculate absolute position from top of document
        const absoluteTop = rect.top + scrollY;
        
        // Account for navbar (120px) and add small buffer
        const targetPosition = Math.max(0, absoluteTop - 120);
        
        // Perform smooth scroll
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
        
        // Verify scroll worked correctly (optional retry for complex pages)
        if (attempt === 1) {
          setTimeout(() => {
            const newRect = contactSection.getBoundingClientRect();
            // If element is not near the top of viewport, try again once
            if (newRect.top > 200) {
              performScroll(2);
            }
          }, 1000);
        }
      });
    };

    // Initial delay to ensure page is stable
    setTimeout(() => performScroll(), 200);
  };

  return (
    <nav className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#ebdad4] px-2 sm:px-4 lg:px-8 py-4 sticky top-0 z-20 shadow">
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
        <div className="hidden md:flex items-baseline space-x-2 md:space-x-3 lg:space-x-6 font-semibold text-sm lg:text-base text-[#3B3C4A]">
          <a
            href="/about-us"
            className="hover:text-[#2c2178] whitespace-nowrap"
          >
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

                {/* Actual dropdown positioned to take full width */}
                <div className="fixed left-0 top-[4.5rem] w-full flex justify-center z-40">
                  <div className="w-full max-w-none">
                    <ServicesDrop onItemClick={handleDesktopDropdownItemClick} />
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
                <ProductsDropdown onItemClick={handleDesktopDropdownItemClick} />
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
                <ProjectDropdown onItemClick={handleDesktopDropdownItemClick} />
              </div>
            )}
          </div>

          <a
            href="/mindful-ux"
            className="hover:text-[#2c2178] cursor-pointer whitespace-nowrap hidden md:block"
          >
            Mindful UX "Design Studio"
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={scrollToContact}
            className="px-3 lg:px-5 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white text-sm lg:text-base whitespace-nowrap cursor-pointer">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-white rounded-lg shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#3B3C4A] p-4">
            <a
              href="/about-us"
              onClick={handleMobileMenuItemClick}
              className="hover:text-[#2c2178] py-2"
            >
              About Us
            </a>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left cursor-pointer"
              >
                Services
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-3 text-xs">
                  <div className="space-y-1">
                    <p className="font-semibold text-[#332771] text-sm">
                      Modern Application Development
                    </p>
                    <Link
                      href="/web-application-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Web Application Development
                    </Link>
                    <Link
                      href="/android-app-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Android App Development
                    </Link>
                    <Link
                      href="/ios-app-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      iOS Development
                    </Link>
                    <Link
                      href="/hybrid-app-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Hybrid App Development
                    </Link>
                    <Link
                      href="/mean-mern-stack-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      MEAN & MERN Stack Development
                    </Link>
                    <Link
                      href="/agile-rapid-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Agile & Rapid Application Development Model
                    </Link>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="font-semibold text-[#332771] text-sm">
                      Digital Transformation Services
                    </p>
                    <Link
                      href="/digital-transformation"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Digital Transformation Services
                    </Link>
                    <Link
                      href="/microservices-architecture"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Building Micro-services Architecture
                    </Link>
                    <Link
                      href="/low-code-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Low Code Development
                    </Link>
                    <Link
                      href="/test-automation-qa"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Application Test Automation and QA Services
                    </Link>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="font-semibold text-[#332771] text-sm">
                      Cloud & DevOps
                    </p>
                    <Link
                      href="/cloud-devops"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Cloud & DevOps
                    </Link>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="font-semibold text-[#332771] text-sm">
                      Startup Support & Consulting
                    </p>
                    <Link
                      href="/startup-support"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Startup Support and Consulting
                    </Link>
                    <Link
                      href="/mvp-development"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      MVP Development & PMF Test
                    </Link>
                    <Link
                      href="/white-label-solutions"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      White Label App Solutions
                    </Link>
                    <Link
                      href="/startup-incubation-consulting"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Startup Incubation Services
                    </Link>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="font-semibold text-[#332771] text-sm">
                      Enterprise Business Solutions
                    </p>
                    <Link
                      href="/enterprise-solutions"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Enterprise Business Solutions
                    </Link>
                    <Link
                      href="/crm-solutions"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      CRM Solutions
                    </Link>
                    <Link
                      href="/business-process-management"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Business Process Management
                    </Link>
                    <Link
                      href="/ecommerce-marketplace"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      E-commerce and Marketplace
                    </Link>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="font-semibold text-[#332771] text-sm">
                      IT/Staff Argumentation
                    </p>
                    <Link
                      href="/staff-services"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      Staff Augmentation Services
                    </Link>
                    <Link
                      href="/it-consulting"
                      onClick={handleMobileMenuItemClick}
                      className="block hover:text-red-600"
                    >
                      IT Consulting Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left cursor-pointer"
              >
                Products
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 mt-2">
                  <Link
                    href="/your-hour"
                    onClick={handleMobileMenuItemClick}
                    className="block hover:text-red-600 text-xs"
                  >
                    YourHour
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Projects Dropdown */}
            <div>
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left cursor-pointer"
              >
                Projects
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    mobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileProjectsOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  {/* <Link
                    href="/your-hour"
                    onClick={handleMobileMenuItemClick}
                    className="block hover:text-red-600 text-xs"
                  >
                    EarlyFoods
                  </Link> */}
                  {/* <Link
                    href="/your-hour"
                    onClick={handleMobileMenuItemClick}
                    className="block hover:text-red-600 text-xs"
                  >
                    JEGO
                  </Link> */}
                  <Link
                    href="/your-hour"
                    onClick={handleMobileMenuItemClick}
                    className="block hover:text-red-600 text-xs"
                  >
                    SoliStack
                  </Link>
                  <Link
                    href="/your-hour"
                    onClick={handleMobileMenuItemClick}
                    className="block hover:text-red-600 text-xs"
                  >
                    GreenBill
                  </Link>
                  <Link
                    href="/your-hour"
                    onClick={handleMobileMenuItemClick}
                    className="block hover:text-red-600 text-xs"
                  >
                    MachOne
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/mindful-ux"
              onClick={handleMobileMenuItemClick}
              className="hover:text-[#2c2178] cursor-pointer py-2"
            >
              Mindful UX "Design Studio"
            </a>

            <button
              onClick={scrollToContact}
              className="mt-2 px-4 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
