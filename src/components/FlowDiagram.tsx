import { Check } from "./Icons";

const inputs = ["Mails", "Planillas", "Consultas", "Informes"];

function Dots({ className = "bg-line-strong", ends = "bg-ink" }: { className?: string; ends?: string }) {
  return (
    <div className="flex grow items-center justify-between">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`size-[7px] rounded-full ${i === 0 || i === 5 ? ends : className}`} />
      ))}
    </div>
  );
}

// Diagrama del hero: cuatro tareas sueltas que terminan en un solo proceso automatizado.
export function FlowDiagram() {
  return (
    <figure className="w-full rounded-md border border-line bg-surface p-5 sm:p-8">
      <figcaption className="sr-only">
        Mails, planillas, consultas e informes que hoy se hacen a mano, convertidos en un proceso automatizado y probado.
      </figcaption>
      <div aria-hidden>
        <div className="flex justify-between pb-6 font-mono text-[11px] text-muted">
          <span>entrada</span>
          <span>4 tareas → 1 proceso</span>
        </div>
        <div className="space-y-3.5">
          {inputs.map((label) => (
            <div key={label} className="flex items-center gap-4">
              <span className="w-20 shrink-0 font-mono text-[11px] text-ink">{label}</span>
              <div className="relative flex grow items-center">
                <span className="absolute inset-x-0 top-1/2 h-px bg-line-strong" />
                <div className="relative flex grow">
                  <Dots />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 py-2">
          <span className="w-20 shrink-0" />
          <div className="flex h-12 grow justify-between px-[3px]">
            <span className="w-px bg-line" />
            <span className="w-px border-l border-dashed border-line-strong" />
            <span className="w-px bg-line" />
            <span className="w-px border-l border-dashed border-line-strong" />
            <span className="w-px bg-line" />
            <span className="w-px bg-accent" />
          </div>
        </div>
        <div className="rounded-[4px] bg-accent px-4 pt-4 pb-3 text-accent-ink">
          <div className="flex items-center justify-between text-xs font-medium">
            Automatizado y probado
            <Check className="size-4" />
          </div>
          <div className="relative mt-3 flex">
            <span className="absolute inset-x-0 top-1/2 h-px bg-accent-ink/30" />
            <div className="relative flex grow">
              <Dots className="bg-accent-ink" ends="bg-accent-ink" />
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-6 font-mono text-[11px]">
          <span className="text-muted">salida</span>
          <span className="text-accent">listo para usar</span>
        </div>
      </div>
    </figure>
  );
}
