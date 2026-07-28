import React, { useEffect } from "react";

export default function ServiceLevelAgreement() {
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
            Service Level Agreement (SLA)
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Service Level Agreement describes availability and support commitments for <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> platform services operated by <strong className="font-semibold text-ink">GetsMotives Ltd</strong>. It supplements <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a> and applies to paying Subscription customers unless a custom enterprise agreement states otherwise.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Exclusions:</strong> Payment provider uptime, card scheme outages, internet connectivity, third-party APIs, and beta features are excluded.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Uptime</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Percentage of time core Platform APIs and dashboard are available in a calendar month, excluding exclusions.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Downtime</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Period when core Services are materially unavailable, excluding scheduled maintenance.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Support ticket</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Request logged via in-app support or <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Availability target</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Tier</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Monthly uptime target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Standard (Lite / Pro)</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">99.5%</strong></td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Enterprise (if contracted)</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">99.9%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Calculation:</strong><br />
            <code className="bg-ink/5 px-2 py-1 rounded text-xs font-mono">Uptime % = ((Total minutes − Downtime minutes) / Total minutes) × 100</code>
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            Scheduled maintenance windows (not exceeding 4 hours per month, preferably off-peak UK time) are excluded if announced at least 48 hours in advance.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Exclusions</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">Downtime does not include failures caused by:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Factors outside our reasonable control (force majeure, upstream cloud region failures beyond our redundancy)</li>
            <li className="leading-relaxed">Your equipment, network, or misconfiguration</li>
            <li className="leading-relaxed">Suspension under <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms</a> or <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/acceptable-use-policy">Acceptable Use</a></li>
            <li className="leading-relaxed">Payment processor or bank outages</li>
            <li className="leading-relaxed">Abuse, overload, or unauthorised use</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Support response targets</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Priority</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Description</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Initial response target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">P1 — Critical</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Platform down or payments disabled for all locations</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">4 business hours</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">P2 — High</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Major feature impaired, no reasonable workaround</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">1 business day</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">P3 — Normal</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Non-critical defect or question</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">2 business days</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">P4 — Low</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Cosmetic, feature requests</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">5 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Business hours:</strong> Monday–Friday, 09:00–18:00 UK time, excluding UK public holidays.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Enterprise customers may receive enhanced targets by contract.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Service credits</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">If monthly Uptime falls below the target for your tier:</p>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Uptime achieved</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Service credit (% of monthly platform fee)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">99.0% – 99.49%</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">10%</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">95.0% – 98.99%</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">25%</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Below 95.0%</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Credit process:</strong>
          </p>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Submit a claim to <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> within <strong className="font-semibold text-ink">15 days</strong> after the month end with dates/times of impact.</li>
            <li className="leading-relaxed">We validate against monitoring records.</li>
            <li className="leading-relaxed">Approved credits apply to the next invoice only; maximum credit per month is 50% of that month’s platform fee.</li>
            <li className="leading-relaxed">Credits are your sole remedy for availability failure unless mandatory law provides otherwise.</li>
          </ol>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Credits do not apply to free trials or usage-based payment processing fees.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Status communications</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Material incidents may be posted on a status page or emailed to account administrators where configured.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Continuous improvement</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We invest in redundancy, monitoring, and incident post-mortems. Targets may be updated with 30 days’ notice.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a>
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing Policy</a></li>
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