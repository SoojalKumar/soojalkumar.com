import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  Monitor,
  TerminalSquare,
} from "lucide-react";
import { Project, projects } from "@/lib/data";
import Tag from "./Tag";

type ProjectDetailProps = {
  slug: string;
};

const visualIcons = {
  dashboard: Monitor,
  pipeline: GitBranch,
  terminal: TerminalSquare,
  diagram: Boxes,
};

const ProjectDetail = ({ slug }: ProjectDetailProps) => {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-5 py-28">
        <h1 className="text-3xl font-bold text-ink">Project not found</h1>
        <Link href="/projects" className="mt-6 inline-flex text-accent">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{project.date}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">{project.title}</h1>
            <p className="mt-4 text-xl leading-8 text-slate-600">{project.subtitle}</p>
            <p className="mt-5 max-w-3xl leading-7 text-slate-600">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  GitHub <ExternalLink size={18} />
                </a>
              )}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-ink transition hover:border-accent"
              >
                All Projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <HeroVisual project={project} />
        </section>

        <MetricGrid metrics={project.metrics} />

        <section className="mt-12 rounded-2xl border-l-4 border-accent bg-sky-50 p-6 shadow-sm ring-1 ring-sky-100">
          <h2 className="text-2xl font-bold text-ink">Executive Summary</h2>
          <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <SectionHeading title="Problem Statement" />
          <p className="mt-4 leading-7 text-slate-600">{project.problem}</p>
        </section>

        <FeatureGrid title="What I Built" items={project.features} />

        <DiagramSection
          title="How It Works"
          description="A conceptual workflow showing how the project moves from input to processing and output."
          items={project.workflow}
          variant="workflow"
        />

        <DiagramSection
          title="Architecture / System Design"
          description="A simplified system view of the major project components and how responsibilities connect."
          items={project.architecture}
          variant="architecture"
        />

        <TechnicalImplementation project={project} />

        <VisualShowcase project={project} />

        {project.preview && <PreviewBlock project={project} />}

        <Challenges project={project} />

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold">Results / Impact</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {project.impact.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="text-cyan-300" size={22} />
                <p className="mt-3 leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-white transition hover:bg-sky-500"
            >
              GitHub Link <ExternalLink size={18} />
            </a>
          )}
          <Link href="/projects" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800">
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
};

const SectionHeading = ({ title, description }: { title: string; description?: string }) => (
  <div>
    <h2 className="text-2xl font-bold tracking-tight text-ink">{title}</h2>
    {description && <p className="mt-2 max-w-3xl leading-7 text-slate-600">{description}</p>}
  </div>
);

const HeroVisual = ({ project }: { project: Project }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
    <div className="rounded-xl bg-slate-950 p-5 text-white">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Conceptual Visual</p>
          <h2 className="mt-1 text-xl font-bold">{project.heroVisual.title}</h2>
        </div>
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {project.heroVisual.items.map((item, index) => (
          <div
            key={item}
            className={`rounded-xl border border-white/10 bg-white/[0.06] p-4 ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <p className="text-sm font-semibold text-cyan-200">{item}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-cyan-400" style={{ width: `${68 - index * 7}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MetricGrid = ({ metrics }: { metrics: string[] }) => (
  <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {metrics.map((metric) => (
      <div key={metric} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Highlight</p>
        <p className="mt-2 text-lg font-bold text-accent">{metric}</p>
      </div>
    ))}
  </section>
);

const FeatureGrid = ({ title, items }: { title: string; items: string[] }) => (
  <section className="mt-12">
    <SectionHeading title={title} />
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-accent">
            <Layers3 size={20} />
          </div>
          <h3 className="mt-4 font-bold text-ink">{item}</h3>
        </div>
      ))}
    </div>
  </section>
);

const DiagramSection = ({
  title,
  description,
  items,
  variant,
}: {
  title: string;
  description: string;
  items: string[];
  variant: "workflow" | "architecture";
}) => (
  <section className="mt-12">
    <SectionHeading title={title} description={description} />
    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item, index) => (
          <div key={item} className="relative">
            <div
              className={`min-h-28 rounded-2xl border p-4 ${
                variant === "architecture"
                  ? "border-sky-200 bg-sky-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {index + 1}</p>
              <p className="mt-2 font-bold leading-6 text-ink">{item}</p>
            </div>
            {index < items.length - 1 && (
              <div className="hidden lg:absolute lg:-right-4 lg:top-1/2 lg:block lg:-translate-y-1/2">
                <ArrowRight className="text-accent" size={22} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TechnicalImplementation = ({ project }: { project: Project }) => (
  <section className="mt-12">
    <SectionHeading title="Technical Implementation" />
    <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {project.technicalGroups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-cyan-300">
              <Code2 size={18} />
            </div>
            <h3 className="font-bold text-ink">{group.title}</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const VisualShowcase = ({ project }: { project: Project }) => (
  <section className="mt-12">
    <SectionHeading
      title="Visual Showcase"
      description="Conceptual preview panels for the project experience. These are intentional placeholders, not fake screenshots."
    />
    <div className="mt-5 grid gap-5 md:grid-cols-2">
      {project.visuals.map((visual) => {
        const Icon = visualIcons[visual.variant];
        return (
          <div key={visual.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-40 items-center justify-center bg-slate-950 p-5 text-center text-white">
              <div>
                <Icon className="mx-auto text-cyan-300" size={30} />
                <p className="mt-3 text-lg font-bold">{visual.title}</p>
                <div className="mx-auto mt-4 h-2 w-40 rounded-full bg-slate-800">
                  <div className="h-2 w-2/3 rounded-full bg-cyan-400" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-7 text-slate-600">{visual.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const PreviewBlock = ({ project }: { project: Project }) => {
  if (!project.preview) return null;

  return (
    <section className="mt-12">
      <SectionHeading title={project.preview.title} />
      <pre className="mt-5 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-6 text-sm leading-7 text-cyan-100 shadow-lg">
        <code>{project.preview.content}</code>
      </pre>
    </section>
  );
};

const Challenges = ({ project }: { project: Project }) => (
  <section className="mt-12">
    <SectionHeading title="Challenges & Solutions" />
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {project.challenges.map((item, index) => (
        <div key={item.challenge} className={`grid gap-0 md:grid-cols-2 ${index > 0 ? "border-t border-slate-200" : ""}`}>
          <div className="bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
            <p className="mt-2 leading-7 text-slate-700">{item.challenge}</p>
          </div>
          <div className="p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Solution</p>
            <p className="mt-2 leading-7 text-slate-700">{item.solution}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectDetail;
