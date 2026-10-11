"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { site } from "@/data/site";

type Props = {
  href: string;
  children: React.ReactNode;
  location: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function CtaButton({ href, children, location, variant = "solid", className = "" }: Props) {
  const external = href.startsWith("http");
  const styles =
    variant === "solid"
      ? "bg-accent text-accent-ink hover:opacity-90"
      : "border border-ink/30 text-ink hover:bg-ink/5";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        if (site.gaId) sendGAEvent("event", "cta_click", { location, destination: external ? "whatsapp" : "form" });
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
