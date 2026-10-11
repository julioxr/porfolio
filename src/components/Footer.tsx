import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-serif text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-muted">{site.descriptor}</p>
        </div>

        <nav aria-label="Servicios">
          <p className="text-sm font-semibold">Servicios</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-4 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
