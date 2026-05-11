# Project Demo Deployment Status

This audit was created from local clones of the public GitHub repositories. The portfolio is hosted on Vercel at `https://www.skvidhani.com`.

## Summary

| Project | Stack | Current demo status | Recommended strategy | Difficulty | Next steps |
| --- | --- | --- | --- | --- | --- |
| Hydra / projectH2O | Flutter web, FastAPI, Python, Vercel, Groq optional | Live Vercel app at `https://project-h2-o.vercel.app/` | Keep as real live demo; link API docs and health route | Easy | Verify links after major changes; keep Vercel env optional for Groq |
| Cloud-Based API Service | FastAPI, SQLite, React, Vite, Docker, Hugging Face Space | Live app at `https://skvidhani-cloud-api-service.hf.space/` | Use existing live demo; do not duplicate on Vercel unless needed | Easy | Keep Hugging Face sync healthy; optionally add Vercel later with persistent storage decision |
| CampusStudy AI | Next.js, Expo, FastAPI, PostgreSQL/pgvector support, Redis, MinIO/S3 storage support, Celery, pnpm/turbo | Live Vercel frontend and Render backend | Use the real live deployment; keep API docs and health linked from the portfolio | Medium | Verify Vercel frontend, Render health, and API docs after major backend changes |
| EchoWear | Swift, SwiftUI, iOS/watchOS, AVFoundation, Speech framework | No web runtime; screenshots exist | Web showcase inside portfolio; do not call it a live iOS app | Medium | Add App Store/TestFlight demo only if an Apple distribution path is prepared |
| MIPS CPU Simulator | Python CLI, standard library | No web app | Portfolio sample execution trace | Medium | Optional: build a browser emulator later using a safe subset of instructions |
| GenAI Optimization | Python CLI, NumPy, Matplotlib | Real output artifacts exist | Portfolio sample experiment demo using generated plot/config | Medium | Optional: deploy a small static dashboard with precomputed outputs |
| Orbit Simulator | Python CLI, NumPy, Matplotlib, Pillow | Real PNG/GIF outputs exist | Portfolio visual demo and real generated assets | Easy | Optional: add client-side orbit controls as a separate mini app |
| Sentiment Analysis | Python CLI, standard library Naive Bayes | No web app | Portfolio interactive sample classifier; no accuracy claim | Medium | Optional: port the full classifier logic to TypeScript with packaged training data |
| Cache Simulator | Python CLI, standard library, unit tests | No web app | Portfolio cache trace demo | Medium | Optional: add a complete client-side simulator for direct/set-associative modes |
| Banking System Simulation | C++ console app, Makefile | No web app | Portfolio simplified OOP transaction demo | Medium | Optional: compile to WebAssembly later if source structure is adapted |
| Zero-G Survival | Java desktop game with image/media assets | No web deployment | Portfolio game showcase using existing assets and resource loop | Hard | Optional: rebuild a small browser mini-demo; do not claim the Java game runs on Vercel |

## Portfolio Implementation

The portfolio now distinguishes demo types:

- `Live deployed app`: real external app URL.
- `Interactive portfolio demo`: browser-based demo hosted inside the portfolio.
- `Sample output demo`: honest sample trace/config/output preview.
- `Project showcase`: screenshots or interaction preview for projects that cannot run on Vercel directly.

## Verified Live Links

- Hydra live demo: `https://project-h2-o.vercel.app/`
- Hydra API docs: `https://project-h2-o.vercel.app/api/docs`
- Hydra API health: `https://project-h2-o.vercel.app/api/health`
- CampusStudy AI live demo: `https://campusstudy-ai-web.vercel.app`
- CampusStudy AI API docs: `https://campusstudy-ai.onrender.com/docs`
- CampusStudy AI API health: `https://campusstudy-ai.onrender.com/api/v1/health`
- Cloud API live demo: `https://skvidhani-cloud-api-service.hf.space/`
- Cloud API docs: `https://skvidhani-cloud-api-service.hf.space/docs`
- Cloud API health: `https://skvidhani-cloud-api-service.hf.space/api/v1/health`

## Notes

CampusStudy AI is now represented as a live full-stack project. The repo deployment notes document a Vercel frontend using `NEXT_PUBLIC_API_BASE_URL=https://campusstudy-ai.onrender.com/api/v1`, a Render backend startup path that runs migrations and seeds demo data before Uvicorn, and CORS origins for the Vercel frontend.
