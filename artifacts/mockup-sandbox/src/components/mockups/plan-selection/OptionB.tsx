const TEAL = "#4EB7C0";
const PINK = "#F0327A";

const plans = [
  {
    id: "m2m",
    label: "Month-to-Month",
    freq: "Billed monthly",
    pricePerMonth: 229,
    total: null,
    badge: null,
    desc: "Flexibility to cancel anytime.",
  },
  {
    id: "3mo",
    label: "3-Month Supply",
    freq: "Billed $627 today",
    pricePerMonth: 209,
    total: 627,
    badge: null,
    desc: "Save $60 vs. monthly.",
  },
  {
    id: "6mo",
    label: "6-Month Supply",
    freq: "Billed $1,194 today",
    pricePerMonth: 199,
    total: 1194,
    badge: "Best Value",
    desc: "Save $180 vs. monthly.",
  },
];

export function OptionB() {
  const selectedPlan = "3mo";

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
        {/* Medication summary chip */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium border" style={{ background: `${TEAL}0C`, borderColor: `${TEAL}30`, color: TEAL }}>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            Semaglutide selected
          </div>
        </div>

        <h1 className="font-serif text-[26px] font-bold text-[#38404B] leading-tight mb-1">Choose your plan.</h1>
        <p className="text-[13px] text-[#8A9BB0] mb-6 leading-relaxed">Your card is charged upon physician approval. Cancel anytime.</p>

        <div className="flex flex-col gap-3">
          {plans.map((plan) => {
            const isSelected = plan.id === selectedPlan;
            return (
              <div
                key={plan.id}
                className="rounded-2xl border-2 bg-white p-4 relative"
                style={{ borderColor: isSelected ? TEAL : "#E8ECF0", background: isSelected ? `${TEAL}04` : "white" }}
              >
                {/* Radio */}
                <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: isSelected ? TEAL : "#C8D0D8", background: isSelected ? TEAL : "white" }}>
                  {isSelected && <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>}
                </div>

                <div className="pr-8">
                  {/* Header row */}
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[15px] font-bold text-[#38404B]">{plan.label}</span>
                    {plan.badge && (
                      <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${TEAL}18`, color: TEAL }}>
                        ✦ {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-1 mb-2">
                    <span className="text-[28px] font-bold leading-none" style={{ color: isSelected ? TEAL : "#38404B" }}>
                      ${plan.pricePerMonth}
                    </span>
                    <span className="text-[12px] text-[#8A9BB0] font-medium">/mo</span>
                  </div>

                  {/* Billing info */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11.5px] text-[#8A9BB0]">{plan.freq}</span>
                    <span className="text-[11px] font-medium" style={{ color: TEAL }}>{plan.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#8A9BB0" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <span className="text-[11px] text-[#8A9BB0]">SSL encrypted · Charged only upon approval</span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-8 pt-3 bg-white border-t border-[#F0F0F0]">
        <button className="w-full h-12 rounded-full text-white text-sm font-semibold shadow-md" style={{ background: TEAL }}>
          Continue →
        </button>
        <p className="text-[10px] text-[#8A9BB0] text-center mt-2 leading-relaxed">Your doctor will confirm your plan during consultation.</p>
      </div>
    </div>
  );
}
