"use client";

import { useEffect, useState } from "react";
import { Game } from "@/types/game";
import { LOCAL_STORAGE_KEY } from "@/config/localStorage";

export function useLocalStorageGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY.CART);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Game[];
        setGames(parsed);
      } catch (err) {
        console.error("Error parsing localStorage games:", err);
      }
    }
  }, []);

  const saveGames = (games: Game[]) => {
    setGames(games);
    localStorage.setItem(LOCAL_STORAGE_KEY.CART, JSON.stringify(games));
  };

  const removeGame = (id: string) => {
    const updated = games.filter((game) => game.id !== id);
    saveGames(updated);
  };

  const addGame = (game: Game) => {
    const updated = [...games, game];
    saveGames(updated);
  };

  return {
    games,
    addGame,
    removeGame,
    saveGames,
  };
}
