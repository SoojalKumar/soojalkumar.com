import Link from "next/link";
import { BookOpen, ExternalLink, Mail } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { featuredProjectSlugs, profile, projects, socialLinks } from "@/lib/data";

const icons = {
  GitHub: ExternalLink,
  LinkedIn: ExternalLink,
  Email: Mail,
  ORCID: BookOpen,
};

export default function HomePage() {
  const featured = projects.filter((project) => featuredProjectSlugs.includes(project.slug));

  return (
    <main className="pt-16">
      <MotionSection className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center">
        <ProfileAvatar />
        <h1 className="mt-8 text-5xl font-bold tracking-tight text-ink md:text-7xl">{profile.name}</h1>
        <p className="mt-5 text-2xl font-medium text-slate-700">{profile.title}</p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{profile.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/projects" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800">
            View Projects
          </Link>
          <Link href="/resume" className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-ink transition hover:border-accent">
            View Resume
          </Link>
          <Link href="/contact" className="rounded-lg bg-accent px-5 py-3 font-semibold text-white transition hover:bg-sky-500">
            Contact Me
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = icons[link.label as keyof typeof icons];
            return (
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                key={link.label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:text-accent"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-6xl px-5 pb-20">
        <SectionTitle title="Featured Projects" description="A focused snapshot of my AI, cloud API, and systems work." />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
