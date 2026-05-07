import { NextResponse } from "next/server";
import { awards, certifications, experience, organizations, profile, projects, socialLinks } from "@/lib/data";

export const runtime = "nodejs";

const MODEL = "gemini-2.0-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const portfolioContext = [
  `Name: ${profile.name}`,
  `Pronouns: ${profile.pronouns}`,
  `Title: ${profile.title}`,
  `Subtitle: ${profile.subtitle}`,
  `Location: ${profile.location}`,
  `Education: ${profile.education}; graduation/issued: ${profile.graduation}`,
  `Email: ${profile.email}`,
  `Summary: ${profile.summary}`,
  `Social links: ${socialLinks.map((link) => `${link.label}: ${link.href}`).join("; ")}`,
  `Projects:\n${projects
    .map(
      (project) =>
        `- ${project.title} (${project.date}): ${project.description} Tech: ${project.tags.join(", ")}. Summary: ${project.summary}`
    )
    .join("\n")}`,
  `Experience:\n${experience
    .map((item) => `- ${item.role}, ${item.organization}, ${item.date}${item.location ? `, ${item.location}` : ""}. ${item.bullets.join(" ")}`)
    .join("\n")}`,
  `Awards: ${awards.join("; ")}`,
  `Certifications: ${certifications.join("; ")}`,
  `Organizations: ${organizations.map((item) => `${item.title}, ${item.role}, ${item.date}: ${item.description}`).join("; ")}`,
].join("\n\n");

const systemPrompt = `You are Soojal Kumar's portfolio assistant.

Answer only about Soojal Kumar's portfolio information: education, skills, projects, experience, resume, research, certifications, organizations, GitHub, LinkedIn, ORCID, location, and contact information.

Use only the provided portfolio context. Do not invent private information, salary, visa status, fake metrics, phone number, GPA, confidential details, or unrelated facts. Do not mention a phone number. If asked unrelated questions, politely redirect to Soojal's portfolio information.

Keep answers concise, professional, and helpful. If relevant, suggest the user visit the Projects, Resume, Research, Experience, or Contact page.

Portfolio context:
${portfolioContext}`;

type GeminiResponse = {
  candidates?: {
    content?: {
      parts?: {
        text?: string;
      }[];
    };
  }[];
  error?: {
    message?: string;
  };
};

export async function GET() {
  const key = process.env.GEMINI_API_KEY;

  return NextResponse.json({
    ok: true,
    hasGeminiKey: Boolean(key),
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

  const apiKey = process.env.GEMINI_API_KEY;
  console.log("Gemini key exists:", Boolean(apiKey));
  console.log("Gemini model:", MODEL);

  if (!apiKey) {
    return NextResponse.json({ error: "Gemini API key is not configured on the server." }, { status: 503 });
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: message }],
          },
        ],
      }),
    });
    console.log("Gemini response status:", response.status);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Gemini error response body:", errorBody);
      return NextResponse.json({ error: "Gemini request failed." }, { status: 502 });
    }

    const data = (await response.json()) as GeminiResponse;
    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      ?.filter(Boolean)
      ?.join("\n")
      ?.trim();

    if (!reply) {
      return NextResponse.json({ error: "Gemini response could not be parsed." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Gemini request failed." }, { status: 502 });
  }
}
