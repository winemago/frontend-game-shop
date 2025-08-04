import { ENDPOINTS } from "@/config/endpoints";
import GameList from "./GameList";
import { apiService } from "@/services/apiService";
import { GamesResponse } from "../../types/gameResponse";
import GenreSelect from "../ui/selects/GenreSelect";

type Props = {
  searchParams: {
    genre?: string;
    page?: string;
  };
};

export default async function GameContainer({ searchParams }: Props) {
  const params = new URLSearchParams();

  if (searchParams?.genre) {
    params.set("genre", searchParams.genre);
  }

  if (searchParams?.page) {
    params.set("page", searchParams.page);
  }

  const queryString = params.toString();
  const endpoint = queryString
    ? `${ENDPOINTS.GAMES}?${queryString}`
    : ENDPOINTS.GAMES;

  const response = await apiService<GamesResponse>(endpoint);
  const games = response.games;
  const availableFilters = response.availableFilters;

  // Convert available filters to select options
  const genreOptions =
    availableFilters?.map((genre: string) => ({
      value: genre,
      label: genre.charAt(0).toUpperCase() + genre.slice(1), // Capitalize first letter
    })) || [];

  return (
    <>
      <div className="mb-6">
        <GenreSelect options={genreOptions} />
      </div>
      <GameList games={games} />
    </>
  );
}
