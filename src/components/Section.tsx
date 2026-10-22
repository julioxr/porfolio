type Tone = "light" | "dark" | "darker";

const tones: Record<Tone, string> = {
  light: "border-b border-line",
  dark: "bg-band-2 text-band-ink",
  darker: "bg-band text-band-ink",
};

type Props = {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
};

// Franja a todo el ancho con el contenido entre dos rieles verticales de 1px (desde sm),
// como la grilla de zaro.ai. El padding interno lo define cada sección con className.
export function Section({ id, tone = "light", className = "", children }: Props) {
  const rail = tone === "light" ? "border-line" : "border-band-line";
  return (
    <section id={id} className={`scroll-mt-16 px-4 sm:px-6 ${tones[tone]}`}>
      <div className={`mx-auto max-w-[75rem] sm:border-x ${rail} ${className}`}>{children}</div>
    </section>
  );
}

type TwoToneProps = {
  as?: "h1" | "h2";
  lead: string;
  rest: string;
  dark?: boolean;
  className?: string;
};

// Título en dos tonos: la afirmación en tinta y la continuación en gris.
export function TwoTone({ as: Tag = "h2", lead, rest, dark = false, className = "" }: TwoToneProps) {
  return (
    <Tag className={className}>
      <span className="block">{lead}</span> <span className={`block ${dark ? "text-band-quiet" : "text-quiet"}`}>{rest}</span>
    </Tag>
  );
}

export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-mono text-xs tracking-tight ${className}`}>{children}</span>;
}
