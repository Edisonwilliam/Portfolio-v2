import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Edison William — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Top label */}
        <div
          style={{
            color: "#52525b",
            fontSize: 18,
            marginBottom: 32,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          edisonportfoli.netlify.app
        </div>

        {/* Name */}
        <div
          style={{
            color: "#fafafa",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 24,
            letterSpacing: "-0.03em",
          }}
        >
          Edison William
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Full-Stack Developer · React · Next.js · Node.js · MongoDB
        </div>

        {/* Bottom divider line */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            height: 1,
            background: "#27272a",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

