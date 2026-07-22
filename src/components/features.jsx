import { motion } from "framer-motion";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "FEATURES",
  heading: "See how KorePOS runs your day",
  features: [
    {
      id: "01",
      title: "Payments that feel invisible",
      desc1: "Tap to Pay. Integrated terminals. Zero payment friction - instant settlement with transparent fees.",
      desc2: "Guests pay without friction while you see every transaction, receipt, and settlement in one overview. No hidden markups - just infrastructure you can trust at the counter and on the move.",
      tags: ["Tap to Pay on iPhone", "Card terminals & QPOS", "Payment links & invoices", "Instant settlements"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "02",
      title: "Restaurant operations, orchestrated",
      desc1: "Tables, courses, and sent tickets choreographed to the pace of service - live.",
      desc2: "Hold plates, course, and fire items right from the floor or till. It's a second nature workflow so your Front of House never drops a ball - no matter how packed the dining room gets.",
      tags: ["Table management", "Course & fire items", "Split & transfer bills", "Open tabs & bar views"],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "03",
      title: "Kitchen systems in sync",
      desc1: "Kitchen Display routes tickets with clarity - no shouting, no missed orders.",
      desc2: "Tickets land on grill, fry, or pass with fire times and allergy notes visible at a glance. Bump rows when they're ready and keep the floor aligned with what's on the pass.",
      tags: ["Custom routing", "Prep & fire times", "Clear ticket status", "Allergy & note callouts"],
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "04",
      title: "Analytics you can act on",
      desc1: "Real-time labour, and revenue performance drawn down from cloud headquarters.",
      desc2: "See what sold, what needs a discount, and how labour tracked against sales - minute by minute in spreadsheet scale. Do your end-of-day in 15 minutes, not an hour.",
      tags: ["Daily revenue sync", "Live sales tracking", "Labour vs Sales", "Multi-site rollups"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "05",
      title: "Staff workflows, simplified",
      desc1: "Roles, shifts, and permissions that scale as your team grows.",
      desc2: "Give servers, kitchen, and managers the access they need - with PIN protection for refunds, discounts, and sensitive actions. Shift visibility keeps handovers smooth.",
      tags: ["Role-based access", "Shift visibility", "PIN protected actions", "Audit-friendly trails"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "06",
      title: "Mobile POS anywhere",
      desc1: "Take orders and take payments with the same operating system.",
      desc2: "The same menu, modifiers, and pricing rules follow your team wherever they take orders. Skip the till, ring the rush - whether you're on the floor or at a pop-up.",
      tags: ["Line busting ready", "Offline support", "Same menu as main till", "Pop-ups & events"],
      image: "https://images.unsplash.com/photo-1580828369019-2238f6982885?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "07",
      title: "QR ordering, elevated",
      desc1: "Guests order at their pace - you stay in control of the experience.",
      desc2: "Scan-to-order menus reduce queue pressure while you can approve rules and route orders to the kitchen. Pay-at-table keeps the till un-tied with dine in service.",
      tags: ["Custom menus", "Pay at table", "Approve before tickets", "Cross-sell in rules"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    },
  ],
};
// ─────────────────────────────────────────────────

export default function Features() {
  return (
    <section className="bg-paper px-4 md:px-8 py-12 relative">
      <div 
        data-theme="dark" 
        className="bg-ink text-paper rounded-[2.5rem] md:rounded-[3rem] py-24 md:py-32 px-6 md:px-12 lg:px-20 mx-auto max-w-[1600px] font-body shadow-2xl relative"
      >
        <div className="max-w-[1400px] mx-auto relative">
          
          {/* Animated Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 md:mb-24 flex flex-col items-center text-center"
          >
            <span className="text-coral uppercase tracking-widest text-sm font-bold block mb-4">
              {content.overline}
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[4rem] leading-tight tracking-tight max-w-3xl">
              {content.heading}
            </h2>
          </motion.div>

          {/* Sticky Features List */}
          <div className="relative">
            {content.features.map((feature, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <div 
                  key={feature.id} 
                  className={`
                    sticky top-12 md:top-24 w-full bg-ink min-h-[85vh] md:min-h-[75vh] flex items-center py-12 md:py-16
                    ${index > 0 ? "border-t border-paper/5" : ""} 
                  `}
                  style={{ zIndex: index + 10 }}
                >
                  {/* Animated Inner Content */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }} // Triggers slightly later for dramatic effect as they scroll up
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full"
                  >
                    
                    {/* Image Column */}
                    <div 
                      className={`w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-square relative
                        ${isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Text Content Column */}
                    <div 
                      className={`flex flex-col justify-center 
                        ${isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
                    >
                      <span className="text-paper/40 uppercase tracking-widest text-xs font-bold mb-5 block">
                        FEATURE {feature.id}
                      </span>
                      
                      <h3 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6 text-white">
                        {feature.title}
                      </h3>
                      
                      <p className="text-paper/90 text-lg md:text-xl font-medium leading-relaxed mb-4">
                        {feature.desc1}
                      </p>
                      
                      <p className="text-paper/60 text-base md:text-lg leading-relaxed mb-10 max-w-[95%]">
                        {feature.desc2}
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-3">
                        {feature.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-4 py-2.5 rounded-full border border-paper/10 bg-[#1e1e19] text-paper/90 text-xs md:text-sm font-medium tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}