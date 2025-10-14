import { AIOfferingsSection } from "../components/AIML/AIOfferingsSection";
import BusinessImpactSection from "../components/AIML/BusinessImpactSection";
import { HeroSection } from "../components/AIML/HeroSection";
import { ImpactDeliveredSection } from "../components/AIML/ImpactDeliveredSection";
import { WhyAISection } from "../components/AIML/WhyAISection";

export const heroData = {
  title: "Machine Learning That Powers Tomorrow",
  subtitle: "Machine Learning isn’t just about algorithms",
  description:
    " It’s about unlocking intelligence from data. From predicting customer behavior to optimizing global supply chains, our ML expertise transforms raw information into real-time, revenue-driving insights. We build ML systems that learn, adapt, and scale — giving your business the edge in an ever-changing world.",
  buttonText: "Demo",
  buttonLink: "#demo",
  backgroundImage: "/images/hero-bg.svg",
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
        "Bias detection, drift monitoring, explainability — we ensure ML you can rely on.",
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
      description: "Smart product recommendations that delight customers.",
    },
    {
      icon: "/images/AI-ML/health-icon.svg",
      title: "Healthcare",
      description: "Predictive models that help doctors save lives.",
    },
    {
      icon: "/images/AI-ML/retail-icon.svg",
      title: "Finance",
      description: "Fraud detection systems that protect millions daily.",
    },
    {
      icon: "/images/AI-ML/logistic-icon.svg",
      title: "Logistics",
      description: "Dynamic routing to cut costs and deliver faster.",
    },
    {
      icon: "/images/AI-ML/manufactur-icon.svg",
      title: "Manufacturing",
      description: "Quality inspection that learns and improves over time.",
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
          title: "Real-time inference APIs",
          description: "with single-digit latency",
        },
        {
          title: "Containerized ML",
          description: "on Kubernetes for global reach",
        },
        {
          title: "Edge & IoT ML",
          description: "for real-world intelligence closer to the source",
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
    {
      icon: "/images/AI-ML/home-icon.svg",
      title: "Infrastructure Powerhouse",
      items: [
        {
          title: "Distributed training",
          description: "with GPUs/TPUs (TensorFlow, PyTorch, JAX)",
        },
        {
          title: "High-performance serving",
          description: "with ONNX & Triton Inference Server",
        },
        {
          title: "Hybrid & Multi-Cloud ML",
          description: "across AWS, Azure, GCP",
        },
        {
          title: "Vector Databases",
          description: "for AI + ML hybrid",
        },
      ],
    },
  ],
};

export const businessImpactData = {
  cards: [
    {
      icon: "/images/AI-ML/chooseUs-img.webp",
      title: "The Business Impact",
      subtitle:
        "Our ML isn’t just models in production — it’s business outcomes delivered. We help organizations:",
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
      icon: "/images/AI-ML/positionST-img.webp",
      title: "Positioning Statement",
      points: [
        {
          text: "We bring end-to-end ML engineering capability:",
        },
        {
          text: "From model design → to deployment → to continuous optimization.",
        },
        {
          text: "Across industries, data modalities, and infrastructures.",
        },
        {
          text: "If it can be modeled, we can build it, productionize it, and scale it.",
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
