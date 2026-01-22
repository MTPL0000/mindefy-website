"use client";

import Image from "next/image";
import preloader from "../../../public/images/preloader.gif";

export default function SectionLoader({ minHeight = "min-h-96" }) {
  return (
    <div className={`${minHeight} flex items-center justify-center bg-white`}>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={preloader}
          alt="Loading..."
          width={250}
          height={188}
          className="w-16 h-12 sm:w-20 sm:h-15 md:w-24 md:h-18 lg:w-32 lg:h-24 xl:w-40 xl:h-30 2xl:w-48 2xl:h-36 object-contain"
          priority
        />
      </div>
    </div>
  );
}
