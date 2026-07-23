import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Button from "../Button";

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  overline: "PRICING",
  heading: "Plans For Every Stage Of Growth",
  subtext:
    "Start free with Lite, run your full business on Pro, or talk to us for bespoke fees and features if you process £10,000+ per month.",
  plans: [
    {
      name: "KorePOS Lite",
      description:
        "Lightweight payment collection for pop-ups, stalls, exhibitions, and mobile businesses.",
      price: "£0",
      priceSuffix: "/month",
      perLocation: "per location",
      transactionFee: "1.2%* + 0p per transaction",
      features: [
        "Manual amount collection",
        "Tap to Pay",
        "Card payments",
        "Payment links",
        "Digital receipts",
        "Daily summaries",
        "Terminal pairing",
        "Hardware ordering",
      ],
      idealFor:
        "Ideal for: Pop-ups • Food trucks • Market stalls • Temporary vendors • Small traders",
      buttonLabel: "Get Started",
    },
    {
      name: "KorePOS Pro",
      badge: "MOST POPULAR",
      description:
        "The full hospitality operating system — restaurants, cafes, retail, activity centres, and multi-site groups.",
      price: "£169",
      priceSuffix: "/month",
      perLocation: "per location",
      transactionFee: "1.2%* + 0p per transaction",
      features: [
        "Full POS system",
        "Restaurant & retail workflows",
        "Table management & bookings",
        "Kitchen Display System",
        "QR ordering",
        "Activity & experience scheduling",
        "Inventory management",
        "Staff management",
      ],
      idealFor:
        "Ideal for: Restaurants • Cafes • Retail stores • Activity centres • Hospitality groups",
      buttonLabel: "Get Started",
    },
    {
      name: "Custom",
      description:
        "Get bespoke fees and flexible terms if your business processes £10,000 or more a month.",
      features: [
        "Tailored deals and features",
        "Bespoke transaction fees",
        "Customised product selection",
        "On-hand support",
      ],
      buttonLabel: "Talk To Sales",
    },
  ],
};
// ─────────────────────────────────────────────────

export default function Pricing() {
  return (
    <section data-theme="light" className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <span className="text-coral uppercase tracking-widest text-sm font-bold block mb-4">
            {content.overline}
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-ink mb-6">
            {content.heading}
          </h2>
          <p className="font-body text-lg md:text-xl text-ink/70 font-medium leading-relaxed max-w-3xl">
            {content.subtext}
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          {content.plans.map((plan, index) => {
            const borderClasses = index !== 2 ? "lg:border-r lg:border-ink/10 lg:pr-12" : "";
            const paddingClasses = index !== 0 ? "lg:pl-12" : "";
            const isCustomPlan = index === 2;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className={`flex flex-col ${borderClasses} ${paddingClasses}`}
              >
                
                {/* Plan Header */}
                <div className={`mb-6 flex items-center gap-3 ${isCustomPlan ? 'justify-center' : ''}`}>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="bg-coral text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className={`font-body text-sm text-ink/70 leading-relaxed mb-8 min-h-[60px] ${isCustomPlan ? 'text-center' : ''}`}>
                  {plan.description}
                </p>

                {/* Price Block */}
                {!isCustomPlan && (
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-display font-bold text-4xl text-coral">
                        {plan.price}
                      </span>
                      <span className="font-display font-bold text-xl text-coral">
                        {plan.priceSuffix}
                      </span>
                    </div>
                    <p className="font-body text-sm text-ink/60 mb-1">{plan.perLocation}</p>
                    <p className="font-body text-sm text-ink/80 font-medium">{plan.transactionFee}</p>
                  </div>
                )}

                {/* Custom Plan Button - Uses your global Button component */}
                {isCustomPlan && (
                  <div className="flex justify-center mb-8">
                    <Button variant="primary">
                      {plan.buttonLabel}
                    </Button>
                  </div>
                )}

                {/* Horizontal Divider */}
                <div className="w-full h-px bg-ink/10 mb-8" />

                {/* Features List */}
                <ul className="flex flex-col gap-4 flex-1 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} strokeWidth={3} className="text-coral shrink-0 mt-0.5" />
                      <span className="font-body text-sm font-medium text-ink/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For & Get Started Buttons */}
                {!isCustomPlan && (
                  <div className="mt-auto">
                    <p className="font-body text-xs text-ink/60 leading-relaxed mb-8 pr-4 min-h-[48px]">
                      {plan.idealFor}
                    </p>
                    <div>
                      {/* Hardcoded styling to ensure it is visible on the white background */}
                      <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-coral text-coral text-sm font-bold hover:bg-coral/5 transition-colors group">
                        {plan.buttonLabel}
                        <ArrowRight size={16} className="text-coral group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}