import { ArrowRight, Check } from "./Icons";
import { Label } from "./Section";

// Maquetas ilustrativas con negocios inventados; no representan trabajos de clientes.

function PreviewFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="example-preview flex min-h-[17rem] flex-col overflow-hidden rounded-[5px] border border-line bg-bg">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="flex gap-1" aria-hidden>
          <i className="size-1.5 rounded-full bg-line-strong" />
          <i className="size-1.5 rounded-full bg-line-strong" />
          <i className="size-1.5 rounded-full bg-line-strong" />
        </span>
        <span className="ml-1 font-mono text-[10px] text-muted">{title}</span>
        <span className="ml-auto size-1.5 rounded-full bg-accent" />
      </div>
      <div className="flex flex-1 flex-col justify-center p-3 sm:p-4">{children}</div>
    </div>
  );
}

function ChatMock() {
  const bubble = "max-w-[88%] rounded-[5px] px-3 py-2 text-[0.75rem] leading-snug";
  return (
    <PreviewFrame title="asistente · consultas">
      <div className="mb-3 flex items-center gap-2 border-b border-line pb-3">
        <span className="grid size-7 place-items-center rounded-full bg-accent-soft font-mono text-[10px] text-accent">L</span>
        <div>
          <p className="text-xs font-medium">La Esquina</p>
          <p className="text-[10px] text-muted">Respuestas sobre el negocio</p>
        </div>
        <span className="ml-auto rounded-full border border-line px-2 py-0.5 font-mono text-[9px] text-muted">EN LÍNEA</span>
      </div>
      <div className="space-y-2">
        <p className={`${bubble} ml-auto bg-accent-soft`}>¿Tienen pintura blanca de 20 litros?</p>
        <p className={`${bubble} border border-line bg-surface`}>
          Sí, quedan 6. ¿Querés que te pase los precios o te reservo uno?
        </p>
        <p className={`${bubble} ml-auto bg-accent-soft`}>Reservame uno, por favor.</p>
        <p className={`${bubble} border border-line bg-surface`}>
          Dale. Ya le avisé al equipo del local.
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-[4px] border border-line px-2.5 py-1.5 text-[10px] text-muted">
        Respuesta enviada <Check className="ml-auto size-3 text-accent" />
      </div>
    </PreviewFrame>
  );
}

function SheetMock() {
  const rows = [
    ["12/10", "M. Pérez", "3 cajas", "Listo"],
    ["13/10", "Estudio R.", "1 caja", "Listo"],
    ["14/10", "Ana G.", "5 cajas", "Nuevo"],
  ];
  return (
    <PreviewFrame title="pedidos · planilla">
      <div className="mb-3 rounded-[5px] border border-line bg-surface p-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted">MAIL RECIBIDO · 09:42</span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[9px] text-accent">PROCESADO</span>
        </div>
        <p className="mt-2 text-xs leading-snug">“5 cajas, entrega el viernes.”</p>
      </div>
      <div className="overflow-hidden rounded-[5px] border border-line bg-surface">
        <div className="grid grid-cols-[3rem_1fr_3.5rem] gap-2 border-b border-line px-3 py-2 font-mono text-[9px] text-muted">
          <span>FECHA</span><span>CLIENTE</span><span>CANTIDAD</span>
        </div>
        {rows.map((row) => (
          <div
            key={row[1]}
            className={`grid grid-cols-[3rem_1fr_3.5rem] gap-2 border-b border-line px-3 py-2 last:border-0 ${row[3] === "Nuevo" ? "bg-accent-soft" : ""}`}
          >
            <span className="font-mono text-[10px] text-muted">{row[0]}</span>
            <span className="truncate text-[11px]">{row[1]}</span>
            <span className="text-[10px]">{row[2]}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
        <Check className="size-3 text-accent" /> Un pedido nuevo, ya cargado.
      </p>
    </PreviewFrame>
  );
}

function ReportMock() {
  const lines = [
    ["Consultas recibidas", "48", 78],
    ["Presupuestos enviados", "12", 48],
    ["Pagos pendientes", "3", 24],
  ] as const;
  return (
    <PreviewFrame title="resumen · cada lunes">
      <div className="rounded-[5px] border border-line bg-surface p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold">Resumen de la semana</p>
            <p className="mt-1 font-mono text-[10px] text-muted">LUNES · 08:00</p>
          </div>
          <span className="grid size-7 place-items-center rounded-[4px] bg-accent-soft text-accent">
            <ArrowRight className="size-3.5 -rotate-45" />
          </span>
        </div>
        <dl className="mt-3 divide-y divide-line">
          {lines.map(([label, value, width]) => (
            <div key={label} className="py-2">
              <div className="flex justify-between gap-3 text-[11px]">
                <dt className="text-muted">{label}</dt>
                <dd className="font-medium tabular-nums">{value}</dd>
              </div>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line">
                <span className="block h-full rounded-full bg-accent" style={{ width: `${width}%` }} />
              </div>
            </div>
          ))}
        </dl>
        <div className="mt-2 rounded-[4px] bg-bg px-2.5 py-2 text-[10px] leading-snug text-muted">
          Para revisar: dos consultas sobre envíos al interior.
        </div>
      </div>
    </PreviewFrame>
  );
}

const examples = [
  {
    title: "Respuestas claras, incluso cuando no estás",
    text: "Un asistente comparte stock, precios y horarios con la información de tu negocio. Si no sabe algo, deriva la consulta.",
    mock: <ChatMock />,
  },
  {
    title: "Del mail a la planilla, sin copiar y pegar",
    text: "Los pedidos que llegan por mail o formulario se registran con sus datos y quedan listos para revisar.",
    mock: <SheetMock />,
  },
  {
    title: "Un resumen para arrancar la semana",
    text: "Consultas, presupuestos y temas pendientes en un informe breve que llega a tu mail cada lunes.",
    mock: <ReportMock />,
  },
];

export function Examples() {
  return (
    <ul className="grid gap-px border-t border-line bg-line lg:grid-cols-3">
      {examples.map((example, index) => (
        <li key={example.title} className="example-card flex flex-col bg-bg px-4 py-6 sm:px-8 sm:py-8">
          <div className="flex items-center justify-between">
            <Label className="text-accent">Ejemplo {String(index + 1).padStart(2, "0")}</Label>
            <span className="font-mono text-[10px] text-muted">ILUSTRATIVO</span>
          </div>
          <div aria-hidden className="mt-5">
            {example.mock}
          </div>
          <h3 className="mt-6 text-xl">{example.title}</h3>
          <p className="mt-2 flex-1 text-[0.9375rem] text-muted">{example.text}</p>
          <div className="mt-5 border-t border-line pt-3 font-mono text-[10px] text-muted">
            ASÍ PODRÍA FUNCIONAR EN TU NEGOCIO
          </div>
        </li>
      ))}
    </ul>
  );
}
