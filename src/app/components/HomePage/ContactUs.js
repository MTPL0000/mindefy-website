"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ContactUs() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // URL tracking utility function for form submission success
  const updateUrlWithTracking = () => {
    try {
      // Generate Unix timestamp for consistent tracking
      const timestamp = Date.now();

      // Read and preserve all existing URL parameters using URLSearchParams
      const currentParams = new URLSearchParams(window.location.search);

      // Store original parameters for preservation
      const originalParams = new Map();
      for (const [key, value] of currentParams.entries()) {
        originalParams.set(key, value);
      }

      // Handle multiple form submissions by updating timestamp on subsequent submissions
      // This ensures the latest submission timestamp is always reflected
      currentParams.set("form_submitted", "true");
      currentParams.set("timestamp", timestamp.toString());

      // Construct new URL with all preserved and tracking parameters
      const newUrl = `${window.location.pathname}?${currentParams.toString()}`;

      // Check if History API is supported before attempting URL modification
      if (
        typeof window !== "undefined" &&
        window.history &&
        window.history.pushState
      ) {
        try {
          // Primary method: Update URL using Next.js router with scroll: false
          // This uses browser history API without page navigation or reload
          router.push(newUrl, { scroll: false });
        } catch (routerError) {
          console.warn(
            "Next.js router failed, falling back to History API:",
            routerError
          );

          // Fallback: Use browser History API directly
          window.history.pushState(null, "", newUrl);
        }
      } else {
        // Fallback behavior for browsers that don't support History API
        console.warn("History API not supported, URL tracking disabled");

        // Alternative: Could use hash-based tracking or localStorage for analytics
        // For now, we'll just log the tracking data for debugging
        console.info("Form submission tracking data:", {
          form_submitted: true,
          timestamp: timestamp,
          originalParams: Object.fromEntries(originalParams),
        });
      }
    } catch (error) {
      // Comprehensive error handling to ensure non-blocking operation
      console.warn("URL tracking failed:", error);

      // Additional fallback: Attempt basic History API usage
      try {
        if (
          typeof window !== "undefined" &&
          window.history &&
          window.history.pushState
        ) {
          const timestamp = Date.now();
          const basicParams = new URLSearchParams(window.location.search);
          basicParams.set("form_submitted", "true");
          basicParams.set("timestamp", timestamp.toString());
          const basicUrl = `${
            window.location.pathname
          }?${basicParams.toString()}`;
          window.history.pushState(null, "", basicUrl);
        }
      } catch (fallbackError) {
        console.warn("All URL tracking methods failed:", fallbackError);

        // Final fallback: Log tracking data for manual analytics collection
        console.info("Manual tracking data collection:", {
          form_submitted: true,
          timestamp: Date.now(),
          url: window.location.href,
          error: fallbackError.message,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Check file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: "error",
          message: "File size must be less than 5MB",
        });
        return;
      }

      setFile(selectedFile);
      setSubmitStatus({ type: "", message: "" });
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
      const droppedFile = e.dataTransfer.files[0];

      // Check file size (5MB limit)
      if (droppedFile.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: "error",
          message: "File size must be less than 5MB",
        });
        return;
      }

      setFile(droppedFile);
      setSubmitStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      if (file) {
        formDataToSend.append("file", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });

        // Reset form
        setFormData({ fullName: "", email: "", message: "" });
        setFile(null);

        // Reset file input
        const fileInput = document.getElementById("document");
        if (fileInput) fileInput.value = "";

        // Facebook Pixel Lead tracking
        if (typeof window !== "undefined" && window.fbq) {
          try {
            window.fbq("track", "Lead");
            // console.log("Facebook Pixel Lead event tracked successfully");
          } catch (error) {
            //nothing to catch
            // console.warn("Facebook Pixel tracking failed:", error);
          }
        } else {
          // console.warn(
          //   "Facebook Pixel (fbq) not found - make sure Facebook Pixel is properly installed"
          // );
        }

        // Add URL tracking after successful form submission
        updateUrlWithTracking();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-5 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.12rem] font-semibold text-center mb-8 lg:mb-12">
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
                  placeholder="Hello there! I would like to talk about my project..."
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
                  onClick={() => document.getElementById("document").click()}
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
                          <span className="text-[#5E9AFF] hover:underline">
                            upload
                          </span>{" "}
                          Max size: 5MB
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus.message && (
                <div
                  className={`text-center p-3 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 sm:px-8 py-2 sm:py-3 font-medium text-sm sm:text-base rounded-full transition-colors duration-300 min-w-[120px] ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-[#005EFF] text-white hover:bg-blue-600 cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
