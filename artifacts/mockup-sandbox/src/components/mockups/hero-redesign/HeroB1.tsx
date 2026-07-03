const IMG = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/hero-woman-nobg.png";

export default function HeroB1() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", height: "100vh", position: "relative", overflow: "hidden", background: "#2e2435" }}>

      {/* Subtle teal radial glow behind woman */}
      <div style={{ position: "absolute", right: -40, bottom: -40, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, #4EB7C030 0%, transparent 70%)", zIndex: 1 }} />

      {/* Woman — larger, face more prominent */}
      <img
        src={IMG}
        alt="Woman holding SculptRx vial"
        style={{ position: "absolute", right: -30, bottom: 0, height: "95%", objectFit: "contain", objectPosition: "bottom right", zIndex: 2 }}
      />

      {/* Left-to-right gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #2e2435 42%, #2e243590 62%, transparent 82%)", zIndex: 3 }} />

      {/* Nav */}
      <div style={{ position: "relative", zIndex: 4, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "#4EB7C0", fontWeight: 600, textTransform: "uppercase" }}>Women's Health</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 24 }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#ffffff80", borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Copy */}
      <div style={{ position: "relative", zIndex: 4, padding: "36px 24px 0", maxWidth: "62%" }}>
        {/* Small pill label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #4EB7C050", borderRadius: 20, padding: "5px 12px", marginBottom: 20 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#4EB7C0" }} />
          <span style={{ fontSize: 9.5, fontWeight: 600, color: "#4EB7C0", letterSpacing: "0.08em", textTransform: "uppercase" }}>Physician-Led GLP-1</span>
        </div>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 34, fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 14px" }}>
          Lose the<br />weight.<br />
          <span style={{ color: "#F0327A", fontStyle: "italic" }}>Feel like<br />yourself again.</span>
        </h1>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: "0 0 28px" }}>
          A personalized plan built for your body, your goals, and your life.
        </p>

        {/* Teal CTA */}
        <button style={{ background: "#4EB7C0", color: "#fff", border: "none", borderRadius: 50, padding: "14px 30px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px #4EB7C060", display: "block", marginBottom: 8 }}>
          Start Today →
        </button>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: "rgba(255,255,255,0.4)", margin: "0 0 24px 4px" }}>✦ Takes 2 min. Really.</p>

        {/* Trust row */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", gap: 3 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} style={{ width: 11, height: 11, fill: "#F0327A" }} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.4)" }}>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>Physician-led</strong> · Board-certified MDs · Licensed US pharmacies
          </span>
        </div>
      </div>
    </div>
  );
}
