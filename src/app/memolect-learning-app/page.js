import { LazyMemolect } from "../../utils/lazyLoadService";

export const metadata = {
  title: "Case Study: Memolect Learning & Education App",
  description:
    "Building a gamified learning experience. Discover how we implemented spaced repetition algorithms and student engagement features.",
  keywords: ["EdTech", "Learning App"],
  alternates: { canonical: "https://mindefy.tech/memolect-learning-app" },
  openGraph: {
    title: "Memolect: Smart Learning & EdTech App",
    description:
      "Discover Memolect, the smart learning app designed to boost retention. Explore our EdTech solutions for personalized education and corporate training.",
    url: "https://mindefy.tech/memolect-learning-app",
  },
  twitter: {
    title: "Memolect: Smart Learning & EdTech App",
    description:
      "Discover Memolect, the smart learning app designed to boost retention. Explore our EdTech solutions for personalized education and corporate training.",
  },
};

export default function MemolectLayout() {
  return <LazyMemolect />;
}
