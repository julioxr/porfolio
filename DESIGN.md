---
name: Julio Roja
description: Consultor en IA y automatización para pymes. Sobrio, claro, con terminación de producto.
colors:
  accent: "#1f45d6"
  accent-hover: "#1838b3"
  accent-ink: "#ffffff"
  accent-soft: "#eef2fd"
  ink: "#0b1324"
  muted: "#4f5a6e"
  bg: "#ffffff"
  surface: "#ffffff"
  subtle: "#f6f8fb"
  line: "#e4e8ef"
  line-strong: "#cfd6e2"
  band: "#0b1324"
  band-ink: "#f5f7fb"
  band-muted: "#aab4c7"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"ss01\""
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  card: "24px"
  card-lg: "32px"
  stack: "48px"
  stack-lg: "80px"
  section: "80px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-sm:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "36px"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "48px"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-lg}"
  check-badge:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    size: "24px"
  cta-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-ink}"
    rounded: "{rounded.lg}"
    padding: "64px 48px"
---

> **Desactualizado desde 2026-10-22.** El sitio pasó a la dirección cálida estilo zaro.ai con el azul como acento (ver `CLAUDE.md`, sección Diseño). Este documento describe la versión blanca anterior; regenerarlo con `/impeccable document`.


# Design System: Julio Roja

## Overview

**Creative North Star: "El estudio prolijo"**

El sitio se ve como el de un consultor serio que cuida los detalles: blanco limpio, tinta casi negra con un dejo azul, un único azul profundo para todo lo que se puede tocar, y mucho aire entre bloques. Es el estándar del rubro elegido a propósito, terminado con la vara de un producto de software (Stripe, Linear): bordes de 1px, radios medidos, sombras que apenas despegan la superficie y cifras tabulares donde hay números.

La seriedad sale de la precisión, no del adorno. No hay texturas, ilustraciones, degradés ni color decorativo: la jerarquía la arman el tamaño y el peso tipográfico, el gris azulado de las secciones alternas y una banda oscura que cierra cada página con la llamada a escribir. Una sola familia (Geist) resuelve títulos, cuerpo y UI. La identidad anterior "planilla / cuaderno" (cuadrícula de papel, amarillo resaltador, serif de cuerpo) quedó descartada y no vuelve.

Hay variante oscura completa por `prefers-color-scheme`: los mismos roles se remapean a un fondo navy profundo y el azul se aclara para mantener contraste. Todo token se usa por su rol, nunca por su hex.

**Key Characteristics:**
- Blanco y gris azulado muy claro, alternados por sección, separados por una regla de 1px.
- Un solo color de acción: azul profundo para botones, links, números de paso y el total anual.
- Geist en todo; títulos semibold con tracking negativo y `text-wrap: balance`.
- Bordes de 1px y radios de 8px (controles) y 12px (superficies).
- Sombra suave de dos capas, solo sobre superficies que contienen algo (tarjeta, calculadora, retrato, botón primario).
- Iconos SVG propios de trazo uniforme (1.75), nunca glifos ni paquetes de iconos.

## Colors

Paleta neutra fría con un único acento azul; el color existe para señalar acción, no para decorar.

### Primary
- **Azul Profundo** (`accent`): botón primario, links de texto, numeración de pasos, el total "Por año" de la calculadora, borde de foco y selección de texto. En hover pasa a **Azul Profundo Hundido** (`accent-hover`). El texto sobre azul usa `accent-ink`.
- **Azul Velado** (`accent-soft`): solo como fondo del círculo de check, con el ícono en Azul Profundo.

### Neutral
- **Tinta Navy** (`ink`): texto principal, títulos, monograma del header.
- **Pizarra** (`muted`): bajadas, descripciones, texto secundario, links de navegación en reposo.
- **Blanco** (`bg`, `surface`): fondo de página y de tarjetas. En claro son el mismo blanco; en oscuro `surface` se levanta un paso sobre `bg`, así que tarjetas y paneles siempre usan `surface`.
- **Niebla Azulada** (`subtle`): secciones alternas, footer, pie de la calculadora, hover de ítems de menú, caja de contexto del formulario.
- **Regla** (`line`): bordes de tarjetas, separadores de lista, reglas entre secciones.
- **Regla Firme** (`line-strong`): bordes de controles (inputs, botón outline, botón Menú) y la regla superior de cada paso del proceso; hover de tarjetas.
- **Banda Nocturna** (`band`, `band-ink`, `band-muted`): bloque de CTA final; título en `band-ink`, bajada en `band-muted`.

