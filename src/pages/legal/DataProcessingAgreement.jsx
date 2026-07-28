import React, { useEffect } from "react";

export default function DataProcessingAgreement() {
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
            Data Processing Agreement (DPA)
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Data Processing Agreement forms part of the agreement between <strong className="font-semibold text-ink">GetsMotives Ltd</strong> (“<strong className="font-semibold text-ink">Processor</strong>”, “<strong className="font-semibold text-ink">we</strong>”) and the business customer (“<strong className="font-semibold text-ink">Controller</strong>”, “<strong className="font-semibold text-ink">you</strong>”, “<strong className="font-semibold text-ink">Merchant</strong>”) when we process personal data on your behalf through <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong>.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            It supplements our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a>, <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>, and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/security-policy">Security Policy</a>. UK GDPR and the Data Protection Act 2018 apply.
          </p>
          
          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">1. Definitions</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Terms in Article 4 UK GDPR apply. <strong className="font-semibold text-ink">Personal data</strong>, <strong className="font-semibold text-ink">processing</strong>, <strong className="font-semibold text-ink">controller</strong>, <strong className="font-semibold text-ink">processor</strong>, <strong className="font-semibold text-ink">sub-processor</strong>, and <strong className="font-semibold text-ink">data subject</strong> have the meanings set out in law.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Services</strong> means the Platform features that store or process end-customer or staff data on your instructions.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Roles</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Party</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Role</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Typical data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Merchant</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Controller</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">End-customer bookings, orders, marketing lists, staff HR data you upload</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">GetsMotives Ltd</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Processor</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Processing on documented instructions via the Platform</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">GetsMotives Ltd</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Controller</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Your account billing, our website analytics, direct B2B marketing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Subject matter and duration</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Subject matter:</strong> Provision of POS, payments integration, bookings, ticketing, QR ordering, analytics, and related SaaS.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Duration:</strong> For the term of your subscription and retention period thereafter as per the Privacy Policy.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Nature and purpose:</strong> Hosting, transmission, organisation, retrieval, and display of personal data as you configure the Services.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Categories of data subjects:</strong> Your customers, guests, attendees, and authorised users.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Types of personal data:</strong> Identity, contact, transaction, booking, device, and usage data as configured by you.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Special categories:</strong> Processed only if you enable features requiring such data; you warrant a lawful basis and appropriate safeguards.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Processor obligations</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">We shall:</p>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Process personal data only on documented instructions from you, including these terms and dashboard configurations, unless required by law (in which case we notify you unless prohibited).</li>
            <li className="leading-relaxed">Ensure persons authorised to process data are bound by confidentiality.</li>
            <li className="leading-relaxed">Implement appropriate technical and organisational measures per <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/security-policy">Security Policy</a>.</li>
            <li className="leading-relaxed">Assist with data subject requests, DPIAs, and consultations with supervisory authorities, considering the nature of processing and information available to us (reasonable fees may apply for manifestly excessive requests).</li>
            <li className="leading-relaxed">Notify you without undue delay after becoming aware of a personal data breach.</li>
            <li className="leading-relaxed">Delete or return personal data at termination, subject to legal retention, within 90 days unless you export sooner.</li>
            <li className="leading-relaxed">Make available information necessary to demonstrate compliance and allow audits no more than once annually on reasonable notice, subject to confidentiality and security.</li>
          </ol>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Sub-processors</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You provide <strong className="font-semibold text-ink">general authorisation</strong> for us to engage sub-processors (cloud hosting, email, SMS, analytics, payment routing, support tools). We maintain a sub-processor list available at <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We will notify material changes allowing you to object on reasonable grounds relating to data protection. If we cannot accommodate a justified objection, you may terminate affected Services.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Sub-processors are bound by written terms no less protective than this DPA.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Payment providers</strong> may act as independent controllers for payment data — see <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Controller obligations</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You shall:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Provide lawful instructions and a valid lawful basis for processing</li>
            <li className="leading-relaxed">Publish privacy notices to data subjects</li>
            <li className="leading-relaxed">Obtain consents where required (e.g. marketing, non-essential cookies on your channels)</li>
            <li className="leading-relaxed">Ensure accuracy of data you upload</li>
            <li className="leading-relaxed">Not instruct us to process unlawful categories without safeguards</li>
            <li className="leading-relaxed">Comply with <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use Policy</a></li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. International transfers</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Where sub-processors transfer data outside the UK, we ensure appropriate transfer mechanisms (IDTA, SCCs, or adequacy) as required.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Liability</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Liability for processing is subject to the caps and exclusions in our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>, without prejudice to each party’s liability under UK GDPR where it cannot be limited.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Governing law</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">the laws of England and Wales</strong> · Supervisory authority: UK ICO for UK-established Controllers.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Signature</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            This DPA is effective upon acceptance of the Terms or execution of an order form. For a countersigned copy, contact <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Annex — Technical measures:</strong> See <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/security-policy">Security Policy</a>.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/cookie-policy">Cookie Policy</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a></li>
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