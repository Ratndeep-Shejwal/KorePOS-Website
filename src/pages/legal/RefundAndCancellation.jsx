import React, { useEffect } from "react";

export default function RefundAndCancellation() {
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
            Refund &amp; Cancellation Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This policy explains refunds and cancellations for (A) <strong className="font-semibold text-ink">GetsMotives and KorePOS platform subscriptions and fees</strong> charged by <strong className="font-semibold text-ink">GetsMotives Ltd</strong>, and (B) <strong className="font-semibold text-ink">transactions between Merchants and their end customers</strong> processed through the Platform.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Platform fees</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Subscription, software, and add-on charges billed by us.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Customer transaction</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Payment for goods, services, bookings, or tickets processed for a Merchant.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Platform subscription cancellations</h2>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">2.1 How to cancel</h3>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Cancel auto-renewal via your account dashboard or email <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> before the next billing date.
          </p>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">2.2 Effect of cancellation</h3>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Access continues until the end of the current paid billing period unless otherwise stated</li>
            <li className="leading-relaxed">No further renewal charges apply after cancellation is processed</li>
            <li className="leading-relaxed">Data export may be available for a limited period; thereafter data may be deleted per our retention policies</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">2.3 Refunds of platform fees</h3>
          <p className="mb-4 text-ink/80 leading-relaxed">Unless required by law or expressly agreed in writing:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Monthly plans:</strong> fees are non-refundable for the current month</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Annual plans:</strong> no pro-rata refund on early cancellation unless stated in your order form</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Trials:</strong> no charge if cancelled before trial conversion</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Billing errors will be corrected or refunded at our discretion.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Hardware cancellations</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Hardware orders are governed by the <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/hardware-agreement">Hardware Agreement</a>. Return windows, restocking fees, and defective device replacement apply as stated there.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Customer transactions (Merchant to end customer)</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Merchants set their own refund and cancellation rules</strong> for bookings, events, food orders, tickets, and retail sales. You must:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Display clear terms at point of purchase</li>
            <li className="leading-relaxed">Honour applicable consumer rights (UK Consumer Rights Act, Consumer Contracts Regulations, and event-specific rules)</li>
            <li className="leading-relaxed">Process refunds through the Platform or payment dashboard where the original payment was taken</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd does not issue refunds on behalf of Merchants</strong> unless required by law or a specific support arrangement.
          </p>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">4.1 Common scenarios</h3>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Scenario</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Typical handling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Booking cancellation by customer</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Per Merchant cancellation window; refund or credit as configured</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Event cancellation by Merchant</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Full or partial refund as communicated</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Order not fulfilled</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Merchant-initiated refund</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Duplicate charge</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Merchant or support-assisted refund to original method</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">4.2 Timing</h3>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Refunds are submitted to card issuers or banks; crediting the customer may take <strong className="font-semibold text-ink">5–10 business days</strong> or longer depending on the issuer.
          </p>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">4.3 Chargebacks</h3>
          <p className="mb-4 text-ink/80 leading-relaxed">
            If a customer initiates a chargeback instead of requesting a refund, see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Payment link and online checkout</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Refund eligibility follows the Merchant’s published policy. Disputes should be directed to the Merchant first.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Exceptional circumstances</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may offer goodwill credits for prolonged Platform outages qualifying under our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/service-level-agreement">SLA</a>. This does not replace statutory rights.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Platform billing: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a><br />
            Legal: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a></li>
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