### Named Rules
**La Regla de la Única Voz.** El azul es el único color con significado. Si algo es azul, se puede tocar o es la cifra que importa. No se suma un segundo acento.

**La Regla del Rol, no del Hex.** Siempre se usa el token (`bg-subtle`, `text-muted`, `border-line`), porque la variante oscura remapea cada rol. Un hex escrito a mano rompe el modo oscuro.

## Typography

**Display Font:** Geist (con ui-sans-serif, system-ui)
**Body Font:** Geist (con ui-sans-serif, system-ui)

**Character:** Una sans geométrica y neutra en todos los niveles, con `ss01` activo. El contraste lo dan el tamaño y el peso (600 en títulos, 500 en UI, 400 en texto), no un cambio de familia.

### Hierarchy
- **Display** (600, 2.75rem → 3.75rem → 4rem, 1.04, -0.035em): solo el h1 del home. Las páginas internas usan h1 de 2.25rem → 3.25rem con el mismo tratamiento.
- **Headline** (600, 1.875rem → 2.5rem, 1.12, -0.025em): h2 de sección en el home. En páginas internas baja a 1.5rem → 1.875rem; en la banda de CTA, 1.875rem → 2.25rem.
- **Title** (600, 1.125–1.25rem, 1.12, -0.025em): h3 de tarjetas, pasos y paneles.
- **Body** (400, 1.0625rem, 1.65): texto corrido, con `text-wrap: pretty`. Bloques de lectura limitados a `max-w-xl` / `max-w-2xl` (36–42rem).
- **Lead** (400, 1.125rem → 1.25rem, 1.65, color `muted`): la bajada bajo cada título de sección o de página.
- **Label** (500, 0.875rem): links de navegación, metadatos, etiquetas de la calculadora, encabezados de columna del footer. Los botones usan 500 a 0.9375rem.

### Named Rules
**La Regla de las Cifras Tabulares.** Todo número que se compara o se suma (horas, totales, numeración de pasos) va con `tabular-nums`.

**La Regla Sin Rótulos.** No hay texto en mayúsculas espaciadas sobre los títulos. Un título se sostiene solo, con su bajada debajo.

## Layout

Contenedor único de 72rem (`max-w-6xl`) centrado, con gutter de 16px que sube a 24px desde `sm`. Todo el texto alineado a la izquierda. Las secciones del home se apilan con 80px de padding vertical (96px desde `sm`), separadas por una regla de 1px y alternando blanco y Niebla Azulada.

Desde `lg` (1024px) las secciones pasan a dos columnas asimétricas con 80px de gap: texto a la izquierda y un objeto a la derecha de ancho fijo (retrato 400px, calculadora 480px, formulario 520px) o una grilla 1fr/2fr para FAQs (título a la izquierda, lista a la derecha). Por debajo, todo es una columna con gap de 40–48px. Las listas de servicios van en 2 columnas desde `sm`; los pasos del proceso, en 3.

Las tarjetas usan 24px de padding interno (32px desde `sm`). El header es fijo arriba (sticky, 64px de alto) y los anclajes compensan con `scroll-mt-20`.

## Elevation & Depth

Sistema mayormente plano con una sola sombra suave. La profundidad la dan primero los bordes de 1px y el cambio de fondo entre secciones; la sombra solo despega del plano las superficies que contienen algo (calculadora, panel de checks, formulario, retrato, menú móvil, botón primario) y aparece en hover sobre las tarjetas de servicio.

### Shadow Vocabulary
- **Sombra Suave** (`--shadow`, expuesta como `shadow-soft`; ver sidecar para el valor por modo): un contacto de 1px más un halo difuso con offset hacia abajo. Es la única sombra del sistema.

### Named Rules
**La Regla de una Sola Sombra.** No hay escalas de elevación. Una superficie está en el plano o lleva la Sombra Suave; nunca más.

## Shapes

Esquinas suavemente redondeadas en dos tamaños: 8px para lo que se toca (botones, inputs, ítems de menú) y 12px para lo que contiene (tarjetas, calculadora, banda de CTA, retrato, menú móvil). El círculo completo queda reservado al badge de check y al botón flotante de WhatsApp. Bordes siempre de 1px. El anillo de foco usa radio de 6px.

