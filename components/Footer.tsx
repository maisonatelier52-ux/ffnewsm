'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { CATEGORIES } from '@/lib/newsData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-black text-white border-t border-black pt-12 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Brand Bar & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-zinc-800">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-serif font-extrabold tracking-tight text-white block">
                Domain Name
              </span>
            </Link>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed max-w-md">
              An independent international journal dedicated to investigative reporting, ocean science, global financial telemetry, and cultural analysis. Published under Swedish Press Freedom Acts.
            </p>
          </div>

          <div className="lg:col-span-6 bg-zinc-900 p-6 sm:p-8 space-y-4 border border-zinc-800 rounded-none">
            <h4 className="text-lg font-serif font-bold text-white uppercase tracking-tight">
              Subscribe to The Daily Dispatch
            </h4>
            <p className="text-xs font-sans text-zinc-400">
              Delivered daily at 06:00 UTC. Essential intelligence for policy directors, researchers, and global executives.
            </p>
            {subscribed ? (
              <div className="p-3 bg-white text-black text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Subscription Confirmed. Welcome to The Briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address..."
                    className="w-full bg-black border border-zinc-700 text-white placeholder:text-zinc-500 pl-9 pr-3 py-2.5 text-xs font-sans outline-none focus:border-white transition-colors rounded-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-none text-xs font-sans font-extrabold uppercase tracking-widest flex items-center gap-2 transition-colors shrink-0"
                >
                  Join <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Directory Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-b border-zinc-800">
          {/* CATEGORIES */}
          <div className="space-y-4">
            <h3 className="text-xs font-sans font-black uppercase tracking-widest text-white pb-2 border-b border-zinc-800">
              CATEGORIES
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-400">
              {CATEGORIES.filter(c => c.slug !== 'home').map((cat) => (
                <li key={cat.slug}>
                  <Link href={cat.path} className="hover:text-white transition-colors uppercase font-bold">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-4">
            <h3 className="text-xs font-sans font-black uppercase tracking-widest text-white pb-2 border-b border-zinc-800">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="/ownership-and-funding" className="hover:text-white transition-colors">
                  Ownership &amp; Funding
                </Link>
              </li>
              <li>
                <Link href="/right-of-reply-policy" className="hover:text-white transition-colors">
                  Right of Reply Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* POLICIES */}
          <div className="space-y-4">
            <h3 className="text-xs font-sans font-black uppercase tracking-widest text-white pb-2 border-b border-zinc-800">
              POLICIES
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-400">
              <li>
                <Link href="/editorial-policy" className="hover:text-white transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/source-methodology" className="hover:text-white transition-colors">
                  Source Methodology
                </Link>
              </li>
              <li>
                <Link href="/advertising-and-sponsored-policy" className="hover:text-white transition-colors">
                  Advertising &amp; Sponsored Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-500">
          <p>© 2026 Domain Name. Registered under Press Freedom Act.</p>
        </div>
      </div>
    </footer>
  );
}
