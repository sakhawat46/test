const stats = [
  { stat: "$0", sub: "Due until a doctor approves you", color: "#4EB7C0" },
  { stat: "MD", sub: "Board-Certified on every case", color: "#F0327A" },
  { stat: "OBGYN", sub: "Specialists on your care team", color: "#4EB7C0" },
  { stat: "24h", sub: "Doctor approval or less", color: "#F0327A" },
];

export function StatCards() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[360px]">
        <div className="grid grid-cols-2 gap-3">
          {stats.map(({ stat, sub, color }) => (
            <div
              key={stat}
              className="rounded-2xl p-4 flex flex-col items-start gap-1.5"
              style={{
                border: `1.5px solid ${color}35`,
                background: `${color}09`,
              }}
            >
              <span
                className="font-extrabold tracking-tight leading-none"
                style={{ color, fontSize: stat === "OBGYN" ? "22px" : "28px" }}
              >
                {stat}
              </span>
              <p className="text-[11px] text-[#6b7280] font-medium leading-snug">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
