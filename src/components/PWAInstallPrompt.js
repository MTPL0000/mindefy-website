"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);

    // Check if already installed (standalone mode)
    const isInStandaloneMode = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    setIsStandalone(isInStandaloneMode);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Show iOS install instructions if on iOS and not in standalone mode
    if (isIOSDevice && !isInStandaloneMode) {
      const hasSeenIOSPrompt = localStorage.getItem("hasSeenIOSInstallPrompt");
      if (!hasSeenIOSPrompt) {
        setTimeout(() => setShowInstallPrompt(true), 3000);
      }
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    if (isIOS) {
      localStorage.setItem("hasSeenIOSInstallPrompt", "true");
    }
  };

  // Don't show if already in standalone mode
  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start">
        <div className="shrink-0">
          <Image
            src="/images/logo/mindefy-logo.png"
            alt="Mindefy Logo"
            height={32}
            width={32}
            className="object-contain rounded"
          />
        </div>
        <div className="ml-3 flex-1">
          <h1 className="text-sm font-medium text-gray-900">
            Install Mindefy App
          </h1>
          <p className="text-xs text-gray-600 mt-1">
            {isIOS
              ? 'Tap the share button and select "Add to Home Screen"'
              : "Get quick access by installing our app on your device"}
          </p>
          <div className="mt-3 flex space-x-2">
            {!isIOS && deferredPrompt && (
              <button
                onClick={handleInstallClick}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-[#D84426] hover:bg-[#c23d26] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84426]"
              >
                Install
              </button>
            )}
            <button
              onClick={handleDismiss}
              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84426]"
            >
              {isIOS ? "Got it" : "Later"}
            </button>
          </div>
        </div>
        <div className="ml-4 shrink-0">
          <button
            onClick={handleDismiss}
            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84426]"
          >
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
