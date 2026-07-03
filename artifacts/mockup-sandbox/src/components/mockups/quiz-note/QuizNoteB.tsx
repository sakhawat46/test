export default function QuizNoteB() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&family=Caveat:wght@500;600&display=swap" />
      <div style={{ width: "100%", maxWidth: "360px", background: "white", borderRadius: "24px", boxShadow: "0 4px 32px rgba(0,0,0,0.08)", overflow: "hidden" }}>
        <div style={{ padding: "18px 24px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "13px", color: "#8c96a3" }}>← Back</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#38404B" }}>Sculpt<span style={{ color: "#4EB7C0" }}>Rx</span></span>
          <span style={{ fontSize: "13px", color: "#8c96a3" }}>1 of 6</span>
        </div>
        <div style={{ padding: "28px 24px 32px" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
            {[true, false, false, false, false, false].map((active, i) => (
              <div key={i} style={{ height: "6px", flex: 1, borderRadius: "99px", background: active ? "#4EB7C0" : "#e5e7eb" }} />
            ))}
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: "#38404B", marginBottom: "6px", lineHeight: 1.25 }}>
            How old are you?
          </h2>
          <p style={{ fontSize: "14px", color: "#8c96a3", marginBottom: "22px", lineHeight: 1.5 }}>
            GLP-1 therapy is available to adults 18 and older.
          </p>

          <input
            type="text"
            readOnly
            placeholder="Your age"
            style={{ display: "block", width: "100%", boxSizing: "border-box", fontSize: "22px", fontWeight: 600, textAlign: "center", padding: "13px 16px", borderRadius: "12px", border: "2px solid #e5e7eb", background: "#f9fafb", color: "#38404B", outline: "none" }}
          />

          {/* B: centered pill tag sitting snug below input */}
          <div style={{ marginTop: "12px", display: "flex", justifyContent: "center" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#FFF0F6",
              border: "1.5px dashed #F0327A55",
              borderRadius: "99px",
              padding: "6px 14px 6px 10px",
            }}>
              <span style={{ fontSize: "14px" }}>💗</span>
              <span style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "16px",
                fontWeight: 600,
                color: "#F0327A",
                lineHeight: 1.2,
              }}>
                No judgment here — just a fresh start
              </span>
            </div>
          </div>

          <button style={{ marginTop: "18px", width: "100%", padding: "14px", borderRadius: "99px", background: "#4EB7C0", color: "white", fontSize: "15px", fontWeight: 600, border: "none", cursor: "pointer" }}>
            Continue →
          </button>
          <p style={{ textAlign: "center", fontSize: "11px", color: "#b0b8c1", marginTop: "12px" }}>Takes 2 minutes · 100% private</p>
        </div>
      </div>
    </div>
  );
}
