"use client";

import { useMemo, useState } from "react";

type ProjectInteractiveDemoProps = {
  slug: string;
};

const sampleReviews = [
  "The movie was surprisingly emotional and well acted.",
  "The plot was dull, predictable, and badly paced.",
  "A charming cast made the story feel fresh and fun.",
];

const positiveWords = ["emotional", "well", "acted", "charming", "fresh", "fun", "great", "strong", "excellent"];
const negativeWords = ["dull", "predictable", "badly", "boring", "weak", "poor", "slow", "awful"];

const classifyReview = (review: string) => {
  const text = review.toLowerCase();
  const positive = positiveWords.filter((word) => text.includes(word)).length;
  const negative = negativeWords.filter((word) => text.includes(word)).length;
  return positive >= negative ? "Positive Review" : "Negative Review";
};

const ProjectInteractiveDemo = ({ slug }: ProjectInteractiveDemoProps) => {
  if (slug === "sentiment-analysis") return <SentimentDemo />;
  if (slug === "orbit-simulator") return <OrbitDemo />;
  if (slug === "genai-optimization") return <GenAiDemo />;
  if (slug === "mips-cpu-simulator") return <MipsDemo />;
  if (slug === "cache-simulator") return <CacheDemo />;
  if (slug === "banking-system") return <BankingDemo />;
  if (slug === "zerog-survival") return <ZeroGDemo />;
  if (slug === "echowear") return <EchoWearDemo />;
  if (slug === "campusstudy-ai") return <CampusStudyDemo />;
  return null;
};

const DemoShell = ({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section id="interactive-demo" className="mt-12 scroll-mt-24">
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">{label}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const SentimentDemo = () => {
  const [review, setReview] = useState(sampleReviews[0]);
  const prediction = useMemo(() => classifyReview(review), [review]);

  return (
    <DemoShell
      label="Interactive Demo"
      title="Movie Review Sentiment Classifier"
      description="A lightweight browser demo inspired by the project workflow. It uses transparent sample word rules, not the full Python training dataset or a claimed accuracy score."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <label htmlFor="review" className="text-sm font-semibold text-ink">
            Review text
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(event) => setReview(event.target.value)}
            className="mt-2 min-h-36 w-full rounded-xl border border-slate-300 p-4 text-slate-700 outline-none transition focus:border-accent focus:ring-4 focus:ring-cyan-100"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {sampleReviews.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setReview(sample)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-accent"
              >
                Sample
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-slate-950 p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Prediction</p>
          <p className="mt-4 text-2xl font-bold">{prediction}</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">Pipeline: cleaning {"->"} tokenization {"->"} class scoring {"->"} sentiment label.</p>
        </div>
      </div>
    </DemoShell>
  );
};

const OrbitDemo = () => {
  const [eccentricity, setEccentricity] = useState(42);
  const [speed, setSpeed] = useState(55);
  const width = 58 + eccentricity * 0.35;
  const height = 58 - eccentricity * 0.22;

  return (
    <DemoShell
      label="Interactive Visual Demo"
      title="Orbit Shape Explorer"
      description="This visual demo mirrors the project concept in the browser. The real Python project generates PNG/GIF outputs with NumPy, Matplotlib, and Pillow."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="relative min-h-72 overflow-hidden rounded-2xl bg-slate-950">
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_45px_rgba(250,204,21,0.75)]" />
          <div
            className="absolute left-1/2 top-1/2 rounded-full border-2 border-cyan-300"
            style={{ width: `${width}%`, height: `${height}%`, transform: "translate(-50%, -50%)" }}
          />
          <div
            className="absolute rounded-full bg-cyan-200"
            style={{ left: `${22 + speed * 0.55}%`, top: `${50 - eccentricity * 0.12}%`, height: 14, width: 14 }}
          />
        </div>
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <Slider label="Eccentricity" value={eccentricity} onChange={setEccentricity} />
          <Slider label="Animation position" value={speed} onChange={setSpeed} />
          <p className="text-sm leading-6 text-slate-600">Project outputs available on this page include the real generated orbit PNG and GIF.</p>
        </div>
      </div>
    </DemoShell>
  );
};

const GenAiDemo = () => {
  const [generation, setGeneration] = useState(12);
  const fitness = (48 + Math.log(generation + 1) * 18).toFixed(2);

  return (
    <DemoShell
      label="Sample Output Demo"
      title="Genetic Algorithm Experiment Snapshot"
      description="A precomputed-style demo showing the kind of experiment configuration and fitness progression the Python CLI exports. It is not running market optimization live in the browser."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-950 p-5 text-cyan-100">
          <pre className="overflow-x-auto text-sm leading-7">{`{
  "population_size": 300,
  "mutation_rate": 0.06,
  "crossover_type": "uniform",
  "generation": ${generation},
  "sample_fitness": ${fitness}
}`}</pre>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <Slider label="Sample generation" value={generation} onChange={setGeneration} min={1} max={50} />
          <div className="mt-6 h-32 rounded-xl bg-white p-4">
            <div className="h-full rounded-lg bg-gradient-to-r from-cyan-100 via-sky-200 to-cyan-400" style={{ width: `${Math.min(100, 35 + generation)}%` }} />
          </div>
        </div>
      </div>
    </DemoShell>
  );
};

