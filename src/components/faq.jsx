import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "FAQS",
  headingLine1: "Frequently Asked",
  headingLine2: "Questions",
  subtext: "Still have questions? Get connected to our support team.",
  cta: "Contact us",
  faqs: [
    {
      question: "Can I Get Sample Product?",
      answer: "Lorem ipsum dolor sit amet consectetur. Est est cras sem porta enim sed enim vitae velit et in elit aenean dui. Consectetur volutpat sit adipiscing enim.",
    },
    {
      question: "Where Can I Get Connected to Helio's Team?",
      answer: "Our support team is available 24/7 through our help center, email, or live chat directly from your KorePOS dashboard.",
    },
    {
      question: "Can I Change Product After Placing My Order?",
      answer: "Yes, you can modify your hardware order within 24 hours of placement before it is dispatched from our warehouse.",
    },
    {
      question: "How Long The Delivery Take Time?",
      answer: "Standard delivery takes 3-5 business days. Expedited shipping is available at checkout for 1-2 business day delivery.",
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
    <section className="bg-ink py-12 md:py-24 px-4 md:px-8 overflow-hidden">
      
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
            
            {/* Custom black rectangular button matching the image */}
            <button className="bg-black hover:bg-black/80 text-white font-body font-bold text-sm px-10 py-4 transition-colors">
              {content.cta}
            </button>
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