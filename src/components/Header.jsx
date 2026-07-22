import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  logo: "images/logo.png",
  navLinks: [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Business Types", href: "#business-types" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ],
  cta: { label: "Book Demo", href: "#book-demo" },
};
// ─────────────────────────────────────────────────

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // 1. Intersection Observer for theme switching
  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(entry.target.getAttribute("data-theme"));
          }
        });
      },
      // Tripwire line at 10% from the top
      { rootMargin: "-10% 0px -90% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  // 2. Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // If the mobile menu is open, force the header to dark mode so the X button is visible against the dark overlay
  const isLight = isMobileMenuOpen ? false : theme === "light";

  return (
    <>
      {/* ── HEADER PILL ── */}
      <header
        ref={headerRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-colors duration-300"
      >
        <div
          className={`flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur-md transition-colors duration-300 ${
            isLight ? "bg-paper/90 border-ink/10" : "bg-ink/80 border-paper/10"
          }`}
        >
          {/* Logo (Restored exactly as requested) */}
          <a href="#" className="flex items-center justify-center w-10 h-10">
            <img
              src={content.logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {content.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-body font-medium text-sm transition-colors duration-300 ${
                  isLight
                    ? "text-ink hover:text-ink/70"
                    : "text-paper hover:text-paper/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button variant="primary">{content.cta.label}</Button>
            </div>
            
            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isLight ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU FULLSCREEN OVERLAY ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full">
              {content.navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  className="font-display font-bold text-3xl text-white hover:text-coral transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: content.navLinks.length * 0.05, ease: "easeOut" }}
                className="mt-8 w-full max-w-[200px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Reusing your global button */}
                <div className="w-full flex justify-center">
                   <Button variant="primary">{content.cta.label}</Button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}