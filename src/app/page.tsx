import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import {
  getBusinessNews,
  getTechnologyNews,
  getTopHeadlines,
} from "@/services/newsApi";
import NewsSection from "@/components/sections/NewsSection";

export default async function HomePage() {
  const news = await getTopHeadlines();
  const technologyNews = await getTechnologyNews();
  const businessNews = await getBusinessNews();
  return (
    <>
      <Navbar />

      <main className="container-main py-8">
        <HeroSection articles={news.articles} />
        <NewsSection title="Technology" articles={technologyNews} />
        <NewsSection title="Business" articles={businessNews} />
      </main>
    </>
  );
}
