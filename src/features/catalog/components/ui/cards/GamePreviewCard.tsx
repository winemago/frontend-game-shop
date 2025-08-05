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
    <CommonCard width="380px" height="436px">
      <div className="flex flex-col h-full">
        <div className="w-full h-7 mb-4 overflow-hidden rounded-lg">
          <Image
            className="object-cover"
            src={game.image}
            alt={game.name}
            width={300}
            height={200}
          />
        </div>
        <div className="flex-shrink-0 space-y-3">
          <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            GENRE
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 truncate flex-1 mr-4">
              {game.name}
            </h3>
            <span className="text-lg font-bold text-gray-900 flex-shrink-0">
              ${game.price}
            </span>
          </div>

          <div className="pt-2 w-full">
            <GameCartButton game={game} />
          </div>
        </div>
      </div>
    </CommonCard>
  );
}
