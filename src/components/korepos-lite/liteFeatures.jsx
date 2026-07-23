import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "Features",
  nav: [
    { id: "tap-to-pay", label: "Tap to Pay" },
    { id: "easy-collect", label: "Easy Collect" },
  ],
  sections: [
    {
      id: "tap-to-pay",
      title: "Accept Payments Anywhere. Instantly.",
      description:
        "Turn your smartphone into a secure payment terminal in minutes. No extra hardware, no monthly terminal fees, and no complicated setup. Simply download KorePOS Lite, verify your account, and start accepting contactless card and mobile wallet payments—complete with secure authorisation, digital receipts, and settlement reporting.",
      tags: [
        "Contactless cards & wallets",
        "iPhone & Android",
        "Digital receipts",
        "No extra hardware",
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      imagePosition: "left",
    },
    {
      id: "easy-collect",
      title: "Collect Payments in Seconds.",
      description:
        "Take payments quickly with a simple, streamlined checkout. Enter the amount, accept the payment, and send a receipt—all from your phone. Whether you're serving customers in person or collecting remotely with secure payment links, KorePOS Lite keeps every transaction fast, simple, and hassle-free.",
      tags: [
        "Manual amount entry",
        "Payment links",
        "Email & SMS receipts",
        "Daily summaries",
      ],
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
      imagePosition: "right",
    },
  ],
};
// ─────────────────────────────────────────────────

export default function LiteFeatures() {
  const [activeSection, setActiveSection] = useState(content.nav[0].id);

  useEffect(() => {
    // We widened the trigger zone to the middle 20% of the screen. 
    // This guarantees the last item triggers even if you can't scroll it all the way to the top.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    content.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 relative font-body">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start relative">
        
        {/* ── LEFT COLUMN: STICKY NAV ── */}
        <div className="hidden md:block md:col-span-3 lg:col-span-2 sticky top-32 lg:top-40 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar pr-4">
          <h4 className="text-coral font-bold text-lg md:text-xl mb-6 tracking-wide">
            {content.overline}
          </h4>
          <nav className="flex flex-col gap-5">
            {content.nav.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      // Added a slightly better scroll offset calculation
                      const y = el.getBoundingClientRect().top + window.scrollY - 120;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`font-display font-bold text-xl transition-all duration-300 ease-out ${
                    isActive ? "text-ink scale-100" : "text-ink/40 scale-95 origin-left hover:text-ink/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* ── RIGHT COLUMN: SCROLLABLE SECTIONS ── */}
        <div className="md:col-span-9 lg:col-span-10 flex flex-col">
          {content.sections.map((section) => {
            const isImageLeft = section.imagePosition === "left";

            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pt-16 pb-16 md:pt-24 md:pb-24 first:pt-0 border-b border-ink/10 last:border-b-0 min-h-[70vh] flex flex-col justify-center"
              >
                <h3 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-12">
                  {section.title}
                </h3>
                
                <div 
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-[55%]">
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-ink/5 relative pb-[60%] lg:pb-[70%]">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text & Tags Block */}
                  <div className="w-full lg:w-[45%] flex flex-col">
                    <p className="font-body text-[15px] md:text-base text-ink/80 leading-relaxed font-medium mb-8">
                      {section.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {section.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-coral text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}