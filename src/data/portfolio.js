import coventryLogo from "../assets/education/coventry-university.png";
import nibmLogo from "../assets/education/nibm.png";
import hpLifeLogo from "../assets/certifications/hp-life.png";
import moratuwaLogo from "../assets/certifications/moratuwa.png";
import udemyLogo from "../assets/certifications/udemy.png";

export const profile = {
  name: "Wethum Lansakara",
  title: "AI Engineer & Machine Learning Developer",
  tagline:
    "Building intelligent applications with AI, machine learning, and modern web technologies.",
  email: "wethumlansakara2007@gmail.com",
  github: "https://github.com/wethumlansakara",
  linkedin: "https://www.linkedin.com/in/wethum-lansakara",
  resumeUrl: "/Wethum_Lansakara_CV.pdf",
};

export const about = {
  heading: "Building intelligent solutions with AI and modern software.",
  description:
    "I'm passionate about creating intelligent systems that combine artificial intelligence, machine learning, and software development to solve practical real-world problems. I enjoy turning ideas and data into useful, scalable, and user-focused applications.",
};

export const capabilities = [
  {
    icon: "brain",
    title: "AI & Machine Learning",
    description:
      "Building intelligent models and AI-powered applications using machine learning, data analysis, and modern AI technologies.",
  },
  {
    icon: "code",
    title: "Software Development",
    description:
      "Creating clean, practical, and scalable software solutions by combining strong backend logic with modern web technologies.",
  },
  {
    icon: "lightbulb",
    title: "Problem Solving",
    description:
      "Turning complex technical challenges into effective real-world solutions through analytical thinking and hands-on development.",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "Java", "C/C++", "JavaScript"] },
  {
    category: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "LLM Integration",
      "OpenRouter",
    ],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "React", "FastAPI", "Flask"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Neon"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    category: "Core Concepts",
    items: [
      "OOP",
      "EDA",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
      "Agile Concepts",
    ],
  },
];

