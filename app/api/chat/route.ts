import { NextResponse } from "next/server";
import { awards, certifications, experience, organizations, profile, projects, researchPublications, socialLinks } from "@/lib/data";

export const runtime = "nodejs";

const PROVIDER = "groq";
const MODEL = "llama-3.1-8b-instant";
const ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

const allowedLinks = [
  "Home: /",
  "About: /about",
  "Projects page: /projects",
  "Hydra H2O: /projects/hydra-h2o",
  "EchoWear: /projects/echowear",
  "Cloud-Based API Service: /projects/cloud-api-service",
  "CampusStudy AI: /projects/campusstudy-ai",
  "MIPS CPU Simulator: /projects/mips-cpu-simulator",
  "GenAI Optimization: /projects/genai-optimization",
  "GenAI Sample Experiment Demo: /projects/genai-optimization#interactive-demo",
  "Orbit Simulator: /projects/orbit-simulator",
  "Orbit Visual Demo: /projects/orbit-simulator#interactive-demo",
  "Sentiment Analysis: /projects/sentiment-analysis",
  "Sentiment Interactive Demo: /projects/sentiment-analysis#interactive-demo",
  "Cache Simulator: /projects/cache-simulator",
  "Cache Trace Demo: /projects/cache-simulator#interactive-demo",
  "Banking System: /projects/banking-system",
  "Banking OOP Demo: /projects/banking-system#interactive-demo",
  "Zero-G Survival: /projects/zerog-survival",
  "Zero-G Game Showcase: /projects/zerog-survival#interactive-demo",
  "EchoWear Web Showcase: /projects/echowear#interactive-demo",
  "MIPS Sample Trace Demo: /projects/mips-cpu-simulator#interactive-demo",
  "Resume: /resume",
  "Contact: /contact",
  "Research: /research",
  "Explainable AI Intrusion Detection Paper: /research/explainable-ai-intrusion-detection",
  "Experience: /experience",
  "Hydra Live Demo: https://project-h2-o.vercel.app/",
  "Hydra GitHub: https://github.com/SoojalKumar/projectH2O",
  "Hydra API Docs: https://project-h2-o.vercel.app/api/docs",
  "CampusStudy AI Live Demo: https://campusstudy-ai-web.vercel.app",
  "CampusStudy AI GitHub: https://github.com/SoojalKumar/campusstudy-ai",
  "CampusStudy AI API Docs: https://campusstudy-ai.onrender.com/docs",
  "CampusStudy AI API Health: https://campusstudy-ai.onrender.com/api/v1/health",
  "Cloud API Live Demo: https://skvidhani-cloud-api-service.hf.space/",
  "Cloud API Docs: https://skvidhani-cloud-api-service.hf.space/docs",
];

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

const portfolioContext = [
  `Name: ${profile.name}`,
  `Pronouns: ${profile.pronouns}`,
  `Title: ${profile.title}`,
  `Subtitle: ${profile.subtitle}`,
  `Location: ${profile.location}`,
  `Education: ${profile.education}; graduation/issued: ${profile.graduation}`,
  `Email: ${profile.email}`,
  `Summary: ${profile.summary}`,
  `Social profiles available on the Contact page: ${socialLinks.map((link) => link.label).join(", ")}`,
  `Allowed internal links:\n${allowedLinks.map((link) => `- ${link}`).join("\n")}`,
  `Projects:\n${projects
    .map(
      (project) => {
        const projectDescription =
          project.slug === "mips-cpu-simulator"
            ? "MIPS CPU Simulator is a Python-based simulator that models fetch, decode, execute, register updates, memory access, branch handling, and cycle-by-cycle execution tracing for MIPS-like instructions."
            : project.description;
        const projectLink = projectLinkBySlug[project.slug] ?? "/projects";

        const externalLinks = [
          project.liveDemo ? `Live demo: ${project.liveDemo}` : "",
          project.demoLabel ? `Demo label: ${project.demoLabel}` : "",
          project.demoStatus ? `Demo status: ${project.demoStatus}` : "",
          project.github ? `GitHub: ${project.github}` : "",
          project.apiDocs ? `API docs: ${project.apiDocs}` : "",
          project.apiHealth ? `API health: ${project.apiHealth}` : "",
        ]
          .filter(Boolean)
          .join(" ");

        return `- ${project.title} (${project.date}${project.context ? `, ${project.context}` : ""}): ${projectDescription} Tech: ${project.tags.join(", ")}. Summary: ${project.summary} Internal link: ${projectLink}. ${externalLinks}`;
      }
    )
    .join("\n")}`,
  `Experience:\n${experience
    .map((item) => `- ${item.role}, ${item.organization}, ${item.date}${item.location ? `, ${item.location}` : ""}. ${item.bullets.join(" ")}`)
    .join("\n")}`,
  `Research publications:\n${researchPublications
    .map(
      (paper) =>
        `- ${paper.title}. Author: ${paper.author}. Journal: ${paper.journal}. Publisher/group: ${paper.publisher}. Year: ${paper.year}. DOI: ${paper.doi}. Published: ${paper.published}. Route: ${paper.route}. Summary: ${paper.abstractPreview}. Tags: ${paper.tags.join(", ")}. Keywords: ${paper.keywords.join(", ")}.`
    )
    .join("\n")}`,
  `Awards: ${awards.join("; ")}`,
  `Certifications: ${certifications.join("; ")}`,
  `Organizations: ${organizations.map((item) => `${item.title}, ${item.role}, ${item.date}: ${item.description}`).join("; ")}`,
].join("\n\n");

