"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/site";
import { CtaButton } from "./WhatsAppButton";

const WORK_WEEKS = 48;

const tasks = [
  { id: "consultas", label: "Responder las mismas consultas", hint: "WhatsApp, mail, redes", initial: 3 },
  { id: "datos", label: "Pasar datos de un lado a otro", hint: "Planillas, formularios, sistemas", initial: 2 },
  { id: "documentos", label: "Armar presupuestos o informes", hint: "Siempre con la misma estructura", initial: 2 },
  { id: "mails", label: "Escribir mails parecidos", hint: "Avisos, seguimientos, recordatorios", initial: 2 },
] as const;

type Hours = Record<(typeof tasks)[number]["id"], number>;

export function HoursCalculator() {
  const [hours, setHours] = useState<Hours>(
    () => Object.fromEntries(tasks.map((t) => [t.id, t.initial])) as Hours,
  );
  const [touched, setTouched] = useState(false);

  const weekly = Object.values(hours).reduce((a, b) => a + b, 0);
  const yearly = weekly * WORK_WEEKS;
  const days = Math.round(yearly / 8);

  const detail = tasks
    .filter((t) => hours[t.id] > 0)
    .map((t) => `${t.label.toLowerCase()}: ${hours[t.id]} h`)
    .join("; ");
  const message =
    touched && weekly > 0
      ? `Hola Julio, calculé que dedico unas ${weekly} horas por semana a tareas repetitivas (${detail}). Quiero ver cuál conviene automatizar primero.`
      : "Hola Julio, quiero consultarte por IA para mi trabajo.";

  function update(id: keyof Hours, raw: string | number) {
    const n = Math.min(40, Math.max(0, typeof raw === "number" ? raw : parseInt(raw, 10) || 0));
    setTouched(true);
    setHours((h) => ({ ...h, [id]: n }));
  }

  return (
    <section aria-labelledby="calc-title" className="rounded-md border border-line bg-surface">
      <div className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-3.5 sm:px-6">
        <h3 id="calc-title" className="font-mono text-xs font-normal tracking-tight text-muted">
          tu semana
        </h3>
        <span className="font-mono text-xs text-muted">h / semana</span>
      </div>

      <ul className="divide-y divide-line">
        {tasks.map((t) => (
          <li key={t.id} className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
            <div>
              <label htmlFor={`h-${t.id}`} className="block leading-snug font-medium">
                {t.label}
              </label>
              <span className="block text-sm text-muted">{t.hint}</span>
            </div>
            <div className="flex shrink-0 items-stretch overflow-hidden rounded-[4px] border border-line bg-bg">
              <button
                type="button"
                aria-label={`Restar una hora a ${t.label.toLowerCase()}`}
                onClick={() => update(t.id, hours[t.id] - 1)}
                className="grid w-9 place-items-center text-lg transition-colors hover:bg-subtle"
              >
                −
              </button>
              <input
                id={`h-${t.id}`}
                type="number"
                inputMode="numeric"
                min={0}
                max={40}
                value={hours[t.id]}
                onChange={(e) => update(t.id, e.target.value)}
                className="h-9 w-11 border-x border-line bg-surface text-center font-medium tabular-nums [appearance:textfield] focus:bg-bg [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                type="button"
                aria-label={`Sumar una hora a ${t.label.toLowerCase()}`}
                onClick={() => update(t.id, hours[t.id] + 1)}
                className="grid w-9 place-items-center text-lg transition-colors hover:bg-subtle"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-5 border-t border-line px-5 py-6 sm:px-6">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <p className="flex items-baseline gap-2">
            <span className="text-[2.75rem] leading-none font-semibold tracking-[-0.03em] tabular-nums">{weekly} h</span>
            <span className="text-sm text-muted">por semana</span>
          </p>
          <p className="flex items-baseline gap-2">
            <span className="text-[2.75rem] leading-none font-semibold tracking-[-0.03em] text-quiet tabular-nums">{yearly} h</span>
            <span className="text-sm text-muted">al año</span>
          </p>
        </div>
        <p aria-live="polite" className="text-[0.9375rem] text-muted">
          {weekly > 0
            ? `Son alrededor de ${days} días de trabajo completos por año.`
            : "Poné cuántas horas por semana le dedicás a cada tarea."}
        </p>
        <CtaButton href={whatsappLink(message)} location="hero-calculator" className="w-full">
          Mandarme este desglose
        </CtaButton>
        <p className="font-mono text-xs text-muted">
          {touched ? "Es solo una cuenta de tiempo, no una promesa de ahorro." : "Los números son un ejemplo: cambialos por los tuyos."}
        </p>
      </div>
    </section>
  );
}
