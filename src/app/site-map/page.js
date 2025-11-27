import Link from "next/link";

export const metadata = {
  title: "Sitemap",
  description:
    "Browse the complete sitemap of Mindefy Technologies. Access all service pages, product pages, case studies, and business solutions in one organized index.",
  alternates: { canonical: "https://mindefy.tech/sitemap" },
  robots: { index: true, follow: true },
};

const baseUrl = "https://mindefy.tech";

const routes = [
  // Dashboard/Home
  {
    url: baseUrl,
    label: "Home",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },

  /* -----------------------------
   AI & DATA SOLUTIONS
  ------------------------------ */
  {
    url: `${baseUrl}/custom-ai-solutions-enterprises`,
    label: "Custom AI Solutions",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/machine-learning-services`,
    label: "Machine Learning",
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
  {
    url: `${baseUrl}/cloud-engineering-services`,
    label: "Cloud Engineering",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },

  /* -----------------------------
   MODERN APPLICATION DEVELOPMENT
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
    priority: 0.9,
  },
  {
    url: `${baseUrl}/mean-mern-stack-development`,
    label: "MEAN & MERN Stack Development",
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
    url: `${baseUrl}/agile-rapid-development-practices`,
    label: "Agile & Rapid Application Development Model",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
    IT & STAFF AUGMENTATION
  ------------------------------ */
  {
    url: `${baseUrl}/staff-augmentation-services`,
    label: "Staff Augmentation Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/it-consulting-strategy`,
    label: "IT Consulting Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
    DIGITAL TRANSFORMATION
  ------------------------------ */
  {
    url: `${baseUrl}/digital-transformation-consulting`,
    label: "Digital Transformation Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/microservices-architecture-consulting`,
    label: "Building Micro-services Architecture",
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
  {
    url: `${baseUrl}/test-automation-qa-services`,
    label: "Application Test Automation and QA Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    CLOUD & DEVOPS
  ------------------------------ */
  {
    url: `${baseUrl}/cloud-devops-engineering`,
    label: "Cloud & DevOps",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    GAME DEVELOPMENT
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
    label: "Unity and Unreal Game Development",
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
    STARTUP SUPPORT & CONSULTING
  ------------------------------ */
  {
    url: `${baseUrl}/startup-support-consulting`,
    label: "Startup Support and Consulting",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/mvp-development-startup-support`,
    label: "MVP Development & PMF Test",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/white-label-software-solutions`,
    label: "White Label App Solutions",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/startup-incubation-consulting-services`,
    label: "Startup Incubation Services",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    ENTERPRISE BUSINESS SOLUTIONS
  ------------------------------ */
  {
    url: `${baseUrl}/enterprise-software-solutions`,
    label: "Enterprise Business Solutions",
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
    url: `${baseUrl}/ecommerce-marketplace-development`,
    label: "E-commerce and Marketplace",
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
    MINDFUL UX DESIGN Mindful UX "Design Studio"
  ------------------------------ */
  {
    url: `${baseUrl}/mindful-ux-design-user-experience`,
    label: "Mindful UX Design Studio",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
    OTHER PAGES
  ------------------------------ */
  {
    url: `${baseUrl}/customer-testimonials-reviews`,
    label: "Testimonials",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
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
    { title: "AI & Data Solutions", items: items.slice(1, 5) },
    { title: "Modern Application Development", items: items.slice(5, 11) },
    { title: "IT & Staff Augmentation", items: items.slice(11, 13) },
    { title: "Digital Transformation", items: items.slice(13, 17) },
    { title: "Cloud & DevOps", items: items.slice(17, 18) },
    { title: "Game Development", items: items.slice(18, 21) },
    { title: "Startup Support & Consulting", items: items.slice(21, 25) },
    { title: "Enterprise Business Solutions", items: items.slice(25, 29) },
    { title: "Product", items: items.slice(29, 30) },
    { title: "Projects", items: items.slice(30, 36) },
    { title: "Mindful UX Design Studio", items: items.slice(36, 37) },
    { title: "Other Pages", items: items.slice(37, 38) },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#000] mb-4">
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

              {/* Grid (design unchanged) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    className="block border border-[#e5e7eb] bg-white rounded-lg p-4 hover:shadow-lg hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-200"
                  >
                    <span className="flex items-center justify-between text-[#000] font-medium">
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
