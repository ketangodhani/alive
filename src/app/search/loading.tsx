import SkeletonCard from "@/components/ui/SkeletonCard";

export default function LoadingSearch() {

  return (
    <main className="container-main py-10">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>

    </main>
  );
}