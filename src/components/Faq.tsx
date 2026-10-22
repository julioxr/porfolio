import { Plus } from "./Icons";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem] font-medium transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="-mt-1 max-w-2xl pb-6 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
