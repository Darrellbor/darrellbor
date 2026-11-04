import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Darrel Idiagbor, senior software engineer and tech lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#0A0D1A", color: "#ECEEF8" }}>
        <div style={{ fontSize: 28, letterSpacing: 3, color: "#979DBD", textTransform: "uppercase" }}>Senior software engineer · Tech lead</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 140, fontWeight: 900, lineHeight: 0.9, letterSpacing: -4 }}>
          <span>Darrel</span>
          <span>Idiagbor<span style={{ color: "#8B98FF" }}>.</span></span>
        </div>
        <div style={{ fontSize: 36, color: "#8B98FF" }}>From the design system to the database.</div>
      </div>
    ),
    size,
  );
}
