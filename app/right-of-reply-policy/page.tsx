import React from 'react';
import Link from 'next/link';
import { Clock, FileCheck2 } from 'lucide-react';

export default function RightOfReplyPolicyPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>RIGHT OF REPLY POLICY</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            COMPANY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Right of Reply Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            Our protocol for providing named individuals, public figures, corporate entities, and institutions fair opportunity to respond to critical investigatory reporting.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-zinc-700" /> 1. PRE-PUBLICATION RESPONSE WINDOWS
            </h2>
            <p className="text-sm font-sans text-zinc-600 leading-relaxed">
              When an investigative article contains allegations concerning a specific individual or organization, our correspondents are obligated to contact the subject prior to publication:
            </p>
            <ul className="space-y-2 text-xs font-sans text-zinc-600 pl-4 list-disc font-medium">
              <li><strong>Standard Response Window:</strong> A minimum of 48 business hours is provided for standard investigatory pieces.</li>
              <li><strong>Urgent Breaking News Window:</strong> A minimum 12-hour response window is granted before publication.</li>
            </ul>
          </div>

          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-serif font-bold text-zinc-900 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-zinc-700" /> 2. POST-PUBLICATION FORMAL REPLY PROCESS
            </h2>
            <div className="bg-white p-6 border border-zinc-200 rounded-xl space-y-3 text-xs font-sans text-zinc-700">
              <p><strong>Step 1: Written Notice:</strong> Submit a statement (up to 500 words) to <span className="font-bold text-zinc-900">rightofreply@domainname.com</span>.</p>
              <p><strong>Step 2: Editorial Review:</strong> The Standards Board conducts a 72-hour review of original notes and transcripts.</p>
              <p><strong>Step 3: Appended Reply:</strong> Validated replies are appended directly to the top or bottom of the story canvas.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
