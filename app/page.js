import Link from "next/link";
import {
  product,
  whatItDoes,
  useCases,
  valuePillars,
  trustBadges,
  faqs,
} from "@/lib/site";
import { ReciaMark, FeatureIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import ChatMockup from "@/components/ChatMockup";

const useCaseColors = [
  "bg-slate-900 dark:bg-slate-800",
  "bg-brand-600",
  "bg-emerald-900 dark:bg-emerald-800",
  "bg-zinc-800 dark:bg-zinc-700",
];

const steps = [
  { n: "01", title: "Customer messages on WhatsApp", body: "They reach out on the channel they already use — no app, no friction." },
  { n: "02", title: "Reciva AI chats and answers", body: "It replies naturally, answers questions about your business, and keeps the conversation flowing." },
  { n: "03", title: "It qualifies and captures the lead", body: "Through a smart question flow, it collects what matters and saves the lead automatically." },
  { n: "04", title: "You step in to close", body: "A qualified lead lands with you in real time — ready to seal the deal." },
];

function LeadNotification() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500 font-display text-sm font-bold text-white">
            KA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">New lead captured</span>
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            </div>
            <div className="text-xs text-zinc-500">Kofi Agyemang · just now</div>
          </div>
        </div>
        <dl className="mt-4 space-y-2 text-xs">
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 font-semibold text-zinc-900 dark:text-zinc-100">Interest</dt>
            <dd className="text-zinc-500">2-bed apartment, East Legon</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 font-semibold text-zinc-900 dark:text-zinc-100">Budget</dt>
            <dd className="text-zinc-500">$1,200 / month</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 font-semibold text-zinc-900 dark:text-zinc-100">Timeline</dt>
            <dd className="text-zinc-500">Next month</dd>
          </div>
        </dl>
        <div className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          ✓ Qualified · ready for your follow-up
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-zinc-400">Captured while you were away</p>
    </div>
  );
}

