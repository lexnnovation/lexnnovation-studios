import Link from "next/link";
import { site, legalLinks, socials } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { XIcon, LinkedInIcon } from "@/components/Icons";

const socialIcons = { x: XIcon, linkedin: LinkedInIcon };

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">L</span>
              <span>
                Lexnnovation<span className="text-brand-600"> Studios</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Software development & AI engineering studio. We build Reciva — our AI receptionist —
              and custom software for businesses in Ghana and beyond.
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">{site.location}</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-100">Company</h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-zinc-600 transition hover:text-brand-600 dark:text-zinc-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-100">Get in touch</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <ObfuscatedEmail className="text-sm text-zinc-600 transition hover:text-brand-600 dark:text-zinc-400" />
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-zinc-500 transition hover:text-brand-600">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
