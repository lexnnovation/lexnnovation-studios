"use client";

import { useEffect, useState } from "react";

// base64 of "hello@lexnnovation.com" — kept out of the static HTML so naive
// scrapers can't read it. Assembled in the browser only.
const ENC = "aGVsbG9AbGV4bm5vdmF0aW9uLmNvbQ==";
const MUNGED = "hello [at] lexnnovation [dot] com";

export default function ObfuscatedEmail({ className, subject, children }) {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    try {
      setEmail(atob(ENC));
    } catch {}
  }, []);

  // Pre-hydration / no-JS: render a non-clickable, munged label — no real
  // address and no mailto: link in the server HTML.
  if (!email) {
    return <span className={className}>{children ?? MUNGED}</span>;
  }

  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <a className={className} href={href}>
      {children ?? email}
    </a>
  );
}
