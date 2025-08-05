"use client";

import { Game } from "@/types/game";
import Button from "@/components/ui/buttons/Button";
import { useCartStore } from "@/store/CartStore";

type GameCartButtonProps = {
  game: Game;
};

export default function GameCartButton({ game }: GameCartButtonProps) {
  const { addGame, removeGame, isInCart } = useCartStore();

  const gameIsInCart = isInCart(game.id);

  const handleClick = () => {
    if (gameIsInCart) {
      removeGame(game.id);
    } else {
      addGame(game);
    }
  };

  return (
    <Button
      variant={gameIsInCart ? "secondary" : "primary"}
      onClick={handleClick}
    >
      {gameIsInCart ? "REMOVE" : "ADD TO CART"}
    </Button>
  );
}
