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
          justifyContent: "center",
          padding: 80,
          background: "#fbf7f0",
          color: "#1b2a24",
        }}
      >
        <div style={{ fontSize: 30, color: "#2f5d50", fontWeight: 700 }}>{site.descriptor}</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Ahorrá horas de trabajo repetitivo con IA
        </div>
        <div style={{ fontSize: 36, marginTop: 40, color: "#b84a22", fontWeight: 700 }}>
          {`${site.name} · julioroja.dev.ar`}
        </div>
      </div>
    ),
    size,
  );
}
