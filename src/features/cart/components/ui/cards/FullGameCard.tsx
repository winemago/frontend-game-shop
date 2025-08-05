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
    <div className="relative flex sm:flex-col md:flex-row gap-4 pb-4 items-start md:items-center">
      <div className=" md:w-[120px] h-[160px] md:h-[80px] relative shrink-0">
        <Image
          src={game.image}
          alt={game.name}
          width={120}
          height={180}
          className="object-cover rounded-md w-full md:w-[120px] h-auto"
        />
      </div>
      <div className="flex flex-col flex-grow min-w-0 w-full">
        <h4 className="text-text-secondary text-xs uppercase mb-1">
          {game.genre}
        </h4>
        <h3 className="font-bold text-lg text-text-primary leading-snug break-words">
          {game.name}
        </h3>
        {game.description && (
          <p className="text-sm text-text-secondary line-clamp-2 break-words">
            {game.description}
          </p>
        )}
      </div>
      <div className="text-sm h-full flex flex-grow justify-end font-semibold text-right md:ml-2 md:mt-auto whitespace-nowrap">
        ${game.price.toFixed(2)}
      </div>

      {onRemove && (
        <Button
          variant="transparent"
          size="sm"
          onClick={onRemove}
          className="p-2"
        >
          <Image src={cancelIcon} alt="Remove" width={16} height={16} />
        </Button>
      )}
    </div>
  );
}
