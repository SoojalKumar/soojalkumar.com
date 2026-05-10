"use client";

import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { MessageCircle, Send, Sparkles, Trash2, X } from "lucide-react";
import { awards, certifications, experience, profile, projects, researchPublications } from "@/lib/data";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const welcomeMessage =
  "Hi, I'm Soojal's portfolio assistant. Ask me about his projects, skills, experience, resume, or contact information.";

const fallbackAnswer =
  "I can help with Soojal's projects, skills, experience, resume, research, and contact information. Try asking: 'What projects has Soojal built?' or visit [Projects](/projects).";

const projectAliases: Record<string, string[]> = {
  "hydra-h2o": ["hydra", "h2o", "projecth2o", "project h2o", "water intelligence", "water platform", "water hackathon", "h2o hackathon"],
  "campusstudy-ai": ["campusstudy", "campus study", "campis study", "campus ai", "study ai", "university study app", "ai study app", "rag", "study platform"],
  "cloud-api-service": ["cloud api", "cloud based api", "api service", "task api", "fastapi project", "cloud", "fastapi", "docker"],
  echowear: ["echowear", "echo wear", "voice app", "wearable app", "speech recognition", "speech", "wake", "haptic"],
  "mips-cpu-simulator": ["mips", "cpu", "instruction", "architecture", "branch"],
  "genai-optimization": ["gen ai", "genai", "genetic algorithm", "optimization engine", "genetic", "optimization", "fitness", "trading"],
  "orbit-simulator": ["orbit", "orbit simulator", "planet simulator", "kepler", "planet", "simulation"],
  "sentiment-analysis": ["sentiment", "naive bayes", "movie review classifier", "nlp", "movie review"],
  "cache-simulator": ["cache", "cache simulator", "lru", "memory", "hit", "miss"],
  "banking-system": ["banking", "bank project", "bank", "oop", "c++"],
  "zerog-survival": ["zero g", "zero-g", "zerog", "space game", "survival", "game", "oxygen", "asteroid"],
};

const projectLinkBySlug: Record<string, string> = {
  "hydra-h2o": "/projects/hydra-h2o",
  "campusstudy-ai": "/projects/campusstudy-ai",
  "cloud-api-service": "/projects/cloud-api-service",
  echowear: "/projects/echowear",
  "mips-cpu-simulator": "/projects/mips-cpu-simulator",
  "genai-optimization": "/projects/genai-optimization",
  "orbit-simulator": "/projects/orbit-simulator",
  "sentiment-analysis": "/projects/sentiment-analysis",
  "cache-simulator": "/projects/cache-simulator",
  "banking-system": "/projects/banking-system",
  "zerog-survival": "/projects/zerog-survival",
};

const technicalSkills =
  "Soojal's technical skills include Python, TypeScript, JavaScript, React, Next.js, FastAPI, REST APIs, SQLite, Docker, Git, GitHub Actions, Linux, Unix, machine learning, NLP, genetic algorithms, NumPy, Matplotlib, computer architecture, CLI tools, and systems programming.";

const researchPaper = researchPublications[0];

const allowedInternalLinks = new Set([
  "/",
  "/about",
  "/projects",
  "/projects/hydra-h2o",
  "/projects/campusstudy-ai",
  "/projects/campusstudy-ai#interactive-demo",
  "/projects/cloud-api-service",
  "/projects/echowear",
  "/projects/echowear#interactive-demo",
  "/projects/mips-cpu-simulator",
  "/projects/genai-optimization",
  "/projects/genai-optimization#interactive-demo",
  "/projects/orbit-simulator",
  "/projects/orbit-simulator#interactive-demo",
  "/projects/sentiment-analysis",
  "/projects/sentiment-analysis#interactive-demo",
  "/projects/cache-simulator",
  "/projects/cache-simulator#interactive-demo",
  "/projects/banking-system",
  "/projects/banking-system#interactive-demo",
  "/projects/zerog-survival",
  "/projects/zerog-survival#interactive-demo",
  "/projects/mips-cpu-simulator#interactive-demo",
  "/experience",
  "/research",
  "/research/explainable-ai-intrusion-detection",
  "/resume",
  "/contact",
]);

