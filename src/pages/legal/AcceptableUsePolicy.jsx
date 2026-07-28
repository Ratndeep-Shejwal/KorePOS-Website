import React, { useEffect } from "react";

export default function AcceptableUsePolicy() {
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
            Acceptable Use Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Acceptable Use Policy (“<strong className="font-semibold text-ink">AUP</strong>”) sets rules for use of <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> operated by <strong className="font-semibold text-ink">GetsMotives Ltd</strong>. Violation may result in suspension or termination without refund, and reporting to authorities where required.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            It forms part of our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a> and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">User</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Any person accessing the Platform, including Merchant staff.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Prohibited content</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Material that is illegal, infringing, or listed below.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Permitted use</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You may use the Platform only for lawful business operations aligned with your onboarded category, including restaurants, cafes, retail, activity centres, events, ticketing, and experience businesses.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Prohibited uses</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You must not:</p>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.1 Illegal or harmful activity</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Violate any applicable law or regulation</li>
            <li className="leading-relaxed">Facilitate money laundering, terrorist financing, or sanctions evasion</li>
            <li className="leading-relaxed">Sell illegal drugs, weapons, stolen goods, or counterfeit products</li>
            <li className="leading-relaxed">Engage in fraud, phishing, or identity theft</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.2 Restricted financial and high-risk categories</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Unlicensed lending, securities, or cryptocurrency schemes without approval</li>
            <li className="leading-relaxed">Pyramid schemes, deceptive multi-level marketing</li>
            <li className="leading-relaxed">Unauthorised gambling where licensing is required</li>
            <li className="leading-relaxed">Adult services where prohibited by law or payment scheme rules</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.3 Abuse of the Platform</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Probe, scan, or breach security without authorisation</li>
            <li className="leading-relaxed">Introduce malware, denial-of-service attacks, or excessive automated traffic</li>
            <li className="leading-relaxed">Reverse engineer or copy the Platform except as permitted by law</li>
            <li className="leading-relaxed">Resell access without a written partner agreement (<a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/partner-affiliate-terms">Partner Terms</a>)</li>
            <li className="leading-relaxed">Misrepresent identity or business ownership during onboarding</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.4 Data and privacy violations</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Process personal data without a lawful basis or required notices</li>
            <li className="leading-relaxed">Harvest end-customer data for unrelated marketing without consent</li>
            <li className="leading-relaxed">Upload special category data without appropriate safeguards and necessity</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.5 Content standards</h3>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Harassment, hate speech, or threats</li>
            <li className="leading-relaxed">Infringement of intellectual property rights</li>
            <li className="leading-relaxed">Deceptive pricing, bait-and-switch, or false advertising</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Payment-specific rules</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Merchants must not:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Process transactions without genuine goods or services</li>
            <li className="leading-relaxed">Split transactions to evade limits (<strong className="font-semibold text-ink">structuring</strong>)</li>
            <li className="leading-relaxed">Use the Platform for personal expenses unrelated to the business</li>
            <li className="leading-relaxed">Process payments on behalf of third parties without approval (<strong className="font-semibold text-ink">aggregation</strong>)</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Monitoring and enforcement</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may use automated and manual review, fraud scores, and provider alerts. We cooperate with payment partners and law enforcement as legally required.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Enforcement actions</strong> may include warnings, feature restrictions, withholding settlements (via providers), termination, and legal action.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Reporting violations</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Report suspected abuse to <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> with relevant transaction IDs and descriptions.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Changes</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may update this AUP; continued use constitutes acceptance where permitted.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · GetsMotives Ltd, Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a></li>
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