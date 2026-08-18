'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { searchArticles, Article } from '@/lib/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchArticles(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 z-50 bg-black text-white border-b-2 border-black shadow-2xl animate-in slide-in-from-top-2 duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 space-y-4">
        
        {/* Clean Search Input Bar */}
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-white shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by title, topic, author, or keyword..."
            className="flex-1 bg-transparent text-lg sm:text-xl font-sans outline-none text-white placeholder:text-zinc-500 font-bold"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-sans uppercase tracking-widest text-zinc-400 hover:text-white px-2 py-1 font-bold"
            >
              CLEAR
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Live Search Results Container */}
        {query.trim() && (
          <div className="max-h-[55vh] overflow-y-auto pt-2 border-t border-zinc-800 space-y-3">
            {results.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-sm font-sans text-zinc-400 uppercase tracking-widest font-bold">
                  No dispatches found matching &ldquo;{query}&rdquo;
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-black">
                  {results.length} DISPATCH{results.length > 1 ? 'ES' : ''} FOUND
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((article) => (
                    <Link
                      key={article.id}
                      href={`/${article.category}/${article.slug}`}
                      onClick={onClose}
                      className="block p-4 bg-zinc-900 hover:bg-white hover:text-black transition-all group border border-zinc-800"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-white text-black group-hover:bg-black group-hover:text-white text-[10px] font-sans font-black uppercase tracking-widest px-2 py-0.5">
                          {article.category}
                        </span>
                        <span className="text-xs text-zinc-400 group-hover:text-zinc-700 font-sans">
                          {article.date}
                        </span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-white group-hover:text-black leading-snug mb-1">
                        {article.title}
                      </h4>
                      <p className="text-xs font-sans text-zinc-400 group-hover:text-zinc-600 line-clamp-2">
                        {article.shortdescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
