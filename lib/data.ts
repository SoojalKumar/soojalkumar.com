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
  heroVisual: {
    title: string;
    items: string[];
  };
  workflow: string[];
  architecture: string[];
  technicalGroups: {
    title: string;
    items: string[];
  }[];
  visuals: {
    title: string;
    description: string;
    label?: "Screenshot" | "Output" | "Diagram" | "Workflow" | "Architecture" | "GIF" | "Asset";
    image?: string;
    alt?: string;
    source?: "Real project asset" | "Generated from project structure" | "Grounded diagram";
    variant: "dashboard" | "pipeline" | "terminal" | "diagram";
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  preview?: {
    title: string;
    language: "json" | "terminal" | "text";
    content: string;
  };
};

type ProjectBase = Omit<
  Project,
  "heroVisual" | "workflow" | "architecture" | "technicalGroups" | "visuals" | "challenges" | "preview"
>;

type ProjectCaseStudy = Pick<
  Project,
  "heroVisual" | "workflow" | "architecture" | "technicalGroups" | "visuals" | "challenges" | "preview"
>;

const commonImpact = [
  "Demonstrates practical software engineering through modular structure, readable workflows, and clear technical documentation.",
  "Shows ability to convert course and research concepts into working systems with real implementation constraints.",
];

const baseProjects: ProjectBase[] = [
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
    slug: "echowear",
    title: "EchoWear",
    date: "Aug 2025 - Dec 2025",
    subtitle: "Swift-based iOS/watchOS prototype for voice-driven wearable interaction.",
    description:
      "SwiftUI iOS/watchOS prototype combining speech recognition, microphone-driven listening, authentication, and a clean wearable-focused interface for experimenting with voice-driven interactions.",
    tags: ["Swift", "SwiftUI", "iOS", "watchOS", "Speech Recognition", "AVFoundation", "Keychain"],
    github: "https://github.com/SoojalKumar/EchoWear",
    summary:
      "EchoWear is a Swift-based iOS/watchOS prototype that explores wearable-first voice monitoring experiences. The project includes a modern SwiftUI sign-in flow, a voice monitor surface, configurable speech recognition behavior, microphone-driven listening through AVFoundation, and supporting structure for Apple Watch-related work.",
    metrics: ["SwiftUI App", "Speech Recognition", "Wearable-Focused UI", "iOS Simulator Ready"],
    problem:
      "Voice-driven mobile and wearable interactions need a simple interface, permission-aware microphone access, and clear feedback so users can experiment with hands-free workflows without complex touch navigation.",
    objectives: [
      "Build a clean SwiftUI iOS prototype.",
      "Explore speech recognition through Apple's Speech framework.",
      "Use AVFoundation for microphone-driven listening flows.",
      "Create a wearable-focused interface and watchOS-ready project structure.",
      "Support portfolio demos and continued prototyping in Xcode.",
    ],
    methodology: [
      "Designed a SwiftUI interface around sign-in and voice monitoring flows.",
      "Connected speech recognition behavior with microphone permissions and audio input.",
      "Organized the project with iOS, watchOS-related structure, assets, and future test folders.",
    ],
    features: [
      "SwiftUI sign-in interface",
      "Voice monitor surface",
      "Speech recognition support",
      "Microphone listening flow",
      "Keychain-based credential storage",
      "iOS simulator support",
    ],
    implementation: [
      "Language: Swift",
      "UI: SwiftUI",
      "Audio: AVFoundation",
      "Speech: Apple's Speech framework",
      "Security: Keychain services and CryptoKit",
      "Platform: iOS simulator with watchOS-related project structure",
    ],
    impact: [
      "Demonstrates mobile and wearable prototyping with native Apple frameworks.",
      "Shows ability to combine UI, authentication, permissions, speech recognition, and audio workflows in a practical app structure.",
    ],
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

const commonTechnicalGroups = {
  pythonSystems: [
    { title: "Language", items: ["Python", "Modular source structure", "Command-line workflows"] },
    { title: "Core Logic", items: ["Separated processing steps", "Traceable execution", "Reusable helper modules"] },
    { title: "Outputs", items: ["Readable console output", "Structured project artifacts", "Documentation-ready behavior"] },
  ],
};

const caseStudyDetails: Record<string, ProjectCaseStudy> = {
  "campusstudy-ai": {
    heroVisual: {
      title: "AI Study Platform Concept",
      items: ["Study Planner", "AI Assistant", "RAG Search", "Mobile App", "Background Workers"],
    },
    workflow: ["Student Uploads / Study Input", "RAG Retrieval", "AI Study Assistant", "Generated Study Output", "Saved Workflow"],
    architecture: ["Web App / Mobile App", "FastAPI Backend", "RAG Layer", "Worker Queue", "Study Data / Documents"],
    technicalGroups: [
      { title: "Frontend", items: ["TypeScript interface planning", "Web and mobile study flows", "Minimal academic dashboard patterns"] },
      { title: "Backend", items: ["FastAPI service layer", "Study workflow endpoints", "Structured backend responsibilities"] },
      { title: "AI Layer", items: ["RAG-style retrieval", "Context-aware study assistance", "Academic content grounding"] },
      { title: "Workers", items: ["Background processing", "Async study tasks", "Pipeline-ready architecture"] },
    ],
    visuals: [
      {
        title: "Study Dashboard Preview",
        description: "Grounded dashboard visual based on the real CampusStudy AI web/mobile routes for study planning, materials, AI assistance, and course context.",
        label: "Diagram",
        image: "/project-assets/campusstudy-ai/study-dashboard.svg",
        alt: "CampusStudy AI study dashboard visual",
        source: "Generated from project structure",
        variant: "dashboard",
      },
      {
        title: "RAG Retrieval Flow",
        description: "Workflow diagram based on the implemented retrieval, chunking, citation, and generation service structure in the CampusStudy AI backend.",
        label: "Workflow",
        image: "/project-assets/campusstudy-ai/rag-flow.svg",
        alt: "CampusStudy AI retrieval augmented generation workflow",
        source: "Generated from project structure",
        variant: "pipeline",
      },
      {
        title: "Background Worker Pipeline",
        description: "Architecture visual grounded in the FastAPI services and Celery worker tasks used for extraction, processing, and study output generation.",
        label: "Architecture",
        image: "/project-assets/campusstudy-ai/worker-pipeline.svg",
        alt: "CampusStudy AI FastAPI and worker pipeline",
        source: "Generated from project structure",
        variant: "diagram",
      },
    ],
    challenges: [
      {
        challenge: "Students often use disconnected tools for study planning, notes, and AI help.",
        solution: "Designed a unified academic platform concept with AI workflows and retrieval-based assistance.",
      },
      {
        challenge: "AI output needs context from course material to be useful in an academic workflow.",
        solution: "Structured the system around a RAG-style retrieval layer that connects responses with study content.",
      },
    ],
  },
  "cloud-api-service": {
    heroVisual: {
      title: "Production API Dashboard",
      items: ["GET /tasks", "POST /tasks", "Authenticated API", "Health Check: OK", "Dockerized Deployment"],
    },
    workflow: ["Client Request", "API Key Validation", "FastAPI Route", "Service Layer", "SQLite Database", "JSON Response"],
    architecture: ["React Dashboard", "FastAPI API", "Services / Repositories", "SQLite DB", "Docker Container", "GitHub Actions CI/CD"],
    technicalGroups: [
      { title: "Frontend", items: ["React dashboard", "TypeScript state handling", "Task create/update/delete flows"] },
      { title: "Backend", items: ["FastAPI routes", "Request validation", "Structured errors and health checks"] },
      { title: "Data", items: ["SQLite persistence", "Repository-style data access", "Filtering and pagination"] },
      { title: "DevOps", items: ["Docker containerization", "GitHub Actions CI/CD", "Public deployment workflow"] },
      { title: "Testing", items: ["pytest coverage", "API behavior checks", "Deployment readiness validation"] },
    ],
    visuals: [
      {
        title: "React Task Dashboard",
        description: "Actual screenshot from the Cloud-Based API Service frontend showing the task management dashboard used to create, update, filter, and delete tasks.",
        label: "Screenshot",
        image: "/project-assets/cloud-api-service/dashboard.png",
        alt: "Cloud-Based API Service task dashboard screenshot",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "API Response Preview",
        description: "Grounded request/response panel based on the task API's pagination, filtering, API-key authentication, and structured JSON response design.",
        label: "Output",
        image: "/project-assets/cloud-api-service/api-response.svg",
        alt: "Cloud API request and JSON response preview",
        source: "Generated from project structure",
        variant: "terminal",
      },
      {
        title: "Docker + CI/CD Flow",
        description: "Deployment workflow visual showing the React dashboard, FastAPI API, SQLite persistence, Docker packaging, and GitHub Actions validation path.",
        label: "Architecture",
        image: "/project-assets/cloud-api-service/cicd-flow.svg",
        alt: "Cloud API Docker and CI/CD workflow",
        source: "Generated from project structure",
        variant: "diagram",
      },
    ],
    challenges: [
      {
        challenge: "Basic CRUD APIs can look unfinished without validation, auth, persistence, and deployment practices.",
        solution: "Built a fuller API surface with API-key auth, validation, structured errors, pagination, Docker, and CI/CD.",
      },
      {
        challenge: "Frontend and backend need to stay aligned for task operations.",
        solution: "Paired the FastAPI service with a typed React dashboard for direct API interaction.",
      },
    ],
    preview: {
      title: "API Response Preview",
      language: "json",
      content: `GET /api/tasks?status=open&page=1\n\n{\n  "items": ["task objects"],\n  "page": 1,\n  "total": 24\n}`,
    },
  },
  echowear: {
    heroVisual: {
      title: "Voice-Driven Wearable Prototype",
      items: ["SwiftUI Sign In", "Voice Monitor", "Speech Recognition", "Microphone Flow", "watchOS Structure"],
    },
    workflow: ["User Opens App", "Authentication Flow", "Microphone Permission", "Speech Recognition", "Voice Monitor Feedback", "Future Wearable Actions"],
    architecture: ["SwiftUI App", "Authentication Manager", "Speech Recognizer", "AVFoundation Audio Input", "Keychain Storage", "watchOS Project Structure"],
    technicalGroups: [
      { title: "Mobile UI", items: ["SwiftUI screens", "Modern sign-in flow", "Wearable-focused visual style"] },
      { title: "Speech + Audio", items: ["Apple Speech framework", "Microphone listening flow", "AVFoundation audio input"] },
      { title: "Authentication", items: ["Demo Apple/email/password options", "Keychain credential storage", "CryptoKit password hashing"] },
      { title: "Platform", items: ["Xcode project", "iOS simulator support", "watchOS-related structure"] },
    ],
    visuals: [
      {
        title: "SwiftUI Sign-In Screen",
        description: "Actual EchoWear iOS screenshot from the project README showing the clean authentication entry point.",
        label: "Screenshot",
        image: "/project-assets/echowear/sign-in.png",
        alt: "EchoWear SwiftUI sign-in screenshot",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "EchoWear Home Surface",
        description: "Actual app screenshot showing the main EchoWear interface for the wearable-first voice monitoring prototype.",
        label: "Screenshot",
        image: "/project-assets/echowear/home.png",
        alt: "EchoWear home screen screenshot",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "Speech Recognition Screen",
        description: "Actual app screenshot of the speech recognition surface that connects microphone input with voice-driven interaction.",
        label: "Screenshot",
        image: "/project-assets/echowear/speech-recognition.png",
        alt: "EchoWear speech recognition screen screenshot",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "Voice Interaction Flow",
        description: "Grounded workflow visual showing how voice input moves through AVFoundation, Apple's Speech framework, and UI feedback.",
        label: "Workflow",
        image: "/project-assets/echowear/voice-flow.svg",
        alt: "EchoWear voice recognition interaction flow",
        source: "Generated from project structure",
        variant: "pipeline",
      },
    ],
    challenges: [
      {
        challenge: "Hands-free interactions require microphone access, speech permissions, and a clean UI state model.",
        solution: "Structured the prototype around permission-aware audio input, speech recognition, and a clear voice monitor surface.",
      },
      {
        challenge: "A wearable concept needs to stay simple while leaving room for deeper watchOS behavior.",
        solution: "Built the iOS prototype with watchOS-related project structure and modular Swift files for continued expansion.",
      },
    ],
    preview: {
      title: "Voice Flow Preview",
      language: "text",
      content: `Open EchoWear\nAuthorize microphone + speech recognition\nStart listening\nRecognized speech updates the voice monitor interface`,
    },
  },
  "mips-cpu-simulator": {
    heroVisual: {
      title: "CPU Pipeline Trace",
      items: ["Instruction Input", "Fetch", "Decode", "Execute", "Memory", "Writeback"],
    },
    workflow: ["Assembly Instruction", "Parser", "Control Unit", "ALU / Memory", "Register Update", "Execution Trace"],
    architecture: ["CLI Input", "CPU Engine", "Control Unit", "Register File", "Memory System", "Trace Output"],
    technicalGroups: [
      { title: "CPU Engine", items: ["Fetch/decode/execute flow", "Branch handling", "Cycle-by-cycle trace generation"] },
      { title: "Control Unit", items: ["Instruction interpretation", "Control signal structure", "Execution path selection"] },
      { title: "State Systems", items: ["Register file", "Memory model", "Write-back updates"] },
      { title: "Tools", items: ["Python", "CLI execution", "Trace-oriented debugging"] },
    ],
    visuals: [
      { title: "CPU Pipeline Diagram", description: "Grounded instruction path across fetch, decode, execute, memory, and writeback.", label: "Workflow", variant: "pipeline", source: "Grounded diagram" },
      { title: "Register File Preview", description: "Table-style panel for register state changes during instruction execution.", label: "Diagram", variant: "dashboard", source: "Grounded diagram" },
      { title: "Memory Table Preview", description: "Memory-state panel for load and store operations.", label: "Diagram", variant: "dashboard", source: "Grounded diagram" },
      { title: "Cycle Trace Terminal", description: "Terminal-style preview of instruction execution across cycles.", label: "Output", variant: "terminal", source: "Grounded diagram" },
    ],
    challenges: [
      {
        challenge: "CPU execution is hard to understand when register and memory changes are hidden.",
        solution: "Generated cycle-by-cycle traces that expose instruction flow and state updates.",
      },
      {
        challenge: "Assignment implementations can become fragmented across CPU responsibilities.",
        solution: "Refactored into a modular CPU engine, control unit, register file, and memory system.",
      },
    ],
    preview: {
      title: "Cycle Trace Preview",
      language: "terminal",
      content: `cycle 01: fetch addi $t0, $zero, 5\ncycle 02: decode opcode=addi\ncycle 03: execute ALU result=5\ncycle 04: writeback $t0=5`,
    },
  },
  "genai-optimization": {
    heroVisual: {
      title: "Evolution Loop",
      items: ["Initial Population", "Fitness Evaluation", "Selection", "Crossover", "Mutation", "Best Strategy"],
    },
    workflow: ["Historical Data", "Candidate Strategies", "Fitness Scoring", "Genetic Operators", "Best Strategy", "Test Evaluation"],
    architecture: ["CLI Config", "GA Engine", "Fitness Function", "Experiment Runner", "JSON Summary + Plots"],
    technicalGroups: [
      { title: "Algorithm", items: ["Selection", "Crossover", "Mutation", "Elitism"] },
      { title: "Experimentation", items: ["Configurable CLI", "Training/testing workflows", "Repeatable parameter tuning"] },
      { title: "Data + Output", items: ["Historical financial data", "JSON summaries", "Fitness progression plots"] },
      { title: "Tools", items: ["Python", "NumPy", "Matplotlib"] },
    ],
    visuals: [
      {
        title: "Fitness Progress Plot",
        description: "Actual output plot from the GenAI project showing optimization progress across generations.",
        label: "Output",
        image: "/project-assets/genai-optimization/fitness-progress.png",
        alt: "GenAI genetic algorithm fitness progress plot",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "Strategy Evolution Pipeline",
        description: "Grounded pipeline diagram for the implemented population, fitness scoring, selection, crossover, mutation, and best-strategy workflow.",
        label: "Workflow",
        image: "/project-assets/genai-optimization/evolution-pipeline.svg",
        alt: "Genetic algorithm evolution pipeline",
        source: "Generated from project structure",
        variant: "pipeline",
      },
      {
        title: "JSON Summary Output",
        description: "Structured experiment summary visual based on the project's generated run_summary.json output artifact.",
        label: "Output",
        image: "/project-assets/genai-optimization/json-summary.svg",
        alt: "GenAI run summary JSON visual",
        source: "Generated from project structure",
        variant: "terminal",
      },
    ],
    challenges: [
      {
        challenge: "Large strategy spaces are difficult to search manually.",
        solution: "Used a genetic algorithm loop to evolve candidate strategies through repeated scoring and variation.",
      },
      {
        challenge: "Optimization experiments need visibility into parameter choices and outcomes.",
        solution: "Added CLI configuration, JSON summaries, and fitness progression visualizations.",
      },
    ],
    preview: {
      title: "Experiment Config Preview",
      language: "json",
      content: `{\n  "population_size": 100,\n  "mutation_rate": 0.05,\n  "generations": 50,\n  "best_fitness": "..."\n}`,
    },
  },
  "orbit-simulator": {
    heroVisual: {
      title: "Orbit Visualization",
      items: ["Central Star", "Elliptical Path", "Planet Config", "Kepler Solver", "Static / GIF Output"],
    },
    workflow: ["Planet Config", "Kepler Equation Solver", "Position Calculation", "Orbit Rendering", "Static / GIF Output"],
    architecture: ["JSON / Input", "Simulation Engine", "Numerical Solver", "Matplotlib Renderer", "Image / GIF Export"],
    technicalGroups: [
      { title: "Simulation", items: ["Kepler-based motion", "Elliptical orbit modeling", "Position calculation over time"] },
      { title: "Configuration", items: ["Demo mode", "Interactive input", "JSON planetary systems"] },
      { title: "Visualization", items: ["Static snapshots", "Animated GIF output", "Matplotlib rendering"] },
      { title: "Tools", items: ["Python", "NumPy", "Matplotlib"] },
    ],
    visuals: [
      {
        title: "Orbit Snapshot",
        description: "Actual static image generated by the Orbit Simulator project using its Matplotlib rendering workflow.",
        label: "Output",
        image: "/project-assets/orbit-simulator/orbits.png",
        alt: "Orbit Simulator generated orbit snapshot",
        source: "Real project asset",
        variant: "diagram",
      },
      {
        title: "Animated Orbit Output",
        description: "Actual animated GIF output generated by the simulator to show orbital motion over time.",
        label: "GIF",
        image: "/project-assets/orbit-simulator/orbits.gif",
        alt: "Orbit Simulator animated orbit GIF",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "Planet Configuration Panel",
        description: "Grounded configuration visual based on the project's JSON-driven planetary system input and Kepler solver workflow.",
        label: "Output",
        image: "/project-assets/orbit-simulator/config-panel.svg",
        alt: "Orbit Simulator JSON configuration panel",
        source: "Generated from project structure",
        variant: "terminal",
      },
    ],
    challenges: [
      {
        challenge: "Orbital equations are abstract without visual feedback.",
        solution: "Converted Kepler-based calculations into static and animated visual outputs.",
      },
      {
        challenge: "A useful simulator should support more than one hardcoded demo.",
        solution: "Added interactive and JSON configuration modes for custom systems.",
      },
    ],
  },
  "sentiment-analysis": {
    heroVisual: {
      title: "NLP Classification Pipeline",
      items: ["Raw Review", "Preprocessing", "Tokenization", "Naive Bayes", "Positive / Negative"],
    },
    workflow: ["Dataset", "Cleaning", "Tokenization", "Word Frequency Training", "Log Probability Scoring", "Sentiment Prediction"],
    architecture: ["Text Input", "Preprocessor", "Feature Extractor", "Naive Bayes Classifier", "Prediction Output"],
    technicalGroups: [
      { title: "Preprocessing", items: ["Lowercasing", "Punctuation removal", "Tokenization"] },
      { title: "Model", items: ["Word frequency distributions", "Laplace smoothing", "Log-probability scoring"] },
      { title: "Workflow", items: ["Configurable datasets", "CLI execution", "Positive/negative classification"] },
      { title: "Tools", items: ["Python", "NLP fundamentals", "Probabilistic modeling"] },
    ],
    visuals: [
      {
        title: "NLP Pipeline Diagram",
        description: "Grounded pipeline visual showing the implemented preprocessing, tokenization, Naive Bayes scoring, smoothing, and sentiment prediction flow.",
        label: "Workflow",
        image: "/project-assets/sentiment-analysis/nlp-pipeline.svg",
        alt: "Sentiment Analysis Naive Bayes NLP pipeline",
        source: "Generated from project structure",
        variant: "pipeline",
      },
      {
        title: "Classification Output Example",
        description: "Grounded output card based on the project's review classification workflow and probability-scoring approach.",
        label: "Output",
        image: "/project-assets/sentiment-analysis/classification-output.svg",
        alt: "Sentiment Analysis classification output example",
        source: "Generated from project structure",
        variant: "terminal",
      },
    ],
    challenges: [
      {
        challenge: "Raw text is noisy and cannot be modeled directly.",
        solution: "Built a preprocessing pipeline for lowercasing, punctuation removal, and tokenization.",
      },
      {
        challenge: "Unseen words can break simple probability estimates.",
        solution: "Used Laplace smoothing and log-probability scoring for more stable classification.",
      },
    ],
    preview: {
      title: "Classification Preview",
      language: "text",
      content: `Input:\n"The movie was surprisingly emotional and well acted."\n\nPrediction:\nPositive Review`,
    },
  },
  "cache-simulator": {
    heroVisual: {
      title: "Memory Hierarchy",
      items: ["CPU", "Cache", "Main Memory", "Tag / Index / Offset", "Hit / Miss"],
    },
    workflow: ["Memory Address", "Tag / Index / Offset Parsing", "Cache Lookup", "Hit / Miss Decision", "LRU Update"],
    architecture: ["CLI Args", "Cache Config", "Address Parser", "Cache Engine", "Statistics Output"],
    technicalGroups: [
      { title: "Cache Models", items: ["Direct-mapped cache", "Set-associative cache", "Configurable cache parameters"] },
      { title: "Address Logic", items: ["Tag extraction", "Index calculation", "Offset parsing"] },
      { title: "Replacement", items: ["LRU behavior", "Hit/miss tracking", "State updates"] },
      { title: "Tools", items: ["Python", "Ubuntu Linux", "CLI configuration"] },
    ],
    visuals: [
      {
        title: "Cache Hit / Miss Table",
        description: "Grounded systems output panel showing address parsing, set lookup, tag comparison, and hit/miss decisions.",
        label: "Output",
        image: "/project-assets/cache-simulator/cache-table.svg",
        alt: "Cache Simulator hit miss table",
        source: "Generated from project structure",
        variant: "dashboard",
      },
      {
        title: "Address Breakdown Panel",
        description: "Tag, index, and offset visual based on the cache simulator's memory-address parsing responsibilities.",
        label: "Diagram",
        image: "/project-assets/cache-simulator/address-breakdown.svg",
        alt: "Cache Simulator address breakdown diagram",
        source: "Generated from project structure",
        variant: "diagram",
      },
    ],
    challenges: [
      {
        challenge: "Cache mapping behavior can be difficult to inspect from theory alone.",
        solution: "Created traceable hit/miss decisions from configurable memory accesses.",
      },
      {
        challenge: "Set-associative caches need replacement policy behavior.",
        solution: "Implemented LRU tracking to update cache state across accesses.",
      },
    ],
    preview: {
      title: "Access Trace Preview",
      language: "terminal",
      content: `access 0x1A3F -> set=3 tag=0x68 -> HIT\naccess 0x2B41 -> set=1 tag=0xAD -> MISS`,
    },
  },
  "banking-system": {
    heroVisual: {
      title: "OOP Class Design",
      items: ["Bank", "BankAccount", "CheckingAccount", "SavingsAccount", "Transactions"],
    },
    workflow: ["User Input", "Bank Controller", "Account Object", "Transaction Logic", "Updated Balance"],
    architecture: ["Console UI", "Bank Class", "Account Classes", "Transaction Methods", "Output"],
    technicalGroups: [
      { title: "Classes", items: ["Bank", "BankAccount", "CheckingAccount", "SavingsAccount"] },
      { title: "OOP Concepts", items: ["Inheritance", "Polymorphism", "Encapsulation"] },
      { title: "Operations", items: ["Account creation", "Deposits and withdrawals", "Balance updates"] },
      { title: "Interface", items: ["Console menu", "User input handling", "Readable output"] },
    ],
    visuals: [
      {
        title: "OOP Class Diagram",
        description: "Grounded class diagram showing the Bank, BankAccount, CheckingAccount, and SavingsAccount relationship used in the C++ project.",
        label: "Diagram",
        image: "/project-assets/banking-system/class-diagram.svg",
        alt: "Banking System Simulation C++ class diagram",
        source: "Generated from project structure",
        variant: "diagram",
      },
      {
        title: "Transaction Console Flow",
        description: "Grounded console output preview based on the account creation, deposit, withdrawal, and balance update workflow.",
        label: "Output",
        image: "/project-assets/banking-system/transaction-flow.svg",
        alt: "Banking System transaction console flow",
        source: "Generated from project structure",
        variant: "terminal",
      },
    ],
    challenges: [
      {
        challenge: "Early software projects can become procedural without clear domain modeling.",
        solution: "Modeled banking behavior with dedicated classes and account-type inheritance.",
      },
      {
        challenge: "Account workflows need user-friendly state changes.",
        solution: "Built console interactions for account creation, transactions, and updated balances.",
      },
    ],
    preview: {
      title: "Transaction Preview",
      language: "terminal",
      content: `create CheckingAccount #1024\ndeposit 250.00\nwithdraw 40.00\nbalance -> 210.00`,
    },
  },
  "zerog-survival": {
    heroVisual: {
      title: "Game Loop",
      items: ["Player Input", "Movement", "Oxygen Update", "Asteroid Collision", "Win / Lose State"],
    },
    workflow: ["Player Action", "Game State Update", "Oxygen / Hazard Check", "Progress Calculation", "Outcome"],
    architecture: ["Game Loop", "Player System", "Hazard System", "Resource System", "UI / Output"],
    technicalGroups: [
      { title: "Game Systems", items: ["Game loop", "Player movement", "Win/lose state checks"] },
      { title: "Resource Mechanics", items: ["Oxygen tracking", "Survival pressure", "Progress toward objective"] },
      { title: "Hazards", items: ["Asteroid navigation", "Collision challenges", "Risk/reward movement"] },
      { title: "Tools", items: ["Java", "Eclipse", "Interactive game project"] },
    ],
    visuals: [
      {
        title: "Gameplay Scene",
        description: "Scene visual composed from real Zero-G Survival project assets, including the astronaut and meteor sprites.",
        label: "Asset",
        image: "/project-assets/zerog-survival/gameplay-scene.svg",
        alt: "Zero-G Survival gameplay scene using real project sprites",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "Space Background Asset",
        description: "Actual space background asset from the Java game project.",
        label: "Asset",
        image: "/project-assets/zerog-survival/space-background.png",
        alt: "Zero-G Survival space background asset",
        source: "Real project asset",
        variant: "dashboard",
      },
      {
        title: "Survival Game Loop",
        description: "Grounded loop diagram showing how movement, oxygen depletion, hazards, progress, and win/lose state checks connect.",
        label: "Workflow",
        image: "/project-assets/zerog-survival/survival-loop.svg",
        alt: "Zero-G Survival game loop diagram",
        source: "Generated from project structure",
        variant: "pipeline",
      },
    ],
    challenges: [
      {
        challenge: "A small game needs a clear tension loop to feel engaging.",
        solution: "Used oxygen depletion and asteroid hazards to create resource-management pressure.",
      },
      {
        challenge: "Players need a simple objective that makes the mechanics meaningful.",
        solution: "Centered the experience on reaching a space station while surviving limited oxygen.",
      },
    ],
  },
};

export const projects: Project[] = baseProjects.map((project) => ({
  ...project,
  ...(caseStudyDetails[project.slug] ?? {
    heroVisual: { title: "Project Overview", items: project.metrics },
    workflow: project.objectives,
    architecture: project.methodology,
    technicalGroups: commonTechnicalGroups.pythonSystems,
    visuals: [],
    challenges: [],
  }),
}));

export const featuredProjectSlugs = ["campusstudy-ai", "cloud-api-service", "echowear"];

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

export const researchPublications = [
  {
    slug: "explainable-ai-intrusion-detection",
    route: "/research/explainable-ai-intrusion-detection",
    title: "Explainable AI for Intrusion Detection Systems: Enhancing Trust, Transparency, and Real-Time Threat Response",
    author: "Soojal Kumar",
    journal: "International Journal of AI, Big Data, Computational and Management Studies",
    publisher: "Noble Scholar Research Group",
    volume: "7",
    issue: "2",
    pages: "115-123",
    year: "2026",
    issn: "3050-9416",
    doi: "https://doi.org/10.63282/3050-9416.IJAIBDCMS-V7I2P119",
    doiLabel: "10.63282/3050-9416.IJAIBDCMS-V7I2P119",
    received: "02/03/2026",
    revised: "06/04/2026",
    accepted: "14/04/2026",
    published: "21/04/2026",
    publishedLabel: "Apr 21, 2026",
    tags: ["XAI", "Intrusion Detection", "Cybersecurity", "Machine Learning", "SHAP", "LIME"],
    keywords: [
      "Explainable Artificial Intelligence",
      "Intrusion Detection Systems",
      "Cybersecurity",
      "Machine Learning",
      "Transparency",
      "Trust",
      "Real-Time Threat Detection",
    ],
    abstractPreview:
      "A real-time explainable intrusion detection framework combining Random Forest and Deep Neural Network models with SHAP and LIME explanations to improve transparency, trust, and analyst usability.",
    abstract: [
      "The growing sophistication of cyber threats has exposed the limitations of conventional intrusion detection systems that depend on static signatures and rule-based detection. Although machine learning has improved the ability to identify malicious traffic patterns, many high-performing models remain difficult to interpret, reducing trust and limiting operational adoption. This study develops and evaluates a real-time explainable intrusion detection framework that combines predictive accuracy with transparent decision support.",
      "Using the NSL-KDD and CICIDS2017 benchmark datasets, the study implemented Random Forest and Deep Neural Network models under a stratified training, validation, and testing protocol with repeated experimental runs. Data preprocessing included normalization, feature engineering, imbalance correction, and hyperparameter optimization. Explainability was integrated through SHAP and LIME to generate both global and case-specific interpretations of model predictions.",
      "The results show that both models achieved strong classification performance, while the Deep Neural Network produced higher recall and ROC-AUC under more complex traffic conditions. Random Forest delivered lower inference latency and competitive precision. The inclusion of explainability introduced only modest processing overhead while significantly improving interpretability, alert transparency, and analyst usability.",
      "The study contributes a unified evaluation of predictive performance, explanation quality, and real-time response efficiency, supported by a deployment-oriented framework for practical security environments. The findings indicate that effective intrusion detection systems should be judged not only by accuracy, but also by how clearly and rapidly they support human decision-making.",
    ],
  },
];

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
