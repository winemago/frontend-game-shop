"use client";

import { useLocalStorageGames } from "@/hooks/useLocalStorageGames";
import Button from "@/components/ui/buttons/Button";
import ListItem from "../ui/list/ListItem";

export default function CartReceipt() {
  const { games } = useLocalStorageGames();

  const total = games.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="border border-gray-300 rounded-lg p-6 w-full max-w-sm mx-auto flex flex-col h-full">
      <h3 className="text-lg font-bold mb-1">Order Summary</h3>
      <p className="text-sm text-gray-600 mb-4">
        {games.length} {games.length === 1 ? "item" : "items"}
      </p>

      <div className="space-y-2 mb-4">
        {games.map((game) => (
          <ListItem name={game.name} price={game.price} key={game.id} />
        ))}
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <div className="flex justify-between font-semibold text-sm mb-6">
        <span>Order Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Button variant="default" size="default">
        Checkout
      </Button>
    </div>
  );
}
