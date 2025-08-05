import { render, screen } from "@testing-library/react";
import GameList from "@/features/catalog/components/container/GameList";
import { Game } from "@/types/game";

jest.mock("@/features/catalog/components/ui/cards/GamePreviewCard", () => ({
  __esModule: true,
  default: ({ game }: { game: Game }) => <div>{game.name}</div>,
}));

const mockGames: Game[] = [
  {
    id: "1",
    name: "Zelda",
    genre: "Adventure",
    image: "/zeldabotw.jpeg",
    description: "Zelda game",
    price: 59.99,
    isNew: true,
  },
  {
    id: "2",
    name: "Mario",
    genre: "Platformer",
    image: "/zeldabotw.jpeg",
    description: "Mario game",
    price: 49.99,
    isNew: false,
  },
];

describe("GameList", () => {
  it("renders a GamePreviewCard for each game", () => {
    render(<GameList games={mockGames} />);

    expect(screen.getByText("Zelda")).toBeInTheDocument();
    expect(screen.getByText("Mario")).toBeInTheDocument();
  });

  it("renders the correct number of cards", () => {
    render(<GameList games={mockGames} />);
    const cards = screen.getAllByText(/(Zelda|Mario)/);
    expect(cards).toHaveLength(2);
  });
});
