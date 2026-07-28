import { useEffect } from "react";
import AboutHero from "../components/about/hero";
import OurStory from "../components/about/ourStory";
import KPI from "../components/about/kpi";
import OurMission from "../components/about/ourMission";
import CTASection from "../components/global/cta";
import AboutFAQ from "../components/about/faq";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen w-full flex flex-col">
      <AboutHero />
      <OurStory />
      <KPI />
      <OurMission />
      <CTASection />
      <AboutFAQ />
    </main>
  );
}