## Components

### Buttons
Firmes y sin estridencia: un bloque de color plano, con ícono de chat cuando el destino es WhatsApp.
- **Shape:** esquinas de 8px.
- **Primary:** Azul Profundo con texto blanco, 48px de alto, 20px de padding horizontal, 0.9375rem en peso 500, Sombra Suave. Versión chica de 36px en el header.
- **Hover / Focus:** el fondo pasa a `accent-hover` en 200ms; foco con anillo de 2px en Azul Profundo a 3px de distancia.
- **Outline:** fondo `surface`, borde `line-strong`, texto `ink`; en hover el borde se oscurece (tinta al 40%). Es la acción secundaria del hero.
- **Floating:** el mismo botón primario en píldora, fijo abajo a la derecha, solo cuando hay número de WhatsApp.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** `surface`.
- **Shadow Strategy:** plana con borde `line` en reposo; en hover el borde pasa a `line-strong` y aparece la Sombra Suave. Los paneles de contenido fijo (checks, formulario) llevan la sombra siempre.
- **Border:** 1px `line`.
- **Internal Padding:** 24px, 32px desde `sm`.
- Las tarjetas de servicio cierran con un link "Ver el servicio" en azul y una flecha que se corre 2px en hover.

### Inputs / Fields
- **Style:** fondo `bg`, borde 1px `line-strong`, radio 8px, 10px × 14px de padding, 1rem.
- **Hover:** borde tinta al 40%.
- **Focus:** borde Azul Profundo más el anillo de foco global.
- **Error:** mensaje de alerta en `--danger` (`#b42318`, oscuro `#ff8a7a`) bajo el botón; los campos no cambian de color.

### Navigation
Header blanco al 95% con regla inferior, 64px. Monograma "JR" en un cuadrado de tinta de 28px y radio 6px, seguido del nombre en semibold. Links en `muted` a 0.875rem que pasan a `ink` en hover. En mobile, un `<details>` "Menú" con borde abre un panel de 288px (radio 12px, Sombra Suave) con ítems que se tiñen de `subtle` en hover.

### Lista con checks
Filas separadas por reglas `line`, cada una con un círculo de 24px en Azul Velado y un check SVG en Azul Profundo. Es la forma estándar de listar alcance o pruebas.

### Calculadora de horas
Panel de 12px con Sombra Suave: cabecera con regla, filas con input numérico de 64px alineado a la derecha y cifras tabulares, pie en `subtle` partido en dos con el total semanal en tinta y el anual en azul, y debajo el botón primario a ancho completo.

### Banda de CTA final
Bloque `band` de 12px de radio dentro del contenedor, con título en `band-ink`, bajada en `band-muted` y el botón primario alineado abajo a la derecha desde `lg`. Cierra todas las páginas.

### Pasos del proceso
Tres columnas, cada una con una regla superior `line-strong` de 1px, título con el número en azul tabular ("1.") y bajada en `muted`.

### FAQ
`<details>` entre reglas `line`, pregunta en 500 a 1.0625rem que se tiñe de azul en hover, y un "+" SVG que rota 45° al abrir.

## Do's and Don'ts

### Do:
- **Do** usar siempre los tokens de rol (`bg`, `surface`, `subtle`, `ink`, `muted`, `accent`, `line`, `band`) para que la variante oscura funcione sola.
- **Do** reservar el azul para lo accionable y la cifra principal.
- **Do** separar secciones con una regla de 1px y alternar blanco con `subtle`.
- **Do** usar 8px de radio en controles y 12px en superficies.
- **Do** dibujar iconos como SVG de 24×24 con trazo de 1.75, `currentColor` y extremos redondeados.
- **Do** poner `tabular-nums` en todo número que se compara.
- **Do** cerrar cada página con la banda de CTA oscura.

### Don't:
- **Don't** volver a la estética "planilla / cuaderno": nada de cuadrícula de papel, amarillo resaltador ni bordes gruesos.
- **Don't** sumar un segundo color de acento ni degradés.
- **Don't** apilar sombras ni crear niveles de elevación nuevos; solo existe la Sombra Suave.
- **Don't** poner rótulos en mayúsculas espaciadas sobre los títulos.
- **Don't** usar glifos o emojis como íconos.
- **Don't** mostrar logos, métricas o testimonios que no existan; el sistema no tiene componente para "prueba social" inventada.
