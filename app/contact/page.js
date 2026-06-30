import { site } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { FeatureIcon } from "@/components/Icons";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — book a demo of the WhatsApp AI Receptionist or start a project.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Let's talk</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Want to see the WhatsApp AI Receptionist in action, or build something custom? Reach us by
        email or WhatsApp — we usually reply fast.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {/* Email (obfuscated) */}
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <div className="text-sm font-semibold text-zinc-500">Email</div>
          <div className="mt-1 font-display text-lg font-semibold">
            <ObfuscatedEmail />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            For demos, project enquiries, partnerships, or support.
          </p>
          <ObfuscatedEmail subject="Reciva demo request" className="mt-4 inline-block rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            Send email
          </ObfuscatedEmail>
        </div>

        {/* WhatsApp */}
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
          <div className="text-sm font-semibold text-zinc-500">WhatsApp</div>
          <div className="mt-1 font-display text-lg font-semibold">{site.phoneObfuscated}</div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Message us directly on WhatsApp to book a demo or ask a quick question.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            <FeatureIcon name="whatsapp" className="[&_svg]:h-4 [&_svg]:w-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
