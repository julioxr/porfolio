import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ecebe5",
          color: "#1c1917",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 8,
              background: "#1c1917",
              color: "#f4f3ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            JR
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 600, lineHeight: 1.06, letterSpacing: -2, maxWidth: 1000 }}>
          <div>Automatizá el trabajo repetitivo de tu pyme.</div>
          <div style={{ color: "#8a837c" }}>Con IA, sin ser técnico.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#645d57" }}>
          <div>{`${site.descriptor} para pymes`}</div>
          <div style={{ color: "#1f45d6" }}>julioroja.dev.ar</div>
        </div>
      </div>
    ),
    size,
  );
}
