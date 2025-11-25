"use client";
import Link from "next/link";

export default function ProductsDropdown({ onItemClick }) {
  return (
    <div className="pt-4 sm:pt-6 lg:pt-8 bg-white shadow-lg rounded-[0.5rem] z-20 min-w-[120px] sm:min-w-[150px]">
      {/* Column 1: YourHour Application */}
      <div className="flex pt-0 pb-2 sm:pb-4 px-4 sm:px-6 items-center justify-center">
        <ul className="space-y-1 sm:space-y-1.5 text-[#333333] font-medium text-xs sm:text-sm lg:text-[0.85rem]">
          <li>
            <Link
              href="/yourhour-screentime-app"
              onClick={onItemClick}
              className="hover:text-red-600 hover:font-semibold block py-0.5 whitespace-nowrap"
            >
              YourHour
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
