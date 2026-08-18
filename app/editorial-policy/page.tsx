import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

export default function EditorialPolicyPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            CODE OF STANDARDS
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Editorial Policy &amp; Ethics Standards
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            The principles governing our reporting, fact-checking workflows, conflict of interest disclosures, and anonymous source protocols.
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-black" /> 1. DOUBLE-BLIND FACT-CHECKING
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              Every news report, scientific article, and financial analysis published by The Nordic Chronicle undergoes independent verification by a dedicated fact-checking desk before copy clearance is granted.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-black" /> 2. CONFLICT OF INTEREST POLICY
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              Journalists, editors, and analysts employed by The Chronicle are strictly prohibited from holding financial equities in companies or industries they actively cover.
            </p>
          </div>

          <div className="bg-black text-white p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold uppercase flex items-center gap-2">
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
