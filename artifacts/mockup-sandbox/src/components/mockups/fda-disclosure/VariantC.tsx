const medications = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    subtitle: "Once-weekly injection",
    tagline: "The original GLP-1",
    description:
      "Targets the GLP-1 receptor to reduce appetite, slow digestion, and improve blood sugar regulation. The most studied GLP-1 medication for women's weight loss.",
    highlights: ["Single-action GLP-1", "Widely studied", "Doctor-prescribed"],
    color: "#4EB7C0",
    badge: "Most Affordable",
    startingPrice: "As low as $199/mo",
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    subtitle: "Once-weekly injection",
    tagline: "Dual-action formula",
    description:
      "Activates both GLP-1 and GIP receptors for a more powerful metabolic effect. Clinical trials show greater average weight loss compared to semaglutide alone.",
    highlights: ["Dual GLP-1 + GIP", "Greater avg. weight loss", "Doctor-prescribed"],
    color: "#F0327A",
    badge: "Most Popular",
    startingPrice: "As low as $259/mo",
  },
];

const FDA_TEXT =
  "Compounded medication — not FDA-approved or evaluated by the FDA for safety or effectiveness. Prepared by an independent licensed U.S. pharmacy.";

export default function VariantC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[460px]">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

          <div className="px-6 pt-5 pb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">← Back</span>
            <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">
              Sculpt<span style={{ color: "#4EB7C0" }}>Rx</span>
            </span>
            <div className="w-16" />
          </div>

          <div className="px-6 pb-8">
            <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
              Choose your medication.
            </h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Both are physician-prescribed GLP-1 therapies. Your doctor will confirm the right fit during your consultation.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {medications.map((med) => (
                <div
                  key={med.id}
                  className="w-full text-left rounded-2xl border-2 p-4 border-border bg-white"
                >
                  <span
                    className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2"
                    style={{ background: `${med.color}18`, color: med.color }}
                  >
                    {med.tagline}
                  </span>
                  <div className="mb-0.5 pr-6">
                    <h3 className="font-serif text-[20px] font-bold text-[#38404B] leading-none">{med.name}</h3>
                    <span className="text-xs text-muted-foreground">{med.subtitle}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 mb-3">{med.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {med.highlights.map((h) => (
                      <span key={h} className="text-[10.5px] font-medium px-2.5 py-1 rounded-full" style={{ background: `${med.color}12`, color: med.color }}>{h}</span>
                    ))}
                  </div>

                  {/* VARIANT C: micro disclosure inside each card, bottom edge */}
                  <div
                    className="mt-1 pt-2.5 flex items-start gap-1.5"
                    style={{ borderTop: `1px solid ${med.color}22` }}
                  >
                    <svg className="flex-shrink-0 mt-px" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={med.color} strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <p className="text-[9.5px] leading-relaxed" style={{ color: `${med.color}cc` }}>
                      {FDA_TEXT}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full rounded-full h-12 text-white text-sm font-semibold shadow-md" style={{ background: "#4EB7C0" }}>
              Continue →
            </button>

            <p className="mt-4 text-[10.5px] text-muted-foreground text-center leading-relaxed">
              Your doctor will review your selection and confirm or recommend an alternative based on your health profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
