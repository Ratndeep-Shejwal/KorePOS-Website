import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Button from './Button'

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  headingLine1: "Built for every",
  headingLine2: "hospitality business",
  subtext:
    "From pop-ups to multi-site groups — one platform adapts to how you operate.",
  cta: "Learn More",
  cards: [
    { name: "Restaurants", description: "Full-service POS with kitchen display sync and table management.", image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg", href: "#" },
    { name: "Boutique", description: "Inventory tracking and checkout built for retail flow.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", href: "#" },
    { name: "Cafes", description: "Fast checkout, loyalty, and QR ordering for quick service.", image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg", href: "#" },
    { name: "Bars", description: "Tab management and fast tender for high-volume nights.", image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg", href: "#" },
    { name: "Food Trucks", description: "Mobile-first POS that works with or without signal.", image: "https://images.pexels.com/photos/1600180/pexels-photo-1600180.jpeg", href: "#" },
    { name: "Bakeries", description: "Pre-order management and daily sales tracking.", image: "https://images.pexels.com/photos/1070874/pexels-photo-1070874.jpeg", href: "#" },
    { name: "Hotels", description: "Front desk to room service, all in one system.", image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg", href: "#" },
    { name: "Nightclubs", description: "Fast-paced bar tabs and table service tracking.", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg", href: "#" },
    { name: "Bakery Cafes", description: "Combined bakery and seated service workflows.", image: "https://images.pexels.com/photos/1435743/pexels-photo-1435743.jpeg", href: "#" },
    { name: "Pop-ups", description: "Flexible setup for short-term and mobile venues.", image: "https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg", href: "#" },
    { name: "Wine Bars", description: "Curated tab management for slow, high-ticket service.", image: "https://images.pexels.com/photos/1247861/pexels-photo-1247861.jpeg", href: "#" },
    { name: "Breweries", description: "Taproom service paired with retail merchandise sales.", image: "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg", href: "#" },
    { name: "Delis", description: "Counter service with fast weighted-item checkout.", image: "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg", href: "#" },
    { name: "Fine Dining", description: "Course timing and table-side ordering built in.", image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg", href: "#" },
    { name: "Juice Bars", description: "Quick customizable orders with loyalty tracking.", image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg", href: "#" },
    { name: "Ice Cream Shops", description: "Seasonal menu tools and fast summer checkout.", image: "https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg", href: "#" },
    { name: "Pizzerias", description: "Delivery, pickup and dine-in from one screen.", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg", href: "#" },
    { name: "Food Halls", description: "Shared checkout across multiple vendor stalls.", image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg", href: "#" },
    { name: "Retail Stores", description: "General retail checkout with inventory sync.", image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg", href: "#" },
    { name: "Salons", description: "Appointment-linked checkout and product sales.", image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg", href: "#" },
    { name: "Markets", description: "Fast multi-vendor, multi-stall transaction handling.", image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg", href: "#" },
  ],
};
// ─────────────────────────────────────────────────

export default function BusinessTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const loopCards = [...content.cards, ...content.cards, ...content.cards];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (activeIndex === content.cards.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!isTransitioning && activeIndex === 0) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning, activeIndex]);

  const cardWidth = 260;
  const gap = 24;
  const offset = activeIndex * (cardWidth + gap);

  return (
    <section data-theme="light" className="relative bg-paper py-24 overflow-hidden font-body">
      <div className="max-w-[1400px] mx-auto pl-6 md:pl-12 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 items-center relative z-10">

        {/* Left: Text & CTA */}
        <div className="max-w-md pr-6 lg:pr-0">
          <h2 className="font-display font-extrabold text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight text-ink mb-2">
            {content.headingLine1}
          </h2>
          <h2 className="font-display font-extrabold text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight text-forest mb-6">
            {content.headingLine2}
          </h2>
          <p className="font-body text-lg text-ink/80 font-medium leading-snug mb-10 max-w-[90%]">
            {content.subtext}
          </p>

          <Button variant="primary">{content.cta}</Button>
        </div>

        {/* Right: Carousel Area */}
        <div className="relative h-[440px] flex items-center w-full">
          <div className="absolute inset-y-0 left-[15%] -right-[100vw] bg-ink rounded-l-[40px] z-0" />

          <div className="absolute inset-y-0 left-0 -right-[100vw] overflow-hidden flex items-center">
            <div
              className="flex gap-6 w-max relative z-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                transform: `translateX(-${offset}px)`,
                transition: isTransitioning
                  ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  : "none",
              }}
            >
              {loopCards.map((card, i) => (
                <div
                  key={`${card.name}-${i}`}
                  className="group relative w-[260px] h-[380px] shrink-0 rounded-[28px] overflow-hidden cursor-pointer shadow-lg"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between">
                    <span className="font-display font-bold text-white text-[1.35rem] leading-tight tracking-wide">
                      {card.name}
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={2.5}
                      className="text-white opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}