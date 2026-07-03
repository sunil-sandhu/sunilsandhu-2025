import { ImageResponse } from "next/og";
import { profile } from "@/app/lib/profile";

export const alt = "Sunil Sandhu — Founder & Entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#f15e23",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          sunilsandhu.com
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.04em",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            {profile.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          In Plain English · Obsurfable · Differ · Circuit · Stackademic
        </div>
      </div>
    ),
    { ...size }
  );
}
