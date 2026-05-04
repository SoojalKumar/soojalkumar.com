type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>}
      <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h1>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  );
};

export default SectionTitle;
