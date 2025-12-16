import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react", "react-dom"],
  },

  webpack: (config) => {
    return config;
  },

  // Add redirect function to send old page endpoints to new endpoints.

  async redirects() {
    return [
      { source: "/ai-ml", destination: "/ai-ml-services", permanent: true },
      {
        source: "/about-us",
        destination: "/about-us-technology-innovators",
        permanent: true,
      },
      {
        source: "/digital-transformation",
        destination: "/digital-transformation-consulting",
        permanent: true,
      },
      {
        source: "/startup-support",
        destination: "/startup-support-consulting",
        permanent: true,
      },
      {
        source: "/it-consulting",
        destination: "/it-consulting-strategy",
        permanent: true,
      },
      {
        source: "/crm-solutions",
        destination: "/crm-software-solutions",
        permanent: true,
      },
    ];
  },
};

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: { maxEntries: 4, maxAgeSeconds: 365 * 24 * 60 * 60 },
      },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-image-assets",
        expiration: { maxEntries: 64, maxAgeSeconds: 24 * 60 * 60 },
      },
    },
    {
      urlPattern: /\.(?:js|css)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-js-css-assets",
        expiration: { maxEntries: 32, maxAgeSeconds: 24 * 60 * 60 },
      },
    },
  ],
})(nextConfig);

export default config;
