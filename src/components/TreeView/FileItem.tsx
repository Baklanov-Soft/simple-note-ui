import { FileIcon } from '../FileIcon/FileIcon';
import { TreeItem } from './TreeItem';

export type FileItemProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
  title: string;
};

export function FileItem({ onClick, color, title }: FileItemProps) {
  return (
    <TreeItem onClick={onClick}>
      <FileIcon fill={color} size={32} className="inline-block m-1" />
      <span className="ml-1 align-middle text-slate-800">{title}</span>
    </TreeItem>
  );
}
