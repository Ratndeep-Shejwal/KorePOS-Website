import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

const content = {
  logo: "images/logo.png",
  navLinks: [
    { label: "About Us", href: "#about" },
    { 
      label: "Products", 
      href: "#products",
      subLinks: [
        { label: "KorePOS Pro", href: "/korepos-pro" },
        { label: "KorePOS Lite", href: "/korepos-lite" },
      ]
    },
    { label: "Business Types", href: "#business-types" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ],
  cta: { label: "Book Demo", href: "#book-demo" },
};

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const headerRef = useRef(null);

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
      { rootMargin: "-10% 0px -90% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Removed setMobileDropdownOpen(false) from here to fix the React warning
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isLight = isMobileMenuOpen ? false : theme === "light";

  // Helper function to close menu and dropdown cleanly
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-colors duration-300"
      >
        <div
          className={`flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur-md transition-colors duration-300 ${
            isLight ? "bg-paper/90 border-ink/10" : "bg-ink/80 border-paper/10"
          }`}
        >
          <a href="/" className="flex items-center justify-center w-10 h-10">
            <img
              src={content.logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {content.navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.subLinks ? (
                  <>
                    <button
                      className={`font-body font-medium text-sm transition-colors duration-300 flex items-center gap-1.5 py-2 ${
                        isLight
                          ? "text-ink hover:text-ink/70"
                          : "text-paper hover:text-paper/70"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:-rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="w-48 bg-white rounded-xl border border-ink/10 shadow-xl flex flex-col overflow-hidden">
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="px-4 py-3 text-sm font-medium text-ink hover:bg-ink/5 hover:text-coral transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`font-body font-medium text-sm transition-colors duration-300 py-2 block ${
                      isLight
                        ? "text-ink hover:text-ink/70"
                        : "text-paper hover:text-paper/70"
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button variant="primary">{content.cta.label}</Button>
            </div>
            
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setMobileDropdownOpen(false); // Reset dropdown on toggle
              }}
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg flex flex-col justify-center items-center px-6 overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-8 w-full py-20">
              {content.navLinks.map((link, i) => (
                <div key={link.label} className="w-full flex flex-col items-center">
                  {link.subLinks ? (
                    <>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="font-display font-bold text-3xl text-white hover:text-coral transition-colors flex items-center gap-2"
                      >
                        {link.label}
                        <ChevronDown 
                          size={24} 
                          className={`transition-transform duration-300 ${mobileDropdownOpen ? "-rotate-180" : ""}`} 
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col items-center gap-5 overflow-hidden w-full"
                          >
                            <div className="pt-6 pb-2 flex flex-col gap-5 items-center">
                              {link.subLinks.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={closeMobileMenu} // Uses helper function
                                  className="font-display font-medium text-xl text-white/70 hover:text-coral transition-colors"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={link.href}
                      onClick={closeMobileMenu} // Uses helper function
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                      className="font-display font-bold text-3xl text-white hover:text-coral transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  )}
                </div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: content.navLinks.length * 0.05, ease: "easeOut" }}
                className="mt-8 w-full max-w-[200px]"
                onClick={closeMobileMenu} // Uses helper function
              >
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