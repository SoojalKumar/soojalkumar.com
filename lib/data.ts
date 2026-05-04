export const profile = {
  name: "Soojal Kumar",
  pronouns: "He/Him",
  title: "Computer Science Graduate at University of the Pacific",
  subtitle:
    "Software Developer | AI & Systems Builder | Seeking opportunities in Software Engineering, AI, Cybersecurity, Backend, Full-Stack, and Systems Engineering",
  location: "California, United States",
  education: "Bachelor of Science in Computer Science, University of the Pacific",
  graduation: "December 2025",
  email: "s_kumar18@u.pacific.edu",
  summary:
    "Computer Science graduate from the University of the Pacific with experience building AI, optimization, simulation, cloud API, and systems programming projects. Skilled in Python, TypeScript, FastAPI, React, Docker, SQLite, algorithms, machine learning, and computer architecture. Passionate about building practical software systems, cybersecurity-aware applications, and scalable developer-focused tools.",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/SoojalKumar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/soojal-kumar-sk" },
  { label: "Email", href: "mailto:s_kumar18@u.pacific.edu" },
  { label: "ORCID", href: "https://orcid.org/0009-0006-9082-2658" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export type Project = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  summary: string;
  metrics: string[];
  problem: string;
  objectives: string[];
  methodology: string[];
  features: string[];
  implementation: string[];
  impact: string[];
};

const commonImpact = [
  "Demonstrates practical software engineering through modular structure, readable workflows, and clear technical documentation.",
  "Shows ability to convert course and research concepts into working systems with real implementation constraints.",
];

export const projects: Project[] = [
  {
    slug: "campusstudy-ai",
    title: "CampusStudy AI",
    date: "2026",
    subtitle:
      "University-focused AI study platform with RAG, web, mobile, backend, workers, and study workflows.",
    description:
      "University-focused AI study platform with web, mobile, FastAPI backend, workers, RAG, and study workflows.",
    tags: ["TypeScript", "FastAPI", "RAG", "AI", "Web", "Mobile", "Workers"],
    github: "https://github.com/SoojalKumar/campusstudy-ai",
    summary:
      "CampusStudy AI is a university-focused AI study platform designed to help students organize learning, generate study support, and interact with AI-powered academic workflows. The project combines a modern frontend, FastAPI backend, worker-based processing, and retrieval-augmented generation concepts to support scalable study experiences.",
    metrics: ["AI Study Workflows", "RAG Architecture", "Web + Mobile Platform", "FastAPI Backend"],
    problem:
      "Students often use disconnected tools for notes, assignments, study planning, and AI assistance. CampusStudy AI aims to bring these workflows into a unified academic platform with structured study support and intelligent retrieval.",
    objectives: [
      "Build a university-focused AI study platform.",
      "Support web and mobile experiences.",
      "Use backend services for study workflows.",
      "Explore RAG-based learning assistance.",
      "Design the system with scalable architecture.",
    ],
    methodology: [
      "Designed a multi-surface platform for web, mobile, backend services, and worker processes.",
      "Separated user-facing study flows from asynchronous background processing.",
      "Structured the AI layer around retrieval-augmented study assistance.",
    ],
    features: ["AI study workflows", "RAG-style learning assistance", "Backend workers", "Web and mobile platform planning"],
    implementation: ["Frontend: TypeScript, React/Next.js style architecture", "Backend: FastAPI", "AI Layer: RAG-style study workflows", "Workers: Background processing", "Platform: Web and mobile-focused design"],
    impact: commonImpact,
  },
  {
    slug: "cloud-api-service",
    title: "Cloud-Based API Service",
    date: "Jan 2026 - Apr 2026",
    subtitle: "Full-stack task management API with FastAPI, React, Docker, CI/CD, and public deployment.",
    description:
      "Built and deployed a full-stack cloud-based task management API service using FastAPI, React, TypeScript, SQLite, Docker, and GitHub Actions. Includes CRUD APIs, API-key authentication, validation, pagination, filtering, health checks, structured errors, database persistence, CI/CD, and a React dashboard.",
    tags: ["FastAPI", "Python", "React", "TypeScript", "SQLite", "Docker", "GitHub Actions", "REST APIs"],
    github: "https://github.com/SoojalKumar/cloud-api-service",
    summary:
      "Cloud-Based API Service is a production-style full-stack application built around a task management API. It includes a FastAPI backend, React + TypeScript dashboard, SQLite persistence, API-key authentication, Docker containerization, GitHub Actions CI/CD, and public deployment.",
    metrics: ["RESTful CRUD APIs", "Dockerized App", "CI/CD Pipeline", "Public Deployment"],
    problem:
      "Many beginner API projects stop at basic CRUD. This project focuses on building a more production-ready API service with validation, authentication, persistence, testing, structured errors, filtering, pagination, and deployment workflows.",
    objectives: ["Build RESTful task management APIs.", "Add API-key authentication.", "Implement validation, pagination, filtering, and error handling.", "Persist data using SQLite.", "Build a React dashboard for interaction.", "Containerize with Docker.", "Add CI/CD using GitHub Actions.", "Deploy publicly."],
    methodology: ["Designed backend layers for routes, services, and persistence.", "Created a typed React dashboard for API interaction.", "Added Docker and GitHub Actions workflows to validate deployment readiness."],
    features: ["CRUD task APIs", "API-key authentication", "Pagination and filtering", "Structured errors", "Health checks", "React dashboard"],
    implementation: ["Backend: FastAPI, Python", "Frontend: React, TypeScript", "Database: SQLite", "DevOps: Docker, GitHub Actions", "Testing: pytest", "API Design: CRUD, authentication, health checks, structured errors"],
    impact: ["Built a realistic full-stack API portfolio project that goes beyond CRUD.", "Practiced production-style validation, testing, containerization, and deployment workflows."],
  },
  {
    slug: "mips-cpu-simulator",
    title: "MIPS CPU Simulator",
    date: "Jan 2025 - Mar 2025",
    subtitle: "Python-based instruction set simulator for fetch-decode-execute CPU workflows.",
    description:
      "Python-based MIPS instruction set simulator modeling fetch, decode, execute, register updates, memory access, and branch handling with cycle-by-cycle traces.",
    tags: ["Python", "Computer Architecture", "CLI", "Systems Programming", "Simulation"],
    github: "https://github.com/SoojalKumar/mips-cpu-simulator",
    summary:
      "MIPS CPU Simulator is a modular Python system that models instruction-level execution for MIPS-like programs. It implements fetch, decode, execute, register updates, memory access, branch handling, and cycle-by-cycle execution tracing.",
    metrics: ["Fetch-Decode-Execute", "Modular CPU Engine", "Register + Memory System", "Cycle-by-Cycle Trace"],
    problem:
      "Understanding CPU execution requires visibility into how instructions move through the processor pipeline and affect registers, memory, and control flow. This simulator makes low-level execution transparent and easier to test.",
    objectives: ["Simulate core MIPS-like instructions.", "Separate CPU, control unit, register file, and memory logic.", "Track register and memory changes.", "Generate structured execution traces.", "Support command-line usability."],
    methodology: ["Modeled the core CPU execution cycle.", "Separated architecture responsibilities into dedicated modules.", "Generated trace outputs to support debugging and instruction analysis."],
    features: ["Instruction parsing", "Register updates", "Memory access", "Branch handling", "CLI execution traces"],
    implementation: ["Language: Python", "Architecture: CPU engine, control unit, register file, memory system", "Workflow: fetch, decode, execute, write-back, trace output"],
    impact: commonImpact,
  },
  {
    slug: "genai-optimization",
    title: "GenAI Project - Genetic Algorithm Optimization Engine",
    date: "Aug 2024 - Dec 2024",
    subtitle: "Optimization engine for evolving trading strategies using genetic algorithms.",
    description:
      "Genetic algorithm optimization system that evolves trading strategies from historical financial data using selection, crossover, mutation, elitism, and experiment tracking.",
    tags: ["Python", "Genetic Algorithms", "Optimization", "Machine Learning", "NumPy", "Matplotlib"],
    github: "https://github.com/SoojalKumar/genai-project",
    summary:
      "This project implements a genetic algorithm framework that evolves candidate strategies using selection, crossover, mutation, and elitism. It supports training/testing workflows, configurable experiments, JSON summaries, and fitness progression plots.",
    metrics: ["Genetic Algorithm", "Strategy Optimization", "CLI Configuration", "Fitness Visualizations"],
    problem: "Optimization problems often require exploring large solution spaces. This project applies evolutionary search to discover candidate trading rules and compare strategy behavior across generations.",
    objectives: ["Implement a configurable genetic algorithm.", "Support training and testing workflows.", "Track experiment output.", "Visualize fitness progression."],
    methodology: ["Encoded candidate strategies as evolving populations.", "Applied selection, crossover, mutation, and elitism.", "Compared learned strategies on unseen data."],
    features: ["Configurable CLI", "JSON experiment summaries", "Fitness plots", "Train/test split workflow"],
    implementation: ["Language: Python", "Libraries: NumPy, Matplotlib", "Algorithm: population evolution with mutation, crossover, selection, and elitism"],
    impact: commonImpact,
  },
  {
    slug: "orbit-simulator",
    title: "Orbit Simulator Project",
    date: "Aug 2024 - Dec 2024",
    subtitle: "Scientific computing project for simulating planetary motion using Kepler's laws.",
    description:
      "Planetary orbit simulation system using Kepler's laws, numerical computation, JSON configuration, static visualizations, and animated GIF outputs.",
    tags: ["Python", "Scientific Computing", "Simulation", "NumPy", "Matplotlib", "Visualization"],
    github: "https://github.com/SoojalKumar/orbit-simulator-project",
    summary:
      "Orbit Simulator models elliptical planetary motion around a central star using numerical methods and Kepler's laws. It supports demo mode, interactive input, JSON configuration, static snapshots, and animated GIF generation.",
    metrics: ["Kepler-Based Motion", "JSON Configuration", "Static + GIF Output", "Scientific Visualization"],
    problem: "Orbital mechanics can be difficult to understand without visual feedback. This simulator turns mathematical models into clear visual outputs and configurable planetary systems.",
    objectives: ["Model elliptical planetary motion.", "Solve orbital positions numerically.", "Support custom JSON configurations.", "Generate static and animated visual outputs."],
    methodology: ["Applied Kepler's laws to model orbital paths.", "Solved Kepler's equation numerically.", "Rendered static and animated visualizations with Matplotlib."],
    features: ["Demo mode", "Interactive input", "JSON configuration", "Static orbit snapshot", "Animated GIF output"],
    implementation: ["Language: Python", "Libraries: NumPy, Matplotlib", "Design: modular CLI with separated simulation and output logic"],
    impact: commonImpact,
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis using Naive Bayes",
    date: "Jan 2024 - May 2024",
    subtitle: "NLP classification pipeline for movie review sentiment.",
    description:
      "NLP pipeline that classifies movie reviews using preprocessing, tokenization, Laplace smoothing, and Naive Bayes probabilistic modeling.",
    tags: ["Python", "NLP", "Machine Learning", "Text Processing", "Naive Bayes"],
    github: "https://github.com/SoojalKumar/sentiment-analysis-naive-bayes",
    summary:
      "This project builds a text classification pipeline that predicts review sentiment using preprocessing, tokenization, word frequency distributions, Laplace smoothing, and log-probability scoring.",
    metrics: ["NLP Pipeline", "Naive Bayes Model", "Laplace Smoothing", "CLI Workflow"],
    problem: "Raw text needs structured preprocessing and robust probability scoring before it can be classified reliably. This project demonstrates a foundational NLP workflow from data processing to prediction.",
    objectives: ["Preprocess raw review text.", "Train a Naive Bayes classifier.", "Handle unseen words with smoothing.", "Support command-line execution."],
    methodology: ["Lowercased, cleaned, and tokenized text.", "Built class-level word frequency distributions.", "Used log probabilities for numerical stability."],
    features: ["Text preprocessing", "Tokenization", "Laplace smoothing", "Configurable datasets", "CLI execution"],
    implementation: ["Language: Python", "Model: Naive Bayes", "Workflow: preprocessing, training, classification, scoring"],
    impact: commonImpact,
  },
  {
    slug: "cache-simulator",
    title: "Cache Simulator",
    date: "Nov 2023 - Dec 2023",
    subtitle: "Python simulator for analyzing direct-mapped and set-associative cache behavior.",
    description:
      "Python cache simulator supporting direct-mapped and set-associative caches with tag matching, LRU replacement, memory address parsing, and command-line configuration.",
    tags: ["Python", "Cache Memory", "Ubuntu", "CLI", "Systems Programming"],
    github: "https://github.com/SoojalKumar/cache-simulator",
    summary:
      "Cache Simulator models cache memory behavior using configurable command-line inputs, direct-mapped and set-associative designs, tag matching, LRU replacement, and memory address parsing.",
    metrics: ["Direct-Mapped Cache", "Set-Associative Cache", "LRU Replacement", "CLI Configuration"],
    problem: "Cache behavior is easier to reason about when hits, misses, tags, sets, and replacement policies can be inspected directly.",
    objectives: ["Support direct-mapped and set-associative caches.", "Parse memory addresses.", "Apply LRU replacement.", "Expose configuration through CLI inputs."],
    methodology: ["Mapped memory addresses into tags, sets, and offsets.", "Tracked cache state across memory operations.", "Implemented replacement behavior for set-associative caches."],
    features: ["Configurable cache settings", "Hit/miss tracking", "Tag matching", "LRU replacement", "CLI execution"],
    implementation: ["Language: Python", "Environment: Ubuntu Linux", "Systems concepts: cache blocks, tags, sets, replacement policies"],
    impact: commonImpact,
  },
  {
    slug: "banking-system",
    title: "Banking System Simulation",
    date: "Mar 2022 - May 2022",
    subtitle: "Object-oriented C++ banking system with account workflows.",
    description:
      "Object-oriented C++ banking system with Bank, BankAccount, CheckingAccount, and SavingsAccount classes supporting account creation and transactions.",
    tags: ["C++", "OOP", "Banking Simulation", "Console App"],
    github: "https://github.com/SoojalKumar/banking-system-simulation",
    summary: "Banking System Simulation is a C++ console application that models bank accounts, transactions, and account-type behavior using object-oriented programming.",
    metrics: ["C++", "OOP Design", "Transactions", "Console UI"],
    problem: "A banking workflow provides a practical way to model inheritance, polymorphism, encapsulation, and user interaction in C++.",
    objectives: ["Create a banking domain model.", "Implement account creation and transactions.", "Use inheritance and polymorphism.", "Provide a clear console workflow."],
    methodology: ["Modeled account types as classes.", "Separated bank and account responsibilities.", "Built transaction flows through console interaction."],
    features: ["Bank class", "Checking and savings accounts", "Transactions", "Console interface"],
    implementation: ["Language: C++", "Concepts: OOP, inheritance, polymorphism, encapsulation"],
    impact: commonImpact,
  },
  {
    slug: "zerog-survival",
    title: "Zero-G Survival",
    date: "Oct 2023 - Dec 2023",
    subtitle: "Java resource-management survival game set in space.",
    description:
      "Java survival game where players manage oxygen and navigate asteroid hazards while trying to reach a space station.",
    tags: ["Java", "Eclipse", "Game Development", "Resource Management"],
    github: "https://github.com/SoojalKumar/final-project-misfits-public",
    summary: "Zero-G Survival is a Java game project where players manage oxygen, navigate hazards, and try to survive long enough to reach a space station.",
    metrics: ["Java", "Game Loop", "Oxygen Management", "Asteroid Hazards"],
    problem: "The game turns resource scarcity and movement hazards into a simple interactive survival challenge.",
    objectives: ["Build an interactive Java game.", "Model oxygen as a survival resource.", "Add navigation hazards.", "Create a clear objective."],
    methodology: ["Designed game states and survival mechanics.", "Implemented resource tracking.", "Connected player objective to hazard navigation."],
    features: ["Oxygen management", "Asteroid field", "Space station goal", "Survival gameplay"],
    implementation: ["Language: Java", "IDE: Eclipse", "Domain: game development and resource management"],
    impact: commonImpact,
  },
];

export const featuredProjectSlugs = ["campusstudy-ai", "cloud-api-service", "mips-cpu-simulator"];

export const skillGroups = [
  { title: "Programming Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "PHP", "HTML", "CSS", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI design"] },
  { title: "Backend", skills: ["FastAPI", "REST APIs", "SQLite", "API authentication", "Request validation", "Pagination", "Filtering"] },
  { title: "DevOps / Tools", skills: ["Docker", "Git", "GitHub", "GitHub Actions", "Linux", "Unix", "CI/CD basics"] },
  { title: "AI / Data", skills: ["Machine Learning", "NLP", "Naive Bayes", "Genetic Algorithms", "NumPy", "Matplotlib", "Data Visualization"] },
  { title: "Systems", skills: ["Computer Architecture", "MIPS Simulation", "Cache Simulation", "CLI tools", "Systems Programming"] },
];

