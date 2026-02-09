"use client";
import Link from "next/link";
import { projectsData } from "@/config/servicesConfig";

export const ProjectDropdown = ({ onItemClick }) => {
  return (
    <div className="pt-4 sm:pt-6 lg:pt-8 bg-white shadow-lg rounded-lg z-20">
      {/* Project Links */}
      <div className="flex pt-0 pb-2 sm:pb-4 px-4 sm:px-3 items-center justify-center">
        <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2 text-[#333333] font-medium text-xs sm:text-sm lg:text-text-xs xl:text-sm">
          {projectsData.map((product) => (
            <li key={product.id}>
              <Link
                href={product.route}
                onClick={onItemClick}
                className="w-fit hover:text-red-600 hover:font-semibold block py-0.5 transition-colors duration-200"
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
