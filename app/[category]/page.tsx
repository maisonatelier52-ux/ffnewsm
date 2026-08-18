import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticlesByCategory, CATEGORIES } from '@/lib/newsData';
import {
  ArrowRight,
  Globe,
  Landmark,
  ShieldAlert,
  TrendingUp,
  Leaf,
  Scale,
  FlaskConical,
  HeartPulse,
  Compass,
} from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: 'world' },
    { category: 'business' },
    { category: 'technology' },
    { category: 'entertainment' },
    { category: 'us' },
  ];
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const rawCat = resolvedParams.category;
  const normalizedCat = rawCat.toLowerCase();

  const validCategories = ['world', 'business', 'technology', 'entertainment', 'us'];
  if (!validCategories.includes(normalizedCat)) {
    notFound();
  }

  const articles = getArticlesByCategory(normalizedCat);
  const categoryInfo = CATEGORIES.find((c) => c.slug === normalizedCat) || {
    label: normalizedCat.toUpperCase(),
  };

  const categoryDescriptions: Record<string, string> = {
    world: 'Complete coverage of global affairs, international relations, conflict, diplomacy, climate and the stories that shape our planet.',
    business: 'Financial telemetry, central bank monetary policy, semiconductor supply chains, and green maritime bond markets.',
    technology: 'Reporting on neuromorphic silicon architectures, post-quantum encryption standards, solid-state battery breakthroughs, and spatial AI.',
    entertainment: 'Reviews of volumetric holographic cinema, acoustic archeology concerts, and independent film distribution networks.',
    us: 'Reporting on track decathlon milestones, high-speed electrified passenger rail networks, and America’s Cup hydrofoil finals.',
  };

  const leadArticle = articles[0];

  return (
    <div className="w-full bg-white text-black font-sans py-8 space-y-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[10px] font-sans font-bold text-zinc-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>&gt;</span>
          <span className="text-black">{categoryInfo.label}</span>
        </div>

        {/* Classic Header Split: Title & Subtitle Left + Spotlight Featured Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pb-8 border-b border-zinc-200">
          
          {/* Left 5 Cols: Title & Description */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-serif font-black text-black tracking-tight uppercase leading-none">
              {categoryInfo.label}
            </h1>
            <p className="text-xs sm:text-sm font-sans text-zinc-600 leading-relaxed">
              {categoryDescriptions[normalizedCat]}
            </p>
            <div className="pt-2 text-[10px] font-sans text-zinc-400 font-bold uppercase tracking-widest">
              {articles.length} FEATURED DISPATCHES
            </div>
          </div>

          {/* Right 7 Cols: Featured Story Spotlight Card */}
          <div className="lg:col-span-7">
            {leadArticle && (
              <Link
                href={`/${leadArticle.category}/${leadArticle.slug}`}
                className="group relative block w-full h-full min-h-[300px] overflow-hidden bg-black flex flex-col justify-end p-6 sm:p-8"
              >
                <img
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="relative z-10 space-y-2.5 text-white max-w-2xl">
                  <span className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-300 block">
                    FEATURED STORY
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white leading-tight group-hover:text-zinc-200 transition-colors">
                    {leadArticle.title}
                  </h2>
                  <p className="text-xs font-sans text-zinc-300 line-clamp-2 leading-relaxed">
                    {leadArticle.shortdescription}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[10px] font-sans text-zinc-400 uppercase tracking-widest font-extrabold">
                    <span>{leadArticle.date} • BY {leadArticle.author.name}</span>
                    <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-zinc-200 transition-colors shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Subcategory Navigation Bar */}
        <div className="py-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white font-sans text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>All {categoryInfo.label}</span>
            </button>
            
            {[
              { label: 'Politics', icon: Landmark },
              { label: 'Conflict', icon: ShieldAlert },
              { label: 'Economy', icon: TrendingUp },
              { label: 'Environment', icon: Leaf },
              { label: 'Human Rights', icon: Scale },
              { label: 'Science', icon: FlaskConical },
              { label: 'Health', icon: HeartPulse },
              { label: 'Culture', icon: Compass },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <IconComp className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid: Left 8 Cols (TOP STORIES) + Right 4 Cols (MOST READ Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left 8 Cols: TOP STORIES */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b-2 border-black">
              <h2 className="text-base font-serif font-black text-black uppercase tracking-tight">
                TOP STORIES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Main Story (6 Cols) */}
              {articles[1] && (
                <div className="md:col-span-6 space-y-3">
                  <Link href={`/${articles[1].category}/${articles[1].slug}`} className="group block space-y-3">
                    <div className="aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={articles[1].image}
                        alt={articles[1].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-500 block">
                      {articles[1].category}
                    </span>
                    <h3 className="text-base font-serif font-extrabold text-black group-hover:underline leading-snug">
                      {articles[1].title}
                    </h3>
                    <p className="text-xs font-sans text-zinc-600 line-clamp-3 leading-relaxed">
                      {articles[1].shortdescription}
                    </p>
                    <div className="text-[10px] font-sans text-zinc-400 font-bold uppercase tracking-wider">
                      {articles[1].date} • BY {articles[1].author.name}
                    </div>
                  </Link>
                </div>
              )}

              {/* Right 3 Horizontal Articles Stack (6 Cols) */}
              <div className="md:col-span-6 space-y-5">
                {articles.slice(2, 5).map((art) => (
                  <Link
                    key={art.id}
                    href={`/${art.category}/${art.slug}`}
                    className="group grid grid-cols-12 gap-3 items-center"
                  >
                    <div className="col-span-4 aspect-[4/3] overflow-hidden bg-black shrink-0">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="col-span-8 space-y-1">
                      <span className="text-[9px] font-sans font-black uppercase tracking-widest text-zinc-500 block">
                        {art.category}
                      </span>
                      <h4 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                        {art.title}
                      </h4>
                      <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-zinc-400 block pt-0.5">
                        {art.date} • BY {art.author.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4 Cols: MOST READ Sidebar Box */}
          <div className="lg:col-span-4 bg-white border border-zinc-200 p-5 space-y-5">
            <div className="pb-2 border-b-2 border-black">
              <h3 className="text-base font-serif font-black text-black uppercase tracking-tight">
                MOST READ
              </h3>
            </div>

            <div className="space-y-4">
              {articles.slice(0, 5).map((art, idx) => (
                <Link
                  key={art.id}
                  href={`/${art.category}/${art.slug}`}
                  className="group flex gap-3 items-center pb-4 border-b border-zinc-100 last:border-0 last:pb-0"
                >
                  <span className="text-xl font-serif font-black text-black leading-none shrink-0 w-6">
                    0{idx + 1}
                  </span>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h4 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {art.title}
                    </h4>
                    <span className="text-[9px] font-sans text-zinc-400 font-semibold block">
                      {(idx + 1) * 2}h ago
                    </span>
                  </div>
                  <div className="w-16 h-12 overflow-hidden bg-black shrink-0">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <button className="w-full py-2 border border-zinc-300 hover:border-black font-sans text-xs font-bold uppercase tracking-widest text-black flex items-center justify-center gap-1.5 transition-colors">
                <span>View All Most Read</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

