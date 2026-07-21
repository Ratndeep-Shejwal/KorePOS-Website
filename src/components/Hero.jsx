import Button from './Button'

// ── CONTENT CONFIG ──────────────────────────────
const content = {
  bgImage: 'images/hero-bg.png',
  graphicImage: 'images/hero-img.png',
  badge: 'Pay as Little as 0.39% per Transaction*',
  headingLine1: 'Run your entire business',
  headingLine2: 'on one system',
  subtext:
    'POS, Payments, Bookings, QR Ordering, Kitchen Displays and Analytics — all in one operating system.',
  primaryCta: 'Book Demo',
  secondaryCta: 'Start Free',
}
// ─────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative w-full h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${content.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-coral" />
            <span className="text-sm font-body font-medium text-paper">{content.badge}</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight text-paper mb-2">
            {content.headingLine1}
          </h1>
          <h1 className="font-display font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight text-coral mb-6">
            {content.headingLine2}
          </h1>

          <p className="font-body text-lg text-paper/70 max-w-md mb-10">{content.subtext}</p>

          <div className="flex items-center gap-4">
            <Button variant="primary">{content.primaryCta}</Button>
            <Button variant="secondary">{content.secondaryCta}</Button>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <img src={content.graphicImage} alt="Product dashboard preview" className="w-full max-w-lg object-contain" />
        </div>
      </div>
    </section>
  )
}