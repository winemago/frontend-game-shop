import { render, screen } from "@testing-library/react";
import { useCartStore } from "@/store/CartStore";
import CartReceipt from "@/features/cart/components/container/CartReceipt";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

const mockGames = [
  {
    id: "1",
    name: "Game One",
    genre: "Action",
    image: "/game1.jpg",
    description: "Game One Description",
    price: 10.0,
    isNew: false,
  },
  {
    id: "2",
    name: "Game Two",
    genre: "Puzzle",
    image: "/game2.jpg",
    description: "Game Two Description",
    price: 20.0,
    isNew: false,
  },
];

beforeEach(() => {
  useCartStore.setState({ games: mockGames });
});

describe("CartReceipt", () => {
  it("renders correct number of items", () => {
    render(<CartReceipt />);
    expect(screen.getByText("2 items")).toBeInTheDocument();
  });

  it("renders each game's name and price", () => {
    render(<CartReceipt />);
    mockGames.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
      expect(screen.getByText(`$${game.price.toFixed(2)}`)).toBeInTheDocument();
    });
  });

  it("renders the correct total", () => {
    render(<CartReceipt />);
    expect(screen.getByText("$30.00")).toBeInTheDocument(); // 10 + 20
  });

  it("renders the checkout button", () => {
    render(<CartReceipt />);
    expect(
      screen.getByRole("button", { name: "Checkout" })
    ).toBeInTheDocument();
  });
});
