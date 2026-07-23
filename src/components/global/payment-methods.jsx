import { PaymentIcon } from 'react-svg-credit-card-payment-icons'

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  heading: 'Accepted Payment Methods',
  icons: [
    'Visa',
    'Mastercard',
    'AmericanExpress',
    'Maestro',
    'Discover',
    'DinersClub',
    'Jcb',
    'Unionpay',
    'Paypal',
    'Alipay',
  ],
}
// ─────────────────────────────────────────────────

export default function PaymentMethods() {
  const loopIcons = [...content.icons, ...content.icons]

  return (
    <section data-theme="light" className="bg-paper py-20">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl text-coral text-center mb-12">
        {content.heading}
      </h2>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-paper to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {loopIcons.map((type, i) => (
            <div key={i} className="flex items-center justify-center px-8 shrink-0">
              <PaymentIcon type={type} format="flatRounded" width={64} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}