import { Label } from "./Section";

// Maquetas de ejemplo para mostrar cómo se ve cada servicio en la práctica.
// Son ilustrativas (negocios inventados) y así se rotulan: no son casos de clientes.

function ChatMock() {
  const bubble = "max-w-[85%] rounded-md px-3 py-2 text-[0.8125rem] leading-snug";
  return (
    <div className="space-y-2">
      <p className={`${bubble} ml-auto bg-accent-soft`}>Hola, ¿tienen látex blanco de 20 litros?</p>
      <p className={`${bubble} border border-line bg-surface`}>
        Sí, nos quedan 6. Te paso la lista de precios actualizada. ¿Querés que te reserve uno?
      </p>
      <p className={`${bubble} ml-auto bg-accent-soft`}>Sí, lo paso a buscar mañana</p>
      <p className={`${bubble} border border-line bg-surface`}>
        Listo. Le aviso a alguien del local para que te lo deje apartado.
      </p>
    </div>
  );
}

function SheetMock() {
  const rows = [
    ["12/10", "M. Pérez", "3 cajas", "Enviado"],
    ["13/10", "Estudio R.", "1 caja", "Enviado"],
    ["14/10", "Ana G.", "5 cajas", "Nuevo"],
  ];
  return (
    <div>
      <div className="mb-3 rounded-md border border-line bg-surface px-3 py-2 text-[0.8125rem] leading-snug">
        <span className="font-mono text-[11px] text-muted">mail entrante</span>
        <p className="mt-1">Pedido de Ana G.: 5 cajas, entrega el viernes.</p>
      </div>
      <div className="overflow-hidden rounded-md border border-line bg-surface font-mono text-[11px]">
        {rows.map((r) => (
          <div
            key={r[1]}
            className={`grid grid-cols-[3rem_1fr_3.5rem_3.5rem] gap-2 border-b border-line px-3 py-2 last:border-b-0 ${r[3] === "Nuevo" ? "bg-accent-soft" : ""}`}
          >
            {r.map((c, i) => (
              <span key={i} className={i === 3 && c === "Nuevo" ? "text-accent" : ""}>
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportMock() {
  const lines = [
    ["Consultas recibidas", "48"],
    ["Presupuestos enviados", "12"],
    ["Pagos pendientes", "3"],
  ];
  return (
    <div className="rounded-md border border-line bg-surface p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold">Resumen de la semana</p>
        <span className="font-mono text-[11px] text-muted">lunes 8:00</span>
      </div>
      <dl className="mt-3 divide-y divide-line text-[0.8125rem]">
        {lines.map(([k, v]) => (
          <div key={k} className="flex justify-between py-1.5">
            <dt className="text-muted">{k}</dt>
            <dd className="font-medium tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[0.8125rem] leading-snug text-muted">
        Para revisar: dos clientes preguntaron por envíos al interior.
      </p>
    </div>
  );
}

const examples = [
  {
    title: "Un asistente que responde las consultas de siempre",
    text: "Contesta stock, precios y horarios con la información de tu negocio, y deriva a una persona cuando hace falta.",
    mock: <ChatMock />,
  },
  {
    title: "Los pedidos pasan solos del mail a la planilla",
    text: "Cada pedido que entra por mail o formulario se carga en la planilla, sin copiar y pegar.",
    mock: <SheetMock />,
  },
  {
    title: "Un informe que llega armado cada lunes",
    text: "Los números de la semana y lo que hay que revisar, resumidos con IA y listos en tu mail.",
    mock: <ReportMock />,
  },
];

export function Examples() {
  return (
    <ul className="grid gap-px border-t border-line bg-line lg:grid-cols-3">
      {examples.map((e, i) => (
        <li key={e.title} className="flex flex-col bg-bg py-8 sm:px-8">
          <Label className="text-accent">Ejemplo {String(i + 1).padStart(2, "0")}</Label>
          <div aria-hidden className="mt-5 rounded-md border border-line bg-bg p-4 lg:min-h-64">
            {e.mock}
          </div>
          <h3 className="mt-6 text-xl">{e.title}</h3>
          <p className="mt-2 text-muted">{e.text}</p>
        </li>
      ))}
    </ul>
  );
}
