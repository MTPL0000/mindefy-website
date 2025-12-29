export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mindefy Technologies",
  description:
    "Mindefy is a top digital transformation company offering custom AI solutions, mobile app development, and cloud engineering for global enterprises.",
  url: "https://mindefy.tech",
  logo: "https://mindefy.tech/images/logo/mindefy-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/mindefy-technologies",
    "https://twitter.com/mindefy",
    "https://www.facebook.com/mindefy",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "50-100",
  },
  knowsAbout: [
    "Software Development",
    "Mobile App Development",
    "Web Development",
    "Digital Transformation",
    "Enterprise Solutions",
    "Startup Consulting",
  ],
};

// Website structured data
export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mindefy Technologies",
  url: "https://mindefy.tech",
  description:
    "Mindefy is a top digital transformation company offering custom AI solutions, mobile app development, and cloud engineering for global enterprises.",
  publisher: {
    "@type": "Organization",
    name: "Mindefy Technologies",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://mindefy.tech/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Service structured data template
export const createServiceData = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Mindefy Technologies",
    url: "https://mindefy.tech",
  },
  serviceType: service.serviceType,
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: service.url,
  },
});

// Breadcrumb structured data template
export const createBreadcrumbData = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
