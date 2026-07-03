import React from "react";
import semaImg from "../../../assets/sema.png";
import tirzImg from "../../../assets/tirz.png";

const meds = [
  { name: "Semaglutide", color: "#4EB7C0", price: "$199", img: semaImg, tagline: "The original GLP-1" },
  { name: "Tirzepatide", color: "#F0327A", price: "$259", img: tirzImg, tagline: "Dual-action formula" },
];

function Card({ med }: { med: typeof meds[0] }) {
  return (
    <div style={{
      background: "white",
      borderRadius: 20,
      border: "2px solid #e2e8f0",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
    }}>
      {/* Image zone */}
      <div style={{
        position: "relative",
        height: 200,
        background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${med.color}22 0%, transparent 70%)`,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        <img
          src={med.img}
          alt={med.name}
          style={{ height: 260, width: "auto", marginBottom: -46, filter: `drop-shadow(0 12px 28px ${med.color}44)` }}
        />

        {/* A — Frosted glass pill badge */}
        <div style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.95)",
          borderRadius: 999,
          padding: "7px 14px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.14)",
          display: "flex",
          alignItems: "baseline",
          gap: 2,
          whiteSpace: "nowrap",
        }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: med.color, lineHeight: 1 }}>{med.price}</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", lineHeight: 1 }}>/mo</span>
        </div>
      </div>

      {/* Card body snippet */}
      <div style={{ padding: "10px 14px 12px" }}>
        <span style={{ display: "inline-block", fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: med.color, background: `${med.color}14`, borderRadius: 999, padding: "2px 8px", marginBottom: 4 }}>{med.tagline}</span>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#38404B" }}>{med.name}</div>
        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>Once-weekly injection · Doctor-prescribed</div>
      </div>
    </div>
  );
}

export default function MedBadgeA() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #F5F7FF 0%, #fff 50%, #FEF0F5 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 20 }}>
      {meds.map(m => <Card key={m.name} med={m} />)}
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: "8px 16px", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#38404B" }}>A — Frosted pill</div>
        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>Glass blur · price right of vial · mid-height</div>
      </div>
    </div>
  );
}
