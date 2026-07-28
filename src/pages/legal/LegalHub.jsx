import React, { useEffect } from "react";

export default function LegalHub() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 pb-20 md:pb-0 bg-white font-body">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-ink/10 pt-32 pb-20 md:pt-40 md:pb-28 bg-ink/5">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-16 relative">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-coral font-semibold">
              Legal &amp; Compliance
            </p>
            <h1 className="max-w-3xl font-display font-extrabold text-4xl tracking-tight text-ink md:text-5xl">
              Policies that protect your business and your customers
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
              Transparent, GDPR-aligned documentation for the GetsMotives and KorePOS platform — payments, POS, bookings, and operations.
            </p>
          </div>
        </div>
      </section>

      {/* Policies List Section */}
      <section className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto w-full px-5 md:px-16 max-w-3xl">
          
          <p className="text-sm text-ink/60 mb-12">
            Operated by <span className="text-ink font-semibold">GetsMotives Ltd</span> · Company no. 16846219 · Last updated 17 May 2026
          </p>

          <div className="space-y-14">
            
            {/* Core policies */}
            <section>
              <h2 className="font-display font-bold text-2xl text-ink">Core policies</h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/privacy-policy">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Privacy Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">How GetsMotives and KorePOS collect, use, store, and protect personal data under UK GDPR.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/terms-and-conditions">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Terms &amp; Conditions</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Platform terms governing access to GetsMotives and KorePOS services.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/cookie-policy">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Cookie Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">How we use cookies and similar technologies on our websites and apps.</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Commercial */}
            <section>
              <h2 className="font-display font-bold text-2xl text-ink">Commercial</h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/pricing-and-billing">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Pricing &amp; Billing Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Subscriptions, fees, invoicing, trials, and billing practices.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/refund-and-cancellation">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Refund &amp; Cancellation Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Cancellations, refunds for platform fees, and end-customer transactions.</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Payments & merchants */}
            <section>
              <h2 className="font-display font-bold text-2xl text-ink">Payments &amp; merchants</h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/merchant-terms">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Merchant Terms</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Terms for businesses accepting payments through the platform.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/payment-terms">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Payment Terms</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Card payments, settlements, chargebacks, and third-party processors.</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Compliance & data */}
            <section>
              <h2 className="font-display font-bold text-2xl text-ink">Compliance &amp; data</h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/acceptable-use-policy">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Acceptable Use Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Permitted and prohibited uses of GetsMotives and KorePOS.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/data-processing-agreement">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Data Processing Agreement</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Controller–processor terms for merchant personal data processed on your behalf.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/aml-kyc">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">AML &amp; KYC Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Identity verification, anti-money laundering, and fraud prevention.</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Operations & security */}
            <section>
              <h2 className="font-display font-bold text-2xl text-ink">Operations &amp; security</h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/hardware-agreement">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Hardware Agreement</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Sale, lease, warranty, and return terms for KorePOS hardware devices.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/security-policy">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Security Policy</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Technical and organisational measures protecting platform data.</span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/service-level-agreement">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Service Level Agreement</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Uptime targets, support response times, and service credits.</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* Partners */}
            <section>
              <h2 className="font-display font-bold text-2xl text-ink">Partners</h2>
              <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                <li>
                  <a className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between" href="/legal/partner-affiliate-terms">
                    <span className="font-semibold text-ink group-hover:text-coral transition-colors">Partner &amp; Affiliate Terms</span>
                    <span className="text-sm text-ink/60 sm:max-w-md sm:text-right">Terms for referral partners, resellers, and affiliates.</span>
                  </a>
                </li>
              </ul>
            </section>

          </div>

          <p className="mt-12 text-sm text-ink/60">
            Questions? Contact <a href="mailto:support@korepos.co.uk" className="text-coral hover:underline">support@korepos.co.uk</a> · Support: <a href="mailto:support@korepos.co.uk" className="text-coral hover:underline">support@korepos.co.uk</a>
          </p>
          
        </div>
      </section>
      
    </main>
  );
}