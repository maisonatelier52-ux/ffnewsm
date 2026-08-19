import React from 'react';
import Link from 'next/link';
import { Binary, FileCheck } from 'lucide-react';

export default function SourceMethodologyPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>SOURCE METHODOLOGY</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            POLICIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Source Methodology
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            How our team analyzes primary legal filings, bathymetric telemetry, microeconomic balance sheets, and peer-reviewed scientific studies.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-zinc-700" /> 1. PRIMARY DOCUMENT PROTOCOLS
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              We prioritize primary documentation—court dockets, treaty drafts, patent filings, corporate filings, and satellite imagery—over secondary press releases.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Binary className="w-5 h-5 text-zinc-700" /> 2. QUANTITATIVE DATA STANDARDS
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              Data investigations covering oceanographic sonar maps, semiconductor wafer yields, or liquidity flows are audited by data scientists using open-source tools and analytical code scripts.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
