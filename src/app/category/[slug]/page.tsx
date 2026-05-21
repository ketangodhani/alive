import Navbar from "@/components/layout/Navbar";
import NewsCard from "@/components/cards/NewsCard";

import { getNewsByCategory } from "@/services/newsApi";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: Props) {

  const articles = await getNewsByCategory(params.slug);

  return (
    <>
      <Navbar />

      <main className="container-main py-10">

        <div className="mb-12">

          <h1 className="editorial-title text-6xl uppercase md:text-8xl">
            {params.slug}
          </h1>

          <p className="mt-4 text-zinc-500">
            Latest {params.slug} news and updates.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {articles.map((article: any, index: number) => (
            <NewsCard
              key={index}
              article={article}
            />
          ))}

        </div>

      </main>
    </>
  );
}