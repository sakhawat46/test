const TEAL = "#4EB7C0";
const PINK = "#F0327A";

const plans = [
  { id: "m2m",    label: "Month-to-Month", sub: "Billed monthly",       price: 229, total: null,    badge: null },
  { id: "3mo",    label: "3-Month Supply", sub: "Billed $627 today",    price: 209, total: 627,    badge: null },
  { id: "6mo",    label: "6-Month Supply", sub: "Billed $1,194 today",  price: 199, total: 1194,   badge: "Best Value" },
];

export function OptionA() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col" style={{ fontFamily: "Inter, sans-serif", maxWidth: 390, margin: "0 auto" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3 bg-white border-b border-[#F0F0F0]">
        <button className="flex items-center gap-1 text-sm text-[#8A9BB0]">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          Back
        </button>
        <span className="font-bold text-[15px] text-[#38404B]">Sculpt<span style={{ color: TEAL }}>Rx</span></span>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-auto px-4 py-5">
        <h1 className="font-serif text-[26px] font-bold text-[#38404B] leading-tight mb-1">Choose your medication.</h1>
        <p className="text-[13px] text-[#8A9BB0] mb-5 leading-relaxed">Select a medication and a supply plan below.</p>

        <div className="flex flex-col gap-3">
          {/* SEMAGLUTIDE — selected, plans expanded */}
          <div className="rounded-2xl border-2 bg-white overflow-hidden" style={{ borderColor: TEAL }}>
            {/* Corner ribbon */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-[130px] h-[130px] pointer-events-none z-10">
                <div style={{ position:"absolute", top:34, left:-36, width:160, padding:"6px 0", background: TEAL, color:"white", fontSize:9, fontWeight:700, textAlign:"center", transform:"rotate(-45deg)", letterSpacing:"0.07em", textTransform:"uppercase", boxShadow:"0 2px 6px rgba(0,0,0,0.18)" }}>
                  Most Affordable
                </div>
              </div>
              {/* Vial hero */}
              <div className="relative -mx-0 flex items-end justify-center overflow-hidden" style={{ height: 180, background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${TEAL}22 0%, transparent 70%)` }}>
                <img src="/images/sculpt-semaglutide-nobg.png" alt="Semaglutide" style={{ height: 220, width: "auto", marginBottom: -40, filter: `drop-shadow(0 12px 32px ${TEAL}44)` }} />
              </div>
              {/* Check */}
              <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: TEAL }}>
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
            </div>

            <div className="px-4 pt-3 pb-2">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2" style={{ background: `${TEAL}18`, color: TEAL }}>The original GLP-1</span>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-serif text-[19px] font-bold text-[#38404B]">Semaglutide</h3>
                <span className="text-xs text-[#8A9BB0]">Once-weekly injection</span>
              </div>
            </div>

            {/* Inline plan selector */}
            <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-[#E8ECF0]">
              <div className="px-3 py-2 bg-[#F7F8FA] border-b border-[#E8ECF0]">
                <p className="text-[10.5px] font-semibold uppercase tracking-widest text-[#8A9BB0]">Choose your supply plan</p>
              </div>
              {plans.map((plan, i) => {
                const isSelected = plan.id === "3mo";
                return (
                  <div key={plan.id} className={`flex items-center justify-between px-3 py-2.5 ${i < plans.length - 1 ? "border-b border-[#E8ECF0]" : ""} ${isSelected ? "" : "bg-white"}`}
                    style={{ background: isSelected ? `${TEAL}0C` : "white" }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: isSelected ? TEAL : "#C8D0D8", background: isSelected ? TEAL : "white" }}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[12px] font-semibold text-[#38404B]">{plan.label}</span>
                          {plan.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: `${TEAL}18`, color: TEAL }}>{plan.badge}</span>
                          )}
                        </div>
                        <span className="text-[10.5px] text-[#8A9BB0]">{plan.sub}</span>
                      </div>
                    </div>
                    <span className="text-[13px] font-bold" style={{ color: isSelected ? TEAL : "#38404B" }}>${plan.price}<span className="text-[10px] font-normal text-[#8A9BB0]">/mo</span></span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TIRZEPATIDE — not selected */}
          <div className="rounded-2xl border-2 border-[#E8ECF0] bg-white p-4 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 border-[#C8D0D8] bg-white" />
            <div className="h-10 mb-3 flex items-center justify-center rounded-xl" style={{ background: `${PINK}0A` }}>
              <span className="text-[11px] font-medium" style={{ color: PINK }}>Image coming soon</span>
            </div>
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2" style={{ background: `${PINK}18`, color: PINK }}>Dual-action formula</span>
            <div className="flex items-baseline gap-2">
              <h3 className="font-serif text-[19px] font-bold text-[#38404B]">Tirzepatide</h3>
              <span className="text-xs text-[#8A9BB0]">Once-weekly injection</span>
            </div>
            <p className="text-xs text-[#8A9BB0] mt-1.5">Activates both GLP-1 and GIP receptors for greater average weight loss.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-8 pt-3 bg-white border-t border-[#F0F0F0]">
        <button className="w-full h-12 rounded-full text-white text-sm font-semibold shadow-md" style={{ background: TEAL }}>
          Continue →
        </button>
        <p className="text-[10px] text-[#8A9BB0] text-center mt-2 leading-relaxed">Your doctor will confirm your selection during consultation.</p>
      </div>
    </div>
  );
}
