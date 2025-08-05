import CommonCard from "@/components/ui/cards/CommonCard";

type EmptyGamesProps = {
  message?: string;
};

export default function EmptyCaseCard({ message }: EmptyGamesProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-global py-global sm:py-1">
      <CommonCard width="100%" height="auto">
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 text-gray-400"></div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {message}
          </h3>
        </div>
      </CommonCard>
    </div>
  );
}
