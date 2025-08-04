import GamePreviewCard from "../ui/cards/GamePreviewCard";
import { REVALIDATION_TIMES } from "@/config/revalidation";
import { Game } from "@/types/game";

export const revalidate = REVALIDATION_TIMES.PRODUCTS;

type GameListProps = {
  games: Game[];
};

export default async function GameList({ games }: GameListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 px-global py-8 ">
      {games.map((game) => (
        <GamePreviewCard key={game.id} game={game} />
      ))}
    </div>
  );
}
