import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllAuthors, getAuthorBySlug, getArticlesByAuthor } from '@/lib/newsData';
import { Mail, Globe, Calendar, Clock, BookOpen, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug || '',
  }));
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = getArticlesByAuthor(author.slug || author.name);

  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-10 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-zinc-400">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/team" className="hover:text-black transition-colors">OUR TEAM</Link>
          <span>/</span>
          <span className="text-zinc-900">{author.name}</span>
        </div>

        {/* Hero Author Banner */}
        <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
          <div className="relative shrink-0">
            <img
              src={author.image}
              alt={author.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover ring-2 ring-white/20 shadow-xl"
            />
            <span className="absolute -bottom-2 right-2 bg-emerald-500 text-white text-[9px] font-sans font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full shadow">
              VERIFIED
            </span>
          </div>

          <div className="space-y-4 text-center sm:text-left flex-1 min-w-0">
            <div className="space-y-1">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-emerald-400 block">
                {author.role}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
                {author.name}
              </h1>
            </div>

            {author.bio && (
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {author.bio}
              </p>
            )}

            {/* Author Metrics & Social Links */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-sans">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-800 border border-zinc-700/60 rounded-full text-white font-bold uppercase tracking-wider text-[11px]">
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>{articles.length} Published Articles</span>
              </div>

              {/* Social Link Buttons */}
              <div className="flex items-center gap-2">
                {author.socials?.twitter && (
                  <a
                    href={author.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-white hover:text-black flex items-center justify-center text-zinc-300 transition-all border border-zinc-700/60"
                    title="Twitter / X"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {author.socials?.linkedin && (
                  <a
                    href={author.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-white hover:text-black flex items-center justify-center text-zinc-300 transition-all border border-zinc-700/60"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {author.socials?.email && (
                  <a
                    href={author.socials.email}
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-white hover:text-black flex items-center justify-center text-zinc-300 transition-all border border-zinc-700/60"
                    title="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Archive Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <h2 className="text-2xl font-serif font-black text-zinc-900 tracking-tight">
              ARTICLES BY {author.name.toUpperCase()} ({articles.length})
            </h2>
            <span className="text-xs font-sans font-bold text-zinc-400 uppercase tracking-widest">
              VERIFIED ARCHIVE
            </span>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.category}/${article.slug}`}
                  className="group block bg-white border border-zinc-200/90 hover:border-zinc-400 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/9] overflow-hidden bg-zinc-900 relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-900 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6 pt-2 space-y-3">
                      <h3 className="text-xl font-serif font-bold text-zinc-900 group-hover:underline leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-relaxed">
                        {article.shortdescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center justify-between text-[11px] font-sans text-zinc-400 font-semibold border-t border-zinc-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 5 MIN READ
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-16 text-center bg-zinc-50 rounded-3xl text-zinc-500 text-sm font-sans">
              No articles currently indexed for this correspondent.
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
