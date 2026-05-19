import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import { getTopHeadlines } from "@/services/newsApi";

export default async function HomePage() {

  const news = await getTopHeadlines();

  return (
    <>
      <Navbar />

      <main className="container-main py-8">

        <HeroSection articles={news.articles} />

      </main>
    </>
  );
}