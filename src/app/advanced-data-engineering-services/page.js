import DataEngineeringContent from "@/components/DataEngineering/DataEngineeringContent";

export const metadata = {
  title: "Advanced Data Engineering & Analytics Services",
  description:
    "Turn raw data into insights. We design scalable ETL pipelines, data warehouses, and real-time processing architectures. Privacy-first data engineering.",
  keywords: ["Data Pipelines", "Big Data", "ETL"],
  alternates: {
    canonical: "https://mindefy.tech/advanced-data-engineering-services",
  },
  openGraph: {
    title: "Advanced Data Engineering & Big Data Services",
    description:
      "Build scalable data pipelines and architectures. Our data engineering services cover ETL, cloud warehousing, and analytics to transform raw data into insights.",
    url: "https://mindefy.tech/advanced-data-engineering-services",
  },
  twitter: {
    title: "Advanced Data Engineering & Big Data Services",
    description:
      "Build scalable data pipelines and architectures. Our data engineering services cover ETL, cloud warehousing, and analytics to transform raw data into insights.",
  },
};

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
      description:
        "Unify customer data across platforms to build reliable 360° profiles - powering recommendation engines, campaign targeting, and real-time analytics.",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare",
      description:
        "Enable secure, HIPAA-compliant data pipelines that integrate clinical, research, and IoT data - improving decision-making and care delivery.",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "Financial Service",
      description:
        "Streamline high-volume data streams to detect anomalies, monitor transactions in real time, and maintain audit-ready compliance.",
    },
    {
      icon: "/images/AI-ML/telecom.svg",
      title: "Telecom & Media",
      description:
        "Consolidate streaming, user, and engagement data into scalable lakehouses - driving churn prediction, content optimization, and personalization.",
    },
    {
      icon: "/images/AI-ML/manufactur-icon.svg",
      title: "Manufacturing",
      description:
        "Collect and process sensor data from connected equipment to enable predictive maintenance, process optimization, and downtime reduction.",
    },
  ],
};

export const positioningStatement = {
  title: "Our Capabilities",
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
    <DataEngineeringContent
      heroData={heroData}
      ourEngineerStack={ourEngineerStack}
      whatWeExcelAt={whatWeExcelAt}
      worldImpact={worldImpact}
      positioningStatement={positioningStatement}
    />
  );
}
