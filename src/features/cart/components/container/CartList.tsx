"use client";

import GameFullCard from "../ui/cards/FullGameCard";
import { useCartStore } from "@/store/CartStore";

export default function CartList() {
  const { games, removeGame } = useCartStore();

  if (games.length === 0) {
    return <p className="text-center py-10">Your cart is empty.</p>;
  }

  return (
    <div className="flex flex-col">
      {games.map((game) => {
        return (
          <GameFullCard
            key={game.id}
            game={game}
            onRemove={() => removeGame(game.id)}
          />
        );
      })}
    </div>
  );
}
