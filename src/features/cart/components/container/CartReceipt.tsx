"use client";

import Button from "@/components/ui/buttons/Button";
import ListItem from "../ui/list/ListItem";
import { useCartStore } from "@/store/CartStore";

export default function CartReceipt() {
  const { games } = useCartStore();

  const total = games.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="border border-stroke-secondary rounded-lg p-6 w-full max-w-sm mx-auto flex flex-col gap-4 h-full">
      <h3 className="text-lg font-bold mb-1">Order Summary</h3>
      <p className="text-text-primary mb-4">
        {games.length} {games.length === 1 ? "item" : "items"}
      </p>
      <div className="space-y-2 mb-4">
        {games.map((game) => (
          <ListItem name={game.name} price={game.price} key={game.id} />
        ))}
      </div>
      <hr className="border-t border-neutral my-4" />
      <div className="flex justify-between font-semibold mb-12">
        <span>Order Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Button variant="default" size="default">
        Checkout
      </Button>
    </div>
  );
}
