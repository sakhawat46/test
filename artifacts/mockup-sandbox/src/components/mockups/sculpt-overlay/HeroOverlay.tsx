import { DollarSign, Stethoscope, UserCheck, Clock } from "lucide-react";

const badges = [
  { icon: DollarSign, label: "$0 Due Until A Doctor Approves You", bg: "rgba(78,183,192,0.08)", border: "rgba(78,183,192,0.25)", iconBg: "#4EB7C0" },
  { icon: Stethoscope, label: "U.S. Board-Certified Physicians", bg: "rgba(240,50,122,0.07)", border: "rgba(240,50,122,0.20)", iconBg: "#F0327A" },
  { icon: UserCheck, label: "OBGYNs on Your Care Team", bg: "rgba(78,183,192,0.08)", border: "rgba(78,183,192,0.25)", iconBg: "#4EB7C0" },
  { icon: Clock, label: "Doctor Approval in 24 Hours or Less", bg: "rgba(240,50,122,0.07)", border: "rgba(240,50,122,0.20)", iconBg: "#F0327A" },
];

export function HeroOverlay() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 pt-6">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="px-6 pt-7 pb-8 flex flex-col items-center">

          {/* Logo */}
          <div className="text-center mb-5">
            <div className="font-['Playfair_Display'] text-2xl font-bold tracking-tight text-[#38404B]">
              Sculpt<span style={{ color: "#4EB7C0" }}>Rx</span>
            </div>
            <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#9ca3af] mt-0.5">
              Women's Health &amp; Weight Loss
            </div>
          </div>

          {/* Split row: headline left, image right */}
          <div className="flex items-start gap-3 w-full mb-4">
            {/* Headline */}
            <div className="flex-1 min-w-0">
              <h2
                className="font-['Playfair_Display'] text-[1.3rem] font-bold text-[#38404B] leading-snug"
              >
                Most programs are built for everyone.{" "}
                <span style={{ color: "#F0327A" }}>SculptRx was built for you.</span>
              </h2>
            </div>

            {/* Product image */}
            <div
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ width: "145px", height: "155px" }}
            >
              <img
                src="/__mockup/images/sculpt-vials.png"
                alt="SculptRx GLP-1 vials"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Body copy */}
          <p className="text-sm text-[#6b7280] leading-relaxed mb-5 text-left w-full">
            Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case. Your cycle, your health, your goals — finally accounted for.
          </p>

          {/* Badges */}
          <div className="grid grid-cols-2 gap-2.5 mb-5 w-full">
            {badges.map(({ icon: Icon, label, bg, border, iconBg }) => (
              <div
                key={label}
                className="rounded-2xl p-3 flex flex-col items-start gap-2"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-[11px] font-semibold text-[#38404B] leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA label */}
          <p className="text-sm font-semibold text-[#38404B] mb-4 w-full text-left">
            Join the founding list and be first through the door.
          </p>

          {/* Phone input */}
          <div className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-400 mb-3">
            (555) 555-5555
          </div>

          {/* CTA button */}
          <button
            className="w-full rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #F0327A, #c0195e)" }}
          >
            Join the Founding List →
          </button>

          {/* TCPA */}
          <p className="mt-4 text-[10px] text-[#9ca3af] leading-relaxed text-center">
            By joining, you agree to receive recurring marketing text messages from SculptRx at the number provided. Msg &amp; data rates may apply. Reply <strong>STOP</strong> to unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
