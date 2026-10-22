import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { whatsappLink } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Label, Section } from "@/components/Section";
import { ArrowRight, Check } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/servicios/${service.slug}`,
    keywords: service.keywords,
  });
}

function CheckList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border border-line bg-surface">
      <div className="border-b border-line px-5 py-3">
        <Label className="text-muted">{label}</Label>
      </div>
      <ul>
        {items.map((i) => (
          <li key={i} className="flex gap-3.5 border-b border-line px-5 py-4 last:border-b-0">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-[3px] bg-accent-soft text-accent">
              <Check className="size-3.5" />
            </span>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

const h2 = "text-3xl sm:text-[2.5rem]";

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          faqJsonLd(service.faqs),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: service.name, path: `/servicios/${service.slug}` },
          ]),
        ]}
      />

      <Section className="py-12 sm:px-12 sm:py-20">
        <nav aria-label="Migas de pan" className="font-mono text-xs text-muted">
          <Link href="/" className="transition-colors hover:text-ink">
            Inicio
          </Link>
          <span aria-hidden className="mx-2 text-line-strong">/</span>
          <Link href="/#servicios" className="transition-colors hover:text-ink">
            Servicios
          </Link>
          <span aria-hidden className="mx-2 text-line-strong">/</span>
          <span className="text-ink">{String(index + 1).padStart(2, "0")}</span>
        </nav>
        <h1 className="mt-10 max-w-4xl text-[2.5rem] sm:text-6xl">{service.title}</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted">{service.intro}</p>
        <div className="mt-9">
          <CtaButton href={whatsappLink(service.whatsappMessage)} location={`service-${service.slug}`}>
            Consultame sin compromiso
          </CtaButton>
        </div>
      </Section>

      <Section className="grid gap-10 py-16 sm:px-12 sm:py-24 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className={h2}>¿Para quién es?</h2>
          <div className="mt-8">
            <CheckList label="si te pasa esto" items={service.forWho} />
          </div>
        </div>
        <div>
          <h2 className={h2}>Qué se puede hacer</h2>
          <div className="mt-8">
            <CheckList label="ejemplos de alcance" items={service.examples} />
          </div>
          <p className="mt-4 font-mono text-xs text-muted">
            Son ejemplos de alcance posible, no casos de clientes. Cada trabajo se define según tu negocio.
          </p>
        </div>
      </Section>

      <Section className="py-16 sm:px-12 sm:py-24">
        <h2 className={h2}>Cómo trabajamos</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {service.steps.map((s, i) => (
            <li key={s.title} className="border-t border-ink pt-5">
              <Label className="text-accent">{String(i + 1).padStart(2, "0")}</Label>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-[0.9375rem] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="grid gap-10 py-16 sm:px-12 sm:py-24 lg:grid-cols-[360px_1fr] lg:gap-16">
        <h2 className={h2}>Preguntas frecuentes</h2>
        <Faq items={service.faqs} />
      </Section>

      <Section>
        <h2 className="pt-12 pb-6 font-mono text-xs font-normal tracking-tight text-muted sm:px-12">
          Otros servicios
        </h2>
        <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug} className="bg-bg">
              <Link
                href={`/servicios/${s.slug}`}
                className="group flex h-full items-center justify-between gap-4 py-6 font-medium transition-colors hover:bg-surface sm:px-12"
              >
                {s.name}
                <ArrowRight className="size-4 shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta
        lead="¿Hablamos?"
        rest="Contame tu caso y te digo si puedo ayudarte."
        message={service.whatsappMessage}
        location={`service-${service.slug}-bottom`}
        label="Escribime"
      />
    </>
  );
}
