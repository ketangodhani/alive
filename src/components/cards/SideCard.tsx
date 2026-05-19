import Image from "next/image";

interface Props {
  article: any;
}

export default function SideCard({ article }: Props) {
  return (
    <article className="group flex gap-4 border-b border-zinc-800 pb-4">
      
      <div className="relative h-24 w-32 overflow-hidden rounded-xl">
        <Image
          src={article?.urlToImage || "/fallback.jpg"}
          alt={article?.title || "news"}
          fill
          className="object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex-1">
        <h3 className="line-clamp-3 text-sm font-semibold leading-snug text-zinc-100">
          {article?.title}
        </h3>

        <p className="mt-2 text-xs text-zinc-500">
          {article?.publishedAt ? new Date(article.publishedAt).toDateString() : null}
        </p>
      </div>
    </article>
  );
}