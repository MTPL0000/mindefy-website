// src/app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Navbar";
import ContactUs from "./components/HomePage/ContactUs";
import Footer from "./components/HomePage/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL('https://mindefy.com'),
  title: {
    template: '%s | Mindefy Technologies',
    default: 'Mindefy Technologies - Innovative Software Solutions & Development',
  },
  description: "Leading software development company providing innovative solutions for enterprises and startups. Expert in mobile app development, web applications, AI, and digital transformation.",
  keywords: ["software development", "mobile app development", "web development", "AI solutions", "digital transformation", "enterprise solutions", "startup consulting"],
  authors: [{ name: "Mindefy Technologies" }],
  creator: "Mindefy Technologies",
  publisher: "Mindefy Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindefy.com',
    siteName: 'Mindefy Technologies',
    title: 'Mindefy Technologies - Innovative Software Solutions & Development',
    description: 'Leading software development company providing innovative solutions for enterprises and startups. Expert in mobile app development, web applications, AI, and digital transformation.',
    images: [
      {
        url: '/images/logo/mindefy-logo.png',
        width: 1200,
        height: 630,
        alt: 'Mindefy Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindefy Technologies - Innovative Software Solutions & Development',
    description: 'Leading software development company providing innovative solutions for enterprises and startups.',
    images: ['/images/logo/mindefy-logo.png'],
  },
  verification: {
    google: 'your-google-site-verification-code',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://mindefy.com',
  },
  icons: {
    icon: [
      {
        url: '/images/logo/mindefy-logo.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
      {
        url: '/images/logo/mindefy-logo.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      }
    ],
    apple: [
      {
        url: '/images/logo/mindefy-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/images/logo/mindefy-logo.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo/mindefy-logo.svg',
        color: '#D84426',
      }
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://mindefy.com" />
      </head>
      <body className="font-poppins overflow-x-hidden">
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
