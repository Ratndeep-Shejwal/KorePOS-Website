import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const content = {
  logo: "/images/logo.png",
  socials: [
    { name: "Facebook", icon: FacebookIcon, href: "#" },
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "Twitter", icon: TwitterIcon, href: "#" },
  ],
  
  // Organized into distinct sections for the new grid layout
  companyLinks: [
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
    { label: "Book a Demo", href: "#book-demo" },
  ],
  productLinks: [
    { label: "KorePOS Pro", href: "/korepos-pro" },
    { label: "KorePOS Lite", href: "/korepos-lite" },
  ],
  businessTypeLinks: [
    { label: "Activities & Escapes", href: "/business-types/activity" },
    { label: "Bakeries & Sweets", href: "/business-types/bakeries-and-sweet-shops" },
    { label: "Beauty & Barbers", href: "/business-types/beauty-salons-and-barbers" },
    { label: "Cafés & Coffee", href: "/business-types/cafes-and-coffee-shops" },
    { label: "Charity & Donations", href: "/business-types/charity-and-donations" },
    { label: "Cloud Kitchens", href: "/business-types/cloud-kitchens" },
    { label: "Event Organizers", href: "/business-types/event-organizers" },
    { label: "Festivals & Markets", href: "/business-types/festivals-and-markets" },
    { label: "Food Trucks", href: "/business-types/food-trucks" },
    { label: "Gardens & Nurseries", href: "/business-types/gardens-and-nurseries" },
    { label: "Grocery Stores", href: "/business-types/grocery-and-convenience-stores" },
    { label: "Gyms & Fitness", href: "/business-types/gyms-and-fitness-centers" },
    { label: "Hotels & Resorts", href: "/business-types/hotels-and-resorts" },
    { label: "Juice Bars", href: "/business-types/juice-bars-and-smoothie-shops" },
    { label: "Mobile Services", href: "/business-types/mobile-service-businesses" },
    { label: "Restaurants", href: "/business-types/restaurants" },
    { label: "Retail Stores", href: "/business-types/retail-stores" },
    { label: "Stalls & Pop-ups", href: "/business-types/stalls-and-pop-up-shops" },
    { label: "Tour Operators", href: "/business-types/tour-operators" },
    { label: "Workshops & Classes", href: "/business-types/workshops-and-classes" },
    { label: "Others / Custom", href: "/business-types/others" },
  ],
  contact: [
    { icon: Phone, text: "(704) 555-0127" },
    { icon: Mail, text: "hello@korepos.com" },
    { icon: MapPin, text: "2118 Thornridge Cir. Syracuse, Connecticut 35624" },
    { icon: Clock, text: "Monday - Saturday\n9AM - 10PM" },
  ],
  bottomText:
    "KorePOS is a leading provider of point-of-sale systems, empowering businesses across hospitality, retail, and services. Our all-in-one platform combines payment processing, inventory management, and customer loyalty into one seamless operating system.",
  copyright: "© 2026 KorePOS. All Rights Reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Merchant Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white font-body pt-16 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <img src={content.logo} alt="KorePOS Logo" className="h-10 w-10 object-contain" />
            <span className="font-display font-extrabold text-3xl text-ink tracking-tight">KorePOS</span>
          </div>

          <div className="flex items-center gap-3">
            {content.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex items-center justify-center w-10 h-10 border border-ink/10 rounded bg-white text-ink/70 hover:bg-ink/5 hover:text-ink transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-ink/10 mb-12" />

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-ink text-base mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {content.companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ink/60 hover:text-coral transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-ink text-base mb-6">Products</h4>
            <ul className="flex flex-col gap-4">
              {content.productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ink/60 hover:text-coral transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Types Multi-Column (5 cols) */}
          <div className="lg:col-span-5 md:col-span-2">
            <h4 className="font-bold text-ink text-base mb-6">Business Types</h4>
            {/* Creates a 3-column sub-grid specifically for the 21 links */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
              {content.businessTypeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ink/60 hover:text-coral transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (3 cols) */}
          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="font-bold text-ink text-base mb-6">Contact</h4>
            <ul className="flex flex-col gap-6">
              {content.contact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm text-ink/70 leading-relaxed">
                  <item.icon size={20} strokeWidth={2} className="text-ink/70 shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="w-full h-px bg-ink/10 mb-8" />

        {/* Footer Bottom */}
        <p className="text-sm text-ink/50 leading-relaxed mb-8 max-w-5xl">
          {content.bottomText}
        </p>

        <div className="w-full h-px bg-ink/10 mb-8" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-sm text-ink/60 text-center lg:text-left">
            <span>{content.copyright}</span>
          </div>

          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {content.legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-ink/60 hover:text-coral transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}