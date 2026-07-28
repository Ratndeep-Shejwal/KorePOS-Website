import { motion } from "framer-motion";

const content = {
  overline: "OUR STORY",
  heading: "Who We Are",
  paragraphs: [
    "KorePOS was created to solve a growing problem in hospitality and commerce: businesses were forced to rely on disconnected systems for payments, ordering, operations, reporting, bookings, and customer engagement.",
    "We believed merchants deserved something better. Instead of juggling multiple platforms, expensive integrations, hidden fees, and outdated software, we built one modern operating system designed specifically for how businesses operate today.",
    "KorePOS helps businesses simplify operations, accept payments seamlessly, manage bookings, track performance in real time, and grow revenue — all from a single connected platform."
  ],
  // Placeholder image matching the vibe of your screenshot
  image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200", 
};

// Animation variants for staggered text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function OurStory() {
  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-12 font-body overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* ── Left Column: Text Content ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          <motion.span 
            variants={itemVariants}
            className="text-coral uppercase tracking-widest text-sm font-bold mb-4 block"
          >
            {content.overline}
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight mb-8"
          >
            {content.heading}
          </motion.h2>
          
          <div className="flex flex-col gap-6">
            {content.paragraphs.map((text, idx) => (
              <motion.p 
                key={idx}
                variants={itemVariants}
                className="text-ink/80 text-lg md:text-xl leading-relaxed font-medium"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* ── Right Column: Image ── */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-sm">
            <img 
              src={content.image} 
              alt="KorePOS team in action" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}