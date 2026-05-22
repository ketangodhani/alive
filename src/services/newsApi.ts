import { slugify } from "@/lib/slugify";

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export async function getTopHeadlines() {
  const res = await fetch(
    `${BASE_URL}/everything?q=india&language=en&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();

  return {
    ...data,
    articles: data.articles.filter(
      (article: any) =>
        article.title && article.description && article.urlToImage,
    ),
  };
}

export async function getTechnologyNews() {
  const res = await fetch(
    `${BASE_URL}/everything?q=technology&language=en&sortBy=publishedAt&pageSize=8&apiKey=${API_KEY}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await res.json();

  return data.articles.filter(
    (article: any) =>
      article.title && article.description && article.urlToImage,
  );
}

export async function getBusinessNews() {
  const res = await fetch(
    `${BASE_URL}/everything?q=business&language=en&sortBy=publishedAt&pageSize=8&apiKey=${API_KEY}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await res.json();

  return data.articles.filter(
    (article: any) =>
      article.title && article.description && article.urlToImage,
  );
}
export async function getNewsByCategory(category: string) {
  const res = await fetch(
    `${BASE_URL}/everything?q=${category}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category news");
  }

  const data = await res.json();

  return data.articles.filter(
    (article: any) =>
      article.title && article.description && article.urlToImage,
  );
}
export async function searchNews(query: string) {

  const res = await fetch(
    `${BASE_URL}/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to search news");
  }

  const data = await res.json();

  return data.articles.filter(
    (article: any) =>
      article.title &&
      article.description &&
      article.urlToImage
  );
}

export async function getArticleBySlug(slug: string) {
  if (!slug) return null;

  const query = slug.split("-").join(" ");

  try {
    const res = await fetch(
      `${BASE_URL}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=relevance&pageSize=10&apiKey=${API_KEY}`,
      {
        next: {
          revalidate: 3600, // cache for 1 hour
        },
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!data.articles || data.articles.length === 0) {
      return null;
    }

    // Exact match
    const matched = data.articles.find(
      (article: any) => slugify(article.title || "") === slug
    );

    if (matched) return matched;

    // Loose match fallback
    const looseMatched = data.articles.find((article: any) => {
      const artSlug = slugify(article.title || "");
      return artSlug.includes(slug) || slug.includes(artSlug);
    });

    return looseMatched || data.articles[0] || null;
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return null;
  }
}