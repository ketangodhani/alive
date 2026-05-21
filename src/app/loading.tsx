import Navbar from "@/components/layout/Navbar";
import SkeletonCard from "@/components/ui/SkeletonCard";

export default function Loading() {

  return (
    <>
      <Navbar />

      <main className="container-main py-10">

        <div className="mb-10 space-y-4">

          <div className="h-4 w-32 animate-pulse rounded bg-zinc-800" />

          <div className="h-16 w-80 animate-pulse rounded bg-zinc-800" />

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}

        </div>

      </main>
    </>
  );
}