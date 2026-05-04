import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Tag from "./Tag";

type ProjectDetailProps = {
  slug: string;
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
    <main className="mx-auto max-w-5xl px-5 py-28">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      <div className="mt-8">
        <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-xl text-slate-600">{project.subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <section className="mt-10 rounded-xl border-l-4 border-accent bg-sky-50 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-ink">Executive Summary</h2>
        <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-lg bg-white p-4 text-center shadow-sm">
              <p className="font-bold text-accent">{metric}</p>
            </div>
          ))}
        </div>
      </section>

      <DetailSection title="Problem Statement" items={[project.problem]} />
      <DetailSection title="Objectives" items={project.objectives} />
      <DetailSection title="Methodology / Architecture" items={project.methodology} grid />
      <DetailSection title="Key Features" items={project.features} grid />
      <DetailSection title="Technical Implementation" items={project.implementation} grid />
      <DetailSection title="Results / Impact" items={project.impact} />

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
    </main>
  );
};

const DetailSection = ({ title, items, grid = false }: { title: string; items: string[]; grid?: boolean }) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className={`mt-4 ${grid ? "grid gap-4 md:grid-cols-2" : "rounded-xl bg-white p-6 ring-1 ring-slate-200"}`}>
        {items.map((item) => (
          <div key={item} className={grid ? "rounded-xl bg-white p-5 ring-1 ring-slate-200" : "mb-3 last:mb-0"}>
            <p className="leading-7 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetail;
