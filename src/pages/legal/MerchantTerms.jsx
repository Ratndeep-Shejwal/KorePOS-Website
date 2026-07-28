import { useEffect } from "react";

export default function MerchantTerms() {
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
            Merchant Terms
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            These Merchant Terms apply to businesses (“<strong className="font-semibold text-ink">Merchants</strong>”) that use <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> to accept payments, operate POS, manage bookings, sell tickets, or run customer-facing operations. They supplement our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>, <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>, <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC Policy</a>, and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a>.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Merchant</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">The business entity onboarded to accept payments via the Platform.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Authorised user</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Staff or agents permitted to access the Merchant account.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Settlement</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Transfer of funds from payment processing to the Merchant’s designated account.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">MCC</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Merchant category code assigned for card processing.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Merchant eligibility</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You represent that you:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Are duly organised and authorised to trade in your jurisdiction</li>
            <li className="leading-relaxed">Hold required licences (food, alcohol, events, gambling where applicable)</li>
            <li className="leading-relaxed">Sell legal goods and services not listed as prohibited in our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a></li>
            <li className="leading-relaxed">Will complete onboarding and KYC as required under <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC Policy</a></li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We and our payment partners may decline or terminate Merchants at our discretion for risk, compliance, or reputational reasons.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Onboarding</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Merchant onboarding may require:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Identity verification of directors, owners, or beneficial owners</li>
            <li className="leading-relaxed">Proof of business address and bank account</li>
            <li className="leading-relaxed">Description of business model, expected volumes, and refund policies</li>
            <li className="leading-relaxed">Acceptance of payment provider terms (Viva.com, Stripe, Adyen, Yapily, or others as applicable)</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You must notify us of material changes to ownership, business model, or regulatory status within 5 business days.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Merchant responsibilities</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You are solely responsible for:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Customer transactions</strong> — pricing, fulfilment, refunds, chargebacks, and consumer law compliance</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Receipts and tax</strong> — issuing compliant receipts and remitting VAT/sales tax</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Data protection</strong> — privacy notices to end customers; lawful bases for marketing</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Staff access</strong> — roles, permissions, and termination of leavers</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Hardware</strong> — safe use of devices per <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/hardware-agreement">Hardware Agreement</a></li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Content</strong> — accuracy of menus, allergens, event details, and ticket terms</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Payment processing relationship</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd</strong> provides software and integration layers. <strong className="font-semibold text-ink">Card and account payments are processed by regulated payment providers</strong> that may act as merchant of record, acquirer, or payment facilitator depending on the integration.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We do not guarantee approval of your merchant account, specific interchange rates, or settlement timelines — these are determined by providers and card schemes.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Prohibited and restricted activities</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Merchants must not process payments for illegal goods, unlicensed financial services, adult content where prohibited, counterfeit goods, sanctions violations, or other restricted categories in our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Chargebacks and disputes</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You are liable for chargebacks, scheme fines, and retrieval requests relating to your transactions, except to the extent caused by our gross negligence or unauthorised platform error.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You will cooperate with evidence requests within provider deadlines. Excessive chargeback rates may trigger review, reserves, or termination by payment partners.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            See <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a> for detail.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Reserves and holds</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Payment partners may apply rolling reserves, delayed settlement, or account holds based on risk. We will communicate where we are notified, but reserve decisions are ultimately controlled by providers.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Platform fees vs processing fees</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Platform subscription and software fees</strong> — per <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing Policy</a></li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Payment processing fees</strong> — per your provider schedule (percentage + fixed, cross-border, premium cards, etc.)</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Fees may be deducted from settlements or invoiced separately as configured.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Termination</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We or payment partners may suspend or terminate merchant processing immediately for fraud suspicion, AML concerns, breach, or regulatory direction.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Upon termination, you must cease using payment features, settle outstanding fees, and honour existing customer obligations (bookings, tickets, refunds).
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Liability</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Merchant Terms incorporate the limitation of liability in our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>. We are not liable for lost sales due to provider outage, except as stated in the <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/service-level-agreement">SLA</a> for Platform availability.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">12. Governing law</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">the laws of England and Wales</strong> · Courts of <strong className="font-semibold text-ink">England and Wales</strong>
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">13. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · GetsMotives Ltd, Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">DPA</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a></li>
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