export const softSkills = ["Leadership", "Teamwork", "Communication", "Problem Solving", "Adaptability", "Analytical Thinking", "Project Planning", "Student Mentorship", "Cross-cultural Collaboration"];

export const experience = [
  {
    role: "Operations Manager",
    organization: "Alaska Car & RV Rentals",
    date: "May 2025 - Sep 2025",
    location: "Anchorage, Alaska",
    bullets: [
      "Managed daily operations for car and RV rental workflows, including reservations, check-ins, check-outs, agreements, payments, and insurance coordination.",
      "Coordinated vehicle cleaning, inspections, maintenance, mileage tracking, damage reporting, and service history.",
      "Monitored fleet availability and utilization during busy seasons to improve operational efficiency.",
      "Served as a communication link between customers, staff, insurers, workshops, and management.",
      "Strengthened operations management, customer service, scheduling, and problem-solving skills.",
    ],
  },
  {
    role: "ASUOP Deputy Director of Diversity, Equity, and Inclusion",
    organization: "University of the Pacific",
    date: "Nov 2024 - May 2025",
    bullets: [
      "Supported ASUOP operations and helped ensure organizational values related to equity, inclusion, and student representation were upheld.",
      "Collaborated with campus equity organizations, student groups, and university stakeholders.",
      "Attended meetings, identified operational discrepancies, and proposed practical solutions.",
      "Strengthened leadership, communication, policy awareness, and student advocacy skills.",
    ],
  },
  {
    role: "Teaching Observation Partner",
    organization: "University of the Pacific",
    date: "Dec 2023 - May 2024",
    bullets: [
      "Collaborated with faculty to observe classroom dynamics and provide feedback on student engagement.",
      "Supported student-centered teaching improvements and equity-focused learning practices.",
      "Participated in collaborative discussions to refine teaching methods and classroom strategies.",
      "Developed analytical observation, communication, and education-support skills.",
    ],
  },
  {
    role: "Summer High School Institution Summer RA",
    organization: "University of the Pacific",
    date: "May 2023 - Jul 2023",
    bullets: ["Fostered community among students and guests.", "Provided peer mentoring and connected students to campus resources.", "Supported professionalism, safety, and student engagement during the summer program."],
  },
  {
    role: "DUC Guest Services",
    organization: "University of the Pacific",
    date: "Aug 2022 - Jun 2023",
    bullets: ["Supported daily operations at the DeRosa University Center.", "Coordinated events, ensured facility safety, and maintained high customer service standards.", "Handled administrative and programming support in a fast-paced campus environment."],
  },
  {
    role: "ASUOP One Word Photographer",
    organization: "University of the Pacific",
    date: "Oct 2021 - May 2023",
    bullets: ["Supported ASUOP events and student organizations through photography and editing.", "Completed photography work orders for RSOs and campus departments.", "Built creative, communication, and event documentation skills."],
  },
];

