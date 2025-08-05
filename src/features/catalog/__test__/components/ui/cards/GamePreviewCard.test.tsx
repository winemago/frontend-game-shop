import { render, screen } from "@testing-library/react";
import GamePreviewCard from "@/features/catalog/components/ui/cards/GamePreviewCard";
import { Game } from "@/types/game";
import { act } from "react";

jest.mock("@/features/catalog/components/ui/buttons/GameCartButton", () => {
  const Mock = () => <button>Mock Add to Cart</button>;
  Mock.displayName = "MockGameCartButton";
  return Mock;
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt} />;
  },
}));

const mockGame: Game = {
  id: "123",
  name: "The Legend of Zelda",
  genre: "Adventure",
  image: "/zeldabotw.jpeg",
  description: "An epic action-adventure game",
  price: 59.99,
  isNew: true,
};

describe("GamePreviewCard", () => {
  it("renders game data properly", async () => {
    await act(async () => {
      render(<GamePreviewCard game={mockGame} />);
    });

    expect(screen.getByText("The Legend of Zelda")).toBeInTheDocument();
    expect(screen.getByText("Adventure")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/zeldabotw.jpeg");
    expect(img).toHaveAttribute("alt", "The Legend of Zelda");
  });
});
