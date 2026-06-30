export default function Legal({ title, updated, children }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {updated && <p className="mt-2 text-sm text-zinc-500">Last updated: {updated}</p>}
      <div className="mt-8 space-y-5 leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:text-brand-600 [&_a]:underline [&_h2]:mt-9 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 dark:[&_h2]:text-zinc-100 [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-zinc-900 dark:[&_h3]:text-zinc-100 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        {children}
      </div>
    </div>
  );
}