const allowedExternalLinks = new Set([
  "https://doi.org/10.63282/3050-9416.IJAIBDCMS-V7I2P119",
  "https://project-h2-o.vercel.app/",
  "https://project-h2-o.vercel.app",
  "https://github.com/SoojalKumar/projectH2O",
  "https://project-h2-o.vercel.app/api/docs",
  "https://skvidhani-cloud-api-service.hf.space/",
  "https://skvidhani-cloud-api-service.hf.space",
  "https://skvidhani-cloud-api-service.hf.space/docs",
]);

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/\bwaht\b/g, "what")
    .replace(/\bcampis\b/g, "campus")
    .replace(/\bprojcts\b/g, "projects")
    .replace(/\bskils\b/g, "skills")
    .replace(/\bcontect\b/g, "contact")
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const includesAny = (text: string, terms: string[]) => terms.some((term) => text.includes(term));

const intentAliases = {
  skills: ["skills", "technical skills", "tech stack", "kya skills", "skills kya", "kis cheez mein skilled", "programming languages"],
  contact: ["contact", "email", "connect", "rabta", "contact kaise", "how can i contact", "contact kaise karun"],
  resume: ["resume", "cv", "download resume", "resume kaha hai", "cv kaha hai"],
  projects: ["projects", "project", "kaam", "kya banaya", "what has he built", "portfolio projects", "soojal ke projects", "projects kya"],
  research: ["research", "paper", "best paper", "xai", "intrusion detection", "ids", "cybersecurity paper", "research paper batao"],
  demos: ["demo", "demos", "live demo", "live demos", "show demo", "open demo", "which projects have live demos", "kaunse demo", "demo links"],
};

const projectListAnswer = () => {
  const highlighted = projects
    .filter((project) =>
      [
        "campusstudy-ai",
        "hydra-h2o",
        "cloud-api-service",
        "echowear",
        "genai-optimization",
        "orbit-simulator",
        "sentiment-analysis",
        "cache-simulator",
        "banking-system",
        "zerog-survival",
      ].includes(project.slug)
    )
    .map((project) => `- [${project.title}](${projectLinkBySlug[project.slug] ?? "/projects"}): ${project.description}`)
    .join("\n");

  return `Soojal has built projects across AI, backend APIs, mobile/wearable interaction, optimization, simulation, NLP, and systems programming.\n\n${highlighted}\n\nYou can explore them here: [Projects](/projects).`;
};

const getProjectAnswer = (question: string) => {
  const match = projects.find((project) => includesAny(question, [project.title.toLowerCase(), project.slug, ...(projectAliases[project.slug] ?? [])]));
  if (!match) return null;

  const description =
    match.slug === "mips-cpu-simulator"
      ? "MIPS CPU Simulator is a Python-based simulator that models fetch, decode, execute, register updates, memory access, branch handling, and cycle-by-cycle execution tracing for MIPS-like instructions."
      : match.description;
  const link = projectLinkBySlug[match.slug] ?? "/projects";

  const hydraLinks =
    match.slug === "hydra-h2o"
      ? "\n\nLinks: [Hydra project page](/projects/hydra-h2o), [Live demo](https://project-h2-o.vercel.app/), [GitHub](https://github.com/SoojalKumar/projectH2O), [API docs](https://project-h2-o.vercel.app/api/docs)."
      : `\n\nRead more: [${match.title}](${link}).${match.liveDemo ? `\n\nDemo status: ${match.demoStatus ?? "Demo available"}. Open: [${match.demoLabel ?? "Demo"}](${match.liveDemo}).` : ""}`;

  return `What it is: ${description}\n\nWhat Soojal built: ${match.features.slice(0, 5).join(", ")}.\n\nTechnologies used: ${match.tags.join(", ")}.\n\nWhat it demonstrates: ${match.impact.join(" ")}${hydraLinks}`;
};

