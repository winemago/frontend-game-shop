import { Suspense } from "react";
import GameList from "@/features/cart/components/container/GameList";
import GameGridSkeleton from "@/components/ui/skeletons/GameGridSkeleton";

export default async function Home() {
  return (
    <main className="flex flex-col ">
      <div className="px-32 py-8 border-b border-stroke">
        <h1 className="font-bold text-4xl">Top Sellers</h1>
      </div>
      <div className="px-32 py-8">
        <Suspense fallback={<GameGridSkeleton count={8} />}>
          <GameList />
        </Suspense>
      </div>
    </main>
  );
}
