import { Suspense } from "react";
import GameGridSkeleton from "@/components/ui/skeletons/GameGridSkeleton";
import GameContainer from "@/features/catalog/components/container/GamesContainer";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="flex flex-col">
      {/* Title Section */}
      <div className="px-4 sm:px-6 lg:px-global py-6 sm:py-8">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center sm:text-left">
          Top Sellers
        </h1>
      </div>
      <div className="">
        <Suspense key={Math.random()} fallback={<GameGridSkeleton count={8} />}>
          <GameContainer searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
