import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  // Swap this URL with your actual background image path
  bgImage: "/images/cta-img.png",
  headingLine1: "Supercharge Your",
  headingLine2: "Business With KorePOS",
  primaryCta: "Book Demo",
  secondaryCta: "View Pricing",
};
// ─────────────────────────────────────────────────

export default function CTASection() {
  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${content.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        <h2 
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-10 [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.6),_0_2px_4px_rgb(0_0_0_/_0.8)]"
        >
          <span className="block">{content.headingLine1}</span>
          <span className="block">{content.headingLine2}</span>
        </h2>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Contact Page Link */}
          <Link to="/contact" className="w-full sm:w-auto block">
            <Button variant="primary">
              {content.primaryCta}
            </Button>
          </Link>

          {/* Homepage Pricing Scroll Anchor */}
          <a href="#pricing" className="w-full sm:w-auto block">
            <Button variant="secondary">
              {content.secondaryCta}
            </Button>
          </a>
        </div>
      </motion.div>
      
    </section>
  );
}