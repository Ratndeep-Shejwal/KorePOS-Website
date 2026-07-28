import { useEffect } from "react";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            These Terms & Conditions (“<strong className="font-semibold text-ink">Terms</strong>”) govern access to and use of the <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> platform and related services provided by <strong className="font-semibold text-ink">GetsMotives Ltd</strong> (“<strong className="font-semibold text-ink">we</strong>”, “<strong className="font-semibold text-ink">us</strong>”, “<strong className="font-semibold text-ink">our</strong>”). By creating an account, using the Platform, or clicking to accept, you agree to these Terms on behalf of yourself or the organisation you represent (“<strong className="font-semibold text-ink">you</strong>”, “<strong className="font-semibold text-ink">Customer</strong>”).
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            If you accept payments through the Platform, additional terms apply: <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>, <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>, and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML & KYC Policy</a>.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Platform</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">GetsMotives / KorePOS software, APIs, dashboards, mobile apps, hardware integrations, and support services.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Subscription</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Paid or trial access to Platform features on a recurring or usage basis.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Content</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Data, menus, images, prices, and materials you upload or transmit.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Third-party services</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Payment processors, banks, SMS/email providers, and other integrated services.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Eligibility and account registration</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You must be at least 18 years old and authorised to bind your business. You agree to provide accurate registration information and keep credentials confidential. You are responsible for all activity under your account.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may refuse, suspend, or terminate accounts that violate these Terms or our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. The Platform</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We provide a SaaS platform for POS, payments, bookings, ticketing, QR ordering, customer engagement, analytics, merchant onboarding, and related operations for hospitality, retail, events, and experience businesses.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">We are not a bank, payment institution, or e-money issuer.</strong> Payment services are provided by regulated third parties subject to their own terms.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Features may vary by plan (e.g. KorePOS Lite vs Pro), region, and integration availability.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Subscription and fees</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Subscriptions, trials, upgrades, and billing are governed by our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing & Billing Policy</a>. Fees are exclusive of VAT unless stated otherwise.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Failure to pay may result in suspension after reasonable notice.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Your responsibilities</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You agree to:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Comply with applicable laws (including consumer protection, food safety, licensing, and tax)</li>
            <li className="leading-relaxed">Obtain necessary consents for marketing and data processing</li>
            <li className="leading-relaxed">Configure refunds and cancellations fairly for your end customers (see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund & Cancellation Policy</a>)</li>
            <li className="leading-relaxed">Maintain accurate product, pricing, and availability information</li>
            <li className="leading-relaxed">Not use the Platform for prohibited activities (see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a>)</li>
            <li className="leading-relaxed">Indemnify us against claims arising from your Content, products, or unlawful conduct, except where caused by our breach or negligence</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Our rights</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">We may:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Modify, improve, or discontinue features with reasonable notice where material</li>
            <li className="leading-relaxed">Perform maintenance and emergency updates</li>
            <li className="leading-relaxed">Monitor usage for security, fraud, and compliance</li>
            <li className="leading-relaxed">Remove Content that violates law or policy</li>
            <li className="leading-relaxed">Suspend access for non-payment, security risk, or breach</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Intellectual property</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We retain all rights in the Platform, branding, and documentation. You receive a limited, non-exclusive, non-transferable licence to use the Platform during an active Subscription.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You retain ownership of your Content. You grant us a licence to host, process, and display Content as necessary to provide the Platform and support Merchants.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Data protection</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a> and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a> describe how personal data is handled. Where you process end-customer data, you are the controller and must provide appropriate privacy notices.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Confidentiality</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Each party will protect the other’s non-public business information with reasonable care and use it only for the purpose of the relationship.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Warranties and disclaimers</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            The Platform is provided <strong className="font-semibold text-ink">“as is”</strong> except where mandatory consumer rights apply. We do not warrant uninterrupted or error-free operation. We disclaim implied warranties of merchantability and fitness for a particular purpose to the fullest extent permitted by law.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Limitation of liability</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be limited by law.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Subject to the above, our total aggregate liability arising from these Terms in any twelve-month period is limited to the greater of: (a) fees paid by you in that period, or (b) £1,000.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We are not liable for indirect, consequential, or special damages, loss of profits, or failures of third-party services (including payment providers, networks, or internet connectivity).
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">12. Termination</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Either party may terminate for material breach not cured within 30 days of notice. We may terminate immediately for serious breach, insolvency, or regulatory requirement.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Upon termination, access ends and fees owed remain payable. Data export may be available for a limited period subject to our retention policies.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">13. Dispute resolution</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Parties will attempt good-faith resolution by contacting <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>. If unresolved, disputes shall be subject to the courts of <strong className="font-semibold text-ink">England and Wales</strong> under <strong className="font-semibold text-ink">the laws of England and Wales</strong>, except where mandatory consumer jurisdiction applies.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">14. General</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Assignment:</strong> You may not assign these Terms without our consent.</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Force majeure:</strong> Neither party is liable for events beyond reasonable control.</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Entire agreement:</strong> These Terms, incorporated policies, and order forms constitute the entire agreement.</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Severability:</strong> Invalid provisions do not affect the remainder.</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">15. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd</strong><br />
            Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom<br />
            Legal: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · Support: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a><br />
            Company no. 16846219 · Not VAT registered in the United Kingdom
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related policies:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing & Billing</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/service-level-agreement">SLA</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing & Billing Policy</a></li>
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