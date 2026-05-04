import { notFound } from "next/navigation";
import {
  getRenderableServiceSections,
  getServicePageBySlug,
  servicePages,
} from "@/lib/servicePages";

// Import all components from the service pages folder
import Hero from "@/components/ServicePages/Hero";
import TrustBar from "@/components/ServicePages/TrustBar";
import EngineeringImpact from "@/components/ServicePages/EngineeringImpact";
import ScalingCeiling from "@/components/ServicePages/ScalingCeiling";
import ExpertPerspective from "@/components/ServicePages/ExpertPerspective";
import ArchPhilosophy from "@/components/ServicePages/ArchPhilosophy";
import MarketDiff from "@/components/ServicePages/MarketDiff";
import CoreCompetencies from "@/components/ServicePages/CoreCompetencies";
import EngineeringDNA from "@/components/ServicePages/EngineeringDNA";
import TechStack from "@/components/ServicePages/TechStack";
import VerticalExpertise from "@/components/ServicePages/VerticalExpertise";
import DeliveryFramework from "@/components/ServicePages/DeliveryFramework";
import CaseStudies from "@/components/ServicePages/CaseStudies";
import Testimonials from "@/components/ServicePages/Testimonials";
import Governance from "@/components/ServicePages/Governance";
import IdealPartnerProfile from "@/components/ServicePages/IdealPartnerProfile";
import StrategicAlignment from "@/components/ServicePages/StrategicAlignment";
import ResourcesModels from "@/components/ServicePages/ResourcesModels";
import FAQ from "@/components/ServicePages/FAQ";
import BottomLine from "@/components/ServicePages/BottomLine";

// Component mapping
const componentMap = {
  Hero,
  TrustBar,
  EngineeringImpact,
  ScalingCeiling,
  ExpertPerspective,
  ArchPhilosophy,
  MarketDiff,
  CoreCompetencies,
  EngineeringDNA,
  TechStack,
  VerticalExpertise,
  DeliveryFramework,
  CaseStudies,
  Testimonials,
  Governance,
  IdealPartnerProfile,
  StrategicAlignment,
  ResourcesModels,
  FAQ,
  BottomLine,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metadata?.title || service.title,
    description: service.metadata?.description || service.description,
    alternates: {
      canonical: service.metadata?.canonical || service.route,
    },
    openGraph: {
      title:
        service.metadata?.openGraph?.title ||
        service.metadata?.title ||
        service.title,
      description:
        service.metadata?.openGraph?.description ||
        service.metadata?.description ||
        service.description,
      images: service.metadata?.openGraph?.images,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    notFound();
  }

  const sections = getRenderableServiceSections(service, componentMap);

  if (!sections.length) {
    notFound();
  }

  return (
    <main>
      {sections.map((section, index) => {
        const type = section.type;
        const Component = componentMap[type];

        return (
          <Component
            key={`${type}-${index}`}
            content={section.content}
            service={service}
          />
        );
      })}
    </main>
  );
}

export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}
