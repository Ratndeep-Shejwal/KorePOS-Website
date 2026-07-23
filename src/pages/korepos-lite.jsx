import LiteHero from "../components/korepos-lite/hero";
import PaymentMethods from "../components/global/payment-methods";
import LiteInfoCards from "../components/korepos-lite/about";
import LiteFeatures from "../components/korepos-lite/liteFeatures";
import LiteHowItWorks from "../components/korepos-lite/howItWorks";
import TechSpecs from "../components/korepos-lite/specs";
import CTASection from "../components/global/cta";
import Pricing from "../components/global/pricing";
import FAQ from "../components/korepos-lite/faq";

export default function KoreposLite() {
  return (
    <main>
      <LiteHero />
      <PaymentMethods />
      <LiteInfoCards />
      <LiteFeatures />
      <LiteHowItWorks />
      <TechSpecs />
      <CTASection />
      <Pricing />
      <FAQ />
    </main>
  );
}
