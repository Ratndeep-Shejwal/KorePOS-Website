import Hero from '../components/Hero'
import PaymentMethods from '../components/global/payment-methods'
import BusinessTypes from '../components/business-types'
import Features from '../components/features'
import WhyChooseUs from '../components/why-korepos'
import TestimonialsStats from '../components/testimonial'
import CTASection from '../components/global/cta'
import Pricing from '../components/global/pricing'
import FAQ from '../components/faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <PaymentMethods />
      <BusinessTypes />
      <Features />
      <WhyChooseUs />
      <TestimonialsStats />
      <CTASection />
      <Pricing />
      <FAQ />
    </main>
  )
}