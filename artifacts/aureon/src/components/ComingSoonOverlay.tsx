import { motion } from "framer-motion";

const items = [
  { label: "$0 Due Until A Doctor Approves You", color: "#4EB7C0" },
  { label: "U.S. Board-Certified Physicians", color: "#F0327A" },
  { label: "OBGYNs on Your Care Team", color: "#4EB7C0" },
  { label: "Doctor Approval in 24 Hours or Less", color: "#F0327A" },
];

export default function ComingSoonOverlay() {
  return (
    <div
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", background: "rgba(240,228,235,0.55)" }}
    >
      <div className="min-h-full flex items-center justify-center p-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md bg-white rounded-3xl overflow-hidden my-4"
          style={{ boxShadow: "0 32px 96px rgba(78,183,192,0.18), 0 8px 32px rgba(240,50,122,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
        >
          {/* Gradient top bar */}
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

          <div className="flex flex-col">
            {/* ── Logo ── */}
            <div className="flex flex-col items-center pt-6 pb-3">
              <span className="font-serif text-[1.85rem] font-semibold text-[#38404B] select-none leading-none">
                Sculpt<span className="text-[#4EB7C0]">Rx</span>
              </span>
              <span className="text-[0.6rem] font-sans uppercase tracking-[0.22em] text-[#9ca3af] mt-1.5">
                Women's Health &amp; Weight Loss
              </span>
            </div>

            {/* ── Headline ── */}
            <div className="px-6 pt-2 text-center">
              <h2 className="font-serif text-[1.6rem] font-bold text-[#38404B] leading-[1.12]">Most programs are built for everyone.</h2>
              <h2 className="font-serif text-[1.6rem] font-bold leading-[1.12] mt-1" style={{ color: "#F0327A" }}>SculptRx was built for you.</h2>
            </div>

            {/* ── Border strips + vials side-by-side ── */}
            <div
              className="px-2 mt-3 grid items-center"
              style={{ gridTemplateColumns: "minmax(160px, 1fr) minmax(180px, 240px)", columnGap: "4px" }}
            >
              {/* Left: left-border accent strips */}
              <div className="pl-3 flex flex-col gap-2">
                {items.map(({ label, color }) => (
                  <div
                    key={label}
                    className="pl-3 py-2 rounded-r-lg"
                    style={{ borderLeft: `3px solid ${color}`, backgroundColor: `${color}0d` }}
                  >
                    <p className="text-[11.5px] font-semibold text-[#38404B] leading-[1.25]">{label}</p>
                  </div>
                ))}
              </div>

              {/* Right: vials with teal glow bloom */}
              <div className="relative flex items-center justify-end">
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse 80% 75% at 50% 50%, rgba(78,183,192,0.55) 0%, transparent 70%)",
                    filter: "blur(24px)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
                    WebkitMaskComposite: "source-in",
                    maskImage: "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
                    maskComposite: "intersect",
                  }}
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/sculpt-vials-nobg.webp`}
                  alt="SculptRx Semaglutide and Tirzepatide GLP-1 vials"
                  className="relative w-[262px] max-w-none"
                  style={{
                    marginRight: "-30px",
                    transform: "translateY(0px)",
                    filter: "drop-shadow(0 14px 28px rgba(78,183,192,0.26)) drop-shadow(0 5px 12px rgba(0,0,0,0.10))",
                  }}
                />
              </div>
            </div>

            {/* ── Supporting paragraph ── */}
            <div className="px-6 pt-4">
              <p className="text-[13px] text-[#6b7280] leading-[1.55] text-center">
                Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case. Your cycle, your health, your goals — finally accounted for.
              </p>
            </div>

            {/* ── Coming Soon CTA ── */}
            <div className="px-6 pt-4 pb-8 text-center">
              <p className="text-[15px] font-bold text-[#38404B] mb-1 leading-snug">
                Launching Soon
              </p>
              <p className="text-[13px] text-[#9ca3af]">
                We onboard women in small groups. Check back shortly.
              </p>
              <p className="mt-5 text-[11px] text-[#9ca3af] tracking-wide">
                🔒 SSL Encrypted &nbsp;•&nbsp; U.S. Licensed Physicians
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
