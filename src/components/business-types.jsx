import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  headingLine1: "Built for every",
  headingLine2: "hospitality business",
  subtext:
    "From pop-ups to multi-site groups — one platform adapts to how you operate.",
  cta: "Learn More",
  cards: [
    {
      name: "Restaurants",
      description:
        "Full-service POS with kitchen display sync and table management.",
      image:
        "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
      href: "#",
    },
    {
      name: "Boutique",
      description: "Inventory tracking and checkout built for retail flow.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      href: "#",
    },
    {
      name: "Cafes",
      description: "Fast checkout, loyalty, and QR ordering for quick service.",
      image:
        "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg",
      href: "#",
    },
    {
      name: "Bars",
      description: "Tab management and fast tender for high-volume nights.",
      image:
        "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
      href: "#",
    },
    {
      name: "Food Trucks",
      description: "Mobile-first POS that works with or without signal.",
      image:
        "https://images.pexels.com/photos/1600180/pexels-photo-1600180.jpeg",
      href: "#",
    },
    {
      name: "Bakeries",
      description: "Pre-order management and daily sales tracking.",
      image:
        "https://images.pexels.com/photos/1070874/pexels-photo-1070874.jpeg",
      href: "#",
    },
    {
      name: "Hotels",
      description: "Front desk to room service, all in one system.",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      href: "#",
    },
    {
      name: "Nightclubs",
      description: "Fast-paced bar tabs and table service tracking.",
      image:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      href: "#",
    },
    {
      name: "Bakery Cafes",
      description: "Combined bakery and seated service workflows.",
      image:
        "https://images.pexels.com/photos/1435743/pexels-photo-1435743.jpeg",
      href: "#",
    },
    {
      name: "Pop-ups",
      description: "Flexible setup for short-term and mobile venues.",
      image:
        "https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg",
      href: "#",
    },
    {
      name: "Wine Bars",
      description: "Curated tab management for slow, high-ticket service.",
      image:
        "https://images.pexels.com/photos/1247861/pexels-photo-1247861.jpeg",
      href: "#",
    },
    {
      name: "Breweries",
      description: "Taproom service paired with retail merchandise sales.",
      image:
        "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg",
      href: "#",
    },
    {
      name: "Delis",
      description: "Counter service with fast weighted-item checkout.",
      image:
        "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg",
      href: "#",
    },
    {
      name: "Fine Dining",
      description: "Course timing and table-side ordering built in.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      href: "#",
    },
    {
      name: "Juice Bars",
      description: "Quick customizable orders with loyalty tracking.",
      image:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
      href: "#",
    },
    {
      name: "Ice Cream Shops",
      description: "Seasonal menu tools and fast summer checkout.",
      image:
        "https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg",
      href: "#",
    },
    {
      name: "Pizzerias",
      description: "Delivery, pickup and dine-in from one screen.",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
      href: "#",
    },
    {
      name: "Food Halls",
      description: "Shared checkout across multiple vendor stalls.",
      image:
        "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg",
      href: "#",
    },
    {
      name: "Retail Stores",
      description: "General retail checkout with inventory sync.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
      href: "#",
    },
    {
      name: "Salons",
      description: "Appointment-linked checkout and product sales.",
      image:
        "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
      href: "#",
    },
    {
      name: "Markets",
      description: "Fast multi-vendor, multi-stall transaction handling.",
      image:
        "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg",
      href: "#",
    },
  ],
};
// ─────────────────────────────────────────────────

export default function BusinessTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const visibleCount = 3;
  const loopCards = [...content.cards, ...content.cards];
  const cardsToShow = loopCards.slice(activeIndex, activeIndex + visibleCount);

  return (
    <section data-theme="light" className="bg-paper py-24">
  <div className="max-w-6xl mx-auto pl-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left: text */}
    <div className="pr-6">
      <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-ink mb-2">
        {content.headingLine1}
      </h2>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-forest mb-6">
        {content.headingLine2}
      </h2>
      <p className="font-body text-lg text-ink/60 max-w-sm mb-10">{content.subtext}</p>
      <Button variant="primary">{content.cta}</Button>
    </div>

    {/* Right: carousel, bleeds to screen edge */}
    <div className="relative">
      <div className="absolute top-6 left-0 right-0 bottom-0 bg-ink rounded-l-3xl" />
      <div
        className="relative flex gap-5 pl-6 overflow-x-hidden"
        style={{ width: '100vw' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {cardsToShow.map((card, i) => (
          <div
            key={`${card.name}-${i}`}
            className="group relative w-64 h-[26rem] shrink-0 rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={card.image} alt={card.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between">
                <span className="font-body font-semibold text-white text-xl transition-transform duration-300 group-hover:-translate-y-2">
                  {card.name}
                </span>
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="max-h-0 group-hover:max-h-28 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <p className="font-body text-sm text-white/80 mt-2 mb-3 line-clamp-2">{card.description}</p>
                <a href={card.href} className="inline-flex items-center gap-1 text-sm font-semibold text-coral">
                  Explore <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
