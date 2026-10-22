import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1917",
          color: "#f4f3ee",
          fontSize: 36,
          fontWeight: 600,
          borderRadius: 14,
        }}
      >
        JR
      </div>
    ),
    size,
  );
}
