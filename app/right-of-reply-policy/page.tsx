import React from 'react';
import { Clock, FileCheck2 } from 'lucide-react';

export default function RightOfReplyPolicyPage() {
  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            EDITORIAL ETHICS
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Right of Reply Policy
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            Our protocol for providing named individuals, public figures, corporate entities, and institutions fair opportunity to respond to critical investigatory reporting.
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <Clock className="w-5 h-5 text-black" /> 1. PRE-PUBLICATION RESPONSE WINDOWS
            </h2>
            <p className="text-sm font-sans text-zinc-800 leading-relaxed">
              When an investigative article contains allegations of corporate wrongdoing, policy non-compliance, legal violations, or financial impropriety concerning a specific individual or organization, our correspondents are obligated to contact the subject prior to publication:
            </p>
            <ul className="space-y-2 text-xs font-sans text-zinc-700 pl-4 list-disc font-medium">
              <li><strong>Standard Response Window:</strong> A minimum of 48 business hours is provided for standard investigatory pieces.</li>
              <li><strong>Urgent Breaking News Window:</strong> A minimum 12-hour response window is granted before publication.</li>
            </ul>
          </div>

          <div className="bg-zinc-50 p-8 border-l-4 border-black space-y-4">
            <h2 className="text-2xl font-serif font-bold text-black uppercase pb-2 border-b border-black flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-black" /> 2. POST-PUBLICATION FORMAL REPLY PROCESS
            </h2>
            <div className="bg-white p-6 border border-black space-y-3 text-xs font-sans text-black">
              <p><strong>Step 1: Written Notice:</strong> Submit a statement (up to 500 words) to <span className="font-bold">rightofreply@nordicchronicle.com</span>.</p>
              <p><strong>Step 2: Editorial Review:</strong> The Standards Board conducts a 72-hour review of original notes and transcripts.</p>
              <p><strong>Step 3: Appended Reply:</strong> Validated replies are appended directly to the top or bottom of the story canvas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
