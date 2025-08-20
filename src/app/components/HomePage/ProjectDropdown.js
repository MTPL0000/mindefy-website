"use client";
import Link from "next/link";

export const ProjectDropdown = ({ onItemClick }) => {
  return (
    <div className="pt-4 sm:pt-6 lg:pt-8 bg-white shadow-lg rounded-[0.5rem] z-20 min-w-[120px] sm:min-w-[150px]">
      {/* Project Links */}
      <div className="flex pt-0 pb-2 sm:pb-4 px-4 sm:px-6 items-center justify-center">
        <ul className="space-y-1 sm:space-y-1.5 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem]">
          <li>
            <Link
              href="/early-foods"
              onClick={onItemClick}
              className="hover:text-red-600 hover:font-semibold block py-0.5 whitespace-nowrap cursor-pointer"
            >
              EarlyFoods
            </Link>
          </li>
          <li>
            <Link
              href="/jego"
              onClick={onItemClick}
              className="hover:text-red-600 hover:font-semibold block py-0.5 whitespace-nowrap cursor-pointer"
            >
              JEGO
            </Link>
          </li>
          <li>
            <Link
              href="/soli-stack"
              onClick={onItemClick}
              className="hover:text-red-600 hover:font-semibold block py-0.5 whitespace-nowrap cursor-pointer"
            >
              SoliStack
            </Link>
          </li>
          <li>
            <Link
              href="/digi-bill"
              onClick={onItemClick}
              className="hover:text-red-600 hover:font-semibold block py-0.5 whitespace-nowrap cursor-pointer"
            >
              GreenBill
            </Link>
          </li>
          <li>
            <Link
              href="/mach-one"
              onClick={onItemClick}
              className="hover:text-red-600 hover:font-semibold block py-0.5 whitespace-nowrap cursor-pointer"
            >
              MachOne
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
