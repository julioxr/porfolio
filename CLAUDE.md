# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

Sitio de marca personal de Julio Roja (`julioroja.dev.ar`): consultor en IA y automatización para pymes y profesionales independientes (capacitación, automatización, asistentes/chatbots, consultoría). Reemplaza al portfolio de dev frontend de 2023 (Next 13, JS), que ya no existe en esta rama. El SEO es requisito del proyecto, y el CTA principal es WhatsApp. No hay clientes ni casos reales todavía: **no inventar testimonios, clientes ni resultados** en el copy.

## Comandos

```
npm install
npm run dev         # next dev
npm run build       # next build (también valida tipos y prerenderiza todo)
npm run start       # next start
npm run lint        # eslint . (flat config, eslint 10)
npm run typecheck   # tsc --noEmit
```

No hay tests. La verificación es `typecheck` + `lint` + `build`. Stack: Next 16 (App Router, Turbopack), React 19, TypeScript, Tailwind 4 (config en CSS, no hay `tailwind.config`). Alias `@/*` → `src/*`.

## Arquitectura

- **Contenido separado de la UI** en `src/data/`: `site.ts` (nombre, contacto, links, años de experiencia, `whatsappLink()`), `services.ts` (los 4 servicios con su copy, FAQs y mensaje de WhatsApp) y `faqs.ts` (FAQs del home). Agregar o editar un servicio es tocar `services.ts`: `src/app/servicios/[slug]/page.tsx` lo renderiza con `generateStaticParams`, y el `sitemap.ts` y el `Footer` lo levantan solos.
- **SEO centralizado** en `src/lib/seo.ts`: `pageMetadata()` arma title/description/canonical/OG/Twitter y los builders de JSON-LD (`Person`, `ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`) se renderizan con `components/JsonLd.tsx`. Todas las páginas deben usar `pageMetadata()`: una página que define su propio `openGraph` sin `images` pierde la imagen OG heredada del `opengraph-image.tsx` raíz.
- **Rutas:** `/`, `/servicios/[slug]`, `/sobre-mi`, `/contacto`. Todo estático (SSG). Convenciones de archivo para `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`; `public/llms.txt` lista el sitio para crawlers de IA.
- **Server Components por defecto.** Solo son `"use client"`: `WhatsAppButton.tsx` (`CtaButton`, dispara el evento GA `cta_click`) y `ContactForm.tsx`. El menú móvil y las FAQs usan `<details>` (sin JS).
- **Formulario:** `ContactForm` hace `fetch` a `https://formspree.io/f/<id>` y el estado de éxito/error depende de la respuesta real. Tiene honeypot (`website`).
- **Tema:** tokens CSS en `globals.css` (`--bg`, `--ink`, `--accent`...) con variante oscura por `prefers-color-scheme`, expuestos a Tailwind vía `@theme inline`. Fuentes con `next/font/google` (Manrope + Fraunces).

## Configuración por entorno

Ver `.env.example`. Todas son `NEXT_PUBLIC_*`: se incrustan en el build, así que cambiarlas requiere un nuevo deploy.

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: **sin definir, todos los botones de WhatsApp caen a `/contacto#formulario`** y el botón flotante no se muestra. Es lo primero que hay que cargar en Vercel.
- `NEXT_PUBLIC_GA_ID` (GA4), `NEXT_PUBLIC_SITE_URL` (base de canonical/sitemap/OG), `NEXT_PUBLIC_FORMSPREE_ID`.

## Cosas a tener en cuenta

- `qaSinceYear: 2017` y `devSinceYear: 2021` en `site.ts` se infirieron del texto del sitio viejo ("6 años de QA" y "2 años de dev" en 2023); confirmar con Julio. Los años mostrados se calculan en build.
- El remoto es `github.com/julioxr/porfolio` (typo en el nombre del repo).
- Pendiente del plan original (`C:\Users\Julio\.claude\plans\claude-este-es-mi-snuggly-wilkes.md`): `/demos`, `/blog`, precios y casos reales cuando existan, y el alta en Google Search Console.
