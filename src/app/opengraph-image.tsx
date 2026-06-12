import { ImageResponse } from "next/og";

export const alt = "정단아치과 DAN-A Dental Clinic — 아름다운 미소를 위하여.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FAFAF7",
          color: "#1A1A1A",
          padding: 80,
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "-0.01em",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              정단아치과
            </span>
            <span
              style={{
                fontStyle: "italic",
                fontSize: 16,
                letterSpacing: "0.2em",
                color: "#8A8A85",
                marginTop: 6,
              }}
            >
              DAN-A DENTAL CLINIC
            </span>
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8A8A85",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            N°01 — Cheongdam
          </div>
        </div>

        {/* Main copy */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              fontStyle: "italic",
              fontSize: 142,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            아름다운 미소를 위하여.
          </span>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            borderTop: "1px solid #E5E3DE",
            paddingTop: 24,
            fontFamily: "system-ui, sans-serif",
            fontSize: 18,
            color: "#3C3C3A",
            letterSpacing: "0.05em",
          }}
        >
          <span>Cheongdam · Mon–Sat 10:00—19:00</span>
          <span style={{ color: "#8A8A85" }}>
            선릉역 1번 출구 도보 4분
          </span>
        </div>

        {/* Decorative arc */}
        <svg
          width="1200"
          height="630"
          style={{ position: "absolute", left: 0, top: 0, opacity: 0.06 }}
        >
          <circle
            cx="600"
            cy="900"
            r="600"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
          />
          <circle
            cx="600"
            cy="900"
            r="500"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
          />
          <circle
            cx="600"
            cy="900"
            r="400"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
