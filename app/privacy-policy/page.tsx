import React from 'react';
import { Lock, EyeOff, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            DATA RIGHTS &amp; PRIVACY
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Privacy Policy (GDPR &amp; CCPA Disclosures)
          </h1>
          <p className="text-xs font-sans text-zinc-500 uppercase tracking-widest mt-3 font-bold">
            LAST UPDATED: AUGUST 1, 2026 | ZERO-DATA-SALE COMMITMENT
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-black text-white p-8 space-y-3">
            <h2 className="text-2xl font-serif font-black uppercase flex items-center gap-2">
              <EyeOff className="w-6 h-6 text-white" /> ZERO-DATA-SALE COMMITMENT
            </h2>
            <p className="text-sm font-sans text-zinc-300 leading-relaxed">
              The Nordic Chronicle does NOT sell, rent, monetize, or broker personal reader telemetry, browsing logs, or email addresses to third-party ad networks or data brokers under any circumstances.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Lock className="w-5 h-5 text-black" /> 1. EUROPEAN UNION (GDPR) COMPLIANCE
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              Under Regulation (EU) 2016/679 (GDPR), EU residents enjoy explicit rights regarding their personal data, including the right to erasure (&ldquo;right to be forgotten&rdquo;) and data portability.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <FileText className="w-5 h-5 text-black" /> 2. CALIFORNIA CONSUMER PRIVACY ACT (CCPA)
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              To exercise data rights or submit a privacy inquiry, contact our Data Protection Officer at <span className="font-bold">dpo@nordicchronicle.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
