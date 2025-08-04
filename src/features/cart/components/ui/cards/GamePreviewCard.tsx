import Button from "@/components/ui/buttons/Button";
import CommonCard from "@/components/ui/cards/CommonCard";
import { Game } from "@/types/game";
import Image from "next/image";

type GamePreviewCardProps = {
  game: Game;
};

export default function GamePreviewCard({ game }: GamePreviewCardProps) {
  return (
    <CommonCard width="380px" height="436px">
      <div className="flex flex-col items-center justify-center max-h-[436px]">
        <Image
          className="rounded-lg flex-shrink-0"
          src={game.image}
          alt={game.name}
          width={300}
          height={340}
        />
        <div className="flex-shrink-0">
          <h4 className="mb-2 text-sm">{game.name}</h4>
          <div className="flex justify-between mb-3">
            <h3 className="text-sm">{game.genre}</h3>
            <h3 className="text-sm">${game.price}</h3>
          </div>
        </div>
        <Button variant="secondary" className="flex-shrink-0">
          ADD TO CART
        </Button>
      </div>
    </CommonCard>
  );
}
