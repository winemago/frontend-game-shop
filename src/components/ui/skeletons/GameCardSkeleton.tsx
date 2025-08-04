import CommonCard from "@/components/ui/cards/CommonCard";

export default function GameCardSkeleton() {
  return (
    <CommonCard width="380px" height="436px">
      <div className="flex flex-col items-center justify-center max-h-[436px]">
        {/* Image skeleton */}
        <div className="w-[300px] h-[270px] bg-gray-200 rounded-lg animate-pulse mb-4" />

        {/* Title skeleton */}
        <div className="w-full mb-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
        </div>

        {/* Genre and price skeleton */}
        <div className="flex justify-between w-full mb-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
        </div>

        {/* Button skeleton */}
        <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </CommonCard>
  );
}
