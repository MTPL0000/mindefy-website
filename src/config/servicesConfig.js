import servicesDataRaw from "@/data/servicePages.json";

// Map JSON data to the structure expected by the app
export const servicesData = servicesDataRaw.map((service) => ({
  id: service.id,
  title: service.title,
  category: service.category,
  route: `/${service.slug}`,
  component: service.title, // or some other mapping
  description: service.description,
}));

// Group services by category to match your layout
export const groupedServices = servicesData.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {});

//product dropdown data
export const productsData = [
  {
    id: "yourhour",
    title: "YourHour",
    route: "/yourhour-screentime-app",
    description: "Screen time management app",
  },
];

//projects dropdown data
export const projectsData = [
  {
    id: "memolect",
    title: "Memolect",
    route: "/memolect-learning-app",
    description: "Learning application",
  },
  {
    id: "earlyfoods",
    title: "EarlyFoods",
    route: "/early-foods-e-commerce",
    description: "E-commerce platform",
  },
  {
    id: "jego",
    title: "JEGO",
    route: "/jego-ott-platform",
    description: "OTT platform",
  },
  {
    id: "solistack",
    title: "SoliStack",
    route: "/soli-stack-integration-solutions",
    description: "Integration solutions",
  },
  {
    id: "greenbill",
    title: "GreenBill",
    route: "/greenbill-paperless-billing-software",
    description: "Paperless billing software",
  },
  {
    id: "spector",
    title: "Spector.ai",
    route: "/spector-analytics-software",
    description: "AI-driven asset health platform",
  },
];
