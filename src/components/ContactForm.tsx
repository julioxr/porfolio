"use client";

import { useState, useSyncExternalStore } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const noopSubscribe = () => () => {};

const field =
  "mt-2 w-full rounded-[5px] border border-line bg-bg px-3.5 py-2.5 text-base text-ink transition-colors placeholder:text-muted hover:border-ink/40 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  // Los botones de WhatsApp caen acá con ?mensaje= cuando no hay número configurado.
  // Ese texto viaja aparte, como contexto, para que la persona igual escriba su consulta.
  const context = useSyncExternalStore(
    noopSubscribe,
    () => new URLSearchParams(window.location.search).get("mensaje") ?? "",
    () => "",
  );

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
      <div role="status">
        <p className="text-xl font-semibold tracking-tight">¡Gracias por escribirme!</p>
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
      <input type="hidden" name="contexto" value={context} />
      {context ? (
        <p className="rounded-[5px] bg-subtle px-4 py-3 text-sm text-muted">
          <span className="font-medium text-ink">Va junto con tu consulta:</span> {context}
        </p>
      ) : null}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">No completar</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-[5px] bg-accent px-5 text-[0.9375rem] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-danger">
          No pude enviar el mensaje. Probá de nuevo o escribime a {site.email}.
        </p>
      )}
    </form>
  );
}
