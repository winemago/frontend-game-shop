import CommonCard from "@/components/ui/cards/CommonCard";

type EmptyGamesProps = {
  message?: string;
};

export default function EmptyGames({
  message = "No games found. Try adjusting your filters or search criteria.",
}: EmptyGamesProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-global py-8">
      <CommonCard width="100%" height="auto">
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 text-gray-400"></div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            No Games Available
          </h3>
          <p className="text-sm text-gray-500">{message}</p>
        </div>
      </CommonCard>
    </div>
  );
}
