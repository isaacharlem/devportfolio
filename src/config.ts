export const siteConfig = {
  name: "Isaac Harlem",
  title: "AI Engineer & Data Scientist",
  description: "Portfolio website of Isaac Harlem",
  accentColor: "#1337d6",
  profilePhoto: "src/images/headshot.jpg",
  social: {
    email: "isaacharlem@uchicago.edu",
    linkedin: "https://www.linkedin.com/in/isaac-harlem/",
    github: "https://github.com/isaacharlem",
  },
  aboutMe:
    "I'm a passionate data scientist currently working as an AI Engineer (contract) at Wolters Kluwer. I recently graduated from the University of Chicago with a passion for building practical, intelligent AI systems that actually work in production settings. I’m especially drawn to large language models, agent-based architectures, and AI research applicable to industry settings. I’ve worked on everything from fine-tuning and deploying LLMs at scale to designing modern retrieval pipelines and AI agents that interact with tools, code, and people. I’m particularly interested in the edge cases... where models fail, where embeddings break down, and where a clever system design can make all the difference. I enjoy solving hard problems at the edge of machine learning, data science, and software engineering.",
  skills: ["Python", "SQL", "Generative AI", "Large Language Models", "AI Agents", "Retrieval Augmented Generation", "Deep Learning", "Natural Language Processing", "Data Science", "Machine Learning", "Data Engineering", "Data Analysis", "Software Development"],
  projects: [
    {
      name: "AI Portfolio Chatbot",
      description:
        "Built an AI end-to-end portfolio chatbot from scratch using RAG and hybrid vector search, enabling interactive conversations about my experience and projects. Integrated custom embeddings and retrieval pipelines to showcase real-time, LLM-powered Q&A. Click here to test it out!",
      link: "https://portfolio-frontend-s7al.onrender.com/",
      skills: ["Python", "Node.js", "LLMs", "RAG", "Hybrid Vector Search", "OCR"],
    },
    {
      name: "Semantic Data Analysis of Political Subreddits from 2011 to 2022",
      description:
        "Conducted a computational semantic analysis with two peers of 44,000 Reddit articles from r/liberal and r/conservative using semantic embeddings, BERTopic, and entropy metrics to measure the rise of political echo chambers from 2011–2022. Found increasing intra-group semantic convergence and decreasing topic diversity varying in degree in both subreddits, revealing asymmetric patterns of ideological insularity over time. Click here to read the project paper.",
      link: "https://docs.google.com/document/d/1A9QuVhkqTljVuGG2OwOvWKOH4HVRNlJmdW51kNQtPxI/edit?usp=sharing",
      skills: ["Python", "NLP", "Semantic Embeddings", "BERTopic", "Data Analysis"],
    },
    {
      name: "Examining the Cognitive Significance of Reasoning Large Language Models",
      description:
        "Conducted a comparative evaluation of instruction-tuned LLMs with and without chain-of-thought reasoning (DeepSeek-R1 vs. Qwen), using self-consistency metrics, semantic embedding similarity, BLEU, and ROUGE-L scores. Demonstrated that CoT fine-tuning improves functional reasoning accuracy while standard instruction-tuning favors linguistic fluency, highlighting distinct performance trade-offs at the system level. The project paper was ranked #1 by the Head of the Cognitive Science Department among 70+ student submissions. Click here to read the project paper.",
      link: "https://docs.google.com/document/d/12PLWEpi0C0p2gn16K3qw14xRaSI8UwGNg8CaUdtHy9Q/edit?usp=sharing",
      skills: ["Python", "LLM Evaluation", "Reasoning LLMs", "Semantic Embeddings", "BLEU / ROUGE Metrics", "Self-Consistency Scoring"],
    },
    {
      name: "AI Internal Document Navigation Agent (Argonne)",
      description:
        "Developed a graph-based document retrieval system at Argonne National Lab using open-source LLMs to navigate government policy documents under strict data privacy constraints. Led the design and implementation of query augmentation, a hybrid retrieval pipeline (semantic + keyword), an agentic interface, and an LLM-assisted document reranking and evaluation system. Project won \"Best in Clinic\" award from the UChicago Data Science Institute out of 20 project submissions in 2024. Click here to watch technical presentation from Phase 1 of the project (June 2024).",
      link: "https://www.linkedin.com/posts/dsi-uchicago_data-science-clinic-students-vincent-chirio-ugcPost-7224131834018680832-V7NB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLGiiYB407uCLjYJhjS3f35-AijbsSW4XI",
      skills: ["Python", "Local LLMs", "RAG", "LangChain", "Neo4j", "Milvus", "Data Privacy", "Hybrid Index"],
    },
    {
      name: "Classifying Dog Breed Images via a Convolutional Neural Network",
      description:
        "Built a fine-grained dog breed classifier using DenseNet121 and transfer learning on the Stanford Dogs Dataset (20,580 images across 120 breeds). Adapted model architecture with custom Dense layers and dropout, achieving 82% cross-validation accuracy and 97.2% top-5 accuracy on unseen user-submitted dog images. Leveraged data augmentation, GlobalAveragePooling2D, and confusion matrix analysis to evaluate generalization performance across similar breed classes. Click here to read the project paper.",
      link: "https://docs.google.com/document/d/1WjlquIa6T-4WlAffsyZzxlQrkbOFOecns5SR-5aF7IQ/edit?usp=sharing",
      skills: ["Python", "TensorFlow", "Convolutional Neural Networks", "Computer Vision", "Transfer Learning", "Machine Learning"],
    },
  ],
  industryExperience: [
    {
      company: "Wolters Kluwer | UpToDate",
      title: "AI Engineer (Contract)",
      dateRange: "July 2025 - Present",
      bullets: [
        "Decreased hosting costs by 80% by serverlessly deploying Large Language Models (LLMs) on Google Cloud Run.",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Wolters Kluwer | UpToDate",
      title: "Product Software Engineering Intern",
      dateRange: "June 2024 - September 2024",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
    {
      company: "Consultant.AI",
      title: "Data Scientist",
      dateRange: "August 2023 - October 2023",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Insait.IO",
      title: "Data Science Intern",
      dateRange: "July 2023 - August 2023",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
  ],
  researchExperience: [
    {
      company: "Argonne National Laboratory",
      title: "Returning AI Research Intern",
      dateRange: "January 2025 - March 2025",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Fermi National Accelerator Laboratory",
      title: "Machine Learning Intern",
      dateRange: "September 2024 - November 2024",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
    {
      company: "Argonne National Laboratory",
      title: "AI Research Intern",
      dateRange: "March 2024 - June 2024",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
  ],
  leadership: [
    {
      company: "University of Chicago Department of Computer Science",
      title: "Teaching Assistant",
      dateRange: "March 2024 - June 2025",
      bullets: [
        "Led example initiative with measurable impact",
        "Managed team of X members",
        "Achieved specific leadership outcome",
      ],
    },
    {
      company: "University of Chicago Department of Computer Science",
      title: "Course Grader",
      dateRange: "September 2023 - March 2024",
      bullets: [
        "Led example initiative with measurable impact",
        "Managed team of X members",
        "Achieved specific leadership outcome",
      ],
    },
  ],
  education: [
    {
      school: "University of Chicago",
      degree: "Bachelor of Arts in Data Science",
      dateRange: "2021 - 2025",
      achievements: [
        "Graduated Cum Laude with Departmental Honors with 3.78 GPA",
        "Dean's List in 2021",
        "University Scholar Award recipient",
      ],
    },
  ],
};
