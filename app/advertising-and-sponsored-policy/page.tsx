import React from 'react';
import { Tag, ShieldCheck } from 'lucide-react';

export default function AdvertisingAndSponsoredPolicyPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            COMMERCIAL GUIDELINES
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Advertising &amp; Sponsored Content Policy
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            Our strict separation between commercial operations and newsroom coverage, including mandatory sponsored content disclosure tags.
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-black" /> 1. COMPLETE EDITORIAL &amp; COMMERCIAL SEPARATION
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              The Nordic Chronicle maintains an absolute operational &ldquo;Chinese Wall&rdquo; between our advertising sales team and our investigative newsroom. Advertisers exert zero editorial influence over newsroom coverage.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Tag className="w-5 h-5 text-black" /> 2. MANDATORY TAGGING GUIDELINES
            </h2>
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-black text-white flex items-center justify-between">
                <div>
                  <span className="bg-white text-black text-[10px] font-sans font-black uppercase tracking-widest px-2.5 py-0.5">
                    SPONSORED DISPATCH
                  </span>
                  <p className="text-xs font-sans text-zinc-300 mt-1">Paid content created by commercial partners independent of newsroom staff.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
