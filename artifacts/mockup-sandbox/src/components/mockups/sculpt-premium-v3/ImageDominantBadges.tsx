import { DollarSign, Stethoscope, UserCheck, Clock } from "lucide-react";

const cards = [
  { icon: DollarSign, label: "$0 Due Until A Doctor Approves You", iconBg: "#4EB7C0", bg: "rgba(78,183,192,0.08)", border: "rgba(78,183,192,0.20)" },
  { icon: Stethoscope, label: "U.S. Board-Certified Physicians", iconBg: "#F0327A", bg: "rgba(240,50,122,0.06)", border: "rgba(240,50,122,0.16)" },
  { icon: UserCheck, label: "OBGYNs on Your Care Team", iconBg: "#4EB7C0", bg: "rgba(78,183,192,0.08)", border: "rgba(78,183,192,0.20)" },
  { icon: Clock, label: "Doctor Approval in 24 Hours or Less", iconBg: "#F0327A", bg: "rgba(240,50,122,0.06)", border: "rgba(240,50,122,0.16)" },
];

export default function ImageDominantBadges() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div className="w-[390px] bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}>
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Logo */}
        <div className="flex flex-col items-center pt-6 pb-3">
          <span className="font-serif text-[1.85rem] font-semibold text-[#38404B] select-none leading-none">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#9ca3af] mt-1.5">Women's Health & Weight Loss</span>
        </div>

        {/* Headline full width, left aligned */}
        <div className="px-6 pt-2">
          <h2 className="font-serif text-[1.6rem] font-bold text-[#38404B] leading-[1.12]">Most programs are built for everyone.</h2>
          <h2 className="font-serif text-[1.6rem] font-bold leading-[1.12] mt-1" style={{ color: "#F0327A" }}>SculptRx was built for you.</h2>
        </div>

        {/* Content row: pill badges (left) + vials (right). Height is driven by content. */}
        <div
          className="px-2 mt-2 grid items-center"
          style={{ gridTemplateColumns: "minmax(160px, 1fr) minmax(180px, 240px)", columnGap: "4px" }}
        >
          {/* Left column: pill-style badges */}
          <div className="pl-4 flex flex-col gap-2">
            {cards.map(({ icon: Icon, label, iconBg, bg, border }) => (
              <div key={label} className="flex items-center gap-1.5 rounded-full pl-1 pr-2.5 py-1" style={{ background: bg, border: `1px solid ${border}` }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: iconBg }}>
                  <Icon className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[10px] font-semibold text-[#38404B] leading-[1.1]">{label}</p>
              </div>
            ))}
          </div>

          {/* Right column: vials with glow, bleeding slightly off the right edge */}
          <div className="relative flex items-center justify-end">
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute" style={{ inset: "0", background: "radial-gradient(ellipse 60% 55% at 52% 42%, rgba(78,183,192,0.30) 0%, transparent 62%), radial-gradient(ellipse 55% 50% at 58% 80%, rgba(240,50,122,0.22) 0%, transparent 62%)", filter: "blur(16px)" }} />
              {[[30, 55, 3], [60, 80, 2], [80, 60, 3], [45, 90, 2], [20, 70, 2], [70, 45, 2]].map(([t, l, s], i) => (
                <span key={i} className="absolute rounded-full" style={{ top: `${t}%`, left: `${l}%`, width: s, height: s, background: "white", opacity: 0.8, boxShadow: "0 0 4px rgba(255,255,255,0.9)" }} />
              ))}
            </div>
            <img
              src="/__mockup/images/sculpt-vials-nobg.png"
              alt="vials"
              className="relative w-[262px] max-w-none"
              style={{ marginRight: "-30px", transform: "translateY(-20px)", filter: "drop-shadow(0 14px 28px rgba(78,183,192,0.26)) drop-shadow(0 5px 12px rgba(0,0,0,0.10))" }}
            />
          </div>
        </div>

        {/* Body paragraph beneath the badges and image */}
        <div className="px-6 pt-4">
          <p className="text-[13px] text-[#6b7280] leading-[1.55] text-center">
            Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case. Your cycle, your health, your goals — finally accounted for.
          </p>
        </div>

        <div className="px-6 pt-4 pb-6">
          <p className="text-[15px] font-bold text-[#38404B] mb-3 leading-snug">Join the founding list and be first through the door.</p>
          <input readOnly placeholder="(555) 555-5555" className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-400 mb-3 outline-none" />
          <button className="w-full rounded-full py-3.5 text-sm font-semibold text-white" style={{ background: "#F0327A", boxShadow: "0 4px 18px rgba(240,50,122,0.34)" }}>Join Waitlist Now →</button>
          <p className="text-[10px] text-[#9ca3af] leading-relaxed text-center mt-4">By joining, you agree to receive recurring marketing texts from SculptRx. Msg &amp; data rates may apply. Reply STOP to unsubscribe.</p>
        </div>
      </div>
    </div>
  );
}
