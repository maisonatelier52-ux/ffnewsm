import React from 'react';
import { PieChart, ShieldCheck } from 'lucide-react';

export default function OwnershipAndFundingPage() {
  const fundingSources = [
    {
      source: 'Direct Reader Subscriptions & Memberships',
      percentage: '55%',
      color: 'bg-black text-white',
      description: 'Individual and institutional annual digital subscriptions, print dispatches, and corporate archival access passes.',
    },
    {
      source: 'Transparent Display Ads & Sponsorships',
      percentage: '30%',
      color: 'bg-zinc-800 text-white',
      description: 'Vetted ethical advertising partnerships and clearly tagged sponsored research supplements adhering to strict editorial independence rules.',
    },
    {
      source: 'Content Licensing & Syndication API',
      percentage: '15%',
      color: 'bg-zinc-600 text-white',
      description: 'B2B wire syndication licensing to university libraries, research institutes, financial data terminals, and international media outlets.',
    },
  ];

  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            FINANCIAL TRANSPARENCY
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Ownership &amp; Funding Transparency
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            The Nordic Chronicle is committed to 100% financial transparency. We publish our revenue distribution breakdown annually to assure readers of our editorial independence.
          </p>
        </div>

        <div className="bg-zinc-50 p-8 sm:p-10 border border-black space-y-8 mb-12">
          <div className="flex items-center justify-between border-b-2 border-black pb-4">
            <h2 className="text-2xl font-serif font-black text-black uppercase flex items-center gap-2">
              <PieChart className="w-6 h-6 text-black" /> FISCAL REVENUE BREAKDOWN (2026 AUDIT)
            </h2>
            <span className="text-xs font-sans font-extrabold uppercase tracking-widest text-black">
              INDEPENDENT TRUST MODEL
            </span>
          </div>

          <div className="w-full h-8 bg-zinc-200 flex border border-black overflow-hidden">
            <div className="w-[55%] bg-black text-white h-full flex items-center justify-center text-[10px] font-sans font-black uppercase tracking-widest">
              55% SUBSCRIPTIONS
            </div>
            <div className="w-[30%] bg-zinc-800 text-white h-full flex items-center justify-center text-[10px] font-sans font-black uppercase tracking-widest">
              30% ADS
            </div>
            <div className="w-[15%] bg-zinc-600 text-white h-full flex items-center justify-center text-[10px] font-sans font-black uppercase tracking-widest">
              15% LICENSING
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingSources.map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-black space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-black text-black">
                    {item.percentage}
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-black uppercase">
                  {item.source}
                </h3>
                <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black text-white p-8 space-y-4">
          <h3 className="text-2xl font-serif font-black uppercase flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-white" /> NON-PROFIT PRESS FOUNDATION TRUST
          </h3>
          <p className="text-sm font-sans text-zinc-300 leading-relaxed max-w-3xl">
            To prevent hostile corporate buyouts or political influence, 75% of voting share capital in The Nordic Chronicle Media Group AB is permanently held by the non-profit <em>Nordic Editorial Freedom Foundation</em>.
          </p>
        </div>
      </div>
    </div>
  );
}
