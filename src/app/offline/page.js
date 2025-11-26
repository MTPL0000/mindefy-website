"use client";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
      <div className="max-w-md w-full mx-4 text-center">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Offline Icon */}
          <div className="mb-6">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            You&apos;re Offline
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            It looks like you&apos;re not connected to the internet. Please
            check your connection and try again.
          </p>

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#D84426] hover:bg-[#c23d26] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84426] transition-colors duration-200"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Some content may still be available from your previous visits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
