export default function SelectSkeleton() {
  return (
    <div className="flex items-center gap-4 justify-end">
      <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
      <div className="flex items-center gap-2">
        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
