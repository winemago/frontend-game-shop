import { Game } from "@/types/game";

export type GamesResponse = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};
