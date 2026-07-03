import { useEffect } from "react";
import { Heart, Stethoscope, MessageCircle, Shield, CheckCircle, XCircle, ArrowRight, Lock } from "lucide-react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";

export function GhostedHandwrittenC() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#fff", maxWidth: 390, margin: "0 auto" }}>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1a1a1a" }}>
          Sculpt<span style={{ color: TEAL }}>Rx</span>
        </span>
        <button style={{ backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 999, padding: "7px 14px", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
          Free Quiz <ArrowRight size={12} />
        </button>
      </nav>

      {/* HERO */}
      <div style={{ padding: "32px 24px 36px", textAlign: "center", background: "linear-gradient(145deg, #fff0f5 0%, #e8f8f9 60%, #fde8f1 100%)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#fff", border: `1px solid ${PINK}`, borderRadius: 999, padding: "4px 14px", fontSize: 12, fontWeight: 600, color: PINK, marginBottom: 16 }}>
          <Heart size={12} fill={PINK} color={PINK} /> Designed for Women
        </span>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 33, fontWeight: 800, lineHeight: 1.15, color: "#1a1a1a", marginBottom: 0, letterSpacing: "-0.4px" }}>
          Done being <span style={{ color: PINK }}>ghosted</span> by your GLP-1 provider?
        </h1>

        <div style={{ width: 48, height: 3, backgroundColor: PINK, borderRadius: 2, margin: "14px auto" }} />

        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6, maxWidth: 280, margin: "0 auto 20px" }}>
          SculptRx was built for women who deserve real support — not silence.
        </p>

        {/* HANDWRITTEN ACCENT C — warm nudge right above the hero CTA button */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 12 }}>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: PINK, fontWeight: 700, transform: "rotate(-2deg)", display: "inline-block" }}>
            takes 2 min, we promise
          </span>
          {/* Downward arrow toward the button */}
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
            <path d="M8 2 L8 16" stroke={PINK} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <path d="M3 12 L8 18 L13 12" stroke={PINK} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <button style={{ width: "100%", backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, boxShadow: `0 4px 20px ${PINK}55` }}>
          Take the Free Quiz →
        </button>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, fontSize: 12, color: "#aaa", marginTop: 10 }}>
          <Lock size={11} /> No payment required · 2-minute quiz
        </p>
      </div>

      {/* EMPATHY STRIP */}
      <div style={{ backgroundColor: "#111827", padding: "28px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>
          "I sent three messages.<br /><span style={{ color: PINK }}>Nobody ever wrote back.</span>"
        </p>
        <p style={{ fontSize: 14, color: "#9ca3af", marginTop: 12, lineHeight: 1.6 }}>
          If this sounds familiar, you're not alone — and you deserve so much better.
        </p>
      </div>

      {/* COMPARISON */}
      <div style={{ padding: "36px 20px 28px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, textAlign: "center", color: "#1a1a1a", marginBottom: 4, lineHeight: 1.3 }}>
          What <span style={{ color: TEAL }}>actually</span> changes with us
        </h2>
        <p style={{ textAlign: "center", fontSize: 12, color: "#aaa", marginBottom: 20 }}>Other providers vs. SculptRx</p>
        {[
          { bad: "Weeks of silence after signup", good: "Reply within 24 hours, always" },
          { bad: "Copy-paste treatment plans", good: "Program tailored to your body" },
          { bad: "Disappears after prescribing", good: "Ongoing support every step of the way" },
          { bad: "Generic weight-loss advice", good: "GLP-1 care designed for women" },
        ].map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
            <div style={{ backgroundColor: "#fff1f2", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 6 }}>
              <XCircle size={14} color="#e0356a" style={{ marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#666", lineHeight: 1.4 }}>{row.bad}</span>
            </div>
            <div style={{ backgroundColor: "#f0fafb", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 6, border: `1px solid ${TEAL}44` }}>
              <CheckCircle size={14} color={TEAL} style={{ marginTop: 1, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#1a1a1a", fontWeight: 500, lineHeight: 1.4 }}>{row.good}</span>
            </div>
          </div>
        ))}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "#ddd" }}>Others</p>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: TEAL }}>SculptRx</p>
        </div>
      </div>

      {/* TRUST PILLARS */}
      <div style={{ padding: "36px 20px", background: `linear-gradient(160deg, ${PINK} 0%, #c41f67 100%)` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 20, lineHeight: 1.3 }}>
          We'd never ghost you.<br />Here's our promise.
        </h2>
        {[
          { icon: <Stethoscope size={22} color="#fff" />, title: "Real Medical Team", desc: "Board-certified physicians and nurse practitioners — not bots or auto-replies." },
          { icon: <MessageCircle size={22} color="#fff" />, title: "Replies Within 24 Hrs", desc: "Every message gets a real human response within one business day." },
          { icon: <Heart size={22} color="#fff" />, title: "Ongoing Support", desc: "Your care team stays with you through every milestone and adjustment." },
        ].map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 14, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 16, padding: "16px", marginBottom: 10 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.icon}</div>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.title}</p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12.5, lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: "36px 20px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, textAlign: "center", color: "#1a1a1a", marginBottom: 24 }}>Getting started is simple</h2>
        {[
          { num: "1", title: "Take a free 2-min quiz", desc: "Tell us about your health history and goals. No commitment." },
          { num: "2", title: "Get your personalized plan", desc: "A physician reviews your profile and designs your program." },
          { num: "3", title: "Start with full support", desc: "Your care team is with you from day one — and every day after." },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, backgroundColor: TEAL, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>{step.num}</div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a", marginBottom: 4 }}>{step.title}</p>
              <p style={{ fontSize: 12, color: "#777", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div style={{ padding: "40px 24px", textAlign: "center", background: "linear-gradient(145deg, #f0fafb 0%, #fff0f5 100%)", borderTop: `2px solid ${TEAL}33` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.2 }}>
          Ready to feel <span style={{ color: PINK }}>supported</span>?
        </h2>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 24, lineHeight: 1.6 }}>
          Join thousands of women who chose a provider that actually shows up.
        </p>
        <button style={{ width: "100%", backgroundColor: PINK, color: "#fff", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 700, boxShadow: `0 6px 24px ${PINK}55` }}>
          Start Your Free Quiz →
        </button>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, fontSize: 11, color: "#aaa", marginTop: 12 }}>
          <Shield size={11} /> 256-bit SSL · No credit card required · Cancel anytime
        </p>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#111827", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          Sculpt<span style={{ color: TEAL }}>Rx</span>
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 8 }}>
          <Heart size={11} fill={PINK} color={PINK} />
          <span style={{ fontSize: 12, color: "#9ca3af" }}>GLP-1 Care Designed for Women</span>
          <Heart size={11} fill={PINK} color={PINK} />
        </div>
        <p style={{ fontSize: 11, color: "#4b5563" }}>© 2025 SculptRx · For educational purposes · Not medical advice · Results vary.</p>
      </div>
    </div>
  );
}
