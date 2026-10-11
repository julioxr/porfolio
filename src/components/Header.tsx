import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { CtaButton } from "./WhatsAppButton";

const links = [
  { href: "/servicios/capacitacion", label: "Capacitación" },
  { href: "/servicios/automatizacion", label: "Automatización" },
  { href: "/servicios/asistentes-chatbots", label: "Asistentes y chatbots" },
  { href: "/servicios/consultoria", label: "Consultoría" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <span aria-hidden className="size-3.5 border-2 border-ink bg-cta" />
          {site.name}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 font-display text-sm font-semibold lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton
            href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
            location="header"
            className="hidden !min-h-10 !px-5 !py-2 text-sm sm:inline-flex"
          >
            {site.whatsapp ? "WhatsApp" : "Contacto"}
          </CtaButton>

          <details className="relative lg:hidden">
            <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-md border border-line px-4 text-sm font-semibold">
              Menú
            </summary>
            <nav
              aria-label="Menú móvil"
              className="absolute right-0 z-50 mt-2 flex w-64 flex-col gap-1 rounded-md border-2 border-ink bg-surface p-3"
            >
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-md px-3 py-3 font-display font-semibold hover:bg-ink/5">
                  {l.label}
                </Link>
              ))}
              <Link href="/contacto" className="rounded-md px-3 py-3 font-display font-bold text-accent hover:bg-ink/5">
                Contacto
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
