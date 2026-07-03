import { Heart, ArrowRight, Lock, CheckCircle, ShieldCheck, Pill, Stethoscope, MessageCircle } from "lucide-react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";

export function PriceReceipt() {
  const hiddenFees = [
    { label: "Telehealth consultation fee", amount: "$99" },
    { label: "Platform access fee", amount: "$49" },
    { label: "Prescription processing fee", amount: "$25" },
    { label: "Monthly monitoring fee", amount: "$19" },
    { label: "Admin & handling fee", amount: "$15" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#fff", maxWidth: 390, margin: "0 auto" }}>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#1a1a1a" }}>
          SculptRx<sup style={{ fontSize: 9, verticalAlign: "super" }}>™</sup>
        </span>
        <button style={{ backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 999, padding: "7px 14px", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
          Free Quiz <ArrowRight size={12} />
        </button>
      </nav>

      {/* HERO */}
      <div style={{ padding: "32px 24px 28px", textAlign: "center", background: "linear-gradient(160deg, #fff8fa 0%, #f0fafb 100%)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: `1.5px solid ${PINK}`, borderRadius: 999, padding: "4px 14px", marginBottom: 16, fontSize: 11, fontWeight: 700, color: PINK, textTransform: "uppercase", letterSpacing: "0.5px" }}>
          <Heart size={11} fill={PINK} color={PINK} /> Price Transparency
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, lineHeight: 1.15, color: "#1a1a1a", marginBottom: 8, letterSpacing: "-0.4px" }}>
          What's <em style={{ color: PINK, fontStyle: "italic" }}>really</em> included in your GLP-1 price?
        </h1>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 0 }}>
          Most GLP-1 programs hide fees in the fine print. We don't.
        </p>
      </div>

      {/* RECEIPT COMPARISON */}
      <div style={{ padding: "24px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "start" }}>

          {/* OTHER PROVIDERS — RECEIPT */}
          <div style={{ backgroundColor: "#fafafa", borderRadius: 12, overflow: "hidden", border: "1px solid #e8e8e8" }}>
            <div style={{ backgroundColor: "#1a1a1a", padding: "8px 12px", textAlign: "center" }}>
              <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px" }}>Other Providers</span>
            </div>
            <div style={{ padding: "12px 12px 8px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "#999", textAlign: "center", marginBottom: 8, borderBottom: "1px dashed #ddd", paddingBottom: 8 }}>Monthly Bill</p>
              <div style={{ marginBottom: 4, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, color: "#444" }}>Medication</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#444" }}>$199</span>
              </div>
              {hiddenFees.map((f, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 28, height: 7, backgroundColor: "#ccc", borderRadius: 2 }} />
                    <span style={{ fontSize: 10, color: "#999" }}>Fee</span>
                  </div>
                  <span style={{ fontSize: 10, color: "#888" }}>{f.amount}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px dashed #ddd", marginTop: 8, paddingTop: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#1a1a1a" }}>TOTAL:</span>
                </div>
                <div style={{ textAlign: "center", marginTop: 4 }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#1a1a1a" }}>$406</span>
                  <span style={{ fontSize: 11, color: "#666" }}>/mo</span>
                  <div style={{ width: "70%", height: 2, backgroundColor: PINK, margin: "3px auto 0", borderRadius: 1 }} />
                </div>
              </div>
            </div>
          </div>

          {/* VS bubble + SCULPTRX RECEIPT */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 32, height: 32, borderRadius: 999, backgroundColor: "#1a1a1a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900 }}>VS</div>
            </div>
            <div style={{ backgroundColor: "#e8f8f9", borderRadius: 12, overflow: "hidden", border: `1.5px solid ${TEAL}` }}>
              <div style={{ backgroundColor: PINK, padding: "8px 12px", textAlign: "center" }}>
                <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px" }}>SculptRx</span>
              </div>
              <div style={{ padding: "12px 12px 8px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: PINK, textAlign: "center", marginBottom: 8, borderBottom: `1px dashed ${TEAL}66`, paddingBottom: 8 }}>Monthly Bill</p>
                {["Medication", "Physician Care", "Support", "Follow-Ups", "Transparent Pricing"].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: "#333" }}>{item}</span>
                    <CheckCircle size={14} color={TEAL} fill={TEAL} />
                  </div>
                ))}
                <div style={{ borderTop: `1px dashed ${TEAL}66`, marginTop: 8, paddingTop: 8, textAlign: "center" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: PINK, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>One Price.</p>
                  <div>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: PINK }}>$199</span>
                    <span style={{ fontSize: 10, color: "#666" }}>/mo</span>
                  </div>
                  <p style={{ fontSize: 10, color: "#555", marginTop: 2 }}>for 6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SAVINGS CALLOUT */}
        <div style={{ marginTop: 14, backgroundColor: "#fff8fa", borderRadius: 12, padding: "14px 16px", border: `1.5px solid ${PINK}33`, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>You could be saving</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: PINK, margin: 0 }}>$207<span style={{ fontSize: 14 }}>/mo</span></p>
          <p style={{ fontSize: 12, color: "#555", marginTop: 2 }}>That's <strong>$1,242 over 6 months</strong></p>
        </div>
      </div>

      {/* NO FEES STRIP */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "18px 16px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            "No membership fees",
            "No surprise charges",
            "No price hikes",
            "Just honest care for women",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 18, height: 18, borderRadius: 999, border: `1.5px solid ${PINK}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {i === 3
                  ? <Heart size={10} fill={PINK} color={PINK} />
                  : <span style={{ fontSize: 9, color: PINK, fontWeight: 900 }}>✕</span>
                }
              </div>
              <span style={{ fontSize: 11, color: "#555", lineHeight: 1.3 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT'S INCLUDED */}
      <div style={{ padding: "28px 20px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, textAlign: "center", color: "#1a1a1a", marginBottom: 16 }}>
          Everything in your <span style={{ color: PINK }}>$199/mo</span>
        </h2>
        {[
          { icon: <Pill size={18} color={TEAL} />, title: "Medication", desc: "Semaglutide or tirzepatide shipped to your door" },
          { icon: <Stethoscope size={18} color={TEAL} />, title: "Physician Care", desc: "Board-certified physician reviews & manages your program" },
          { icon: <MessageCircle size={18} color={TEAL} />, title: "Ongoing Support", desc: "Care team available whenever you need guidance" },
          { icon: <ShieldCheck size={18} color={TEAL} />, title: "Transparent Pricing", desc: "One price, no surprises, ever" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: `${TEAL}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", marginBottom: 2 }}>{item.title}</p>
              <p style={{ fontSize: 12, color: "#777", lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: "28px 20px 32px", textAlign: "center", background: "linear-gradient(160deg, #fff0f5 0%, #e8f8f9 100%)" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#1a1a1a", marginBottom: 8, lineHeight: 1.25 }}>
          Stop overpaying for <span style={{ color: PINK }}>hidden fees</span>
        </h2>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 20, lineHeight: 1.6 }}>
          See if you qualify for SculptRx. Takes 2 minutes.
        </p>
        <button style={{ width: "100%", backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 16, fontWeight: 700, boxShadow: `0 4px 20px ${PINK}55` }}>
          Take the Free Quiz →
        </button>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <Lock size={10} /> No credit card · No obligation
        </p>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "18px 20px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>SculptRx<sup style={{ fontSize: 8, verticalAlign: "super" }}>™</sup></p>
        <p style={{ fontSize: 11, color: "#555", margin: 0 }}>Physician-prescribed GLP-1 care, built for women.</p>
      </div>
    </div>
  );
}
