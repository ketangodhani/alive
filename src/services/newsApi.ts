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