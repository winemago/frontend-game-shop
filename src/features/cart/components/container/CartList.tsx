"use client";

import { useLocalStorageGames } from "@/hooks/useLocalStorageGames"; // adjust path if needed
import GameFullCard from "../ui/cards/FullGameCard";

export default function CartList() {
  const { games, removeGame } = useLocalStorageGames();

  if (games.length === 0) {
    return <p className="text-center py-10">Your cart is empty.</p>;
  }

  return (
    <div className="flex flex-col gap-6 ">
      {games.map((game) => (
        <GameFullCard
          key={game.id}
          game={game}
          onRemove={() => removeGame(game.id)}
        />
      ))}
    </div>
  );
}
