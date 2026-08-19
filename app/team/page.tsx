import React from 'react';
import Link from 'next/link';
import { getAllAuthors, getArticlesByAuthor } from '@/lib/newsData';
import { Mail, Globe, BookOpen, ArrowUpRight, Award, ShieldCheck, Newspaper } from 'lucide-react';

export const metadata = {
  title: 'Our Team | Domain Name',
  description: 'Meet the correspondents, investigative journalists, and domain analysts behind Domain Name dispatches.',
};

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

export default function TeamPage() {
  const authors = getAllAuthors();

  return (
    <div className="w-full bg-white text-zinc-900 font-sans py-10 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-zinc-400">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-zinc-900">OUR TEAM</span>
        </div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-zinc-200 pb-10">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-xs font-sans font-bold text-zinc-800 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-zinc-900" />
              <span>EDITORIAL TEAM &amp; CORRESPONDENTS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black text-zinc-900 tracking-tight leading-[1.1]">
              Our Editorial Team
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-3 text-zinc-600 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Our newsroom brings together veteran foreign correspondents, domain analysts, and investigative researchers dedicated to unvarnished factual accuracy.
            </p>
            <div className="flex items-center gap-6 text-xs font-bold text-zinc-900 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Newspaper className="w-4 h-4 text-zinc-500" /> 14 Bureaus</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-zinc-500" /> Verified Ethics</span>
            </div>
          </div>
        </div>

        {/* Global Correspondents Roster Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <h2 className="text-2xl font-serif font-black text-zinc-900 tracking-tight">
              JOURNALISTS &amp; ANALYSTS ({authors.length})
            </h2>
            <span className="text-xs font-sans font-bold text-zinc-400 uppercase tracking-widest">
              VERIFIED STAFF DIRECTORY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => {
              const authorArticles = getArticlesByAuthor(author.slug || author.name);
              return (
                <div
                  key={author.slug}
                  className="group bg-white border border-zinc-200/90 hover:border-zinc-400 rounded-3xl p-7 space-y-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-5">
                    {/* Header Avatar & Role */}
                    <div className="flex items-center gap-4">
                      <Link href={`/author/${author.slug}`} className="relative shrink-0">
                        <img
                          src={author.image}
                          alt={author.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-zinc-100 group-hover:ring-black transition-all"
                        />
                      </Link>
                      <div className="space-y-1 min-w-0">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full inline-block">
                          {author.role}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-zinc-900 truncate">
                          <Link href={`/author/${author.slug}`} className="hover:underline">
                            {author.name}
                          </Link>
                        </h3>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs font-sans text-zinc-600 leading-relaxed line-clamp-3">
                      {author.bio}
                    </p>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href={`/author/${author.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-sans font-bold text-zinc-900 hover:text-emerald-600 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{authorArticles.length} Stories</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    {/* Social Icon Pills */}
                    <div className="flex items-center gap-1.5">
                      {author.socials?.twitter && (
                        <a
                          href={author.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-black hover:text-white flex items-center justify-center text-zinc-600 transition-colors"
                          title="Twitter / X"
                        >
                          <TwitterIcon />
                        </a>
                      )}
                      {author.socials?.linkedin && (
                        <a
                          href={author.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-black hover:text-white flex items-center justify-center text-zinc-600 transition-colors"
                          title="LinkedIn"
                        >
                          <LinkedinIcon />
                        </a>
                      )}
                      {author.socials?.email && (
                        <a
                          href={author.socials.email}
                          className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-black hover:text-white flex items-center justify-center text-zinc-600 transition-colors"
                          title="Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
