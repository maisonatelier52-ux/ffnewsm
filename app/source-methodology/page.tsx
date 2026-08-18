import React from 'react';
import { Binary, FileCheck } from 'lucide-react';

export default function SourceMethodologyPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            RESEARCH PROTOCOLS
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Source Methodology &amp; Data Standards
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            How our team analyzes primary legal filings, bathymetric telemetry, microeconomic balance sheets, and peer-reviewed scientific studies.
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-black" /> 1. PRIMARY DOCUMENT PROTOCOLS
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              We prioritize primary documentation—court dockets, treaty drafts, patent filings, corporate filings, and satellite imagery—over secondary press releases.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Binary className="w-5 h-5 text-black" /> 2. QUANTITATIVE DATA STANDARDS
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              Data investigations covering oceanographic sonar maps, semiconductor wafer yields, or liquidity flows are audited by data scientists using open-source Python (Pandas, NumPy) and R scripts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
