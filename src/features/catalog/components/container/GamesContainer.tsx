import { ENDPOINTS } from "@/config/endpoints";
import GameList from "./GameList";
import { apiService } from "@/services/apiService";
import { GamesResponse } from "../../../../types/gameResponse";
import GenreSelect from "../ui/selects/GenreSelect";
import Pagination from "@/components/ui/pagination/Pagination";
import EmptyCaseCard from "@/components/ui/cards/EmptyCaseCard";

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
  const { games, totalPages, currentPage, availableFilters } = response;

  const genreOptions =
    availableFilters?.map((genre: string) => ({
      value: genre,
      label: genre.charAt(0).toUpperCase() + genre.slice(1),
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
        <EmptyCaseCard message="No games found. Try adjusting your filters or search criteria." />
      )}
    </>
  );
}