export const projects = [
  {
    title: "StudyPilot AI",
    shortDescription:
      "AI study assistant with private PDF search, semantic retrieval, subject-aware Q&A, and content summarization.",
    fullDescription:
      "An AI-powered study platform with a FastAPI backend and a PostgreSQL database hosted on Neon. Integrates the OpenRouter API for AI-powered question answering and content summarization, deployed on Vercel.",
    tags: ["FastAPI", "PostgreSQL", "OpenRouter API", "Vercel"],
    features: [
      "Upload lecture PDFs and chat with them using retrieval-augmented generation (RAG)",
      "Answers include source citations with file and page references",
      "Auto-generated quizzes, adaptive exams, and flashcard decks",
      "Progress dashboard tracking weak areas over time",
      "Semantic search via PostgreSQL + pgvector embeddings",
      "JWT-authenticated accounts with an admin panel",
    ],
    image: "/images/projects/studypilot-ai.png",
    github: "https://github.com/wethumlansakara/StudyPilot-AI",
    badge: "RAG + Semantic Search",
  },
  {
    title: "Autonomous Scarecrow Robot",
    shortDescription:
      "Autonomous agricultural robot with line following, motion detection, obstacle avoidance, and remote monitoring.",
    fullDescription:
      "An autonomous agricultural monitoring robot built on Arduino UNO and ESP32, with PID line following, PIR motion detection, servo scanning, and ultrasonic obstacle detection. Integrated with Firebase and a React/Vite dashboard for real-time monitoring and remote control.",
    tags: ["Arduino", "ESP32", "Firebase", "React/Vite"],
    features: [
      "PID-controlled line following using a 5-sensor IR array",
      "PIR motion sensor swept across 3 servo positions to detect animals",
      "Deterrent system with linear actuator and buzzer",
      "Ultrasonic obstacle avoidance",
      "ESP32 bridges Arduino UNO sensor data to Firebase Realtime Database",
      "React + Vite web dashboard for live monitoring and manual override",
    ],
    image: "/images/projects/autonomous-scarecrow-robot.png",
    github: "https://github.com/wethumlansakara/Autonomous-Scarecrow-Robot",
    badge: "Autonomous IoT",
  },
  {
    title: "Strategic Customer Segmentation",
    shortDescription:
      "End-to-end customer segmentation project using PCA and K-Means to group 8,950 customers into actionable marketing personas.",
    fullDescription:
      "A machine-learning project segmenting 8,950 credit card customers based on 17 behavioral features — balance, purchases, cash advances, payments, credit limit, tenure, and more — to identify actionable, marketable customer groups.",
    tags: ["Python", "Scikit-learn", "PCA", "K-Means", "Streamlit"],
    features: [
      "Exploratory data analysis across 17 behavioral features",
      "Leakage-safe preprocessing with StandardScaler",
      "PCA dimensionality reduction, retaining ~80% variance in the first 5 components",
      "K-Means clustering tested across multiple values of K",
      "Segments interpreted into marketing personas, e.g. high-risk borrowers and premium shoppers",
      "Streamlit app for predicting a new customer's segment, with the full preprocessing/model pipeline persisted via joblib",
    ],
    highlights: [
      "4 final customer segments",
      "Held-out silhouette score: 0.28",
      "First 5 principal components retain ~80% cumulative explained variance",
    ],
    image: "/images/projects/strategic-customer-segmentation.png",
    github: "https://github.com/wethumlansakara/Strategic-Customer-Segmentation",
    badge: "4 Customer Segments",
  },
  {
    title: "Sri Lankan Rainfall Prediction",
    shortDescription:
      "A numerical mathematics and data science project estimating 10-day rainfall totals across Sri Lanka, comparing regression models and validating findings with statistical hypothesis testing.",
    fullDescription:
      "Built a complete data science workflow on 55,318 cleaned dekadal rainfall records spanning 34 subnational regions of Sri Lanka since 1981, sourced from the Humanitarian Data Exchange. Engineered 38 input features (region encodings, seasonal markers, historical and rolling rainfall averages) to estimate 10-day rainfall totals, carefully excluding leakage-prone variables. Compared a climatology baseline, Linear Regression, and Random Forest, with Random Forest performing best. Backed the findings with Pearson correlation and paired t-test hypothesis testing between regions.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Regression", "SciPy"],
    features: [
      "Cleaned and engineered a 55,318-record rainfall dataset across 34 administrative regions",
      "38 input features built from region codes, seasonal markers, and rolling/historical rainfall averages, with leakage-prone variables explicitly excluded",
      "Compared a climatology baseline, Linear Regression, and Random Forest regression models",
      "Random Forest achieved the best fit (R²: 0.625, RMSE: 36.73mm) with zero physically impossible negative predictions, versus 275 from Linear Regression",
      "Validated regional rainfall differences with Pearson correlation (r = 0.71) and a paired t-test (t = 14.19, p < 0.001)",
      "Delivered as both a standalone analysis script and a 16-section Jupyter notebook",
    ],
    highlights: [
      "Random Forest: R² 0.625",
      "RMSE: 36.73mm",
      "Dataset: 55,318 records",
    ],
    image: "/images/projects/sri-lankan-rainfall-prediction.png",
    github: "https://github.com/wethumlansakara/Sri-Lanka-Rainfall-Analysis",
    badge: "R² 0.625",
  },
  {
    title: "Mobile Price Range Classification",
    shortDescription:
      "Machine-learning classification project comparing five models for mobile price prediction, with Logistic Regression achieving 96.07% accuracy.",
    fullDescription:
      "A multi-class classification system predicting mobile phone price ranges from technical specifications. Compared KNN, Logistic Regression, SVM, Decision Tree, and Naive Bayes — Logistic Regression came out on top at 96.07% accuracy.",
    tags: ["Python", "Scikit-learn", "Classification"],
    features: [
      "Removed 178 records with physically impossible screen-width values during cleaning",
      "Exploratory data analysis linking price to RAM, battery power, and screen resolution",
      "Compared five classification algorithms with consistent evaluation metrics",
    ],
    highlights: [
      "Logistic Regression: 96.07% test accuracy",
      "SVM was the closest competitor at 88.76% accuracy",
      "Compared KNN, Logistic Regression, SVM, Decision Tree, and Naive Bayes",
      "Evaluated on 1,976 phones across 20 hardware specifications",
    ],
    image: "/images/projects/mobile-price-classification.png",
    github: "https://github.com/wethumlansakara/Mobile-Price-Range-Classification",
    badge: "96.07% Accuracy",
  },
  {
    title: "Smart Study Planner",
    shortDescription:
      "AI-powered study planner using Prolog reasoning to prioritize subjects and generate personalized study schedules.",
    fullDescription:
      "An AI-powered study planner using Python, Flask, SWI-Prolog, and MySQL. Prolog-based reasoning prioritizes and allocates study time based on exam proximity, difficulty, and progress, with a web interface for managing subjects and schedules.",
    tags: ["Flask", "SWI-Prolog", "MySQL", "Python"],
    features: [
      "Prolog rule engine recommends personalized study hours per subject",
      "Scheduling factors in subject difficulty, priority, and exam urgency",
      "Subject management with difficulty ratings, exam dates, and progress tracking",
      "User accounts with hashed-password authentication",
      "Automated exam-reminder emails for upcoming exams",
    ],
    image: "/images/projects/smart-study-planner.png",
    github: "https://github.com/wethumlansakara/smart-study-planner",
    badge: "Prolog Reasoning",
  },
  {
    title: "CiaoEventi",
    shortDescription:
      "Full-stack event management platform for discovering events, booking tickets, and managing user and admin workflows.",
    fullDescription:
      "A smart event management platform for discovering, booking, and managing events. Built with a React frontend and an Express/MongoDB backend secured with JWT authentication, including user and admin dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Event discovery",
      "Ticket booking",
      "Booking management",
      "User and admin workflows",
      "JWT authentication",
    ],
    image: "/images/projects/ciaoeventi.png",
    github: "https://github.com/wethumlansakara/Ciaoeventi",
    liveDemo: "https://ciaoeventi.com/index.php",
    badge: "Full-Stack",
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Computer Science with Artificial Intelligence",
    institution: "Coventry University",
    country: "United Kingdom",
    period: "Ongoing",
    logo: coventryLogo,
    modules: [
      "Intelligent Agent",
      "Security",
      "Artificial Neural Networks",
      "Machine Learning",
      "Individual Project Preparation",
      "Individual Project",
    ],
  },
  {
    degree: "HND in Computer Science with Artificial Intelligence",
    institution: "National Institute of Business Management",
    country: "Sri Lanka",
    period: "2026 – Expected Dec 2026",
    logo: nibmLogo,
    modules: [
      "Data Structures and Algorithms",
      "Machine Learning for Artificial Intelligence",
      "Data Modeling and NoSQL Database",
      "Embedded Systems",
      "Numerical Mathematics and Computing",
      "Internet of Things (IOT)",
      "Image Processing",
      "Computer Vision",
      "Cloud Computing",
      "Robotics",
      "Natural Language Processing",
      "AI Project",
      "Industrial Training",
      "CREST",
      "Effective Communication Skills II",
    ],
  },
  {
    degree: "Diploma in Computer Science with Artificial Intelligence",
    institution: "National Institute of Business Management",
    country: "Sri Lanka",
    period: "2025 – 2026",
    logo: nibmLogo,
    modules: [
      "Introduction to Computer Systems",
      "Computer Programming",
      "Mathematics for Computer Science",
      "Software Engineering Fundamentals",
      "Relational Database Management Systems",
      "Data Communications and Computer Networks",
      "Object Oriented Programming with Java",
      "Introduction to Artificial Intelligence",
      "Probability and Statistics",
      "Web Application Development",
      "Project Management for Computer Science",
      "Social, Ethical and Professional Issues in Computing",
      "Effective Communication Skills I",
    ],
  },
  {
    degree: "Foundation Programme in Computer Science with Artificial Intelligence",
    institution: "National Institute of Business Management",
    country: "Sri Lanka",
    period: "2024",
    logo: nibmLogo,
    modules: [],
  },
];

