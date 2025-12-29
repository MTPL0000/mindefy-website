import Link from "next/link";

export const metadata = {
  title: "Sitemap | Mindefy Technologies",
  description:
    "Browse the complete sitemap of Mindefy Technologies. Access all service pages, product pages, case studies, and business solutions in one organized index.",
  alternates: { canonical: "https://mindefy.tech/site-map" },
  robots: { index: true, follow: true },
};

const baseUrl = "https://mindefy.tech";

const routes = [
  // Dashboard/Home
  {
    url: "/",
    label: "Home",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },

  /* -----------------------------
   AI Development & Data Services 
  ------------------------------ */
  {
    url: `${baseUrl}/custom-ai-solutions-enterprises`,
    label: "Custom AI Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/machine-learning-services`,
    label: "Machine Learning Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/generative-ai-chatbot-development`,
    label: "Generative AI & Chatbot",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/advanced-data-engineering-services`,
    label: "Data Engineering & Analytics",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },

  /* -----------------------------
   Product Development
  ------------------------------ */
  {
    url: `${baseUrl}/android-app-development-experts`,
    label: "Android App Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/ios-app-development-services`,
    label: "iOS App Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/hybrid-app-development-services`,
    label: "Hybrid App Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/web-application-development-solutions`,
    label: "Web Application Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/mvp-development-startup-support`,
    label: "MVP Development & PMF Test",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/mindful-ux-design-user-experience`,
    label: "Design & UX",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
   Cloud & Platform Engineering
  ------------------------------ */
  {
    url: `${baseUrl}/cloud-engineering-services`,
    label: "Cloud Migration",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/cloud-devops-engineering`,
    label: "DevOps Automation",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/digital-transformation-consulting`,
    label: "Digital Transformation Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/test-automation-qa-services`,
    label: "QA & Test Automation",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/microservices-architecture-consulting`,
    label: "Building Micro-services Architecture",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
   Business IT Solutions
  ------------------------------ */
  {
    url: `${baseUrl}/it-consulting-strategy`,
    label: "IT Consulting Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/enterprise-software-solutions`,
    label: "Enterprise Solutions",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/staff-augmentation-services`,
    label: "Team Augmentation",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/startup-support-consulting`,
    label: "Startup Support and Consulting",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/startup-incubation-consulting-services`,
    label: "Startup Incubation Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/white-label-software-solutions`,
    label: "White Label App Solutions",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
   Game Development
  ------------------------------ */
  {
    url: `${baseUrl}/game-animation-graphics`,
    label: "2D & 3D Game Animation",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/unity-unreal-engine-development`,
    label: "Unity and unreal Game Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/ar-vr-game-development`,
    label: "AR VR Game Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
   E-commerce and Marketplace
  ------------------------------ */
  {
    url: `${baseUrl}/ecommerce-marketplace-development`,
    label: "E-commerce and Marketplace",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/crm-software-solutions`,
    label: "CRM Solutions",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/business-process-management-solutions`,
    label: "Business Process Management",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/low-code-app-development-services`,
    label: "Low Code Development",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    PRODUCT
  ------------------------------ */
  {
    url: `${baseUrl}/yourhour-screentime-app`,
    label: "YourHour",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },

  /* -----------------------------
    CLIENT PROJECTS
  ------------------------------ */
  {
    url: `${baseUrl}/memolect-learning-app`,
    label: "Memolect",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/early-foods-e-commerce`,
    label: "EarlyFoods",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/jego-ott-platform`,
    label: "JEGO",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/soli-stack-integration-solutions`,
    label: "SoliStack",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/greenbill-paperless-billing-software`,
    label: "GreenBill",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/mach-one-platform-services`,
    label: "MachOne",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },

  /* -----------------------------
    OTHER PAGES
  ------------------------------ */
  {
    url: `${baseUrl}/about-us-technology-innovators`,
    label: "About Us",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/customer-testimonials-reviews`,
    label: "Testimonials",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/agile-rapid-development-practices`,
    label: "Agile & Rapid Application Development Model",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export default function SitemapPage() {
  // Extract pathname and use custom label
  const items = routes.map((r) => {
    try {
      const u = new URL(r.url);
      return { url: u.pathname, label: r.label };
    } catch {
      return { url: r.url, label: r.label };
    }
  });

  const groups = [
    { title: "Home", items: items.slice(0, 1) },
    { title: "AI Development & Data Services", items: items.slice(1, 5) },
    { title: "Product Development", items: items.slice(5, 11) },
    { title: "Cloud & Platform Engineering", items: items.slice(11, 16) },
    { title: "Business IT Solutions", items: items.slice(16, 22) },
    { title: "Game Development", items: items.slice(22, 25) },
    { title: "E-commerce and Marketplace", items: items.slice(25, 29) },
    { title: "Product", items: items.slice(29, 30) },
    { title: "Projects", items: items.slice(30, 36) },
    { title: "Other Pages", items: items.slice(36, 39) },
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
