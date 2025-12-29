import { LazyAboutUs } from "../../utils/lazyLoadService";

export const metadata = {
  title:
    "About Us | Mindefy Technologies - AI & Digital Transformation in Dubai & USA",
  description:
    "Mindefy Technologies: Delivers cutting-edge AI, mobile apps & digital transformation for Dubai/USA enterprises. Join us to redefine business innovation.",
  keywords: [
    "about mindefy",
    "software development company",
    "technology experts",
    "mobile app development",
    "digital transformation",
  ],
  openGraph: {
    title:
      "About Us | Mindefy Technologies - AI & Digital Transformation in Dubai & USA",
    description:
      "Mindefy Technologies: Delivers cutting-edge AI, mobile apps & digital transformation for Dubai/USA enterprises. Join us to redefine business innovation.",
    url: "https://mindefy.tech/about-us-technology-innovators",
  },
  twitter: {
    title:
      "About Us | Mindefy Technologies - AI & Digital Transformation in Dubai & USA",
    description:
      "Mindefy Technologies: Delivers cutting-edge AI, mobile apps & digital transformation for Dubai/USA enterprises. Join us to redefine business innovation.",
  },
  alternates: {
    canonical: "https://mindefy.tech/about-us-technology-innovators",
  },
};

export default function AboutUs() {
  return <LazyAboutUs />;
}
