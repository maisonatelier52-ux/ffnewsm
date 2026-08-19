'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, Calendar } from 'lucide-react';
import { searchArticles, Article } from '@/lib/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  const popularTopics = [
    { label: 'Technology', value: 'technology' },
    { label: 'Markets', value: 'business' },
    { label: 'Climate', value: 'energy' },
    { label: 'World', value: 'world' },
    { label: 'US', value: 'us' },
  ];

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
    <div className="absolute top-full right-4 sm:right-8 lg:right-16 z-50 mt-2 w-[calc(100vw-2rem)] sm:w-[460px] bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200/90 animate-in fade-in slide-in-from-top-2 duration-200 font-sans">
      
      {/* Card Header Row */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-zinc-800">
          SEARCH HEADLINES &amp; NEWS
        </span>
        <button
          onClick={onClose}
          className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100"
          aria-label="Close search"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Rounded Search Input Box */}
      <div className="mt-4 flex items-center bg-white border border-zinc-200 rounded-full px-4 py-2.5 shadow-sm focus-within:border-zinc-400 focus-within:ring-2 focus-within:ring-zinc-100 transition-all">
        <Search className="w-4 h-4 text-zinc-400 shrink-0 mr-2.5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type keywords to search news..."
          className="w-full bg-transparent text-sm font-sans outline-none text-zinc-900 placeholder:text-zinc-400 font-normal"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-[10px] font-sans font-bold uppercase tracking-wider text-zinc-400 hover:text-black shrink-0 ml-1"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Popular Topics Section */}
      {!query.trim() && (
        <div className="mt-5 pt-1 space-y-2.5">
          <span className="text-xs font-sans font-bold text-zinc-700 block">
            Popular Topics:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {popularTopics.map((topic) => (
              <button
                key={topic.value}
                onClick={() => setQuery(topic.label)}
                className="px-3.5 py-1.5 bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-700 text-xs font-sans font-medium rounded-full cursor-pointer transition-all duration-150"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Live Search Results List */}
      {query.trim() && (
        <div className="mt-4 pt-3 border-t border-zinc-100 max-h-[340px] overflow-y-auto space-y-3 pr-1">
          {results.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-xs font-sans text-zinc-500 uppercase tracking-widest font-bold">
                No news articles found matching &ldquo;{query}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-bold px-1">
                {results.length} NEWS ARTICLE{results.length > 1 ? 'S' : ''} FOUND
              </div>
              <div className="space-y-2">
                {results.map((article) => (
                  <Link
                    key={article.id}
                    href={`/${article.category}/${article.slug}`}
                    onClick={onClose}
                    className="block p-3.5 bg-zinc-50 hover:bg-zinc-100 transition-all group border border-zinc-200/70 rounded-2xl space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-zinc-200 text-zinc-800 text-[9px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-sans flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-zinc-900 group-hover:underline text-sm leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-[11px] font-sans text-zinc-600 line-clamp-2 leading-relaxed">
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
  );
}
