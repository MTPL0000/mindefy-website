import { notFound } from "next/navigation";
import servicesData from "@/data/servicePages.json";

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

// The fixed sequence of components as requested by the user
const componentSequence = [
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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metadata?.title || service.title,
    description: service.metadata?.description || service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Map sections from JSON by type for easy lookup
  const sectionsMap = (service.sections || []).reduce((acc, section) => {
    acc[section.type] = section.content;
    return acc;
  }, {});

  return (
    <main>
      {componentSequence.map((type, index) => {
        const Component = componentMap[type];
        if (!Component) {
          console.warn(`Component type "${type}" not found.`);
          return null;
        }
        // Pass content if it exists in JSON for this specific service, otherwise pass undefined
        return (
          <Component key={`${type}-${index}`} content={sectionsMap[type]} />
        );
      })}
    </main>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
