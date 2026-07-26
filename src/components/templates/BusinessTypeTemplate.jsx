import { useParams } from "react-router-dom";

import { businessData } from "../business-types/businessData";
import DynamicHero from "../business-types/DynamicHero";
import DynamicStickyFeatures from "../business-types/DynamicStickyFeatures"; // NEW
import PaymentMethods from "../global/payment-methods";
import Pricing from "../global/pricing";
import TestimonialsStats from "../testimonial";
import DynamicExploreTypes from '../business-types/DynamicExploreTypes';
import DynamicFAQ from "../business-types/DynamicFaq";

export default function BusinessTypeTemplate() {
  const { slug } = useParams();
  const data = businessData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center font-display text-3xl">
        Page not found
      </div>
    );
  }

  return (
    <main>
      <DynamicHero content={data} />
      <PaymentMethods />
      <DynamicStickyFeatures content={data.stickyFeatures} />
      <Pricing />
      <TestimonialsStats />
      <DynamicExploreTypes currentSlug={slug} />
      <DynamicFAQ content={data.faqData} />
    </main>
  );
}
