import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Import your master data file
import { businessData } from './businessData';

export default function DynamicExploreTypes({ currentSlug }) {
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    // 1. Get all available slugs from your data
    const allSlugs = Object.keys(businessData);
    
    // 2. Remove the current page so we don't link to the page we're already on
    const availableSlugs = allSlugs.filter(slug => slug !== currentSlug);

    // 3. Shuffle the array to randomize the order
    let shuffled = [...availableSlugs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 4. Pick the top 3 (or fewer if you haven't added 4+ business types yet)
    setRandomCards(shuffled.slice(0, 3));
  }, [currentSlug]);

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-12 font-body">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-coral uppercase tracking-widest text-sm font-bold mb-3 block">
            More Business Types
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight">
            Explore Features By Business Type
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1st Card: STATIC & NON-CLICKABLE */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-black text-white shadow-sm">
            <div className="aspect-square w-full overflow-hidden bg-gray-200">
              <img 
                // Placeholder for your tap-to-pay image
                src="https://images.unsplash.com/photo-1613143521251-4e78dbf144d1?auto=format&fit=crop&q=80&w=600" 
                alt="All businesses" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4 px-2 text-center font-display font-bold text-sm tracking-wide">
              All businesses
            </div>
          </div>

          {/* Rest of the Cards: DYNAMIC & CLICKABLE */}
          {randomCards.map((slug, index) => {
            const data = businessData[slug];
            
            return (
              <motion.a
                key={slug}
                href={`/business-types/${slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col rounded-xl overflow-hidden bg-white text-ink shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img 
                    // Using the heroImage from your data, or fallback if needed
                    src={data.heroImage || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"} 
                    alt={data.cardTitle || data.heading} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="py-4 px-2 text-center font-display font-bold text-sm tracking-wide">
                  {/* Ideally, add a "cardTitle" (e.g. "Beauty") to your data, otherwise fallback to "heading" */}
                  {data.cardTitle || data.heading}
                </div>
              </motion.a>
            );
          })}

        </div>
      </div>
    </section>
  );
}