import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

interface MetadataProps {
  params: {
    slug?: string;
  };
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const title = params?.slug?.replaceAll("-", " ") || "Article";

  return {
    title: `${title} | ALIVE NEWS`,
    description: "Read the latest editorial news article on ALIVE NEWS.",
  };
}

export default function ArticlePage({ params }: Props) {
  return (
    <>
      <Navbar />

      <main className="container-main py-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
            Editorial Article
          </p>

          <h1 className="editorial-title text-5xl leading-none md:text-7xl">
            {params?.slug?.replaceAll("-", " ") || "Article"}
          </h1>

          <div className="mt-10 overflow-hidden rounded-3xl">
            <img
              src="/fallback.jpg"
              alt="article"
              className="h-125 w-full object-cover"
            />
          </div>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-300">
            <p>
              This article page is connected with the News API powered editorial
              system.
            </p>

            <p>
              Full article content can later be fetched dynamically and rendered
              with better SEO optimization.
            </p>

            <p>
              The platform is designed with a modern editorial architecture
              inspired by WIRED and premium media publications.
            </p>
          </div>

          <button className="mt-10 rounded-full border border-zinc-700 px-6 py-3 text-sm uppercase tracking-widest transition hover:border-white">
            Read Original Source
          </button>
        </div>
      </main>
    </>
  );
}
