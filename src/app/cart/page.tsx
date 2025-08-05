import CartList from "@/features/cart/components/container/CartList";
import CartReceipt from "@/features/cart/components/container/CartReceipt";

export default async function Home() {
  return (
    <main className="px-global pt-8">
      <h1 className="font-bold text-4xl">Your Cart</h1>
      <div className="flex justify-between w-full">
        <CartList />
        <CartReceipt />
      </div>
    </main>
  );
}
