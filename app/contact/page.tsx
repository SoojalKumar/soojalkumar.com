import { BookOpen, ExternalLink, Mail, MapPin } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import ProfileAvatar from "@/components/ProfileAvatar";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/lib/data";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "GitHub", value: "github.com/SoojalKumar", href: "https://github.com/SoojalKumar", Icon: ExternalLink },
  { label: "LinkedIn", value: "linkedin.com/in/soojal-kumar-sk", href: "https://www.linkedin.com/in/soojal-kumar-sk", Icon: ExternalLink },
  { label: "ORCID", value: "0009-0006-9082-2658", href: "https://orcid.org/0009-0006-9082-2658", Icon: BookOpen },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-28 text-center">
      <ProfileAvatar size="small" />
      <SectionTitle title="Let's Connect" description="I'm open to software engineering, backend, full-stack, cybersecurity, AI, and systems-focused opportunities." />
      <MotionSection className="grid gap-4 text-left md:grid-cols-2">
        {contacts.map(({ label, value, href, Icon }) => {
          const content = (
            <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-soft">
              <Icon className="text-accent" size={24} />
              <div>
                <p className="font-semibold text-ink">{label}</p>
                <p className="text-slate-600">{value}</p>
              </div>
            </div>
          );
          return href ? (
            <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} key={label}>
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </MotionSection>
    </main>
  );
}
