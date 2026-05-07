# Soojal Kumar Portfolio

Personal portfolio website for Soojal Kumar, a Computer Science graduate from the University of the Pacific.

The site highlights software engineering, AI, optimization, cloud API, cybersecurity, systems programming, leadership, research, and project work.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages

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

The project exports a static site to `out/` for GitHub Pages.

## Portfolio Assistant

The floating chatbot is currently a static, client-side portfolio assistant. It answers from local portfolio data and works on GitHub Pages without an API key or backend.

For a future Gemini-powered version, deploy the site to server-capable hosting such as Vercel or Netlify, add `GEMINI_API_KEY` as an environment variable, and create a server-side API route such as `app/api/chat/route.ts`. Do not expose the Gemini key in frontend code.

## Deployment

GitHub Actions deploys the static site to GitHub Pages on every push to `main`.

Custom domain:

```text
www.skvidhani.com
```
