import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { coursework, profile, skillGroups, softSkills } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle title="About Me" />
      <MotionSection className="rounded-xl border-l-4 border-accent bg-sky-50 p-8 shadow-sm">
        <p className="text-lg leading-8 text-slate-700">
          I am a Computer Science graduate from the University of the Pacific with a strong interest in software
          engineering, AI, optimization, cybersecurity, and systems programming. My work combines hands-on project
          development with a deep curiosity for how software systems are designed, optimized, secured, and deployed. I
          enjoy building practical applications using technologies such as Python, TypeScript, React, FastAPI, Docker,
          SQLite, and modern developer workflows.
        </p>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">Education</h2>
        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-ink">Bachelor of Science in Computer Science</h3>
              <p className="mt-2 font-semibold text-accent">University of the Pacific</p>
            </div>
            <p className="font-semibold text-slate-500">2021 - {profile.graduation}</p>
          </div>
          <p className="mt-5 font-semibold text-slate-700">Relevant coursework</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {coursework.map((item) => (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">Technical Skills</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCard title={group.title} skills={group.skills} key={group.title} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">Soft Skills</h2>
        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="leading-8 text-slate-700">{softSkills.join(", ")}</p>
        </div>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">More About Me</h2>
        <div className="mt-6 grid gap-5 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:grid-cols-2">
          <Info label="Based in" value={profile.location} />
          <Info label="Interests" value="AI, cybersecurity, backend systems, optimization, simulation, developer tools, cloud APIs" />
          <Info label="Languages" value="English, Hindi, Sindhi, Urdu" />
          <Info label="Professional Focus" value="Software engineering, full-stack development, AI systems, cybersecurity-aware applications" />
        </div>
      </MotionSection>

      <MotionSection className="mt-12 rounded-xl bg-navy p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Career Goals</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
          My goal is to grow as a software engineer by building scalable applications, secure systems, AI-powered
          workflows, and cloud-ready platforms. I am especially interested in roles that combine backend engineering,
          full-stack development, cybersecurity, AI, and practical systems design.
        </p>
      </MotionSection>
    </main>
  );
}

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="border-b border-slate-200 pb-4">
    <p className="font-semibold text-accent">{label}</p>
    <p className="mt-1 text-slate-700">{value}</p>
  </div>
);
