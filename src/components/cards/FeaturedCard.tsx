import Image from "next/image";

interface Props {
  article: any;
}

export default function FeaturedCard({ article }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl">
      
      <div className="relative h-125 w-full overflow-hidden">
        <Image
          src={article?.urlToImage || "/fallback.jpg"}
          alt={article?.title || "news"}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-6 md:p-10">
        
        <span className="mb-4 inline-block border border-white px-3 py-1 text-xs uppercase tracking-widest">
          Breaking
        </span>

        <h1 className="editorial-title max-w-4xl text-4xl leading-none md:text-7xl">
          {article?.title}
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          {article?.description}
        </p>
      </div>
    </article>
  );
}