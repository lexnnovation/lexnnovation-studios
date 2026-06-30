// Reciva wordmark logo (rounded square mark + name). Recreated from the brand guide.
export function ReciaMark({ className = "", showName = true }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="grid h-9 w-9 place-items-center rounded-xl font-display text-lg font-bold text-white"
        style={{ background: "linear-gradient(135deg, #34d399 0%, #059669 100%)" }}
        aria-hidden="true"
      >
        R
      </span>
      {showName && <span className="font-display text-xl font-bold tracking-tight">Reciva</span>}
    </span>
  );
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const icons = {
  receptionist: (
    <svg {...base}>
      <path d="M4 11a8 8 0 0 1 16 0" />
      <rect x="2" y="11" width="4" height="6" rx="1.5" />
      <rect x="18" y="11" width="4" height="6" rx="1.5" />
      <path d="M20 17v1a3 3 0 0 1-3 3h-4" />
    </svg>
  ),
  whatsapp: (
    <svg {...base}>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
      <path d="M8.5 8.5c0 3.5 3.5 7 7 7 .8 0 1.3-.5 1.3-1.2 0-.3-1.7-1.2-2-1.2-.5 0-.8.7-1.1.7-.7 0-2.7-2-2.7-2.7 0-.3.7-.6.7-1.1 0-.3-.9-2-1.2-2-.7 0-1.3.5-1.3 1.5z" />
    </svg>
  ),
  sparkles: (
    <svg {...base}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z" />
    </svg>
  ),
  lead: (
    <svg {...base}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 11.5l1.8 1.8L21 10" />
    </svg>
  ),
  calendar: (
    <svg {...base}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
      <path d="M9.5 14.5l1.6 1.6 3.4-3.4" />
    </svg>
  ),
  chart: (
    <svg {...base}>
      <path d="M4 4v15a1 1 0 0 0 1 1h15" />
      <path d="M8 16v-4M12 16v-7M16 16v-2.5" />
    </svg>
  ),
};

export function FeatureIcon({ name, className = "" }) {
  const icon = icons[name];
  if (!icon) return null;
  return <span className={className}>{icon}</span>;
}
