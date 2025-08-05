"use client";

import { useLocalStorageGames } from "@/hooks/useLocalStorageGames"; // adjust path if needed
import GameFullCard from "../ui/cards/FullGameCard";

export default function CartList() {
  const { games, removeGame } = useLocalStorageGames();

  if (games.length === 0) {
    return <p className="text-center py-10">Your cart is empty.</p>;
  }

  return (
    <div className="flex flex-col">
      {games.map((game, index) => {
        const isLast = index === games.length - 1;
        return (
          <div
            key={game.id}
            className={!isLast ? "border-b border-gray-300 pb-4 mb-4" : ""}
          >
            <GameFullCard game={game} onRemove={() => removeGame(game.id)} />
          </div>
        );
      })}
    </div>
  );
}
