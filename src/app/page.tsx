import Link from "next/link";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { site, whatsappLink, yearsSince } from "@/data/site";
import { businessJsonLd, faqJsonLd, personJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { HoursCalculator } from "@/components/HoursCalculator";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { FlowDiagram } from "@/components/FlowDiagram";
import { Examples } from "@/components/Examples";
import { Label, Section, TwoTone } from "@/components/Section";
import { ArrowRight, Check } from "@/components/Icons";

const steps = [
  {
    title: "Me contás",
    text: "Una charla corta, por WhatsApp o videollamada, sobre cómo trabajás y qué tareas te consumen más tiempo.",
  },
  {
    title: "Te propongo",
    text: "Qué conviene hacer primero, cuánto cuesta y qué podés esperar. Si la IA no es la respuesta, también te lo digo.",
  },
  {
    title: "Lo armo y lo pruebo",
    text: "Lo construyo, lo pruebo con casos reales y con casos raros, y te explico cómo usarlo.",
  },
  {
    title: "Lo ajustamos",
    text: "Las primeras semanas lo miramos en uso y corregimos lo que haga falta.",
  },
];

const checks = [
  "Que resuelva bien la tarea",
  "Datos incompletos o mal cargados",
  "Accesos y datos protegidos",
  "Qué pasa cuando algo falla",
];

const h2 = "text-3xl sm:text-[2.5rem]";

export default function Home() {
  const mainMessage = "Hola Julio, quiero consultarte por IA para mi trabajo.";

  return (
    <>
      <JsonLd data={[personJsonLd, businessJsonLd, faqJsonLd(homeFaqs)]} />

      <Section className="grid items-center gap-14 py-14 sm:px-12 sm:py-24 lg:grid-cols-[1fr_420px] lg:gap-16">
        <div>
          <TwoTone
            as="h1"
            lead="Automatizá el trabajo repetitivo de tu pyme."
            rest="Con IA, sin que tengas que ser técnico."
            className="text-[2.5rem] sm:text-6xl"
          />
          <p className="mt-7 max-w-xl text-lg text-muted">
            Soy Julio Roja. Ayudo a dueños de pymes y profesionales a usar inteligencia artificial en
            lo de todos los días: responder consultas, cargar planillas, escribir mails y armar
            informes. Vos me contás cómo trabajás; yo armo la solución, la pruebo y te la dejo
            andando.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaButton href={whatsappLink(mainMessage)} location="hero">
              {site.whatsapp ? "Escribime por WhatsApp" : "Contame qué querés mejorar"}
            </CtaButton>
            <CtaButton href="#servicios" location="hero-services" variant="outline" icon="none">
              Ver servicios
            </CtaButton>
          </div>
        </div>
        <FlowDiagram />
      </Section>

      <Section id="servicios">
        <TwoTone
          lead="En qué te puedo ayudar."
          rest="Cuatro formas de empezar, según dónde estés hoy."
          className={`${h2} pt-16 pb-12 sm:px-12 sm:pt-24`}
        />
        <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.slug} className="bg-bg">
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex h-full flex-col py-8 transition-colors hover:bg-surface sm:px-8"
              >
                <Label className="text-accent">{String(i + 1).padStart(2, "0")}</Label>
                <h3 className="mt-5 text-xl sm:mt-12">{s.name}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] text-muted">{s.short}</p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                  Ver el servicio
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="grid gap-12 py-16 sm:px-12 sm:py-24 lg:grid-cols-[1fr_500px] lg:gap-16">
        <div className="max-w-md">
          <TwoTone lead="¿Cuántas horas se te van por semana?" rest="Hacé la cuenta." className={h2} />
          <p className="mt-6 text-lg text-muted">
            Antes de hablar de herramientas, conviene saber cuánto tiempo hay en juego. Poné tus
            horas semanales y mirá lo que suman en un año.
          </p>
          <p className="mt-4 text-lg text-muted">
            Si me escribís desde acá, tu consulta ya va con el desglose y empezamos por lo que más
            pesa.
          </p>
        </div>
        <HoursCalculator />
      </Section>

      <Section id="ejemplos">
        <div className="pt-16 pb-12 sm:px-12 sm:pt-24">
          <TwoTone
            lead="Cómo se ve en la práctica."
            rest="Tres ejemplos de lo que se puede armar."
            className={h2}
          />
          <p className="mt-6 max-w-xl text-muted">
            Son ejemplos ilustrativos con negocios inventados, para que te des una idea. No son casos
            de clientes: cada trabajo se arma según cómo funciona el tuyo.
          </p>
        </div>
        <Examples />
      </Section>

      <Section id="proceso" className="py-16 sm:px-12 sm:py-24">
        <TwoTone lead="Cómo trabajo." rest="Simple y sin sorpresas." className={h2} />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-ink pt-5">
              <Label className="text-accent">{String(i + 1).padStart(2, "0")}</Label>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-[0.9375rem] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        tone="dark"
        className="grid gap-12 py-16 sm:px-12 sm:py-24 lg:grid-cols-[1fr_440px] lg:gap-16"
      >
        <div>
          <TwoTone
            lead="Calidad y seguridad en cada solución."
            rest="También cuando aplicamos IA."
            dark
            className={h2}
          />
          <p className="mt-6 max-w-lg text-lg text-band-muted">
            Tengo 10 años de experiencia cuidando la calidad del software, además de experiencia en
            desarrollo web y soluciones con IA. Reviso cómo se comportan, qué pasa con los datos y
            cómo responden ante errores, para que puedas usarlas con confianza en tu trabajo diario.
          </p>
          <Link href="/sobre-mi" className="group mt-8 inline-flex items-center gap-1.5 font-medium">
            Conocé mi experiencia
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="self-start border border-band-line">
          <div className="flex justify-between border-b border-band-line px-5 py-3 font-mono text-xs text-band-quiet">
            <span>checklist de pruebas</span>
            <span>4 / 4</span>
          </div>
          <ul>
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-4 border-b border-band-line px-5 py-4 last:border-b-0">
                <span className="grid size-5 shrink-0 place-items-center rounded-[3px] border border-band-quiet">
                  <Check className="size-3.5" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="grid gap-10 py-16 sm:px-12 sm:py-24 lg:grid-cols-[360px_1fr] lg:gap-16">
        <h2 className={h2}>Preguntas frecuentes</h2>
        <Faq items={homeFaqs} />
      </Section>

      <FinalCta
        lead="Contame qué tarea te consume más tiempo."
        rest="Te respondo con una idea concreta."
        message={mainMessage}
        location="final-cta"
        label={site.whatsapp ? "Escribime por WhatsApp" : "Ir al formulario de contacto"}
      />
    </>
  );
}
