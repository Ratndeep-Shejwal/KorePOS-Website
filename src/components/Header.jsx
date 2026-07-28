import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Button from "./Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  logo: "/images/logo.png",
  brandName: "KorePOS", 
  navLinks: [
    { label: "About Us", href: "/about" },
    { 
      label: "Products", 
      href: "/#products",
      subLinks: [
        { label: "KorePOS Lite", href: "/korepos-lite" }, // Lite moved to first
        { label: "KorePOS Pro", href: "/korepos-pro" },
      ]
    },
    { 
      label: "Business Types", 
      href: "/#business-types",
      isMegaMenu: true,
      subLinks: [
        { label: "Activities & Escape Rooms", href: "/business-types/activity" },
        { label: "Bakeries & Sweet Shops", href: "/business-types/bakeries-and-sweet-shops" },
        { label: "Beauty Salons & Barbers", href: "/business-types/beauty-salons-and-barbers" },
        { label: "Cafés & Coffee Shops", href: "/business-types/cafes-and-coffee-shops" },
        { label: "Charity & Donations", href: "/business-types/charity-and-donations" },
        { label: "Cloud Kitchens", href: "/business-types/cloud-kitchens" },
        { label: "Event Organizers", href: "/business-types/event-organizers" },
        { label: "Festivals & Markets", href: "/business-types/festivals-and-markets" },
        { label: "Food Trucks", href: "/business-types/food-trucks" },
        { label: "Gardens & Nurseries", href: "/business-types/gardens-and-nurseries" },
        { label: "Grocery & Convenience", href: "/business-types/grocery-and-convenience-stores" },
        { label: "Gyms & Fitness Centers", href: "/business-types/gyms-and-fitness-centers" },
        { label: "Hotels & Resorts", href: "/business-types/hotels-and-resorts" },
        { label: "Juice Bars & Smoothies", href: "/business-types/juice-bars-and-smoothie-shops" },
        { label: "Mobile Services", href: "/business-types/mobile-service-businesses" },
        { label: "Restaurants", href: "/business-types/restaurants" },
        { label: "Retail Stores", href: "/business-types/retail-stores" },
        { label: "Stalls & Pop-ups", href: "/business-types/stalls-and-pop-up-shops" },
        { label: "Tour Operators", href: "/business-types/tour-operators" },
        { label: "Workshops & Classes", href: "/business-types/workshops-and-classes" },
        { label: "Others / Custom", href: "/business-types/others" },
      ]
    },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact Us", href: "/#contact" },
  ],
  cta: { label: "Book Demo", href: "/#book-demo" },
};
// ─────────────────────────────────────────────────

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
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
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isLight = isMobileMenuOpen ? false : theme === "light";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-colors duration-300"
      >
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2 backdrop-blur-md transition-colors duration-300 ${
            isLight ? "bg-paper/90 border-ink/10 shadow-sm" : "bg-ink/80 border-paper/10 shadow-xl"
          }`}
        >
          {/* Logo & Brand Name Container */}
          <a href="/" className="flex items-center gap-2.5 ml-1 group">
            <div className="w-9 h-9 flex items-center justify-center">
              <img
                src={content.logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span 
              className={`font-display font-extrabold text-xl tracking-tight transition-colors duration-300 ${
                isLight ? "text-ink" : "text-paper"
              }`}
            >
              {content.brandName}
            </span>
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
                    
                    <div 
                      className={`absolute top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300
                        ${link.isMegaMenu ? "left-1/2 -translate-x-1/2 w-[650px] lg:w-[850px]" : "left-0 w-56"}
                      `}
                    >
                      <div 
                        className={`bg-white rounded-2xl border border-ink/10 shadow-2xl overflow-hidden
                          ${link.isMegaMenu ? "p-6 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2" : "flex flex-col"}
                        `}
                      >
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className={`group/link flex items-center gap-2 text-sm font-medium text-ink hover:text-coral hover:bg-ink/5 transition-colors
                              ${link.isMegaMenu ? "px-3 py-2.5 rounded-lg" : "px-4 py-3"}
                            `}
                          >
                            <ChevronRight 
                              size={14} 
                              className="text-ink/20 group-hover/link:text-coral transition-colors shrink-0" 
                            />
                            <span className="truncate">{sub.label}</span>
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
                setOpenMobileDropdown(null);
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

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
          >
            {/* Changed from items-center to items-start for left alignment */}
            <nav className="flex flex-col items-start gap-6 w-full max-w-lg mx-auto">
              {content.navLinks.map((link, i) => {
                const isOpen = openMobileDropdown === link.label;

                return (
                  <div key={link.label} className="w-full flex flex-col items-start">
                    {link.subLinks ? (
                      <>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                          onClick={() => setOpenMobileDropdown(isOpen ? null : link.label)}
                          // Changed to justify-between w-full to push the chevron to the right edge
                          className={`font-display font-bold text-3xl transition-colors flex items-center justify-between w-full py-2 ${isOpen ? "text-coral" : "text-white"}`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown 
                            size={24} 
                            className={`transition-transform duration-300 ${isOpen ? "-rotate-180" : ""}`} 
                          />
                        </motion.button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden w-full"
                            >
                              <div 
                                // Added pl-4 to nicely indent the sublinks
                                className={`pt-4 pb-4 w-full 
                                  ${link.isMegaMenu 
                                    ? "grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 pl-4" 
                                    : "flex flex-col gap-5 items-start pl-4"
                                  }
                                `}
                              >
                                {link.subLinks.map((sub) => (
                                  <a
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={closeMobileMenu}
                                    // Removed justify-center and set to justify-start
                                    className={`group/link flex items-center gap-3 font-body font-medium text-white/70 hover:text-coral transition-colors w-full justify-start
                                      ${link.isMegaMenu ? "text-base" : "text-xl"}
                                    `}
                                  >
                                    <ChevronRight 
                                      size={18} 
                                      className="text-white/20 group-hover/link:text-coral transition-colors shrink-0" 
                                    />
                                    <span>{sub.label}</span>
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
                        onClick={closeMobileMenu}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                        className="font-display font-bold text-3xl text-white hover:text-coral transition-colors py-2 w-full text-left"
                      >
                        {link.label}
                      </motion.a>
                    )}
                  </div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: content.navLinks.length * 0.05, ease: "easeOut" }}
                // Left aligned the button wrapper and made it full width
                className="mt-8 w-full flex justify-start"
                onClick={closeMobileMenu}
              >
                <div className="w-240px sm:max-w-[240px]">
                   <Button variant="primary" className="w-full justify-center">
                     {content.cta.label}
                   </Button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}