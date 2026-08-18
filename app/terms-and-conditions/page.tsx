import React from 'react';
import { Scale, FileText, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            LEGAL FRAMEWORK
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Terms &amp; Conditions of Service
          </h1>
          <p className="text-xs font-sans text-zinc-500 uppercase tracking-widest mt-3 font-bold">
            EFFECTIVE DATE: JANUARY 1, 2026 | REVISION 4.2
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Scale className="w-5 h-5 text-black" /> 1. ACCEPTANCE OF TERMS &amp; SCOPE
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              By accessing, browsing, or utilizing any digital services provided by The Nordic Chronicle Media Group AB, including website pages, RSS feeds, API endpoints, mobile applications, and newsletter dispatches, you agree to be legally bound by these Terms and Conditions.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <FileText className="w-5 h-5 text-black" /> 2. INTELLECTUAL PROPERTY &amp; SYNDICATION
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              All editorial articles, investigation reports, bathymetric data visualizations, photographs, graphics, and code published under The Nordic Chronicle domain are protected by international copyright treaties and Swedish Press Freedom laws.
            </p>
            <ul className="space-y-2 text-xs font-sans text-zinc-700 pl-4 list-disc font-medium">
              <li><strong>Non-Commercial Use:</strong> Readers may share link URLs and print single copies for non-commercial educational purposes.</li>
              <li><strong>Syndication Requirements:</strong> Automated web-scraping or AI pre-training requires a commercial syndication agreement.</li>
              <li><strong>Academic Citation:</strong> Excerpts up to 150 words may be quoted with hyperlinked attribution to <em>The Nordic Chronicle</em>.</li>
            </ul>
          </div>

          <div className="bg-black text-white p-8 space-y-3">
            <h2 className="text-xl font-serif font-bold uppercase flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-white" /> 3. FINANCIAL &amp; ANALYTICAL DISCLAIMER
            </h2>
            <p className="text-xs font-sans text-zinc-300 leading-relaxed">
              Articles covering global treasury markets, commodity pricing, or corporate equity bonds are published strictly for journalism purposes. Nothing published constitutes individual investment, financial, legal, or tax advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
