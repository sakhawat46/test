import { useEffect } from "react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";
const INK = "#46384b";
const VIAL = "/desktop-hero-vial-nobg.png";

function Stars() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", gap: 2 }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={PINK}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span style={{ fontSize: 13, color: "#8b8590", fontWeight: 500 }}>
        <strong style={{ color: INK }}>4.9</strong> · Trusted by{" "}
        <strong style={{ color: INK }}>2,400+</strong> women on our founding list
      </span>
    </div>
  );
}

function Note() {
  return (
    <span
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "1.3rem",
        fontWeight: 600,
        color: PINK,
        transform: "rotate(-3deg)",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.9rem", lineHeight: 1, transform: "rotate(15deg)", display: "inline-block" }}>*</span>
      Takes 2 min. Really.
    </span>
  );
}

export function DesktopHero3() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "linear-gradient(to bottom, #ffffff 0%, rgba(240,228,235,0.35) 100%)", minHeight: 760 }}>
      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 80, borderBottom: "1px solid rgba(0,0,0,0.06)", backdropFilter: "blur(8px)" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 600, color: INK, lineHeight: 1 }}>
            Sculpt<span style={{ color: TEAL }}>Rx</span>
          </span>
          <span style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9b96a0", marginTop: 3 }}>Women's Health &amp; Weight Loss</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {["How It Works", "Treatments", "Why SculptRx", "Membership", "About Us", "Contact"].map((t) => (
            <span key={t} style={{ fontSize: 14, fontWeight: 500, color: INK }}>{t}</span>
          ))}
          <button style={{ backgroundColor: TEAL, color: "#fff", border: "none", borderRadius: 999, padding: "10px 22px", fontSize: 14, fontWeight: 600 }}>Start Your Assessment</button>
        </div>
      </nav>

      {/* HERO — compact: narrower container, vial scaled to match the text block, tight columns */}
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 40px", display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
        {/* TEXT */}
        <div style={{ maxWidth: 460, flexShrink: 0 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, lineHeight: 1.06, color: INK, margin: "0 0 20px" }}>
            Lose the weight.<br />
            <span style={{ color: PINK }}>Feel like yourself again.</span>
          </h1>
          <p style={{ fontSize: 19, color: "#6b6470", lineHeight: 1.6, fontWeight: 300, margin: "0 0 28px", maxWidth: 440 }}>
            Get a personalized weight loss plan that fits your body, your goals, and your life.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <button style={{ backgroundColor: TEAL, color: "#fff", border: "none", borderRadius: 999, padding: "15px 32px", fontSize: 16, fontWeight: 600, boxShadow: "0 8px 24px rgba(78,183,192,0.35)" }}>Start Today →</button>
            <Note />
          </div>
          <Stars />
        </div>

        {/* IMAGE — sized to sit snug beside the text, vertically centered, grounded by glow */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 260, height: 260, borderRadius: "50%", background: "rgba(78,183,192,0.18)", filter: "blur(55px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", width: 160, height: 90, borderRadius: "50%", background: "rgba(240,50,122,0.16)", filter: "blur(40px)", pointerEvents: "none" }} />
          <img
            src={VIAL}
            alt="SculptRx GLP-1 vial"
            style={{
              position: "relative",
              zIndex: 1,
              width: 300,
              objectFit: "contain",
              filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.13))",
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          />
        </div>
      </section>
    </div>
  );
}
