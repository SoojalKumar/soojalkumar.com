import MotionSection from "@/components/MotionSection";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle title="Projects" description="A collection of AI, optimization, systems, cloud API, and software engineering projects." />
      <MotionSection className="grid gap-7 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </MotionSection>
    </main>
  );
}
