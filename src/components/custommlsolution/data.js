export const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "technical-implementation", label: "Technical Implementation" },
  { id: "technology-stack", label: "Technology Stack" },
  { id: "contact", label: "Lets Get In Touch" },
];

export const challengeCards = [
  {
    icon: "/images/cmls-CB1.svg",
    alt: "Limited Browsing Time",
    title: "Limited Browsing Time",
    description: "Expectant and new mothers had little time to explore, often skipping detailed product info and missing key nutritional items.",
    aspectClass: "aspect-4183/4200",
  },
  {
    icon: "/images/cmls-CB2.svg",
    alt: "Lower Cart Value",
    title: "Lower Cart Value",
    description: "Fewer product views led to fewer items added per session, reducing average order value and overall customer satisfaction.",
    aspectClass: "aspect-697/630",
  },
  {
    icon: "/images/cmls-CB3.svg",
    alt: "Need for Smart Suggestions",
    title: "Need for Smart Suggestions",
    description: "Research shows helpful recommendations increase cart additions by 45%, highlighting the importance of guided discovery.",
    aspectClass: "",
  },
  {
    icon: "/images/cmls-CB4.svg",
    alt: "Risk to Conversions and AOV",
    title: "Risk to Conversions and AOV",
    description: "Without personalized suggestions, Early Foods risked lower conversion rates and reduced revenue, as seen across the retail industry.",
    aspectClass: "",
  },
];

export const solutionCards = [
  {
    icon: "/images/cmls-CB5.svg",
    alt: "Collaborative Filtering",
    title: "Collaborative Filtering",
    description: "We built a user–product interaction matrix from past purchases and browsing data. Using cosine similarity, the model finds users with similar tastes to recommend items—capturing the \"wisdom of the crowd.\"",
    aspectClass: "aspect-[1.368/1]",
  },
  {
    icon: "/images/cmls-CB6.png",
    alt: "Content-Based Filtering",
    title: "Content-Based Filtering",
    description: "Each product's attributes (e.g., ingredients, nutrition facts, goals) are vectorized to build a feature profile. The system then recommends items with similar ingredients or health benefits.",
    aspectClass: "aspect-[1.543/1]",
  },
  {
    icon: "/images/cmls-CB7.svg",
    alt: "Nutritional Relevance",
    title: "Nutritional Relevance",
    description: "To suit Early Foods' audience, the engine filters by category (e.g., pregnancy-safe) and ensures diversity, avoiding near-duplicates to keep recommendations valuable.",
    aspectClass: "aspect-[1.715/1]",
  },
  {
    icon: "/images/cmls-CB8.svg",
    alt: "Real-Time Integration",
    title: "Real-Time Integration",
    description: "Built in Python with Pandas and Scikit-learn, the pipeline runs on each page view, instantly showing AI-driven suggestions to help users discover products without leaving the page.",
    aspectClass: "aspect-[1.574/1]",
  },
];

export const implementationSteps = [
  { icon: "/images/YH-TC1.svg", alt: "Data Collection", title: "Data Collection", number: "1" },
  { icon: "/images/YH-TC2.svg", alt: "Feature Engineering", title: "Feature Engineering", number: "2" },
  { icon: "/images/YH-TC3.svg", alt: "Similarity Computation", title: "Similarity <br /> Computation", number: "3" },
  { icon: "/images/YH-TC4.svg", alt: "Recommendation Logic", title: "Recommendation <br /> Logic", number: "4" },
  { icon: "/images/YH-TC5.svg", alt: "Real-Time Service", title: "Real-Time Service", number: "5" },
  { icon: "/images/YH-TC6.svg", alt: "Monitoring & Retraining", title: "Monitoring & <br /> Retraining", number: "6" },
];

export const techStackData = {
  languages: [
    { icon: "/images/YH-TS1.svg", alt: "Python programming language", label: "python" },
    { icon: "/images/YH-TS2.svg", alt: "Jupyter notebook", label: "Jupyter" },
  ],
  monitoring: [
    { icon: "/images/YH-TS3.svg", alt: "AWS SageMaker", label: "SAGEMAKER" },
  ],
  dataStorage: [
    { icon: "/images/YH-TS4.svg", alt: "AWS RDS", label: "RELATIONAL<br />DATABASE<br />SERVICE" },
    { icon: "/images/YH-TS5.svg", alt: "AWS S3", label: "SIMPLE<br />STORAGE<br />SERVICE" },
  ],
  deployment: [
    { icon: "/images/YH-TS6.svg", alt: "AWS Lambda", label: "LAMBDA" },
    { icon: "/images/YH-TS3.svg", alt: "AWS SageMaker", label: "SAGEMAKER" },
    { icon: "/images/YH-TS8.svg", alt: "AWS Glue", label: "GLUE" },
    { icon: "/images/YH-TS9.svg", alt: "AWS Kinesis", label: "KINESIS" },
  ],
  frontEnd: [
    { icon: "/images/YH-TS10.svg", alt: "JavaScript", label: "JAVASCRIPT" },
    { icon: "/images/YH-TS11.svg", alt: "HTML", label: "HTML" },
  ],
};
