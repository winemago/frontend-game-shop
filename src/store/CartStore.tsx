import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Game } from "@/types/game";

interface CartState {
  games: Game[];
  addGame: (game: Game) => void;
  removeGame: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      games: [],

      addGame: (game: Game) => {
        const { games } = get();
        // Check if game already exists to prevent duplicates
        if (games.some((existingGame) => existingGame.id === game.id)) {
          return;
        }
        set({ games: [...games, game] });
      },

      removeGame: (id: string) => {
        const { games } = get();
        set({ games: games.filter((game) => game.id !== id) });
      },

      clearCart: () => {
        set({ games: [] });
      },

      isInCart: (id: string) => {
        const { games } = get();
        return games.some((game) => game.id === id);
      },
    }),
    {
      name: "cart-storage", // localStorage key
      // You can also specify which parts of the state to persist
      // partialize: (state) => ({ games: state.games }),
    }
  )
);
