import FeaturedCard from "../cards/FeaturedCard";
import SideCard from "../cards/SideCard";

interface Props {
  articles: any[];
}

export default function HeroSection({ articles }: Props) {
  if (!articles || articles.length === 0) {
    return (
      <div className="py-20 text-center text-zinc-400">No news available.</div>
    );
  }

  const featured = articles[0];
  const sideNews = articles.slice(1, 5);

  return (
    <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      {featured && <FeaturedCard article={featured} />}

      <div className="flex flex-col gap-4">
        {sideNews.map((article, index) => (
          <SideCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
