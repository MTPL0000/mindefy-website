import Link from "next/link";

export const metadata = {
  title: "Sitemap - Mindefy Technologies",
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
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },

  /* -----------------------------
   AI & DATA SOLUTIONS
  ------------------------------ */
  {
    url: `${baseUrl}/custom-AI-solution`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/machine-learning`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/data-engineering`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/cloud-engineering`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },

  /* -----------------------------
   MODERN APPLICATION DEVELOPMENT
  ------------------------------ */
  {
    url: `${baseUrl}/android-app-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/ios-app-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/hybrid-app-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/mean-mern-stack-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/web-application-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/agile-rapid-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
    IT & STAFF AUGMENTATION
  ------------------------------ */
  {
    url: `${baseUrl}/staff-services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/it-consulting`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },

  /* -----------------------------
    DIGITAL TRANSFORMATION
  ------------------------------ */
  {
    url: `${baseUrl}/digital-transformation`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/microservices-architecture`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/low-code-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/test-automation-qa`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    CLOUD & DEVOPS
  ------------------------------ */
  {
    url: `${baseUrl}/cloud-devops`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    GAME DEVELOPMENT
  ------------------------------ */
  {
    url: `${baseUrl}/game-animation`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/unity-unreal`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/ar-vr-game-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    STARTUP SUPPORT & CONSULTING
  ------------------------------ */
  {
    url: `${baseUrl}/startup-support`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/mvp-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/white-label-solutions`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/startup-incubation-consulting`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    ENTERPRISE BUSINESS SOLUTIONS
  ------------------------------ */
  {
    url: `${baseUrl}/enterprise-solutions`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/crm-solutions`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/business-process-management`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/ecommerce-marketplace`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },

  /* -----------------------------
    PRODUCT
  ------------------------------ */
  {
    url: `${baseUrl}/yourhour-screentime-app`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },

  /* -----------------------------
    CLIENT PROJECTS
  ------------------------------ */
  {
    url: `${baseUrl}/memolect`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/early-foods`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/jego`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/soli-stack`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/green-bill`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/mach-one`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },

  /* -----------------------------
    OTHER PAGES
  ------------------------------ */
  {
    url: `${baseUrl}/testimonials`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

// Improved label extraction (AI, VR, AR, QA stay uppercase)

function extractLabel(pathname) {
  if (!pathname || pathname === "/") return "Home";

  const slug = pathname.replace(/^\//, "");

  return slug
    .split("-")
    .map((w) =>
      ["ai", "qa", "ar", "vr"].includes(w.toLowerCase())
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

export default function SitemapPage() {
  // KEEP EXACT ORDER from sitemap.ts
  const items = routes.map((r) => {
    try {
      const u = new URL(r.url);
      return { url: u.pathname, label: extractLabel(u.pathname) };
    } catch {
      return { url: r.url, label: extractLabel(r.url) };
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
    { title: "Other Pages", items: items.slice(36, 37) },
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
