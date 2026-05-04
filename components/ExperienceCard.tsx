type ExperienceCardProps = {
  role: string;
  organization: string;
  date: string;
  location?: string;
  bullets: string[];
};

const ExperienceCard = ({ role, organization, date, location, bullets }: ExperienceCardProps) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <div>
          <h2 className="text-xl font-bold text-ink">{role}</h2>
          <p className="mt-1 font-semibold text-accent">
            {organization}
            {location ? ` | ${location}` : ""}
          </p>
        </div>
        <p className="font-semibold text-slate-500">{date}</p>
      </div>
      <ul className="mt-5 space-y-3 text-slate-600">
        {bullets.map((bullet) => (
          <li className="flex gap-3" key={bullet}>
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
