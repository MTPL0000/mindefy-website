import { AIOfferingsSection } from "../components/AIML/AIOfferingsSection";
import { HeroSection } from "../components/AIML/HeroSection";
import { ImpactDeliveredSection } from "../components/AIML/ImpactDeliveredSection";
import { WhyAISection } from "../components/AIML/WhyAISection";
import { WhyChooseSection } from "../components/AIML/WhyChooseSection";

export const heroData = {
  title: "Data Engineering & Analytics",
  subtitle: "The Backbone of Every Intelligent Enterprise",
  description:
    "AI, ML, and analytics succeed only when data is trusted, timely, and accessible. As a skilled Data Engineering company, we design, build, and optimize enterprise-grade data platforms that turn raw data into reliable, governed, and insight-ready assets.",
  buttonText: "Demo",
  buttonLink: "#demo",
  backgroundImage: "/images/DE-BG.webp",
};

export const ourEngineerStack = {
  title: "Our Data Engineering Stack",
  cards: [
    {
      title: "Ingestion & Processing",
      description:
        "Apache Spark, Kafka, Flink, Airflow Cloud-native ingestion (ADF, AWS Glue, GCP Dataflow)",
      icon: "/images/AI-ML/processing.svg",
    },
    {
      title: "Storage & Architecture",
      description:
        "Data warehouses: Snowflake, Redshift, Synapse, BigQuery Data lakes & lakehouses: Databricks, Delta Lake, Iceberg, Hudi",
      icon: "/images/AI-ML/storage.svg",
    },
    {
      title: "Governance & Security",
      description:
        "Data catalogs & lineage: Collibra, Alation, Purview Security frameworks: encryption, RBAC, zero-trust",
      icon: "/images/AI-ML/governance.svg",
    },
    {
      title: "Analytics & ML Readiness",
      description:
        "BI tools: Power BI, Tableau, Looker Feature stores & vector DBs for AI-first pipelines DataOps: Git, CI/CD, automated testing",
      icon: "/images/AI-ML/analytics.svg",
    },
  ],
};

export const whatWeExcelAt = {
  title: "What We Excel At",
  subtitle: "Data That Works for You",
  offerings: [
    {
      icon: "/images/AI-ML/hands.svg",
      title: "Data That Works for You",
      subtitle:
        "We design data architectures that adapt to your business — whether it’s real-time IoT streams, enterprise-scale batch processing, or hybrid data flows that power critical decisions.",
    },
    {
      icon: "/images/AI-ML/computer.svg",
      title: "Modern Data Platforms",
      subtitle:
        "From cloud-native warehouses (Snowflake, BigQuery, Redshift) to unified lakehouses (Databricks, Delta Lake, Iceberg), we build platforms that don’t just store data — they make it fast, reliable, and ready for action.",
    },
    {
      icon: "/images/AI-ML/insurance.svg",
      title: "Trust, Quality & Governance",
      subtitle:
        "Your data is only as good as its integrity. We embed automated validation, lineage tracking, and rock-solid security so you can trust every insight — with compliance and auditability built in.",
    },
    {
      icon: "/images/AI-ML/web-analytics.svg",
      title: "Intelligence in Every Dashboard",
      subtitle:
        "Whether it’s real-time operational monitoring or executive-level BI, we craft dashboards that go beyond reporting — delivering insights that spark decisions, opportunities, and growth.",
    },
    {
      icon: "/images/AI-ML/ai-research.svg",
      title: "AI-Ready Data Engineering",
      subtitle:
        "We engineer data pipelines with tomorrow in mind — powering ML models, AI copilots, and RAG-driven intelligence with feature stores, vector databases, and streaming-first architectures.",
    },
  ],
};

export const worldImpact = {
  title: "Real-World Impact with Data Engineering",
  impacts: [
    {
      icon: "/images/AI-ML/glob-icon.svg",
      title: "E-Commerce",
      description: "Unified customer 360 views for personalized marketing",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare",
      description:
        "HIPAA-compliant pipelines that accelerate research & care delivery",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "Financial Service",
      description: "Real-time fraud detection powered by streaming data",
    },
    {
      icon: "/images/AI-ML/telecom.svg",
      title: "Telecom & Media",
      description: "Lakehouses that power personalization & churn reduction",
    },
    {
      icon: "/images/AI-ML/manufactur-icon.svg",
      title: "Manufacturing",
      description: "IoT-driven insights from connected machines",
    },
  ],
};

export const positioningStatement = {
  title: "Positioning Statement",
  subTitle:
    "We’re not a generic IT partner. We are career data engineers who know how to:",
  image: "/images/AI-ML/positionST-img.webp",
  points: [
    {
      text: "Architect robust data platforms",
    },
    {
      text: "Engineer pipelines that scale",
    },
    {
      text: "Govern data with rigor and compliance",
    },
    {
      text: "Deliver analytics that actually drive decisions",
    },
  ],
  ctaText:
    "Our expertise makes your data infrastructure invisible — it just works, reliably, at scale.",
};

export default function Page() {
  return (
    <div>
      <HeroSection data={heroData} />
      <WhyAISection data={ourEngineerStack} />
      <AIOfferingsSection data={whatWeExcelAt} />
      <ImpactDeliveredSection data={worldImpact} />
      <WhyChooseSection data={positioningStatement} />
    </div>
  );
}
