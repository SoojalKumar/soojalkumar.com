import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import Tag from "./Tag";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-ink">{project.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">{project.date}</p>
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
            <ExternalLink className="text-accent" size={20} />
          </a>
        )}
      </div>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
