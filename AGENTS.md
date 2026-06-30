<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Lexnnovation Studios website

> Canonical context for AI coding tools (Claude Code, Codex, Windsurf). `CLAUDE.md` imports this
> file. Keep it current. The detailed build plan lives in `docs/PLAN.md`.

## 1. What this is
The **company marketing website** for **Lexnnovation Studios** — an AI engineering / software
studio in Ghana. Its job is to present the company and sell the flagship product, the
**WhatsApp AI Receptionist**, and to host the legal/utility pages Meta requires for WhatsApp
app review.

This repo is **website only**. The product/backend (the actual WhatsApp AI Receptionist SaaS)
is a **separate project** (`whatsapp_receptionist`) and is NOT part of this repo. Do not couple
them.

## 2. Stack
- **Next.js 16** (App Router) · **React 19** · **Tailwind v4** · JavaScript (no TS).
- Tailwind v4 config is **in CSS** (`app/globals.css`: `@import "tailwindcss"` + `@theme`).
  There is **no `tailwind.config.js`**.
- Deploy: **Vercel**. SEO matters (ads/Google) → static generation + per-page metadata.

## 3. How to run
```bash
npm run dev      # http://localhost:3000
npm run build    # static build — every route should prerender
npm run start    # serve the production build
npm run lint
```

## 4. Conventions
- Keep routes simple App-Router pages (`app/<route>/page.js`) with `export const metadata`.
- Reuse shared layout chrome (header/footer) — don't duplicate nav markup per page.
- **Theming:** light + dark mode with a toggle, **default light**. Use a class-based dark
  variant (`.dark` on `<html>`) defined in `globals.css`; persist to localStorage; prevent
  theme flash with an inline script in the root layout. See `docs/PLAN.md`.
- Content must be **truthful** — use the business facts below; never invent clients, team size,
  or metrics.

## 5. Business facts (source of truth)
- Legal name: **Lexnnovation Studios** · Sole proprietorship · Ghana
- Reg No **BN338350423** · TIN **P0062821083** · Founder **Alex Teye Larweh**
- Email **hello@lexnnovation.com** · WhatsApp/phone **+233 20 823 3500**
  (WhatsApp CTA → `https://wa.me/233208233500`)
- Location (public display): **Accra, Ghana** — the full registered address is on file with
  Meta/RGD but is intentionally NOT shown on the site.
- Activity: creative & software development, web/app & software development, AI solutions
- Flagship product: **Reciva** — the WhatsApp AI receptionist (multi-tenant SaaS; chats with
  customers on WhatsApp, qualifies them, captures leads, notifies the business owner). Tagline:
  "Never miss a customer again." Reciva is the *product* brand; Lexnnovation Studios is the
  *company*. Surface Reciva prominently. Logo mark + feature icons live in `components/Icons.js`.
- Email is obfuscated (`components/ObfuscatedEmail.js`) to reduce scraping — keep the plain
  address out of rendered markup; use that component, never a raw `mailto:`. The WhatsApp number
  stays public.

## 6. Pages
`/` (home), `/privacy`, `/terms`, `/data-deletion` (required for Meta app review), `/contact`.
Shared header + footer; footer links the four legal/utility pages + socials
(x.com/lexnnovation, github.com/lexnnovation, LinkedIn).

## 7. Domain
Company site → **lexnnovation.com** (Meta-verified domain). The owner's personal portfolio
(separate `mrlarweh` repo) moves to **portfolio.lexnnovation.com** — handled in Vercel, no code
here.

## 8. Current state
Scaffolded (Next 16 + Tailwind v4). Building: layout/theming → home → legal pages → SEO →
verify → deploy. Track progress in `docs/PLAN.md` (Status section).
