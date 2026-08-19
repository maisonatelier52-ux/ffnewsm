'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Mail } from 'lucide-react';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the core editorial focus of Domain Name?',
      answer: 'Domain Name is an international news publication specializing in global geopolitics, oceanographic deep-sea exploration, central bank monetary liquidity, sub-nanometer semiconductor technology, and spatial culture.',
    },
    {
      question: 'How do digital subscriptions and paywalls work?',
      answer: 'Readers receive access to 3 complimentary dispatches per month. Full unlimited digital access, PDF archives, and daily briefings require a Digital Membership.',
    },
    {
      question: 'How do I submit an investigative leak or confidential tip?',
      answer: 'Confidential tips can be transmitted via our PGP-encrypted server (Fingerprint: 4B89 21F0 A9C2 E55B 808F). Confidential source identities are legally protected.',
    },
    {
      question: 'Can university libraries or financial terminals syndicate your wire?',
      answer: 'Yes. Our commercial licensing desk offers automated REST/GraphQL wire APIs for institutional subscribers. Contact syndication@domainname.com for API key access.',
    },
    {
      question: 'What is your policy regarding AI-generated articles?',
      answer: 'All articles are researched and written exclusively by human correspondents. We do not use generative AI to write articles. Stock photos and graphics are clearly attributed to accredited photography archives.',
    },
    {
      question: 'How can I submit a formal Right of Reply statement?',
      answer: 'Named individuals or corporate entities in published stories can email rightofreply@domainname.com within 30 days of publication. Validated replies are appended to the story canvas.',
    },
  ];

  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>FAQ</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            POLICIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            Faq
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            Find immediate answers regarding subscriber memberships, source confidentiality, institutional syndication, and editorial standards.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-zinc-900 text-base sm:text-lg hover:bg-zinc-100/80 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-sans text-xs font-bold text-zinc-400">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm font-sans text-zinc-600 leading-relaxed border-t border-zinc-200/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl bg-zinc-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-serif font-bold uppercase text-white">Have a question not answered here?</h3>
            <p className="text-xs font-sans text-zinc-400 mt-1">Our subscriber support desk is available via email.</p>
          </div>
          <a
            href="mailto:support@domainname.com"
            className="bg-white text-zinc-900 hover:bg-zinc-100 font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl shrink-0 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> CONTACT READER DESK
          </a>
        </div>

      </div>
    </div>
  );
}
