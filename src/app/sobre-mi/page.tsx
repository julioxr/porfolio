import type { Metadata } from "next";
import { site, whatsappLink, yearsSince } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { Portrait } from "@/components/Portrait";
import { FinalCta } from "@/components/FinalCta";
import { Label, Section, TwoTone } from "@/components/Section";
import { Check } from "@/components/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Sobre mí: Julio Roja, consultor en IA y QA",
  description:
    "Soy Julio Roja: trabajo en control de calidad de software y desarrollo web, y ayudo a pymes y profesionales a integrar IA en su trabajo.",
  path: "/sobre-mi",
});

const principles = [
  "Hablo en simple. No hace falta que sepas de tecnología.",
  "Pruebo todo antes de entregarlo, porque vengo de QA.",
  "Si la IA no es lo que necesitás, te lo digo.",
  "Arranco por lo que más tiempo te ahorra, no por lo más vistoso.",
  "Lo que armo queda documentado y es tuyo.",
];

const link = "font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent";
const h2 = "text-3xl sm:text-[2.5rem]";

export default function SobreMi() {
  const qaYears = yearsSince(site.qaSinceYear);
  const devYears = yearsSince(site.devSinceYear);

  const timeline = [
    {
      year: String(site.qaSinceYear),
      title: "Calidad de software (QA)",
      text: "Empiezo a trabajar en testing: encontrar los errores antes de que le lleguen a la gente.",
    },
    {
      year: String(site.devSinceYear),
      title: "Desarrollo web",
      text: "Sumo el desarrollo de aplicaciones. Ahora también construyo lo que antes probaba.",
    },
    {
      year: "Hoy",
      title: "IA y automatización para pymes",
      text: "Junto las dos cosas para ayudar a negocios a usar IA en tareas concretas, con soluciones probadas.",
    },
  ];

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

      <Section className="grid gap-12 py-12 sm:px-12 sm:py-20 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div>
          <TwoTone
            as="h1"
            lead="Hola, soy Julio."
            rest="Pruebo software hace años. Ahora lo aplico a la IA."
            className="text-[2.5rem] sm:text-6xl"
          />
          <div className="mt-8 max-w-2xl space-y-5 text-lg text-muted">
            <p>
              Hace {qaYears} años trabajo en control de calidad de software (QA), la tarea de
              asegurarse de que las cosas funcionen antes de que lleguen a las personas. Hace{" "}
              {devYears} años también desarrollo aplicaciones web.
            </p>
            <p>
              Cuando la inteligencia artificial empezó a ser útil de verdad, vi que muchas pymes y
              profesionales no necesitaban teoría: necesitaban a alguien que los ayude a aplicarla en
              tareas concretas, y que lo que se arme funcione el lunes a la mañana, no solo en la
              demo.
            </p>
            <p>Eso es lo que hago: escucho cómo trabajás, propongo algo simple, lo armo y lo pruebo.</p>
          </div>
          <div className="mt-10">
            <CtaButton href={whatsappLink("Hola Julio, leí tu sitio y quiero consultarte algo.")} location="about">
              {site.whatsapp ? "Escribime por WhatsApp" : "Contactame"}
            </CtaButton>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:sticky lg:top-24 lg:max-w-none lg:self-start">
          <Portrait />
        </div>
      </Section>

      <Section className="py-16 sm:px-12 sm:py-24">
        <h2 className={h2}>Mi recorrido</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {timeline.map((t) => (
            <li key={t.year} className="border-t border-ink pt-5">
              <Label className="text-accent">{t.year}</Label>
              <h3 className="mt-4 text-xl">{t.title}</h3>
              <p className="mt-2 text-[0.9375rem] text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="grid gap-10 py-16 sm:px-12 sm:py-24 lg:grid-cols-[1fr_520px] lg:gap-16">
        <div>
          <TwoTone lead="Cómo trabajo." rest="Lo que podés esperar de mí." className={h2} />
          <p className="mt-6 max-w-md text-lg text-muted">
            Además de la consultoría, construyo mis propios proyectos de software. Podés ver mi
            código en{" "}
            <a href={site.github} className={link} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            y mi trayectoria en{" "}
            <a href={site.linkedin} className={link} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </div>
        <ul className="self-start border border-line bg-surface">
          {principles.map((p) => (
            <li key={p} className="flex gap-3.5 border-b border-line px-5 py-4 last:border-b-0">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-[3px] bg-accent-soft text-accent">
                <Check className="size-3.5" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta
        lead="¿Te sirve lo que hago?"
        rest="Contame tu caso y lo vemos juntos."
        message="Hola Julio, leí tu sitio y quiero consultarte algo."
        location="about-bottom"
        label={site.whatsapp ? "Escribime por WhatsApp" : "Ir al formulario de contacto"}
      />
    </>
  );
}
