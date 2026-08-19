import React from 'react';
import Link from 'next/link';
import { PieChart, ShieldCheck } from 'lucide-react';

export default function OwnershipAndFundingPage() {
  const fundingSources = [
    {
      source: 'Direct Reader Subscriptions & Memberships',
      percentage: '55%',
      color: 'bg-zinc-900 text-white',
      description: 'Individual and institutional annual digital subscriptions, print dispatches, and corporate archival access passes.',
    },
    {
      source: 'Transparent Display Ads & Sponsorships',
      percentage: '30%',
      color: 'bg-zinc-700 text-white',
      description: 'Vetted ethical advertising partnerships and clearly tagged sponsored research supplements adhering to strict editorial independence rules.',
    },
    {
      source: 'Content Licensing & Syndication API',
      percentage: '15%',
      color: 'bg-zinc-500 text-white',
      description: 'B2B wire syndication licensing to university libraries, research institutes, financial data terminals, and international media outlets.',
    },
  ];

  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>OWNERSHIP &amp; FUNDING</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            COMPANY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Ownership &amp; Funding
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            Domain Name is committed to 100% financial transparency. We publish our revenue distribution breakdown annually to assure readers of our editorial independence.
          </p>
        </div>

        <div className="bg-zinc-50 border border-zinc-200/80 rounded-3xl p-8 sm:p-10 space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-zinc-700" /> FISCAL REVENUE BREAKDOWN (2026 AUDIT)
            </h2>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
              INDEPENDENT TRUST MODEL
            </span>
          </div>

          <div className="w-full h-8 bg-zinc-200 flex rounded-full overflow-hidden p-0.5">
            <div className="w-[55%] bg-zinc-900 text-white h-full rounded-l-full flex items-center justify-center text-[10px] font-sans font-bold uppercase tracking-widest">
              55% SUBSCRIPTIONS
            </div>
            <div className="w-[30%] bg-zinc-700 text-white h-full flex items-center justify-center text-[10px] font-sans font-bold uppercase tracking-widest">
              30% ADS
            </div>
            <div className="w-[15%] bg-zinc-500 text-white h-full rounded-r-full flex items-center justify-center text-[10px] font-sans font-bold uppercase tracking-widest">
              15% LICENSING
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingSources.map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-zinc-200/80 rounded-2xl space-y-3">
                <span className="text-3xl font-serif font-extrabold text-zinc-900 block">
                  {item.percentage}
                </span>
                <h3 className="text-sm font-serif font-bold text-zinc-900">
                  {item.source}
                </h3>
                <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 text-white rounded-3xl p-8 space-y-4">
          <h3 className="text-xl font-serif font-bold uppercase flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-white" /> NON-PROFIT PRESS FOUNDATION TRUST
          </h3>
          <p className="text-sm font-sans text-zinc-300 leading-relaxed max-w-3xl">
            To prevent hostile corporate buyouts or political influence, 75% of voting share capital in Domain Name Media Group is permanently held by the non-profit <em>Editorial Freedom Foundation</em>.
          </p>
        </div>

      </div>
    </div>
  );
}
