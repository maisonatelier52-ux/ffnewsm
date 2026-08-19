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

  // Section 4: 3-Article Culture & Athletics Journal Showcase
  const journalArticles = [
    cultureArticles[0],
    sportsArticles[0],
    cultureArticles[1] || sportsArticles[1],
  ].filter(Boolean);

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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-10">

        {/* ================= SECTION 1: NEW HIGH-IMPACT 3-COLUMN HERO SECTION ================= */}
        <section className="border-b border-zinc-200 pb-10 space-y-6">

          {/* Hero Main 3-Column Grid (6 / 3 / 3 Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 6 Cols: Primary Lead Flagship Feature */}
            <div className="lg:col-span-6 space-y-4">
              <Link href={`/${heroArticle.category}/${heroArticle.slug}`} className="group block space-y-3">
                <div className="aspect-[16/9] w-full overflow-hidden bg-black relative">
                  <img
                    src={heroArticle.image}
                    alt={heroArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-end text-white text-[10px] font-sans font-black uppercase tracking-widest">
                    <span className="bg-black/70 px-2.5 py-1 border border-white/20">
                      {heroArticle.date}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-900 leading-tight tracking-tight group-hover:text-zinc-600 transition-colors">
                    {heroArticle.title}
                  </h1>
                  <p className="text-sm font-sans text-zinc-600 line-clamp-5 leading-relaxed">
                    {heroArticle.shortdescription} {heroArticle.description?.[0]?.text || ''}
                  </p>
                </div>
              </Link>

              <div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={heroArticle.author.image}
                    alt={heroArticle.author.name}
                    className="w-8 h-8 rounded-full object-cover filter grayscale border border-zinc-300"
                  />
                  <div>
                    <div className="text-xs font-sans font-bold text-zinc-900 uppercase tracking-wider">
                      {heroArticle.author.name}
                    </div>
                    <div className="text-[10px] font-sans text-zinc-500 uppercase font-semibold">
                      SENIOR EDITOR • {heroArticle.category.toUpperCase()} BUREAU
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle 3 Cols: 3 News Articles WITH IMAGES (No Category Badge, No Description) */}
            <div className="lg:col-span-3 lg:border-l lg:border-zinc-200 lg:pl-6 space-y-4">
              <div className="space-y-3.5">
                {allArticles.slice(1, 4).map((art) => (
                  <Link
                    key={art.id}
                    href={`/${art.category}/${art.slug}`}
                    className="group block space-y-1.5 pb-3 border-b border-zinc-100 last:border-0 last:pb-0"
                  >
                    <div className="aspect-[16/8.5] overflow-hidden bg-black relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-serif font-semibold text-zinc-800 group-hover:underline leading-snug line-clamp-2">
                        {art.title}
                      </h3>
                      <span className="text-[10px] font-sans text-zinc-400 font-bold uppercase block pt-0.5">
                        {art.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right 3 Cols: Wire Stack */}
            <div className="lg:col-span-3 lg:border-l lg:border-zinc-200 lg:pl-6 space-y-4">
              <div className="space-y-3.5">
                {allArticles.slice(4, 13).map((art, idx) => (
                  <Link
                    key={art.id}
                    href={`/${art.category}/${art.slug}`}
                    className="group block space-y-1 pb-3 border-b border-zinc-100 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest">
                      <span className="text-zinc-500">0{idx + 1} • {art.category}</span>
                      <span className="text-zinc-400">{art.date}</span>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-zinc-800 group-hover:underline leading-snug line-clamp-2">
                      {art.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: EDITORIAL FRONT & FEATURED SPOTLIGHT ================= */}
        <section className="pt-2">
          <div className="mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              FEATURED EDITORIAL FRONT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 6 Cols: Secondary Lead Feature Story */}
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
                    <span>EDITORIAL FOCUS</span>
                    <span>•</span>
                    <span className="text-black">{heroArticle.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-black leading-tight tracking-tight group-hover:text-zinc-700 transition-colors">
                    {heroArticle.title}
                  </h3>
                </div>
              </Link>

              <p className="text-sm font-sans text-zinc-700 leading-snug line-clamp-3">
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
                      {secondaryHeroGrid[0].category}
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

              {/* 4 News Articles Without Image Below Spotlight Card */}
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

        {/* ================= SECTION 3: TOP GLOBAL NEWS (4-COLUMN GRID) ================= */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              TOP GLOBAL NEWS
            </h2>
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
                  <span>NEWS #{idx + 1}</span>
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

        {/* ================= SECTION 4: 3-ARTICLE CULTURE & ATHLETICS JOURNAL SHOWCASE ================= */}
        <section className="space-y-6 pt-4 border-t border-zinc-200">
          <div className="mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              CULTURE &amp; ATHLETICS JOURNAL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalArticles.map((art) => (
              <Link
                key={art.id}
                href={`/${art.category}/${art.slug}`}
                className="group block space-y-3 pb-4 border-b border-zinc-100 md:border-0 md:pb-0"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-zinc-900 group-hover:underline leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs font-sans text-zinc-600 line-clamp-3 leading-relaxed">
                    {art.shortdescription}
                  </p>
                  <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] font-sans text-zinc-400 font-bold uppercase tracking-wider">
                    <span>BY {art.author.name}</span>
                    <span>{art.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SUPER DESIGN — INVESTIGATIVE SPECIAL REPORTS (LARGE NUMBERED DOSSIER) ================= */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-serif font-extrabold text-black uppercase tracking-tight">
              INVESTIGATIVE SPECIAL REPORTS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left 7 Cols: Cinematic Widescreen Feature with Overlaid Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {allArticles[2] && (
                <Link
                  href={`/${allArticles[2].category}/${allArticles[2].slug}`}
                  className="group block relative overflow-hidden bg-black aspect-[16/10] sm:aspect-[16/9.5] flex flex-col justify-end p-6 sm:p-8 h-full"
                >
                  <img
                    src={allArticles[2].image}
                    alt={allArticles[2].title}
                    className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="relative z-10 space-y-3 text-white">
                    <span className="text-[10px] font-sans font-black uppercase tracking-widest bg-white text-black px-2.5 py-1 inline-block">
                      FEATURED INVESTIGATION • {allArticles[2].category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white leading-tight group-hover:text-zinc-200 transition-colors">
                      {allArticles[2].title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-zinc-300 line-clamp-2 leading-relaxed">
                      {allArticles[2].shortdescription}
                    </p>
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-sans text-zinc-300 uppercase tracking-widest font-extrabold">
                      <div className="flex items-center gap-2">
                        <img
                          src={allArticles[2].author.image}
                          alt={allArticles[2].author.name}
                          className="w-6 h-6 rounded-full object-cover border border-white/30"
                        />
                        <span>BY {allArticles[2].author.name}</span>
                      </div>
                      <span>{allArticles[2].date}</span>
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Right 5 Cols: Large Numbered Dossier Items (01, 02, 03) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                {allArticles.slice(3, 6).map((art, idx) => (
                  <Link
                    key={art.id}
                    href={`/${art.category}/${art.slug}`}
                    className="group flex gap-4 items-start pb-4 border-b border-zinc-200 last:border-0 last:pb-0"
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
          </div>
        </section>

        {/* ================= SECTION 6: GLOBAL MARKET INTELLIGENCE DIGEST ================= */}
        <section>
          <div className="mb-6">
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
          <div className="mb-6">
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
