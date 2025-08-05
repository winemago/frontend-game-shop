import CommonCard from "@/components/ui/cards/CommonCard";
import { Game } from "@/types/game";
import Image from "next/image";
import dynamic from "next/dynamic";
import SkeletonButton from "../skeleton/SkeletonButton";

const GameCartButton = dynamic(() => import("../buttons/GameCartButton"), {
  ssr: false,
  loading: () => <SkeletonButton />,
});

type GamePreviewCardProps = {
  game: Game;
};

export default function GamePreviewCard({ game }: GamePreviewCardProps) {
  return (
    <div className="w-full max-w-[380px] mx-auto">
      <CommonCard>
        <div className="flex flex-col h-full min-h-[400px] sm:min-h-[436px]">
          {/* Game Image */}
          <div className="w-full mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
            <Image
              className="w-full object-cover rounded-lg"
              src={game.image}
              alt={game.name}
              width={300}
              height={300}
              style={{
                height: "280px",
                transform: "scale(1, 0.9)",
                transformOrigin: "top",
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>

          {/* Game Info Section */}
          <div className="flex flex-col flex-1 justify-between">
            <div className="space-y-2 sm:space-y-3">
              {/* Genre Label */}
              <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                {game.genre}
              </div>

              {/* Product Name and Price Row */}
              <div className="flex items-start sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-text-primary truncate flex-1">
                  {game.name}
                </h3>
                <span className="text-base sm:text-lg font-bold text-text-primary flex-shrink-0 mt-0.5 sm:mt-0">
                  ${game.price}
                </span>
              </div>
            </div>

            {/* Add to Cart Button - Always at bottom */}
            <div className="w-full mt-4 sm:mt-6">
              <GameCartButton game={game} />
            </div>
          </div>
        </div>
      </CommonCard>
    </div>
  );
}
