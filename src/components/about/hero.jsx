import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button"; 

export default function AboutHero() {
  const imageContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"], 
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section className="bg-white pt-40 md:pt-48 pb-12 w-full flex flex-col items-center font-body overflow-hidden" data-theme="light">
      
      {/* ── Text Content ── */}
      <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center text-center z-10 relative mb-16 md:mb-24">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-coral uppercase tracking-[0.15em] text-sm md:text-base font-bold mb-6 block"
        >
          About KorePOS
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-ink mb-8"
        >
          Built for modern <br />
          <span className="text-[#2D735C]">businesses that deserve better.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-ink text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-4xl"
        >
          KorePOS is the UK hospitality operating system that unifies POS, payments, bookings, kitchen displays, and analytics in one platform — built by GetsMotives Ltd for restaurants, cafes, retail, and experience-led businesses.
          <br /><br />
          We help operators replace disconnected tills, payment tools, and reporting with one calm, premium workspace designed for how venues run today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button variant="primary">Book A Demo</Button>
          <Button variant="secondary">Start Free</Button>
        </motion.div>
      </div>

      {/* ── Scroll-Scaling Image Container ── */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full max-w-[1400px] mx-auto px-4 md:px-8"
      >
        <div 
          ref={imageContainerRef}
          className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
            alt="KorePOS hardware and software in use across various businesses"
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </div>
      </motion.div>

    </section>
  );
}