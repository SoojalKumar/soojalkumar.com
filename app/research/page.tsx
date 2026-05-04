import AwardCard from "@/components/AwardCard";
import CertificationCard from "@/components/CertificationCard";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { awards, certifications, organizations } from "@/lib/data";

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle title="Research / Awards" description="Research, honors, certifications, and student organization leadership." />
      <MotionSection className="rounded-xl border-l-4 border-accent bg-sky-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Best Paper Award</p>
        <h2 className="mt-2 text-2xl font-bold text-ink">
          Explainable AI for Intrusion Detection Systems: Enhancing Trust, Transparency, and Real-Time Threat Response
        </h2>
        <p className="mt-2 font-semibold text-slate-600">
          International Journal of AI, Big Data, Computational and Management Studies · Issued Apr 2026
        </p>
        <p className="mt-4 leading-8 text-slate-700">
          Recognized for research quality and technical contribution in AI-driven cybersecurity. The work focuses on
          integrating explainability techniques such as SHAP and LIME with machine learning models to improve
          transparency, trust, and real-time intrusion detection.
        </p>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">Honors & Awards</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {awards.map((award) => (
            <AwardCard title={award} key={award} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">Licenses & Certifications</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <CertificationCard title={certification} key={certification} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mt-12">
        <h2 className="border-b border-slate-200 pb-3 text-3xl font-bold text-ink">Organizations</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {organizations.map((org) => (
            <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200" key={org.title}>
              <h3 className="text-lg font-bold text-ink">{org.title}</h3>
              <p className="mt-2 font-semibold text-accent">{org.role}</p>
              <p className="mt-1 text-sm text-slate-500">{org.date}</p>
              <p className="mt-4 leading-7 text-slate-600">{org.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
