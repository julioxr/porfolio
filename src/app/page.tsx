import Link from "next/link";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { site, whatsappLink, yearsSince } from "@/data/site";
import { businessJsonLd, faqJsonLd, personJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { HoursCalculator } from "@/components/HoursCalculator";
import { Faq } from "@/components/Faq";

const steps = [
  { title: "Me contás", text: "Una charla corta sobre qué tareas te consumen más tiempo." },
  {
    title: "Te propongo",
    text: "Te digo qué conviene hacer, cuánto cuesta y qué podés esperar. Si la IA no ayuda, también te lo digo.",
  },
  { title: "Lo armo y lo pruebo", text: "Lo construyo, lo pruebo a fondo y te explico cómo usarlo." },
];

const checks = [
  "Con datos normales",
  "Con datos vacíos o mal cargados",
  "Cuando falla la conexión",
  "Con vos usándolo, no solo conmigo",
];

export default function Home() {
  const qaYears = yearsSince(site.qaSinceYear);

  return (
    <>
      <JsonLd data={[personJsonLd, businessJsonLd, faqJsonLd(homeFaqs)]} />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:pt-20">
        <div>
          <h1 className="text-5xl sm:text-7xl">
            Ahorrá horas de trabajo repetitivo con inteligencia artificial
          </h1>
          <p className="mt-6 max-w-xl text-xl text-muted">
            Soy Julio Roja y ayudo a pymes, emprendedores y profesionales independientes a usar IA en
            sus tareas de todos los días. No hace falta que sepas de tecnología: yo me encargo de la
            parte difícil.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <CtaButton
              href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
              location="hero"
            >
              {site.whatsapp ? "Escribime por WhatsApp" : "Contame qué querés mejorar"}
            </CtaButton>
            <Link href="#servicios" className="font-display font-bold text-accent underline underline-offset-4">
              Ver servicios
            </Link>
          </div>
        </div>

        <HoursCalculator />
      </section>

      <section id="servicios" className="mx-auto max-w-6xl scroll-mt-8 px-4 py-16 sm:px-6">
        <h2 className="text-3xl sm:text-4xl">Cómo puedo ayudarte</h2>
        <ul className="mt-8 border-t-2 border-ink">
          {services.map((s) => (
            <li key={s.slug} className="border-b border-line">
              <Link
                href={`/servicios/${s.slug}`}
                className="grid gap-2 px-2 py-6 transition hover:bg-surface sm:grid-cols-[17rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <h3 className="text-2xl">{s.name}</h3>
                <p className="text-muted">{s.short}</p>
                <span className="font-display font-bold text-accent underline underline-offset-4">Ver más</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl sm:text-4xl">Cómo trabajamos</h2>
        <ol className="mt-8 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-ink pt-4">
              <span className="font-display text-4xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="mt-2 text-xl">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl">Quién soy</h2>
          <p className="mt-5 max-w-xl text-muted">
            Hace más de {qaYears} años trabajo en control de calidad de software (QA) y también
            desarrollo aplicaciones web. Esa mezcla es lo que me diferencia: no solo armo soluciones
            con IA, las pruebo a fondo para que funcionen cuando las necesitás, y te las explico en
            simple.
          </p>
          <Link href="/sobre-mi" className="mt-5 inline-block font-display font-bold text-accent underline underline-offset-4">
            Conocé más sobre mí
          </Link>
        </div>

        <div className="border-2 border-ink bg-surface p-6">
          <h3 className="text-xl">Antes de entregar, pruebo</h3>
          <ul className="mt-4 space-y-3">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 grid size-5 shrink-0 place-items-center border-2 border-ink bg-cta text-xs font-bold text-cta-ink"
                >
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8">
            <Faq items={homeFaqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl bg-band p-8 text-band-ink sm:p-12">
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Contame qué tarea te consume más tiempo</h2>
          <p className="mt-4 max-w-xl text-lg opacity-90">
            Te respondo con una idea concreta de cómo la IA puede ayudarte, sin compromiso.
          </p>
          <div className="mt-8">
            <CtaButton
              href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
              location="final-cta"
              className="!border-band-ink"
            >
              {site.whatsapp ? "Escribime por WhatsApp" : "Ir al formulario de contacto"}
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
