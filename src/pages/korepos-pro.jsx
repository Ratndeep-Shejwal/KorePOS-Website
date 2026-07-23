import Prohero from "../components/korepos-pro/hero";
import PaymentMethods from "../components/global/payment-methods";
import ProInfoCards from "../components/korepos-pro/about";
import ProFeatures from "../components/korepos-pro/profeatures";
import ProHowItWorks from "../components/korepos-pro/howItWorks";
import ProTechSpecs from "../components/korepos-pro/specs";
import CTASection from "../components/global/cta";
import Pricing from "../components/global/pricing";
import ProFAQ from "../components/korepos-pro/faq";

export default function KoreposPro() {
  return (
    <main>
      <Prohero />
      <PaymentMethods />
      <ProInfoCards />
      <ProFeatures />
      <ProHowItWorks />
      <ProTechSpecs />
      <CTASection />
      <Pricing />
      <ProFAQ />
    </main>
  );
}
