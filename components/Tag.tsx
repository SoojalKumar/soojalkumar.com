type TagProps = {
  children: string;
};

const Tag = ({ children }: TagProps) => {
  return (
    <span className="max-w-full break-words rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
};

export default Tag;
