'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Calendar } from 'lucide-react';
import { CATEGORIES } from '@/lib/newsData';
import SearchModal from './SearchModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentDateStr = "Tuesday, August 18, 2026";

  return (
    <>
      <header className="w-full bg-white text-black border-b border-black sticky top-0 z-40">
        {/* Top Architectural Header Bar */}
        <div className="py-4 border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            
            {/* Left: Clean Simple Logo (No Black Box) */}
            <div className="space-y-1">
              <Link href="/" className="inline-block group">
                <span className="text-4xl sm:text-5xl font-serif font-extrabold text-black tracking-tight leading-none block">
                  Domain Name
                </span>
              </Link>
              <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] text-zinc-500 font-bold">
                <span>Journal of Science &amp; Global Affairs</span>
                <span>•</span>
                <span className="text-black font-extrabold">VOL. 42 NO. 8</span>
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

        {/* Category Navigation Strip (No Grey Background Boxes) */}
        <nav className="bg-black text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-11">
            
            {/* Desktop Category Links */}
            <div className="hidden md:flex items-center space-x-1">
              {CATEGORIES.map((cat, index) => {
                const isActive = pathname === cat.path;
                const spacingClass = index === 0 ? 'pr-4 pl-0' : 'px-4';
                return (
                  <Link
                    key={cat.slug}
                    href={cat.path}
                    className={`${spacingClass} py-3 text-xs font-sans font-black uppercase tracking-widest transition-colors relative ${
                      isActive
                        ? 'text-white font-extrabold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 text-white flex items-center gap-2"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span className="text-xs font-sans uppercase font-black tracking-widest">
                  CATEGORIES
                </span>
              </button>
            </div>

            {/* Right End: Clean SEARCH Trigger */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-white hover:text-zinc-300 py-1 text-xs font-sans font-black uppercase tracking-widest transition-colors"
              >
                <Search className="w-4 h-4 text-white" />
                <span>SEARCH</span>
              </button>
            </div>

          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-zinc-900 text-white p-4 space-y-2 border-t border-zinc-800">
              {CATEGORIES.map((cat) => {
                const isActive = pathname === cat.path;
                return (
                  <Link
                    key={cat.slug}
                    href={cat.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-xs font-sans font-black uppercase tracking-widest border-b border-zinc-800 ${
                      isActive ? 'text-white font-extrabold pl-2' : 'text-zinc-400'
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
                className="w-full text-left py-2.5 text-xs font-sans uppercase tracking-widest text-white font-black flex items-center gap-2 pt-2"
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
