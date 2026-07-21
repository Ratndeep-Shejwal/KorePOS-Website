import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'
import PaymentMethods from './components/payment-methods'
import BusinessTypes from './components/business-types'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PaymentMethods />
      <BusinessTypes />
    </>
  )
}

export default App