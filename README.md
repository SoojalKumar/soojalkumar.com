# Soojal Kumar Portfolio

Personal portfolio website for Soojal Kumar, a Computer Science graduate from the University of the Pacific.

The site highlights software engineering, AI, optimization, cloud API, cybersecurity, systems programming, leadership, research, and project work.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Local Development

```bash
bun install
bun run dev
```

Open `http://127.0.0.1:5173` when running with:

```bash
bun run dev -- -p 5173 -H 127.0.0.1
```

## Build

```bash
bun run build
```

The project builds as a server-capable Next.js app for Vercel so the chatbot API route can use `GEMINI_API_KEY` securely on the server.

## Portfolio Assistant

The floating chatbot calls the server-side `/api/chat` route on Vercel. That route uses Google Gemini with `GEMINI_API_KEY` from Vercel Environment Variables. The API key is never exposed in frontend code.

If the Gemini API route is unavailable, the chatbot falls back to the local static portfolio knowledge base so visitors can still ask about Soojal's projects, skills, experience, resume, research, and contact information.

To configure Gemini on Vercel:

1. Open the Vercel project.
2. Go to Settings → Environment Variables.
3. Add `GEMINI_API_KEY`.
4. Redeploy the site.

For local server testing, create `.env.local` with:

```text
GEMINI_API_KEY=your_gemini_api_key_here
```

Do not commit `.env.local`.

## Deployment

Vercel deploys the site from the GitHub repository. GitHub Actions runs a build verification on every push to `main`.

Custom domain:

```text
www.skvidhani.com
```
