import React from "react";

const items = [
  { emoji: "🩺", label: "Board Certified MD Consult", sub: "U.S.-licensed physician, just for you", accent: "#4EB7C0" },
  { emoji: "🚚", label: "Free Expedited Shipping", sub: "Delivered to your door, no extra cost", accent: "#4EB7C0" },
  { emoji: "💬", label: "Unlimited Care Team Messaging", sub: "Real people, always in your corner", accent: "#F0327A" },
  { emoji: "⏱️", label: "24-Hour Response Guarantee", sub: "We're here when you need us most", accent: "#F0327A" },
];

export default function CheckoutIncludesC() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #F5F7FF 0%, #fff 50%, #FEF0F5 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 20 }}>

      <div style={{ background: "white", borderRadius: 24, boxShadow: "0 8px 32px rgba(0,0,0,0.09)", border: "1px solid #e2e8f0", width: "100%", maxWidth: 360, overflow: "hidden" }}>
        <div style={{ height: 5, background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Header */}
        <div style={{ padding: "14px 16px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F0327A", background: "#F0327A18", padding: "3px 10px", borderRadius: 999, marginBottom: 6 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#F0327A", display: "inline-block" }} />
              Pre-authorization only
            </span>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: 700, color: "#38404B", lineHeight: 1.3, margin: 0 }}>SculptRx Semaglutide Program</p>
            <p style={{ fontSize: 11, color: "#94a3b8", margin: "2px 0 0" }}>3-Month Supply</p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p style={{ fontSize: 22, fontWeight: 800, color: "#38404B", margin: 0, lineHeight: 1 }}>$209</p>
            <p style={{ fontSize: 10, color: "#94a3b8", margin: "2px 0 0" }}>/month</p>
          </div>
        </div>

        {/* $0 due row */}
        <div style={{ margin: "12px 16px", background: "white", border: "1px solid #F0327A33", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>🎉</span>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", margin: 0, marginBottom: 2 }}>Due Now</p>
              <p style={{ fontSize: 26, fontWeight: 800, fontFamily: "Georgia, serif", margin: 0, lineHeight: 1, background: "linear-gradient(90deg,#F0327A,#4EB7C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$0</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#38404B", margin: 0, marginBottom: 2 }}>$627 total</p>
            <p style={{ fontSize: 10, color: "#94a3b8", margin: 0 }}>billed after approval</p>
          </div>
        </div>

        {/* What's included — gradient accent rows */}
        <div style={{ padding: "0 16px 16px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 8, marginTop: 4 }}>What's included</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {items.map((item) => (
              <div key={item.label} style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 12,
                background: `linear-gradient(to right, ${item.accent}10, ${item.accent}04)`,
                borderLeft: `3px solid ${item.accent}`,
              }}>
                <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1 }}>{item.emoji}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#38404B", margin: 0, lineHeight: 1.3 }}>{item.label}</p>
                  <p style={{ fontSize: 10.5, color: "#94a3b8", margin: "2px 0 0", lineHeight: 1.3 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: "8px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#38404B" }}>C — Gradient rows</div>
        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>Colored left border · emoji icon · teal/pink split</div>
      </div>
    </div>
  );
}