export const awards = ["Best Paper Award - IJAIBDCMS, Apr 2026", "Resident Assistant Grant - Jun 2024", "UOP International Academic Excellence Scholarship - Jan 2021"];

export const certifications = [
  "Foundations of Algorithmic Thinking with Python - LinkedIn, May 2026",
  "Getting Started as a Full-Stack Web Developer - LinkedIn, May 2026",
  "Docker Essentials: A Developer Introduction - IBM, Apr 2026",
  "AI Orchestration: Foundations - LinkedIn, Apr 2026",
  "Unix Essential Training - LinkedIn, Apr 2026",
  "Agentic AI Fundamentals: Architectures, Frameworks, and Applications - LinkedIn, Apr 2026",
  "Agentic AI and Autonomous Development - LinkedIn, Apr 2026",
  "Using Python for Automation - LinkedIn, Apr 2026",
  "Introduction to Linux - LinkedIn, Apr 2026",
  "Bachelor of Science in Computer Science - University of the Pacific, Dec 2025",
];

export const organizations = [
  {
    title: "Pledge of the Computing Professional",
    role: "Member",
    date: "Jan 2025 - Present",
    description: "Professional membership centered on ethical computing, responsibility, and public-minded technology practice.",
  },
  {
    title: "Pakistani Student Association",
    role: "President",
    date: "Oct 2022 - Dec 2025",
    description: "Led cultural programming, community building, stakeholder communication, and student engagement initiatives.",
  },
  {
    title: "Muslim Student Association",
    role: "Director of Internal Communication",
    date: "May 2022 - Oct 2022",
    description: "Supported internal coordination, event communication, and community-focused student organization operations.",
  },
];

export const coursework = ["Artificial Intelligence", "Data Structures", "Computer Systems & Networks", "Digital Design", "Discrete Math for Computer Science", "Intro Programming for Data Science", "Application Development"];
