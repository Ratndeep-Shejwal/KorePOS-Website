import React, { useEffect } from "react";

export default function SecurityPolicy() {
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
            Security Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Security Policy describes technical and organisational measures <strong className="font-semibold text-ink">GetsMotives Ltd</strong> uses to protect <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> and customer data. It supports our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a> and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a>.
          </p>
          
          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">1. Security principles</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We design for confidentiality, integrity, and availability, aligned with industry practice for SaaS, POS, and fintech integrations.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Organisational measures</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Security awareness training for staff with access to production systems</li>
            <li className="leading-relaxed">Role-based access control and least-privilege principles</li>
            <li className="leading-relaxed">Background checks for roles with elevated access where appropriate</li>
            <li className="leading-relaxed">Incident response procedures with defined roles and escalation paths</li>
            <li className="leading-relaxed">Vendor risk review for material sub-processors</li>
            <li className="leading-relaxed">Secure development lifecycle including code review and dependency monitoring</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Technical measures</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Area</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Controls (summary)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Encryption</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">TLS 1.2+ for data in transit; encryption at rest for databases and backups</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Authentication</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Strong passwords, MFA encouraged for admin accounts, session timeouts</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Network</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Segmentation, firewalls, DDoS mitigation via infrastructure providers</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Application</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Input validation, OWASP-aligned practices, regular patching</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Logging</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Centralised logs, tamper-resistant storage, retention per policy</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Backups</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Regular encrypted backups, tested restore procedures</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Endpoints</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Managed devices for employees accessing production</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Payment security</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We support payment flows designed to reduce PCI scope (hosted fields, tokenisation, Tap to Pay SDKs). <strong className="font-semibold text-ink">Merchants</strong> remain responsible for their environment compliance where card data could be exposed.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We do not store full card numbers or CVV on our core Platform databases.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Physical security</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Production infrastructure is hosted in certified data centres with physical access controls. Office access is restricted.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Incident management</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Suspected security incidents should be reported immediately to <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> with subject line <strong className="font-semibold text-ink">Security Incident</strong>.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">We will:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Investigate and contain confirmed incidents</li>
            <li className="leading-relaxed">Notify affected Merchants without undue delay where personal data is compromised, per UK GDPR</li>
            <li className="leading-relaxed">Cooperate with regulators and payment partners as required</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Vulnerability disclosure</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We welcome responsible disclosure reports to <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>. Please do not test against production without written authorisation. We aim to acknowledge reports within 5 business days.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Business continuity</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We maintain disaster recovery capabilities targeting restoration of critical Services. RPO/RTO targets are internal and may be shared with enterprise customers under NDA.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Your responsibilities</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Merchants must:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Use strong passwords and MFA on admin accounts</li>
            <li className="leading-relaxed">Remove access for departed staff promptly</li>
            <li className="leading-relaxed">Secure physical Devices (<a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/hardware-agreement">Hardware Agreement</a>)</li>
            <li className="leading-relaxed">Report lost Devices or suspected account compromise immediately</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Updates</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We continuously improve controls; this policy may be updated periodically.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/data-processing-agreement">DPA</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/payment-terms">Payment Terms</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/data-processing-agreement">Data Processing Agreement</a></li>
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