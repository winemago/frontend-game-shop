import Button from "@/components/ui/buttons/Button";
import { Game } from "@/types/game";
import Image from "next/image";
import cancelIcon from "@/../public/icons/cancel.svg";

type GameFullCardProps = {
  game: Game;
  onRemove?: () => void;
};

export default function GameFullCard({ game, onRemove }: GameFullCardProps) {
  return (
    <div className="relative flex gap-4 border-b pb-4 items-start">
      <div className="w-[120px] h-[80px] relative shrink-0">
        <Image src={game.image} alt={game.name} width={256} height={156} />
      </div>
      <div className="flex flex-col flex-grow min-w-0">
        <h4 className=" text-text-secondary uppercase mb-1">{game.genre}</h4>
        <h3 className="font-bold text-lg text-text-primary leading-snug break-words">
          {game.name}
        </h3>
        {game.description && (
          <p className="text-sm text-text-secondary line-clamp-2 break-words">
            {game.description}
          </p>
        )}
      </div>
      <div className="ml-2 mt-auto whitespace-nowrap font-semibold text-sm shrink-0">
        ${game.price.toFixed(2)}
      </div>

      {onRemove && (
        <Button
          variant="transparent"
          onClick={onRemove}
          className="absolute top-2 right-2 p-1"
        >
          <Image src={cancelIcon} alt="Remove" width={16} height={16} />
        </Button>
      )}
    </div>
  );
}
