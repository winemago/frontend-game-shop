"use client";

import { useCartStore } from "@/store/CartStore";

export default function CartItemCounter() {
  const { games } = useCartStore();

  return (
    <span className="text-xl text-text-primary font-medium">
      {games.length} {games.length === 1 ? "Item" : "Items"}
    </span>
  );
}
