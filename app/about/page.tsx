import React from 'react';
import { ShieldCheck, Globe, CheckCircle2, Scale } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const corePillars = [
    {
      title: 'Editorial Integrity & Neutrality',
      description: 'We enforce an uncompromised separation between commercial interests and editorial coverage. Our journalists adhere strictly to verified primary source reporting.',
      icon: ShieldCheck,
    },
    {
      title: 'Global Correspondent Network',
      description: 'With 14 dedicated news bureaus across Europe, North America, and Asia, our correspondents provide firsthand oceanographic, economic, and political analysis.',
      icon: Globe,
    },
    {
      title: 'Multi-Tiered Fact-Checking',
      description: 'Every article undergoes double-blind fact verification, statistical audit, and legal review prior to digital syndication or print release.',
      icon: CheckCircle2,
    },
    {
      title: 'Public Accountability',
      description: 'We publish open corrections, maintain transparent financial funding breakdowns, and uphold reader right-of-reply standards across all jurisdictions.',
      icon: Scale,
    },
  ];

  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span>ABOUT US</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-6 border-b border-zinc-200">
          <span className="bg-zinc-100 text-zinc-700 text-xs font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
            COMPANY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-zinc-900 leading-tight">
            About Us
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
            Founded with a commitment to high editorial principles—transparency, precision, and rigorous independence—Domain Name delivers authoritative reporting on international affairs, deep-sea research, market economics, and emerging technologies.
          </p>
        </div>

        {/* Mission Statement Banner */}
        <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 space-y-4 shadow-sm">
          <span className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-bold">
            OUR CORE CHARTER &amp; MISSION STATEMENT
          </span>
          <blockquote className="text-2xl sm:text-3xl font-serif font-bold leading-snug italic text-white">
            &ldquo;To inform global decision-makers and citizens through unvarnished factual reporting, scientific accountability, and ethical clarity.&rdquo;
          </blockquote>
          <p className="text-sm font-sans text-zinc-300 leading-relaxed max-w-3xl">
            We believe that democratic institutions and global cooperation depend on trustworthy, verifiable information free from partisan sensationalism and commercial influence.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="space-y-6">
          <div className="border-b border-zinc-200 pb-3">
            <h2 className="text-xl font-serif font-bold text-zinc-900 uppercase">
              THE FOUR PILLARS OF EDITORIAL EXCELLENCE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={i}
                  className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-zinc-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-sans text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bureau Stats */}
        <div className="bg-zinc-900 text-white rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-4xl font-serif font-black text-white">14</span>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-400 mt-1 block">Global Bureaus</span>
          </div>
          <div>
            <span className="block text-4xl font-serif font-black text-white">120+</span>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-400 mt-1 block">Investigative Staff</span>
          </div>
          <div>
            <span className="block text-4xl font-serif font-black text-white">45</span>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-400 mt-1 block">Journalism Awards</span>
          </div>
          <div>
            <span className="block text-4xl font-serif font-black text-white">100%</span>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-400 mt-1 block">Independent Trust</span>
          </div>
        </div>

      </div>
    </div>
  );
}
