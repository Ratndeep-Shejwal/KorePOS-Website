import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DynamicStickyFeatures({ content }) {
  if (!content || !content.features) return null;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
    );

    const elements = document.querySelectorAll(".feature-scroll-block");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    // Removed overflow-hidden from the section tag so sticky works
    <section className="relative bg-[#111111] py-24 md:py-32 px-6 md:px-12 font-body">
      
      {/* ── Ambient Glow Background Container ── */}
      {/* Moved overflow-hidden here so it only clips the background blurs! */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Coral Glow */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[600px] bg-coral/20 rounded-full blur-[150px]" />
        
        {/* Bottom Left Green Glow */}
        <div className="absolute bottom-0 -left-20 w-[500px] h-[600px] bg-[#1a4736]/30 rounded-full blur-[150px]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        {content.heading && (
          <h2 className="text-coral font-display font-extrabold text-4xl md:text-5xl text-center mb-16 md:mb-24">
            {content.heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start relative">
          <div className="hidden md:block sticky top-32 w-full aspect-square lg:aspect-[4/5] max-h-[80vh] rounded-2xl overflow-hidden bg-[#111111]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={content.features[activeIndex].image}
                alt={content.features[activeIndex].title}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="flex flex-col">
            {content.features.map((feature, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  data-index={idx}
                  className="feature-scroll-block flex flex-col justify-center min-h-[50vh] md:min-h-[70vh] py-12 md:py-24 border-b border-white/10 last:border-b-0"
                >
                  <div className="md:hidden w-full aspect-square rounded-2xl overflow-hidden mb-8">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3
                    className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-white/40"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-white/70" : "text-white/30"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}