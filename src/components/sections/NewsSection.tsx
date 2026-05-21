import NewsCard from "../cards/NewsCard";
import FadeIn from "../ui/FadeIn";

interface Props {
  title: string;
  articles: any[];
}

export default function NewsSection({ title, articles }: Props) {
  if (!articles?.length) return null;

  return (
    <FadeIn>
      <section className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="editorial-title text-5xl uppercase">{title}</h2>

          <button className="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition">
            View All
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {articles.slice(0, 4).map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
