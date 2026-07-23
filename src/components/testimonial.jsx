import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const content = {
  overline: "The Outcome",
  heading: "The Numbers Behind The Calm",
  stats: [
    { value: 30, suffix: "%", label: "Faster Service At Peak" },
    { value: 21, suffix: "+", label: "Business Types" },
    { value: 99, suffix: "%", label: "Increased Order Rate" },
  ],
  testimonials: [
    {
      id: 1,
      quote: "We've Been Using Foodhub For Approximately 5 Years Now. The Reports Really Tell Us Where Our Revenue Is Coming From, And The Information Provided In The Reports Helps Us Project And Forecast Where We Want To Take The Business.",
      author: "KorePOS User",
      role: "Restaurant Name",
    },
    {
      id: 2,
      quote: "The interface is incredibly intuitive. Our staff picked it up in less than a day, and the kitchen display system has completely eliminated dropped orders during our Friday night rushes.",
      author: "Sarah Jenkins",
      role: "Bistro 101",
    },
    {
      id: 3,
      quote: "Moving to KorePOS was the best decision for our multi-site operation. Being able to update menus across three locations instantly from one dashboard saves me hours every week.",
      author: "David Chen",
      role: "The Daily Grind",
    },
  ],
};

function AnimatedNumber({ value, suffix }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, value, { 
        duration: 2, 
        ease: "easeOut",
        delay: 0.2 
      });
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="flex items-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function TestimonialsStats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-paper px-4 md:px-8 py-12 relative overflow-hidden">
      <div 
        data-theme="dark"
        className="relative bg-[#111111] text-paper rounded-[2.5rem] md:rounded-[3rem] py-16 md:py-24 px-8 md:px-16 lg:px-24 mx-auto max-w-[1400px] font-body shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-paper/60 text-sm font-semibold tracking-wide mb-4 block">
              {content.overline}
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-white mb-10 max-w-sm">
              {content.heading}
            </h2>

            <div className="flex flex-col">
              {content.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between py-6 ${
                    index !== 0 ? "border-t border-white/10" : "border-t border-white/10"
                  }`}
                >
                  <h3 className="font-display font-bold text-4xl md:text-5xl text-white">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-paper/80 font-medium text-sm md:text-base text-right max-w-[150px]">
                    {stat.label}
                  </p>
                </div>
              ))}
              <div className="border-t border-white/10 w-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 pb-16 md:pb-20 backdrop-blur-sm w-full min-h-[380px] flex flex-col">
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <p className="text-paper/90 text-lg md:text-xl leading-relaxed font-medium">
                    {content.testimonials[currentIndex].quote}
                  </p>
                  
                  <div className="mt-8">
                    <p className="text-white font-bold text-base">
                      {content.testimonials[currentIndex].author}
                    </p>
                    <p className="text-paper/50 text-sm mt-1">
                      {content.testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 right-8 md:right-12 flex gap-2">
                {content.testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? "bg-coral w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}