"use client";

import Link from "next/link";
import { groupedServices } from "../../config/servicesConfig";

export default function ServicesDrop({ onItemClick }) {
  return (
    <div className="w-full pt-4 sm:pt-6 lg:pt-8 bg-white shadow-lg z-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pb-4 sm:pb-6 lg:pb-8">
        {/* Column 1:Custom AI Solutions + Modern Application Development + IT/Staff Argumentation */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Custom AI Solutions
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Custom AI Solutions"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Modern Application Development
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Modern Application Development"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              IT/Staff Argumentation
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["IT/Staff Argumentation"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Digital Transformation Services + Cloud & DevOps */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Digital Transformation Services
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Digital Transformation Services"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Cloud & DevOps
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Cloud & DevOps"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Game Development
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Game Development"]?.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    onClick={onItemClick}
                    className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Startup Support & Consulting + Enterprise Business Solutions */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Startup Support & Consulting
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Startup Support & Consulting"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.3rem] font-semibold text-[#332771] mb-2 lg:mb-3">
              Enterprise Business Solutions
            </h3>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem] xl:text-[0.9rem]">
              {groupedServices["Enterprise Business Solutions"]?.map(
                (service) => (
                  <li key={service.id}>
                    <Link
                      href={service.route}
                      onClick={onItemClick}
                      className="hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
