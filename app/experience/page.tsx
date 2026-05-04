import ExperienceCard from "@/components/ExperienceCard";
import MotionSection from "@/components/MotionSection";
import SectionTitle from "@/components/SectionTitle";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-28">
      <SectionTitle title="Experience" description="Operations, student leadership, teaching support, campus service, and technical-adjacent work." />
      <MotionSection className="space-y-6">
        {experience.map((item) => (
          <ExperienceCard {...item} key={`${item.role}-${item.date}`} />
        ))}
      </MotionSection>
    </main>
  );
}
