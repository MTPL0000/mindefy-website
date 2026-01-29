import { LazyTestimonialsMore } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Client Success Stories & Reviews | Mindefy",
  description:
    "Don't just take our word for it. Read verified reviews from global clients who built their software, MVPs, and apps with Mindefy Technologies.",
  keywords: ["Reviews", "Case Studies"],
  openGraph: {
    title: "Mindefy Client Testimonials & Success Stories",
    description:
      "Explore success stories from global clients. See how Mindefy's AI and software solutions drive digital transformation and business growth.",
    url: "https://mindefy.tech/customer-testimonials-reviews",
  },
  twitter: {
    title: "Mindefy Client Testimonials & Success Stories",
    description:
      "Explore success stories from global clients. See how Mindefy's AI and software solutions drive digital transformation and business growth.",
  },
  alternates: {
    canonical: "https://mindefy.tech/customer-testimonials-reviews",
  },
};

export default function TestimonialsMorePage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    {
      name: "Testimonials",
      url: "https://mindefy.tech/customer-testimonials-reviews",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <LazyTestimonialsMore />
    </>
  );
}
