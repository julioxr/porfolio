"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/site";
import { CtaButton } from "./WhatsAppButton";

const WORK_WEEKS = 48;

const tasks = [
  { id: "consultas", label: "Responder las mismas consultas", hint: "WhatsApp, mail, redes", initial: 3 },
  { id: "datos", label: "Pasar datos de un lado a otro", hint: "planillas, formularios, sistemas", initial: 2 },
  { id: "documentos", label: "Armar presupuestos o informes", hint: "siempre con la misma estructura", initial: 2 },
  { id: "mails", label: "Escribir mails parecidos", hint: "avisos, seguimientos, recordatorios", initial: 2 },
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

  function update(id: keyof Hours, raw: string) {
    const n = Math.min(40, Math.max(0, parseInt(raw, 10) || 0));
    setTouched(true);
    setHours((h) => ({ ...h, [id]: n }));
  }

  return (
    <section aria-labelledby="calc-title" className="border-2 border-ink bg-surface">
      <h2 id="calc-title" className="border-b-2 border-ink px-4 py-3 text-xl">
        Tu semana, en horas
      </h2>

      <table className="w-full">
        <thead className="sr-only">
          <tr>
            <th scope="col">Tarea</th>
            <th scope="col">Horas por semana</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id} className="border-b border-line">
              <th scope="row" className="px-4 py-3 text-left font-normal">
                <label htmlFor={`h-${t.id}`} className="block leading-snug font-semibold">
                  {t.label}
                </label>
                <span className="block text-sm text-muted">{t.hint}</span>
              </th>
              <td className="w-28 px-4 py-3 whitespace-nowrap">
                <input
                  id={`h-${t.id}`}
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={40}
                  value={hours[t.id]}
                  onChange={(e) => update(t.id, e.target.value)}
                  className="w-16 rounded-md border-2 border-line bg-bg px-2 py-2 text-right font-display text-lg font-bold"
                />
                <span className="ml-1 text-sm text-muted">h</span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b border-line">
            <th scope="row" className="px-4 py-3 text-left font-display font-semibold">
              Por semana
            </th>
            <td className="px-4 py-3 text-right font-display text-lg font-bold">{weekly} h</td>
          </tr>
          <tr className="bg-band text-band-ink">
            <th scope="row" className="px-4 py-4 text-left font-display font-semibold">
              Por año
            </th>
            <td className="px-4 py-4 text-right font-display text-2xl font-extrabold">{yearly} h</td>
          </tr>
        </tfoot>
      </table>

      <div className="space-y-4 p-4">
        <p aria-live="polite" className="text-base">
          {weekly > 0
            ? `Son unas ${yearly} horas al año: alrededor de ${days} días de trabajo completos.`
            : "Poné cuántas horas por semana le dedicás a cada tarea."}
        </p>
        <CtaButton href={whatsappLink(message)} location="hero-calculator" className="w-full sm:w-auto">
          Contame cuál querés recuperar primero
        </CtaButton>
        <p className="text-sm text-muted">
          {touched ? "Es solo una cuenta de tiempo, no una promesa de ahorro." : "Los números son un ejemplo: cambialos por los tuyos."}
        </p>
      </div>
    </section>
  );
}
