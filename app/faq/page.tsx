'use client';

import React, { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the core editorial focus of The Nordic Chronicle?',
      answer: 'The Nordic Chronicle is an international news publication specializing in global geopolitics, oceanographic deep-sea exploration, central bank monetary liquidity, sub-nanometer semiconductor technology, and spatial culture.',
    },
    {
      question: 'How do digital subscriptions and paywalls work?',
      answer: 'Readers receive access to 3 complimentary dispatches per month. Full unlimited digital access, PDF archives, and daily 06:00 UTC Briefings require a Nordic Monocle Digital Membership.',
    },
    {
      question: 'How do I submit an investigative leak or confidential tip?',
      answer: 'Confidential tips can be transmitted via our PGP-encrypted server (Fingerprint: 4B89 21F0 A9C2 E55B 808F). Under Swedish Press Freedom laws, confidential source identities are legally protected.',
    },
    {
      question: 'Can university libraries or financial terminals syndicate your wire?',
      answer: 'Yes. Our commercial licensing desk offers automated REST/GraphQL wire APIs for institutional subscribers. Contact syndication@nordicchronicle.com for API key access.',
    },
    {
      question: 'What is your policy regarding AI-generated articles?',
      answer: 'All articles are researched and written exclusively by human correspondents. We do not use generative AI to write articles. Stock photos and graphics are clearly attributed to accredited photography archives.',
    },
    {
      question: 'How can I submit a formal Right of Reply statement?',
      answer: 'Named individuals or corporate entities in published stories can email rightofreply@nordicchronicle.com within 30 days of publication. Validated replies are appended to the story canvas.',
    },
  ];

  return (
    <div className="w-full bg-white text-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 pb-6 border-b-2 border-black">
          <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
            READER SUPPORT &amp; KNOWLEDGE BASE
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-black leading-tight mt-4">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg font-sans text-zinc-700 mt-3 leading-relaxed">
            Find immediate answers regarding subscriber memberships, source confidentiality, institutional syndication, and editorial standards.
          </p>
        </div>

        <div className="max-w-4xl space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-50 border border-black overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-black text-lg hover:bg-black hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-sans text-sm font-black">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm font-sans text-zinc-800 leading-relaxed bg-white border-t border-black">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl bg-black text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-black uppercase">Have a question not answered here?</h3>
            <p className="text-xs font-sans text-zinc-400 mt-1">Our subscriber support desk is available 24/7 via email.</p>
          </div>
          <a
            href="mailto:support@nordicchronicle.com"
            className="bg-white text-black hover:bg-zinc-200 font-sans text-xs font-black uppercase tracking-widest px-6 py-3 shrink-0 transition-colors"
          >
            CONTACT READER DESK
          </a>
        </div>
      </div>
    </div>
  );
}
