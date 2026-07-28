import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const content = {
  overline: "THE OUTCOME",
  heading: "The Numbers Behind The Calm",
  stats: [
    {
      value: "30%",
      label: "Faster Service At Peak",
    },
    {
      value: "21+",
      label: "Business Types",
    },
    {
      value: "99%",
      label: "Increased Order Rate",
    },
  ],
};

// ── Custom Animated Counter Component ──
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numberPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 2000, 
    bounce: 0,      
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numberPart);
    }
  }, [isInView, motionValue, numberPart]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl text-white mb-3">
      0{suffix}
    </span>
  );
}

// ── Animation Variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ── Main Component ──
export default function KPI() {
  return (
    <section className="bg-white py-12 md:py-24 px-6 md:px-12 font-body">
      <div className="max-w-[1200px] mx-auto">
        
        {/* ── Dark Card Container ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#111111] rounded-[2rem] overflow-hidden py-16 md:py-24 px-8 shadow-2xl"
        >
          {/* ── Ambient Glow Background Effects ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-coral/30 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#1a4736]/40 rounded-full blur-[120px]" />
          </div>

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            <span className="text-coral uppercase tracking-[0.15em] text-sm font-bold mb-4 block">
              {content.overline}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-16 md:mb-20">
              {content.heading}
            </h2>

            {/* Stats Grid - Swapped to Flexbox with equal padding for perfect divider symmetry */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10"
            >
              {content.stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  // Symmetrical padding applied here. The first and last items remove outer padding to stay flush with the container.
                  className="flex flex-col items-center flex-1 py-10 md:py-0 md:px-8 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0"
                >
                  <AnimatedCounter value={stat.value} />
                  
                  <span className="text-white/80 font-medium text-base md:text-lg">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}