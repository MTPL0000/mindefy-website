import { LazyAboutUs } from "../utils/lazyLoadService";

export const metadata = {
  title:
    "Mindefy Technologies | Leading AI Solutions & Digital Transformation Services for Enterprises in Dubai & USA",
  description:
    "Mindefy Technologies: Leading AI solutions, mobile app development & digital transformation for enterprises in Dubai & USA. Innovate with expert software services.",
  keywords: [
    "about mindefy",
    "software development company",
    "technology experts",
    "mobile app development",
    "digital transformation",
  ],
  openGraph: {
    title:
      "Mindefy Technologies | Leading AI Solutions & Digital Transformation Services for Enterprises in Dubai & USA",
    description:
      "Mindefy Technologies: Leading AI solutions, mobile app development & digital transformation for enterprises in Dubai & USA. Innovate with expert software services.",
    url: "https://mindefy.tech/about-us-technology-innovators",
  },
  twitter: {
    title:
      "Mindefy Technologies | Leading AI Solutions & Digital Transformation Services for Enterprises in Dubai & USA",
    description:
      "Mindefy Technologies: Leading AI solutions, mobile app development & digital transformation for enterprises in Dubai & USA. Innovate with expert software services.",
  },
  alternates: {
    canonical: "https://mindefy.tech/about-us-technology-innovators",
  },
};

export default function AboutUs() {
  return <LazyAboutUs />;
}
