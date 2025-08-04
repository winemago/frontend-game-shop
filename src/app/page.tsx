import { Suspense } from "react";
import GameGridSkeleton from "@/components/ui/skeletons/GameGridSkeleton";
import GameContainer from "@/features/cart/components/container/GamesContainer";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex flex-col ">
      <div className="px-32 py-8 border-b border-stroke">
        <h1 className="font-bold text-4xl">Top Sellers</h1>
      </div>
      <div className="px-32 py-8">
        <Suspense key={Math.random()} fallback={<GameGridSkeleton count={8} />}>
          <GameContainer searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
