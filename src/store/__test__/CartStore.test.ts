import { createCartStore } from "./createCartStore";
import { Game } from "@/types/game";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  genre: "Action",
  image: "/test.jpg",
  description: "Test game",
  price: 9.99,
  isNew: true,
};

describe("CartStore (test instance)", () => {
  let store: ReturnType<typeof createCartStore>;

  beforeEach(() => {
    store = createCartStore();
  });

  it("adds a game to the cart", () => {
    store.getState().addGame(mockGame);
    expect(store.getState().games).toHaveLength(1);
  });

  it("prevents adding duplicate games", () => {
    store.getState().addGame(mockGame);
    store.getState().addGame(mockGame);
    expect(store.getState().games).toHaveLength(1);
  });

  it("removes a game from the cart", () => {
    store.getState().addGame(mockGame);
    store.getState().removeGame(mockGame.id);
    expect(store.getState().games).toHaveLength(0);
  });

  it("clears the cart", () => {
    store.getState().addGame(mockGame);
    store.getState().clearCart();
    expect(store.getState().games).toHaveLength(0);
  });

  it("checks if a game is in the cart", () => {
    store.getState().addGame(mockGame);
    expect(store.getState().isInCart(mockGame.id)).toBe(true);
    expect(store.getState().isInCart("non-existent-id")).toBe(false);
  });
});
