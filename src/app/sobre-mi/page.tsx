import type { Metadata } from "next";
import { site, whatsappLink, yearsSince } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Sobre mí: Julio Roja, consultor en IA y QA",
  description:
    "Soy Julio Roja: trabajo en control de calidad de software y desarrollo web, y ayudo a pymes y profesionales a integrar IA en su trabajo.",
  path: "/sobre-mi",
});

export default function SobreMi() {
  const qaYears = yearsSince(site.qaSinceYear);
  const devYears = yearsSince(site.devSinceYear);

  return (
    <>
      <JsonLd
        data={[
          personJsonLd,
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Sobre mí", path: "/sobre-mi" },
          ]),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
        <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Sobre mí
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Soy Julio Roja. Hace más de {qaYears} años trabajo en control de calidad de software (QA),
            la tarea de asegurarse de que las cosas funcionen antes de que lleguen a las personas.
            Hace más de {devYears} años también desarrollo aplicaciones web.
          </p>
          <p>
            Cuando empezó a ser realmente útil la inteligencia artificial, vi que muchas pymes y
            profesionales no necesitaban teoría: necesitaban que alguien los ayude a aplicarla en
            tareas concretas, y que las cosas funcionen de verdad.
          </p>
          <h2 className="pt-4 font-display text-2xl font-semibold">Cómo trabajo</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Hablo en simple. No hace falta que sepas de tecnología.</li>
            <li>Pruebo todo antes de entregarlo, porque vengo de QA.</li>
            <li>Si la IA no es lo que necesitás, te lo digo.</li>
            <li>Arranco por lo que más tiempo te ahorra, no por lo más vistoso.</li>
          </ul>
          <h2 className="pt-4 font-display text-2xl font-semibold">Mis proyectos</h2>
          <p>
            Además de trabajar con clientes, construyo mis propios proyectos de software. Podés ver
            mi código en{" "}
            <a href={site.github} className="font-semibold text-accent underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            y mi trayectoria en{" "}
            <a href={site.linkedin} className="font-semibold text-accent underline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="mt-10">
          <CtaButton
            href={whatsappLink("Hola Julio, leí tu sitio y quiero consultarte algo.")}
            location="about"
          >
            {site.whatsapp ? "Escribime por WhatsApp" : "Contactame"}
          </CtaButton>
        </div>
      </article>
    </>
  );
}
