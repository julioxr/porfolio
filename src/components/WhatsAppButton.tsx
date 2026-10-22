"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { site } from "@/data/site";
import { ArrowRight, Chat } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  location: string;
  variant?: "solid" | "outline" | "outline-dark";
  size?: "md" | "sm";
  icon?: "arrow" | "chat" | "none";
  className?: string;
};

const variants = {
  solid: "bg-accent text-accent-ink hover:bg-accent-hover",
  outline: "border border-ink text-ink hover:bg-surface",
  "outline-dark": "border border-band-line text-band-ink hover:border-band-muted",
};

const sizes = {
  md: "min-h-12 px-5 text-[0.9375rem]",
  sm: "min-h-9 px-3.5 text-sm",
};

export function CtaButton({
  href,
  children,
  location,
  variant = "solid",
  size = "md",
  icon = "arrow",
  className = "",
}: Props) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        if (site.gaId) sendGAEvent("event", "cta_click", { location, destination: external ? "whatsapp" : "form" });
      }}
      className={`group inline-flex items-center justify-center gap-2 rounded-[5px] font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon === "chat" ? <Chat className="size-[1.1em]" /> : null}
      {children}
      {icon === "arrow" ? (
        <ArrowRight className="size-[1em] transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  );
}
