"use client";

import { Game } from "@/types/game";
import { useLocalStorageGames } from "@/hooks/useLocalStorageGames";
import { useMemo } from "react";
import Button from "@/components/ui/buttons/Button";

type GameCartButtonProps = {
  game: Game;
};

export default function GameCartButton({ game }: GameCartButtonProps) {
  const { games, addGame, removeGame } = useLocalStorageGames();

  const isInCart = useMemo(() => {
    return games.some((item) => item.id === game.id);
  }, [games, game.id]);

  const handleClick = () => {
    if (isInCart) {
      removeGame(game.id);
    } else {
      addGame(game);
    }
  };

  return (
    <Button variant={isInCart ? "secondary" : "primary"} onClick={handleClick}>
      {isInCart ? "REMOVE" : "ADD TO CART"}
    </Button>
  );
}
