import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "FAQS",
  headingLine1: "Frequently Asked",
  headingLine2: "Questions",
  subtext: "Everything you need to know about setting up and running your business on KorePOS.",
  cta: "Contact us",
  faqs: [
    {
      question: "What types of businesses is KorePOS built for?",
      answer: "KorePOS is incredibly versatile, designed specifically for the modern hospitality and retail sectors. Our platform powers full-service restaurants, quick-service cafes, cloud kitchens, retail boutiques, food trucks, and multi-location franchises.",
    },
    {
      question: "Do I need to buy specific POS hardware?",
      answer: "Not necessarily! With KorePOS Lite, you can use 'Tap to Pay' directly on your own smartphone with no extra hardware. For high-volume setups on KorePOS Pro, we offer a range of industry-grade POS terminals, card readers, and kitchen display systems (KDS) tailored to your workflow.",
    },
    {
      question: "Are there any hidden transaction fees or lock-in contracts?",
      answer: "We believe in complete transparency. Our standard transaction fee starts at just 1.2% + 0p per transaction with no hidden charges. We also offer rolling monthly plans so you are never locked into a restrictive long-term contract.",
    },
    {
      question: "How long does the setup and onboarding process take?",
      answer: "Most businesses are up and running within 24 to 48 hours. Our UK-based support team will guide you through menu migration, payment configuration, and staff training to ensure a seamless launch on day one.",
    },
    {
      question: "Will the POS still work if my internet connection drops?",
      answer: "Yes. KorePOS includes a robust offline mode that allows you to continue taking orders, managing tables, and processing cash transactions. Once your internet connection is restored, all data automatically syncs to your cloud dashboard.",
    },
  ],
};
// ─────────────────────────────────────────────────

export default function FAQ() {
  // Keeps track of which accordion item is currently open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Outer black wrapper to frame the white box
    <section className="bg-ink py-12 md:py-24 px-4 md:px-8 overflow-hidden font-body">
      
      {/* Inner white container */}
      <div className="bg-white mx-auto max-w-[1600px] py-20 md:py-32 px-6 md:px-12 lg:px-24">
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="sticky top-24"
          >
            <span className="text-coral uppercase tracking-widest text-sm font-bold block mb-6">
              {content.overline}
            </span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-ink mb-8">
              <span className="block">{content.headingLine1}</span>
              <span className="block text-coral">{content.headingLine2}</span>
            </h2>
            <p className="font-body text-lg text-ink/70 mb-10 max-w-md">
              {content.subtext}
            </p>
            
            {/* Custom black rectangular button matching the image wrapped in Link */}
            <Link to="/contact">
              <button className="bg-black cursor-pointer hover:bg-black/80 text-white font-body font-bold text-sm px-10 py-4 transition-colors">
                {content.cta}
              </button>
            </Link>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="border border-ink/10"
          >
            {content.faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index}
                  className={`border-b border-ink/10 last:border-b-0 transition-colors duration-300 ${
                    isOpen ? "bg-ink/5" : "bg-white"
                  }`}
                >
                  {/* Accordion Header (Clickable) */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 px-6 md:px-8 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body font-medium text-lg text-ink pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0 text-ink"
                    >
                      <ChevronDown size={20} strokeWidth={2.5} />
                    </motion.div>
                  </button>

                  {/* Accordion Body (Animated Height) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 px-6 md:px-8 text-ink/60 font-body text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}