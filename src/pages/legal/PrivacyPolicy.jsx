import { useEffect } from "react";

export default function PrivacyPolicy() {
  // Optional: Scroll to top when the page loads
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
            Privacy Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Privacy Policy explains how <strong className="font-semibold text-ink">GetsMotives Ltd</strong> (“<strong className="font-semibold text-ink">we</strong>”, “<strong className="font-semibold text-ink">us</strong>”, “<strong className="font-semibold text-ink">our</strong>”) collects, uses, discloses, and protects personal data when you use <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> websites, applications, POS systems, payment features, booking tools, ticketing, QR ordering, merchant dashboards, customer mobile apps, and related services (collectively, the “<strong className="font-semibold text-ink">Platform</strong>”).
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            We are committed to compliance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and applicable European data protection laws where relevant.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Personal data</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Information relating to an identified or identifiable individual.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Controller</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">The entity that determines why and how personal data is processed.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Processor</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">The entity that processes personal data on behalf of a controller.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Merchant</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">A business customer using the Platform to operate its venue or brand.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">End customer</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">A consumer who interacts with a Merchant via bookings, payments, tickets, or orders.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Payment provider</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">A regulated third party (e.g. Viva.com, Stripe, Adyen, Yapily, or others) that processes card or account payments.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Who we are</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd</strong><br />
            Registered address: Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom<br />
            Company registration number: 16846219<br />
            VAT status: Not VAT registered in the United Kingdom<br />
            Website: <a href="https://www.korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">https://www.korepos.co.uk</a><br />
            Privacy contact: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a><br />
            Data Protection Officer (where applicable): <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            For Merchants processing end-customer personal data through the Platform, we typically act as a <strong className="font-semibold text-ink">processor</strong> on the Merchant’s instructions. For account registration, billing, marketing to prospects, website analytics, and platform security, we act as a <strong className="font-semibold text-ink">controller</strong>. See our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Personal data we collect</h2>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.1 Merchants and authorised users</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Identity and contact details (name, email, phone, job role)</li>
            <li className="leading-relaxed">Business details (trading name, address, company number, VAT, industry)</li>
            <li className="leading-relaxed">Account credentials and authentication logs</li>
            <li className="leading-relaxed">Billing and subscription information</li>
            <li className="leading-relaxed">KYC/AML documentation (see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/aml-kyc">AML &amp; KYC Policy</a>)</li>
            <li className="leading-relaxed">Support communications and feedback</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.2 End customers (on behalf of Merchants)</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Booking and ticketing details</li>
            <li className="leading-relaxed">Order history, table or session identifiers</li>
            <li className="leading-relaxed">Payment metadata (amount, status, last four digits of card where provided by payment partners — we do not store full card numbers)</li>
            <li className="leading-relaxed">Marketing preferences where enabled by the Merchant</li>
          </ul>
          
          <h3 className="mt-8 mb-3 text-lg font-bold text-ink">3.3 Automatically collected data</h3>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Device identifiers, IP address, browser type, operating system</li>
            <li className="leading-relaxed">Usage logs, crash reports, performance metrics</li>
            <li className="leading-relaxed">Cookies and similar technologies (see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/cookie-policy">Cookie Policy</a>)</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. How we use personal data</h2>
          <p className="mb-6 text-ink/80 leading-relaxed">
            We process personal data where we have a lawful basis under UK GDPR:
          </p>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Purpose</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Lawful basis (typical)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Providing and improving the Platform</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Contract; legitimate interests</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Merchant onboarding and payments enablement</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Contract; legal obligation (AML/KYC)</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Security, fraud prevention, and abuse detection</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Legitimate interests; legal obligation</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Billing and account administration</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Contract</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Product communications and service updates</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Contract; legitimate interests</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Marketing to business prospects (with opt-out)</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Legitimate interests; consent where required</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Compliance with law and regulatory requests</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Legal obligation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-ink/80 leading-relaxed">We do not sell personal data.</p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Payment processing and third parties</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Card payments, open banking, payment links, Tap to Pay, and settlements may be provided by <strong className="font-semibold text-ink">regulated payment partners</strong> acting as independent controllers or processors. Their privacy notices apply to payment processing activities they control.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">We may share personal data with:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Payment providers (e.g. Viva.com, Stripe, Adyen, Yapily, and others as integrated)</li>
            <li className="leading-relaxed">Cloud hosting and infrastructure providers (UK/EEA where possible)</li>
            <li className="leading-relaxed">Identity verification and fraud prevention vendors</li>
            <li className="leading-relaxed">Professional advisers (legal, accounting) under confidentiality</li>
            <li className="leading-relaxed">Authorities where required by law</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            A current list of sub-processors is available on request at <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. International transfers</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Where personal data is transferred outside the UK/EEA, we implement appropriate safeguards such as UK International Data Transfer Agreements, adequacy regulations, or Standard Contractual Clauses, and conduct transfer risk assessments where required.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Data retention</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We retain personal data only as long as necessary for the purposes described, including legal, tax, and regulatory requirements. Merchant account data is generally retained for the subscription term plus a defined period after closure. End-customer data controlled by Merchants is retained according to the Merchant’s settings and our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Your rights</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Depending on your role and jurisdiction, you may have rights to:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Access, rectify, or erase personal data</li>
            <li className="leading-relaxed">Restrict or object to processing</li>
            <li className="leading-relaxed">Data portability</li>
            <li className="leading-relaxed">Withdraw consent (where processing is consent-based)</li>
            <li className="leading-relaxed">Lodge a complaint with the UK Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Merchant end-customers should contact the <strong className="font-semibold text-ink">Merchant</strong> first for requests relating to bookings or orders; we will assist Merchants as processor where applicable.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            To exercise rights as a Platform user, contact <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Security</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We implement technical and organisational measures described in our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/security-policy">Security Policy</a>, including encryption in transit, access controls, logging, and staff training.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Children</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            The Platform is intended for business use. We do not knowingly collect personal data from children under 16 without appropriate authority.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Changes</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may update this Privacy Policy. Material changes will be notified via the Platform or email where appropriate. Continued use after the effective date constitutes acceptance where permitted by law.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">12. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">GetsMotives Ltd</strong><br />
            Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom<br />
            Email: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a><br />
            Support: <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related policies:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/cookie-policy">Cookie Policy</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/security-policy">Security Policy</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/cookie-policy">Cookie Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/security-policy">Security Policy</a></li>
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