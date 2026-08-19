import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background:
            "radial-gradient(circle at 18% 20%, #23384a 0%, #0a0f14 55%), linear-gradient(140deg, #0a0f14 0%, #0f1720 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "linear-gradient(135deg, #f0b25f, #3f8f8a)",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 60,
            lineHeight: 1.15,
            color: "#f6f8f8",
            maxWidth: 900,
            fontWeight: 600,
          }}
        >
          Przygodowa gra przeglądarkowa: wiatr, przypływy i mapa rysowana własnoręcznie
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#b9c7ce", marginTop: 32 }}>
          pojekamlis.online
        </div>
      </div>
    ),
    { ...size }
  );
}
