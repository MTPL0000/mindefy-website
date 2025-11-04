import { useEffect, useState } from 'react';

export const useHeaderHeight = (selector = 'nav') => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    let retries = 0;
    const maxRetries = 10;

    const measureHeight = () => {
      const element = document.querySelector(selector);
      if (element) {
        setHeaderHeight(element.offsetHeight);
        
        // Set up ResizeObserver for dynamic changes
        const resizeObserver = new ResizeObserver(() => {
          setHeaderHeight(element.offsetHeight);
        });
        resizeObserver.observe(element);
        
        return () => resizeObserver.disconnect();
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(measureHeight, 100);
      }
    };

    const cleanup = measureHeight();
    return cleanup;
  }, [selector]);

  return headerHeight;
};
