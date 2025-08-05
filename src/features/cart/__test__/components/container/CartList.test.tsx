import { render, screen, fireEvent } from "@testing-library/react";
import { useCartStore } from "@/store/CartStore";
import CartList from "@/features/cart/components/container/CartList";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt} />,
}));

const mockGame = {
  id: "1",
  name: "Test Game",
  genre: "Adventure",
  image: "/game.jpg",
  description: "A great game",
  price: 39.99,
  isNew: true,
};

beforeEach(() => {
  useCartStore.setState({
    games: [mockGame],
    addGame: () => {},
    removeGame: jest.fn(),
    isInCart: () => false,
  });
});

describe("CartList", () => {
  it("renders empty message if no games", () => {
    useCartStore.setState({ games: [] });
    render(<CartList />);
    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("renders a list of games from the store", () => {
    render(<CartList />);
    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("Adventure")).toBeInTheDocument();
    expect(screen.getByText("$39.99")).toBeInTheDocument();
  });

  it("calls removeGame when remove button is clicked", () => {
    const removeGame = jest.fn();
    useCartStore.setState({ games: [mockGame], removeGame });

    render(<CartList />);
    fireEvent.click(screen.getByRole("button")); // Remove button
    expect(removeGame).toHaveBeenCalledWith(mockGame.id);
  });
});
