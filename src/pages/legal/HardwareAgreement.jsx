import React, { useEffect } from "react";

export default function HardwareAgreement() {
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
            Hardware Agreement
          </h1>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Last updated:</strong> 17 May 2026
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            This Hardware Agreement governs purchase, lease, loan, or supply of physical devices (terminals, tablets, printers, kiosks, Tap to Pay accessories, and related equipment) (“<strong className="font-semibold text-ink">Hardware</strong>”) provided by or through <strong className="font-semibold text-ink">GetsMotives Ltd</strong> for use with <strong className="font-semibold text-ink">GetsMotives and KorePOS</strong>.
          </p>
          
          <p className="mb-4 text-ink/80 leading-relaxed">
            It supplements <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a> and <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing Policy</a>.
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
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Device</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Any Hardware unit identified by serial number.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Warranty period</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">As stated on your order or invoice.</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Fair wear</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Normal deterioration from intended commercial use.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">2. Orders and delivery</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Orders are subject to availability and credit approval</li>
            <li className="leading-relaxed">Risk of loss passes on delivery to your address or collection point</li>
            <li className="leading-relaxed">Inspect shipments within <strong className="font-semibold text-ink">48 hours</strong> and report damage or shortages to <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a></li>
            <li className="leading-relaxed">Specifications may be updated; equivalent substitutes may be provided</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">3. Ownership</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Purchase:</strong> title passes on full payment unless a retention of title clause is stated on invoice</li>
            <li className="leading-relaxed"><strong className="font-semibold text-ink">Lease/loan:</strong> we or our finance partner retain title; you must not sell, pledge, or transfer Devices without consent</li>
          </ul>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">4. Setup and use</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">You must:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Use Devices only with supported Platform versions</li>
            <li className="leading-relaxed">Keep firmware updated when prompted</li>
            <li className="leading-relaxed">Protect Devices from theft, liquid damage, and misuse</li>
            <li className="leading-relaxed">Not tamper with security seals or install unauthorised software that compromises PCI or security</li>
            <li className="leading-relaxed">Register Devices to your account</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Tap to Pay</strong> requires compatible hardware, OS versions, and provider approval.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">5. Fees</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Hardware pricing, shipping, deposits, and lease payments are shown at checkout or in your order form. Unreturned lease Devices may incur charges per your lease schedule.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">6. Warranty</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            During the warranty period, defective Devices due to manufacturing fault will be repaired or replaced at our option. Warranty does not cover:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-ink/80">
            <li className="leading-relaxed">Accidental damage, liquid ingress, drops</li>
            <li className="leading-relaxed">Unauthorized repair or modification</li>
            <li className="leading-relaxed">Power surges without approved protection</li>
            <li className="leading-relaxed">Consumables (paper, cables) unless stated</li>
          </ul>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Statutory consumer rights</strong> are unaffected where you qualify as a consumer (typically B2B purchases are excluded).
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">7. Returns and cancellation</h2>
          <div className="mb-6 w-full overflow-x-auto text-sm">
            <table className="w-full min-w-[32rem] border-collapse rounded-lg border border-ink/10 overflow-hidden">
              <thead className="bg-ink/5 text-left text-ink">
                <tr>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Type</th>
                  <th className="border-b border-ink/10 px-4 py-3 font-semibold">Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Change of mind (B2B)</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Returns within 14 days of delivery if unused, original packaging, restocking fee up to 20%</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Defective on arrival</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Replacement or refund of device price within 30 days</td>
                </tr>
                <tr>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80"><strong className="font-semibold text-ink">Lease termination</strong></td>
                  <td className="border-b border-ink/10 px-4 py-3 text-ink/80">Return all Devices in good working order; charges for damage or missing accessories</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Return shipping may be at your cost unless we specify otherwise.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">8. End of life and recycling</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Dispose of Devices per WEEE/e-waste regulations. We can provide recycling guidance on request.
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">9. Limitation of liability</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            Hardware liability is limited to repair/replacement of the Device or refund of purchase price. We are not liable for lost revenue during downtime except as per <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/service-level-agreement">SLA</a> for Platform services (not hardware courier delays).
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">10. Governing law</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">the laws of England and Wales</strong> · <strong className="font-semibold text-ink">England and Wales</strong>
          </p>

          <hr className="my-10 border-ink/10" />
          
          <h2 className="mt-10 mb-4 font-display font-bold text-2xl text-ink">11. Contact</h2>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · <a href="mailto:support@korepos.co.uk" className="text-coral underline-offset-2 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">support@korepos.co.uk</a> · GetsMotives Ltd, Flat 42 Regents Court, Stonegrove, Edgware, HA8 8AD, United Kingdom
          </p>
          <p className="mb-4 text-ink/80 leading-relaxed">
            <strong className="font-semibold text-ink">Related:</strong>{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/merchant-terms">Merchant Terms</a> ·{" "}
            <a className="text-coral underline-offset-2 hover:underline transition-colors" href="/legal/refund-and-cancellation">Refund &amp; Cancellation</a>
          </p>
        </div>

        {/* Aside: Related Policies */}
        <aside className="mt-16 border-t border-ink/10 pt-10">
          <h2 className="font-display font-bold text-xl text-ink mb-4">Related policies</h2>
          <ul className="space-y-3">
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/pricing-and-billing">Pricing &amp; Billing Policy</a></li>
            <li><a className="text-sm font-medium text-coral hover:underline transition-colors" href="/legal/terms-and-conditions">Terms &amp; Conditions</a></li>
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