import { site } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — book a demo of the WhatsApp AI Receptionist or start a project.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Let's talk</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Want to see the WhatsApp AI Receptionist in action, or build something custom? Email us —
        we usually reply fast.
      </p>

      <div className="mt-10">
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
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
        <h2 className="font-display text-base font-semibold">Lexnnovation Studios</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{site.location}</p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Founder:{" "}
          <a
            href="https://x.com/lexnnovation"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-600 transition hover:underline"
          >
            Lexnnovation
          </a>
        </p>
      </div>
    </div>
  );
}
