import React from "react";

const items = [
  { label: "Board Certified MD Consult", sub: "U.S.-licensed physician reviews your profile", color: "#4EB7C0" },
  { label: "Free Expedited Shipping", sub: "Delivered to your door at no extra cost", color: "#4EB7C0" },
  { label: "Care Team · Unlimited Messaging", sub: "Real people, not bots — always in your corner", color: "#4EB7C0" },
  { label: "24-Hour Response Guarantee", sub: "We're here when you need us most", color: "#4EB7C0" },
];

export default function CheckoutIncludesB() {
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

        {/* What's included — checklist */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{ background: "linear-gradient(135deg, #4EB7C008 0%, #4EB7C014 100%)", border: "1px solid #4EB7C022", borderRadius: 16, padding: "14px 14px 8px" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4EB7C0", marginBottom: 12, marginTop: 0 }}>Everything included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {items.map((item, i) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10, paddingBottom: i < items.length - 1 ? 12 : 4, borderBottom: i < items.length - 1 ? "1px solid #4EB7C018" : "none", marginBottom: i < items.length - 1 ? 12 : 0 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#4EB7C0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ color: "white", fontSize: 11, fontWeight: 800, lineHeight: 1 }}>✓</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 12.5, fontWeight: 700, color: "#38404B", margin: 0, lineHeight: 1.3 }}>{item.label}</p>
                    <p style={{ fontSize: 10.5, color: "#94a3b8", margin: "2px 0 0", lineHeight: 1.4 }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: "8px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#38404B" }}>B — Checklist</div>
        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>Teal check circles · label + sub-copy · tinted panel</div>
      </div>
    </div>
  );
}
