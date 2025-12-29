import { AIOfferingsSection } from "@/components/AIML/AIOfferingsSection";
import BusinessImpactSection from "@/components/AIML/BusinessImpactSection";
import { HeroSection } from "@/components/AIML/HeroSection";
import { ImpactDeliveredSection } from "@/components/AIML/ImpactDeliveredSection";
import { WhyAISection } from "@/components/AIML/WhyAISection";

export const metadata = {
  title: "Machine Learning Services & Consulting",
  description:
    "Leverage data with our machine learning services. We provide end-to-end ML consulting, model development, and deployment for business intelligence.",
  keywords: ["ML Consulting", " Data Science"],
  openGraph: {
    title: "Machine Learning Services & Consulting",
    description:
      "Leverage data with our machine learning services. We provide end-to-end ML consulting, model development, and deployment for business intelligence.",
    url: "https://mindefy.tech/machine-learning-services",
  },
  twitter: {
    title: "Machine Learning Services & Consulting",
    description:
      "Leverage data with our machine learning services. We provide end-to-end ML consulting, model development, and deployment for business intelligence.",
  },
  alternates: {
    canonical: "https://mindefy.tech/machine-learning-services",
  },
};

export const heroData = {
  title: "Machine Learning That Powers Tomorrow",
  subtitle: "Machine Learning isn’t just about algorithms",
  description:
    "It’s about unlocking intelligence from data. From predicting customer behavior to optimizing global supply chains, our ML expertise transforms raw information into real-time, revenue-driving insights.",
  description_1:
    "We build ML systems that learn, adapt, and scale - giving your business the edge in an ever-changing world.",
  buttonText: "Demo",
  buttonLink: "#demo",
  backgroundImage: "/images/ML-BG.webp",
};

export const ourMLApart = {
  title: "What Sets Our ML Apart?",
  cards: [
    {
      title: "Models That Understand",
      description:
        "From deep neural networks to graph intelligence, we design ML that mirrors human intuition.",
      icon: "/images/AI-ML/models-icon.svg",
    },
    {
      title: "Speed at Scale",
      description:
        "Whether it's milliseconds of latency or millions of predictions, our ML is engineered for performance.",
      icon: "/images/AI-ML/speed-icon.svg",
    },
    {
      title: "End-to-End Lifecycle",
      description:
        "From data pipelines to deployment, we manage the full ML journey with MLOps excellence.",
      icon: "/images/AI-ML/lifeCycle-icon.svg",
    },
    {
      title: "Trustworthy & Transparent",
      description:
        "Bias detection, drift monitoring, explainability - we ensure ML you can rely on.",
      icon: "/images/AI-ML/trustworthy-icon.svg",
    },
    {
      title: "Designed for Your Industry",
      description:
        "Retail, healthcare, finance, logistics, or telecom — our ML adapts to your world.",
      icon: "/images/AI-ML/industry-icon.svg",
    },
  ],
};

export const mlInAction = {
  title: "ML In Action",
  impacts: [
    {
      icon: "/images/AI-ML/glob-icon.svg",
      title: "E-Commerce",
      description:
        "Power personalized shopping with AI that understands every click - turning customer intent into unforgettable experiences.",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare",
      description:
        "Predict outcomes before they happen - empowering doctors with AI insights that save time, cost, and lives.",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "Finance",
      description:
        "Secure every transaction with intelligent fraud detection - protecting trust and revenue at enterprise scale.",
    },
    {
      icon: "/images/AI-ML/logistic-icon.svg",
      title: "Logistics",
      description:
        "Deliver smarter and faster - with machine learning that predicts demand, optimizes routes, and cuts delays.",
    },
    {
      icon: "/images/AI-ML/manufactur-icon.svg",
      title: "Manufacturing",
      description:
        "Build perfection into every product - with AI-driven quality systems that learn, adapt, and never miss a flaw.",
    },
  ],
};

