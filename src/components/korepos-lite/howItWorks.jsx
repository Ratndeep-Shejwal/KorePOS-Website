import { motion } from "framer-motion";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "HOW IT WORKS",
  title: "Live In Three Steps.",
  steps: [
    {
      num: "01",
      title: "Sign Up",
      desc: "Create Your Account In Under Two Minutes.",
    },
    {
      num: "02",
      title: "Verify",
      desc: "Complete Quick Payment Provider Verification.",
    },
    {
      num: "03",
      title: "Collect",
      desc: "Tap To Pay Or Send Payment Links Instantly.",
    },
  ],
};

// ── ANIMATION VARIANTS ──────────────────────────
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2, // Staggers the appearance of the steps
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};
// ─────────────────────────────────────────────────

export default function LiteHowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 font-body">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Dark Card Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-[#111111] rounded-[2rem] overflow-hidden p-10 md:p-16 lg:p-24 shadow-2xl"
        >
          {/* ── Ambient Background Glows ── */}
          {/* Top Right Coral Glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral/20 rounded-full blur-[100px] pointer-events-none" />
          {/* Bottom Left Green Glow */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#2D735C]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* ── Header Area ── */}
          <div className="relative z-10 mb-12 md:mb-16">
            <span className="text-coral uppercase tracking-widest text-sm font-bold block mb-4">
              {content.overline}
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
              {content.title}
            </h2>
          </div>

          {/* Divider */}
          <div className="relative z-10 w-full h-px bg-white/10 mb-12 md:mb-16" />

          {/* ── Steps Grid ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
            {content.steps.map((step, index) => (
              <motion.div key={index} variants={stepVariants} className="flex flex-col">
                <span className="text-coral text-sm font-bold mb-3">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-white/60 text-sm md:text-base leading-relaxed max-w-[90%]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}