// src/app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Mindefy Technologies",
  description: "Your description here",
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
        color: '#D84426', // Your brand color from the SVG
      }
    ],
  },
  manifest: '/site.webmanifest', // For PWA support
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins overflow-x-hidden">{children}</body>
    </html>
  );
}
