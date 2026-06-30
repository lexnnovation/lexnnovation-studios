import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Reciva AI — WhatsApp AI Receptionist by Lexnnovation Studios";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #0f172a 0%, #0a1f14 100%)",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Green glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 68%)",
            display: "flex",
          }}
        />

        {/* Logo mark + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "44px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: "900",
              color: "white",
            }}
          >
            R
          </div>
          <span
            style={{
              color: "white",
              fontSize: "34px",
              fontWeight: "800",
              letterSpacing: "-0.5px",
            }}
          >
            Reciva AI
          </span>
        </div>

        {/* Headline — two lines via flex column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: "76px",
              fontWeight: "900",
              color: "white",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Never miss a
          </span>
          <span
            style={{
              fontSize: "76px",
              fontWeight: "900",
              color: "#34d399",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            customer again.
          </span>
        </div>

        {/* Sub-line */}
        <span
          style={{
            fontSize: "27px",
            color: "#94a3b8",
            fontWeight: "400",
          }}
        >
          WhatsApp AI Receptionist for your business
        </span>

        {/* Domain pill — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.11)",
            borderRadius: "100px",
            padding: "10px 22px",
          }}
        >
          <span style={{ color: "#64748b", fontSize: "20px" }}>
            lexnnovation.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
