import React, { useEffect } from "react";

export default function PaymentTerms() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Breadcrumb / Back Link */}
        <a href="/legal" className="text-sm text-coral hover:underline font-medium transition-colors">
          ← Legal & Compliance
        </a>
        
        <p className="mt-6 font-mono text-xs uppercase text-ink/50 tracking-wider">
          GetsMotives Ltd · Last updated 17 May 2026
        </p>

        <div className="mt-10">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink mb-6">
            Payment Terms
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            These Payment Terms govern payment features within <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong>, including card payments, Tap to Pay, payment links, open banking (where enabled), and settlements. They apply to Merchants and supplement <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Important:</strong> Payment processing is performed by <strong className="font-semibold text-ink">regulated third-party payment providers</strong> (such as Viva.com, Stripe, Adyen, Yapily, or other integrated partners). Those providers’ terms, privacy notices, and regulatory licences govern the payment transaction itself.
          </p>
          
          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">1. Definitions</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Term</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Authorisation</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Approval of a card or account payment by the issuer or scheme.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Capture</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Collection of an authorised amount.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Chargeback</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Reversal initiated by the cardholder’s bank.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Settlement</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Funding of net proceeds to the Merchant bank account.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">PCI DSS</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Payment Card Industry Data Security Standard.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Scope of services</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">The Platform may enable:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">In-person card payments and <strong className="font-semibold text-ink">Tap to Pay</strong> on compatible devices</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Payment links</strong> and online checkout</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">QR ordering</strong> with integrated payment</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Bookings and ticketing</strong> with upfront or balance payments</li>
            <li className="leading-relaxed">Refunds and partial refunds initiated from the dashboard</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Availability depends on region, device, provider onboarding, and scheme rules.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Third-party payment providers</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We integrate with providers that are authorised or registered as required in the UK/EEA (e.g. payment institutions, e-money institutions, or acquirers).
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">You agree to:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Execute provider merchant agreements and schedules</li>
            <li className="leading-relaxed">Comply with card scheme rules (Visa, Mastercard, Amex, etc.)</li>
            <li className="leading-relaxed">Maintain PCI compliance for any card data environments you control (we design the Platform to minimise your PCI scope)</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We are <strong className="font-semibold text-ink">not</strong> responsible for provider outages, issuer declines, or scheme rule changes.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Authorisations, captures, and refunds</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Authorisations</strong> may expire if not captured within provider time limits</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Refunds</strong> are submitted to the original payment method where possible; timing depends on issuers (typically 5–10 business days)</li>
            <li className="leading-relaxed">You must not refund more than the original transaction amount except as permitted by law</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You are responsible for refund policies disclosed to customers — see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation Policy</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Settlements and currency</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Settlement timing (e.g. T+1, T+2) and currencies are defined by your payment provider agreement. Foreign exchange conversions may apply at provider rates.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We do not hold customer funds as a bank deposit unless explicitly stated in a provider agreement.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Fees</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Processing fees (interchange++, blended, or fixed) are disclosed during onboarding or in your provider dashboard. Platform fees are separate — see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing Policy</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Chargebacks and fraud</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You must:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Respond to chargeback notifications promptly with compelling evidence</li>
            <li className="leading-relaxed">Implement reasonable fraud controls (velocity limits, CVV/3DS where available)</li>
            <li className="leading-relaxed">Not process transactions for your own account laundering or test cards in production</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We and providers may monitor transactions for suspicious activity under <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC Policy</a>.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Chargeback liability</strong> rests with the Merchant except where law or provider rules allocate otherwise.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. PCI and security</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Do not store prohibited card data (full PAN, CVV) outside approved systems. Use Platform-provided flows for card entry. Report suspected breaches immediately to <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> and your provider.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            See <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/security-policy">Security Policy</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Disputes between Merchant and end customer</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Payment disputes about goods or services are between the Merchant and the customer. We may provide transaction records to assist but do not adjudicate consumer complaints.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Suspension</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We or providers may disable payment functionality for risk, compliance failure, excessive chargebacks, or breach of these Payment Terms.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Governing law</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">the laws of England and Wales</strong> · <strong className="font-semibold text-ink">England and Wales</strong>
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">12. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC Policy</a></li>
          </ul>
        </aside>

        {/* Footer Legal Fine Print */}
        <p className="mt-12 border-t border-ink/10 pt-8 text-sm text-ink/50 leading-relaxed">
          GetsMotives Ltd · Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom · Company no. 16846219 · VAT Not VAT registered in the United Kingdom<br />
          Legal: <a href="mailto:support@korepos.co.uk" className="text-coral hover:underline transition-colors">support@korepos.co.uk</a> · Privacy: <a href="mailto:support@korepos.co.uk" className="text-coral hover:underline transition-colors">support@korepos.co.uk</a>
        </p>

      </div>
    </main>
  );
}