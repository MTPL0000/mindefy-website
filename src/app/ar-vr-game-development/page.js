import StructuredData, {
  createServiceData,
  createBreadcrumbData,
} from "@/components/StructuredData";
import ARVRGameDevelopment from "@/components/ARVRGameDevelopment";

export const metadata = {
  title: "AR, VR & Game Development Services | Mindefy Technologies",
  description:
    "Offers expert AR VR development, VR game development, AR app development, and immersive experiences with Unity AR VR, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest.",
  keywords: [
    "AR VR development",
    "augmented reality games",
    "virtual reality development",
    "AR app development",
    "VR game development",
    "Unity AR VR",
    "Oculus development",
    "Meta Quest games",
    "ARKit ARCore",
    "immersive experiences",
    "360 virtual tours",
    "VR training simulations",
    "AR mobile apps",
  ],
  openGraph: {
    title: "AR, VR & Game Development Services | Mindefy Technologies",
    description:
      "Offers expert AR VR development, VR game development, AR app development, and immersive experiences with Unity AR VR, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest.",
    url: "https://mindefy.tech/ar-vr-game-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR, VR & Game Development Services | Mindefy Technologies",
    description:
      "Offers expert AR VR development, VR game development, AR app development, and immersive experiences with Unity AR VR, Unreal Engine, ARKit, ARCore, Oculus, and Meta Quest.",
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
