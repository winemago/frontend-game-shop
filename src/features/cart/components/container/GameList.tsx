import { apiService } from "@/services/apiService";
import GamePreviewCard from "../ui/cards/GamePreviewCard";
import { GamesResponse } from "../../types/gameResponse";
import { ENDPOINTS } from "@/config/endpoints";
import { REVALIDATION_TIMES } from "@/config/revalidation";

export const revalidate = REVALIDATION_TIMES.PRODUCTS;

export default async function GameList() {
  const response = await apiService<GamesResponse>(ENDPOINTS.GAMES);
  const games = response.games;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
      {games.map((game) => (
        <GamePreviewCard key={game.id} game={game} />
      ))}
    </div>
  );
}
