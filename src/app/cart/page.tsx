import RedirectButton from "@/components/ui/buttons/RedirectButton";
import CartList from "@/features/cart/components/container/CartList";
import CartReceipt from "@/features/cart/components/container/CartReceipt";
import CartItemCounter from "@/features/cart/components/ui/counters/CartItemCounter";
import Image from "next/image";
import arrowLeftIcon from "@/../public/icons/arrowLeft.svg";

export default async function Home() {
  return (
    <main className="px-4 sm:px-6 lg:px-global pt-8 pb-16">
      <div className="mb-4 w-28">
        <RedirectButton href="/" className="flex">
          <Image
            src={arrowLeftIcon}
            alt="arrowLeftIcon"
            width={16}
            height={16}
          />
          Back to Catalog
        </RedirectButton>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-3xl sm:text-4xl mb-1">Your Cart</h1>
        <CartItemCounter />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Cart List */}
        <div className="flex-1 w-full">
          <CartList />
        </div>
        <div className="w-full lg:max-w-md">
          <CartReceipt />
        </div>
      </div>
    </main>
  );
}
