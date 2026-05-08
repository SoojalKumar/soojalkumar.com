import { existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import Tag from "@/components/Tag";
import { profile, researchPublications } from "@/lib/data";

const paper = researchPublications.find((item) => item.slug === "explainable-ai-intrusion-detection") ?? researchPublications[0];
const pdfPath = "/research/explainable-ai-intrusion-detection.pdf";
const hasPaperPdf = existsSync(join(process.cwd(), "public", pdfPath));

const objectives = [
  "Develop intrusion detection models using Random Forest and Deep Neural Network approaches.",
  "Integrate SHAP and LIME to provide interpretable model outputs.",
  "Compare predictive accuracy, latency, and explanation quality across models.",
  "Evaluate the effect of explainability on operational performance.",
  "Propose a deployment-oriented framework for real-time cybersecurity environments.",
];

const methodology = [
  { title: "Datasets", text: "NSL-KDD and CICIDS2017" },
  { title: "Preprocessing", text: "Normalization, feature engineering, imbalance correction" },
  { title: "Model Training", text: "Random Forest and Deep Neural Network models" },
  { title: "Explainability", text: "SHAP and LIME for global and case-specific explanations" },
  { title: "Evaluation", text: "Accuracy, recall, ROC-AUC, latency, explanation quality" },
  { title: "Deployment Framework", text: "Analyst triage, transparency, and real-time threat response" },
];

const contributions = [
  "Comparative evaluation using NSL-KDD and CICIDS2017.",
  "Measurement of SHAP and LIME impact on real-time IDS workflows.",
  "Comparison of explainable and non-explainable model configurations.",
  "Deployment-oriented architecture linking detection, explanation, analyst triage, and response.",
];

const findings = [
  "Deep Neural Network showed stronger recall and ROC-AUC in complex traffic conditions.",
  "Random Forest delivered lower inference latency and competitive precision.",
  "SHAP and LIME improved transparency and analyst usability.",
  "The work emphasizes that IDS systems should be evaluated by accuracy, interpretability, and operational usefulness.",
];

const framework = [
  "Network Traffic",
  "ML Detection Model",
  "Threat Prediction",
  "SHAP/LIME Explanation",
  "Analyst Review",
  "Response Action",
];

const detailRows = [
  ["Journal", paper.journal],
  ["Volume", paper.volume],
  ["Issue", paper.issue],
  ["Pages", paper.pages],
  ["Year", paper.year],
  ["ISSN", paper.issn],
  ["DOI", paper.doiLabel],
  ["Received", paper.received],
  ["Revised", paper.revised],
  ["Accepted", paper.accepted],
  ["Published", paper.published],
];

export default function ResearchDetailPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Link href="/research" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <ArrowLeft size={16} /> Back to Research
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Published Research</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">{paper.title}</h1>
            <p className="mt-5 text-xl font-semibold text-slate-700">{paper.author}</p>
            <p className="mt-2 text-lg leading-8 text-slate-600">
              {paper.journal} · Published {paper.publishedLabel}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={paper.doi}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                View DOI <ExternalLink size={18} />
              </a>
              {hasPaperPdf && (
                <a
                  href={pdfPath}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-ink transition hover:border-accent"
                >
                  Download Paper PDF <FileText size={18} />
                </a>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="rounded-xl bg-slate-950 p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Research Framework</p>
                  <h2 className="mt-2 text-2xl font-bold">Explainable IDS</h2>
                </div>
                <ShieldCheck className="text-cyan-300" size={34} />
              </div>
              <div className="mt-6 space-y-3">
                {["Machine Learning Detection", "SHAP + LIME Explanations", "Analyst-Focused Threat Response"].map(
                  (item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="font-semibold text-cyan-100">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeading title="Publication Details" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detailRows.map(([label, value]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{label}</p>
                <p className="mt-2 break-words font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-500">Publisher / Group: {paper.publisher}</p>
        </section>

        <section className="mt-10 rounded-2xl border-l-4 border-accent bg-sky-50 p-6 shadow-sm ring-1 ring-sky-100">
          <SectionHeading title="Abstract" />
          <div className="mt-5 space-y-5 leading-8 text-slate-700">
            {paper.abstract.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeading title="Research Aim & Objectives" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={20} />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionHeading
            title="Methodology / Framework"
            description="A structured view of how the study moves from benchmark datasets to explainable, deployment-oriented IDS decision support."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {methodology.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <CardGrid title="Key Contributions" items={contributions} />
        <CardGrid title="Findings / Impact" items={findings} accent />

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeading title="Visual Research Framework" />
          <div className="mt-6 grid gap-3 lg:grid-cols-6">
            {framework.map((item, index) => (
              <div key={item} className="relative">
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">Stage {index + 1}</p>
                  <p className="mt-2 font-bold text-ink">{item}</p>
                </div>
                {index < framework.length - 1 && (
                  <ArrowRight className="mx-auto my-2 text-accent lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:my-0 lg:-translate-y-1/2" size={22} />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={paper.doi}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
          >
            View DOI <ExternalLink size={18} />
          </a>
          <Link href="/research" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800">
            Back to Research
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-ink transition hover:border-accent"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">Contact: {profile.email}</p>
      </div>
    </main>
  );
}

const SectionHeading = ({ title, description }: { title: string; description?: string }) => (
  <div>
    <h2 className="text-2xl font-bold tracking-tight text-ink">{title}</h2>
    {description && <p className="mt-2 max-w-3xl leading-7 text-slate-600">{description}</p>}
  </div>
);

const CardGrid = ({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) => (
  <section className="mt-10">
    <SectionHeading title={title} />
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className={`rounded-2xl border p-5 shadow-sm ${
            accent ? "border-sky-100 bg-sky-50" : "border-slate-200 bg-white"
          }`}
        >
          <CheckCircle2 className="text-accent" size={22} />
          <p className="mt-3 leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  </section>
);
