import React, { useEffect } from "react";

export default function PartnerAffiliateTerms() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 font-body">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Breadcrumb / Back Link */}
        <a href="/legal" className="text-sm text-coral hover:underline font-medium transition-colors">
          ← Legal &amp; Compliance
        </a>
        
        <p className="mt-6 font-mono text-xs uppercase text-ink/50 tracking-wider">
          GetsMotives Ltd · Last updated 17 May 2026
        </p>

        <div className="mt-10">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-ink mb-6">
            Partner &amp; Affiliate Terms
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            These Partner &amp; Affiliate Terms (“<strong className="font-semibold text-ink">Partner Terms</strong>”) govern referral partners, resellers, integrators, and affiliates (“<strong className="font-semibold text-ink">Partners</strong>”) who promote or resell <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> services of <strong className="font-semibold text-ink">GetsMotives Ltd</strong>.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            They supplement our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>. A signed partner schedule may override conflicting provisions.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Referral</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">A Merchant who registers using your unique link or code and completes qualifying onboarding.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Commission</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Amount payable for eligible Referrals per the partner schedule.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Qualified transaction</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">As defined in your schedule (e.g. first paid subscription).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Enrollment</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Partners must apply and be approved in writing. We may reject or revoke Partners at our discretion. You must be a business entity or sole trader able to receive commission payments and issue invoices where required.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Partner obligations</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You agree to:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Market the Platform accurately and not make false claims about fees, approvals, or regulatory status</li>
            <li className="leading-relaxed">Comply with applicable advertising laws (including UK ASA codes and disclosure of commercial relationships)</li>
            <li className="leading-relaxed">Not bid on our trademarks in paid search without written consent</li>
            <li className="leading-relaxed">Not represent yourself as GetsMotives Ltd or as authorised to bind us without express authority</li>
            <li className="leading-relaxed">Pass through or ensure Merchants accept applicable legal terms (<a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>, <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a>)</li>
            <li className="leading-relaxed">Maintain confidentiality of non-public pricing and roadmaps</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Referral tracking</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Referrals are tracked via unique URLs, codes, or CRM registration. We use first-touch or last-touch attribution as stated in your schedule. Disputes must be raised within <strong className="font-semibold text-ink">30 days</strong> of the Referral event.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Commissions</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Commission rates and payment timing are set in your partner schedule</li>
            <li className="leading-relaxed">Commissions are typically paid after the Merchant’s first successful paid invoice, net of refunds and chargebacks</li>
            <li className="leading-relaxed">We may withhold or claw back commissions for fraudulent Referrals, cancelled accounts within the clawback period, or breach</li>
            <li className="leading-relaxed">You are responsible for income tax and VAT on commissions</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Non-circumvention</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            During the term and <strong className="font-semibold text-ink">12 months</strong> after, you will not circumvent us by directly contracting with Merchants we introduced for the purpose of avoiding commission, except for pre-existing relationships disclosed at enrollment.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Intellectual property</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We grant a limited, revocable licence to use approved logos and marketing assets. All goodwill in our brands remains ours.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Disclaimer</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Partners promote services “as available.” We do not guarantee Merchant approval, specific earnings, or Partner income levels.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Limitation of liability</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Partner liability caps follow our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>. Neither party is liable for indirect damages.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Term and termination</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Either party may terminate on 30 days’ notice. We may terminate immediately for breach, reputational harm, or regulatory concern. Accrued commissions for valid Referrals before termination are paid per the schedule unless forfeited for fraud.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Governing law</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">the laws of England and Wales</strong> · <strong className="font-semibold text-ink">England and Wales</strong>
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">12. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Partnerships: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li>
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