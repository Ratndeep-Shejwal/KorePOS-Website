import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export default function ContactUs() {
  // Ensure page scrolls to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    businessName: "",
    businessType: "",
    monthlyRevenue: "",
    numberOfLocations: "",
    country: "",
    lookingFor: "",
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://pos.getsmotives.com/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          businessEmail: "",
          phoneNumber: "",
          businessName: "",
          businessType: "",
          monthlyRevenue: "",
          numberOfLocations: "",
          country: "",
          lookingFor: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <main className="flex-1 bg-paper font-body pt-32 pb-24 min-h-screen">
      
      {/* ── HERO & FORM SECTION ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 pt-4">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 font-semibold">
              Contact KorePOS
            </p>
            <h1 className="font-display font-extrabold text-5xl md:text-[4rem] leading-[1.05] tracking-tight text-ink mb-6">
              Talk to the team building the future of commerce.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-ink/70 mb-12 font-medium">
              Whether you run a restaurant, retail store, experience business, or multi-location operation, our team helps you launch faster with payments, POS, bookings, and business operations in one platform.
            </p>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-coral/10 text-coral shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-ink/80 font-medium text-lg">Usually replies within 1 business day</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-coral/10 text-coral shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-ink/80 font-medium text-lg">UK-based onboarding support</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-coral/10 text-coral shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-ink/80 font-medium text-lg">Payment & POS specialists</span>
              </li>
            </ul>
          </div>

          {/* Right Form Card */}
          <div id="contact-form" className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink/5">
            <h2 className="font-display font-bold text-3xl tracking-tight text-ink mb-3">
              Request your demo
            </h2>
            <p className="text-base text-ink/60 mb-8 font-medium">
              Tell us about your business — we'll tailor the walkthrough to your operations.
            </p>
            
            <div className="h-px w-full bg-ink/5 mb-8" />

            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50 p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 className="text-emerald-700 font-display font-bold text-2xl mb-3">Request Submitted!</h3>
                <p className="text-ink/70 text-base mb-8">Thank you for reaching out. Our team will get back to you within 1 business day.</p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="text-sm font-semibold text-coral hover:text-coral/80 transition-colors"
                >
                  Submit another request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600 text-sm mb-6 font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-ink/80">Full name</label>
                    <input required id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessEmail" className="text-sm font-bold text-ink/80">Business email</label>
                    <input required type="email" id="businessEmail" name="businessEmail" value={formData.businessEmail} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phoneNumber" className="text-sm font-bold text-ink/80">Phone number</label>
                    <input required type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="businessName" className="text-sm font-bold text-ink/80">Business name</label>
                    <input required id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="businessType" className="text-sm font-bold text-ink/80">Business type</label>
                    <select required id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Select business type</option>
                      <option value="Activity">Activity & Entertainment</option>
                      <option value="Bakeries & Sweet Shops">Bakeries & Sweet Shops</option>
                      <option value="Beauty Salons & Barbers">Beauty Salons & Barbers</option>
                      <option value="Cafés & Coffee Shops">Cafés & Coffee Shops</option>
                      <option value="Cloud Kitchens">Cloud Kitchens</option>
                      <option value="Event Organizers">Event Organizers</option>
                      <option value="Food Trucks">Food Trucks</option>
                      <option value="Grocery & Convenience">Grocery & Convenience</option>
                      <option value="Gyms & Fitness Centers">Gyms & Fitness Centers</option>
                      <option value="Hotels & Resorts">Hotels & Resorts</option>
                      <option value="Restaurants">Restaurants</option>
                      <option value="Retail Stores">Retail Stores</option>
                      <option value="Tour Operators">Tour Operators</option>
                      <option value="Others">Other / Custom</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="monthlyRevenue" className="text-sm font-bold text-ink/80">Monthly revenue</label>
                    <select required id="monthlyRevenue" name="monthlyRevenue" value={formData.monthlyRevenue} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Monthly revenue</option>
                      <option value="Under £10k">Under £10k</option>
                      <option value="£10k – £50k">£10k – £50k</option>
                      <option value="£50k – £200k">£50k – £200k</option>
                      <option value="£200k – £500k">£200k – £500k</option>
                      <option value="£500k+">£500k+</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="numberOfLocations" className="text-sm font-bold text-ink/80">Locations</label>
                    <input required type="number" min="1" id="numberOfLocations" name="numberOfLocations" value={formData.numberOfLocations} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="country" className="text-sm font-bold text-ink/80">Country</label>
                    <select required id="country" name="country" value={formData.country} onChange={handleChange} 
                      className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Select country</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Ireland">Ireland</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="lookingFor" className="text-sm font-bold text-ink/80">What are you looking for?</label>
                  <select required id="lookingFor" name="lookingFor" value={formData.lookingFor} onChange={handleChange} 
                    className="h-[52px] w-full bg-paper/50 border border-ink/10 rounded-xl px-4 text-ink font-medium focus:border-coral focus:ring-1 focus:ring-coral focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="">What are you looking for?</option>
                    <option value="POS System">POS System</option>
                    <option value="Tap to Pay">Tap to Pay</option>
                    <option value="Bookings">Bookings</option>
                    <option value="QR Ordering">QR Ordering</option>
                    <option value="Payment Processing">Payment Processing</option>
                    <option value="Multi-location Setup">Multi-location Setup</option>
                    <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="bg-[#FF5A3D] text-white font-bold text-lg h-[56px] rounded-xl px-8 hover:bg-[#E0482D] transition-colors w-full disabled:opacity-70 shadow-lg shadow-coral/20"
                  >
                    {status === "loading" ? "Submitting..." : "Request demo"}
                  </button>
                  <p className="mt-5 text-xs font-medium text-ink/40 text-center">
                    By submitting, you agree we may contact you about KorePOS. We never sell your data.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── ONBOARDING STEPS ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-24 border-t border-ink/10">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold">
            Onboarding
          </p>
          <h2 className="font-display font-extrabold text-4xl tracking-tight text-ink md:text-5xl mb-6">
            What happens next?
          </h2>
          <p className="text-xl leading-relaxed text-ink/70 font-medium">
            A clear path from first conversation to launch — so you always know the next step.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { step: "01", title: "Discovery call", desc: "We learn your venues, volume, and goals — no generic pitch." },
            { step: "02", title: "Product walkthrough", desc: "See POS, payments, bookings, and ops mapped to your workflows." },
            { step: "03", title: "Payment review", desc: "Rates, settlement, Tap to Pay, and hardware options clarified." },
            { step: "04", title: "Demo access", desc: "Hands-on access tailored to your menu, catalog, or experiences." },
            { step: "05", title: "Launch support", desc: "Onboarding, staff training, and go-live assistance from our UK team." }
          ].map((item, idx) => (
            <li key={idx} className="bg-white rounded-[24px] border border-ink/5 p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <span className="font-mono text-lg font-bold text-coral mb-6">{item.step}</span>
              <h3 className="font-display font-bold text-xl text-ink mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70 font-medium">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── OTHER WAYS TO REACH US ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-12">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold">
            Get in touch
          </p>
          <h2 className="font-display font-extrabold text-4xl tracking-tight text-ink md:text-5xl mb-12">
            Other ways to reach us
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Sales & demos", email: "support@korepos.co.uk", desc: "Book a walkthrough or discuss pricing for your business." },
            { label: "Partnerships", email: "info@korepos.co.uk", desc: "Integrations, referrals, and strategic collaboration." },
            { label: "Support", email: "support@korepos.co.uk", desc: "Existing customers — billing, setup, and product help." }
          ].map((contact, idx) => (
            <div key={idx} className="bg-white rounded-[24px] border border-ink/5 p-8 flex flex-col hover:border-coral/30 hover:shadow-md transition-all group">
              <p className="font-mono text-xs uppercase tracking-widest text-ink/40 font-bold mb-6">{contact.label}</p>
              <a href={`mailto:${contact.email}`} className="font-display font-bold text-2xl text-ink group-hover:text-coral transition-colors mb-4">
                {contact.email}
              </a>
              <p className="text-base leading-relaxed text-ink/70 font-medium">{contact.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-[24px] border border-ink/5 p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink/40 font-bold mb-3">Registered office</p>
            <p className="text-base text-ink/80 font-medium leading-relaxed">
              GetsMotives Ltd · Company no. 16846219<br />
              Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom
            </p>
          </div>
          <a href="#contact-form" className="text-sm font-bold text-coral hover:text-coral/80 transition-colors flex items-center gap-2">
            Schedule a demo <span className="text-xl">↑</span>
          </a>
        </div>
      </section>

    </main>
  );
}