import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/app/lib/profile";

export const alt = "Sunil Sandhu — Founder & Entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "app", "fonts");
const geistRegular = readFileSync(join(fontsDir, "Geist-Regular.ttf"));
const geistSemiBold = readFileSync(join(fontsDir, "Geist-SemiBold.ttf"));
const geistBold = readFileSync(join(fontsDir, "Geist-Bold.ttf"));
const geistExtraBold = readFileSync(join(fontsDir, "Geist-ExtraBold.ttf"));

const avatar = readFileSync(join(process.cwd(), "public", "icon.png"));
const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

const ventures = [
  "In Plain English",
  "Obsurfable",
  "Differ",
  "Circuit",
  "Stackademic",
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "72px",
          fontFamily: "Geist",
          overflow: "hidden",
        }}
      >
        {/* Ambient orange glow */}
        <div
          style={{
            position: "absolute",
            top: "-320px",
            right: "-220px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(241,94,35,0.55) 0%, rgba(241,94,35,0.12) 45%, rgba(241,94,35,0) 70%)",
          }}
        />
        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "8px",
            background:
              "linear-gradient(90deg, #f15e23 0%, rgba(241,94,35,0.15) 100%)",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 600,
              padding: "10px 22px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "999px",
            }}
          >
            {profile.jobTitle}
          </div>
        </div>

        {/* Middle: avatar + name + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <img
            src={avatarSrc}
            width={168}
            height={168}
            style={{
              borderRadius: "50%",
              border: "3px solid rgba(241,94,35,0.6)",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 38,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.3,
                fontWeight: 400,
              }}
            >
              {profile.tagline}
            </div>
          </div>
        </div>

        {/* Bottom: venture pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          {ventures.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
                padding: "12px 24px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistSemiBold, weight: 600, style: "normal" },
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "Geist", data: geistExtraBold, weight: 800, style: "normal" },
      ],
    }
  );
}
