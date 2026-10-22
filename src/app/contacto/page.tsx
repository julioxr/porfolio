import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { Label, Section, TwoTone } from "@/components/Section";

export const metadata: Metadata = pageMetadata({
  title: "Contacto: consultá por IA y automatización",
  description:
    "Contame qué tarea querés mejorar o automatizar. Escribime por WhatsApp o dejá tu consulta en el formulario y te respondo a la brevedad.",
  path: "/contacto",
});

const tips = [
  "Qué hace tu negocio y cuántas personas trabajan",
  "Qué tarea te consume más tiempo",
  "Con qué herramientas trabajás hoy (planillas, mail, WhatsApp, algún sistema)",
];

export default function Contacto() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />
      <Section className="grid gap-12 py-12 sm:px-12 sm:py-20 lg:grid-cols-[1fr_520px] lg:gap-16">
        <div>
          <TwoTone
            as="h1"
            lead="Contame qué querés mejorar."
            rest="La primera respuesta no tiene costo."
            className="text-[2.5rem] sm:text-6xl"
          />
          <p className="mt-7 max-w-xl text-lg text-muted">
            Cuanto más concreta sea la tarea, mejor puedo orientarte. Te ayuda contarme:
          </p>
          <ol className="mt-6 max-w-xl border-t border-line">
            {tips.map((t, i) => (
              <li key={t} className="flex gap-4 border-b border-line py-3.5">
                <Label className="pt-1 text-accent">{String(i + 1).padStart(2, "0")}</Label>
                {t}
              </li>
            ))}
          </ol>

          {site.whatsapp ? (
            <div className="mt-9">
              <CtaButton
                href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
                location="contact-page"
              >
                Escribime por WhatsApp
              </CtaButton>
            </div>
          ) : null}

          <p className="mt-9 text-muted">
            También podés escribirme a{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {site.email}
            </a>
            .
          </p>
        </div>

        <section
          id="formulario"
          aria-labelledby="form-title"
          className="scroll-mt-24 self-start rounded-md border border-line bg-surface p-6 sm:p-8"
        >
          <h2 id="form-title" className="text-xl">
            {site.whatsapp ? "O dejame tu consulta" : "Dejame tu consulta"}
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </Section>
    </>
  );
}
