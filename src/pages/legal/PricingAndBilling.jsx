import React, { useEffect } from "react";

export default function PricingAndBilling() {
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
            Pricing & Billing Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Pricing &amp; Billing Policy describes how <strong className="font-semibold text-ink">GetsMotives Ltd</strong> charges for <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> subscriptions, add-ons, usage-based fees, and related platform services. It forms part of your agreement with us and should be read with our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a> and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Subscription plan</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">KorePOS Lite, KorePOS Pro, or other named packages on our pricing page.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Billing cycle</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Monthly or annual period as selected at checkout.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Add-on</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Optional modules (e.g. extra locations, devices, premium support).</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Usage fees</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Variable charges based on transactions, SMS, or metered features where applicable.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Subscription plans</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Plan features, limits, and published prices are shown at <a href="https://www.korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">https://www.korepos.co.uk</a> or in your order form. We may offer:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Free trials</strong> — time-limited access; converts to paid unless cancelled before trial end</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Promotional pricing</strong> — discounted periods; standard pricing applies after promotion</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Custom enterprise pricing</strong> — by written agreement</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Plan changes (upgrade/downgrade) take effect as described in the dashboard or order confirmation. Downgrades may reduce features at the next billing cycle.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Payment methods</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We accept payment by card, direct debit, or invoice where approved. Recurring subscriptions are charged automatically at the start of each billing cycle unless cancelled.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Payment processing</strong> for platform fees may be handled by us or our billing partners. <strong className="font-semibold text-ink">Merchant card-acquiring</strong> for your customers is separate and governed by <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a> and your payment provider agreement.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Taxes</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Prices are quoted exclusive of VAT unless stated otherwise. UK VAT will be added at the applicable rate where we are VAT-registered (VAT no. Not VAT registered in the United Kingdom).
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You are responsible for taxes on your sales to end customers.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Invoicing and receipts</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Invoices and receipts are available in your account dashboard or sent by email. You must maintain accurate billing contact details.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Failed payments</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            If a charge fails, we may retry and notify you. Persistent failure may result in suspension of Platform access after notice. Reinstatement may require settlement of outstanding amounts.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Price changes</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may change standard list prices on 30 days’ notice for renewing subscriptions. You may cancel before the change takes effect. Promotional or custom contract pricing is governed by the relevant agreement.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Refunds</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Refunds for platform fees are addressed in our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation Policy</a>. Unless required by law or expressly stated, subscription fees are non-refundable for partial periods.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Cancellation</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You may cancel auto-renewal via the dashboard or by contacting <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>. Cancellation stops future charges; access typically continues until the end of the current paid period.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Disputes on platform invoices</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Billing disputes must be raised within 30 days of the invoice date at <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> with transaction references. We will investigate in good faith.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd</strong> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/service-level-agreement">SLA</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a></li>
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