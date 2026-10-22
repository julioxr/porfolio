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
- **Server Components por defecto.** Solo son `"use client"`: `WhatsAppButton.tsx` (`CtaButton`, dispara el evento GA `cta_click`), `HoursCalculator.tsx` y `ContactForm.tsx`. El menú móvil y las FAQs usan `<details>` (sin JS).
- **Formulario:** `ContactForm` hace `fetch` a `https://formspree.io/f/<id>` y el estado de éxito/error depende de la respuesta real. Tiene honeypot (`website`).
- **Diseño:** dirección "Zaro con el azul de Julio" (elegida el 2026-10-22 tomando zaro.ai como referencia; maqueta en Subframe, proyecto `7c885ca7c622`, canvas "Home estilo Zaro"). Fondo hueso cálido (`--bg #ecebe5`), superficies `--surface`, tinta casi negra cálida, líneas finas `--line` y un único azul (`--accent`) para botones, números y lo destacado. Cada franja usa `components/Section.tsx`: contenido entre dos rieles verticales de 1px (desde `sm`) y regla inferior, con tonos `light`, `dark` (`--band-2`, sección de QA) y `darker` (`--band`, CTA final y footer). Títulos en dos tonos con `TwoTone` (afirmación en tinta, continuación en `text-quiet`, que solo se usa en texto grande por contraste). Rótulos chicos en Geist Mono con `Label` (`--font-geist-mono`), botones de radio 5px con flecha, la trama de puntos `.dots` en las bandas oscuras. Tokens en `globals.css` con variante oscura por `prefers-color-scheme`, expuestos vía `@theme inline`. Iconos SVG propios en `components/Icons.tsx`. `DESIGN.md` quedó desactualizado (describe la versión blanca anterior). Contexto de producto en `PRODUCT.md`.
- **Foto:** `components/Portrait.tsx` muestra `public/julio.jpg` (vertical 4:5) si existe al hacer el build; si no, una tarjeta con iniciales que solo se ve en desktop.
- **Ejemplos:** `components/Examples.tsx` muestra tres maquetas (chat, mail → planilla, informe semanal) con negocios inventados, rotuladas "Ejemplo" y con la aclaración de que no son casos de clientes. Reemplazarlas por casos reales cuando existan.
- **Hero interactivo:** `HoursCalculator.tsx` (client) suma las horas semanales que la persona dedica a tareas repetitivas y arma el mensaje de WhatsApp con ese desglose. Es solo una cuenta de tiempo: no mostrar ahorros ni porcentajes que no se puedan respaldar.

## Configuración por entorno

Ver `.env.example`. Todas son `NEXT_PUBLIC_*`: se incrustan en el build, así que cambiarlas requiere un nuevo deploy.

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: **sin definir, todos los botones de WhatsApp caen a `/contacto#formulario`** y el botón flotante no se muestra. Es lo primero que hay que cargar en Vercel.
- `NEXT_PUBLIC_GA_ID` (GA4), `NEXT_PUBLIC_SITE_URL` (base de canonical/sitemap/OG), `NEXT_PUBLIC_FORMSPREE_ID`.

## Cosas a tener en cuenta

- `qaSinceYear: 2017` y `devSinceYear: 2021` en `site.ts` están confirmados por Julio (2026-10-18). Los años mostrados se calculan en build.
- Sin `NEXT_PUBLIC_WHATSAPP_NUMBER`, `whatsappLink()` manda a `/contacto?mensaje=...#formulario` y `ContactForm` muestra ese texto y lo envía como campo oculto `contexto` (la consulta de la persona sigue siendo obligatoria).
- El remoto es `github.com/julioxr/porfolio` (typo en el nombre del repo).
- Pendiente del plan original (`C:\Users\Julio\.claude\plans\claude-este-es-mi-snuggly-wilkes.md`): `/demos`, `/blog`, precios y casos reales cuando existan, y el alta en Google Search Console.
