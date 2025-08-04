import { ReactNode } from "react";

type CommonCardProps = {
  children: ReactNode;
  width?: string;
  height?: string;
};

export default function CommonCard({
  children,
  width,
  height,
}: CommonCardProps) {
  return (
    <div
      className="border border-stroke-secondary rounded-common p-6"
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
}
