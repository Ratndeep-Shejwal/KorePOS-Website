import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "TECH SPECS",
  heading: "The Detail, On The Record.",
  subtext: "Everything You Need To Evaluate EPOS— Connectivity, Compatibility, Security And What's In The Box.",
  cta: "View Full Specs",
  specs: [
    { label: "Category", value: "Orders" },
    { label: "Best for", value: "Hospitality & retail, any size" },
    { label: "Setup time", value: "Live within 4–6 weeks" },
    { label: "Pricing", value: "Transparent — buy or subscribe" },
    { label: "Build", value: "Commercial-grade, drop-resistant" },
  ],
  cardLink: "See all specs",
};
// ─────────────────────────────────────────────────

export default function TechSpecs() {
  return (
    <section className="bg-white py-20 md:py-32 font-body overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* ── LEFT COLUMN: TEXT & CTA ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="text-coral uppercase tracking-[0.15em] text-sm font-bold block mb-6">
            {content.overline}
          </span>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-ink leading-[1.1] tracking-tight mb-8">
            {content.heading}
          </h2>
          <p className="font-body text-lg text-ink/70 font-medium leading-relaxed mb-10">
            {content.subtext}
          </p>
          
          {/* Main CTA Button */}
          <Button variant="primary">
            <span className="flex items-center gap-2">
              {content.cta}
            </span>
          </Button>
        </motion.div>

        {/* ── RIGHT COLUMN: DARK SPECS CARD ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="bg-[#111111] rounded-[2rem] p-8 md:p-12 shadow-2xl w-full"
        >
          <ul className="flex flex-col">
            {content.specs.map((spec, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-white/10 gap-2 sm:gap-6"
              >
                <span className="text-white/60 text-sm md:text-base font-medium whitespace-nowrap">
                  {spec.label}
                </span>
                <span className="text-white text-sm md:text-base font-medium sm:text-right">
                  {spec.value}
                </span>
              </motion.li>
            ))}
          </ul>
          
          {/* Card Bottom Link (Updated to Coral/Orange) */}
          <motion.a 
            href="#all-specs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="inline-flex items-center gap-2 mt-8 text-coral hover:text-[#e64a27] font-medium text-sm md:text-base transition-colors group"
          >
            {content.cardLink}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}