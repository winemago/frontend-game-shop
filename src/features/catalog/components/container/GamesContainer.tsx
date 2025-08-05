import { ENDPOINTS, ITEMS_PER_PAGE } from "@/config/endpoints";
import GameList from "./GameList";
import { apiService } from "@/services/apiService";
import { GamesResponse } from "../../../../types/gameResponse";
import GenreSelect from "../ui/selects/GenreSelect";
import Pagination from "@/components/ui/pagination/Pagination";
import EmptyGames from "../ui/cards/EmptyGames";

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
  } else {
    // Default to page 1 if no page parameter is provided
    params.set("page", "1");
  }

  const queryString = params.toString();
  const endpoint = queryString
    ? `${ENDPOINTS.GAMES}?${queryString}`
    : ENDPOINTS.GAMES;

  const response = await apiService<GamesResponse>(endpoint);
  const games = response.games;
  const availableFilters = response.availableFilters;
  const { totalPages, currentPage } = response;

  const genreOptions =
    availableFilters?.map((genre: string) => ({
      value: genre,
      label: genre.charAt(0).toUpperCase() + genre.slice(1), // Capitalize first letter
    })) || [];

  return (
    <>
      <div className="mb-32 px-global py-8 border-b border-stroke">
        <GenreSelect options={genreOptions} />
      </div>
      {games.length > 0 ? (
        <>
          <GameList games={games} />{" "}
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </>
      ) : (
        <EmptyGames />
      )}
    </>
  );
}
