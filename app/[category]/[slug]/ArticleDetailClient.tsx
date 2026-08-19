'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Article } from '@/lib/newsData';
import { Calendar, Clock, Share2, Bookmark, CheckCircle2, Mail, MessageSquare, Send, ArrowRight, Quote } from 'lucide-react';

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

  return (
    <article className="w-full bg-white text-zinc-900 font-sans py-8 sm:py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Breadcrumbs placed above grid for exact top alignment */}
        <div className="flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-500">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link href={`/${article.category}`} className="hover:text-black transition-colors">{article.category}</Link>
        </div>

        {/* ================= MAIN 2-COLUMN SPLIT (FLUSH TOP ALIGNED) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 8 Columns: Header, Compact Hero Image, & Narrative Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. CLASSIC EDITORIAL HEADER */}
            <header className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-black leading-tight tracking-tight">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg font-sans text-zinc-600 leading-relaxed font-normal">
                {article.shortdescription}
              </p>

            {/* Byline Bar */}
            <div className="py-3 border-t border-b border-zinc-200 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
              <Link
                href={`/author/${article.author.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                {article.author.image && (
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                )}
                <div>
                  <span className="font-bold text-black uppercase tracking-wider group-hover:underline">
                    BY {article.author.name}
                  </span>
                  {article.author.role && (
                    <span className="text-zinc-500 block text-[11px]">{article.author.role}</span>
                  )}
                </div>
              </Link>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1 text-zinc-700">
                    <Calendar className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span>{article.date}</span>
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span className="flex items-center gap-1 text-zinc-700">
                    <Clock className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span>5 MIN READ</span>
                  </span>

                  <div className="flex items-center gap-1.5 sm:pl-2 sm:border-l sm:border-zinc-200">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded transition-colors ${
                        isBookmarked
                          ? 'bg-black text-white'
                          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                      }`}
                    >
                      <Bookmark className="w-3 h-3" />
                      <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                    </button>

                    <button
                      onClick={handleShare}
                      className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* 2. COMPACT HERO IMAGE */}
            <section className="space-y-2">
              <div className="w-full aspect-[16/7.5] max-h-[350px] overflow-hidden rounded-md bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] font-sans text-zinc-400 italic text-right uppercase">
                PRESS ARCHIVE PHOTO / VERIFIED DISPATCH TELEMETRY
              </p>
            </section>

            {/* 3. MAIN ARTICLE BODY CONTENT */}
            <div className="space-y-6">
              {descriptionSections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  {sec.subtitle && (
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-black pt-2 pb-1 border-b border-zinc-100">
                      {sec.subtitle}
                    </h2>
                  )}
                  <p className="text-base sm:text-lg font-sans text-zinc-800 leading-relaxed font-normal">
                    {sec.text}
                  </p>

                  {/* Styled Classic Pull Quote */}
                  {idx === 1 && (
                    <blockquote className="my-6 p-5 bg-zinc-50 border-l-2 border-black rounded-r-md space-y-1">
                      <Quote className="w-5 h-5 text-zinc-400" />
                      <p className="text-base sm:text-lg font-serif italic text-black leading-relaxed">
                        "Deep-sea telemetry findings provide researchers with unprecedented insight into tectonic activity and biological habitats."
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right 4 Columns: Sticky Sidebar starting flush at exact top alignment with headline */}
          <div className="lg:col-span-4 sticky top-24 self-start space-y-6">
            
            {/* Right Side News Article List Box */}
            <div className="bg-white border border-zinc-200 p-5 rounded-md space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <h3 className="text-xs font-sans font-extrabold uppercase tracking-widest text-black">
                  MORE IN {article.category.toUpperCase()}
                </h3>
                <span className="text-[10px] font-sans font-bold text-zinc-400 uppercase">
                  LATEST STORIES
                </span>
              </div>

              <div className="space-y-4">
                {recommendedArticles.map((rec, idx) => (
                  <Link
                    key={rec.id}
                    href={`/${rec.category}/${rec.slug}`}
                    className="group flex gap-3 items-start pb-3 border-b border-zinc-100 last:border-0 last:pb-0"
                  >
                    <span className="text-lg font-serif font-black text-zinc-300 group-hover:text-black transition-colors shrink-0 leading-none pt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="flex-1 space-y-1 min-w-0">
                      <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-zinc-400 block">
                        {rec.category}
                      </span>
                      <h4 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                        {rec.title}
                      </h4>
                      <span className="text-[9px] font-sans text-zinc-400 block font-semibold">
                        {rec.date}
                      </span>
                    </div>
                    <div className="w-16 h-12 overflow-hidden bg-black shrink-0 rounded">
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>


            {/* Author Profile Box */}
            <div className="bg-white border border-zinc-200 p-5 rounded-md space-y-3">
              <Link
                href={`/author/${article.author.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                {article.author.image && (
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="text-xs font-sans font-bold text-black uppercase group-hover:underline">
                    {article.author.name}
                  </h4>
                  <p className="text-[11px] font-sans text-zinc-500">{article.author.role}</p>
                </div>
              </Link>
              {article.author.bio && (
                <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                  {article.author.bio}
                </p>
              )}
            </div>

          </div>

        </div>

        {/* ================= 4. DISCUSSION FORM & SUBSCRIPTION SIDE-BY-SIDE ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column (8 cols): Reader Discussion Form - Matches top 8-col width */}
          <div className="lg:col-span-8 bg-white border border-zinc-200 rounded-md p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-4">
                <h3 className="text-base font-serif font-bold text-black flex items-center gap-2 uppercase">
                  <MessageSquare className="w-4 h-4 text-black" />
                  READER DISCUSSION
                </h3>
                <span className="text-[10px] font-sans text-zinc-400 uppercase tracking-widest font-bold">
                  MODERATED FORUM
                </span>
              </div>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-black mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Dr. Henrik Lind"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded p-2.5 text-xs font-sans outline-none focus:bg-white focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-black mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={authorEmail}
                      onChange={(e) => setAuthorEmail(e.target.value)}
                      placeholder="e.g. henrik@institute.org"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded p-2.5 text-xs font-sans outline-none focus:bg-white focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-black mb-1">
                    COMMENT MESSAGE *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your perspective on this article..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded p-2.5 text-xs font-sans outline-none focus:bg-white focus:border-black"
                  />
                </div>

                {commentSubmitted && (
                  <div className="p-2.5 bg-black text-white text-xs font-sans font-bold uppercase tracking-wider rounded">
                    Thank you. Your comment has been submitted to the moderation desk.
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-black hover:bg-zinc-800 text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded flex items-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" /> SUBMIT COMMENT
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (4 cols): Daily Editorial Briefing Subscription - Matches top 4-col width */}
          <div className="lg:col-span-4 bg-black text-white rounded-md p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-zinc-400 font-bold">
                <Mail className="w-4 h-4 text-white" /> DAILY EDITORIAL BRIEFING
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight text-white">
                Get The Morning Dispatch Delivered Daily
              </h3>
              <p className="text-xs font-sans text-zinc-300 leading-relaxed">
                Join over 140,000 policy directors, researchers, and executives receiving independent morning briefings.
              </p>
            </div>

            <div>
              {newsletterSubscribed ? (
                <div className="p-3 bg-zinc-800 text-white text-xs font-sans font-bold uppercase tracking-wider rounded flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscription confirmed. Welcome.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 px-4 py-3 text-xs font-sans rounded outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-zinc-200 text-black px-6 py-3 text-xs font-sans font-bold uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2"
                  >
                    SUBSCRIBE <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </section>

        {/* ================= 6. RECOMMENDED ARTICLES ================= */}
        {recommendedArticles.length > 0 && (
          <section className="pt-8 border-t border-zinc-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-bold text-black uppercase">
                RECOMMENDED IN {article.category.toUpperCase()}
              </h3>
              <Link
                href={`/${article.category}`}
                className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors"
              >
                SEE ALL IN {article.category.toUpperCase()} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedArticles.map((rec) => (
                <Link
                  key={rec.id}
                  href={`/${rec.category}/${rec.slug}`}
                  className="group block space-y-2.5"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-black rounded">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 block">
                    {rec.category}
                  </span>
                  <h4 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                    {rec.title}
                  </h4>
                  <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-relaxed">
                    {rec.shortdescription}
                  </p>
                  <div className="text-[10px] font-sans text-zinc-400 font-bold uppercase tracking-wider">
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
