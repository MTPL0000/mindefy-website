/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Note: headers() and redirects() don't work with static export
  // These would need to be configured at the hosting level (Vercel, Netlify, etc.)
};

export default nextConfig;
