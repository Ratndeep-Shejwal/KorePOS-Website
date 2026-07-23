import { motion } from "framer-motion";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  leftCard: {
    title: "Who is KorePOS Pro for?",
    description:
      "KorePOS Lite is built for pop-ups, food trucks, market stalls, temporary vendors, small traders, and any mobile business that needs fast payment collection without a monthly subscription. You get Tap to Pay, card payments, payment links, and daily summaries — upgrade to Pro when you need full POS, kitchen displays, or table management.",
  },
  rightCard: {
    title: "How much does KorePOS Lite cost?",
    descriptionStart:
      "KorePOS Lite has no monthly fee — you pay 1.2%* + 0p per transaction on successful transactions. There is no charge to create an account or pair a terminal. Compare with ",
    linkText: "KorePOS Pro",
    linkHref: "/pricing", // Swap with your actual link if needed
    descriptionEnd: " when you need a full restaurant or retail POS.",
  },
};
// ─────────────────────────────────────────────────

export default function ProInfoCards() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Card - Light Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F9F8F6] rounded-3xl p-8 md:p-12"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-coral mb-6">
              {content.leftCard.title}
            </h3>
            <p className="font-body text-base md:text-lg text-ink/80 leading-relaxed font-medium">
              {content.leftCard.description}
            </p>
          </motion.div>

          {/* Right Card - Dark Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="bg-ink rounded-3xl p-8 md:p-12"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6">
              {content.rightCard.title}
            </h3>
            <p className="font-body text-base md:text-lg text-white/80 leading-relaxed font-medium">
              {content.rightCard.descriptionStart}
              <a
                href={content.rightCard.linkHref}
                className="text-white/80 underline decoration-white/40 hover:decoration-white hover:text-white transition-colors"
              >
                {content.rightCard.linkText}
              </a>
              {content.rightCard.descriptionEnd}
            </p>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}