const systemPrompt = `You are Soojal Kumar's portfolio assistant.

Answer only about Soojal Kumar's portfolio information: education, skills, projects, experience, resume, research, certifications, organizations, location, and contact information.

Understand English, Hinglish, Hindi/Urdu roman text, simple Hindi/Urdu-style phrases, spelling mistakes, and partial project names. Reply in the same language style as the user when possible: English for English, simple Hinglish/Roman Urdu for Hinglish or Roman Urdu.

Use only the provided portfolio context. Do not invent facts, metrics, URLs, awards, job titles, private information, salary, visa status, phone number, GPA, confidential details, or features not listed in the context. Do not mention a phone number.

Project and research aliases to understand:
- "campus study", "campusstudy", "campis study", "campus ai", "study ai", "study app", "ai study app", "notes app", "quiz app", "flashcard app", "rag study app", "document processing" = CampusStudy AI
- "hydra", "h2o", "projecth2o", "project h2o", "water intelligence", "water platform", "water hackathon", "h2o hackathon" = Hydra - H2O Hackathon Water Intelligence Platform
- "cloud api", "api service", "cloud based api" = Cloud-Based API Service
- "echo wear", "echowear", "voice app", "wearable app" = EchoWear
- "gen ai", "genai", "genetic algorithm", "optimization engine" = GenAI Optimization
- "orbit", "orbit simulator", "planet simulator" = Orbit Simulator
- "sentiment", "naive bayes", "movie review classifier" = Sentiment Analysis
- "cache", "cache simulator" = Cache Simulator
- "banking", "bank project" = Banking System
- "zero g", "zero-g", "space game" = Zero-G Survival
- "research", "paper", "best paper", "xai", "intrusion detection", "ids" = research paper

Never use placeholder portfolio domains or invented URLs. When including a link, use only the relative internal links and demo anchors listed in the allowed internal links context, such as /projects, /projects/hydra-h2o, /projects/sentiment-analysis#interactive-demo, /resume, and /contact. If a project does not have an allowed detail link, point to /projects. You may include these approved external links: https://campusstudy-ai-web.vercel.app, https://github.com/SoojalKumar/campusstudy-ai, https://campusstudy-ai.onrender.com/docs, https://campusstudy-ai.onrender.com/api/v1/health, https://project-h2-o.vercel.app/, https://github.com/SoojalKumar/projectH2O, https://project-h2-o.vercel.app/api/docs, https://skvidhani-cloud-api-service.hf.space/, https://skvidhani-cloud-api-service.hf.space/docs, https://doi.org/10.63282/3050-9416.IJAIBDCMS-V7I2P119.

If asked which projects have demos, distinguish real live deployed apps from portfolio-hosted interactive demos, sample output demos, and project showcases. Do not call a sample trace or showcase a production live app.

If asked about a specific project, answer with: what it is, what Soojal built, technologies used, what it demonstrates, and the correct internal link using markdown, for example [EchoWear](/projects/echowear). For MIPS CPU Simulator, say branch handling only; do not say branch prediction.

If asked about research, the Best Paper Award, the XAI intrusion detection paper, or the DOI, include only the listed publication title, journal, year, DOI, short summary, and detail route: /research/explainable-ai-intrusion-detection. Do not say there are multiple publications unless they are listed in the portfolio context.

If you are unsure or the detail is not in the portfolio context, say: "I don't have that detail in the portfolio data, but you can check the Projects page for more."

Keep answers concise unless the user asks for detail. Keep the tone polished, recruiter-friendly, and helpful. If asked unrelated questions, politely say: "I can help with Soojal's portfolio, projects, skills, research, resume, and contact information."

Portfolio context:
${portfolioContext}`;

type GroqResponse = {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
  error?: {
    message?: string;
  };
};

export async function GET() {
  const key = process.env.GROQ_API_KEY;

  return NextResponse.json({
    ok: true,
    provider: PROVIDER,
    hasGroqKey: Boolean(key),
    keyLength: key?.length ?? 0,
    model: MODEL,
    runtime,
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ reply: "Please send a valid chat message." }, { status: 400 });
  }

  const rawMessage =
    typeof body === "object" && body !== null && "message" in body
      ? (body as { message?: unknown }).message
      : "";
  const message = typeof rawMessage === "string" ? rawMessage.trim() : "";

  if (!message) {
    return NextResponse.json({ reply: "Please enter a question about Soojal's portfolio." }, { status: 400 });
  }

  if (message.length > 1200) {
    return NextResponse.json({ reply: "Please keep your question shorter so I can answer it clearly." }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  console.log("Groq key exists:", Boolean(apiKey));
  console.log("Groq model:", MODEL);

  if (!apiKey) {
    return NextResponse.json({ error: "Groq API key is not configured on the server." }, { status: 503 });
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.3,
        max_tokens: 600,
      }),
    });
    console.log("Groq response status:", response.status);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Groq error response body:", errorBody);
      return NextResponse.json({ error: "Groq request failed." }, { status: 502 });
    }

    const data = (await response.json()) as GroqResponse;
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ error: "Groq response could not be parsed." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Groq request failed." }, { status: 502 });
  }
}
