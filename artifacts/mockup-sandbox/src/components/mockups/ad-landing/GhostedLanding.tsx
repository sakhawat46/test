import { Heart, Stethoscope, MessageCircle, Shield, CheckCircle, XCircle, ArrowRight, Lock } from "lucide-react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";

export function GhostedLanding() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#fff", maxWidth: 390, margin: "0 auto", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #f0f0f0", backgroundColor: "#fff", position: "sticky", top: 0, zIndex: 10 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.3px" }}>
          SculptRx<sup style={{ fontSize: 10, verticalAlign: "super" }}>™</sup>
        </span>
        <button style={{
          backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 999,
          padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
        }}>
          Free Quiz <ArrowRight size={13} />
        </button>
      </nav>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(145deg, #fff0f5 0%, #e8f8f9 60%, #fde8f1 100%)",
        padding: "40px 24px 36px",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          backgroundColor: "#fff", border: `1.5px solid ${PINK}`,
          borderRadius: 999, padding: "5px 14px", marginBottom: 20,
          fontSize: 12, fontWeight: 600, color: PINK
        }}>
          <Heart size={12} fill={PINK} color={PINK} /> Designed for Women
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 33, fontWeight: 800, lineHeight: 1.15,
          color: "#1a1a1a", margin: "0 0 6px",
          letterSpacing: "-0.5px"
        }}>
          Done being <span style={{ color: PINK }}>ghosted</span> by your GLP-1 provider?
        </h1>

        <div style={{ width: 48, height: 3, backgroundColor: PINK, borderRadius: 2, margin: "14px auto" }} />

        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.6, marginBottom: 28 }}>
          SculptRx was built for women who deserve real support — not silence.
        </p>

        <button style={{
          backgroundColor: PINK, color: "#fff",
          border: "none", borderRadius: 14,
          padding: "16px 32px", fontSize: 16, fontWeight: 700,
          cursor: "pointer", width: "100%", letterSpacing: "0.2px",
          boxShadow: `0 4px 20px ${PINK}55`
        }}>
          Take the Free Quiz →
        </button>

        <p style={{ fontSize: 12, color: "#999", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <Lock size={11} /> No payment required · 2-minute quiz
        </p>
      </div>

      {/* EMPATHY STRIP */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "28px 24px", textAlign: "center" }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 19, fontWeight: 600, color: "#fff",
          lineHeight: 1.5, margin: 0
        }}>
          "I sent three messages.<br /><span style={{ color: PINK }}>Nobody ever wrote back.</span>"
        </p>
        <p style={{ fontSize: 14, color: "#aaa", marginTop: 12, lineHeight: 1.55, marginBottom: 0 }}>
          If this sounds familiar, you're not alone — and you deserve so much better.
        </p>
      </div>

      {/* COMPARISON */}
      <div style={{ padding: "36px 20px 28px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 23, fontWeight: 700, textAlign: "center",
          color: "#1a1a1a", marginBottom: 6, lineHeight: 1.25
        }}>
          What <span style={{ color: TEAL }}>actually</span> changes with us
        </h2>
        <p style={{ textAlign: "center", fontSize: 13, color: "#999", marginBottom: 20 }}>Other providers vs. SculptRx</p>

        {[
          { bad: "Weeks of silence after signup", good: "Reply within 24 hours, always" },
          { bad: "Copy-paste treatment plans", good: "Program tailored to your body" },
          { bad: "Disappears after prescribing", good: "Ongoing support every step of the way" },
          { bad: "Generic weight-loss advice", good: "GLP-1 care designed for women" },
        ].map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
            <div style={{
              backgroundColor: "#fff5f5", borderRadius: 12,
              padding: "12px 12px", display: "flex", alignItems: "flex-start", gap: 7
            }}>
              <XCircle size={15} color="#e0356a" style={{ marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#777", lineHeight: 1.4 }}>{row.bad}</span>
            </div>
            <div style={{
              backgroundColor: "#f0fafb", borderRadius: 12,
              padding: "12px 12px", display: "flex", alignItems: "flex-start", gap: 7,
              border: `1px solid ${TEAL}44`
            }}>
              <CheckCircle size={15} color={TEAL} style={{ marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#333", lineHeight: 1.4, fontWeight: 500 }}>{row.good}</span>
            </div>
          </div>
        ))}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 6 }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 11, color: "#bbb", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Others</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 11, color: TEAL, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>SculptRx</span>
          </div>
        </div>
      </div>

      {/* TRUST PILLARS */}
      <div style={{
        background: `linear-gradient(160deg, ${PINK} 0%, #c41f67 100%)`,
        padding: "36px 20px"
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22, fontWeight: 700, color: "#fff",
          textAlign: "center", marginBottom: 22, lineHeight: 1.25
        }}>
          We'd never ghost you.<br />Here's our promise.
        </h2>

        {[
          { icon: <Stethoscope size={22} color="#fff" />, title: "Real Medical Team", desc: "Board-certified physicians and nurse practitioners — not bots or auto-replies." },
          { icon: <MessageCircle size={22} color="#fff" />, title: "Replies Within 24 Hrs", desc: "Every message gets a real human response within one business day." },
          { icon: <Heart size={22} color="#fff" />, title: "Ongoing Support", desc: "Your care team stays with you through every milestone and adjustment." },
        ].map((p, i) => (
          <div key={i} style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: 16, padding: "16px 14px",
            display: "flex", gap: 14, marginBottom: 10,
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0
            }}>
              {p.icon}
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.title}</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 12.5, lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <Heart size={11} fill="rgba(255,255,255,0.7)" color="rgba(255,255,255,0.7)" />
          GLP-1 Care Designed for Women
          <Heart size={11} fill="rgba(255,255,255,0.7)" color="rgba(255,255,255,0.7)" />
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: "36px 20px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 22, fontWeight: 700, textAlign: "center",
          color: "#1a1a1a", marginBottom: 24
        }}>
          Getting started is simple
        </h2>

        {[
          { num: "1", title: "Take a free 2-min quiz", desc: "Tell us about your health history and goals. No commitment." },
          { num: "2", title: "Get your personalized plan", desc: "A physician reviews your profile and designs your program." },
          { num: "3", title: "Start with full support", desc: "Your care team is with you from day one — and every day after." },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 22, alignItems: "flex-start" }}>
            <div style={{
              width: 36, height: 36, borderRadius: 999,
              backgroundColor: TEAL, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 16, flexShrink: 0
            }}>
              {step.num}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: "#1a1a1a", marginBottom: 3 }}>{step.title}</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.5 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div style={{
        background: "linear-gradient(145deg, #f0fafb 0%, #fff0f5 100%)",
        padding: "40px 24px",
        textAlign: "center",
        borderTop: `3px solid ${TEAL}33`
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26, fontWeight: 800, color: "#1a1a1a",
          marginBottom: 10, lineHeight: 1.2
        }}>
          Ready to feel <span style={{ color: PINK }}>supported</span>?
        </h2>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 24, lineHeight: 1.6 }}>
          Join thousands of women who chose a provider that actually shows up.
        </p>
        <button style={{
          backgroundColor: PINK, color: "#fff",
          border: "none", borderRadius: 14,
          padding: "18px 32px", fontSize: 17, fontWeight: 700,
          cursor: "pointer", width: "100%",
          boxShadow: `0 6px 24px ${PINK}55`,
          letterSpacing: "0.2px"
        }}>
          Start Your Free Quiz →
        </button>
        <p style={{ fontSize: 12, color: "#aaa", marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <Shield size={11} /> 256-bit SSL · No credit card required · Cancel anytime
        </p>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#1a1a1a", padding: "20px 24px", textAlign: "center" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          SculptRx<sup style={{ fontSize: 9, verticalAlign: "super" }}>™</sup>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 10 }}>
          <Heart size={11} fill={PINK} color={PINK} />
          <span style={{ fontSize: 12, color: "#aaa" }}>GLP-1 Care Designed for Women</span>
          <Heart size={11} fill={PINK} color={PINK} />
        </div>
        <p style={{ fontSize: 11, color: "#555", lineHeight: 1.5, margin: 0 }}>
          © 2025 SculptRx · For educational purposes · Not medical advice · Results vary.
        </p>
      </div>

    </div>
  );
}
