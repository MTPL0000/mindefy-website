import { LazyTestimonialsMore } from "../../utils/lazyLoadService";
import StructuredData, {
  createBreadcrumbData,
} from "@/components/StructuredData";

export const metadata = {
  title: "Mindefy Client Testimonials & Success Stories",
  description:
    "Explore success stories from global clients. See how Mindefy's AI and software solutions drive digital transformation and business growth.",
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
