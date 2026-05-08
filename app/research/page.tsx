import AwardCard from "@/components/AwardCard";
import CertificationCard from "@/components/CertificationCard";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { awards, certifications, organizations, researchPublications } from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResearchPage() {
  const publication = researchPublications[0];

  return (
    <main className="mx-auto max-w-6xl px-5 py-28">
      <SectionTitle title="Research / Awards" description="Research, honors, certifications, and student organization leadership." />

      <MotionSection className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Best Paper Award</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{publication.title}</h2>
            <p className="mt-3 font-semibold text-slate-600">
              {publication.journal} · Published {publication.publishedLabel}
            </p>
            <p className="mt-5 leading-8 text-slate-700">{publication.abstractPreview}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {publication.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-l-4 border-accent bg-sky-50 p-6 shadow-sm ring-1 ring-sky-100">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Publication</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-ink">Author</dt>
                <dd className="text-slate-600">{publication.author}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Volume / Issue / Pages</dt>
                <dd className="text-slate-600">
                  Vol. {publication.volume}, Issue {publication.issue}, pp. {publication.pages}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">DOI</dt>
                <dd className="break-words text-slate-600">{publication.doiLabel}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={publication.doi}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent"
              >
                DOI <ExternalLink size={16} />
              </a>
              <Link
                href={publication.route}
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Read Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
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