export const certifications = [
  {
    name: "Critical Thinking in the AI Era",
    org: "HP LIFE",
    logo: hpLifeLogo,
    certificateImage: "/images/certificates/critical-thinking-ai-era.png",
    date: "May 24, 2026",
  },
  {
    name: "Python for Beginners",
    org: "University of Moratuwa",
    logo: moratuwaLogo,
    certificateImage: "/images/certificates/python-for-beginners.png",
    credentialUrl: "https://open.uom.lk/verify",
    credentialCode: "edre391lWv",
    date: "April 1, 2025",
  },
  {
    name: "Python Programming",
    org: "Udemy",
    logo: udemyLogo,
    certificateImage: "/images/certificates/python-programming.png",
    credentialUrl: "https://ude.my/UC-9434032b-0fd1-459d-b933-ebdee2538386",
  },
  {
    name: "Java Mastery: Beginner's Guide and Full-Stack AI Projects",
    org: "Udemy",
    logo: udemyLogo,
    certificateImage: "/images/certificates/java-mastery.png",
    credentialUrl: "https://ude.my/UC-55180476-9c6a-41a2-8dd5-3aa12e8b4e4b",
  },
  {
    name: "Web Hacking for Beginners",
    org: "Udemy",
    logo: udemyLogo,
    certificateImage: "/images/certificates/web-hacking-for-beginners.png",
    credentialUrl: "https://ude.my/UC-65933744-58d3-4222-ab1b-5a2098e61b6e",
  },
];
