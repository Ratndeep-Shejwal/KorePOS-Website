import React, { useEffect } from "react";
import Hero from "../components/Hero";
import PaymentMethods from "../components/global/payment-methods";
import BusinessTypes from "../components/business-type";
import Features from "../components/features";
import WhyChooseUs from "../components/why-korepos";
import Pricing from "../components/global/pricing";
import TestimonialsStats from "../components/testimonial";
import FAQ from "../components/faq";
import CTASection from "../components/global/cta";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 bg-paper font-body">
      <Hero />
      <PaymentMethods />
      <BusinessTypes />
      <Features />
      <WhyChooseUs />
      <Pricing />
      <TestimonialsStats />
      <FAQ />
      <CTASection />
    </main>
  );
}