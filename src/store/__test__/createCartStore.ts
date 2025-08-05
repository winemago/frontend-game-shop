import { create } from "zustand";
import { Game } from "@/types/game";

interface CartState {
  games: Game[];
  addGame: (game: Game) => void;
  removeGame: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
}

export const createCartStore = () =>
  create<CartState>((set, get) => ({
    games: [],
    addGame: (game: Game) => {
      const { games } = get();
      if (games.some((g) => g.id === game.id)) return;
      set({ games: [...games, game] });
    },
    removeGame: (id: string) => {
      set({ games: get().games.filter((g) => g.id !== id) });
    },
    clearCart: () => {
      set({ games: [] });
    },
    isInCart: (id: string) => get().games.some((g) => g.id === id),
  }));
