import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Helper function to reliably format any string into a clean URL slug
const createSlug = (str) =>
  String(str || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const content = {
  overline: "INDUSTRIES",
  headingLine1: "Built for every",
  headingLine2: "hospitality & retail business",
  subtext: "From pop-ups to multi-site groups — explore how our platform adapts specifically to the way you operate.",
  
  // FULL 21 BUSINESS TYPES FALLBACK
  fallbackCards: [
    { name: "Restaurants", description: "Full-service POS with kitchen display sync and table management.", image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg" },
    { name: "Retail Stores", description: "Inventory tracking and checkout built for retail flow.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" },
    { name: "Cafés & Coffee Shops", description: "Fast checkout, loyalty, and QR ordering for quick service.", image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg" },
    { name: "Food Trucks", description: "Mobile-first POS that works with or without signal.", image: "https://images.pexels.com/photos/1600180/pexels-photo-1600180.jpeg" },
    { name: "Bakeries & Sweet Shops", description: "Pre-order management and daily sales tracking.", image: "https://images.pexels.com/photos/1070874/pexels-photo-1070874.jpeg" },
    { name: "Hotels & Resorts", description: "Front desk to room service, all in one system.", image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg" },
    { name: "Activities & Escape Rooms", description: "Slot bookings, waivers, and walk-in management.", image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" },
    { name: "Beauty Salons & Barbers", description: "Appointment booking and payment handling.", image: "https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg" },
    { name: "Charity & Donations", description: "Digital collection and contribution tracking.", image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg" },
    { name: "Cloud Kitchens", description: "Delivery-only food business management.", image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg" },
    { name: "Event Organizers", description: "Ticketed events, private functions, and attendee management.", image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg" },
    { name: "Festivals & Markets", description: "Rapid transaction processing for multi-vendor festivals.", image: "https://images.pexels.com/photos/2249163/pexels-photo-2249163.jpeg" },
    { name: "Gardens & Nurseries", description: "Plant shops, landscaping, and gardening supply businesses.", image: "https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg" },
    { name: "Grocery & Convenience", description: "Fast checkout operations and barcode support.", image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg" },
    { name: "Gyms & Fitness Centers", description: "Memberships, class scheduling, and recurring payments.", image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" },
    { name: "Juice Bars & Smoothies", description: "Quick-service refreshment store management.", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg" },
    { name: "Mobile Services", description: "On-the-go payments for technicians and home services.", image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg" },
    { name: "Stalls & Pop-ups", description: "Lightweight checkout for temporary vendors and flea markets.", image: "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg" },
    { name: "Tour Operators", description: "Excursion providers with booking and scheduling support.", image: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg" },
    { name: "Workshops & Classes", description: "Educational sessions with booking and payment management.", image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg" },
    { name: "Others / Custom", description: "Flexible POS software adapted perfectly for your niche.", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" },
  ].map((card) => ({ ...card, slug: createSlug(card.name) })),
};

export default function AllBusinessTypes() {
  const [cards, setCards] = useState(content.fallbackCards);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch live data from your API
    fetch("https://pos.getsmotives.com/admin/api/business-types")
      .then((res) => res.json())
      .then((data) => {
        const apiData = Array.isArray(data) ? data : data.cards || data.business_types || data.data;
        if (apiData && apiData.length > 0) {
          const mappedCards = apiData.map((item) => {
            const name = item.name || item.title || "Business";
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

  return (
    <main className="min-h-screen bg-paper font-body pt-32 pb-24">
      
      {/* ── HEADER SECTION ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-coral uppercase tracking-widest text-sm font-bold block mb-6">
            {content.overline}
          </span>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink mb-6">
            <span className="block">{content.headingLine1}</span>
            <span className="block text-forest">{content.headingLine2}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-ink/70 font-medium max-w-2xl mx-auto">
            {content.subtext}
          </p>
        </motion.div>
      </section>

      {/* ── GRID SECTION ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={`${card.slug}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: (i % 8) * 0.05 }}
            >
              <Link
                to={`/business-types/${card.slug}`}
                className="group relative block w-full h-[380px] rounded-[28px] overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={`${card.image}?auto=compress&cs=tinysrgb&w=600`}
                  alt={card.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Permanent Base Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Default Title Display (Pushes up slightly on hover) */}
                <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between transition-transform duration-500 group-hover:-translate-y-4">
                  <span className="font-display font-bold text-white text-[1.35rem] leading-tight tracking-wide">
                    {card.name}
                  </span>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
                    className="text-white opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </div>

                {/* Hidden Drawer that slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-black/40 backdrop-blur-sm pt-8 pb-6 px-5 flex flex-col justify-end z-20 text-white rounded-b-[28px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <h3 className="font-display font-bold text-lg text-white mb-1.5">
                    {card.name}
                  </h3>
                  <p className="font-body text-xs text-white/75 leading-relaxed line-clamp-3 mb-4">
                    {card.description}
                  </p>
                  <div>
                    <span className="inline-flex items-center justify-between w-full bg-white/10 group-hover:bg-white text-white group-hover:text-ink font-semibold py-2.5 px-3.5 rounded-xl border border-white/20 transition-all text-xs">
                      <span>Explore More</span>
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}