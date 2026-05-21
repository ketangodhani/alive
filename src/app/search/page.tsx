import Navbar from "@/components/layout/Navbar";
import NewsCard from "@/components/cards/NewsCard";

import { searchNews } from "@/services/newsApi";

interface Props {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({
  searchParams,
}: Props) {

  const query = searchParams.q || "";

  const articles = query
    ? await searchNews(query)
    : [];

  return (
    <>
      <Navbar />

      <main className="container-main py-10">

        <div className="mb-10">

          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Search Results
          </p>

          <h1 className="editorial-title mt-4 text-5xl md:text-7xl">
            {query}
          </h1>

        </div>

        {articles.length === 0 ? (

          <div className="py-20 text-center text-zinc-500">
            No articles found.
          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {articles.map((article: any, index: number) => (
              <NewsCard
                key={index}
                article={article}
              />
            ))}

          </div>

        )}

      </main>
    </>
  );
}