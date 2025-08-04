import GameCardSkeleton from "./GameCardSkeleton";

type GameGridSkeletonProps = {
  count?: number;
};

export default function GameGridSkeleton({ count = 8 }: GameGridSkeletonProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
      {Array.from({ length: count }).map((_, index) => (
        <GameCardSkeleton key={index} />
      ))}
    </div>
  );
}
