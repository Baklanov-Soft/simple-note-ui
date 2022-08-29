import type { IconProps } from '../IconProps';

export function FileIcon({ size, className, fill }: IconProps) {
  return (
    <svg
      viewBox="0 0 225 225"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        d="m37.494 9.6172a8 8 0 0 0-8 8v189.95a8 8 0 0 0 8 8h149.28a8 8 0 0 0 8-8v-95.07-46.543l-45.721-56.34h-111.56zm14.551 75.367h115.7 4.2969v4.375 5.625h-120v-10zm0 28.969h120v10h-120v-10zm0 29.088h120v10h-120v-10zm0 29.176h60v10h-60v-10z"
        fill={fill}
      />
      <path
        d="m149.06 65.957 18.691 19.027h4.2969v4.375l22.732 23.141v-46.543z"
        opacity=".15"
      />
      <g fill="#fff">
        <path d="m149.06 9.6172v56.34h45.721z" opacity=".5" />
        <rect x="52.045" y="172.22" width="60" height="10" />
        <rect x="52.045" y="142.92" width="120" height="10" />
        <rect x="52.045" y="113.95" width="120" height="10" />
        <rect x="52.045" y="84.984" width="120" height="10" />
      </g>
    </svg>
  );
}
