const items = [
  "$0 Due Until A Doctor Approves You",
  "U.S. Board-Certified Physicians",
  "OBGYNs on Your Care Team",
  "Doctor Approval in 24 Hours or Less",
];

export function CheckList() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[360px]">
        <div className="flex flex-col gap-2.5">
          {items.map((label) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(78,183,192,0.07) 0%, rgba(240,50,122,0.05) 100%)",
                border: "1px solid rgba(78,183,192,0.28)",
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #4EB7C0, #F0327A)" }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-[#38404B] leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
