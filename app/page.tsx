import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, BookOpen, TrendingUp, Sparkles, Camera, Quote } from 'lucide-react';
import { getAllArticles, getHeroArticle, getArticlesByCategory } from '@/lib/newsData';

export default function HomePage() {
  const heroArticle = getHeroArticle();
  const allArticles = getAllArticles();

  // Section 1: Hero 6/6 Split (1 Lead Story + 4 Secondary 2x2 Grid)
  const secondaryHeroGrid = allArticles.slice(1, 5);

  // Section 2: 4-Column Borderless Global Dispatches Grid
  const globalDispatches = allArticles.slice(5, 9);

  // Section 3: 3-Column Categorical Showcase (World, Business, Tech)
  const worldArticles = getArticlesByCategory('world');
  const businessArticles = getArticlesByCategory('business');
  const techArticles = getArticlesByCategory('technology');
  const cultureArticles = getArticlesByCategory('entertainment');
  const sportsArticles = getArticlesByCategory('us');

  const worldMain = worldArticles[0];
  const worldSub = worldArticles.slice(1, 3);

  const businessMain = businessArticles[0];
  const businessSub = businessArticles.slice(1, 3);

  const techMain = techArticles[0];
  const techSub = techArticles.slice(1, 3);

  // Section 4: Culture & Sports Dual Magazine Showcase (Redesigned)
  const cultureMain = cultureArticles[0];
  const cultureSub = cultureArticles.slice(1, 3);

  const sportsMain = sportsArticles[0];
  const sportsSub = sportsArticles.slice(1, 3);

  // Section 5: Investigative Special Reports (8/4 Split)
  const investMain = allArticles[2] || heroArticle;
  const investSub = allArticles.slice(6, 9);

  // Section 6: Opinion & Perspectives (4 Columnists Grid)
  const opinionArticles = [allArticles[0], allArticles[3], allArticles[7], allArticles[10]];

  // Section 7: Market Intelligence Digest (3-Column Grid)
  const marketDigest = businessArticles;

  // Section 8: Visual Essays & Photojournalism (4 Widescreen Grid)
  const visualEssays = [allArticles[1], allArticles[4], allArticles[8], allArticles[12] || allArticles[2]];

  return (
    <div className="w-full bg-white text-black font-sans py-4 space-y-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">

        {/* ================= SECTION 1: ASYMMETRIC 6/6 EDITORIAL FRONT ================= */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 6 Cols: Primary Lead Feature Story */}
            <div className="lg:col-span-6 space-y-4">
              <Link href={`/${heroArticle.category}/${heroArticle.slug}`} className="group block space-y-4">
                <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={heroArticle.image}
                    alt={heroArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-black uppercase tracking-widest text-zinc-500">
                    <span>LEAD STORY</span>
                    <span>•</span>
                    <span className="text-black">{heroArticle.category}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-black leading-tight tracking-tight group-hover:text-zinc-700 transition-colors">
                    {heroArticle.title}
                  </h1>
                </div>
              </Link>

              <p className="text-sm sm:text-base font-sans text-zinc-700 leading-snug line-clamp-3">
                {heroArticle.shortdescription}
              </p>

              <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] font-sans tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <img
                    src={heroArticle.author.image}
                    alt={heroArticle.author.name}
                    className="w-6 h-6 object-cover filter grayscale"
                  />
                  <span className="text-zinc-400 font-semibold">BY</span>
                  <span className="font-black text-black">
                    {heroArticle.author.name}
                  </span>
                </div>
                <span className="font-extrabold text-zinc-400">{heroArticle.date}</span>
              </div>
            </div>

            {/* Right 6 Cols: Single Featured Spotlight Image Card + 2 Text Articles in One Row Below */}
            <div className="lg:col-span-6 space-y-4">
              <div className="pb-1">
                <h2 className="text-xs font-sans font-black uppercase tracking-widest text-black">
                  EDITOR&apos;S FEATURE SPOTLIGHT
                </h2>
              </div>

              {secondaryHeroGrid[0] && (
                <Link
                  href={`/${secondaryHeroGrid[0].category}/${secondaryHeroGrid[0].slug}`}
                  className="group block relative overflow-hidden bg-black aspect-[16/10] flex flex-col justify-end p-5 sm:p-7"
                >
                  <img
                    src={secondaryHeroGrid[0].image}
                    alt={secondaryHeroGrid[0].title}
                    className="w-full h-full object-cover absolute inset-0 opacity-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="relative z-10 space-y-1.5 text-white">
                    <span className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-300 block mb-1">
                      {secondaryHeroGrid[0].category} SPOTLIGHT
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-extrabold text-white leading-tight group-hover:text-zinc-200 transition-colors">
                      {secondaryHeroGrid[0].title}
                    </h3>
                    <p className="text-xs font-sans text-zinc-300 line-clamp-2 leading-snug">
                      {secondaryHeroGrid[0].shortdescription}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[9px] font-sans text-zinc-400 uppercase tracking-widest font-extrabold">
                      <span>BY {secondaryHeroGrid[0].author.name}</span>
                      <span>{secondaryHeroGrid[0].date}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* 4 News Articles Without Image Below Spotlight Card (2x2 Grid, Date Below Headline, Larger Font) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-3">
                {secondaryHeroGrid.map((art) => (
                  <Link
                    key={art.id}
                    href={`/${art.category}/${art.slug}`}
                    className="group block space-y-1"
                  >
                    <span className="text-[11px] font-sans font-black uppercase tracking-widest text-zinc-500 block">
                      {art.category}
                    </span>
                    <h4 className="text-base font-serif font-extrabold text-black group-hover:underline leading-snug line-clamp-2">
                      {art.title}
                    </h4>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-zinc-400 block pt-0.5">
                      {art.date}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: TOP GLOBAL DISPATCHES (4-COLUMN GRID) ================= */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              TOP GLOBAL DISPATCHES
            </h2>
            <span className="text-xs font-sans font-bold text-zinc-400 uppercase tracking-widest">
              FEATURED WIRE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalDispatches.map((art, idx) => (
              <Link
                key={art.id}
                href={`/${art.category}/${art.slug}`}
                className="group block space-y-2.5"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-sans font-black uppercase tracking-widest text-zinc-500">
                  <span>DISPATCH #{idx + 1}</span>
                  <span>{art.category}</span>
                </div>
                <h3 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-snug">
                  {art.shortdescription}
                </p>
                <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase tracking-wider">
                  {art.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: CATEGORICAL EDITORIAL DESKS ================= */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              CATEGORICAL EDITORIAL DESKS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* World Desk */}
            <div className="space-y-4">
              <div className="pb-2 border-b border-zinc-200">
                <h3 className="text-sm font-sans font-black uppercase tracking-widest text-black">
                  WORLD NEWS
                </h3>
              </div>

              {worldMain && (
                <Link href={`/${worldMain.category}/${worldMain.slug}`} className="group block space-y-2">
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img src={worldMain.image} alt={worldMain.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                    {worldMain.title}
                  </h4>
                </Link>
              )}

              <div className="space-y-3 pt-2">
                {worldSub.map((sub) => (
                  <Link key={sub.id} href={`/${sub.category}/${sub.slug}`} className="group block space-y-0.5">
                    <h5 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {sub.title}
                    </h5>
                    <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase">{sub.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Desk */}
            <div className="space-y-4">
              <div className="pb-2 border-b border-zinc-200">
                <h3 className="text-sm font-sans font-black uppercase tracking-widest text-black">
                  BUSINESS &amp; MARKETS
                </h3>
              </div>

              {businessMain && (
                <Link href={`/${businessMain.category}/${businessMain.slug}`} className="group block space-y-2">
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img src={businessMain.image} alt={businessMain.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                    {businessMain.title}
                  </h4>
                </Link>
              )}

              <div className="space-y-3 pt-2">
                {businessSub.map((sub) => (
                  <Link key={sub.id} href={`/${sub.category}/${sub.slug}`} className="group block space-y-0.5">
                    <h5 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {sub.title}
                    </h5>
                    <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase">{sub.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tech Desk */}
            <div className="space-y-4">
              <div className="pb-2 border-b border-zinc-200">
                <h3 className="text-sm font-sans font-black uppercase tracking-widest text-black">
                  TECHNOLOGY &amp; SCIENCE
                </h3>
              </div>

              {techMain && (
                <Link href={`/${techMain.category}/${techMain.slug}`} className="group block space-y-2">
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img src={techMain.image} alt={techMain.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                    {techMain.title}
                  </h4>
                </Link>
              )}

              <div className="space-y-3 pt-2">
                {techSub.map((sub) => (
                  <Link key={sub.id} href={`/${sub.category}/${sub.slug}`} className="group block space-y-0.5">
                    <h5 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {sub.title}
                    </h5>
                    <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase">{sub.date}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 4: REDESIGNED CULTURE & SPORTS MAGAZINE DUAL SHOWCASE ================= */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              CULTURE &amp; ATHLETICS JOURNAL
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Culture Showcase */}
            <div className="space-y-4">
              <div className="pb-1 border-b border-zinc-200">
                <span className="text-xs font-sans font-black uppercase tracking-widest text-black">
                  ARTS &amp; CULTURE CRITIQUE
                </span>
              </div>

              {cultureMain && (
                <Link href={`/${cultureMain.category}/${cultureMain.slug}`} className="group block space-y-2">
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img src={cultureMain.image} alt={cultureMain.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black group-hover:underline leading-snug">
                    {cultureMain.title}
                  </h3>
                  <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-snug">
                    {cultureMain.shortdescription}
                  </p>
                </Link>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {cultureSub.map((sub) => (
                  <Link key={sub.id} href={`/${sub.category}/${sub.slug}`} className="group block space-y-1">
                    <div className="aspect-[16/10] overflow-hidden bg-black">
                      <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h4 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {sub.title}
                    </h4>
                    <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase">{sub.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sports Showcase */}
            <div className="space-y-4">
              <div className="pb-1 border-b border-zinc-200">
                <span className="text-xs font-sans font-black uppercase tracking-widest text-black">
                  SPORTS &amp; GLOBAL ATHLETICS
                </span>
              </div>

              {sportsMain && (
                <Link href={`/${sportsMain.category}/${sportsMain.slug}`} className="group block space-y-2">
                  <div className="aspect-[16/10] overflow-hidden bg-black">
                    <img src={sportsMain.image} alt={sportsMain.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black group-hover:underline leading-snug">
                    {sportsMain.title}
                  </h3>
                  <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-snug">
                    {sportsMain.shortdescription}
                  </p>
                </Link>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {sportsSub.map((sub) => (
                  <Link key={sub.id} href={`/${sub.category}/${sub.slug}`} className="group block space-y-1">
                    <div className="aspect-[16/10] overflow-hidden bg-black">
                      <img src={sub.image} alt={sub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h4 className="text-xs font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {sub.title}
                    </h4>
                    <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase">{sub.date}</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 5: SUPER DESIGN — INVESTIGATIVE SPECIAL REPORTS (LARGE NUMBERED DOSSIER) ================= */}
        <section>
          <div className="mb-8">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              INVESTIGATIVE SPECIAL REPORTS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Cols: Cinematic Widescreen Feature */}
            <div className="lg:col-span-7 space-y-4">
              {allArticles[2] && (
                <Link href={`/${allArticles[2].category}/${allArticles[2].slug}`} className="group block space-y-4">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-black">
                    <img
                      src={allArticles[2].image}
                      alt={allArticles[2].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-500 block">
                      FEATURED INVESTIGATION • {allArticles[2].category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-black leading-tight group-hover:text-zinc-700 transition-colors">
                      {allArticles[2].title}
                    </h3>
                  </div>
                  <p className="text-sm font-sans text-zinc-700 leading-snug line-clamp-3">
                    {allArticles[2].shortdescription}
                  </p>
                  <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] font-sans tracking-widest uppercase">
                    <div className="flex items-center gap-2">
                      <img
                        src={allArticles[2].author.image}
                        alt={allArticles[2].author.name}
                        className="w-6 h-6 object-cover filter grayscale"
                      />
                      <span className="text-zinc-400 font-semibold">BY</span>
                      <span className="font-black text-black">{allArticles[2].author.name}</span>
                    </div>
                    <span className="font-extrabold text-zinc-400">{allArticles[2].date}</span>
                  </div>
                </Link>
              )}
            </div>

            {/* Right 5 Cols: Large Numbered Dossier Items (01, 02, 03) */}
            <div className="lg:col-span-5 space-y-6">
              {allArticles.slice(3, 6).map((art, idx) => (
                <Link
                  key={art.id}
                  href={`/${art.category}/${art.slug}`}
                  className="group flex gap-4 items-start pb-5 border-b border-zinc-200 last:border-0 last:pb-0"
                >
                  <span className="text-3xl sm:text-4xl font-serif font-black text-zinc-300 group-hover:text-black transition-colors shrink-0 leading-none">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-500 block">
                      {art.category}
                    </span>
                    <h4 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-snug">
                      {art.shortdescription}
                    </p>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-zinc-400 block pt-1">
                      {art.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: GLOBAL MARKET INTELLIGENCE DIGEST ================= */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              MARKET INTELLIGENCE DIGEST
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {marketDigest.map((art, idx) => (
              <Link key={art.id} href={`/${art.category}/${art.slug}`} className="group block space-y-2">
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between text-[10px] font-sans font-black uppercase tracking-widest text-zinc-400">
                  <span>MARKET INDEX #{idx + 1}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-base font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs font-sans text-zinc-600 line-clamp-2 leading-snug">
                  {art.shortdescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: VISUAL ESSAYS & PHOTOJOURNALISM (2 ROWS OF 4) ================= */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              VISUAL ESSAYS &amp; PHOTOJOURNALISM
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allArticles.slice(0, 8).map((art) => (
              <Link key={art.id} href={`/${art.category}/${art.slug}`} className="group block space-y-2">
                <div className="aspect-[16/9] bg-black overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-sm font-serif font-bold text-black group-hover:underline leading-snug line-clamp-2">
                  {art.title}
                </h4>
                <span className="text-[10px] font-sans text-zinc-400 block font-bold uppercase">{art.date}</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
