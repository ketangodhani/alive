export default function SkeletonCard() {

  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">

      <div className="h-56 bg-zinc-800" />

      <div className="space-y-4 p-5">

        <div className="h-3 w-24 rounded bg-zinc-800" />

        <div className="h-5 w-full rounded bg-zinc-800" />

        <div className="h-5 w-4/5 rounded bg-zinc-800" />

        <div className="pt-4 space-y-2">

          <div className="h-3 w-full rounded bg-zinc-800" />

          <div className="h-3 w-5/6 rounded bg-zinc-800" />

        </div>

      </div>

    </div>
  );
}