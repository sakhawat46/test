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
    badge: "Licensed clinician · 24–48 hrs",
    body: "A real clinician, not an algorithm, reviews everything and designs a treatment plan around your biology. No office visit needed.",
    footnote: null,
  },
  {
    num: "3",
    title: "Receive Your Medication",
    badge: "Licensed US pharmacy · Ongoing support",
    body: "Your medication arrives from a licensed compounding pharmacy. Dosing is supervised over time. Your care team is reachable — you're a patient, not a transaction.",
    footnote: "Real doctors. Real support. The way it should have been.",
  },
];

export default function HowV3() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", padding: "28px 20px 24px", maxWidth: 390 }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: teal, marginBottom: 7 }}>A Smarter Path to Lasting Results</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.45rem", fontWeight: 900, color: ink, lineHeight: 1.25, margin: "0 0 8px" }}>
          Most providers take 5 minutes and call it care. <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 12.5, color: "#888", lineHeight: 1.5, margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      <div style={{ background: "linear-gradient(135deg,#f8fdfd 0%,#fdf5f9 100%)", borderRadius: 18, overflow: "hidden" }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            padding: "16px 18px",
            borderBottom: i < steps.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%",
                background: i === steps.length - 1 ? teal : "#fff",
                border: `1.5px solid ${i === steps.length - 1 ? teal : teal + "55"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 13,
                color: i === steps.length - 1 ? "#fff" : teal,
                flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
              }}>{s.num}</div>
              <div>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: ink, margin: "0 0 1px" }}>{s.title}</p>
                <p style={{ fontSize: 9.5, color: teal, fontWeight: 600, margin: 0 }}>{s.badge}</p>
              </div>
            </div>
            <p style={{ fontSize: 11.5, color: "#666", lineHeight: 1.55, margin: "0 0 4px", paddingLeft: 42 }}>{s.body}</p>
            {s.footnote && <p style={{ fontSize: 10, color: "#aaa", fontStyle: "italic", margin: 0, paddingLeft: 42 }}>{s.footnote}</p>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: "center" }}>
        <button style={{
          background: teal, color: "#fff", border: "none", borderRadius: 50,
          padding: "12px 28px", fontSize: 13.5, fontWeight: 700, cursor: "pointer"
        }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10, color: "#bbb", marginTop: 8 }}>No payment until your physician approves your plan.</p>
      </div>
    </div>
  );
}
