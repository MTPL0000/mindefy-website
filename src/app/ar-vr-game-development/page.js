import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";
import ARVRGameDevelopment from "@/components/ARVRGameDevelopment";

export const metadata = {
  title: "AR & VR Game Development Services | Immersive Tech",
  description:
    "Build the future of gaming. We develop Augmented Reality (AR) and Virtual Reality (VR) experiences for training, marketing, and entertainment.",
  keywords: ["AR / VR", "Unity", "Immersive"],
  openGraph: {
    title: "AR/VR Game Development & Immersive Solutions",
    description:
      "Transform user engagement with our AR/VR development services. We create immersive virtual reality apps and augmented reality games for enterprise & gaming.",
    url: "https://mindefy.tech/ar-vr-game-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR/VR Game Development & Immersive Solutions",
    description:
      "Transform user engagement with our AR/VR development services. We create immersive virtual reality apps and augmented reality games for enterprise & gaming.",
  },
  alternates: {
    canonical: "https://mindefy.tech/ar-vr-game-development",
  },
};

export default function ARVRGameDevelopmentPage() {
  const serviceData = createServiceData({
    name: "AR/VR Game Development",
    description:
      "Expert AR/VR game development services by Mindefy Technologies. Create immersive augmented and virtual reality experiences using Unity, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest platforms.",
    serviceType: "Game Development",
    url: "/ar-vr-game-development",
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    {
      name: "AR/VR Game Development",
      url: "https://mindefy.tech/ar-vr-game-development",
    },
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <ARVRGameDevelopment />
    </>
  );
}
