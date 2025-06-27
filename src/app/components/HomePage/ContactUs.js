"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData, file);
    // Reset form after submission
    setFormData({ fullName: "", email: "", message: "" });
    setFile(null);
  };

  return (
    <section className="w-full py-[3.43rem] ">
      <div className="max-w-[75rem] mx-auto ">
        <h1 className="text-[2.12rem] font-semibold text-center mb-[3rem]">
          Lets Get In Touch
        </h1>

        <div className="flex md:flex-row gap-[3rem] items-center">
          {/* Left Column - Image and Contact Info */}
          <div className="flex-1">
            <div className=" opacity-92 relative w-[33.75rem] h-[29.31rem] mb-[2.3rem]">
              <Image
                src="/images/footer1.jpg"
                alt="Mindefy Office"
                fill
                className="object-cover rounded-[0.5rem]"
              />
            </div>

            {/* <div className="text-[0.875rem] text-[#000000] w-45 font-normal  cursor-pointer space-y-[1.156rem]">
              <p className="hover:text-blue-500">rahul@mindefy.tech</p>
              <p>+91-731-2996160</p>
              <p>+91-90961-26060</p>
            </div> */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-[.75rem]">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[0.875rem]  font-medium mb-[0.5rem]"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John David"
                  className="w-full px-[1rem] py-[0.75rem] border bg-[#F8F8F8] border-gray-300 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.875rem] font-medium mb-[0.5rem]"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="yourname@gmail.com"
                  className="w-full px-[1rem] py-[0.75rem] bg-[#F8F8F8] border border-gray-300 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.875rem] font-medium mb-[0.5rem]"
                >
                  Message
                </label>
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello there! I would like to talk about how to..."
                  rows={5}
                  className="w-full h-[9.75rem] px-[1rem] py-[0.75rem] bg-[#F8F8F8] border border-gray-300  rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* File Upload */}
              <div>
                <p className="text-[0.875rem] font-medium text-center mb-[0.75rem]">
                  or
                </p>
                <label
                  htmlFor="document"
                  className="block text-[0.875rem] font-medium mb-[0.75rem]"
                >
                  Attach A Document
                </label>
                <div
                  className={`border border-gray-300 rounded-[0.75rem]  bg-[#F8F8F8] p-[1rem] text-center cursor-pointer ${
                    isDragging
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="document"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[1.5rem] w-[1.5rem] text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <p className="text-[0.875rem] text-[#666666]">
                      {file ? file.name : "Drop here to attach or"}
                    </p>
                    {!file && (
                      <p className="text-[0.75rem] text-[#808080]">
                        <span className="text-[#5E9AFF]">upload</span>
                        {""} Max size: 5MB
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#005EFF] text-white px-[2rem] font-normal text-[0.875rem] py-[0.75rem]  cursor-pointer rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
