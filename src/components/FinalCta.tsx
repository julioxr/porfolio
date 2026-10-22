import { whatsappLink } from "@/data/site";
import { CtaButton } from "./WhatsAppButton";
import { Section, TwoTone } from "./Section";

type Props = {
  lead: string;
  rest: string;
  message: string;
  location: string;
  label: string;
};

export function FinalCta({ lead, rest, message, location, label }: Props) {
  const href = whatsappLink(message);
  return (
    <Section tone="darker" className="relative overflow-hidden px-0 py-20 sm:px-12 sm:py-28">
      <div aria-hidden className="dots absolute top-0 left-0 hidden h-48 w-64 opacity-70 sm:block" />
      <div aria-hidden className="dots absolute right-0 bottom-0 hidden h-48 w-64 opacity-70 sm:block" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <TwoTone lead={lead} rest={rest} dark className="text-[2rem] sm:text-5xl" />
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <CtaButton href={href} location={location} className="w-full sm:w-auto">
            {label}
          </CtaButton>
          {href.startsWith("http") ? (
            <CtaButton href="/contacto#formulario" location={`${location}-form`} variant="outline-dark" icon="none" className="w-full sm:w-auto">
              Prefiero el formulario
            </CtaButton>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
