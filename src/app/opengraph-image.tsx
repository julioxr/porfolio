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
          background: "#f2f5fa",
          color: "#121b3a",
        }}
      >
        <div style={{ fontSize: 30, color: "#2338c9", fontWeight: 700 }}>{site.descriptor}</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Ahorrá horas de trabajo repetitivo con IA
        </div>
        <div style={{ fontSize: 36, marginTop: 40, color: "#121b3a", background: "#ffe45c", padding: "8px 16px", alignSelf: "flex-start", fontWeight: 700 }}>
          {`${site.name} · julioroja.dev.ar`}
        </div>
      </div>
    ),
    size,
  );
}
