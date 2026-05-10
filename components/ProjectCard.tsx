import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import Tag from "./Tag";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="flex h-full w-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-6">
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="break-words text-xl font-bold leading-7 text-ink">{project.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">{project.date}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub`}
            className="shrink-0 rounded-full p-1 transition hover:bg-cyan-50"
          >
            <ExternalLink className="text-accent" size={20} />
          </a>
        )}
      </div>
      {project.context && <p className="mt-4 text-sm font-semibold text-accent">{project.context}</p>}
      <p className={`${project.context ? "mt-2" : "mt-4"} min-w-0 flex-1 whitespace-normal break-words leading-7 text-slate-600`}>
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:py-2"
        >
          View Details
        </Link>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent sm:w-auto sm:py-2"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
