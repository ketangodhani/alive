import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

interface Props {
  article: any;
}

export default function NewsCard({ article }: Props) {
  const slug = slugify(article.title);
  return (
    <Link href={`/article/${slug}`}>
      <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-2 hover:border-zinc-700">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={article?.urlToImage || "/fallback.jpg"}
            alt={article?.title || "news"}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
            {new Date(article?.publishedAt).toDateString()}
          </p>

          <h2 className="line-clamp-3 text-xl font-semibold leading-snug text-white">
            {article?.title}
          </h2>

          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-400">
            {article?.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
