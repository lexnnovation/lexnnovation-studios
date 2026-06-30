import Link from "next/link";
import {
  site,
  product,
  whatItDoes,
  useCases,
  valuePillars,
  trustBadges,
  faqs,
} from "@/lib/site";
import { ReciaMark, FeatureIcon } from "@/components/Icons";
const steps = [
  { n: "01", title: "Customer messages on WhatsApp", body: "They reach out on the channel they already use — no app, no friction." },
  { n: "02", title: "Reciva chats and answers", body: "It replies naturally, answers questions about your business, and keeps the conversation flowing." },
  { n: "03", title: "It qualifies and captures the lead", body: "Through a smart question flow, it collects what matters and saves the lead automatically." },
  { n: "04", title: "You step in to close", body: "A qualified lead lands with you in real time — ready to seal the deal." },
];

function ChatMockup() {
  const bubbles = [
    { from: "them", text: "Hi, do you have 2-bedroom apartments in East Legon?" },
    { from: "reciva", text: "Hi! 👋 Yes, we do. What's your budget and move-in date?" },
    { from: "them", text: "Around $1,200/month, next month." },
    { from: "reciva", text: "Perfect — noted ✅ Can I get your name so our team sends you options?" },
  ];
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3 rounded-t-3xl bg-slate-900 px-4 py-3 text-white">
        <ReciaMark showName={false} />
        <div className="leading-tight">
          <div className="text-sm font-semibold">Reciva</div>
          <div className="text-xs text-brand-400">online</div>
        </div>
      </div>
      <div className="space-y-3 px-4 py-5">
        {bubbles.map((b, i) =>
          b.from === "them" ? (
            <div
              key={i}
              className="reveal max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-100 px-3 py-2 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
              style={{ animationDelay: `${0.15 + i * 0.45}s` }}
            >
              {b.text}
            </div>
          ) : (
            <div
              key={i}
              className="reveal ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-sm text-white"
              style={{ animationDelay: `${0.15 + i * 0.45}s` }}
            >
              {b.text}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — category foregrounded: WhatsApp AI Receptionist */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_70%_0%,rgba(16,185,129,0.14),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] text-brand-700 dark:border-brand-800 dark:bg-brand-800/20 dark:text-brand-400">
              Reciva · by Lexnnovation Studios
            </span>
            <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-[4.25rem]">
              Your{" "}
              <span className="text-brand-600">WhatsApp AI Receptionist</span>{" "}
              that never sleeps.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Meet <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Reciva</strong> — it
              chats with your customers on WhatsApp, answers their questions, qualifies them, and captures
              every lead, 24/7. So your business keeps selling, even when you're off the clock.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-600 px-7 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Book a demo
              </a>
              <Link
                href="/#how-it-works"
                className="rounded-full border border-zinc-300 px-7 py-3 text-center text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                See how it works
              </Link>
            </div>
          </div>
          <ChatMockup />
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

      {/* What Reciva does — 3-up */}
      <section id="reciva" className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <ReciaMark />
          <h2 className="display mt-5 text-3xl sm:text-[2.5rem]">
            What a {product.category} does
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{product.description}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whatItDoes.map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <FeatureIcon name={f.icon} className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:h-6 [&_svg]:w-6 dark:bg-brand-800/20 dark:text-brand-400" />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <span className="eyebrow text-[11px] text-brand-600">How it works</span>
            <h2 className="display mt-3 text-3xl sm:text-[2.5rem]">From first message to closed deal</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Four steps. No new tools for you or your customers.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="display text-2xl text-brand-600">{s.n}</div>
                <h3 className="mt-3 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for — use cases */}
      <section id="use-cases" className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <span className="eyebrow text-[11px] text-brand-600">Who it's for</span>
          <h2 className="display mt-3 text-3xl sm:text-[2.5rem]">Built for any business with customers on WhatsApp</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Reciva is configured to your business, so it fits your niche from day one.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <FeatureIcon name={u.icon} className="inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:h-6 [&_svg]:w-6 dark:bg-brand-800/20 dark:text-brand-400" />
              <h3 className="mt-4 text-lg font-bold">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Reciva — value pillars */}
      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <span className="eyebrow text-[11px] text-brand-600">Why Reciva</span>
            <h2 className="display mt-3 text-3xl sm:text-[2.5rem]">An AI receptionist that feels human</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valuePillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
        <div className="text-center">
          <span className="eyebrow text-[11px] text-brand-600">FAQ</span>
          <h2 className="display mt-3 text-3xl sm:text-[2.5rem]">Questions, answered</h2>
        </div>
        <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
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
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center sm:px-16">
          <div className="mx-auto mb-5 flex justify-center">
            <ReciaMark className="text-white" />
          </div>
          <h2 className="display text-3xl text-white sm:text-[2.5rem]">
            Ready to stop missing customers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-300">
            See Reciva in action. Message us on WhatsApp and we'll set up your AI receptionist for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-brand-500 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600 sm:w-auto"
            >
              Book a demo
            </a>
            <Link
              href="/contact"
              className="w-full rounded-full border border-white/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
