const pink = "#F0327A";
const teal = "#4EB7C0";
const ink = "#46384b";

const Stars = () => (
  <div className="flex gap-0.5 shrink-0">
    {[...Array(5)].map((_, i) => (
      <svg key={i} style={{ width: 14, height: 14, fill: pink }} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ShieldIcon = () => (
  <svg style={{ width: 15, height: 15, color: teal }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LockIcon = () => (
  <svg style={{ width: 15, height: 15, color: teal }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckIcon = () => (
  <svg style={{ width: 15, height: 15, color: teal }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const SparkleIcon = () => (
  <svg style={{ width: 15, height: 15, color: pink }} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
  </svg>
);

const MedIcon = () => (
  <svg style={{ width: 15, height: 15, color: teal }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const variants = [
  {
    label: "A",
    node: (
      <div className="flex items-center gap-2">
        <Stars />
        <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500, lineHeight: 1.3 }}>
          <strong style={{ color: ink }}>Physician-led</strong> · Board-certified MDs<br />
          Licensed US pharmacies
        </span>
      </div>
    ),
  },
  {
    label: "B",
    node: (
      <div className="flex items-center gap-2">
        <div style={{ background: `${teal}15`, borderRadius: 8, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6 }}>
          <LockIcon />
          <span style={{ fontSize: 11.5, color: teal, fontWeight: 600 }}>HIPAA-compliant</span>
        </div>
        <span style={{ fontSize: 11.5, color: "#64748b", fontWeight: 500 }}>100% confidential · Licensed physicians</span>
      </div>
    ),
  },
  {
    label: "C",
    node: (
      <div className="flex items-center gap-2.5">
        <div style={{ background: `${teal}12`, borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <ShieldIcon />
        </div>
        <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500, lineHeight: 1.35 }}>
          <strong style={{ color: ink }}>Evidence-based protocols</strong><br />
          Real physician oversight · FDA-registered pharmacies
        </span>
      </div>
    ),
  },
  {
    label: "D",
    node: (
      <div className="flex items-center gap-2">
        <SparkleIcon />
        <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500, lineHeight: 1.3 }}>
          <strong style={{ color: pink }}>Be among the first.</strong> Join our founding<br />
          member waitlist · Limited spots available
        </span>
      </div>
    ),
  },
  {
    label: "E",
    node: (
      <div className="flex items-center gap-2">
        <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
          {[ShieldIcon, LockIcon, CheckIcon].map((Icon, i) => (
            <div key={i} style={{ background: `${teal}12`, borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon />
            </div>
          ))}
        </div>
        <span style={{ fontSize: 11.5, color: "#64748b", fontWeight: 500, lineHeight: 1.35 }}>
          Physician-led · HIPAA-secure<br />
          <strong style={{ color: ink }}>Licensed US compounding pharmacies</strong>
        </span>
      </div>
    ),
  },
];

export default function TrustLineVariants() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #faf7ff 0%, #fff0f6 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        gap: 0,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#94a3b8", textTransform: "uppercase", marginBottom: 24 }}>
        Trust line — 5 variants
      </p>

      {variants.map((v, i) => (
        <div
          key={v.label}
          style={{
            width: "100%",
            maxWidth: 380,
            background: "#fff",
            borderRadius: 16,
            padding: "20px 20px",
            marginBottom: i < variants.length - 1 ? 12 : 0,
            boxShadow: "0 1px 8px rgba(70,56,75,0.07)",
            border: "1px solid rgba(70,56,75,0.07)",
          }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#cbd5e1", textTransform: "uppercase", marginBottom: 10 }}>
            Option {v.label}
          </p>
          {v.node}
        </div>
      ))}
    </div>
  );
}
