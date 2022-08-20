import type { Property } from 'csstype';

export type FolderIconProps = {
  /** Base color. */
  fill: Property.Fill;

  /** Width and height. */
  size: string | number;
};

export function FolderIcon({ fill, size }: FolderIconProps) {
  return (
    <svg viewBox="0 0 225 225" width={size} height={size}>
      <path
        d="m37.021 38.213a18 18 0 0 0-18 18v18.23a18 18 0 0 1 0.78516-4.959 18 18 0 0 0-0.78516 4.959v94.125a18 18 0 0 0 18 18h150.85a18 18 0 0 0 18-18v-94.125a18 18 0 0 0-18-18h-84.6v-0.23047l-18-18h-48.252zm0 18.23a18 18 0 0 0-4.959 0.78516 18 18 0 0 1 4.959-0.78516zm-5.9883 1.0977a18 18 0 0 0-4.3613 2.2227 18 18 0 0 1 4.3613-2.2227zm-4.9902 2.7383a18 18 0 0 0-3.1855 3.1855 18 18 0 0 1 3.1855-3.1855zm-3.7012 3.8145a18 18 0 0 0-2.2227 4.3613 18 18 0 0 1 2.2227-4.3613z"
        style={{ fill }}
      />
      <path
        d="m37.021 38.213a18 18 0 0 0-18 18v18.23a18 18 0 0 1 18-18h66.252v-0.23047l-18-18z"
        opacity=".15"
      />
    </svg>
  );
}
