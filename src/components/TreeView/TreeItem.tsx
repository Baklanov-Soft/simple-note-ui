export type TreeItemProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export function TreeItem({ onClick, children }: TreeItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left truncate transition-colors hover:bg-slate-100"
      >
        {children}
      </button>
    </li>
  );
}
