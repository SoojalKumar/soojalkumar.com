type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <article className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{skills.join(", ")}</p>
    </article>
  );
};

export default SkillCard;
