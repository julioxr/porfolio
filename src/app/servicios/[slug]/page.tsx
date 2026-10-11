import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { whatsappLink } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { CtaButton } from "@/components/WhatsAppButton";
import { Faq } from "@/components/Faq";

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

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

      <article className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
        <nav aria-label="Migas de pan" className="text-sm text-muted">
          <Link href="/" className="hover:text-ink">
            Inicio
          </Link>{" "}
          / <span>{service.name}</span>
        </nav>

        <h1 className="mt-6 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{service.intro}</p>
        <div className="mt-8">
          <CtaButton href={whatsappLink(service.whatsappMessage)} location={`service-${service.slug}`}>
            Consultame sin compromiso
          </CtaButton>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">¿Para quién es?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            {service.forWho.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Ejemplos de lo que puedo hacer</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            {service.examples.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Son ejemplos de alcance posible, no casos de clientes. Cada trabajo se define según tu negocio.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Cómo trabajamos</h2>
          <ol className="mt-4 space-y-4">
            {service.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="w-8 shrink-0 font-display text-3xl font-extrabold text-accent">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-4">
            <Faq items={service.faqs} />
          </div>
        </section>

        <section className="mt-16 rounded-xl bg-band p-8 text-band-ink">
          <h2 className="font-display text-2xl font-semibold">¿Hablamos?</h2>
          <p className="mt-2 opacity-90">Contame tu caso y te digo si puedo ayudarte.</p>
          <div className="mt-6">
            <CtaButton href={whatsappLink(service.whatsappMessage)} location={`service-${service.slug}-bottom`}>
              Escribime
            </CtaButton>
          </div>
        </section>

        <aside className="mt-12">
          <h2 className="text-lg font-semibold">Otros servicios</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="inline-block rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </>
  );
}
