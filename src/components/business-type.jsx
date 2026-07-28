import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

// Helper function to reliably format any string into a clean URL slug
const createSlug = (str) =>
  String(str || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const content = {
  headingLine1: "Built for every",
  headingLine2: "hospitality business",
  subtext: "From pop-ups to multi-site groups — one platform adapts to how you operate.",
  cta: "Learn More",
  fallbackCards: [
    { name: "Restaurants", description: "Full-service POS with kitchen display sync and table management.", image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg" },
    { name: "Boutique", description: "Inventory tracking and checkout built for retail flow.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" },
    { name: "Cafes", description: "Fast checkout, loyalty, and QR ordering for quick service.", image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg" },
    { name: "Bars", description: "Tab management and fast tender for high-volume nights.", image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg" },
    { name: "Food Trucks", description: "Mobile-first POS that works with or without signal.", image: "https://images.pexels.com/photos/1600180/pexels-photo-1600180.jpeg" },
    { name: "Bakeries", description: "Pre-order management and daily sales tracking.", image: "https://images.pexels.com/photos/1070874/pexels-photo-1070874.jpeg" },
    { name: "Hotels", description: "Front desk to room service, all in one system.", image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg" },
    { name: "Nightclubs", description: "Fast-paced bar tabs and table service tracking.", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" },
  ].map((card) => ({ ...card, slug: createSlug(card.name) })), // Automatically creates clean slugs like "bars", "restaurants", etc.
};

export default function BusinessTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cards, setCards] = useState(content.fallbackCards);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isSnappingRef = useRef(false);

  // Fetching live data from your API with precise slug generation from the name
  useEffect(() => {
    fetch("https://pos.getsmotives.com/admin/api/business-types")
      .then((res) => res.json())
      .then((data) => {
        const apiData = Array.isArray(data) ? data : data.cards || data.business_types || data.data;
        if (apiData && apiData.length > 0) {
          const mappedCards = apiData.map((item) => {
            const name = item.name || item.title || "Business";
            // Prefer the item's name/title to build the slug so it matches your businessData keys cleanly
            const rawSlug = item.slug || name;
            return {
              name: name,
              description: item.description || item.short_description || "Specialized workflow tools built for this business type.",
              image: item.image || item.image_url || "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
              slug: createSlug(rawSlug)
            };
          });
          setCards(mappedCards);
        }
      })
      .catch((err) => {
        console.error("Failed to load business types from API, using fallback data:", err);
      });
  }, []);

  const loopCards = [...cards, ...cards, ...cards];
  const cardWidth = 260;
  const gap = 24;
  const offset = activeIndex * (cardWidth + gap);

  useEffect(() => {
    if (isPaused || hoveredIndex !== null) return;
    const interval = setInterval(() => {
      if (isSnappingRef.current) return;
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, hoveredIndex]);

  useEffect(() => {
    if (activeIndex === cards.length) {
      isSnappingRef.current = true;
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, cards.length]);

  useEffect(() => {
    if (!isTransitioning && activeIndex === 0) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isSnappingRef.current = false;
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning, activeIndex]);

  const handleNext = () => {
    if (isSnappingRef.current) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isSnappingRef.current) return;
    if (activeIndex === 0) {
      isSnappingRef.current = true;
      setIsTransitioning(false);
      setActiveIndex(cards.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setActiveIndex(cards.length - 1);
        isSnappingRef.current = false;
      }, 50);
    } else {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      data-theme="light"
      className="relative bg-paper py-24 overflow-hidden font-body"
    >
      <div className="max-w-[1400px] mx-auto pl-6 md:pl-12 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md pr-6 lg:pr-0"
        >
          <h2 className="font-display font-extrabold text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight text-ink mb-2">
            {content.headingLine1}
          </h2>
          <h2 className="font-display font-extrabold text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight text-forest mb-6">
            {content.headingLine2}
          </h2>
          <p className="font-body text-lg text-ink/80 font-medium leading-snug mb-10 max-w-[90%]">
            {content.subtext}
          </p>

          <div className="flex items-center gap-6">
            <Button variant="primary">{content.cta}</Button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-ink/10 hover:border-ink/30 hover:bg-ink/5 transition-all text-ink/70 hover:text-ink cursor-pointer"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-ink/10 hover:border-ink/30 hover:bg-ink/5 transition-all text-ink/70 hover:text-ink cursor-pointer"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-[440px] flex items-center w-full"
        >
          <div className="absolute inset-y-0 left-[15%] -right-[100vw] bg-ink rounded-l-[40px] z-0" />

          <div className="absolute inset-y-0 left-0 -right-[100vw] overflow-hidden flex items-center">
            <motion.div
              className="flex gap-6 w-max relative z-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              animate={{ x: -offset }}
              transition={{
                duration: isTransitioning ? 0.5 : 0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {loopCards.map((card, i) => {
                const isHovered = hoveredIndex === i;
                return (
                  <div
                    key={`${card.name}-${i}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative w-[260px] h-[380px] shrink-0 rounded-[28px] overflow-hidden shadow-lg select-none cursor-pointer"
                  >
                    <img
                      src={`${card.image}?auto=compress&cs=tinysrgb&w=600`}
                      alt={card.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 pointer-events-none" />
                    
                    {/* Default Title Display */}
                    <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between pointer-events-none">
                      <span className="font-display font-bold text-white text-[1.35rem] leading-tight tracking-wide">
                        {card.name}
                      </span>
                      <ArrowUpRight
                        size={20}
                        strokeWidth={2.5}
                        className="text-white opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                      />
                    </div>

                    {/* Compact Bottom Gradient Drawer / Overlay */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "100%", opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-black/40 backdrop-blur-sm pt-8 pb-6 px-5 flex flex-col justify-end z-20 text-white rounded-b-[28px]"
                        >
                          <h3 className="font-display font-bold text-lg text-white mb-1.5">
                            {card.name}
                          </h3>
                          <p className="font-body text-xs text-white/75 leading-relaxed line-clamp-3 mb-4">
                            {card.description}
                          </p>

                          <div>
                            <Link
                              to={`/business-types/${card.slug}`}
                              className="inline-flex items-center justify-between w-full bg-white/10 hover:bg-white text-white hover:text-ink font-semibold py-2.5 px-3.5 rounded-xl border border-white/20 transition-all text-xs"
                            >
                              <span>Explore More</span>
                              <ArrowUpRight size={14} strokeWidth={2.5} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}