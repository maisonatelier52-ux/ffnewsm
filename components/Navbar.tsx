'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { CATEGORIES, getHeroArticle } from '@/lib/newsData';
import SearchModal from './SearchModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentDateStr = "Tuesday, August 18, 2026";
  const heroArticle = getHeroArticle();

  return (
    <>
      <header className="w-full bg-white text-black sticky top-0 z-40">
        {/* Live Telemetry Wire Ticker Banner (Above Logo) */}
        <div className="bg-zinc-50 border-b border-zinc-200 py-2">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center gap-4 text-xs font-sans">
            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                LIVE BRIEFING
              </span>
              <span className="font-black uppercase text-black tracking-widest text-[11px] hidden sm:inline">
                NEWS
              </span>
            </div>
            <Link
              href={`/${heroArticle.category}/${heroArticle.slug}`}
              className="overflow-hidden text-ellipsis whitespace-nowrap text-zinc-700 hover:text-black font-medium text-[11px] min-w-0 transition-colors flex-1"
            >
              <span className="font-bold text-black hover:underline">{heroArticle.title}</span> — {heroArticle.shortdescription}
            </Link>
          </div>
        </div>

        {/* Top Architectural Header Bar (Logo & Date) */}
        <div className="py-4 border-b border-zinc-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            
            {/* Left: Clean Simple Logo (No Black Box) */}
            <div className="space-y-1">
              <Link href="/" className="inline-block group">
                <span className="text-4xl sm:text-5xl font-serif font-extrabold text-black tracking-tight leading-none block">
                  Domain Name
                </span>
              </Link>
              <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-zinc-500 font-bold">
                <span>Journal of Science &amp; Global Affairs</span>
              </div>
            </div>

            {/* Right: Date Telemetry */}
            <div className="hidden sm:flex flex-col text-right">
              <span className="font-extrabold uppercase tracking-widest text-black flex items-center gap-1.5 justify-end text-xs">
                <Calendar className="w-3.5 h-3.5 text-black" /> {currentDateStr}
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                UPDATED REAL-TIME AT 06:00 UTC
              </span>
            </div>

          </div>
        </div>

        {/* Category Navigation Strip (Thin 1px Border + Precise Active Underline) */}
        <nav className="bg-white text-black border-b border-zinc-300">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-11">
            
            {/* Desktop Category Links */}
            <div className="hidden md:flex items-center gap-7 h-full">
              {CATEGORIES.map((cat) => {
                const isActive = pathname === cat.path;
                return (
                  <Link
                    key={cat.slug}
                    href={cat.path}
                    className={`h-full flex items-center text-xs font-sans uppercase tracking-widest transition-colors relative ${
                      isActive
                        ? 'text-black font-extrabold'
                        : 'text-zinc-600 font-bold hover:text-black'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 text-black flex items-center gap-2"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
              </button>
            </div>

            {/* Right End: Clean SEARCH Trigger */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-black hover:text-zinc-600 py-1 text-xs font-sans font-black uppercase tracking-widest transition-colors"
              >
                <Search className="w-4 h-4 text-black" />
                <span>SEARCH</span>
              </button>
            </div>

          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white text-black p-4 space-y-2 border-t border-zinc-200 shadow-lg">
              {CATEGORIES.map((cat) => {
                const isActive = pathname === cat.path;
                return (
                  <Link
                    key={cat.slug}
                    href={cat.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-xs font-sans uppercase tracking-widest border-b border-zinc-100 ${
                      isActive ? 'text-black font-extrabold pl-2 border-l-2 border-black' : 'text-zinc-600 font-bold hover:text-black'
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full text-left py-2.5 text-xs font-sans uppercase tracking-widest text-black font-black flex items-center gap-2 pt-2"
              >
                <Search className="w-4 h-4" /> SEARCH ARCHIVES
              </button>
            </div>
          )}
        </nav>
        {/* Live Search Panel Dropdown Directly Below Header */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>
    </>
  );
}
