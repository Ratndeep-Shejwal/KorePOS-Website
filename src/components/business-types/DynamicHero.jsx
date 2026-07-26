import { motion } from "framer-motion";
import Button from "../Button";

export default function DynamicHero({ content }) {
  if (!content) return null;

  return (
    <section className="bg-white pt-40 md:pt-48 w-full flex flex-col items-center font-body overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-coral uppercase tracking-[0.15em] text-sm md:text-base font-bold mb-6"
        >
          {content.overline}
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-display font-extrabold text-5xl md:text-[4.5rem] leading-[1.05] tracking-tight text-ink mb-6"
        >
          {content.heading}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-ink text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-4"
        >
          {content.subtext}
        </motion.p>

        {content.pricing && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-[#2D735C] text-lg md:text-xl font-bold mb-10"
          >
            {content.pricing}
          </motion.p>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button variant="primary">{content.primaryCta}</Button>
          <Button variant="secondary">{content.secondaryCta}</Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="w-full mt-16 md:mt-24 h-[500px] md:h-[750px] relative"
      >
        <img
          src={content.heroImage}
          alt={content.heading}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}