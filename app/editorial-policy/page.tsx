import React from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

export default function EditorialPolicyPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>EDITORIAL POLICY</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            POLICIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Editorial Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            The principles governing our reporting, fact-checking workflows, conflict of interest disclosures, and anonymous source protocols.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-zinc-700" /> 1. DOUBLE-BLIND FACT-CHECKING
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              Every news report, scientific article, and financial analysis published by Domain Name undergoes independent verification by a dedicated fact-checking desk before copy clearance is granted.
            </p>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-zinc-700" /> 2. CONFLICT OF INTEREST POLICY
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              Journalists, editors, and analysts employed by Domain Name are strictly prohibited from holding financial equities in companies or industries they actively cover.
            </p>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 space-y-4">
            <h2 className="text-lg font-serif font-bold text-white uppercase flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-white" /> 3. ANONYMOUS SOURCING RULES
            </h2>
            <p className="text-xs font-sans text-zinc-300 leading-relaxed">
              Anonymous sources are utilized only as a last resort when vital public-interest information cannot be obtained through named channels and the source faces credible personal or professional retaliation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
