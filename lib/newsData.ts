import worldData from '../public/data/world.json';
import businessData from '../public/data/business.json';
import techData from '../public/data/technology.json';
import entData from '../public/data/entertainment.json';
import usData from '../public/data/us.json';

export interface ArticleSection {
  subtitle?: string;
  text: string;
}

export interface Author {
  name: string;
  role?: string;
  image?: string;
  bio?: string;
  email?: string;
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
