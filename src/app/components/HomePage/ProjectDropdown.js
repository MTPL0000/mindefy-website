"use client";
import Link from "next/link";

export const ProjectDropdown = () => {
  return (
    <div className="pt-8 bg-white shadow-lg rounded-[0.5rem] z-20">
      {/* Column 1: YourHour Application */}
      <div className="flex pt-0 pb-2 pl-6 pr-6 items-center justify-center">
        <ul className="space-y-1.5 text-[#333333] font-medium text-[0.85rem] mb-4">
          <li>
            <Link
              href="/your-hour"
              className="hover:text-red-600 hover:font-semibold block"
            >
              EarlyFoods
            </Link>
          </li>
          <li>
            <Link
              href="/your-hour"
              className="hover:text-red-600 hover:font-semibold block"
            >
              JEGO
            </Link>
          </li>
          <li>
            <Link
              href="/your-hour"
              className="hover:text-red-600 hover:font-semibold block"
            >
              SoliStack
            </Link>
          </li>
          <li>
            <Link
              href="/your-hour"
              className="hover:text-red-600 hover:font-semibold block"
            >
              GreenBill
            </Link>
          </li>
          <li>
            <Link
              href="/your-hour"
              className="hover:text-red-600 hover:font-semibold block"
            >
              MachOne
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
