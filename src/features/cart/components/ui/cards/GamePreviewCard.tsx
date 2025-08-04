import Button from "@/components/ui/buttons/Button";
import CommonCard from "@/components/ui/cards/CommonCard";
import { Game } from "@/types/game";
import Image from "next/image";

type GamePreviewCardProps = {
  game: Game;
};

export default function GamePreviewCard({ game }: GamePreviewCardProps) {
  return (
    <CommonCard>
      <Image src={game.image} alt={game.name} width={200} height={150} />
      <h4>{game.name}</h4>
      <div>
        <h3>{game.genre}</h3>
        <h3>${game.price}</h3>
      </div>
      <Button variant="secondary">ADD TO CART</Button>
    </CommonCard>
  );
}
