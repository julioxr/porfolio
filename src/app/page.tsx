import Link from "next/link";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { site, whatsappLink, yearsSince } from "@/data/site";
import { businessJsonLd, faqJsonLd, personJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";

const problems = [
  "Respondés las mismas preguntas todos los días.",
  "Copiás datos de una planilla a otra, a mano.",
  "Armás los mismos mails, presupuestos o informes una y otra vez.",
  "Probaste ChatGPT pero no sabés cómo aplicarlo a tu trabajo.",
];

const steps = [
  { title: "Me contás", text: "Una charla corta sobre qué tareas te consumen más tiempo." },
  { title: "Te propongo", text: "Te digo qué conviene hacer, cuánto cuesta y qué podés esperar. Si la IA no ayuda, también te lo digo." },
  { title: "Lo armo y lo pruebo", text: "Lo construyo, lo pruebo a fondo y te explico cómo usarlo." },
];

export default function Home() {
  const qaYears = yearsSince(site.qaSinceYear);

  return (
    <>
      <JsonLd data={[personJsonLd, businessJsonLd, faqJsonLd(homeFaqs)]} />

      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <p className="text-sm font-semibold tracking-wide text-brand uppercase">{site.descriptor}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight font-semibold tracking-tight sm:text-6xl">
          Ahorrá horas de trabajo repetitivo con inteligencia artificial
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Ayudo a pymes, emprendedores y profesionales independientes a integrar la IA en sus tareas
          de todos los días. Sin que tengas que ser técnico: yo me encargo de la parte difícil.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton
            href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
            location="hero"
          >
            {site.whatsapp ? "Escribime por WhatsApp" : "Contame qué querés mejorar"}
          </CtaButton>
          <Link
            href="#servicios"
            className="inline-flex min-h-12 items-center rounded-full border border-ink/30 px-6 py-3 font-semibold hover:bg-ink/5"
          >
            Ver servicios
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">¿Te suena familiar?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {problems.map((p) => (
              <li key={p} className="rounded-2xl border border-line bg-bg p-5 text-lg">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-lg text-muted">
            Casi todo eso se puede automatizar o acelerar. Lo importante es saber qué conviene
            automatizar primero, y hacerlo bien.
          </p>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl scroll-mt-8 px-4 py-20 sm:px-6">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">Cómo puedo ayudarte</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:border-accent"
            >
              <h3 className="font-serif text-2xl font-semibold">{s.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.short}</p>
              <span className="mt-5 inline-block font-semibold text-accent">
                Ver más <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">Cómo trabajamos</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-serif text-4xl font-semibold text-accent">{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">Quién soy</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Soy Julio Roja. Hace más de {qaYears} años trabajo en control de calidad de software (QA)
            y también desarrollo aplicaciones web. Esa mezcla es lo que me diferencia: no solo armo
            soluciones con IA, las pruebo a fondo para que funcionen cuando las necesitás, y te las
            explico en simple.
          </p>
          <Link href="/sobre-mi" className="mt-5 inline-block font-semibold text-accent">
            Conocé más sobre mí <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">Preguntas frecuentes</h2>
        <div className="mt-8">
          <Faq items={homeFaqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-brand p-10 text-center text-bg sm:p-14">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Contame qué tarea te consume más tiempo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
            Te respondo con una idea concreta de cómo la IA puede ayudarte, sin compromiso.
          </p>
          <div className="mt-8">
            <CtaButton
              href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
              location="final-cta"
            >
              {site.whatsapp ? "Escribime por WhatsApp" : "Ir al formulario de contacto"}
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
