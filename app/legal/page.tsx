import React from 'react';
import { Building2, Scale } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            CORPORATE DISCLOSURES
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Legal &amp; Entity Disclosures
          </h1>
          <p className="text-xs font-sans text-zinc-500 uppercase tracking-widest mt-3 font-bold">
            SWEDISH ORG. NR: 556912-4029 | ISSN 2004-9812
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Building2 className="w-5 h-5 text-black" /> CORPORATE ENTITY &amp; OWNERSHIP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-zinc-800 font-medium">
              <p><strong>Legal Name:</strong> The Nordic Chronicle Media Group AB</p>
              <p><strong>Jurisdiction:</strong> Sweden (Kingdom of Sweden)</p>
              <p><strong>Registration Number:</strong> SE556912402901</p>
              <p><strong>Responsible Editor:</strong> Dr. Lars Lindholm</p>
              <p><strong>Address:</strong> Strandvägen 42, 114 56 Stockholm</p>
              <p><strong>Regulatory Board:</strong> Swedish Press and Broadcasting Authority</p>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Scale className="w-5 h-5 text-black" /> DMCA DESIGNATED COPYRIGHT AGENT
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              File copyright infringement takedown notices under DMCA or EU Directives with our designated legal office:
            </p>
            <div className="bg-white p-5 border border-black text-xs font-sans space-y-2 text-black">
              <p><strong>Designated Agent:</strong> Counsel Legal Office (Ref: DMCA Desk)</p>
              <p><strong>Address:</strong> Strandvägen 42, 114 56 Stockholm, Sweden</p>
              <p><strong>Email:</strong> legal-dmca@nordicchronicle.com</p>
            </div>
          </div>

          <div className="bg-black text-white p-8 space-y-3">
            <h3 className="text-xl font-serif font-bold text-white uppercase">
              PROTECTION OF SOURCES GUARANTEE
            </h3>
            <p className="text-xs font-sans text-zinc-300 leading-relaxed">
              Under Swedish Constitutional Freedom of the Press Act (Tryckfrihetsförordningen), confidential source identities are legally protected. Journalists are constitutionally prohibited from disclosing anonymous sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
