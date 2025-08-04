type SeparatorProps = {
  className?: string;
};

export default function Separator({ className = "" }: SeparatorProps) {
  return (
    <div
      className={`w-px h-[22px] bg-stroke-secondary ${className}`}
      aria-hidden="true"
    />
  );
}
