import React from 'react';
import Link from 'next/link';
import { Tag, ShieldCheck } from 'lucide-react';

export default function AdvertisingAndSponsoredPolicyPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>ADVERTISING &amp; SPONSORED POLICY</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            POLICIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Advertising &amp; Sponsored Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            Our strict separation between commercial operations and newsroom coverage, including mandatory sponsored content disclosure tags.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-zinc-700" /> 1. COMPLETE EDITORIAL &amp; COMMERCIAL SEPARATION
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              Domain Name maintains an absolute operational separation between our advertising sales team and our investigative newsroom. Advertisers exert zero editorial influence over newsroom coverage.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Tag className="w-5 h-5 text-zinc-700" /> 2. MANDATORY TAGGING GUIDELINES
            </h2>
            <div className="space-y-3 pt-2">
              <div className="p-5 bg-zinc-900 text-white rounded-xl flex items-center justify-between">
                <div>
                  <span className="bg-white text-zinc-900 text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    SPONSORED DISPATCH
                  </span>
                  <p className="text-xs font-sans text-zinc-300 mt-2">Paid content created by commercial partners independent of newsroom staff.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
