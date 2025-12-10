"use client";

import { useState, useEffect } from "react";
import ServicesDrop from "./ServicesDrop";
import Link from "next/link";
import ProductsDropdown from "./ProductsDropdown";
import { ProjectDropdown } from "./ProjectDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  servicesData,
  productsData,
  projectsData,
} from "@/config/servicesConfig";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [isTabletDrawerOpen, setIsTabletDrawerOpen] = useState(false);
  const [tabletServicesOpen, setTabletServicesOpen] = useState(false);
  const [tabletProductsOpen, setTabletProductsOpen] = useState(false);
  const [tabletProjectsOpen, setTabletProjectsOpen] = useState(false);

  // Dynamic state for categories - using object to track open/closed state
  const [openCategories, setOpenCategories] = useState({});
  const [tabletOpenCategories, setTabletOpenCategories] = useState({});

  // States for transition effects
  const [servicesTransitioning, setServicesTransitioning] = useState(false);
  const [productsTransitioning, setProductsTransitioning] = useState(false);
  const [projectsTransitioning, setProjectsTransitioning] = useState(false);

  // State for AI text animation - only on home page during scroll
  const [showAIInNavbar, setShowAIInNavbar] = useState(!isHomePage);

  // Check if any overlay is open (for blur effect)
  const isAnyOverlayOpen =
    showServicesDropdown ||
    showProductsDropdown ||
    showProjectsDropdown ||
    isMobileMenuOpen ||
    isTabletDrawerOpen;

  // Group services by category
  const servicesByCategory = servicesData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  // Scroll handler for AI animation - only active on home page
  useEffect(() => {
    if (!isHomePage) {
      setShowAIInNavbar(true);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]");
      const aiTextElement = document.querySelector("[data-ai-text]");

      if (!heroSection || !aiTextElement) return;

      const navbarHeight = 64; // Approximate navbar height
      const aiTextRect = aiTextElement.getBoundingClientRect();

      // Show navbar AI tab only when the hero AI text is completely hidden below navbar
      if (aiTextRect.bottom < navbarHeight) {
        setShowAIInNavbar(true);
      } else {
        setShowAIInNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close all dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        showServicesDropdown ||
        showProductsDropdown ||
        showProjectsDropdown
      ) {
        setShowServicesDropdown(false);
        setShowProductsDropdown(false);
        setShowProjectsDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showServicesDropdown, showProductsDropdown, showProjectsDropdown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all mobile dropdowns when main menu closes
    if (isMobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileProductsOpen(false);
      setMobileProjectsOpen(false);
      setOpenCategories({});
    }
  };

  const toggleTabletDrawer = () => {
    setIsTabletDrawerOpen(!isTabletDrawerOpen);
    // Close all tablet dropdowns when drawer closes
    if (isTabletDrawerOpen) {
      setTabletServicesOpen(false);
      setTabletProductsOpen(false);
      setTabletProjectsOpen(false);
      setTabletOpenCategories({});
    }
  };

  // Enhanced Services toggle function that handles nested state management
  const toggleMobileServices = () => {
    const newServicesState = !mobileServicesOpen;
    setMobileServicesOpen(newServicesState);

    // If closing Services dropdown, reset all nested states
    if (!newServicesState) {
      setOpenCategories({});
    }
  };

  const toggleTabletServices = () => {
    const newServicesState = !tabletServicesOpen;
    setTabletServicesOpen(newServicesState);

    // If closing Services dropdown, reset all nested states
    if (!newServicesState) {
      setTabletOpenCategories({});
    }
  };

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => {
      // Close all categories and open only the clicked one
      return { [categoryName]: !prev[categoryName] };
    });
  };

  const toggleTabletCategory = (categoryName) => {
    setTabletOpenCategories((prev) => {
      // Close all categories and open only the clicked one
      return { [categoryName]: !prev[categoryName] };
    });
  };

  // Close mobile menu when any option is clicked
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
    setMobileProjectsOpen(false);
    setOpenCategories({});
  };

  // Close tablet drawer when any option is clicked
  const handleTabletDrawerItemClick = () => {
    setIsTabletDrawerOpen(false);
    setTabletServicesOpen(false);
    setTabletProductsOpen(false);
    setTabletProjectsOpen(false);
    setTabletOpenCategories({});
  };

  // Close all desktop dropdowns when any dropdown item is clicked
  const handleDesktopDropdownItemClick = () => {
    // Start transition effect
    if (showServicesDropdown) setServicesTransitioning(true);
    if (showProductsDropdown) setProductsTransitioning(true);
    if (showProjectsDropdown) setProjectsTransitioning(true);

    // Close dropdowns after a brief delay to allow transition
    setTimeout(() => {
      setShowServicesDropdown(false);
      setShowProductsDropdown(false);
      setShowProjectsDropdown(false);

      // Reset transition states
      setTimeout(() => {
        setServicesTransitioning(false);
        setProductsTransitioning(false);
        setProjectsTransitioning(false);
      }, 50);
    }, 150);
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    // Close mobile menu first
    handleMobileMenuItemClick();
    // Close tablet drawer
    handleTabletDrawerItemClick();

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
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        // Calculate absolute position from top of document
        const absoluteTop = rect.top + scrollY;

        // Account for navbar (120px) and add small buffer
        const targetPosition = Math.max(0, absoluteTop - 120);

        // Perform smooth scroll
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
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
    <>
      {/* Blur overlay backdrop */}
      {isAnyOverlayOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-10"
          onClick={() => {
            setShowServicesDropdown(false);
            setShowProductsDropdown(false);
            setShowProjectsDropdown(false);
            handleMobileMenuItemClick();
            handleTabletDrawerItemClick();
          }}
        ></div>
      )}

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

          {/* Hamburger menu toggle - Mobile only */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl font-bold cursor-pointer z-30"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Tablet drawer toggle - Tablet only */}
          <button
            onClick={toggleTabletDrawer}
            className="hidden md:block lg:hidden text-2xl font-bold cursor-pointer z-30"
            aria-label="Toggle tablet drawer"
          >
            {isTabletDrawerOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-baseline space-x-2 md:space-x-3 lg:space-x-6 font-semibold text-sm lg:text-base text-[#3B3C4A]">
            {/* AI Tab with animation for large screen only - always visible on non-home pages, animated on home page only */}
            <div
              className="relative overflow-visible"
              style={{
                width: showAIInNavbar ? "auto" : "0px",
                opacity: showAIInNavbar ? 1 : 0,
                transition: "width 0.5s ease-out, opacity 0.5s ease-out",
                marginRight: "1.25rem",
              }}
            >
              <Link
                href="/ai-ml-services"
                className="relative block cursor-pointer pb-1.5 text-center whitespace-nowrap transition-all duration-500"
                style={{
                  width: "60px",
                  transform: isHomePage
                    ? showAIInNavbar
                      ? "translateX(0)"
                      : "translateX(100%)"
                    : "translateX(0)",
                  transition: "transform 0.5s ease-out",
                }}
              >
                {/* Background Loader Animation */}
                <div
                  className="absolute top-1/2 left-1/2 z-0"
                  style={{
                    width: "60px",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {/* Ring 1 - Outermost ring segmented */}
                  <div
                    style={{
                      position: "absolute",
                      width: "57px",
                      height: "57px",
                      borderRadius: "50%",
                      border: "0",
                      background: `conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        transparent 10deg,
                        #D84326 10deg,
                        #D84326 50deg,
                        transparent 50deg,
                        transparent 70deg,
                        #D84326 70deg,
                        #D84326 110deg,
                        transparent 110deg,
                        transparent 140deg,
                        #D84326 140deg,
                        #D84326 180deg,
                        transparent 180deg,
                        transparent 200deg,
                        #D84326 200deg,
                        #D84326 260deg,
                        transparent 260deg,
                        transparent 280deg,
                        #D84326 280deg,
                        #D84326 330deg,
                        transparent 330deg
                      )`,
                      mask: "radial-gradient(transparent 24.75px, black 24.75px, black 28.5px, transparent 28.5px)",
                      WebkitMask:
                        "radial-gradient(transparent 24.75px, black 24.75px, black 28.5px, transparent 28.5px)",
                      animation: "rotate-clockwise 8s linear infinite",
                    }}
                  />

                  {/* Ring 2 - Second ring segmented */}
                  <div
                    style={{
                      position: "absolute",
                      width: "51px",
                      height: "51px",
                      borderRadius: "50%",
                      border: "0",
                      background: `conic-gradient(
                        from 0deg,
                        transparent 0deg,
                        transparent 5deg,
                        #342871 5deg,
                        #342871 15deg,
                        transparent 15deg,
                        transparent 20deg,
                        #342871 20deg,
                        #342871 30deg,
                        transparent 30deg,
                        transparent 35deg,
                        #342871 35deg,
                        #342871 45deg,
                        transparent 45deg,
                        transparent 180deg,
                        #342871 180deg,
                        #342871 280deg,
                        transparent 280deg
                      )`,
                      mask: "radial-gradient(transparent 23.25px, black 23.25px, black 25.5px, transparent 25.5px)",
                      WebkitMask:
                        "radial-gradient(transparent 23.25px, black 23.25px, black 25.5px, transparent 25.5px)",
                      animation: "rotate-counter-clockwise 6s linear infinite",
                    }}
                  />

                  {/* Ring 3 - Dotted circle */}
                  <div
                    style={{
                      position: "absolute",
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      border: "0.5px dotted #D84326",
                      animation: "rotate-clockwise 10s linear infinite",
                    }}
                  />

                  {/* Ring 4 - Dashed circle */}
                  <div
                    style={{
                      position: "absolute",
                      width: "39px",
                      height: "39px",
                      borderRadius: "50%",
                      border: "0.5px dashed #342871",
                      animation: "rotate-counter-clockwise 7s linear infinite",
                    }}
                  />

                  {/* Ring 5 - Small ticks */}
                  <div
                    style={{
                      position: "absolute",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "0",
                      background: `repeating-conic-gradient(
                        from 0deg, 
                        transparent 0deg,
                        transparent 8deg,
                        #D84326 8deg,
                        #D84326 10deg
                      )`,
                      mask: "radial-gradient(transparent 16.5px, black 16.5px, black 18px, transparent 18px)",
                      WebkitMask:
                        "radial-gradient(transparent 16.5px, black 16.5px, black 18px, transparent 18px)",
                      animation: "rotate-clockwise 5s linear infinite",
                    }}
                  />

                  {/* Ring 6 - Innermost ring */}
                  <div
                    style={{
                      position: "absolute",
                      width: "33px",
                      height: "33px",
                      borderRadius: "50%",
                      border: "0.5px solid #342871",
                      animation: "rotate-counter-clockwise 9s linear infinite",
                    }}
                  />

                  {/* Center circle */}
                  <div
                    style={{
                      position: "absolute",
                      width: "27px",
                      height: "27px",
                      background: "#FFFFFF",
                      borderRadius: "50%",
                      zIndex: 10,
                    }}
                  />
                </div>

                {/* Foreground text - Centered inside animation */}
                <span
                  className="font-semibold text-black text-center"
                  style={{
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  AI
                </span>
              </Link>
            </div>

            {/* Services with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <p
                className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2 whitespace-nowrap"
                style={{
                  transform: showAIInNavbar
                    ? "translateX(0)"
                    : "translateX(-30px)",
                  transition: "transform 0.5s ease-out",
                }}
              >
                Services
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    showServicesDropdown ? "rotate-180" : ""
                  }`}
                />
              </p>

              {/* Services Dropdown with hover bridge */}
              {showServicesDropdown && (
                <>
                  {/* Invisible hover bridge */}
                  <div className="fixed left-0 top-16  w-full h-20 z-30"></div>

                  {/* Actual dropdown positioned to take full width */}
                  <div
                    className={`fixed left-0 top-18 w-full flex justify-center z-40 transition-opacity duration-200 ease-in-out ${
                      servicesTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="w-full max-w-none">
                      <ServicesDrop
                        onItemClick={handleDesktopDropdownItemClick}
                      />
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
              style={{
                transform: showAIInNavbar
                  ? "translateX(0)"
                  : "translateX(-30px)",
                transition: "transform 0.5s ease-out",
              }}
            >
              <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2 whitespace-nowrap">
                Products
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    showProductsDropdown ? "rotate-180" : ""
                  }`}
                />
              </p>

              {/* Products Dropdown */}
              {showProductsDropdown && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 top-12 z-40 transition-opacity duration-200 ease-in-out ${
                    productsTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <ProductsDropdown
                    onItemClick={handleDesktopDropdownItemClick}
                  />
                </div>
              )}
            </div>

            {/* Projects with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProjectsDropdown(true)}
              onMouseLeave={() => setShowProjectsDropdown(false)}
              style={{
                transform: showAIInNavbar
                  ? "translateX(0)"
                  : "translateX(-30px)",
                transition: "transform 0.5s ease-out",
              }}
            >
              <p className="flex items-center justify-center gap-1 hover:text-[#2c2178] h-12 mt-1.5 cursor-pointer py-2 whitespace-nowrap">
                Projects
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    showProjectsDropdown ? "rotate-180" : ""
                  }`}
                />
              </p>

              {/* Projects Dropdown */}
              {showProjectsDropdown && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 top-12 z-40 transition-opacity duration-200 ease-in-out ${
                    projectsTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <ProjectDropdown
                    onItemClick={handleDesktopDropdownItemClick}
                  />
                </div>
              )}
            </div>

            <a
              href="/mindful-ux-design-user-experience"
              className="hover:text-[#2c2178] cursor-pointer whitespace-nowrap hidden lg:block"
              style={{
                transform: showAIInNavbar
                  ? "translateX(0)"
                  : "translateX(-30px)",
                transition: "transform 0.5s ease-out",
              }}
            >
              Mindful UX "Design Studio"
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToContact}
              className="px-3 lg:px-5 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white text-sm lg:text-base whitespace-nowrap cursor-pointer"
            >
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
          <div className="mt-2 bg-white rounded-lg shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-2 text-sm font-medium text-[#3B3C4A] px-3 py-4">
              {/* AI Tab in mobile menu - always visible on all pages */}
              <Link
                href="/ai-ml-services"
                onClick={handleMobileMenuItemClick}
                className="hover:text-[#2c2178] py-1 animate-slideIn"
              >
                AI
              </Link>

              {/* Mobile Services Dynamic Dropdown */}
              <div>
                <button
                  onClick={toggleMobileServices}
                  className="flex items-center justify-between w-full hover:text-[#2c2178] py-1 text-left cursor-pointer"
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
                  <div className="pl-4 mt-2 space-y-3 text-sm">
                    {Object.entries(servicesByCategory).map(
                      ([category, services]) => (
                        <div key={category}>
                          <button
                            onClick={() => toggleCategory(category)}
                            className="flex items-center justify-between w-full font-semibold text-[#332771] text-sm cursor-pointer"
                          >
                            {category}
                            <Image
                              src="/images/dropdown-icon.png"
                              alt="Dropdown"
                              width={8}
                              height={8}
                              className={`object-contain transition-transform ${
                                openCategories[category] ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openCategories[category] && (
                            <div className="pl-3 mt-2 space-y-2.5">
                              {services.map((service) => (
                                <Link
                                  key={service.id}
                                  href={service.route}
                                  onClick={handleMobileMenuItemClick}
                                  className="w-fit block hover:text-red-600"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Products Dynamic Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full hover:text-[#2c2178] py-1 text-left cursor-pointer"
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
                  <div className="pl-3 mt-2 space-y-2.5">
                    {productsData.map((product) => (
                      <Link
                        key={product.id}
                        href={product.route}
                        onClick={handleMobileMenuItemClick}
                        className="w-fit block hover:text-red-600 text-sm"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Projects Dynamic Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="flex items-center justify-between w-full hover:text-[#2c2178] py-1 text-left cursor-pointer"
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
                  <div className="pl-3 mt-2 space-y-2.5">
                    {projectsData.map((project) => (
                      <Link
                        key={project.id}
                        href={project.route}
                        onClick={handleMobileMenuItemClick}
                        className="w-fit block hover:text-red-600 text-sm"
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/mindful-ux-design-user-experience"
                onClick={handleMobileMenuItemClick}
                className="hover:text-[#2c2178] cursor-pointer py-1"
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

        {/* Tablet Right-side Drawer */}
        <div
          className={`hidden md:block lg:hidden fixed right-0 top-16 h-[calc(100vh-4rem)] w-sm bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
            isTabletDrawerOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          <div className="flex flex-col gap-2 text-sm font-medium text-[#3B3C4A] px-4 py-4">
            {/* AI Tab in tablet drawer - always visible on all pages */}
            <Link
              href="/ai-ml-services"
              onClick={handleTabletDrawerItemClick}
              className="hover:text-[#2c2178] py-2"
            >
              AI
            </Link>

            {/* Tablet Services Dynamic Dropdown */}
            <div>
              <button
                onClick={toggleTabletServices}
                className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left cursor-pointer"
              >
                Services
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    tabletServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {tabletServicesOpen && (
                <div className="pl-4 mt-2 space-y-3 text-sm">
                  {Object.entries(servicesByCategory).map(
                    ([category, services]) => (
                      <div key={category}>
                        <button
                          onClick={() => toggleTabletCategory(category)}
                          className="flex items-center justify-between text-left w-full font-semibold text-[#332771] text-sm cursor-pointer"
                        >
                          {category}
                          <Image
                            src="/images/dropdown-icon.png"
                            alt="Dropdown"
                            width={8}
                            height={8}
                            className={`object-contain transition-transform ${
                              tabletOpenCategories[category] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {tabletOpenCategories[category] && (
                          <div className="pl-3 mt-2 space-y-2.5">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                href={service.route}
                                onClick={handleTabletDrawerItemClick}
                                className="w-fit block hover:text-red-600"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Tablet Products Dynamic Dropdown */}
            <div>
              <button
                onClick={() => setTabletProductsOpen(!tabletProductsOpen)}
                className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left cursor-pointer"
              >
                Products
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    tabletProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {tabletProductsOpen && (
                <div className="pl-3 mt-2 space-y-2.5">
                  {productsData.map((product) => (
                    <Link
                      key={product.id}
                      href={product.route}
                      onClick={handleTabletDrawerItemClick}
                      className="w-fit block hover:text-red-600 text-sm"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tablet Projects Dynamic Dropdown */}
            <div>
              <button
                onClick={() => setTabletProjectsOpen(!tabletProjectsOpen)}
                className="flex items-center justify-between w-full hover:text-[#2c2178] py-2 text-left cursor-pointer"
              >
                Projects
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className={`object-contain transition-transform ${
                    tabletProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {tabletProjectsOpen && (
                <div className="pl-3 mt-2 space-y-2.5">
                  {projectsData.map((project) => (
                    <Link
                      key={project.id}
                      href={project.route}
                      onClick={handleTabletDrawerItemClick}
                      className="w-fit block hover:text-red-600 text-sm"
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/mindful-ux-design-user-experience"
              onClick={handleTabletDrawerItemClick}
              className="hover:text-[#2c2178] cursor-pointer py-2"
            >
              Mindful UX "Design Studio"
            </a>

            <button
              onClick={scrollToContact}
              className="mt-2 px-4 py-2 rounded-full border border-black text-black font-semibold transition hover:bg-black hover:text-white cursor-pointer w-full"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
