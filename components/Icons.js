// Reciva AI wordmark logo (rounded square mark + name). Recreated from the brand guide.
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
      {showName && <span className="font-display text-xl font-bold tracking-tight">Reciva AI</span>}
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

export function LinkedInIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// X (formerly Twitter) logo — filled, matches the official brand mark.
export function XIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function FeatureIcon({ name, className = "" }) {
  const icon = icons[name];
  if (!icon) return null;
  return <span className={className}>{icon}</span>;
}
