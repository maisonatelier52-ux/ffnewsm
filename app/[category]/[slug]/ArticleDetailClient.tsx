'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Article, ArticleSection } from '@/lib/newsData';
import { Calendar, Clock, Share2, Bookmark, CheckCircle2, Mail, MessageSquare, Send, ArrowRight } from 'lucide-react';

interface ArticleDetailClientProps {
  article: Article;
  recommendedArticles: Article[];
}

interface Comment {
  id: string;
  name: string;
  date: string;
  text: string;
}

export default function ArticleDetailClient({
  article,
  recommendedArticles,
}: ArticleDetailClientProps) {
  // Newsletter Form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Comments Form state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c-1',
      name: 'Dr. Henrik Lind',
      date: '2 hours ago',
      text: 'Exemplary reporting. The telemetry findings mentioned in section two align remarkably well with recent oceanographic data released by the Bergen Marine Institute.',
    },
    {
      id: 'c-2',
      name: 'Sophia Chen',
      date: '4 hours ago',
      text: 'Very insightful analysis. The economic trade-offs for international policy compliance will be critical to observe over the next fiscal quarter.',
    },
  ]);
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authorName.trim() && commentText.trim()) {
      const newC: Comment = {
        id: `c-${Date.now()}`,
        name: authorName.trim(),
        date: 'Just now',
        text: commentText.trim(),
      };
      setComments([newC, ...comments]);
      setCommentText('');
      setCommentSubmitted(true);
      setTimeout(() => setCommentSubmitted(false), 4000);
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const descriptionSections = article.description || [];
  const firstSection = descriptionSections[0];
  const secondSection = descriptionSections[1];
  const remainingSections = descriptionSections.slice(2);

  return (
    <article className="w-full bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 1. EDITORIAL HEADER SECTION */}
        <header className="mb-10 pb-6 border-b-2 border-black">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-black text-white text-[10px] font-sans font-black uppercase tracking-widest px-3 py-1">
              {article.category}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider transition-colors border border-black ${
                  isBookmarked
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-sans font-bold uppercase tracking-wider bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Main Title Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-black leading-[1.02] tracking-tight mb-4">
            {article.title}
          </h1>

          {/* Excerpt / Short description */}
          <p className="text-lg sm:text-xl font-sans text-zinc-700 leading-relaxed font-normal mb-6 max-w-4xl">
            {article.shortdescription}
          </p>

          {/* Metadata Bar */}
          <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {article.author.image && (
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-12 h-12 object-cover grayscale border border-black"
                />
              )}
              <div>
                <p className="text-xs font-sans font-bold uppercase tracking-wider text-black">
                  BY {article.author.name}
                </p>
                {article.author.role && (
                  <p className="text-xs font-sans text-zinc-500">
                    {article.author.role}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-1 text-black">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-black">
                <Clock className="w-3.5 h-3.5" /> 5 MIN READ
              </span>
            </div>
          </div>
        </header>

        {/* 2. ASYMMETRIC 2-COLUMN HERO SPLIT */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (7 Cols): Article Hero Image */}
            <div className="lg:col-span-7 space-y-2">
              <div className="w-full h-[360px] sm:h-[440px] relative overflow-hidden bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-sans text-zinc-500 italic text-right uppercase tracking-wider font-bold">
                PRESS ARCHIVE PHOTO / VERIFIED DISPATCH TELEMETRY
              </p>
            </div>

            {/* Right Column (5 Cols): First Subtitle and primary narrative summary paragraphs */}
            <div className="lg:col-span-5 bg-zinc-50 p-8 border-l-4 border-black space-y-4">
              {firstSection && (
                <>
                  {firstSection.subtitle && (
                    <h2 className="text-2xl font-serif font-black text-black leading-tight pb-2 border-b border-black">
                      {firstSection.subtitle}
                    </h2>
                  )}
                  <p className="text-sm sm:text-base font-sans text-zinc-800 leading-relaxed">
                    {firstSection.text}
                  </p>
                </>
              )}

              {secondSection && (
                <div className="pt-4 border-t border-zinc-300 space-y-2">
                  {secondSection.subtitle && (
                    <h3 className="text-lg font-serif font-bold text-black">
                      {secondSection.subtitle}
                    </h3>
                  )}
                  <p className="text-sm font-sans text-zinc-700 leading-relaxed">
                    {secondSection.text}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. CONTINUITY SECTION BELOW */}
        <section className="max-w-4xl mx-auto space-y-10 mb-16">
          {/* Remaining article paragraphs */}
          {remainingSections.map((sec, idx) => (
            <div key={idx} className="space-y-3 bg-white p-8 border-t border-b border-zinc-200">
              {sec.subtitle && (
                <h3 className="text-2xl font-serif font-bold text-black">
                  {sec.subtitle}
                </h3>
              )}
              <p className="text-base sm:text-lg font-sans text-zinc-800 leading-relaxed">
                {sec.text}
              </p>
            </div>
          ))}

          {/* Centered Section Divider */}
          <div className="text-center py-6">
            <span className="text-2xl font-serif tracking-[0.6em] text-black font-black">
              * * *
            </span>
          </div>

          {/* Daily Editorial Newsletter Subscription Box (Pure Black Card) */}
          <div className="bg-black text-white p-8 sm:p-12 space-y-4">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-zinc-400 font-black">
              <Mail className="w-4 h-4 text-white" /> DAILY EDITORIAL BRIEFING
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-black leading-tight">
              Get The Nordic Dispatch Delivered Daily at 06:00 UTC
            </h3>
            <p className="text-sm font-sans text-zinc-300 max-w-xl leading-relaxed">
              Join over 140,000 policy directors, researchers, and global executives receiving independent morning briefings.
            </p>
            {newsletterSubscribed ? (
              <div className="p-4 bg-white text-black text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Subscription confirmed. Welcome to The Briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email address..."
                  className="flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 px-4 py-3 text-sm font-sans outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-zinc-200 text-black px-6 py-3 text-xs font-sans font-extrabold uppercase tracking-widest transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  SUBSCRIBE <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Interactive Reader Comment Form */}
          <div className="bg-white p-8 border border-black space-y-6">
            <div className="flex items-center justify-between border-b-2 border-black pb-4">
              <h3 className="text-xl font-serif font-black text-black flex items-center gap-2 uppercase">
                <MessageSquare className="w-5 h-5 text-black" />
                READER DISCUSSION ({comments.length})
              </h3>
              <span className="text-xs font-sans text-zinc-500 uppercase tracking-widest font-bold">
                MODERATED FORUM
              </span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-extrabold uppercase tracking-wider text-black mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Dr. Henrik Lind"
                    className="w-full bg-zinc-50 border border-black p-3 text-sm font-sans outline-none focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-extrabold uppercase tracking-wider text-black mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={authorEmail}
                    onChange={(e) => setAuthorEmail(e.target.value)}
                    placeholder="e.g. henrik@institute.org"
                    className="w-full bg-zinc-50 border border-black p-3 text-sm font-sans outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-extrabold uppercase tracking-wider text-black mb-1">
                  COMMENT MESSAGE *
                </label>
                <textarea
                  rows={4}
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share your perspective or academic feedback on this dispatch..."
                  className="w-full bg-zinc-50 border border-black p-3 text-sm font-sans outline-none focus:bg-white"
                />
              </div>

              {commentSubmitted && (
                <div className="p-3 bg-black text-white text-xs font-sans font-bold uppercase tracking-wider">
                  Thank you. Your comment has been posted to the discussion log.
                </div>
              )}

              <button
                type="submit"
                className="bg-black hover:bg-zinc-800 text-white font-sans text-xs font-black uppercase tracking-widest px-8 py-3 flex items-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" /> SUBMIT COMMENT
              </button>
            </form>

            {/* List of Reader Comments */}
            <div className="pt-6 border-t border-zinc-300 space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="p-5 bg-zinc-50 border-l-2 border-black space-y-1">
                  <div className="flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider">
                    <span className="text-black">{c.name}</span>
                    <span className="text-zinc-400">{c.date}</span>
                  </div>
                  <p className="text-sm font-sans text-zinc-800 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. RECOMMENDED ARTICLES GRID */}
        {recommendedArticles.length > 0 && (
          <section className="pt-10 border-t-2 border-black">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif font-black text-black uppercase">
                RECOMMENDED IN {article.category.toUpperCase()}
              </h3>
              <Link
                href={`/${article.category}`}
                className="text-xs font-sans font-extrabold uppercase tracking-widest text-black hover:underline"
              >
                SEE ALL IN {article.category.toUpperCase()} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedArticles.map((rec) => (
                <Link
                  key={rec.id}
                  href={`/${rec.category}/${rec.slug}`}
                  className="group block space-y-3"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="bg-black text-white text-[9px] font-sans font-black uppercase tracking-widest px-2 py-0.5 inline-block">
                    {rec.category}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-black group-hover:underline leading-snug">
                    {rec.title}
                  </h4>
                  <p className="text-xs font-sans text-zinc-600 line-clamp-2">
                    {rec.shortdescription}
                  </p>
                  <div className="text-[11px] font-sans text-zinc-400 font-bold uppercase tracking-wider">
                    BY {rec.author.name} • {rec.date}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
