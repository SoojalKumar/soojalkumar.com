import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function ResumePage() {
  const resumePath = path.join(process.cwd(), "public", "resume.pdf");
  const hasResume = fs.existsSync(resumePath);

  return (
    <main className="mx-auto max-w-5xl px-5 py-28">
      <SectionTitle
        title="Resume"
        description="View or download my resume for a concise overview of my education, experience, projects, and technical skills."
      />
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/resume.pdf" className="rounded-lg bg-accent px-5 py-3 font-semibold text-white transition hover:bg-sky-500">
          Download Resume
        </a>
        <Link href="/" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white transition hover:bg-slate-800">
          Back to Portfolio
        </Link>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
        {hasResume ? (
          <iframe src="/resume.pdf" title="Soojal Kumar Resume" className="h-[75vh] w-full" />
        ) : (
          <div className="p-10 text-center text-slate-600">
            Resume PDF will appear here once resume.pdf is added to the public folder.
          </div>
        )}
      </div>
    </main>
  );
}
