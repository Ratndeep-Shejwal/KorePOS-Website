import { useEffect } from "react";

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Cookie Policy explains how <strong className="font-semibold text-ink">GetsMotives Ltd</strong> uses cookies and similar technologies on <strong className="font-semibold text-ink"><a href="https://www.korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">https://www.korepos.co.uk</a></strong> and related <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong> applications.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            It should be read with our <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a>.
          </p>
          
          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">1. What are cookies?</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Cookies are small text files stored on your device. Similar technologies include local storage, pixels, and SDK identifiers. We use them to operate the Platform, remember preferences, analyse usage, and support security.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Types of cookies we use</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Category</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Purpose</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Typical duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Strictly necessary</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Authentication, session management, security, load balancing</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Session to 12 months</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Functional</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Language, theme, remembered settings</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Up to 12 months</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Analytics</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Usage statistics, feature adoption, performance</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Up to 24 months</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Marketing</strong> (if enabled)</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Campaign attribution, limited remarketing</td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Per partner policy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Strictly necessary cookies do not require consent under UK PECR where they are essential to provide a service you request.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Third-party cookies</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">We may allow trusted partners to set cookies, including:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Analytics providers (e.g. privacy-oriented analytics)</li>
            <li className="leading-relaxed">Payment and fraud partners during checkout or onboarding flows</li>
            <li className="leading-relaxed">Embedded content where applicable</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Third parties process data under their own policies. Payment partners may use cookies during hosted payment or 3-D Secure flows.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Your choices</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            On first visit to our marketing site, you may accept all cookies, reject non-essential cookies, or manage preferences via our cookie banner.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            You can also control cookies through browser settings. Blocking necessary cookies may prevent login or checkout.
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            To withdraw consent for non-essential cookies, clear cookies or adjust preferences in the banner where available.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Do Not Track</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We do not currently respond to DNT signals; we instead rely on consent mechanisms where required.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Updates</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            We may update this Cookie Policy. The “Last updated” date will change accordingly.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · GetsMotives Ltd, Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/privacy-policy">Privacy Policy</a></li>
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