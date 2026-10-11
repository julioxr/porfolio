import type { Metadata } from "next";
import { site } from "@/data/site";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.descriptor}`,
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({ title, description, path, keywords }: PageMeta): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  jobTitle: site.descriptor,
  url: site.url,
  email: site.email,
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Inteligencia artificial",
    "Automatización de procesos",
    "Chatbots",
    "Control de calidad de software",
    "Desarrollo web",
  ],
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#service`,
  name: `${site.name} — ${site.descriptor}`,
  url: site.url,
  description: site.description,
  founder: { "@id": `${site.url}/#person` },
  areaServed: ["AR", "Latinoamérica"],
  availableLanguage: "es",
  email: site.email,
  sameAs: [site.linkedin, site.github],
};

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service: { name: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${site.url}/servicios/${service.slug}`,
    provider: { "@id": `${site.url}/#service` },
    areaServed: ["AR", "Latinoamérica"],
  };
}
