import worldData from '../public/data/world.json';
import businessData from '../public/data/business.json';
import techData from '../public/data/technology.json';
import entData from '../public/data/entertainment.json';
import usData from '../public/data/us.json';

export interface ArticleSection {
  subtitle?: string;
  text: string;
}

export interface AuthorSocials {
  twitter?: string;
  linkedin?: string;
  website?: string;
  email?: string;
}

export interface Author {
  name: string;
  slug?: string;
  role?: string;
  image?: string;
  bio?: string;
  email?: string;
  socials?: AuthorSocials;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  shortdescription: string;
  category: string; // "world" | "business" | "technology" | "entertainment" | "us"
  date: string;
  author: Author;
  image: string;
  description?: ArticleSection[];
}

export const CATEGORIES = [
  { slug: 'home', label: 'HOME', path: '/' },
  { slug: 'world', label: 'WORLD NEWS', path: '/world' },
  { slug: 'business', label: 'BUSINESS', path: '/business' },
  { slug: 'entertainment', label: 'ENTERTAINMENT', path: '/entertainment' },
  { slug: 'technology', label: 'TECHNOLOGY', path: '/technology' },
  { slug: 'us', label: 'SPORTS', path: '/us' },
];

export function getAllArticles(): Article[] {
  return [
    ...(worldData as Article[]),
    ...(businessData as Article[]),
    ...(techData as Article[]),
    ...(entData as Article[]),
    ...(usData as Article[]),
  ];
}

export function getArticlesByCategory(category: string): Article[] {
  const normalized = category.toLowerCase();
  const all = getAllArticles();
  return all.filter((item) => item.category.toLowerCase() === normalized);
}

export function getArticleBySlug(category: string, slug: string): Article | undefined {
  const normalizedCategory = category.toLowerCase();
  const normalizedSlug = slug.toLowerCase();
  const all = getAllArticles();
  return all.find(
    (item) =>
      item.category.toLowerCase() === normalizedCategory &&
      item.slug.toLowerCase() === normalizedSlug
  );
}

export function getHeroArticle(): Article {
  const all = getAllArticles();
  return all[0];
}

export function getFeaturedArticles(): Article[] {
  const all = getAllArticles();
  return all.slice(1, 5);
}

export function getRecommendedArticles(category: string, currentSlug: string, count: number = 3): Article[] {
  const categoryArticles = getArticlesByCategory(category).filter(
    (item) => item.slug.toLowerCase() !== currentSlug.toLowerCase()
  );
  if (categoryArticles.length >= count) {
    return categoryArticles.slice(0, count);
  }
  const otherArticles = getAllArticles().filter(
    (item) => item.slug.toLowerCase() !== currentSlug.toLowerCase()
  );
  return [...categoryArticles, ...otherArticles].slice(0, count);
}

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return getAllArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.shortdescription.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      article.author.name.toLowerCase().includes(q)
  );
}

export function slugifyAuthor(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAllAuthors(): Author[] {
  const articles = getAllArticles();
  const authorMap = new Map<string, Author>();

  articles.forEach((art) => {
    if (!art.author || !art.author.name) return;
    const slug = slugifyAuthor(art.author.name);
    if (!authorMap.has(slug)) {
      authorMap.set(slug, {
        name: art.author.name,
        slug,
        role: art.author.role || 'Senior Correspondent',
        image: art.author.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
        bio: art.author.bio || `${art.author.name} is a senior editorial correspondent covering international developments, policy telemetry, and investigative reporting for Domain Name.`,
        email: art.author.email || `${slug}@domainname.com`,
        socials: {
          twitter: `https://twitter.com/${slug}`,
          linkedin: `https://linkedin.com/in/${slug}`,
          website: `https://domainname.com`,
          email: `mailto:${slug}@domainname.com`,
        },
      });
    }
  });

  return Array.from(authorMap.values());
}

export function getAuthorBySlug(slug: string): Author | undefined {
  const authors = getAllAuthors();
  const norm = slug.toLowerCase();
  return authors.find((a) => a.slug && a.slug.toLowerCase() === norm);
}

export function getArticlesByAuthor(authorNameOrSlug: string): Article[] {
  const norm = authorNameOrSlug.toLowerCase();
  const all = getAllArticles();
  return all.filter(
    (a) =>
      a.author.name.toLowerCase() === norm ||
      slugifyAuthor(a.author.name) === norm
  );
}
