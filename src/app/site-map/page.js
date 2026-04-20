import Link from "next/link";
import servicesDataRaw from "@/data/servicePages.json";

export const metadata = {
  title: "Mindefy Website Map & Service Directory",
  description:
    "Browse the complete Mindefy directory. Quick links to all software services, case studies, AI solutions, and company resources.",
  keywords: ["Sitemap", "Navigation"],
  alternates: { canonical: "https://mindefy.tech/site-map" },
  robots: { index: true, follow: true },
};

const baseUrl = "https://mindefy.tech";

const servicesByCategory = servicesDataRaw.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push({
    url: `/${service.slug}`,
    label: service.title,
  });
  return acc;
}, {});

const productRoutes = [{ url: "/yourhour-screentime-app", label: "YourHour" }];

const projectRoutes = [
  { url: "/memolect-learning-app", label: "Memolect" },
  { url: "/early-foods-e-commerce", label: "EarlyFoods" },
  { url: "/jego-ott-platform", label: "JEGO" },
  { url: "/soli-stack-integration-solutions", label: "SoliStack" },
  { url: "/greenbill-paperless-billing-software", label: "GreenBill" },
  { url: "/mach-one-platform-services", label: "MachOne" },
];

const otherRoutes = [
  { url: "/about-us-technology-innovators", label: "About Us" },
  { url: "/customer-testimonials-reviews", label: "Testimonials" },
  { url: "/privacy-policy", label: "Privacy Policy" },
];

export default function SitemapPage() {
  const groups = [
    { title: "Home", items: [{ url: "/", label: "Home" }] },
    ...Object.entries(servicesByCategory).map(([category, items]) => ({
      title: category,
      items,
    })),
    { title: "Product", items: productRoutes },
    { title: "Projects", items: projectRoutes },
    { title: "Other Pages", items: otherRoutes },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#332771] mb-4">
          Website Sitemap
        </h1>

        <p className="text-base sm:text-lg text-[#333] mb-10 max-w-3xl">
          Explore all pages of Mindefy Technologies, including services,
          products, and case studies — organized for quick navigation.
        </p>

        <div className="space-y-12">
          {groups.map((group, index) => (
            <div key={index}>
              <h2
                className="text-2xl font-semibold text-[#332771] mb-5"
                aria-label={`${group.title} section`}
              >
                {group.title}
              </h2>

              {/* Grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    className="block border border-[#e5e7eb] bg-white rounded-lg p-4 hover:shadow-lg hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-200"
                  >
                    <span className="flex items-center justify-between text-[#333] font-medium">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: groups.map((g) => g.title),
              url: groups.flatMap((g) =>
                g.items.map((i) => `${baseUrl}${i.url}`)
              ),
            }),
          }}
        />
      </section>
    </div>
  );
}
