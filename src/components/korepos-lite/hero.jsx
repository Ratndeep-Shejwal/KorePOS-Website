import { motion } from "framer-motion";
import { Play, Smartphone, ShieldCheck, Wifi } from "lucide-react";
import Button from "../Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "KOREPOS LITE",
  headingLine1: "Collect payments",
  headingLine2: "in minutes.",
  subtext: "£0/month per location • 1.2%* + 0p per transaction. Lightweight, mobile-first, built for speed.",
  ctaPrimary: "Book A Demo",
  ctaSecondary: "Start Free",
  
  // Replace these with your actual assets
  mediaImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200", 
  mediaVideo: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video URL
  
  features: [
    { icon: Smartphone, title: "No extra hardware", desc: "Use your existing Android phone." },
    { icon: ShieldCheck, title: "Secure payments", desc: "End-to-end encryption and fraud protection." },
    { icon: Wifi, title: "Tap, pay, done", desc: "Fast, seamless and customer friendly." },
  ]
};
// ─────────────────────────────────────────────────

export default function LiteHero() {
  return (
    <section className="bg-white pt-40 pb-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ── Text Content ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-coral uppercase tracking-[0.2em] text-sm font-bold block mb-6">
            {content.overline}
          </span>
          
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
            <span className="block text-ink">{content.headingLine1}</span>
            <span className="block text-[#2D735C]">{content.headingLine2}</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-ink/80 font-medium max-w-2xl mb-10">
            {content.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary">
              {content.ctaPrimary}
            </Button>
            
            <button className="inline-flex items-center justify-center cursor-pointer px-8 py-3 rounded-full border border-coral text-coral text-sm font-bold hover:bg-coral/5 transition-colors">
              {content.ctaSecondary}
            </button>
          </div>
        </motion.div>

        {/* ── Media/Video Grid ── */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-stretch gap-4 md:gap-6 max-w-[1200px] mx-auto h-[350px] md:h-[500px]"
        >
          {[0, 1, 2].map((index) => {
            const isCenter = index === 1;
            
            return (
              <div 
                key={index}
                className={`relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 ${
                  isCenter ? "w-full md:w-[45%] z-10 scale-100" : "hidden md:block w-[27.5%] opacity-80 scale-95"
                }`}
              >
                {/* Render Video for Center, Image for Sides */}
                {isCenter ? (
                  <video 
                    src={content.mediaVideo}
                    poster={content.mediaImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={content.mediaImage} 
                    alt="KorePOS Mobile Interface" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                
                {/* Gradient Overlay for bottom text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Center Play Button Overlay (Optional: You can remove this if you want the video to just play silently without the red button blocking it) */}
                {isCenter && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 bg-[#E34032] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(227,64,50,0.5)]">
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Bottom Features Bar */}
                <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between gap-4 z-20">
                  {content.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 max-w-[30%]">
                      <div className="p-1.5 border border-white/20 rounded-md shrink-0">
                        <feature.icon size={14} className="text-[#F5A623]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-[10px] md:text-xs font-bold leading-tight">
                          {feature.title}
                        </span>
                        <span className="text-white/60 text-[8px] md:text-[10px] leading-tight hidden xl:block mt-0.5">
                          {feature.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}