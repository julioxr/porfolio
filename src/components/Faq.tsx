export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {item.q}
            <span aria-hidden className="text-accent transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-2 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
