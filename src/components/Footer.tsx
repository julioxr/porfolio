import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";

const heading = "font-mono text-xs text-band-quiet";
const item = "text-sm text-band-muted transition-colors hover:text-band-ink";

export function Footer() {
  return (
    <footer className="border-t border-band-line bg-band px-4 text-band-ink sm:px-6">
      <div className="mx-auto max-w-[75rem] sm:border-x sm:border-band-line">
        <div className="flex flex-col gap-12 py-14 sm:px-12 sm:py-16 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <p className="flex items-center gap-3 font-semibold tracking-tight">
              <span aria-hidden className="grid size-8 place-items-center rounded-[4px] bg-band-ink text-xs text-band">
                JR
              </span>
              {site.name}
            </p>
            <p className="mt-4 text-sm text-band-muted">{site.descriptor} para pymes y profesionales independientes.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-16">
            <nav aria-label="Servicios">
              <p className={heading}>Servicios</p>
              <ul className="mt-4 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/servicios/${s.slug}`} className={item}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Sitio">
              <p className={heading}>Sitio</p>
              <ul className="mt-4 space-y-3">
                <li><Link href="/#proceso" className={item}>Cómo trabajo</Link></li>
                <li><Link href="/sobre-mi" className={item}>Sobre mí</Link></li>
                <li><Link href="/contacto" className={item}>Contacto</Link></li>
              </ul>
            </nav>

            <div>
              <p className={heading}>Contacto</p>
              <ul className="mt-4 space-y-3">
                {site.whatsapp ? (
                  <li>
                    <a href={whatsappLink("Hola Julio, vi tu sitio y quiero consultarte algo.")} target="_blank" rel="noopener noreferrer" className={item}>
                      WhatsApp
                    </a>
                  </li>
                ) : null}
                <li>
                  <a href={`mailto:${site.email}`} className={`${item} break-all`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={item}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className={item}>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-band-line py-6 sm:px-12">
          <p className="font-mono text-xs text-band-quiet">
            © {new Date().getFullYear()} {site.name} · julioroja.dev.ar
          </p>
        </div>
      </div>
    </footer>
  );
}
