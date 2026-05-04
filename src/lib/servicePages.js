import servicePagesRaw from "@/data/servicePages.json";

export const SERVICE_SECTION_SEQUENCE = [
  "Hero",
  "TrustBar",
  "EngineeringImpact",
  "ScalingCeiling",
  "ExpertPerspective",
  "ArchPhilosophy",
  "MarketDiff",
  "CoreCompetencies",
  "EngineeringDNA",
  "TechStack",
  "VerticalExpertise",
  "DeliveryFramework",
  "CaseStudies",
  "Testimonials",
  "Governance",
  "IdealPartnerProfile",
  "StrategicAlignment",
  "ResourcesModels",
  "FAQ",
  "BottomLine",
];

const rawServices = Array.isArray(servicePagesRaw)
  ? servicePagesRaw
  : servicePagesRaw.services || [];

function normalizeRoutePath(path) {
  if (typeof path !== "string") {
    return "";
  }

  const trimmedPath = path.trim();

  if (!trimmedPath) {
    return "";
  }

  const routePath = trimmedPath.startsWith("/")
    ? trimmedPath
    : `/${trimmedPath}`;

  return routePath.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
}

function stripRoutePath(routePath) {
  return normalizeRoutePath(routePath).replace(/^\//, "");
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasArrayItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function hasAnyText(content, keys) {
  return keys.some((key) => hasText(content?.[key]));
}

function hasAnyArray(content, keys) {
  return keys.some((key) => hasArrayItems(content?.[key]));
}

export function getServiceRoutePath(service) {
  return normalizeRoutePath(
    service?.routePath || service?.path || service?.route || service?.slug
  );
}

export const servicePages = rawServices
  .map((service, index) => {
    const route = getServiceRoutePath(service);
    const slug = service.slug || stripRoutePath(route);

    return {
      ...service,
      route,
      slug,
      navOrder: service.navOrder ?? service.order ?? index,
    };
  })
  .filter(
    (service) =>
      service.route &&
      service.slug &&
      service.enabled !== false &&
      service.disabled !== true &&
      service.draft !== true
  );

export const servicesData = servicePages.map((service) => ({
  id: service.id || service.slug,
  title: service.navTitle || service.title,
  category: service.category || "Services",
  route: service.route,
  component: service.title,
  description: service.navDescription || service.description,
  metadata: service.metadata,
  navOrder: service.navOrder,
  showInFooter: service.showInFooter,
}));

export const groupedServices = servicesData.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }

  acc[service.category].push(service);
  return acc;
}, {});

export function getServicePageBySlug(slug) {
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug;
  const normalizedSlug = stripRoutePath(slugPath);
  const normalizedRoute = normalizeRoutePath(normalizedSlug);

  return servicePages.find(
    (service) =>
      service.slug === normalizedSlug ||
      service.route === normalizedRoute ||
      stripRoutePath(service.route) === normalizedSlug
  );
}

export function hasRenderableSectionContent(section) {
  const content = section?.content;

  if (!section?.type || !content || typeof content !== "object") {
    return false;
  }

  switch (section.type) {
    case "Hero":
      return (
        hasAnyText(content, [
          "heading",
          "headingPrefix",
          "headingHighlight",
          "paragraph1",
          "paragraph2",
        ]) || hasText(content.image)
      );
    case "TrustBar":
      return hasArrayItems(content.logos);
    case "EngineeringImpact":
      return hasArrayItems(content.metrics);
    case "ScalingCeiling":
      return hasArrayItems(content.categories);
    case "ExpertPerspective":
      return (
        hasAnyArray(content, ["stats"]) ||
        hasAnyText(content, ["heading", "description", "quote"])
      );
    case "ArchPhilosophy":
      return hasArrayItems(content.items) || hasText(content.heading);
    case "MarketDiff":
      return hasArrayItems(content.comparisonData);
    case "CoreCompetencies":
      return hasArrayItems(content.services);
    case "EngineeringDNA":
      return hasArrayItems(content.items) || hasText(content.description);
    case "TechStack":
      return hasAnyArray(content, ["techLayers", "layers"]);
    case "VerticalExpertise":
      return hasArrayItems(content.industries);
    case "DeliveryFramework":
      return hasArrayItems(content.steps);
    case "CaseStudies":
      return hasArrayItems(content.cases);
    case "Testimonials":
      return hasArrayItems(content.items);
    case "Governance":
      return hasArrayItems(content.items);
    case "IdealPartnerProfile":
      return hasArrayItems(content.qualifications);
    case "StrategicAlignment":
      return hasArrayItems(content.strategicPaths);
    case "ResourcesModels":
      return hasAnyArray(content, ["resources", "models"]);
    case "FAQ":
      return hasArrayItems(content.faqs);
    case "BottomLine":
      return hasAnyText(content, [
        "heading",
        "headingPrefix",
        "headingHighlight",
        "description",
        "primaryLabel",
      ]);
    default:
      return false;
  }
}

export function getRenderableServiceSections(service, componentMap = {}) {
  const sections = Array.isArray(service?.sections) ? service.sections : [];

  return sections.filter(
    (section) =>
      SERVICE_SECTION_SEQUENCE.includes(section.type) &&
      componentMap[section.type] &&
      hasRenderableSectionContent(section)
  );
}