const MipsDemo = () => (
  <DemoShell
    label="Sample Execution Trace"
    title="Fetch / Decode / Execute Trace"
    description="A browser-readable trace based on the simulator's documented output format. The full emulator remains a Python CLI project."
  >
    <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-cyan-100">{`Cycle 1
  PC: 65536
  Instruction: 00100000000000100000000000000101
  Decoded as: addi
  Execute: ALU result = 5
  Write Back: $t0 = 5

Cycle 2
  Decoded as: beq
  Branch handling: compare registers and update PC when condition matches`}</pre>
  </DemoShell>
);

const CacheDemo = () => {
  const addresses = ["0x1A3F", "0x2B41", "0x1A3F", "0x3C10"];
  return (
    <DemoShell
      label="Cache Trace Demo"
      title="Address Access Walkthrough"
      description="A small sample trace illustrating tag/index parsing and hit/miss reporting. The real project runs configurable direct-mapped and set-associative simulations from the CLI."
    >
      <div className="grid gap-3 md:grid-cols-4">
        {addresses.map((address, index) => (
          <div key={`${address}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="font-mono text-sm font-bold text-ink">{address}</p>
            <p className="mt-3 text-sm text-slate-600">set={index % 3} tag=0x{(0x68 + index * 7).toString(16).toUpperCase()}</p>
            <p className={`mt-3 font-bold ${index === 2 ? "text-emerald-600" : "text-rose-600"}`}>{index === 2 ? "HIT" : "MISS"}</p>
          </div>
        ))}
      </div>
    </DemoShell>
  );
};

const BankingDemo = () => {
  const [balance, setBalance] = useState(250);
  return (
    <DemoShell
      label="Interactive OOP Demo"
      title="Simplified Account Transaction Flow"
      description="A compact browser demo of the console app's account workflow. The original project remains a C++ menu-driven banking simulation."
    >
      <div className="grid gap-5 md:grid-cols-[320px_minmax(0,1fr)]">
        <div className="rounded-2xl bg-slate-950 p-5 text-white">
          <p className="text-sm text-cyan-300">BankAccount {"->"} SavingsAccount</p>
          <p className="mt-4 text-4xl font-bold">${balance}</p>
          <p className="mt-2 text-sm text-slate-300">Sample balance</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-lg bg-navy px-4 py-3 font-semibold text-white" onClick={() => setBalance((value) => value + 50)}>
            Deposit $50
          </button>
          <button className="rounded-lg border border-slate-300 px-4 py-3 font-semibold text-ink" onClick={() => setBalance((value) => Math.max(0, value - 40))}>
            Withdraw $40
          </button>
        </div>
      </div>
    </DemoShell>
  );
};

const ZeroGDemo = () => {
  const [oxygen, setOxygen] = useState(68);
  const [health, setHealth] = useState(82);
  return (
    <DemoShell
      label="Game Showcase"
      title="Zero-G Survival Resource Panel"
      description="A portfolio showcase of the game loop. The Java game itself is not a browser deployment; this panel summarizes the oxygen, health, and hazard-management mechanics."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <ResourceBar label="Oxygen" value={oxygen} />
        <ResourceBar label="Ship Health" value={health} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-lg bg-navy px-4 py-3 font-semibold text-white" onClick={() => setOxygen((value) => Math.max(0, value - 12))}>
          Asteroid pressure
        </button>
        <button className="rounded-lg border border-slate-300 px-4 py-3 font-semibold text-ink" onClick={() => setOxygen(100)}>
          Complete oxygen minigame
        </button>
        <button className="rounded-lg border border-slate-300 px-4 py-3 font-semibold text-ink" onClick={() => setHealth((value) => Math.max(0, value - 10))}>
          Ship damage
        </button>
      </div>
    </DemoShell>
  );
};

const EchoWearDemo = () => {
  const [keyword, setKeyword] = useState("Excuse me");
  return (
    <DemoShell
      label="Web Showcase"
      title="Voice Keyword Interaction Preview"
      description="EchoWear is a native iOS/watchOS prototype, so this is a web showcase of the interaction model rather than a live iOS app."
    >
      <div className="grid gap-5 md:grid-cols-[320px_minmax(0,1fr)]">
        <div className="rounded-[2rem] border-8 border-slate-900 bg-slate-50 p-5 shadow-lg">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Listening for</p>
          <p className="mt-4 text-2xl font-bold text-ink">{keyword}</p>
          <div className="mt-6 rounded-2xl bg-cyan-100 p-4 text-sm font-semibold text-cyan-900">Haptic feedback ready</div>
        </div>
        <div className="space-y-3">
          {["Hey", "Hello", "Excuse me"].map((item) => (
            <button key={item} onClick={() => setKeyword(item)} className="block w-full rounded-xl border border-slate-200 bg-white p-4 text-left font-semibold text-ink transition hover:border-accent">
              {item}
            </button>
          ))}
        </div>
      </div>
    </DemoShell>
  );
};

const CampusStudyDemo = () => (
  <DemoShell
    label="Demo Mode"
    title="AI Study Workflow Preview"
    description="CampusStudy AI is an infrastructure-heavy monorepo with Next.js, Expo, FastAPI, Celery, PostgreSQL, pgvector, Redis, and object storage. This portfolio demo mode shows the confirmed study workflow without claiming a production-backed deployment."
  >
    <div className="grid gap-4 md:grid-cols-5">
      {["Upload material", "Extract or transcribe", "Chunk and embed", "Generate study assets", "Ask with citations"].map((step, index) => (
        <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Step {index + 1}</p>
          <p className="mt-3 font-bold text-ink">{step}</p>
        </div>
      ))}
    </div>
  </DemoShell>
);

const Slider = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) => (
  <label className="block">
    <span className="text-sm font-semibold text-ink">{label}: {value}</span>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className="mt-3 w-full accent-cyan-500"
    />
  </label>
);

const ResourceBar = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-2xl bg-slate-950 p-5 text-white">
    <div className="flex justify-between gap-3">
      <p className="font-bold">{label}</p>
      <p className="text-cyan-300">{value}%</p>
    </div>
    <div className="mt-4 h-3 rounded-full bg-slate-800">
      <div className="h-3 rounded-full bg-cyan-400" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default ProjectInteractiveDemo;