// Three verticals, three real conversation shapes — shows the product handles
// different kinds of businesses, not just one script.
// Times deliberately land late-night / early-morning across the three cards —
// a quiet reinforcement of "never sleeps" without saying it again in copy.
const heroChats = [
  {
    business: "East Legon Realty",
    label: "Real estate",
    bubbles: [
      { from: "them", text: "Hi, do you have 2-bedroom apartments in East Legon?", time: "11:47 PM" },
      { from: "reciva", text: "Yes, we've got a few available! What's your budget and move-in date?", time: "11:47 PM" },
      { from: "them", text: "Around $1,200/month, next month.", time: "11:52 PM" },
      { from: "reciva", text: "Perfect, noted ✅ Can I get your name so our team sends you options?", time: "11:52 PM" },
    ],
  },
  {
    business: "Osu Sneaker Co.",
    label: "Retail & vendors",
    bubbles: [
      { from: "them", text: "Do you have the black sneakers in size 42?", time: "2:14 AM" },
      { from: "reciva", text: "Size 42 is in stock 🔥 GHS 350 — want me to place the order?", time: "2:14 AM" },
      { from: "them", text: "Yes please, cash on delivery?", time: "2:19 AM" },
      { from: "reciva", text: "Sure thing, that works. What's your delivery address?", time: "2:19 AM" },
    ],
  },
  {
    business: "Bright Smile Dental",
    label: "Clinics & services",
    bubbles: [
      { from: "them", text: "Can I book a dental cleaning this week?", time: "4:32 AM" },
      { from: "reciva", text: "Of course! We have Thursday 2pm or Friday 10am open — which works?", time: "4:33 AM" },
      { from: "them", text: "Friday 10am please.", time: "4:36 AM" },
      { from: "reciva", text: "You're booked 🦷 We'll send a reminder the day before. See you then!", time: "4:36 AM" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — pulled up by mt-16 so its bg extends behind the floating pill nav */}
      <section className="relative -mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_70%_0%,rgba(16,185,129,0.14),transparent)]" />
        <div className="flex flex-col items-center px-5 pb-20 pt-32 text-center sm:px-10 sm:pb-28 sm:pt-44">
          <span
            className="eyebrow reveal text-[11px] text-brand-700 dark:text-brand-400"
            style={{ animationDelay: "0s" }}
          >
            Reciva AI · by Lexnnovation Studios
          </span>
          <h1 className="display reveal mt-8" style={{ animationDelay: "0.1s" }}>
            {/* Mobile-only arrangement — separate from tablet/desktop below. */}
            <span className="block text-6xl sm:hidden">Your</span>
            <span className="block text-6xl text-brand-600 sm:hidden">WhatsApp AI</span>
            <span className="block text-6xl text-brand-600 sm:hidden">Receptionist</span>
            <span className="block text-6xl sm:hidden">that never sleeps – so you can.</span>

            {/* Tablet and up — unchanged. */}
            <span className="hidden sm:block sm:text-8xl lg:text-[7.5rem]">
              Your <span className="text-brand-600">WhatsApp AI</span>
            </span>
            <span className="hidden sm:block sm:text-8xl lg:text-[7.5rem]">
              <span className="text-brand-600">Receptionist</span> that
            </span>
            <span className="hidden sm:block sm:text-8xl lg:text-[7.5rem]">never sleeps – so you can.</span>
          </h1>
          <p
            className="mt-8 reveal max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400"
            style={{ animationDelay: "0.2s" }}
          >
            Meet <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Reciva AI</strong> — the
            AI receptionist that replies to your customers on WhatsApp in seconds, asks the right
            questions, and captures every lead automatically. Wake up to qualified leads instead of
            missed messages.
          </p>
          <div
            className="mt-10 reveal flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <ObfuscatedEmail
              subject="Book a demo"
              className="rounded-full bg-zinc-950 px-9 py-4 text-center text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Book a demo
            </ObfuscatedEmail>
            <Link
              href="/#how-it-works"
              className="rounded-full border border-zinc-300 px-9 py-4 text-center text-base font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              See how it works
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
          <div className="reveal grid gap-8 sm:grid-cols-3" style={{ animationDelay: "0.3s" }}>
            {heroChats.map((c) => (
              <ChatMockup key={c.label} business={c.business} label={c.label} bubbles={c.bubbles} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-center">
          {trustBadges.map((b) => (
            <span key={b} className="eyebrow text-[11px] text-zinc-500 dark:text-zinc-400">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* What Reciva AI does — 3-up */}
      <section id="reciva" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="max-w-2xl">
          <ReciaMark />
          <h2 className="display mt-5 text-4xl sm:text-6xl">
            What a {product.category} does
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{product.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whatItDoes.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <FeatureIcon name={f.icon} className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:h-6 [&_svg]:w-6 dark:bg-brand-800/20 dark:text-brand-400" />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works — brand-green horizontal timeline */}
      <section id="how-it-works" className="bg-brand-600">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal className="text-center">
            <span className="eyebrow text-[11px] text-brand-100">How it works</span>
            <h2 className="display mt-3 text-3xl text-white sm:text-[2.5rem]">From first message to closed deal</h2>
            <p className="mt-4 text-lg text-brand-100">Four steps. No new tools for you or your customers.</p>
          </Reveal>
          <div className="relative mt-16">
            {/* connector line — visible on lg only */}
            <div className="absolute top-5 left-0 right-0 hidden h-px bg-white/30 lg:block" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100} className="border-l-2 border-white/40 pl-5 lg:border-none lg:pl-0">
                  <div className="relative z-10 mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 ring-2 ring-white">
                    <span className="display text-sm text-white">{s.n}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for — bold coloured mosaic */}
      <section id="use-cases" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-[11px] text-brand-600">Who it's for</span>
          <h2 className="display mt-3 text-4xl sm:text-6xl">Built for any business with customers on WhatsApp</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Reciva AI is configured to your business, so it fits your niche from day one.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={i * 100} className={`${useCaseColors[i]} relative min-h-[200px] overflow-hidden rounded-2xl p-8`}>
              <h3 className="text-xl font-bold text-white">{u.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{u.body}</p>
              <div className="pointer-events-none absolute right-4 bottom-4 text-white/15">
                <FeatureIcon name={u.icon} className="[&_svg]:h-20 [&_svg]:w-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Reciva AI — split layout: pillars left, lead notification right */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal from="left">
              <span className="eyebrow text-[11px] text-brand-600">Why Reciva AI</span>
              <h2 className="display mt-3 text-4xl sm:text-6xl">A WhatsApp AI receptionist that feels human</h2>
              <div className="mt-10">
                {valuePillars.map((p, i) => (
                  <div
                    key={p.title}
                    className={
                      i === 0
                        ? "mb-3 rounded-r-xl border-l-4 border-brand-500 bg-brand-50 py-4 pl-5 dark:bg-brand-900/20"
                        : "border-b border-zinc-200 py-5 last:border-0 dark:border-zinc-800"
                    }
                  >
                    <h3 className={`text-base font-bold text-zinc-900 ${i !== 0 ? "dark:text-zinc-100" : ""}`}>{p.title}</h3>
                    <p className={`mt-1 text-sm leading-relaxed text-zinc-600 ${i === 0 ? "dark:text-brand-300" : "dark:text-zinc-300"}`}>{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal from="right" delay={150} className="flex justify-center">
              <LeadNotification />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
        <Reveal className="text-center">
          <span className="eyebrow text-[11px] text-brand-600">FAQ</span>
          <h2 className="display mt-3 text-4xl sm:text-6xl">Questions, answered</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold">
                  {f.q}
                  <span className="text-brand-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {f.a}
                  {f.q.includes("data") && (
                    <>
                      {" "}
                      <Link href="/privacy" className="font-medium text-brand-600 hover:underline">Privacy Policy</Link>
                      {" · "}
                      <Link href="/data-deletion" className="font-medium text-brand-600 hover:underline">Data Deletion</Link>.
                    </>
                  )}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center sm:px-16">
            <div className="mx-auto mb-5 flex justify-center">
              <ReciaMark className="text-white" />
            </div>
            <h2 className="display text-3xl text-white sm:text-[2.5rem]">
              Ready to stop missing customers?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-zinc-300">
              See Reciva AI in action. Email us and we'll set up your AI receptionist for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ObfuscatedEmail
                subject="Book a demo"
                className="w-full rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 sm:w-auto"
              >
                Book a demo
              </ObfuscatedEmail>
              <Link
                href="/contact"
                className="w-full rounded-full border border-white/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
