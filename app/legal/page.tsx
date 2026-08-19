import React from 'react';
import Link from 'next/link';
import { Building2, Scale } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>LEGAL</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            COMPANY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Legal
          </h1>
          <p className="text-xs font-sans text-zinc-400 uppercase tracking-widest font-bold">
            ORG. NR: 556912-4029 | ISSN 2004-9812
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-zinc-700" /> CORPORATE ENTITY &amp; OWNERSHIP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-zinc-600 font-medium">
              <p><strong>Legal Name:</strong> Domain Name Media Group</p>
              <p><strong>Jurisdiction:</strong> International / Global Media</p>
              <p><strong>Registration Number:</strong> SE556912402901</p>
              <p><strong>Responsible Editor:</strong> Dr. Lars Lindholm</p>
              <p><strong>Regulatory Board:</strong> Press and Broadcasting Authority</p>
            </div>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-zinc-700" /> DMCA DESIGNATED COPYRIGHT AGENT
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              File copyright infringement takedown notices under DMCA or EU Directives with our designated legal office:
            </p>
            <div className="bg-white p-5 border border-zinc-200 rounded-xl text-xs font-sans space-y-2 text-zinc-700">
              <p><strong>Designated Agent:</strong> Counsel Legal Office (Ref: DMCA Desk)</p>
              <p><strong>Email:</strong> legal-dmca@domainname.com</p>
            </div>
          </div>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 space-y-3">
            <h3 className="text-lg font-serif font-bold text-white uppercase">
              PROTECTION OF SOURCES GUARANTEE
            </h3>
            <p className="text-xs font-sans text-zinc-300 leading-relaxed">
              Under Constitutional Freedom of the Press provisions, confidential source identities are legally protected. Journalists are constitutionally prohibited from disclosing anonymous sources.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