const getDemoAnswer = () => {
  const live = projects.filter((project) => project.demoStatus === "Live deployed app");
  const portfolio = projects.filter((project) => project.demoStatus && project.demoStatus !== "Live deployed app");
  const liveText = live.map((project) => `- ${project.title}: [${project.demoLabel ?? "Live Demo"}](${project.liveDemo})`).join("\n");
  const portfolioText = portfolio
    .map((project) => `- ${project.title}: ${project.demoStatus} - [${project.demoLabel ?? "Demo"}](${project.liveDemo})`)
    .join("\n");

  return `Live deployed apps:\n${liveText}\n\nPortfolio-hosted demos and showcases:\n${portfolioText}\n\nI label sample traces and showcases honestly, so they are not presented as production deployments.`;
};

const getAssistantAnswer = (rawQuestion: string) => {
  const question = normalize(rawQuestion);
  const projectAnswer = getProjectAnswer(question);

  if (includesAny(question, ["who is", "about soojal", "soojal kumar", "background", "summary"])) {
    return "Soojal Kumar is a Computer Science graduate from the University of the Pacific with experience in software engineering, AI, optimization, simulation, backend development, cloud APIs, cybersecurity-aware applications, and systems programming.";
  }

  if (includesAny(question, [...intentAliases.skills, "technology", "programming", "language", "framework"])) {
    return technicalSkills;
  }

  if (includesAny(question, ["education", "university", "degree", "school", "college", "pacific"])) {
    return `${profile.education}. Expected / issued: ${profile.graduation}. Relevant strengths include AI, data structures, computer systems, networks, application development, and systems-oriented software engineering.`;
  }

  if (includesAny(question, intentAliases.demos)) {
    return projectAnswer ?? getDemoAnswer();
  }

  if (includesAny(question, [...intentAliases.projects, "portfolio", "built", "github"])) {
    return projectAnswer ?? projectListAnswer();
  }

  if (projectAnswer) {
    return projectAnswer;
  }

  if (includesAny(question, ["experience", "work", "intern", "operations", "job", "manager", "asoup", "asuop", "teaching"])) {
    const roles = experience
      .slice(0, 4)
      .map((item) => `- ${item.role}, ${item.organization} (${item.date})`)
      .join("\n");
    return `Soojal's experience includes operations, student leadership, teaching support, and campus service roles:\n\n${roles}\n\nHis work experience shows leadership, communication, operations management, analytical observation, and problem-solving.`;
  }

  if (includesAny(question, [...intentAliases.research, "award", "publication", "intrusion", "cybersecurity", "doi", "shap", "lime"])) {
    return `Soojal received a Best Paper Award for "${researchPaper.title}."\n\nJournal: ${researchPaper.journal}\nYear: ${researchPaper.year}\nDOI: ${researchPaper.doi}\n\nSummary: ${researchPaper.abstractPreview}\n\nRead more: [Research paper](${researchPaper.route}).\n\nHonors include: ${awards.join("; ")}.`;
  }

  if (includesAny(question, ["certification", "certificate", "license", "docker", "linux", "unix"])) {
    return `Selected certifications include ${certifications.slice(0, 6).join("; ")}. You can see the full list here: /research`;
  }

  if (includesAny(question, intentAliases.resume)) {
    return "Soojal's resume is available on the Resume page and can be downloaded there. View it here: [Resume](/resume).";
  }

  if (includesAny(question, [...intentAliases.contact, "linkedin", "hire", "reach"])) {
    return `You can contact Soojal at ${profile.email}. The Contact page also includes a message form and links to his public profiles.\n\nView it here: [Contact](/contact).\n\nNo phone number is listed on the public portfolio.`;
  }

  if (includesAny(question, ["location", "based", "where"])) {
    return `Soojal is based in ${profile.location}.`;
  }

  return fallbackAnswer;
};

const createSafeLink = (href: string, label: string, key: string) => {
  const isInternal = allowedInternalLinks.has(href);
  const isAllowedExternal = allowedExternalLinks.has(href);

  if (!isInternal && !isAllowedExternal) {
    return label;
  }

  return (
    <a
      key={key}
      href={href}
      target={isAllowedExternal ? "_blank" : undefined}
      rel={isAllowedExternal ? "noreferrer" : undefined}
      className="font-semibold text-accent underline decoration-cyan-300 underline-offset-4 transition hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-cyan-200"
    >
      {label}
    </a>
  );
};

