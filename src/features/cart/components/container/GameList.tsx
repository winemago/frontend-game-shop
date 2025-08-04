import { apiService } from "@/services/apiService";
import GamePreviewCard from "../ui/cards/GamePreviewCard";
import { GamesResponse } from "../../types/gameResponse";
import { endpoints } from "@/constants/endpoints";

export const revalidate = 60;

export default async function GameList() {
  const response = await apiService<GamesResponse>(endpoints.games);
  const games = response.games;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
      {games.map((game) => (
        <GamePreviewCard key={game.id} game={game} />
      ))}
    </div>
  );
}
