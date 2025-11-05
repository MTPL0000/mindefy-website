import { useState, useEffect } from "react";

const useHeaderHeight = (headerSelector = "nav") => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;
    const retryDelay = 100; // ms

    const updateHeaderHeight = () => {
      const header = document.querySelector(headerSelector);

      if (header) {
        const height = header.offsetHeight;
        setHeaderHeight(height);
        console.log("Header height calculated:", height, "px");
        return true;
      }
      return false;
    };

    // Initial try
    if (!updateHeaderHeight()) {
      // If header not found, retry a few times
      const retryInterval = setInterval(() => {
        if (updateHeaderHeight() || ++retryCount >= maxRetries) {
          clearInterval(retryInterval);
          if (retryCount >= maxRetries) {
            console.warn(
              `Header with selector '${headerSelector}' not found after ${maxRetries} attempts`
            );
          }
        }
      }, retryDelay);

      return () => clearInterval(retryInterval);
    }

    // Add ResizeObserver for dynamic header height changes
    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    const header = document.querySelector(headerSelector);
    if (header) {
      resizeObserver.observe(header);
    }

    // Also handle window resize
    const handleResize = () => {
      updateHeaderHeight();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [headerSelector]);

  return headerHeight;
};

export default useHeaderHeight;
