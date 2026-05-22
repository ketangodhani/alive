import Navbar from "@/components/layout/Navbar";
import { getArticleBySlug } from "@/services/newsApi";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Globe, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

interface MetadataProps {
  params: Promise<{
    slug?: string;
  }>;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return {
      title: "Article | ALIVE NEWS",
    };
  }

  const article = await getArticleBySlug(slug);
  const title = article ? article.title : slug.replaceAll("-", " ");

  return {
    title: `${title} | ALIVE NEWS`,
    description: article?.description || "Read the latest editorial news article on ALIVE NEWS.",
    openGraph: {
      title: `${title} | ALIVE NEWS`,
      description: article?.description || "Read the latest editorial news article on ALIVE NEWS.",
      images: [article?.urlToImage || "/fallback.jpg"],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="container-main flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <div className="mx-auto max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
              <Globe className="h-8 w-8" />
            </div>
            <h1 className="editorial-title mt-6 text-3xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Article Not Found
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              We couldn't retrieve the news article you requested. It may have expired or been removed by the source.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </main>
      </>
    );
  }

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const cleanContent = article.content
    ? article.content.replace(/\[\+\d+\s+chars\]/g, "")
    : "";

  return (
    <>
      <Navbar />

      <main className="container-main py-10">
        <div className="mx-auto max-w-4xl">
          {/* Back Navigation Button */}
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-550 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to News
          </Link>

          {/* Category / Source Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-zinc-205 bg-zinc-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-800 shadow-xs dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
              {article.source?.name || "News Source"}
            </span>
            {article.author && (
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-zinc-500">
                <User className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-600" />
                By {article.author}
              </span>
            )}
          </div>

          {/* Dynamic Article Title */}
          <h1 className="editorial-title mt-6 text-4xl leading-tight text-zinc-900 dark:text-white md:text-6xl lg:text-7xl">
            {article.title}
          </h1>

          {/* Article Date & Metadata Panel */}
          {formattedDate && (
            <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-zinc-200 dark:border-zinc-800 py-4 text-sm text-zinc-550 dark:text-zinc-400">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-zinc-400 dark:text-zinc-650" />
                {formattedDate}
              </span>
            </div>
          )}

          {/* Big Featured Image */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <img
              src={article.urlToImage || "/fallback.jpg"}
              alt={article.title || "article image"}
              className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px]"
            />
            {/* Ambient Gradient Overlay for extra premium styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Article Content Layout */}
          <div className="mt-10 space-y-8">
            {/* Description/Lead paragraph */}
            {article.description && (
              <p className="border-l-2 border-zinc-900 dark:border-white pl-5 text-xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 md:text-2xl">
                {article.description}
              </p>
            )}

            {/* Content paragraph */}
            {cleanContent && (
              <div className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-350 font-light">
                <p>{cleanContent}</p>
              </div>
            )}

            {/* Supplemental editorial paragraph for premium aesthetic and longer reading layout */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-100/55 p-6 text-sm leading-relaxed text-zinc-500 md:p-8 dark:border-zinc-900 dark:bg-zinc-950/50">
              <p>
                This article is fetched in real-time from our global news feeds powered by the News API. Due to copyright restrictions and syndication agreements, the full interactive article including comments, multimedia rich-media, and high-fidelity graphics is hosted directly by the publisher.
              </p>
            </div>
          </div>

          {/* CTA Box to Original Source */}
          <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-100 p-8 text-center md:p-12 dark:border-zinc-800 dark:bg-gradient-to-br dark:from-zinc-950 dark:to-zinc-900">
            <h3 className="editorial-title text-2xl uppercase tracking-wider text-zinc-900 dark:text-white">
              Read the Full Story
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
              Continue reading this coverage on the publisher's official website.
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02] shadow-md active:scale-[0.98]"
            >
              Read on {article.source?.name || "Original Source"}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
