import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contacto: consultá por IA y automatización",
  description:
    "Contame qué tarea querés mejorar o automatizar. Escribime por WhatsApp o dejá tu consulta en el formulario y te respondo a la brevedad.",
  path: "/contacto",
});

export default function Contacto() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
        <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Contame qué querés mejorar
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Cuanto más concreta sea la tarea, mejor puedo orientarte. La primera respuesta no tiene costo.
        </p>

        {site.whatsapp ? (
          <div className="mt-8">
            <CtaButton
              href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
              location="contact-page"
            >
              Escribime por WhatsApp
            </CtaButton>
            <p className="mt-3 text-sm text-muted">O dejame tu consulta en el formulario:</p>
          </div>
        ) : null}

        <section id="formulario" className="mt-10 scroll-mt-8">
          <h2 className="sr-only">Formulario de contacto</h2>
          <ContactForm />
        </section>

        <p className="mt-10 text-muted">
          También podés escribirme a{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-accent underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </>
  );
}
