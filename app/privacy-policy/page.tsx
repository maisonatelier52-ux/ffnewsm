import React from 'react';
import Link from 'next/link';
import { Lock, EyeOff, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>PRIVACY POLICY</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            POLICIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-sans text-zinc-400 uppercase tracking-widest font-bold">
            LAST UPDATED: AUGUST 1, 2026 | ZERO-DATA-SALE COMMITMENT
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-900 text-white rounded-2xl p-8 space-y-3">
            <h2 className="text-xl font-serif font-bold text-white uppercase flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-white" /> ZERO-DATA-SALE COMMITMENT
            </h2>
            <p className="text-sm font-sans text-zinc-300 leading-relaxed">
              Domain Name does NOT sell, rent, monetize, or broker personal reader telemetry, browsing logs, or email addresses to third-party ad networks or data brokers under any circumstances.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-zinc-700" /> 1. EUROPEAN UNION (GDPR) COMPLIANCE
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              Under Regulation (EU) 2016/679 (GDPR), EU residents enjoy explicit rights regarding their personal data, including the right to erasure (&ldquo;right to be forgotten&rdquo;) and data portability.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-zinc-700" /> 2. CALIFORNIA CONSUMER PRIVACY ACT (CCPA)
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              To exercise data rights or submit a privacy inquiry, contact our Data Protection Officer at <span className="font-bold text-zinc-900">dpo@domainname.com</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
