"use client";

import { useLocalStorageGames } from "@/hooks/useLocalStorageGames";

export default function CartItemCounter() {
  const { games } = useLocalStorageGames();

  return (
    <span className="text-xl text-text-primary font-medium">
      {games.length} {games.length === 1 ? "Item" : "Items"}
    </span>
  );
}
