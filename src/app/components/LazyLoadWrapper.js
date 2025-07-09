'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import preloader from '../../../public/images/preloader.gif';

export default function LazyLoadWrapper({ children, threshold = 0.1, rootMargin = '50px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add artificial delay in development to see the loader
          const delay = process.env.NODE_ENV === 'development' ? 100 : 100;
          setTimeout(() => setHasLoaded(true), delay);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className="w-full">
      {!hasLoaded ? (
        <div className="h-96 flex items-center justify-center bg-gray-50">
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
      ) : (
        children
      )}
    </div>
  );
} 