import { Heart, ArrowRight, Lock, CheckCircle, Pill, Stethoscope, MessageCircle, ShieldCheck } from "lucide-react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";

export function PriceTransparent() {
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

      {/* HERO — lead with the price */}
      <div style={{ padding: "36px 24px 32px", textAlign: "center", backgroundColor: "#fff" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: `${PINK}12`, borderRadius: 999, padding: "4px 14px", marginBottom: 18, fontSize: 11, fontWeight: 700, color: PINK, textTransform: "uppercase", letterSpacing: "0.5px" }}>
          <ShieldCheck size={11} color={PINK} /> One Price. No Surprises.
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, lineHeight: 1.15, color: "#1a1a1a", marginBottom: 10, letterSpacing: "-0.5px" }}>
          GLP-1 care that's<br /><span style={{ color: TEAL }}>honest</span> about what it costs
        </h1>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 28 }}>
          No hidden fees. No platform charges. No surprises on your bill — ever.
        </p>

        {/* BIG PRICE CARD */}
        <div style={{ backgroundColor: "#e8f8f9", borderRadius: 20, padding: "28px 24px", border: `2px solid ${TEAL}`, marginBottom: 16, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, backgroundColor: PINK, borderRadius: "0 0 0 12px", padding: "4px 12px" }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>✦ SculptRx</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, color: PINK, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 4 }}>One Price. Everything Included.</p>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2, marginBottom: 4 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 900, color: PINK, lineHeight: 1 }}>$199</span>
            <span style={{ fontSize: 18, color: "#666", fontWeight: 500 }}>/mo</span>
          </div>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 20 }}>for 6 months</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {[
              { icon: <Pill size={14} color={TEAL} />, label: "Medication included" },
              { icon: <Stethoscope size={14} color={TEAL} />, label: "Physician care included" },
              { icon: <MessageCircle size={14} color={TEAL} />, label: "Ongoing support included" },
              { icon: <ShieldCheck size={14} color={TEAL} />, label: "Follow-ups included" },
              { icon: <CheckCircle size={14} color={TEAL} />, label: "Transparent pricing, always" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: "rgba(255,255,255,0.65)", borderRadius: 8, padding: "8px 12px" }}>
                {item.icon}
                <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>{item.label}</span>
                <CheckCircle size={14} color={TEAL} fill={TEAL} style={{ marginLeft: "auto" }} />
              </div>
            ))}
          </div>

          <button style={{ width: "100%", backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 12, padding: "14px", fontSize: 15, fontWeight: 700, boxShadow: `0 4px 16px ${PINK}55` }}>
            See If I Qualify →
          </button>
        </div>

        <p style={{ fontSize: 11, color: "#aaa", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <Lock size={10} /> No payment required to check eligibility
        </p>
      </div>

      {/* CONTRAST SECTION */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "28px 20px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 18, lineHeight: 1.3 }}>
          While others charge <span style={{ color: PINK }}>$406/mo</span>,<br />we charge <span style={{ color: TEAL }}>$199/mo</span>. Period.
        </h2>

        {[
          { them: "Telehealth fee: $99", us: "Physician care: ✓ included" },
          { them: "Platform fee: $49", us: "Support: ✓ included" },
          { them: "Processing fee: $25", us: "Follow-ups: ✓ included" },
          { them: "Monitoring fee: $19", us: "Transparent pricing: ✓" },
        ].map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 10px" }}>
              <span style={{ fontSize: 11, color: "#aaa" }}>{row.them}</span>
            </div>
            <div style={{ backgroundColor: `${TEAL}22`, borderRadius: 8, padding: "8px 10px", border: `1px solid ${TEAL}44` }}>
              <span style={{ fontSize: 11, color: TEAL, fontWeight: 500 }}>{row.us}</span>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 14, padding: "14px 16px", backgroundColor: `${PINK}20`, borderRadius: 12, border: `1px solid ${PINK}44`, textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: 13, lineHeight: 1.5, marginBottom: 0 }}>
            You save <strong style={{ color: PINK }}>$207/mo</strong> — that's <strong style={{ color: PINK }}>$1,242 over 6 months</strong>
          </p>
        </div>
      </div>

      {/* TRUST */}
      <div style={{ padding: "28px 20px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, textAlign: "center", color: "#1a1a1a", marginBottom: 20 }}>
          Why women choose SculptRx
        </h2>
        {[
          { title: "Real physician oversight", desc: "Every program is designed and monitored by a licensed physician." },
          { title: "Medication shipped to you", desc: "Semaglutide or tirzepatide delivered directly to your door each month." },
          { title: "No cancellation penalties", desc: "Cancel anytime. No contracts, no exit fees." },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
            <div style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: PINK, marginTop: 5, flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", marginBottom: 2 }}>{item.title}</p>
              <p style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* NO HIDDEN FEES STRIP */}
      <div style={{ background: `linear-gradient(160deg, ${PINK} 0%, #c41f67 100%)`, padding: "24px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {["No membership fees", "No surprise charges", "No price hikes", "Just honest care"].map((item, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 7 }}>
              <Heart size={11} fill="#fff" color="#fff" />
              <span style={{ fontSize: 11, color: "#fff", fontWeight: 500, lineHeight: 1.3 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{ padding: "32px 20px", textAlign: "center", background: "linear-gradient(160deg, #f0fafb 0%, #fff0f5 100%)" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 23, fontWeight: 800, color: "#1a1a1a", marginBottom: 8, lineHeight: 1.2 }}>
          Ready for <span style={{ color: TEAL }}>honest</span>,<br />transparent care?
        </h2>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 22, lineHeight: 1.6 }}>Take a free 2-minute quiz to see if you qualify.</p>
        <button style={{ width: "100%", backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 16, fontWeight: 700, boxShadow: `0 4px 20px ${PINK}55` }}>
          Start My Free Quiz →
        </button>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <Lock size={10} /> 256-bit SSL · No credit card required
        </p>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "18px 20px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>SculptRx<sup style={{ fontSize: 8, verticalAlign: "super" }}>™</sup></p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 6 }}>
          <Heart size={10} fill={PINK} color={PINK} />
          <span style={{ fontSize: 11, color: "#aaa" }}>Physician-prescribed GLP-1 care, built for women.</span>
          <Heart size={10} fill={PINK} color={PINK} />
        </div>
        <p style={{ fontSize: 10, color: "#555", margin: 0 }}>© 2025 SculptRx · Not medical advice · Results vary.</p>
      </div>
    </div>
  );
}
