# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dueños de pymes argentinas (comercios, estudios, empresas chicas con empleados) que pierden horas en trabajo administrativo repetitivo: mails, planillas, cargas de datos, consultas de clientes. No son técnicos. Llegan desde Google o una recomendación y deciden si le escriben a Julio por WhatsApp.

## Product Purpose

Sitio de marca personal de Julio Roja, consultor independiente en IA y automatización. Vende cuatro servicios: capacitación en IA, automatización de procesos, asistentes/chatbots a medida y consultoría. Éxito: que el dueño de una pyme entienda en segundos qué le resuelve Julio y le escriba por WhatsApp (o por el formulario).

## Positioning

Una persona, no una agencia: Julio viene del testing de software (QA desde 2017) y del desarrollo (desde 2021), así que lo que entrega está probado antes de dejarlo andando. Habla en el idioma del negocio, no en jerga de IA.

## Operating Context

El visitante llega desde el celular o la compu de la oficina, muchas veces desde una búsqueda en Google. El CTA principal es WhatsApp; el formulario (Formspree) es la alternativa. El SEO es requisito.

## Capabilities and Constraints

- Next 16 (App Router), React 19, Tailwind 4, todo estático. Rutas: `/`, `/servicios/[slug]`, `/sobre-mi`, `/contacto`.
- Contenido en `src/data/` (site, services, faqs). SEO centralizado en `src/lib/seo.ts`.
- Calculadora de horas (`HoursCalculator`) en el hero: solo suma horas, no promete ahorros.
- Sin precios publicados todavía.

## Brand Commitments

- Tono confirmado por Julio: consultor serio y sobrio. Confianza, mucho aire, poca decoración. La identidad anterior "planilla / cuaderno" (cuadrícula, amarillo resaltador) le pareció infantil y queda descartada.
- Español rioplatense, voseo, sin jerga técnica.
- Preferencia confirmada (2026-10-18): Julio eligió el "estándar del rubro" (sitio de consultor clásico) por sobre direcciones más distintivas, con Stripe y Linear como vara de terminación. Lleva su foto arriba cuando la tenga.
- Cambio de dirección (2026-10-22): Julio eligió la referencia zaro.ai (fondo hueso cálido, líneas finas, titulares en dos tonos, bandas oscuras) conservando su azul como único acento. Reemplaza al blanco con azul. Pidió copy provisorio escrito por Claude para completar después; las maquetas de ejemplo van rotuladas como tales.

## Evidence on Hand

No hay clientes, testimonios, casos ni resultados reales. Tampoco foto profesional ni demos por ahora. No inventar ninguno de estos. La única evidencia verificable es la trayectoria de Julio (QA y desarrollo) y los links a LinkedIn y GitHub.

## Product Principles

1. Claridad antes que impresión: el dueño de pyme tiene que entender qué recibe sin traducir nada.
2. Seriedad por precisión, no por adorno.
3. Nada que no se pueda respaldar: sin métricas, logos ni testimonios inventados.
4. Un solo camino de acción, repetido: escribir a Julio.
