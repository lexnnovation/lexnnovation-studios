/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy. The whole site is statically generated (good for SEO + CDN
// caching), so we deliberately avoid nonce-based CSP — that would force every page into
// dynamic rendering. There's no user-generated content, auth, or sensitive data here, so
// allowing 'unsafe-inline' for scripts/styles is the right tradeoff: it's required by the
// no-flash theme script in app/layout.js, Next's hydration inline scripts, and the inline
// styles React/Tailwind emit. The high-value protections still apply — frame-ancestors
// (clickjacking), object-src 'none', and base-uri 'self'.
//
// CSP is PRODUCTION-ONLY. In dev, `upgrade-insecure-requests` upgrades http://localhost to
// https (breaking every asset + HMR), and the tight connect-src blocks the HMR websocket /
// LAN phone testing. Vercel serves the production build, so dev loses nothing by skipping it.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.clarity.ms",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Applied to every route. HSTS includeSubDomains covers portfolio.lexnnovation.com (all on
// Vercel HTTPS). `preload` is intentionally omitted — it's a hard-to-reverse commitment that
// also requires manual submission at hstspreload.org; the owner can add it once happy.
// (HSTS is ignored by browsers over http://localhost, so it's harmless in dev.)
const securityHeaders = [
  // CSP only in production — see note above.
  ...(isDev ? [] : [{ key: "Content-Security-Policy", value: csp }]),
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig = {
  // Don't advertise the framework (minor info-disclosure hardening).
  poweredByHeader: false,

  // Allow loading dev resources (HMR, JS bundles) when testing on phones/other
  // devices over the LAN. Dev-only — has no effect on the production build.
  allowedDevOrigins: ["192.168.0.129"],

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
