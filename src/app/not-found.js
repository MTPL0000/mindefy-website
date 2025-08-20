"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-6 justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-normal text-gray-700">
        This page isn’t available
      </h1>
      <p className="text-2xl mt-4 font-normal text-gray-700">
        Let us help you return to our
        <Link
          href="/"
          passHref
          className="font-bold text-[#332771] cursor-pointer"
        >
          {" "}
          HomePage{" "}
        </Link>
        and find what you're looking for.
      </p>
    </div>
  );
};

export default NotFound;
