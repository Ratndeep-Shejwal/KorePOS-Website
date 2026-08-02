import { motion } from "framer-motion";

const content = {
  overline: "HOW IT WORKS",
  heading: "A tour of your new day-to-day",
  subheading:
    "From the first coffee order to the last table turn - here's what changes when everything runs on one system.",
  features: [
    {
      id: "01",
      title: "Get paid without the friction",
      desc1:
        "Every way your customers want to pay, working the moment you switch it on.",
      desc2:
        "Accept tap, chip, contactless and digital wallets straight from your phone or terminal. Funds settle fast, fees stay transparent, and every transaction is logged automatically - no manual reconciling at close.",
      tags: [
        "Tap to Pay on any phone",
        "Terminal & card machine support",
        "Payment links for remote orders",
        "Same-day settlement visibility",
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "02",
      title: "Turn tables faster, not harder",
      desc1:
        "A floor plan that tells you exactly what's happening, table by table.",
      desc2:
        "See who's seated, who's ordering, and who's ready to pay - all without walking the floor. Orders sync straight to the kitchen the moment they're placed, so nothing gets lost between the till and the pass.",
      tags: [
        "Live floor plan",
        "Dine-in, takeaway & delivery in one flow",
        "Split bills & merge tables",
        "Zero double-entry",
      ],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "03",
      title: "Kitchens that never fall behind",
      desc1:
        "Digital tickets that keep every station moving in the same direction.",
      desc2:
        "Orders route straight to grill, fry, or pass with prep times and allergy flags built in. Chefs bump tickets as they fire, so front-of-house always knows what's coming next - no printed dockets, no guesswork.",
      tags: [
        "Automatic station routing",
        "Built-in allergen alerts",
        "Real-time ticket timers",
        "No paper tickets",
      ],
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "04",
      title: "Numbers that actually tell you something",
      desc1:
        "Stop guessing what's working. See it, in real time.",
      desc2:
        "Track best-selling items, peak trading hours, and staff performance in one dashboard - updated live, not overnight. Spot what to push, what to cut, and where your margin is leaking, without opening a spreadsheet.",
      tags: [
        "Live sales dashboard",
        "Best & worst sellers",
        "Labour cost vs revenue",
        "Reports across every site",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "05",
      title: "A team that runs itself",
      desc1:
        "Give every team member exactly the access they need - no more, no less.",
      desc2:
        "Set roles for servers, chefs, and managers with PIN-locked permissions for discounts, voids, and refunds. Shift changes and handovers stay clean, with a full audit trail if you ever need to check back.",
      tags: [
        "Role-based staff access",
        "PIN-protected actions",
        "Shift & clock-in tracking",
        "Full audit history",
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "06",
      title: "Take the till anywhere",
      desc1:
        "Your whole system, not a stripped-down version of it, in your pocket.",
      desc2:
        "Take orders tableside, at a market stall, or queueing out the door - with the exact same menu, prices, and modifiers as your main counter. Keep selling even if the Wi-Fi drops.",
      tags: [
        "Full tableside ordering",
        "Works without internet",
        "One menu, every device",
        "Built for markets & events",
      ],
      image: "https://images.unsplash.com/photo-1580828369019-2238f6982885?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "07",
      title: "Let customers order their way",
      desc1:
        "Fewer staff running orders, more staff delivering great service.",
      desc2:
        "Guests scan a code, browse your live menu, and order straight from their table - no app download required. You control what gets auto-approved and what needs a nod from staff.",
      tags: [
        "Scan-to-order from any table",
        "Pay before food arrives",
        "Custom approval rules",
        "Fewer queues at peak",
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
    },
  ],
};

export default function Features() {
  return (
    <section id="features" className="bg-paper px-4 md:px-8 py-12 relative">
      <div 
        data-theme="dark" 
        className="bg-ink text-paper rounded-[2.5rem] md:rounded-[3rem] py-24 md:py-32 px-6 md:px-12 lg:px-20 mx-auto max-w-[1600px] font-body shadow-2xl relative"
      >
        <div className="max-w-[1400px] mx-auto relative">
          
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

          <div className="relative">
            {content.features.map((feature, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <div 
                  key={feature.id} 
                  className={`
                    relative md:sticky md:top-24 w-full bg-ink flex items-center py-12 md:py-16 md:min-h-[75vh]
                    ${index > 0 ? "border-t border-paper/5" : ""} 
                  `}
                  style={{ zIndex: index + 10 }}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }} 
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full"
                  >
                    
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