type CertificationCardProps = {
  title: string;
};

const CertificationCard = ({ title }: CertificationCardProps) => {
  return <div className="rounded-lg bg-white p-4 text-slate-700 ring-1 ring-slate-200">{title}</div>;
};

export default CertificationCard;
