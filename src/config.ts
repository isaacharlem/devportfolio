export const siteConfig = {
  name: "Isaac Harlem",
  title: "AI Engineer & Data Scientist",
  description: "Portfolio website of Isaac Harlem",
  accentColor: "#1337d6",
  // Use a public path so the image is served statically
  profilePhoto: "/images/headshot.jpg",
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
      linkType: "app",
      skills: ["Python", "Node.js", "LLMs", "RAG", "Hybrid Vector Search", "OCR"],
    },
    {
      name: "Semantic Data Analysis of Political Subreddits from 2011 to 2022",
      description:
        "Conducted a computational semantic analysis with two peers of 44,000 Reddit articles from r/liberal and r/conservative using semantic embeddings, BERTopic, and entropy metrics to measure the rise of political echo chambers from 2011–2022. Found increasing intra-group semantic convergence and decreasing topic diversity varying in degree in both subreddits, revealing asymmetric patterns of ideological insularity over time. Click here to read the project paper.",
      link: "https://docs.google.com/document/d/1A9QuVhkqTljVuGG2OwOvWKOH4HVRNlJmdW51kNQtPxI/edit?usp=sharing",
      github: "https://github.com/isaacharlem/reddit_ideology",
      skills: ["Python", "NLP", "Semantic Embeddings", "BERTopic", "Data Analysis"],
    },
    {
      name: "Examining the Cognitive Significance of Reasoning Large Language Models",
      description:
        "Conducted a comparative evaluation of instruction-tuned LLMs with and without chain-of-thought reasoning (DeepSeek-R1 vs. Qwen), using self-consistency metrics, semantic embedding similarity, BLEU, and ROUGE-L scores. Demonstrated that CoT fine-tuning improves functional reasoning accuracy while standard instruction-tuning favors linguistic fluency, highlighting distinct performance trade-offs at the system level. The project paper was ranked #1 by the Head of the Cognitive Science Department among 70+ student submissions. Click here to read the project paper.",
      link: "https://docs.google.com/document/d/12PLWEpi0C0p2gn16K3qw14xRaSI8UwGNg8CaUdtHy9Q/edit?usp=sharing",
      github: "https://github.com/isaacharlem/llm-comparative-analysis",
      skills: ["Python", "LLM Evaluation", "Reasoning LLMs", "Semantic Embeddings", "BLEU / ROUGE Metrics", "Self-Consistency Scoring"],
    },
    {
      name: "AI Internal Document Navigation Agent (Argonne)",
      description:
        "Developed a graph-based document retrieval system at Argonne National Lab using open-source LLMs to navigate government policy documents under strict data privacy constraints. Led the design and implementation of query augmentation, a hybrid retrieval pipeline (semantic + keyword), an agentic interface, and an LLM-assisted document reranking and evaluation system. Project won \"Best in Clinic\" award from the UChicago Data Science Institute out of 20 project submissions in 2024. Click here to watch technical presentation from Phase 1 of the project (June 2024).",
      link: "https://www.linkedin.com/posts/dsi-uchicago_data-science-clinic-students-vincent-chirio-ugcPost-7224131834018680832-V7NB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLGiiYB407uCLjYJhjS3f35-AijbsSW4XI",
      linkType: "video",
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
        "Decreased hosting costs by 80% by serverlessly deploying autoscaling Large Language Model instances on Google Cloud Run.",
        "Quantized and finetuned open-source Large Language Models for medical use-cases. Enabled deployment on single L4 GPUs.",
        "Built end-to-end Large Language Model evaluation tool, complete with Streamlit UI.",
        "Worked on a team of 20 developers. Presented projects to technical and non-technical stakeholders.",
      ],
    },
    {
      company: "Wolters Kluwer | UpToDate",
      title: "Product Software Engineering Intern",
      dateRange: "June 2024 - September 2024",
      bullets: [
        "Designed AI tool for search quality assurance; tool adopted as primary method for assessing search precision for billion-dollar product.",
        "Created process for synthetic dataset generation for Large Language Model finetuning. Allowed developers to quickly generate reliable training, testing, and validation datasets.",
        "Finetuned and deployed variations of Google Gemini and Gemma 2 on Vertex AI.",
      ],
    },
    {
      company: "Consultant.AI",
      title: "Data Scientist",
      dateRange: "August 2023 - October 2023",
      bullets: [
        "Engineered GPT-4-powered AI Jira Agent using Python and LangChain, automating project management workflows and reducing task tracking time.",
        "Scaled proof-of-concept into production-grade AI product, directly enabling the founding of Consultant.AI by Insait.io's CEO.",
        "Led Agile development for a 5-person engineering team, delivering MVP to support investor outreach.",
      ],
    },
    {
      company: "Insait.IO",
      title: "Data Science Intern",
      dateRange: "July 2023 - August 2023",
      bullets: [
        "Developed AI-powered workflow automation tools leveraging GPT-4 and Python, enhancing task allocation efficiency for 30-person team.",
        "Collaborated with CEO and CTO design internal onboarding chatbot, streamlining new hire training processes.",
      ],
    },
  ],
  researchExperience: [
    {
      company: "Argonne National Laboratory",
      title: "Returning AI Research Intern",
      dateRange: "January 2025 - March 2025",
      bullets: [
        "Enhanced AI agent architecture with hybrid embedding search and context-aware text chunking, improving retrieval precision by 30% and latency by 25% for RAG from 2000 document database.",
        "Designed benchmarking dataset and program for evaluating agent performance, allowing for comprehensive analysis and optimization.",
        "Integrated web search APIs for real-time information retrieval, improving real-time information retrieval accuracy.",
      ],
    },
    {
      company: "Fermi National Accelerator Laboratory",
      title: "Machine Learning Intern",
      dateRange: "September 2024 - November 2024",
      github: "https://github.com/dsi-clinic/2023-Autumn-Clinic-Fermi-CaloDiffusionPaper",
      bullets: [
        "Optimized Variational Autoencoder using PyTorch for latent diffusion models, achieving a 50% increase in simulation speed.",
        "Built reproducible ML pipelines for particle physics research.",
      ],
    },
    {
      company: "Argonne National Laboratory",
      title: "AI Research Intern",
      dateRange: "March 2024 - June 2024",
      bullets: [
        "Developed local AI agent in Python with LangChain and Ollama, integrating Milvus vector store and Neo4j graph DB for scalable knowledge retrieval.",
        "Created computer vision-based document ingestion pipeline for unstructured PDF documents, automating data extraction and storage.",
        "Finetuned and quantized Llama models for 50% improved latency on local devices.",
      ],
    },
  ],
  leadership: [
    {
      company: "University of Chicago Department of Computer Science",
      title: "Teaching Assistant",
      dateRange: "March 2024 - June 2025",
      bullets: [
        "Led and created hands-on coding labs and debugging workshops for 200+ students in Python, SQL, and HTML in Data Science courses.",
        "Designed and graded 1000+ data engineering, machine learning, and algorithm assignments, improving student mastery of technical concepts.",
        "Provided individualized academic mentoring in office hours.",
      ],
    },
    {
      company: "University of Chicago Department of Computer Science",
      title: "Course Grader",
      dateRange: "September 2023 - March 2024",
      bullets: [
        "Graded programming and math assignments in Python and SQL on topics in machine learning and data analysis in alignment with course objectives.",
        "Collaborated with faculty to design grading rubrics and automated assessment scripts, improving grading consistency and turnaround time.",
        "Delivered detailed written feedback to students, allowing for targeted skill development in computational problem-solving.",
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