export const ourMLStack = {
  title: "Our ML Stack",
  subtitle:
    "We combine the building blocks of machine learning with enterprise-ready infrastructure — delivering solutions that learn, adapt, and scale.",
  offerings: [
    {
      icon: "/images/AI-ML/big-data.svg",
      title: "Data Foundation",
      items: [
        {
          title: "End-to-end pipelines",
          description: "for structured, unstructured, and streaming data",
        },
        {
          title: "Feature stores",
          description: "that transform raw data into live ML signals",
        },
        {
          title: "Privacy-first architecture",
          description: "architecture with governance, compliance, and security",
        },
      ],
    },
    {
      icon: "/images/AI-ML/ml-task.svg",
      title: "Core ML Tasks",
      items: [
        {
          title: "Classification",
          description: "fraud detection, churn prediction, medical diagnosis",
        },
        {
          title: "Regression",
          description:
            "demand forecasting, pricing optimization, energy load prediction",
        },
        {
          title: "Clustering",
          description:
            "customer segmentation, anomaly detection, recommendation grouping",
        },
        {
          title: "Dimensionality Reduction",
          description: "data compression, visualization, and noise filtering",
        },
        {
          title: "Time-Series Forecasting",
          description: "predictive maintenance, stock movement, trend analysis",
        },
      ],
    },
    {
      icon: "/images/AI-ML/learning.svg",
      title: "Learning Paradigms",
      items: [
        {
          title: "Supervised Learning",
          description: "credit risk scoring, sales forecasting, spam detection",
        },
        {
          title: "Unsupervised Learning",
          description:
            "market basket analysis, gene expression clustering, social graph communities",
        },
        {
          title: "Reinforcement Learning",
          description:
            "dynamic pricing, robotics navigation, logistics routing",
        },
        {
          title: "Semi-Supervised Learning",
          description:
            "fraud detection with limited labels, medical imaging insights",
        },
        {
          title: "Federated Learning",
          description:
            "collaborative ML across organizations while preserving data privacy",
        },
      ],
    },
    {
      icon: "/images/AI-ML/insight.svg",
      title: "Model Innovation",
      items: [
        {
          title: "Deep Learning",
          description:
            "CNNs for vision, RNNs/LSTMs for sequences, Transformers for NLP, GANs for relationships",
        },
        {
          title: "Custom Embeddings",
          description: "for text, images, and graphs",
        },
        {
          title: "AutoML & Hyperparameter Optimization",
          description: "for faster experimentation",
        },
        {
          title: "Ensemble Learning",
          description: "(Boosting, Bagging, Stacking) for accuracy at scale",
        },
      ],
    },
    {
      icon: "/images/AI-ML/scale-rocket.svg",
      title: "Deployment at Scale",
      items: [
        {
          title: "Real-time Inference APIs",
          description:
            "Deliver predictions instantly with single-digit latency.",
        },
        {
          title: "Hybrid & Multi-Cloud ML",
          description: "Run models flexibly across AWS, Azure, and GCP.",
        },
        {
          title: "Vector Databases",
          description:
            "Enable fast, hybrid search powering AI + ML intelligence.",
        },
        {
          title: "Containerized ML",
          description:
            "oDeploy globally using Kubernetes for seamless scalability.",
        },
      ],
    },
    {
      icon: "/images/AI-ML/security.svg",
      title: "Lifecycle & Reliability",
      items: [
        {
          title: "MLOps Pipelines",
          description: "with automated training, deployment, and monitoring",
        },
        {
          title: "Bias & Drift Detection",
          description: "for ethical and reliable models",
        },
        {
          title: "Continuous Retraining",
          description: "powered by real-world feedback",
        },
      ],
    },
  ],
};

export const businessImpactData = {
  cards: [
    {
      icon: "/images/AI-ML/ML-img_1.webp",
      title: "The Business Impact",
      subtitle:
        "Our ML isn’t just models in production - it’s business outcomes delivered. We help organizations:",
      points: [
        {
          text: "Anticipate customer needs before they arise",
        },
        {
          text: "Automate decisions at scale with confidence",
        },
        {
          text: "Reduce costs with predictive intelligence",
        },
        {
          text: "Create new revenue streams through personalized experiences",
        },
      ],
    },
    {
      icon: "/images/AI-ML/ML-img_2.webp",
      title: "Our ML Capabilities",
      subtitle:
        "We engineer intelligence - building ML systems that learn, adapt, and scale with your ambition",
      points: [
        {
          text: "From model design → to deployment → to continuous optimization.",
        },
        {
          text: "Across industries, data modalities, and infrastructures.",
        },
        {
          text: "Solutions built for real-world performance across industries and platforms.",
        },
        {
          text: "If it can be modeled, we make it intelligent, production-ready, and scalable.",
        },
      ],
    },
  ],
  noteText:
    "With us, Machine Learning becomes more than technology. It becomes your competitive advantage.",
};

export default function Page() {
  return (
    <div>
      <HeroSection data={heroData} />
      <WhyAISection data={ourMLApart} />
      <ImpactDeliveredSection data={mlInAction} />
      <AIOfferingsSection data={ourMLStack} />
      <BusinessImpactSection data={businessImpactData} />
    </div>
  );
}
