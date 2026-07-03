const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";
const vialSrc = "/vial-hand-pink-clean.png";
const starPath = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

// Variant A — full line, all pink, one-shot Caveat
export default function PriceA() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "linear-gradient(to bottom, #ffffff 0%, #f5f0f8 100%)", width: 390, height: 720, position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
      {/* Nav */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 64, display: "flex", alignItems: "center", padding: "0 24px", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(0,0,0,0.06)", zIndex: 50 }}>
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 600, color: "#38404B", lineHeight: 1 }}>Sculpt<span style={{ color: teal }}>Rx</span></div>
          <div style={{ fontSize: 7.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginTop: 2 }}>Women's Health & Weight Loss</div>
        </div>
      </div>

      {/* Vial */}
      <div style={{ position: "absolute", right: -44, top: 148, width: "58%", zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(78,183,192,0.12)", filter: "blur(44px)" }} />
        <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%,-25%)", width: 96, height: 96, borderRadius: "50%", background: "rgba(240,50,122,0.12)", filter: "blur(28px)" }} />
        <img src={vialSrc} alt="GLP-1 vial" style={{ width: "100%", objectFit: "contain", position: "relative", zIndex: 1, WebkitMaskImage: "linear-gradient(to bottom, black 77%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 77%, transparent 100%)", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.10))" }} />
      </div>

      {/* Content */}
      <div style={{ position: "absolute", top: 80, left: 24, right: 24, zIndex: 10 }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 42, fontWeight: 700, lineHeight: 1.05, color: ink, marginBottom: 14 }}>
          Lose the weight.<br /><span style={{ color: pink }}>Feel like yourself again.</span>
        </div>
        <p style={{ fontSize: 15, color: "#888", lineHeight: 1.6, marginBottom: 24, maxWidth: "70%", fontWeight: 300 }}>
          Get a personalized weight loss plan that fits your body, your goals, and your life.
        </p>

        {/* CTA */}
        <button style={{ background: teal, color: "#fff", border: "none", borderRadius: 50, padding: "14px 28px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 18px rgba(78,183,192,0.30)", display: "block" }}>Take The Free Quiz</button>

        {/* ── VARIANT A: All pink Caveat, one continuous line ── */}
        <div style={{ marginTop: 14 }}>
          <span style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "1.22rem",
            fontWeight: 600,
            color: pink,
            display: "inline-flex",
            alignItems: "center",
            gap: 3,
            transform: "rotate(-3deg)",
            transformOrigin: "left center",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}>
            <span style={{ fontSize: "1.85rem", lineHeight: 1, transform: "rotate(15deg)", display: "inline-block", marginRight: 1 }}>*</span>
            Plans from $199/mo. Takes 2 mins.
          </span>
        </div>

        {/* Trust */}
        <div style={{ marginTop: 178, display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ display: "flex", gap: 3 }}>
            {[...Array(5)].map((_, i) => <svg key={i} width="13" height="13" viewBox="0 0 20 20" style={{ fill: pink }}><path d={starPath} /></svg>)}
          </div>
          {["Physician-led", "Board-certified MDs", "Licensed US pharmacies"].map(label => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: pink, flexShrink: 0 }} />
              <span style={{ fontSize: 11.5, fontWeight: 500, color: "#777" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