const renderPlainRoutes = (text: string, keyPrefix: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  const routePattern = /(^|[\s(])(\/|(?:\/[a-z0-9_-]+)+(?:#[a-z0-9_-]+)?\/?)(?=[\s).,!?:;]|$)/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = routePattern.exec(text))) {
    const leading = match[1] ?? "";
    const route = match[2];
    const routeStart = match.index + leading.length;

    if (routeStart > lastIndex) {
      nodes.push(text.slice(lastIndex, routeStart));
    }

    nodes.push(createSafeLink(route, route, `${keyPrefix}-route-${routeStart}`));
    lastIndex = routeStart + route.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderInlineLinks = (text: string, keyPrefix: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  const markdownPattern = /\[([^\]]+)\]\((\/|\/[a-z0-9_/-]+(?:#[a-z0-9_-]+)?|https?:\/\/[^)\s]+)\)/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = markdownPattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(...renderPlainRoutes(text.slice(lastIndex, match.index), `${keyPrefix}-plain-${lastIndex}`));
    }

    nodes.push(createSafeLink(match[2], match[1], `${keyPrefix}-md-${match.index}`));
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(...renderPlainRoutes(text.slice(lastIndex), `${keyPrefix}-plain-${lastIndex}`));
  }

  return nodes;
};

const renderMessageContent = (content: string) =>
  content.split("\n").map((line, index, lines) => (
    <span key={`line-${index}`}>
      {renderInlineLinks(line, `line-${index}`)}
      {index < lines.length - 1 && <br />}
    </span>
  ));

const PortfolioChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 1, role: "assistant", content: welcomeMessage }]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  const quickPrompts = useMemo(
    () => [
      "What projects has Soojal built?",
      "Tell me about EchoWear",
      "What is CampusStudy AI?",
      "What are Soojal's technical skills?",
      "Tell me about Soojal's research paper",
      "How can I contact Soojal?",
    ],
    []
  );

  useEffect(() => {
    if (open) scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const askAssistant = async (question: string) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: question }),
    });

    if (!response.ok) {
      throw new Error("Chat API failed");
    }

    const data = (await response.json()) as { reply?: string };
    const reply = data.reply?.trim();

    if (!reply) {
      throw new Error("Chat API returned an empty reply");
    }

    return reply;
  };

  const addUserQuestion = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = { id: nextId.current++, role: "user", content: trimmed };
    const assistantMessageId = nextId.current++;

    setMessages((current) => [
      ...current,
      userMessage,
      { id: assistantMessageId, role: "assistant", content: "Thinking..." },
    ]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askAssistant(trimmed);
      setMessages((current) =>
        current.map((message) => (message.id === assistantMessageId ? { ...message, content: reply } : message))
      );
    } catch {
      const fallbackReply = `${getAssistantAnswer(trimmed)}\n\nAnswered from Soojal's verified portfolio knowledge base.`;
      setMessages((current) =>
        current.map((message) => (message.id === assistantMessageId ? { ...message, content: fallbackReply } : message))
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void addUserQuestion(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void addUserQuestion(input);
    }
  };

  const clearChat = () => {
    nextId.current = 2;
    setMessages([{ id: 1, role: "assistant", content: welcomeMessage }]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <section className="mb-4 flex max-h-[calc(100vh-7rem)] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-[410px]">
          <header className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30">
                <Sparkles size={18} />
              </div>
              <div>
                <h2 className="font-bold">Soojal Assistant</h2>
                <p className="text-xs text-slate-300">Portfolio information only</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-slate-50 px-4 py-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[86%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                      message.role === "user"
                        ? "rounded-br-md bg-navy text-white"
                        : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {renderMessageContent(message.content)}
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => void addUserQuestion(prompt)}
                  disabled={loading}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-accent hover:text-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                placeholder="Ask about projects, skills, resume..."
                disabled={loading}
                className="min-h-12 flex-1 resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-4 focus:ring-cyan-100"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
              <p>This assistant answers from portfolio information.</p>
              <button
                type="button"
                onClick={clearChat}
                className="inline-flex items-center gap-1 font-semibold text-slate-500 transition hover:text-accent"
              >
                <Trash2 size={13} /> Clear chat
              </button>
            </div>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-2xl ring-4 ring-cyan-100 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-cyan-200"
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default PortfolioChatbot;
