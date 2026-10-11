import { site, whatsappLink } from "@/data/site";
import { CtaButton } from "./WhatsAppButton";

export function FloatingWhatsApp() {
  if (!site.whatsapp) return null;

  return (
    <div className="fixed right-4 bottom-4 z-40 print:hidden">
      <CtaButton
        href={whatsappLink("Hola Julio, vi tu sitio y quiero consultarte algo.")}
        location="floating"
        className="shadow-lg"
      >
        Escribime por WhatsApp
      </CtaButton>
    </div>
  );
}
