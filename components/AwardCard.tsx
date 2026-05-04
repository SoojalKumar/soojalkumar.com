type AwardCardProps = {
  title: string;
};

const AwardCard = ({ title }: AwardCardProps) => {
  return <div className="rounded-lg border-l-4 border-accent bg-sky-50 p-4 font-medium text-slate-700">{title}</div>;
};

export default AwardCard;
