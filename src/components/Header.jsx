import { useEffect, useRef, useState } from "react";
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
      { rootMargin: "-1px 0px -95% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";

  return (
    <header
      ref={headerRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-colors duration-300"
    >
      <div
        className={`flex items-center justify-between rounded-full border px-3 py-2 backdrop-blur-md transition-colors duration-300 ${
          isLight ? "bg-paper/90 border-ink/10" : "bg-ink/80 border-paper/10"
        }`}
      >
        <a href="#" className="flex items-center justify-center w-10 h-10">
          <img
            src={content.logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </a>

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

        <Button variant="primary">{content.cta.label}</Button>
      </div>
    </header>
  );
}
