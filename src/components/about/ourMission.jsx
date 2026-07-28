import { motion } from "framer-motion";

const content = {
  overline: "OUR MISSION",
  headingLine1: "To help businesses",
  headingLine2: "keep more of what they earn.",
  subtext:
    "We're building a future where businesses spend less time managing systems and more time delivering exceptional customer experiences. KorePOS combines payments, commerce, operations, analytics, and customer engagement into one seamless ecosystem — helping merchants reduce complexity, improve efficiency, and scale confidently.",
  pillars: [
    {
      number: "01",
      title: "One Unified Platform",
      description:
        "POS, Payments, Bookings, Analytics, QR Ordering, Inventory, Reporting, And Operations Connected In One Seamless System.",
    },
    {
      number: "02",
      title: "Transparent Pricing",
      description:
        "No Hidden Fees, Confusing Contracts, Or Surprise Charges. Clear Pricing Built For Modern Businesses.",
    },
    {
      number: "03",
      title: "Built For Hospitality",
      description:
        "Designed Specifically For Restaurants, Cafes, Retail Stores, Food Trucks, And Experience Businesses.",
    },
    {
      number: "04",
      title: "Modern Payment Technology",
      description:
        "Tap To Pay, Contactless Payments, Payment Links, QR Payments, And Digital Receipts Built Directly Into The Platform.",
    },
    {
      number: "05",
      title: "Operational Speed",
      description:
        "From Kitchen Workflows To Live Reporting, KorePOS Is Built To Keep Businesses Moving Efficiently.",
    },
    {
      number: "06",
      title: "Scalable Infrastructure",
      description:
        "Whether Operating One Location Or Multiple Branches, KorePOS Grows With Your Business.",
    },
  ],
};

// ── Animation Variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

export default function OurMission() {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 font-body">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* ── Header Section ── */}
        <div className="text-center max-w-4xl mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-coral uppercase tracking-[0.15em] text-sm font-bold mb-6 block"
          >
            {content.overline}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-ink mb-8"
          >
            <span className="block">{content.headingLine1}</span>
            <span className="block text-[#2D735C]">{content.headingLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-ink/80 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto"
          >
            {content.subtext}
          </motion.p>
        </div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
        >
          {content.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white border border-coral/20 rounded-[2rem] p-8 md:p-10 flex flex-col hover:border-coral/40 hover:shadow-xl hover:shadow-coral/5 transition-all duration-300 group"
            >
              <span className="text-coral font-display font-medium text-xl mb-6 block">
                {pillar.number}
              </span>
              <h3 className="font-display font-bold text-2xl text-ink mb-4 group-hover:text-coral transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-ink/70 font-medium text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}