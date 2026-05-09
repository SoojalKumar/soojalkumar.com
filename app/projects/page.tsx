import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl overflow-x-hidden px-4 pb-36 pt-28 sm:px-5">
      <SectionTitle title="Projects" description="A collection of AI, optimization, systems, cloud API, and software engineering projects." />
      <section className="grid w-full min-w-0 max-w-full grid-cols-1 gap-6 md:grid-cols-2 xl:gap-7">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </section>
    </main>
  );
}
