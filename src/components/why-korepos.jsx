import { motion } from "framer-motion";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "WHY KOREPOS",
  heading: "Everything's Built In, From Day One.",
  benefits: [
    {
      id: "01",
      title: "24/7 Support",
      description: "Round-The-Clock Human Help, Included As Standard.",
    },
    {
      id: "02",
      title: "Free Updates",
      description: "New Features Ship Automatically, At No Extra Cost.",
    },
    {
      id: "03",
      title: "Works Offline",
      description: "Keep Selling Even If The Connection Drops.",
    },
    {
      id: "04",
      title: "One Dashboard",
      description: "Run Every Channel And Site From A Single Login.",
    },
    {
      id: "05",
      title: "Bank-Grade Security",
      description: "PCI-DSS Compliant And End-To-End Encrypted.",
    },
    {
      id: "06",
      title: "Scales With You",
      description: "From One Location To Many. No Re-Platforming.",
    },
    {
      id: "07",
      title: "Open Integrations",
      description: "Connect Accounting, Delivery And Loyalty Tools.",
    },
    {
      id: "08",
      title: "Transparent Pricing",
      description: "One Clear Rate — No Hidden Fees, Ever.",
    },
  ],
};
// ─────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section data-theme="light" className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-coral uppercase tracking-widest text-sm font-bold block mb-4">
            {content.overline}
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] leading-tight tracking-tight text-ink max-w-3xl">
            {content.heading}
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {content.benefits.map((benefit, index) => {
            const isSeventhItem = index === 6;

            return (
              <motion.div
                key={benefit.id}
                // ANIMATION LOGIC:
                // We use the index to delay each card slightly so they stagger in one by one
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  delay: index * 0.1 // 0.1s delay between each card
                }}
                className={`
                  bg-white rounded-[2rem] p-8 md:p-10 border border-coral/15 shadow-sm
                  md:col-span-1 lg:col-span-2 
                  ${isSeventhItem ? "lg:col-start-2" : ""}
                  transition-transform duration-300 hover:-translate-y-1 hover:shadow-md
                `}
              >
                <span className="block font-body text-coral text-lg mb-4">
                  {benefit.id}
                </span>
                
                <h3 className="font-display font-bold text-2xl text-ink mb-3 leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="font-body text-ink/70 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}