import StructuredData, {
  createBreadcrumbData,
  createAboutPageData,
  createFAQData,
  organizationData,
} from "@/components/StructuredData";
import { LazyAboutUs } from "../../utils/lazyLoadService";

export const metadata = {
  title: "About Mindefy: Bootstrapped Innovators in AI & Software",
  description:
    'We are a product-focused software agency in Indore. Builders of "YourHour" (4.5M users). We combine engineering excellence with business logic.',
  keywords: ["Tech Partner", "Software Agency"],
  openGraph: {
    title: "About Mindefy: Top Technology Innovation Partner",
    description:
      "We are a global technology partner delivering AI, cloud, and software solutions. Learn how our expert engineering teams help businesses scale and innovate.",
    url: "https://mindefy.tech/about-us-technology-innovators",
  },
  twitter: {
    title: "About Mindefy: Top Technology Innovation Partner",
    description:
      "We are a global technology partner delivering AI, cloud, and software solutions. Learn how our expert engineering teams help businesses scale and innovate.",
  },
  alternates: {
    canonical: "https://mindefy.tech/about-us-technology-innovators",
  },
};

export default function AboutUs() {
  const aboutData = createAboutPageData({
    description:
      'We are a product-focused software agency in Indore. Builders of "YourHour" (4.5M users). We combine engineering excellence with business logic.',
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    {
      name: "About Us",
      url: "https://mindefy.tech/about-us-technology-innovators",
    },
  ]);

  const faqData = createFAQData([
    {
      question: "What services does Mindefy Technologies offer?",
      answer:
        "Mindefy Technologies offers custom AI solutions, mobile app development, web development, digital transformation, enterprise solutions, and startup consulting.",
    },
    {
      question: "Where is Mindefy Technologies located?",
      answer:
        "Mindefy Technologies is located in Indore, India, serving clients worldwide.",
    },
  ]);

  return (
    <>
      <StructuredData data={organizationData} />
      <StructuredData data={aboutData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqData} />
      <LazyAboutUs />
    </>
  );
}
