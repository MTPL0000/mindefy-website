"use client";

import { groupedServices } from "@/config/servicesConfig";
import Link from "next/link";

export default function ServicesDrop({ onItemClick }) {
  return (
    <div className="w-full pt-4 sm:pt-6 lg:pt-8 bg-white shadow-lg z-20">
      <div className="grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pb-4 sm:pb-6 lg:pb-8">
        {/* Column 1: AI Development & Data Services + Business IT Solutions  */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl font-semibold text-[#332771] mb-2 lg:mb-3">
              AI Development & Data Services
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
              {groupedServices["AI Development & Data Services"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl font-semibold text-[#332771] mb-2 lg:mb-3">
              Business IT Solutions
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
              {groupedServices["Business IT Solutions"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Product Development + Game Development */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl font-semibold text-[#332771] mb-2 lg:mb-3">
              Product Development
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
              {groupedServices["Product Development"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl font-semibold text-[#332771] mb-2 lg:mb-3">
              Game Development
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
              {groupedServices["Game Development"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Cloud & Platform Engineering + E-commerce and Marketplace +  */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl font-semibold text-[#332771] mb-2 lg:mb-3">
              Cloud & Platform Engineering
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
              {groupedServices["Cloud & Platform Engineering"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl font-semibold text-[#332771] mb-2 lg:mb-3">
              E-commerce and Marketplace
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
              {groupedServices["E-commerce and Marketplace"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
