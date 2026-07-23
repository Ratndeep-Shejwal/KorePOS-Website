import { motion } from 'framer-motion'
import Button from './Button'

const content = {
  graphicImage: 'images/hero-img.png',
  badge: 'Pay as Little as 0.39% per Transaction*',
  headingLine1: 'Run your entire business',
  headingLine2: 'on one system',
  subtext:
    'POS, Payments, Bookings, QR Ordering, Kitchen Displays and Analytics — all in one operating system.',
  primaryCta: 'Book Demo',
  secondaryCta: 'Start Free',
}

export default function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative w-full h-screen flex items-center overflow-hidden bg-[#111111]"
    >
      {/* ── Ambient Glow Background Effects ── */}
      {/* Top Right Coral Glow */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-coral/25 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Bottom Left Green Glow */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#1a4736]/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Area */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-coral" />
            <span className="text-sm font-body font-medium text-paper">{content.badge}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight text-paper mb-2"
          >
            {content.headingLine1}
          </motion.h1>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-display font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight text-coral mb-6"
          >
            {content.headingLine2}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="font-body text-lg text-paper/70 max-w-md mb-10"
          >
            {content.subtext}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <Button variant="primary">{content.primaryCta}</Button>
            <Button variant="secondary">{content.secondaryCta}</Button>
          </motion.div>
        </div>

        {/* Right Graphic Area */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="hidden md:flex justify-center items-center"
        >
          <img 
            src={content.graphicImage} 
            alt="Product dashboard preview" 
            className="w-full max-w-lg object-contain" 
          />
        </motion.div>
        
      </div>
    </section>
  )
}