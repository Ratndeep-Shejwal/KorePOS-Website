import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { businessData } from "../business-types/businessData";
import { fetchBusinessTypes } from "../utils/api"; 
import DynamicHero from "../business-types/DynamicHero";
import DynamicStickyFeatures from "../business-types/DynamicStickyFeatures"; 
import PaymentMethods from "../global/payment-methods";
import Pricing from "../global/pricing";
import TestimonialsStats from "../testimonial";
import DynamicExploreTypes from '../business-types/DynamicExploreTypes';
import DynamicFAQ from "../business-types/DynamicFaq";

// Smart Matcher: Connects dynamic API slugs to your static FAQ/Features dictionary
const getStaticData = (slug) => {
  if (businessData[slug]) return businessData[slug];

  const text = String(slug).toLowerCase();
  if (text.includes("cafe") || text.includes("coffee")) return businessData["cafes-and-coffee-shops"];
  if (text.includes("baker") || text.includes("sweet")) return businessData["bakeries-and-sweet-shops"];
  if (text.includes("salon") || text.includes("barber") || text.includes("beauty")) return businessData["beauty-salons-and-barbers"];
  if (text.includes("activit") || text.includes("escape") || text.includes("bar") || text.includes("nightclub")) return businessData["activity"];
  if (text.includes("charity") || text.includes("donation")) return businessData["charity-and-donations"];
  if (text.includes("cloud") || text.includes("kitchen")) return businessData["cloud-kitchens"];
  if (text.includes("event") || text.includes("exhibition")) return businessData["event-organizers"];
  if (text.includes("festival") || text.includes("market")) return businessData["festivals-and-markets"];
  if (text.includes("food") && text.includes("truck")) return businessData["food-trucks"];
  if (text.includes("garden") || text.includes("nurser")) return businessData["gardens-and-nurseries"];
  if (text.includes("grocer") || text.includes("convenience")) return businessData["grocery-and-convenience-stores"];
  if (text.includes("gym") || text.includes("fitness")) return businessData["gyms-and-fitness-centers"];
  if (text.includes("hotel") || text.includes("resort")) return businessData["hotels-and-resorts"];
  if (text.includes("juice") || text.includes("smoothie")) return businessData["juice-bars-and-smoothie-shops"];
  if (text.includes("mobile") || text.includes("service")) return businessData["mobile-service-businesses"];
  if (text.includes("restaurant") || text.includes("dine")) return businessData["restaurants"];
  if (text.includes("retail") || text.includes("boutique")) return businessData["retail-stores"];
  if (text.includes("stall") || text.includes("pop-up")) return businessData["stalls-and-pop-up-shops"];
  if (text.includes("tour")) return businessData["tour-operators"];
  if (text.includes("workshop") || text.includes("class")) return businessData["workshops-and-classes"];

  return businessData["others"];
};

export default function BusinessTypeTemplate() {
  const { slug } = useParams();
  const normalizedSlug = String(slug || "").toLowerCase().trim();

  // 1. Compute initial static data immediately based on the current slug
  const [pageData, setPageData] = useState(() => getStaticData(normalizedSlug));

  useEffect(() => {
    window.scrollTo(0, 0);

    // 2. Immediately update base static data when `normalizedSlug` changes
    const baseData = getStaticData(normalizedSlug);
    setPageData(baseData);

    // 3. Fetch live API data to override the Hero section dynamically
    fetchBusinessTypes().then((apiItems) => {
      if (apiItems && apiItems.length > 0) {
        const matchedApiItem = apiItems.find((item) => {
          const itemSlug = String(item.slug || item.name || "").toLowerCase().trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return itemSlug === normalizedSlug;
        });
        
        if (matchedApiItem) {
          setPageData((prevData) => ({
            ...prevData,
            heading: matchedApiItem.name,
            subtext: matchedApiItem.description,
            heroImage: matchedApiItem.image,
            cardTitle: matchedApiItem.name
          }));
        }
      }
    });
  }, [normalizedSlug]); // <--- CRITICAL: Triggers every time the slug updates!

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center font-display text-3xl">
        Page not found
      </div>
    );
  }

  return (
    <main>
      <DynamicHero content={pageData} />
      <PaymentMethods />
      <DynamicStickyFeatures content={pageData.stickyFeatures} />
      <Pricing />
      <TestimonialsStats />
      <DynamicExploreTypes currentSlug={slug} />
      <DynamicFAQ content={pageData.faqData} />
    </main>
  );
}