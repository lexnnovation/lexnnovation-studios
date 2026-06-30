# Build Plan — Lexnnovation Studios company website

## Why this project exists
Meta has verified the business **Lexnnovation Studios** (sole proprietorship, Ghana). The
flagship product is the **WhatsApp AI Receptionist** (multi-tenant SaaS that chats with
customers on WhatsApp, qualifies them, captures leads, and notifies the business). This site is
the **company marketing presence** — built so the owner can start **demoing and selling** the
product, and so Meta has the legal/utility URLs it needs for WhatsApp app review.

The product/backend lives in a **separate** project (`whatsapp_receptionist`). This repo is the
website only and is fully independent of it.

## Stack
- Next.js 16 (App Router) · React 19 · **Tailwind v4** (CSS config in `app/globals.css` via
  `@import "tailwindcss"` + `@theme` — there is NO `tailwind.config.js`).
- JavaScript (no TypeScript). Deploy: Vercel.
- SEO is a priority (ads/Google) → static-generated pages, per-page metadata, sitemap, robots.

## Domain plan
- Company site → **lexnnovation.com** (the domain Meta verified — keeps Privacy/Data-Deletion
  URLs on the known domain).
- Existing personal portfolio (separate `mrlarweh` repo) → re-points to
  **portfolio.lexnnovation.com** (Vercel subdomain change, no code).

