export const servicesData = [
  //Custom AI
  {
    id: "gen-ai-chatbot",
    title: "Gen AI-Chatbot",
    category: "Custom AI Solutions",
    route: "/gen-ai-chatbot",
    component: "GenAIChatbot",
    description: "Custom AI Chatbot development services",
    isActive: true, // Already created
  },
  {
    id: "EarlyFoods-chatbot",
    title: "Custom ML Solution",
    category: "Custom AI Solutions",
    route: "/EarlyFoods-chatbot",
    component: "EarlyFoodsChatBot",
    description: "Custom ML solution development services",
    isActive: true, // Already created
  },

  // Modern Application Development
  {
    id: "android-app-development",
    title: "Android App Development",
    category: "Modern Application Development",
    route: "/android-app-development",
    component: "AAD",
    description: "Native Android app development services",
    isActive: true, // Already created
  },
  {
    id: "ios-app-development",
    title: "iOS Development",
    category: "Modern Application Development",
    route: "/ios-app-development",
    component: "IOS",
    description: "Native iOS app development services",
  },
  {
    id: "hybrid-app-development",
    title: "Hybrid App Development",
    category: "Modern Application Development",
    route: "/hybrid-app-development",
    component: "HAD",
    description: "Cross-platform hybrid app development",
  },
  {
    id: "mean-mern-stack",
    title: "MEAN & MERN Stack Development",
    category: "Modern Application Development",
    route: "/mean-mern-stack-development",
    component: "MeanMern",
    description: "Full-stack JavaScript development",
  },
  {
    id: "web-app-development",
    title: "Web Application Development",
    category: "Modern Application Development",
    route: "/web-application-development",
    component: "WebApp",
    description: "Modern web application development",
  },
  {
    id: "agile-rapid-development",
    title: "Agile & Rapid Application Development Model",
    category: "Modern Application Development",
    route: "/agile-rapid-development",
    component: "AgileRapid",
    description: "Agile development methodologies",
  },

  // IT/Staff Argumentation
  {
    id: "staff-services",
    title: "Staff Augmentation Services",
    category: "IT/Staff Argumentation",
    route: "/staff-services",
    component: "SAS",
    description: "Professional IT consulting",
  },
  {
    id: "it-consulting",
    title: "IT Consulting Services",
    category: "IT/Staff Argumentation",
    route: "/it-consulting",
    component: "ITC",
    description: "IT startup support and incubation",
  },

  // Digital Transformation Services
  {
    id: "digital-transformation",
    title: "Digital Transformation Services",
    category: "Digital Transformation Services",
    route: "/digital-transformation",
    component: "DigitalTransformation",
    description: "Complete digital transformation",
  },
  {
    id: "microservices-architecture",
    title: "Building Micro-services Architecture",
    category: "Digital Transformation Services",
    route: "/microservices-architecture",
    component: "Microservices",
    description: "Scalable microservices solutions",
  },
  {
    id: "low-code-development",
    title: "Low Code Development",
    category: "Digital Transformation Services",
    route: "/low-code-development",
    component: "LowCode",
    description: "Rapid low-code solutions",
  },
  {
    id: "test-automation-qa",
    title: "Application Test Automation and QA Services",
    category: "Digital Transformation Services",
    route: "/test-automation-qa",
    component: "TestAutomation",
    description: "Quality assurance and testing",
  },

  // Cloud & DevOps
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    category: "Cloud & DevOps",
    route: "/cloud-devops",
    component: "CloudDevOps",
    description: "Cloud and DevOps solutions",
  },
  // GAME DEVELOPMENT
  {
    id: "2D & 3D Game Animation",
    title: "2D & 3D Game Animation",
    category: "Game Development",
    route: "/game-animation",
    component: "gameAnimation",
    description: "2D & 3D Game Animation",
  },
  {
    id: "Unity and unreal game development",
    title: "Unity and Unreal game development",
    category: "Game Development",
    route: "/unity-unreal",
    component: "unityunreal",
    description: "Unity and unreal game development",
  },
  {
    id: "AR VR Game Development",
    title: "AR VR Game Development",
    category: "Game Development",
    route: "/ar-vr-game-development",
    component: "AR VR Game Development",
    description: "AR VR Game Development",
  },

  // Startup Support & Consulting
  {
    id: "startup-support",
    title: "Startup Support and Consulting",
    category: "Startup Support & Consulting",
    route: "/startup-support",
    component: "StartupConsulting",
    description: "Comprehensive startup support",
  },
  {
    id: "mvp-development",
    title: "MVP Development & PMF Test",
    category: "Startup Support & Consulting",
    route: "/mvp-development",
    component: "MVPDevelopment",
    description: "MVP development and testing",
  },
  {
    id: "white-label-solutions",
    title: "White Label App Solutions",
    category: "Startup Support & Consulting",
    route: "/white-label-solutions",
    component: "WhiteLabel",
    description: "White label app solutions",
  },
  {
    id: "startup-incubation-consulting",
    title: "Startup Incubation Services",
    category: "Startup Support & Consulting",
    route: "/startup-incubation-consulting",
    component: "StartupIncubationConsulting",
    description: "Startup incubation and consulting",
  },

  // Enterprise Business Solutions
  {
    id: "enterprise-solutions",
    title: "Enterprise Business Solutions",
    category: "Enterprise Business Solutions",
    route: "/enterprise-solutions",
    component: "EnterpriseSolutions",
    description: "Enterprise business solutions",
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    category: "Enterprise Business Solutions",
    route: "/crm-solutions",
    component: "CRMSolutions",
    description: "Customer relationship management",
  },
  {
    id: "business-process-management",
    title: "Business Process Management",
    category: "Enterprise Business Solutions",
    route: "/business-process-management",
    component: "BPM",
    description: "Business process optimization",
  },
  {
    id: "ecommerce-marketplace",
    title: "E-commerce and Marketplace",
    category: "Enterprise Business Solutions",
    route: "/ecommerce-marketplace",
    component: "Ecommerce",
    description: "E-commerce and marketplace solutions",
  },
];

// Group services by category to match your layout
export const groupedServices = servicesData.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {});
