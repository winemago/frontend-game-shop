import GamePreviewCard from "@/features/cart/components/ui/cards/GamePreviewCard";

export default async function Home() {
  return (
    <main className="flex flex-col ">
      <div className="px-32 py-8 border-b border-stroke">
        <h1 className="font-bold text-4xl">Top Sellers</h1>
      </div>
      <div className="px-32 py-8">
        <GamePreviewCard />
      </div>
    </main>
  );
}