## Pages (v1)
1. `/` Home — hero (AI engineering / software studio), **WhatsApp AI Receptionist** flagship
   (what it does, who it's for, how it works), services, strong CTA ("Book a demo" / "Chat on
   WhatsApp" via wa.me link).
2. `/privacy` — Privacy Policy (covers WhatsApp data, Supabase, OpenAI/Meta third parties,
   retention, deletion + the website).
3. `/terms` — Terms of Service (site + receptionist service, IP, liability, governing law Ghana).
4. `/data-deletion` — **required for Meta app review**: how to request deletion of WhatsApp
   conversation data.
5. `/contact` — email hello@lexnnovation.com, phone +233 20 823 3500, location, WhatsApp link.

Shared header (logo + nav) and footer (legal links + socials).

## Business facts (source of truth — do not overclaim)
- Legal name: **Lexnnovation Studios** · Sole proprietorship · Ghana
- Reg No **BN338350423** · TIN **P0062821083**
- Founder: **Alex Teye Larweh**
- Email: **hello@lexnnovation.com** · Phone/WhatsApp business: **+233 20 823 3500**
- Location (public display): **Accra, Ghana** (full registered address kept off the site)
- Activity: creative & software development, web/app & software development, AI solutions
- Flagship: **WhatsApp AI Receptionist**

## Theming (requirement)
- Support **light and dark mode** with a user toggle. **Default = light mode.**
- Tailwind v4: use a class-based dark variant (`.dark` on `<html>`) — define
  `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css` (NOT the default
  prefers-color-scheme), so the toggle controls the theme. Persist choice (localStorage),
  fall back to light. Avoid flash-of-wrong-theme with a small inline script in the layout.

## SEO
Per-page `metadata` (title/description/canonical/OG/Twitter), `app/sitemap.js`, `app/robots.js`,
default OG image in `public/`.

## Verification
- `npm run dev` → http://localhost:3000: Home + all four pages render; nav/footer links work;
  WhatsApp CTA opens wa.me.
- `npm run build` → all routes statically generated; view-source shows real HTML on legal pages;
  `/sitemap.xml` + `/robots.txt` resolve.
- Deploy: push to a new GitHub repo under `lexnnovation` → import to Vercel → map domain.

## Branding
- Site brand = **Lexnnovation Studios** (company). Descriptor: **"Software Development & AI
  Engineering Studio"**.
- Flagship product = **Reciva** (the WhatsApp AI receptionist), surfaced prominently: in the
  hero, nav ("Reciva"), a dedicated "Meet Reciva" section with feature icons, the WhatsApp chat
  mockup, and the CTA. Tagline: "Never miss a customer again." Logo = green gradient "R" mark
  (`ReciaMark` in `components/Icons.js`, recreated from the brand guide).
- Palette: brand greens (emerald) + slate-900 navy panels + white. Feature icons = inline SVG
  in `components/Icons.js`.
- Brand guide source: `~/Designer/LEXXX/SAAS STARTUPS/WhatsApp AI Receptionist (Reciva AI)/image.png`.

## Anti-spam
- Email is **obfuscated** via `components/ObfuscatedEmail.js` (base64, assembled client-side).
  Verified the plain address is NOT in the prerendered HTML. WhatsApp business number stays
  public (it's the lead funnel; Reciva itself filters spam).

## Status
- [x] Scaffold (Next 16 + Tailwind v4)
- [x] Layout (header/footer/fonts) + theming (light default + dark toggle, class-based, no-flash)
- [x] Home page — **v2 redesign (2026-06-30):** Presto-inspired flow + copy. Sections: hero
  (foregrounds "WhatsApp AI Receptionist" in the H1) → trust strip → what it does (3-up) →
  how it works (numbered) → who it's for (use cases) → why Reciva → FAQ accordion → navy CTA.
- [x] Typography swapped to **Plus Jakarta Sans** only (display = big/weight-800/tight via
  `.display` in globals.css). Replaced Space Grotesk + Inter.
- [x] Legal/utility pages (privacy, terms, data-deletion, contact)
- [x] **Contact = email-only** (anti-scraping): no phone/WhatsApp number or wa.me links anywhere;
  all CTAs → obfuscated email. Footer social = X only (no GitHub/LinkedIn). Location shows
  "Accra, Ghana" only. Contact-page founder shows "Lexnnovation" linked to x.com/lexnnovation.
- [x] Mobile header: full-screen animated menu + dark-mode toggle, verified working on a real phone.
- [x] SEO (per-page metadata, sitemap.js, robots.js) — OG image still TODO (text-only OG for now)
- [x] Local verify + clean build (all routes prerender static)

### Next steps (resume here)
- [x] **Security pass** (2026-06-30): added security headers in `next.config.mjs` —
  CSP (static-friendly, `'unsafe-inline'` for the no-flash theme script; no nonce so static
  generation is preserved), HSTS (`includeSubDomains`, no `preload`), `X-Content-Type-Options`,
  `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`; `poweredByHeader: false`.
  Verified served on `/` + `/privacy` via `next start` + curl, and baked clean (no `unsafe-eval`)
  into `routes-manifest.json`. Confirmed no `.env`/secrets committed (`.env*` gitignored), no PII
  (TIN/RegNo) and no plain email/`mailto`/phone in the prerendered HTML (obfuscation holds).
  `npm audit`: 2 moderate (postcss via next) — build-time only, "fix" would downgrade Next to v9
  → **not actioned** (no runtime risk for a static site). Lint: 24 pre-existing non-blocking
  errors (cosmetic unescaped entities + intentional set-state-in-effect) — left as-is.
- [ ] **Commit** to git (nothing committed yet — verify with `git status`/`git log`).
- [ ] **Push to GitHub** (owner creates the repo under the `lexnnovation` org/account).
- [ ] **Deploy to Vercel** + map **lexnnovation.com** (owner does Vercel import + domain/DNS).
  Reason it matters now: Meta may check the main domain during business/app review.
- [ ] OG share image in public/ + real Reciva logo SVG (nice-to-have).
- [ ] Move personal portfolio (separate `mrlarweh` repo) to portfolio.lexnnovation.com (Vercel only).

## Local testing on a phone (same WiFi)
Run `npx next dev -H 0.0.0.0`, open `http://<mac-LAN-IP>:3000` on the phone. Next 16 **blocks dev
JS from non-localhost origins** → page renders but is dead (no interactivity) until you add the IP
to `allowedDevOrigins` in `next.config.mjs` and restart. Current IP whitelisted: `192.168.0.129`
(update if the LAN IP changes). This is dev-only; no effect on the production build. Cache-bust on
the phone with `?v=N` if you can't hard-refresh.

## Gotcha (learned)
- Tailwind v4 caches the `@theme` block in `.next` — adding new `--color-*` tokens mid-session
  may not compile even after a dev restart. Prefer built-in palette colors (e.g. `slate-900`) or
  `rm -rf .next` after editing `@theme`.
- Avoid `backdrop-blur` on mobile interactive bars — WebKit/Chrome can break touch hit-testing of
  child controls. Header uses `md:backdrop-blur` (blur only on ≥ md). (The real cause of the dead
  mobile buttons was `allowedDevOrigins` above, but this guard stays.)
