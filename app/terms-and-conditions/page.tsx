import React from 'react';
import Link from 'next/link';
import { Scale, FileText, AlertTriangle } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>TERMS AND CONDITIONS</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            COMPANY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Terms And Conditions
          </h1>
          <p className="text-xs font-sans text-zinc-400 uppercase tracking-widest font-bold">
            EFFECTIVE DATE: JANUARY 1, 2026 | REVISION 4.2
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-zinc-700" /> 1. ACCEPTANCE OF TERMS &amp; SCOPE
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              By accessing, browsing, or utilizing any digital services provided by Domain Name Media Group, including website pages, RSS feeds, API endpoints, mobile applications, and newsletter dispatches, you agree to be legally bound by these Terms and Conditions.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-zinc-700" /> 2. INTELLECTUAL PROPERTY &amp; SYNDICATION
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              All editorial articles, investigation reports, bathymetric data visualizations, photographs, graphics, and code published under Domain Name domain are protected by international copyright treaties and Press Freedom laws.
            </p>
            <ul className="space-y-2 text-xs font-sans text-zinc-600 pl-4 list-disc font-medium">
              <li><strong>Non-Commercial Use:</strong> Readers may share link URLs and print single copies for non-commercial educational purposes.</li>
              <li><strong>Syndication Requirements:</strong> Automated web-scraping or AI pre-training requires a commercial syndication agreement.</li>
              <li><strong>Academic Citation:</strong> Excerpts up to 150 words may be quoted with hyperlinked attribution to <em>Domain Name</em>.</li>
            </ul>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 space-y-3">
            <h2 className="text-lg font-serif font-bold flex items-center gap-2 text-white">
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
