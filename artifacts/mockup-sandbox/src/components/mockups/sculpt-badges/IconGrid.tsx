import { Stethoscope, Clock, DollarSign, UserCheck } from "lucide-react";

const badges = [
  {
    icon: DollarSign,
    label: "$0 Due Until A Doctor Approves You",
    bg: "rgba(78,183,192,0.08)",
    border: "rgba(78,183,192,0.25)",
    iconBg: "#4EB7C0",
  },
  {
    icon: Stethoscope,
    label: "U.S. Board-Certified Physicians",
    bg: "rgba(240,50,122,0.07)",
    border: "rgba(240,50,122,0.2)",
    iconBg: "#F0327A",
  },
  {
    icon: UserCheck,
    label: "OBGYNs on Your Care Team",
    bg: "rgba(78,183,192,0.08)",
    border: "rgba(78,183,192,0.25)",
    iconBg: "#4EB7C0",
  },
  {
    icon: Clock,
    label: "Doctor Approval in 24 Hours or Less",
    bg: "rgba(240,50,122,0.07)",
    border: "rgba(240,50,122,0.2)",
    iconBg: "#F0327A",
  },
];

export function IconGrid() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[360px]">
        <p className="text-[10px] uppercase tracking-widest text-[#4EB7C0] font-bold mb-4 text-center">
          Why SculptRx
        </p>
        <div className="grid grid-cols-2 gap-3">
          {badges.map(({ icon: Icon, label, bg, border, iconBg }) => (
            <div
              key={label}
              className="rounded-2xl p-4 flex flex-col items-start gap-2.5"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: iconBg }}
              >
                <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-xs font-semibold text-[#38404B] leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
