import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";
import ARVRGameDevelopment from "../components/ARVRGameDevelopment";


export const metadata = {
  title: "AR/VR Game Development Services | Augmented & Virtual Reality - Mindefy Technologies",
  description: "Expert AR/VR game development services by Mindefy Technologies. Create immersive augmented and virtual reality experiences using Unity, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest platforms.",
  keywords: ["AR VR development", "augmented reality games", "virtual reality development", "AR app development", "VR game development", "Unity AR VR", "Oculus development", "Meta Quest games", "ARKit ARCore", "immersive experiences", "360 virtual tours", "VR training simulations", "AR mobile apps"],
  openGraph: {
    title: "AR/VR Game Development Services | Augmented & Virtual Reality - Mindefy Technologies",
    description: "Expert AR/VR game development services by Mindefy Technologies. Create immersive augmented and virtual reality experiences using Unity, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest platforms.",
    url: "https://mindefy.tech/ar-vr-game-development",
    type: "website",
    images: [
      {
        url: "https://mindefy.tech/images/ARVR1.png",
        width: 1200,
        height: 630,
        alt: "AR VR Game Development Services by Mindefy Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR/VR Game Development Services | Augmented & Virtual Reality - Mindefy Technologies",
    description: "Expert AR/VR game development services by Mindefy Technologies. Create immersive augmented and virtual reality experiences using Unity, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest platforms.",
    images: ["https://mindefy.tech/images/ARVR1.png"],
  },
  alternates: {
    canonical: "https://mindefy.tech/ar-vr-game-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ARVRGameDevelopmentPage() {
  const serviceData = createServiceData({
    name: "AR/VR Game Development",
    description: "Expert AR/VR game development services by Mindefy Technologies. Create immersive augmented and virtual reality experiences using Unity, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest platforms.",
    serviceType: "AR/VR Development",
    url: "/ar-vr-game-development",
    provider: {
      "@type": "Organization",
      "name": "Mindefy Technologies",
      "url": "https://mindefy.tech",
      "logo": "https://mindefy.tech/images/logo/mindefy-logo.png"
    },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      "serviceUrl": "https://mindefy.tech/ar-vr-game-development",
      "servicePhone": "+1-234-567-8900",
      "serviceSmsNumber": "+1-234-567-8900"
    }
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "AR/VR Game Development", url: "https://mindefy.tech/ar-vr-game-development" }
  ]);

  // Additional schema for AR/VR specific services
  const arvrSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AR/VR Game Development Services",
    "description": "Professional Augmented Reality and Virtual Reality game development services including mobile AR apps, VR simulations, 360° experiences, and immersive training applications.",
    "brand": {
      "@type": "Brand",
      "name": "Mindefy Technologies"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Mindefy Technologies"
      }
    },
    "category": "Software Development",
    "applicationCategory": "AR/VR Development",
    "operatingSystem": ["iOS", "Android", "Windows", "macOS"],
    "softwareRequirements": ["Unity 3D", "Unreal Engine", "ARKit", "ARCore", "Oculus SDK", "Meta Quest SDK"]
  };

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={arvrSchema} />
      <ARVRGameDevelopment/>
    </>
  );
}
