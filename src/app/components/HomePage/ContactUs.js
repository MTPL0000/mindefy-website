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
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.12rem] font-semibold text-center mb-8 sm:mb-12 lg:mb-16">
          Let's Get In Touch
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center lg:items-start">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[33.75/29.31] opacity-90">
              <Image
                src="/images/footer1.jpg"
                alt="Mindefy Office"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm sm:text-base font-medium mb-2"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-[#F8F8F8] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium mb-2"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#F8F8F8] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello there! I would like to talk about how to..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#F8F8F8] border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical min-h-[120px] text-sm sm:text-base"
                />
              </div>

              {/* File Upload */}
              <div>
                <p className="text-sm sm:text-base font-medium text-center mb-3">
                  or
                </p>
                <label
                  htmlFor="document"
                  className="block text-sm sm:text-base font-medium mb-3"
                >
                  Attach A Document
                </label>
                <div
                  className={`border rounded-xl bg-[#F8F8F8] p-4 sm:p-6 text-center cursor-pointer transition-colors ${
                    isDragging
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('document').click()}
                >
                  <input
                    type="file"
                    id="document"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  />
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400"
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
                    <div className="text-center sm:text-left">
                      <p className="text-sm sm:text-base text-[#666666]">
                        {file ? file.name : "Drop here to attach or"}
                      </p>
                      {!file && (
                        <p className="text-xs sm:text-sm text-[#808080]">
                          <span className="text-[#5E9AFF] hover:underline">upload</span>
                          {" "} Max size: 5MB
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#005EFF] text-white px-6 sm:px-8 py-2 sm:py-3 font-medium text-sm sm:text-base cursor-pointer rounded-full hover:bg-blue-600 transition-colors duration-300 min-w-[120px]"
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
