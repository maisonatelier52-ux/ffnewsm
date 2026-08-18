import React from 'react';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles, getRecommendedArticles } from '@/lib/newsData';
import ArticleDetailClient from './ArticleDetailClient';

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    category: article.category.toLowerCase(),
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  const article = getArticleBySlug(category, slug);
  if (!article) {
    notFound();
  }

  const recommendedArticles = getRecommendedArticles(category, slug, 3);

  return (
    <ArticleDetailClient
      article={article}
      recommendedArticles={recommendedArticles}
    />
  );
}
