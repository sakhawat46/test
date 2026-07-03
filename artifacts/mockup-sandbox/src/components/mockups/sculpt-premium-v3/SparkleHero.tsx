import { DollarSign, Stethoscope, UserCheck, Clock } from "lucide-react";

const cards = [
  { icon: DollarSign, label: "$0 Due Until A Doctor Approves You", iconBg: "#4EB7C0", bg: "rgba(78,183,192,0.08)", border: "rgba(78,183,192,0.20)" },
  { icon: Stethoscope, label: "U.S. Board-Certified Physicians", iconBg: "#F0327A", bg: "rgba(240,50,122,0.06)", border: "rgba(240,50,122,0.16)" },
  { icon: UserCheck, label: "OBGYNs on Your Care Team", iconBg: "#4EB7C0", bg: "rgba(78,183,192,0.08)", border: "rgba(78,183,192,0.20)" },
  { icon: Clock, label: "Doctor Approval in 24 Hours or Less", iconBg: "#F0327A", bg: "rgba(240,50,122,0.06)", border: "rgba(240,50,122,0.16)" },
];

export default function SparkleHero() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div className="w-[390px] bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}>
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Logo */}
        <div className="flex flex-col items-center pt-6 pb-4">
          <span className="font-serif text-[1.85rem] font-semibold text-[#38404B] select-none leading-none">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#9ca3af] mt-1.5">Women's Health & Weight Loss</span>
        </div>

        {/* Full sparkle hero panel — text + image both on gradient */}
        <div className="relative mx-3 rounded-2xl overflow-hidden" style={{ minHeight: "300px", background: "linear-gradient(135deg, #e9fafb 0%, #f3f6f9 45%, #fdeef5 100%)" }}>
          {/* sparkles */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 70% 30%, rgba(78,183,192,0.28) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 70% 78%, rgba(240,50,122,0.20) 0%, transparent 62%)", filter: "blur(14px)" }} />
            {[[18, 60, 3], [30, 80, 2], [55, 88, 3], [70, 65, 2], [25, 40, 2], [80, 50, 3], [45, 72, 2], [12, 30, 2], [88, 80, 2]].map(([t, l, s], i) => (
              <span key={i} className="absolute rounded-full" style={{ top: `${t}%`, left: `${l}%`, width: s, height: s, background: "white", opacity: 0.85, boxShadow: "0 0 4px rgba(255,255,255,0.9)" }} />
            ))}
          </div>

          <div className="relative z-10 flex items-stretch" style={{ minHeight: "300px" }}>
            <div className="pl-5 pr-1 pt-5 flex flex-col justify-start" style={{ flex: "0 0 50%" }}>
              <h2 className="font-serif text-[1.5rem] font-bold text-[#38404B] leading-[1.12]">Most programs are built for everyone.</h2>
              <h2 className="font-serif text-[1.5rem] font-bold leading-[1.12] mt-1" style={{ color: "#F0327A" }}>SculptRx was built for you.</h2>
              <p className="text-[10.5px] text-[#5b6470] leading-relaxed mt-3">
                Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case.
              </p>
            </div>
            <div className="relative flex-1">
              <img
                src="/__mockup/images/sculpt-vials-nobg.png"
                alt="vials"
                className="absolute w-[128%] max-w-none"
                style={{ right: "-14%", top: "10%", filter: "drop-shadow(0 12px 24px rgba(78,183,192,0.22)) drop-shadow(0 4px 10px rgba(0,0,0,0.10))" }}
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="px-6 pt-5 grid grid-cols-2 gap-2.5">
          {cards.map(({ icon: Icon, label, iconBg, bg, border }) => (
            <div key={label} className="rounded-2xl p-3" style={{ background: bg, border: `1px solid ${border}` }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: iconBg }}>
                <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-[11px] font-semibold text-[#38404B] leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <div className="px-6 pt-5 pb-6">
          <p className="text-[15px] font-bold text-[#38404B] mb-3 leading-snug">Join the founding list and be first through the door.</p>
          <input readOnly placeholder="(555) 555-5555" className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-400 mb-3 outline-none" />
          <button className="w-full rounded-full py-3.5 text-sm font-semibold text-white" style={{ background: "#F0327A", boxShadow: "0 4px 18px rgba(240,50,122,0.34)" }}>Join Waitlist Now →</button>
          <p className="text-[10px] text-[#9ca3af] leading-relaxed text-center mt-4">By joining, you agree to receive recurring marketing texts from SculptRx. Msg &amp; data rates may apply. Reply STOP to unsubscribe.</p>
        </div>
      </div>
    </div>
  );
}
