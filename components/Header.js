"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, navLinks } from "@/lib/site";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Logo({ onClick }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 whitespace-nowrap font-display text-lg font-bold tracking-tight"
      onClick={onClick}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-zinc-950 font-bold text-white dark:bg-white dark:text-zinc-950">L</span>
      {/* Full name at sm+; short name only below sm, where there isn't room
          beside the theme toggle + hamburger without wrapping. */}
      <span className="hidden sm:inline">
        Lexnnovation<span className="text-brand-600"> Studios</span>
      </span>
      <span className="sm:hidden">{site.shortName}</span>
    </Link>
  );
}

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  // Lock body scroll + close on Escape while the full-screen menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isDark = theme === "dark";
  const pathname = usePathname();

  return (
    <>
      {/* Floating pill nav — always visible with its own surface, not scroll-transparent.
          backdrop-blur only on md+: WebKit/Chrome mobile compositing breaks button
          hit-testing inside backdrop-filter elements. */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-zinc-200/70 bg-white px-5 py-3 shadow-sm shadow-zinc-900/5 dark:border-zinc-800/70 dark:bg-zinc-900 md:bg-white/90 md:backdrop-blur md:dark:bg-zinc-900/90">
          <Logo onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => {
              const isActive = !l.href.startsWith("/#") && l.href === pathname;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <ObfuscatedEmail
              subject="Book a demo"
              className="hidden rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:inline-block dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Book a demo
            </ObfuscatedEmail>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-zinc-700 hover:bg-zinc-100 lg:hidden dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu — sibling of <header>, NOT inside it.
          Uses `hidden` (display:none) when closed so it cannot intercept any touch events. */}
      <div
        className={`fixed inset-0 z-[200] overflow-y-auto bg-white dark:bg-zinc-950 lg:hidden ${
          open ? "flex flex-col" : "hidden"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-5 py-4">
          <div className="flex items-center justify-between">
            <Logo onClick={() => setOpen(false)} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1">
            {navLinks.map((l) => {
              const isActive = !l.href.startsWith("/#") && l.href === pathname;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-zinc-100 py-4 font-display text-2xl font-bold tracking-tight dark:border-zinc-900 ${
                    isActive ? "text-brand-600" : ""
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-4 pb-8">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between rounded-2xl border border-zinc-200 px-5 py-4 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <ObfuscatedEmail
              subject="Book a demo"
              className="rounded-full bg-zinc-950 px-5 py-4 text-center text-base font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Book a demo
            </ObfuscatedEmail>
          </div>
        </div>
      </div>
    </>
  );
}
