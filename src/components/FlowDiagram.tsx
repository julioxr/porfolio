import { ArrowRight, Check } from "./Icons";

const channels = ["WhatsApp", "Web", "Mail"];
const actions = ["Identifica la consulta", "Busca la información", "Prepara una respuesta"];

// Una escena concreta para mostrar cómo se resuelven consultas repetidas.
export function FlowDiagram() {
  return (
    <figure className="flow-card w-full rounded-md border border-line bg-surface p-5 sm:p-7">
      <figcaption className="mb-6">
        <span className="font-mono text-[11px] text-muted">UN EJEMPLO COTIDIANO</span>
        <p className="mt-2 text-lg font-medium leading-snug tracking-tight">
          De una consulta repetida a una respuesta lista.
        </p>
      </figcaption>

      <div className="grid grid-cols-[minmax(0,1fr)_28px_minmax(0,1.15fr)] items-center gap-2 sm:gap-3">
        <div className="space-y-2.5">
          <p className="mb-3 font-mono text-[10px] text-muted">LLEGA POR</p>
          {channels.map((channel, index) => (
            <div
              key={channel}
              className="flow-channel flex items-center gap-2 rounded-[4px] border border-line bg-bg px-2.5 py-2 text-xs"
              style={{ "--flow-delay": `${index * 140}ms` } as React.CSSProperties}
            >
              <span className="size-1.5 shrink-0 rounded-full bg-accent" />
              {channel}
            </div>
          ))}
        </div>

        <div aria-hidden className="flow-connector relative flex h-full items-center justify-center text-accent">
          <span className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-line-strong" />
          <span className="flow-signal absolute left-1/2 top-0 z-0 size-1.5 -translate-x-1/2 rounded-full bg-accent" />
          <span className="flow-signal flow-signal--delayed absolute left-1/2 top-0 z-0 size-1.5 -translate-x-1/2 rounded-full bg-accent" />
          <span className="relative z-10 grid size-7 place-items-center rounded-full border border-line bg-surface">
            <ArrowRight className="size-3.5" />
          </span>
        </div>

        <div className="rounded-[5px] border border-line bg-bg p-3">
          <div className="flex items-center justify-between gap-2 border-b border-line pb-2.5">
            <span className="font-mono text-[10px] text-muted">EL PROCESO</span>
            <span className="relative flex size-2">
              <span className="flow-pulse absolute inline-flex size-full rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
          </div>
          <ol className="mt-2.5 space-y-2.5">
            {actions.map((action, index) => (
              <li key={action} className="flex items-center gap-2 text-[11px] leading-snug">
                <span className="grid size-4 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[9px] text-accent">
                  {index + 1}
                </span>
                {action}
              </li>
            ))}
          </ol>
          <div className="mt-3 flex items-center gap-1.5 border-t border-line pt-2.5 text-[10px] text-muted">
            <Check className="size-3 text-accent" />
            Podés revisar antes de enviar
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span className="grid size-7 shrink-0 place-items-center rounded-[4px] bg-accent text-accent-ink">
          <Check className="size-4" />
        </span>
        <div>
          <p className="text-xs font-medium">Las consultas no quedan en el aire</p>
          <p className="text-[11px] text-muted">Y los casos especiales pasan a una persona.</p>
        </div>
      </div>
    </figure>
  );
}
