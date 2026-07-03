import { Heart, ArrowRight, Lock, TrendingDown, Pill, Stethoscope, MessageCircle, ShieldCheck, DollarSign } from "lucide-react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";

export function PriceSavings() {
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

      {/* HERO — savings hook */}
      <div style={{ background: `linear-gradient(145deg, #1a1a1a 0%, #2d1a24 100%)`, padding: "36px 24px 32px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: `${PINK}22`, border: `1px solid ${PINK}55`, borderRadius: 999, padding: "4px 14px", marginBottom: 18, fontSize: 11, fontWeight: 700, color: PINK, textTransform: "uppercase", letterSpacing: "0.5px" }}>
          <TrendingDown size={11} color={PINK} /> Switch & Save
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, lineHeight: 1.15, color: "#fff", marginBottom: 10, letterSpacing: "-0.5px" }}>
          Most women on GLP-1s are<br /><span style={{ color: PINK }}>overpaying by $207/mo</span>
        </h1>
        <p style={{ fontSize: 14, color: "#bbb", lineHeight: 1.6, marginBottom: 26 }}>
          Hidden fees add up fast. SculptRx bundles everything into one honest price.
        </p>

        {/* SAVINGS COUNTER */}
        <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 18, padding: "22px 20px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ fontSize: 11, color: "#aaa", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>Your potential savings</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 10, color: "#888", marginBottom: 3 }}>Others</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 900, color: "#fff" }}>$406<span style={{ fontSize: 12, fontWeight: 400 }}>/mo</span></p>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: 999, backgroundColor: "#333", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 10, fontWeight: 900 }}>VS</span>
            </div>
            <div>
              <p style={{ fontSize: 10, color: TEAL, marginBottom: 3 }}>SculptRx</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 900, color: TEAL }}>$199<span style={{ fontSize: 12, fontWeight: 400 }}>/mo</span></p>
            </div>
          </div>
          <div style={{ marginTop: 14, padding: "12px", backgroundColor: `${PINK}22`, borderRadius: 10, border: `1px solid ${PINK}44` }}>
            <p style={{ fontSize: 11, color: "#ddd", marginBottom: 2 }}>Monthly savings</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 900, color: PINK, margin: 0 }}>$207<span style={{ fontSize: 14, fontWeight: 400, color: "#ccc" }}>/mo</span></p>
            <p style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>= <strong style={{ color: "#fff" }}>$1,242 saved</strong> over 6 months</p>
          </div>
        </div>
      </div>

      {/* WHAT YOU STILL GET */}
      <div style={{ padding: "28px 20px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, textAlign: "center", color: "#1a1a1a", marginBottom: 6 }}>
          Everything included at <span style={{ color: PINK }}>$199/mo</span>
        </h2>
        <p style={{ textAlign: "center", fontSize: 13, color: "#999", marginBottom: 18 }}>Nothing removed. Nothing hidden. Just less.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { icon: <Pill size={20} color={PINK} />, label: "Medication", sub: "Included" },
            { icon: <Stethoscope size={20} color={TEAL} />, label: "Physician Care", sub: "Included" },
            { icon: <MessageCircle size={20} color={PINK} />, label: "Support", sub: "Included" },
            { icon: <ShieldCheck size={20} color={TEAL} />, label: "Follow-Ups", sub: "Included" },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#fafafa", borderRadius: 14, padding: "16px 14px", textAlign: "center", border: "1px solid #eee" }}>
              <div style={{ marginBottom: 8 }}>{item.icon}</div>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", marginBottom: 2 }}>{item.label}</p>
              <p style={{ fontSize: 11, color: TEAL, fontWeight: 600 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SAVINGS BREAKDOWN */}
      <div style={{ margin: "0 16px 24px", backgroundColor: "#f9f9f9", borderRadius: 16, overflow: "hidden", border: "1px solid #eee" }}>
        <div style={{ padding: "12px 16px", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", gap: 8 }}>
          <DollarSign size={14} color="#666" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#555", textTransform: "uppercase", letterSpacing: "0.4px" }}>Hidden fees you avoid with SculptRx</span>
        </div>
        <div style={{ padding: "12px 16px" }}>
          {[
            ["Telehealth consultation fee", "$99"],
            ["Platform access fee", "$49"],
            ["Prescription processing", "$25"],
            ["Monthly monitoring fee", "$19"],
            ["Admin & handling fee", "$15"],
          ].map(([label, amount], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < 4 ? "1px dashed #e8e8e8" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "#ffebf0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 8, color: PINK, fontWeight: 900 }}>✕</span>
                </div>
                <span style={{ fontSize: 12, color: "#777", textDecoration: "line-through" }}>{label}</span>
              </div>
              <span style={{ fontSize: 12, color: PINK, fontWeight: 600, textDecoration: "line-through" }}>{amount}</span>
            </div>
          ))}
          <div style={{ paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: TEAL }}>Total you save/mo</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 900, color: TEAL }}>$207</span>
          </div>
        </div>
      </div>

      {/* WHAT CAN YOU DO WITH $207 */}
      <div style={{ padding: "4px 20px 28px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, textAlign: "center", color: "#1a1a1a", marginBottom: 14, lineHeight: 1.3 }}>
          What would <em style={{ color: PINK }}>you</em> do with<br />an extra <span style={{ color: TEAL }}>$207/month</span>?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "💆 Monthly massages — paid in full",
            "👟 New workout gear every month",
            "🍽️ Healthy meal kit subscriptions",
            "✈️ Weekend trip every other month",
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#555", border: "1px solid #eee" }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "28px 20px 32px", textAlign: "center", background: `linear-gradient(160deg, ${PINK} 0%, #c41f67 100%)` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8, lineHeight: 1.25 }}>
          Start saving $207/mo<br />on your GLP-1 program
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginBottom: 22, lineHeight: 1.6 }}>
          2-minute quiz. No credit card. See your options instantly.
        </p>
        <button style={{ width: "100%", backgroundColor: "#fff", color: PINK, border: "none", borderRadius: 14, padding: "16px", fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
          Take the Free Quiz →
        </button>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <Lock size={10} /> 256-bit SSL · No obligation
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
