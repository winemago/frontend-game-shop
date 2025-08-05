import CommonCard from "@/components/ui/cards/CommonCard";

export default function GameCardSkeleton() {
  return (
    <CommonCard>
      <div className="flex flex-col h-full min-h-[400px] sm:min-h-[436px] animate-pulse">
        <div className="w-full mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-200 h-[280px] flex-shrink-0" />
        <div className="flex flex-col flex-1 justify-between">
          <div className="space-y-2 sm:space-y-3">
            <div className="h-3 w-1/4 bg-gray-200 rounded" />
            <div className="flex items-start sm:items-center justify-between gap-2">
              <div className="h-5 sm:h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-5 sm:h-6 w-1/6 bg-gray-200 rounded mt-0.5 sm:mt-0" />
            </div>
          </div>
          <div className="w-full mt-4 sm:mt-6">
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </CommonCard>
  );
}
