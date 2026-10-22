type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Chat({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 19.5l1.3-3.9A8 8 0 1 1 8.4 18.7z" />
      <path d="M9 10.5c0 2.2 2.3 4.5 4.5 4.5l1.2-1.3-1.6-.9-.8.6a3.3 3.3 0 0 1-1.7-1.7l.6-.8-.9-1.6z" />
    </svg>
  );
}

export function Plus({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
