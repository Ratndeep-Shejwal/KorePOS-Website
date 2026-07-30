import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import './App.css';

// ── GLOBAL COMPONENTS ─────────────────────────────
import Header from './components/Header';
import Footer from './components/footer';

// ── PAGES ─────────────────────────────────────────
import Home from './pages/Home';
import KoreposLite from './pages/korepos-lite';
import KoreposPro from './pages/korepos-pro';
import BusinessTypeTemplate from './components/templates/BusinessTypeTemplate';
import About from './pages/About';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsAndConditions from './pages/legal/TermsAndConditions';
import CookiePolicy from './pages/legal/CookiePolicy';
import MerchantTerms from './pages/legal/MerchantTerms';
import PricingAndBilling from './pages/legal/PricingAndBilling';
import RefundAndCancellation from './pages/legal/RefundAndCancellation';
import PaymentTerms from './pages/legal/PaymentTerms';
import AcceptableUsePolicy from './pages/legal/AcceptableUsePolicy';
import DataProcessingAgreement from './pages/legal/DataProcessingAgreement';
import AmlKycPolicy from './pages/legal/AmlKycPolicy';
import HardwareAgreement from './pages/legal/HardwareAgreement';
import SecurityPolicy from './pages/legal/SecurityPolicy';
import ServiceLevelAgreement from './pages/legal/ServiceLevelAgreement';
import PartnerAffiliateTerms from './pages/legal/PartnerAffiliateTerms';
import LegalHub from './pages/legal/LegalHub';
import ContactUs from './pages/ContactUs';
import AllBusinessTypes from './pages/AllBusinessTypes';

// ── SCROLL HANDLER ────────────────────────────────
// This handles routing to hashes (e.g. /#pricing) and scrolling to top on page change
function ScrollHandler() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis(); // Grab the Lenis instance

  useEffect(() => {
    if (hash) {
      // Small timeout to allow the new page component to render completely
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          if (lenis) {
            // Use Lenis for buttery smooth scrolling, offset accounts for your sticky header
            lenis.scrollTo(element, { offset: -100, duration: 1.5 });
          } else {
            // Fallback just in case
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      // If there is no hash, snap directly to the top of the new page
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, lenis]);

  return null; // This component doesn't render any UI
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <BrowserRouter>
        {/* ScrollHandler must sit inside BrowserRouter to read the current URL */}
        <ScrollHandler />
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="korepos-lite" element={<KoreposLite />}/>
          <Route path="korepos-pro" element={<KoreposPro />}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/business-types/:slug" element={<BusinessTypeTemplate />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-types" element={<AllBusinessTypes />} />

          {/* ── LEGAL ROUTES ──────────────────────────────── */}
          <Route path="/legal">
            <Route index element={<LegalHub />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="merchant-terms" element={<MerchantTerms />} />
            <Route path="pricing-and-billing" element={<PricingAndBilling />} />
            <Route path="refund-and-cancellation" element={<RefundAndCancellation />} />
            <Route path="payment-terms" element={<PaymentTerms />} />
            <Route path="acceptable-use-policy" element={<AcceptableUsePolicy />} />
            <Route path="data-processing-agreement" element={<DataProcessingAgreement />} />
            <Route path="aml-kyc" element={<AmlKycPolicy />} />
            <Route path="hardware-agreement" element={<HardwareAgreement />} />
            <Route path="security-policy" element={<SecurityPolicy />} />
            <Route path="service-level-agreement" element={<ServiceLevelAgreement />} />
            <Route path="partner-affiliate-terms" element={<PartnerAffiliateTerms />} />
          </Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;