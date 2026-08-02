import { motion } from "framer-motion";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "THE DIFFERENCE",
  heading: "Nothing's locked behind an upgrade",
  benefits: [
    {
      id: "01",
      title: "Support When You Need It",
      description: "Real humans, day or night, whenever something goes wrong.",
    },
    {
      id: "02",
      title: "Improvements, Automatically",
      description: "New features roll out to your account - no re-installs, no fees.",
    },
    {
      id: "03",
      title: "Never Miss a Sale",
      description: "Keep taking orders and payments even when your connection drops.",
    },
    {
      id: "04",
      title: "Everything in One Place",
      description: "One login covers every till, site, and sales channel you run.",
    },
    {
      id: "05",
      title: "Security You Don't Think About",
      description: "PCI-DSS compliant, fully encrypted, built to protect every transaction.",
    },
    {
      id: "06",
      title: "Room to Grow",
      description: "Add sites, staff, and tills without switching systems later.",
    },
    {
      id: "07",
      title: "Plays Well With Others",
      description: "Connect the accounting, delivery, and marketing tools you already use.",
    },
    {
      id: "08",
      title: "One Rate, No Surprises",
      description: "What you're quoted is what you pay - nothing buried in the small print.",
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