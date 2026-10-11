"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted/70";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-6">
        <p className="font-serif text-xl font-semibold">¡Gracias por escribirme!</p>
        <p className="mt-2 text-muted">Recibí tu mensaje y te respondo a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="nombre" className="font-medium">
          Nombre
        </label>
        <input id="nombre" name="nombre" type="text" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="mensaje" className="font-medium">
          ¿Qué tarea te gustaría mejorar o automatizar?
        </label>
        <textarea id="mensaje" name="mensaje" required rows={5} className={field} />
      </div>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">No completar</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent">
          No pude enviar el mensaje. Probá de nuevo o escribime a {site.email}.
        </p>
      )}
    </form>
  );
}
