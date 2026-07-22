import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'
import PaymentMethods from './components/payment-methods'
import BusinessTypes from './components/business-types'
import Features from './components/features'
import WhyChooseUs from './components/why-korepos'
import TestimonialsStats from './components/testimonial'
import CTASection from './components/cta'
import Pricing from './components/pricing'
import FAQ from './components/faq'
import Footer from './components/footer'

function App() {
  return (
    // The root prop applies the smooth scroll globally to the window
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <Header />
      <Hero />
      <PaymentMethods />
      <BusinessTypes />
      <Features />
      <WhyChooseUs />
      <TestimonialsStats />
      <CTASection />
      <Pricing />
      <FAQ />
      <Footer />
    </ReactLenis>
  )
}

export default App