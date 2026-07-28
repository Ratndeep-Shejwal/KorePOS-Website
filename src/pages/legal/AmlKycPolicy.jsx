import React, { useEffect } from "react";

export default function AmlKycPolicy() {
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
            AML &amp; KYC Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd</strong> maintains anti-money laundering (AML), counter-terrorist financing (CTF), and know-your-customer (KYC) controls for <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> Merchants, in line with UK Money Laundering Regulations, FCA guidance where applicable, and payment partner requirements.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This policy supports <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a>, <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>, and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a>.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">KYC</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Know Your Customer — identity and business verification.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">AML</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Anti-money laundering controls and monitoring.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">PEP</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Politically exposed person.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">UBO</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Ultimate beneficial owner (&ge;25% ownership or control, or lower threshold if required).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Purpose</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">We verify Merchants and monitor activity to:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Prevent financial crime and fraud</li>
            <li className="leading-relaxed">Protect payment networks and end customers</li>
            <li className="leading-relaxed">Comply with legal and partner obligations</li>
            <li className="leading-relaxed">Maintain integrity of the Platform</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Onboarding verification</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Before or during enabling payments, we and/or payment partners may require:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Government-issued ID for directors, owners, or signatories</li>
            <li className="leading-relaxed">Proof of address (utility bill, bank statement)</li>
            <li className="leading-relaxed">Company registration documents and ownership structure</li>
            <li className="leading-relaxed">Bank account verification (micro-deposits or open banking)</li>
            <li className="leading-relaxed">Business description, website, and expected transaction profile</li>
            <li className="leading-relaxed">MCC and industry classification</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may use third-party verification services and adverse media screening.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Ongoing monitoring</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">We may:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Review transaction patterns for unusual volume, velocity, or geography</li>
            <li className="leading-relaxed">Request updated documentation on renewal or material change</li>
            <li className="leading-relaxed">Apply enhanced due diligence for high-risk sectors or PEPs</li>
            <li className="leading-relaxed">Report suspicious activity to the National Crime Agency (NCA) where legally required <strong className="font-semibold text-ink">without tipping off</strong></li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Merchant cooperation</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You must:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Provide accurate, current information</li>
            <li className="leading-relaxed">Notify us within <strong className="font-semibold text-ink">5 business days</strong> of changes to ownership, control, or business model</li>
            <li className="leading-relaxed">Respond to information requests within stated deadlines</li>
            <li className="leading-relaxed">Not attempt to obscure beneficial ownership</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Failure to cooperate may result in suspension of payments and account closure.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Prohibited activity indicators</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Examples triggering review:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Transactions inconsistent with stated business type</li>
            <li className="leading-relaxed">High refund or chargeback rates linked to fraud patterns</li>
            <li className="leading-relaxed">Use of multiple accounts to circumvent limits</li>
            <li className="leading-relaxed">Sanctions list matches</li>
            <li className="leading-relaxed">Customer complaints indicating scam operations</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Sanctions and restricted parties</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You represent you are not subject to UK, EU, UN, or US sanctions and will not process payments for sanctioned persons or jurisdictions.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Record keeping</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            KYC records and transaction logs may be retained for <strong className="font-semibold text-ink">at least five years</strong> after relationship end, or longer if required by law or investigation.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. No legal advice</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            This policy is operational guidance, not legal advice. Seek independent counsel for your regulatory obligations.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Compliance: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · Support: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a></li>
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