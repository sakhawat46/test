const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const steps = [
  {
    num: "1",
    title: "Take the Free Quiz",
    badge: "No payment required",
    body: "Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.",
    footnote: "No pressure. No commitment. Just answers.",
  },
  {
    num: "2",
    title: "Physician Review",
    badge: "Licensed women's health clinician · Within 24–48 hours",
    body: "A real clinician, not an algorithm, reviews everything you shared and designs a treatment plan around your biology. No office visit needed.",
    footnote: null,
  },
  {
    num: "3",
    title: "Receive Your Medication",
    badge: "Shipped from a licensed US pharmacy · Ongoing support included",
    body: "Your medication arrives from a licensed US compounding pharmacy — not a warehouse. Dosing is supervised and adjusted over time. If you have questions or side effects, your care team is reachable.",
    footnote: "Real doctors. Real support. The way it should have been from the start.",
  },
];

export default function HowV1() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", padding: "28px 20px 24px", maxWidth: 390 }}>
      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: teal, marginBottom: 7 }}>A Smarter Path to Lasting Results</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.45rem", fontWeight: 900, color: ink, lineHeight: 1.25, margin: "0 0 8px" }}>
          Most providers take 5 minutes and call it care. <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 12.5, color: "#888", lineHeight: 1.5, margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 18, top: 20, bottom: 20, width: 1, background: `${teal}28` }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, paddingBottom: i < steps.length - 1 ? 20 : 0 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", background: "#fff", border: `2px solid ${teal}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 14, color: teal,
                flexShrink: 0, position: "relative", zIndex: 1, boxShadow: "0 1px 4px rgba(78,183,192,0.15)"
              }}>{s.num}</div>
              <div style={{ paddingTop: 6 }}>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: ink, margin: "0 0 2px" }}>{s.title}</p>
                <p style={{ fontSize: 9.5, color: teal, fontWeight: 600, margin: "0 0 6px" }}>{s.badge}</p>
                <p style={{ fontSize: 11.5, color: "#666", lineHeight: 1.55, margin: "0 0 4px" }}>{s.body}</p>
                {s.footnote && <p style={{ fontSize: 10.5, color: "#aaa", fontStyle: "italic", margin: 0 }}>{s.footnote}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button style={{
          background: teal, color: "#fff", border: "none", borderRadius: 50,
          padding: "12px 28px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", letterSpacing: "0.01em"
        }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10, color: "#bbb", marginTop: 8 }}>No payment until your physician approves your plan.</p>
      </div>
    </div>
  );
}
