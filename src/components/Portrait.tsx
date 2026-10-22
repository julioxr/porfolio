import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/data/site";

// Para mostrar la foto real alcanza con guardar public/julio.jpg (vertical, 4:5) y volver a hacer el build.
const PHOTO = "/julio.jpg";
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", PHOTO));

export function Portrait() {
  if (hasPhoto) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-surface">
        <Image
          src={PHOTO}
          alt={`${site.name}, ${site.descriptor.toLowerCase()}`}
          fill
          priority
          sizes="(min-width: 1024px) 380px, 90vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="dots-light relative hidden aspect-[4/5] place-items-center overflow-hidden rounded-md border border-line bg-surface lg:grid"
    >
      <span className="text-[6.5rem] font-semibold tracking-[-0.04em] text-quiet">JR</span>
      <span className="absolute bottom-4 left-5 font-mono text-[11px] text-muted">{site.name}</span>
    </div>
  );
}
