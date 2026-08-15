"use client";

import { useEffect, useState } from "react";
import { ReciaMark } from "@/components/Icons";

// Plays the conversation bubble-by-bubble (with a typing indicator before each
// Reciva reply), then holds, resets, and loops — reads as a live chat instead
// of static screenshots. Respects prefers-reduced-motion by just showing the
// finished conversation with no motion.
export default function ChatMockup({ business, label, bubbles }) {
  const [visibleCount, setVisibleCount] = useState(bubbles.length);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cancelled = false;
    const timeouts = [];
    const schedule = (fn, delay) => timeouts.push(setTimeout(() => !cancelled && fn(), delay));
    // Random within a range — keeps each card's cadence independent so all
    // three never lock-step into moving at the exact same moment.
    const jitter = (min, max) => min + Math.random() * (max - min);

    function run() {
      setVisibleCount(0);
      setTyping(false);
      let t = jitter(200, 1400);
      bubbles.forEach((b, i) => {
        if (b.from === "them") {
          schedule(() => setTyping(true), t);
          t += jitter(700, 1500);
          schedule(() => {
            setTyping(false);
            setVisibleCount(i + 1);
          }, t);
        } else {
          schedule(() => setVisibleCount(i + 1), t);
        }
        t += jitter(900, 1700);
      });
      schedule(run, t + jitter(1800, 3600));
    }

    run();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [bubbles]);

  return (
    <div className="w-full rounded-3xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3 rounded-t-3xl bg-slate-900 px-4 py-3 text-white">
        <ReciaMark showName={false} />
        <div className="leading-tight">
          <div className="text-sm font-semibold">{business}</div>
          <div className="text-xs text-brand-400">online</div>
        </div>
        <span className="eyebrow ml-auto text-[10px] text-white/50">{label}</span>
      </div>
      <div className="flex min-h-[220px] flex-col justify-end space-y-3 px-4 py-5">
        {bubbles.slice(0, visibleCount).map((b, i) =>
          b.from === "them" ? (
            <div
              key={i}
              className="reveal max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-zinc-100 px-3 py-2 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
            >
              {b.text}
              <span className="ml-2 text-[10px] text-zinc-400 dark:text-zinc-500">{b.time}</span>
            </div>
          ) : (
            <div
              key={i}
              className="reveal max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-brand-600 px-3 py-2 text-sm text-white"
            >
              {b.text}
              <span className="ml-2 text-[10px] text-white/70">{b.time} ✓✓</span>
            </div>
          )
        )}
        {typing && (
          <div className="reveal flex w-fit gap-1 self-start rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3 dark:bg-zinc-800">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s] dark:bg-zinc-500" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s] dark:bg-zinc-500" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500" />
          </div>
        )}
      </div>
    </div>
  );
}
