"use client";

import Link from "next/link";
import { groupedServices } from "../../config/servicesConfig";

export default function ServicesDrop() {
  return (
    <div className="w-full pt-8 bg-white shadow-lg rounded-[0.5rem] gap-28 flex z-20">
      {/* Column 1: Modern Application Development + IT/Staff Argumentation */}
      <div className="flex-1 w-[21.875rem] pl-20">
        <h3 className="text-[1.25rem] font-semibold text-[#332771] mb-2">
          Modern Application Development
        </h3>
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          {groupedServices["Modern Application Development"]?.map((service) => (
            <li key={service.id}>
              <Link
                href={service.route}
                className="hover:text-red-600 hover:font-semibold block"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-[1.25rem] font-semibold text-[#332771] mb-2">
          IT/Staff Argumentation
        </h3>
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          {groupedServices["IT/Staff Argumentation"]?.map((service) => (
            <li key={service.id}>
              <Link
                href={service.route}
                className="hover:text-red-600 hover:font-semibold block"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Digital Transformation Services + Cloud & DevOps */}
      <div className="flex-1 h-[22.62rem]">
        <h3 className="text-[1.25rem] font-semibold text-[#332771] mb-2">
          Digital Transformation Services
        </h3>
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          {groupedServices["Digital Transformation Services"]?.map(
            (service) => (
              <li key={service.id}>
                <Link
                  href={service.route}
                  className="hover:text-red-600 hover:font-semibold block"
                >
                  {service.title}
                </Link>
              </li>
            )
          )}
        </ul>

        <h3 className="text-[1.25rem] font-semibold text-[#332771] mb-2">
          Cloud & DevOps
        </h3>
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          {groupedServices["Cloud & DevOps"]?.map((service) => (
            <li key={service.id}>
              <Link
                href={service.route}
                className="hover:text-red-600 hover:font-semibold block"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Startup Support & Consulting + Enterprise Business Solutions */}
      <div className="flex-1 h-[19.5rem] pl-[1rem]">
        <h3 className="text-[1.25rem] font-semibold text-[#332771] mb-2">
          Startup Support & Consulting
        </h3>
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          {groupedServices["Startup Support & Consulting"]?.map((service) => (
            <li key={service.id}>
              <Link
                href={service.route}
                className="hover:text-red-600 hover:font-semibold block"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="text-[1.25rem] font-semibold text-[#332771] mb-2">
          Enterprise Business Solutions
        </h3>
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          {groupedServices["Enterprise Business Solutions"]?.map((service) => (
            <li key={service.id}>
              <Link
                href={service.route}
                className="hover:text-red-600 hover:font-semibold block"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
