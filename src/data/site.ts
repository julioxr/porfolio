export const site = {
  name: "Julio Roja",
  descriptor: "Consultor en IA y automatización",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://julioroja.dev.ar",
  locale: "es_AR",
  email: "julioroja987@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "xvonvajk",
  linkedin: "https://www.linkedin.com/in/julio-roja/",
  github: "https://github.com/julioxr",
  qaSinceYear: 2017,
  devSinceYear: 2021,
  description:
    "Te ayudo a ahorrar horas de trabajo repetitivo con inteligencia artificial: capacitación, automatización de procesos, asistentes y chatbots a medida. Sin que tengas que ser técnico.",
} as const;

export function whatsappLink(message: string): string {
  if (!site.whatsapp) return "/contacto#formulario";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function yearsSince(year: number): number {
  return new Date().getFullYear() - year;
}
