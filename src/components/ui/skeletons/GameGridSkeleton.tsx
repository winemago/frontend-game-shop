import GameCardSkeleton from "./GameCardSkeleton";
import SelectSkeleton from "./SelectSkeleton";

type GameGridSkeletonProps = {
  count?: number;
};

export default function GameGridSkeleton({ count = 8 }: GameGridSkeletonProps) {
  return (
    <>
      <div className="mb-32 px-global">
        <SelectSkeleton />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 px-global">
        {Array.from({ length: count }).map((_, index) => (
          <GameCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
