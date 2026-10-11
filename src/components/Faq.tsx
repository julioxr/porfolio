export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y-2 border-ink">
      {items.map((item) => (
        <details key={item.q} className="group py-4">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
            {item.q}
            <span aria-hidden className="text-2xl text-accent transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-2 max-w-2xl text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
