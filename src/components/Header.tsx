import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import { CtaButton } from "./WhatsAppButton";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Cómo trabajo" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 px-4 backdrop-blur-sm sm:px-6 print:static">
      <div className="mx-auto flex h-16 max-w-[75rem] items-center justify-between gap-4 sm:border-x sm:border-line sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-[0.9375rem] font-semibold tracking-tight">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-[4px] bg-ink text-xs font-semibold tracking-normal text-bg"
          >
            JR
          </span>
          {site.name}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton
            href={whatsappLink("Hola Julio, quiero consultarte por IA para mi trabajo.")}
            location="header"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Escribime
          </CtaButton>

          <details className="relative md:hidden">
            <summary className="flex min-h-9 cursor-pointer list-none items-center rounded-[5px] border border-ink px-3.5 text-sm font-medium [&::-webkit-details-marker]:hidden">
              Menú
            </summary>
            <nav
              aria-label="Menú móvil"
              className="absolute right-0 z-50 mt-2 flex w-72 flex-col border border-line bg-surface p-2 shadow-soft"
            >
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="px-3 py-2.5 font-medium hover:bg-subtle">
                  {l.label}
                </Link>
              ))}
              <p className="mt-2 border-t border-line px-3 pt-3 pb-1 font-mono text-xs text-muted">Servicios</p>
              {services.map((s) => (
                <Link key={s.slug} href={`/servicios/${s.slug}`} className="px-3 py-2 text-sm text-muted hover:bg-subtle hover:text-ink">
                  {s.name}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
