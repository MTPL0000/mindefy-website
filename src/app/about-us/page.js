import AboutUsPage from "../components/AboutUs";

export const metadata = {
  title: "About Us",
  description: "Learn about Mindefy Technologies - a leading software development company with expertise in mobile app development, web applications, and digital transformation solutions.",
  keywords: ["about mindefy", "software development company", "technology experts", "mobile app development", "digital transformation"],
  openGraph: {
    title: "About Us - Mindefy Technologies",
    description: "Learn about Mindefy Technologies - a leading software development company with expertise in mobile app development, web applications, and digital transformation solutions.",
    url: "https://mindefy.com/about-us",
  },
  twitter: {
    title: "About Us - Mindefy Technologies",
    description: "Learn about Mindefy Technologies - a leading software development company with expertise in mobile app development, web applications, and digital transformation solutions.",
  },
  alternates: {
    canonical: "https://mindefy.com/about-us",
  },
};

export default function AboutUs() {
  return <AboutUsPage />;
}
